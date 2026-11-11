# Installed-package smoke test, run by CTest in script mode:
#   cmake -DBUILD_DIR=... -DCONSUMER_DIR=... -DWORK_DIR=... -DCONFIG=... -P run_install_test.cmake
# Installs the already built project into a temporary prefix, builds a separate
# consumer against that prefix with find_package(genogrove), and runs it.

foreach(var BUILD_DIR CONSUMER_DIR WORK_DIR)
    if(NOT DEFINED ${var})
        message(FATAL_ERROR "${var} must be set")
    endif()
endforeach()

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

set(config_args "")
if(DEFINED CONFIG AND NOT CONFIG STREQUAL "")
    set(config_args --config "${CONFIG}")
endif()

run_step("install" ${CMAKE_COMMAND} --install "${BUILD_DIR}" --prefix "${prefix}" ${config_args})

# The package must not carry test dependencies.
file(GLOB_RECURSE leaked "${prefix}/*gtest*" "${prefix}/*gmock*")
if(leaked)
    message(FATAL_ERROR "test dependencies were installed with the package:\n${leaked}")
endif()

# Only the package prefix is given: no standard, include or library paths.
run_step("configure consumer" ${CMAKE_COMMAND} -S "${CONSUMER_DIR}" -B "${consumer_build}"
    "-DCMAKE_PREFIX_PATH=${prefix}" "-DCMAKE_BUILD_TYPE=${CONFIG}")
run_step("build consumer" ${CMAKE_COMMAND} --build "${consumer_build}" ${config_args})

if(CMAKE_HOST_WIN32)
    set(exe "${consumer_build}/consumer.exe")
else()
    set(exe "${consumer_build}/consumer")
endif()
if(NOT EXISTS "${exe}" AND DEFINED CONFIG)
    set(exe "${consumer_build}/${CONFIG}/consumer")
endif()
run_step("run consumer" "${exe}")
