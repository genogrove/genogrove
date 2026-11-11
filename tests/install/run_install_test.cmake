# Installed-package smoke test, run by CTest in script mode (see tests/CMakeLists.txt).
# Like the CLI end-to-end tests, it targets the Linux/macOS CI matrix.
# Installs the built project into a temporary prefix, builds a separate consumer
# against it with find_package(genogrove), and runs it.

set(prefix "${WORK_DIR}/prefix")
set(consumer_build "${WORK_DIR}/consumer-build")
file(REMOVE_RECURSE "${WORK_DIR}")

# Run one step; stop with its output if it fails.
function(run_step description)
    execute_process(
        COMMAND ${ARGN}
        RESULT_VARIABLE result
        OUTPUT_VARIABLE output
        ERROR_VARIABLE output
    )
    if(NOT result EQUAL 0)
        message(FATAL_ERROR "${description} failed (${result}):\n${output}")
    endif()
endfunction()

# Install what is built now, not an older build.
run_step("build library" ${CMAKE_COMMAND} --build "${BUILD_DIR}" --target genogrove)
run_step("install" ${CMAKE_COMMAND} --install "${BUILD_DIR}" --prefix "${prefix}")

# Only the library, its headers and its package files may be installed.
file(GLOB_RECURSE installed RELATIVE "${prefix}" "${prefix}/*")
list(FILTER installed EXCLUDE REGEX "^(include/genogrove/|lib/cmake/genogrove/|lib/libgenogrove\\.)")
if(installed)
    message(FATAL_ERROR "unexpected files installed with the package:\n${installed}")
endif()

# The consumer builds with the project's compiler, generator and flags (a
# sanitizer build needs its flags to link). The only genogrove setting it gets
# is the prefix: no standard, include or library paths.
set(consumer_args "-DCMAKE_PREFIX_PATH=${prefix}" "-DCMAKE_BUILD_TYPE=${CONFIG}")
if(GENERATOR)
    list(APPEND consumer_args -G "${GENERATOR}")
endif()
if(CXX_COMPILER)
    list(APPEND consumer_args "-DCMAKE_CXX_COMPILER=${CXX_COMPILER}")
endif()
if(TOOLCHAIN_FILE)
    list(APPEND consumer_args "-DCMAKE_TOOLCHAIN_FILE=${TOOLCHAIN_FILE}")
endif()
if(CXX_FLAGS)
    list(APPEND consumer_args "-DCMAKE_CXX_FLAGS=${CXX_FLAGS}")
endif()
if(LINKER_FLAGS)
    list(APPEND consumer_args "-DCMAKE_EXE_LINKER_FLAGS=${LINKER_FLAGS}")
endif()

run_step("configure consumer" ${CMAKE_COMMAND} -S "${CONSUMER_DIR}" -B "${consumer_build}"
    ${consumer_args})
run_step("build consumer" ${CMAKE_COMMAND} --build "${consumer_build}")
# Run inside WORK_DIR: the consumer writes its scratch file to the working directory.
run_step("run consumer" ${CMAKE_COMMAND} -E chdir "${WORK_DIR}" "${consumer_build}/consumer")
