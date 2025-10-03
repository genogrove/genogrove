#ifndef GENOGROVE_STRUCTURE_INTERSECT_HPP
#define GENOGROVE_STRUCTURE_INTERSECT_HPP

#include <genogrove/data_type/query_result.hpp>
#include "genogrove/structure/grove/grove.hpp"

namespace ggt = genogrove::data_type;

namespace genogrove::structure::grove1 {
    template<typename query_type>
    ggt::query_result<query_type> intersect(query_type& query, grove<query_type>& grove) {
        ggt::query_result<query_type> result{query};
        // we need to iterate over all root nodes (unfortunately)
        for (const auto& [index, root] : get_root_nodes()) {

        }


    }

    template<typename query_type>
    ggt::query_result<query_type>
}

#endif //GENOGROVE_STRUCTURE_INTERSECT_HPP
