#ifndef GENOGROVE_STRUCTURE_QUERY_HPP
#define GENOGROVE_STRUCTURE_QUERY_HPP

namespace genogrove::structure {
    template<typename query_type, typename key_type>
    class query {
        public:



            query(query_type query) :  {}
            query() = default;
            ~query() = default;

            virtual bool matches(const key<key_type>& key1) const = 0;

    };

}

#endif //GENOGROVE_STRUCTURE_QUERY_HPP
