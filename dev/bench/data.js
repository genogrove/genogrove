window.BENCHMARK_DATA = {
  "lastUpdate": 1775617733788,
  "repoUrl": "https://github.com/genogrove/genogrove",
  "entries": {
    "C++ Benchmark": [
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@northwestern.edu",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90037aaec669e41e35bc199590f4093a1e54a1ee",
          "message": "Merge pull request #265 from genogrove/fix/raii-node-allocation-141\n\nRAII-protect node allocations against exception leaks",
          "timestamp": "2026-03-26T15:34:52-05:00",
          "tree_id": "760fe08bab3addf4c8b375595c867fc1b972bcfe",
          "url": "https://github.com/genogrove/genogrove/commit/90037aaec669e41e35bc199590f4093a1e54a1ee"
        },
        "date": 1774557923194,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.29456237986288,
            "unit": "us/iter",
            "extra": "iterations: 21329\ncpu: 32.29367912232172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.490207388901945,
            "unit": "us/iter",
            "extra": "iterations: 92869\ncpu: 7.488704551572646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.081791321018386,
            "unit": "us/iter",
            "extra": "iterations: 137182\ncpu: 5.0807080374976294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.265370311919618,
            "unit": "us/iter",
            "extra": "iterations: 164113\ncpu: 4.264425676210906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.955458261830339,
            "unit": "us/iter",
            "extra": "iterations: 176565\ncpu: 3.95486972503044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8538913370837027,
            "unit": "us/iter",
            "extra": "iterations: 180632\ncpu: 3.853550710837507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.637473437475759,
            "unit": "us/iter",
            "extra": "iterations: 191981\ncpu: 3.6373122236054596 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.191863514043,
            "unit": "us/iter",
            "extra": "iterations: 2601\ncpu: 269.18506612841185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.77797435110317,
            "unit": "us/iter",
            "extra": "iterations: 16297\ncpu: 42.77507025832978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.228485141222077,
            "unit": "us/iter",
            "extra": "iterations: 23084\ncpu: 30.228164182983907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.446854753457824,
            "unit": "us/iter",
            "extra": "iterations: 27622\ncpu: 25.445297444066334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.865545321904875,
            "unit": "us/iter",
            "extra": "iterations: 27415\ncpu: 25.864984132774087 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.965525954416577,
            "unit": "us/iter",
            "extra": "iterations: 27818\ncpu: 24.963907469983436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.574898655781148,
            "unit": "us/iter",
            "extra": "iterations: 28418\ncpu: 24.57454993314097 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 627.5584396396814,
            "unit": "us/iter",
            "extra": "iterations: 1110\ncpu: 627.4903846846855 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.45078779934344,
            "unit": "us/iter",
            "extra": "iterations: 5721\ncpu: 122.4370971858065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.9906440920766,
            "unit": "us/iter",
            "extra": "iterations: 9775\ncpu: 69.98631590792836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.204223005729204,
            "unit": "us/iter",
            "extra": "iterations: 11345\ncpu: 61.19890233583063 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.338126810926155,
            "unit": "us/iter",
            "extra": "iterations: 10906\ncpu: 63.33605519897296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.21694296609856,
            "unit": "us/iter",
            "extra": "iterations: 11800\ncpu: 60.21467974576289 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.49846942221969,
            "unit": "us/iter",
            "extra": "iterations: 11250\ncpu: 62.492502399999864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3670.3167225128345,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3670.2218376963215 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.3221417623539,
            "unit": "us/iter",
            "extra": "iterations: 783\ncpu: 895.2334980842908 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 625.6871008849482,
            "unit": "us/iter",
            "extra": "iterations: 1130\ncpu: 625.6765044247811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 514.200217901687,
            "unit": "us/iter",
            "extra": "iterations: 1363\ncpu: 514.1705304475406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 514.0853249122301,
            "unit": "us/iter",
            "extra": "iterations: 1425\ncpu: 514.0650954385974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 458.44760474306656,
            "unit": "us/iter",
            "extra": "iterations: 1518\ncpu: 458.38887812911673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 445.8922324841059,
            "unit": "us/iter",
            "extra": "iterations: 1570\ncpu: 445.86101528662556 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.011765503252185,
            "unit": "us/iter",
            "extra": "iterations: 28107\ncpu: 25.009604795958307 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.942800224457461,
            "unit": "us/iter",
            "extra": "iterations: 117617\ncpu: 5.942534012940322 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.6615025072207,
            "unit": "us/iter",
            "extra": "iterations: 149568\ncpu: 4.66108059210527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.089803546272719,
            "unit": "us/iter",
            "extra": "iterations: 171786\ncpu: 4.089570285122172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8723097789910157,
            "unit": "us/iter",
            "extra": "iterations: 180264\ncpu: 3.8721614021657196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.847689411751506,
            "unit": "us/iter",
            "extra": "iterations: 182457\ncpu: 3.8474988956301996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6806438200242564,
            "unit": "us/iter",
            "extra": "iterations: 190648\ncpu: 3.680568949057935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.8332119246826,
            "unit": "us/iter",
            "extra": "iterations: 4780\ncpu: 147.82277782426823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.0914165631099,
            "unit": "us/iter",
            "extra": "iterations: 22532\ncpu: 31.090165142907885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.435612861910176,
            "unit": "us/iter",
            "extra": "iterations: 29669\ncpu: 23.433536452189145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.695283677175656,
            "unit": "us/iter",
            "extra": "iterations: 33591\ncpu: 20.694587925337018 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.69513665222855,
            "unit": "us/iter",
            "extra": "iterations: 33706\ncpu: 20.694059603631388 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.685328194888825,
            "unit": "us/iter",
            "extra": "iterations: 35549\ncpu: 19.683204647106695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.07433440479326,
            "unit": "us/iter",
            "extra": "iterations: 36710\ncpu: 19.073360446744584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.1268234428433,
            "unit": "us/iter",
            "extra": "iterations: 2039\ncpu: 342.0946591466399 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.56722074824074,
            "unit": "us/iter",
            "extra": "iterations: 10478\ncpu: 66.56528173315537 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.4334416615753,
            "unit": "us/iter",
            "extra": "iterations: 14733\ncpu: 47.43062655263693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.15904100568763,
            "unit": "us/iter",
            "extra": "iterations: 16705\ncpu: 42.15755516312486 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.50159198953929,
            "unit": "us/iter",
            "extra": "iterations: 16828\ncpu: 41.500558652246006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.22514444252762,
            "unit": "us/iter",
            "extra": "iterations: 17391\ncpu: 40.21855724225162 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.733276458241924,
            "unit": "us/iter",
            "extra": "iterations: 18104\ncpu: 38.73085876049492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1854.962224867796,
            "unit": "us/iter",
            "extra": "iterations: 378\ncpu: 1854.703526455028 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 409.51173446659675,
            "unit": "us/iter",
            "extra": "iterations: 1706\ncpu: 409.49040855803185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.9898860455691,
            "unit": "us/iter",
            "extra": "iterations: 2501\ncpu: 278.96072051179425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.99851589745865,
            "unit": "us/iter",
            "extra": "iterations: 2925\ncpu: 234.98751076923205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 227.31407617505178,
            "unit": "us/iter",
            "extra": "iterations: 3085\ncpu: 227.2809072933534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.15409262117262,
            "unit": "us/iter",
            "extra": "iterations: 3239\ncpu: 216.14254492127174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 207.68144355554762,
            "unit": "us/iter",
            "extra": "iterations: 3375\ncpu: 207.65005511111247 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@northwestern.edu",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64d563df7eac11d203b86d01b4d506901fbf1a0c",
          "message": "Merge pull request #266 from genogrove/refactor/nodiscard-pure-queries-150\n\nAdd [[nodiscard]] to non-trivial pure query methods",
          "timestamp": "2026-03-27T12:12:04-05:00",
          "tree_id": "68e68ba18a9aa4b5be3ce193bbe4dcbddae1c6af",
          "url": "https://github.com/genogrove/genogrove/commit/64d563df7eac11d203b86d01b4d506901fbf1a0c"
        },
        "date": 1774631776840,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.74007687269097,
            "unit": "us/iter",
            "extra": "iterations: 21373\ncpu: 32.73545487297057 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.697520997620651,
            "unit": "us/iter",
            "extra": "iterations: 91177\ncpu: 7.6950531932395245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.11835300066008,
            "unit": "us/iter",
            "extra": "iterations: 136470\ncpu: 5.117590767201582 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.287210664186282,
            "unit": "us/iter",
            "extra": "iterations: 163388\ncpu: 4.28610044801332 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.92095250469015,
            "unit": "us/iter",
            "extra": "iterations: 178565\ncpu: 3.9203283230196293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.917922623590144,
            "unit": "us/iter",
            "extra": "iterations: 179525\ncpu: 3.917485559114328 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6560430305281617,
            "unit": "us/iter",
            "extra": "iterations: 191399\ncpu: 3.6556563670656574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 271.06000578257436,
            "unit": "us/iter",
            "extra": "iterations: 2594\ncpu: 271.046393986122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.179343234528574,
            "unit": "us/iter",
            "extra": "iterations: 16126\ncpu: 43.17695150688328 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.632120209973348,
            "unit": "us/iter",
            "extra": "iterations: 22860\ncpu: 30.628315310586125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.54369170699379,
            "unit": "us/iter",
            "extra": "iterations: 27276\ncpu: 25.541161057339774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.738292715428628,
            "unit": "us/iter",
            "extra": "iterations: 27016\ncpu: 25.735858343204015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.214721711344854,
            "unit": "us/iter",
            "extra": "iterations: 28165\ncpu: 25.21308556719328 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.834239602425047,
            "unit": "us/iter",
            "extra": "iterations: 28372\ncpu: 24.83130459608066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 631.190819981945,
            "unit": "us/iter",
            "extra": "iterations: 1111\ncpu: 631.158673267327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 126.24374338340368,
            "unit": "us/iter",
            "extra": "iterations: 5592\ncpu: 126.23961713161677 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.54610326086902,
            "unit": "us/iter",
            "extra": "iterations: 9752\ncpu: 70.5411450984415 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.80906075344136,
            "unit": "us/iter",
            "extra": "iterations: 11308\ncpu: 60.806182260346645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.25535394083938,
            "unit": "us/iter",
            "extra": "iterations: 10886\ncpu: 63.248392889950345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.07753116099438,
            "unit": "us/iter",
            "extra": "iterations: 11938\ncpu: 60.07131655218639 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 63.46056144490463,
            "unit": "us/iter",
            "extra": "iterations: 11018\ncpu: 63.4598996188058 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3761.324489473856,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3759.743284210515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 896.2406015325716,
            "unit": "us/iter",
            "extra": "iterations: 783\ncpu: 896.1624316730547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.2420168439681,
            "unit": "us/iter",
            "extra": "iterations: 1128\ncpu: 621.1507730496451 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.2751914580184,
            "unit": "us/iter",
            "extra": "iterations: 1358\ncpu: 516.2262562592053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 493.4240578278792,
            "unit": "us/iter",
            "extra": "iterations: 1418\ncpu: 493.36253032440106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 497.766840185693,
            "unit": "us/iter",
            "extra": "iterations: 1508\ncpu: 497.7590437665788 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 451.6726819355016,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 451.62516258064363 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 24.933089686415364,
            "unit": "us/iter",
            "extra": "iterations: 28031\ncpu: 24.932101352074515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.951491802032397,
            "unit": "us/iter",
            "extra": "iterations: 118383\ncpu: 5.950842756138969 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 5.099513492523418,
            "unit": "us/iter",
            "extra": "iterations: 157087\ncpu: 5.099295696015574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9375069070016844,
            "unit": "us/iter",
            "extra": "iterations: 177863\ncpu: 3.9372732159021355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7757312078546326,
            "unit": "us/iter",
            "extra": "iterations: 185370\ncpu: 3.775286691481895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.707769599386696,
            "unit": "us/iter",
            "extra": "iterations: 187812\ncpu: 3.7073959012203774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.578680566161495,
            "unit": "us/iter",
            "extra": "iterations: 168927\ncpu: 3.5781662552463733 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 146.9233336145036,
            "unit": "us/iter",
            "extra": "iterations: 4742\ncpu: 146.9159160691692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.236403369672253,
            "unit": "us/iter",
            "extra": "iterations: 22198\ncpu: 31.232657987206277 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.53054712426354,
            "unit": "us/iter",
            "extra": "iterations: 30653\ncpu: 22.529633053861026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.21305440797191,
            "unit": "us/iter",
            "extra": "iterations: 34517\ncpu: 20.211461598632674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.007891025079353,
            "unit": "us/iter",
            "extra": "iterations: 34329\ncpu: 20.00535669550531 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.557928174041912,
            "unit": "us/iter",
            "extra": "iterations: 36129\ncpu: 19.557192892136424 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.177723441110437,
            "unit": "us/iter",
            "extra": "iterations: 36372\ncpu: 19.175820466292787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 341.5920502193787,
            "unit": "us/iter",
            "extra": "iterations: 2051\ncpu: 341.53027011213817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.54129164281699,
            "unit": "us/iter",
            "extra": "iterations: 10482\ncpu: 66.53538151116179 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.28255018587199,
            "unit": "us/iter",
            "extra": "iterations: 15064\ncpu: 47.280948353691194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.6034566370652,
            "unit": "us/iter",
            "extra": "iterations: 16777\ncpu: 41.60035906300288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.75142671088889,
            "unit": "us/iter",
            "extra": "iterations: 16585\ncpu: 41.74834495025597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.76476744053284,
            "unit": "us/iter",
            "extra": "iterations: 17574\ncpu: 39.76373677022871 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.60888470629052,
            "unit": "us/iter",
            "extra": "iterations: 17347\ncpu: 38.604924079091276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1871.6793962765832,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1871.6010292553233 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.5611705607565,
            "unit": "us/iter",
            "extra": "iterations: 1712\ncpu: 408.5148615654182 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 279.68761510790966,
            "unit": "us/iter",
            "extra": "iterations: 2502\ncpu: 279.6749124700254 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.1763409167076,
            "unit": "us/iter",
            "extra": "iterations: 2989\ncpu: 235.13903077952463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.64055272494537,
            "unit": "us/iter",
            "extra": "iterations: 3101\ncpu: 222.63500225733495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 210.8281177710803,
            "unit": "us/iter",
            "extra": "iterations: 3320\ncpu: 210.80777530120517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 205.25601083775777,
            "unit": "us/iter",
            "extra": "iterations: 3414\ncpu: 205.2440354422958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@northwestern.edu",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3b404a308bef09ea3b29ffe20d839b60e328788e",
          "message": "Merge pull request #267 from genogrove/refactor/remove-dead-node-methods-237\n\nRemove dead code: node::set_keys() and node::set_children()",
          "timestamp": "2026-03-27T13:42:31-05:00",
          "tree_id": "9077a88ed922fe91f41ae25ab7bf4258f4f5237a",
          "url": "https://github.com/genogrove/genogrove/commit/3b404a308bef09ea3b29ffe20d839b60e328788e"
        },
        "date": 1774637205554,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.80572694731066,
            "unit": "us/iter",
            "extra": "iterations: 20952\ncpu: 32.80389027300497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.618273700256101,
            "unit": "us/iter",
            "extra": "iterations: 91845\ncpu: 7.617580630409932 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.105787353184243,
            "unit": "us/iter",
            "extra": "iterations: 135544\ncpu: 5.105378592929232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.356590541963475,
            "unit": "us/iter",
            "extra": "iterations: 161450\ncpu: 4.356310003096933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.0223772507256506,
            "unit": "us/iter",
            "extra": "iterations: 173333\ncpu: 4.022107377129572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9335960731842086,
            "unit": "us/iter",
            "extra": "iterations: 171895\ncpu: 3.933261822624276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7590724848332013,
            "unit": "us/iter",
            "extra": "iterations: 189888\ncpu: 3.7588852797438497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.40122507789226,
            "unit": "us/iter",
            "extra": "iterations: 2568\ncpu: 272.37806658878526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.021241623553465,
            "unit": "us/iter",
            "extra": "iterations: 16236\ncpu: 43.02032273959103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.32331821958128,
            "unit": "us/iter",
            "extra": "iterations: 22871\ncpu: 30.320651130252223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.138186782453474,
            "unit": "us/iter",
            "extra": "iterations: 27176\ncpu: 26.13724532675886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.338681643325362,
            "unit": "us/iter",
            "extra": "iterations: 26775\ncpu: 26.333936209150348 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.04223315722361,
            "unit": "us/iter",
            "extra": "iterations: 27445\ncpu: 25.0413215886318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.777145132555244,
            "unit": "us/iter",
            "extra": "iterations: 28064\ncpu: 24.775605865165335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 627.3203182230384,
            "unit": "us/iter",
            "extra": "iterations: 1103\ncpu: 627.2900154125122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 121.61691023649422,
            "unit": "us/iter",
            "extra": "iterations: 5793\ncpu: 121.60811220438467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.77716833868118,
            "unit": "us/iter",
            "extra": "iterations: 9968\ncpu: 69.76758095906904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.32720966471276,
            "unit": "us/iter",
            "extra": "iterations: 11423\ncpu: 62.326642738334655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.89691907305227,
            "unit": "us/iter",
            "extra": "iterations: 11047\ncpu: 61.89114411152336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.152003930279925,
            "unit": "us/iter",
            "extra": "iterations: 11704\ncpu: 58.147241285030695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.790779444391575,
            "unit": "us/iter",
            "extra": "iterations: 11267\ncpu: 61.788621549658124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3648.1947656247607,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3648.027817708325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 902.1031773778662,
            "unit": "us/iter",
            "extra": "iterations: 778\ncpu: 902.0688007712059 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 625.339682991949,
            "unit": "us/iter",
            "extra": "iterations: 1123\ncpu: 625.2762528940351 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 518.4537620103794,
            "unit": "us/iter",
            "extra": "iterations: 1353\ncpu: 518.4308536585347 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.6576737138892,
            "unit": "us/iter",
            "extra": "iterations: 1419\ncpu: 492.6143995771679 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.11872962225624,
            "unit": "us/iter",
            "extra": "iterations: 1509\ncpu: 463.0894168323382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 452.3472116129083,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 452.30794322580573 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 24.98010854314317,
            "unit": "us/iter",
            "extra": "iterations: 28081\ncpu: 24.978823759837574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.9630081380568605,
            "unit": "us/iter",
            "extra": "iterations: 117227\ncpu: 5.962483020123349 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.494180474058116,
            "unit": "us/iter",
            "extra": "iterations: 155424\ncpu: 4.49407549027176 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9406236518607436,
            "unit": "us/iter",
            "extra": "iterations: 177745\ncpu: 3.9404550507749794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.837271911121895,
            "unit": "us/iter",
            "extra": "iterations: 184792\ncpu: 3.8370156500281514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.731384759942235,
            "unit": "us/iter",
            "extra": "iterations: 187309\ncpu: 3.731128616350528 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5807374562726704,
            "unit": "us/iter",
            "extra": "iterations: 194101\ncpu: 3.580221163208843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.75786759061313,
            "unit": "us/iter",
            "extra": "iterations: 4690\ncpu: 149.74832217484044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.07229293511914,
            "unit": "us/iter",
            "extra": "iterations: 22534\ncpu: 31.068990725126458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.39251853099868,
            "unit": "us/iter",
            "extra": "iterations: 29680\ncpu: 23.390978908355947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.562532545776737,
            "unit": "us/iter",
            "extra": "iterations: 33860\ncpu: 20.56179122858836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.123769018582056,
            "unit": "us/iter",
            "extra": "iterations: 34440\ncpu: 20.122901742160256 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.13004830640479,
            "unit": "us/iter",
            "extra": "iterations: 36579\ncpu: 19.129758850706693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.793132876307993,
            "unit": "us/iter",
            "extra": "iterations: 37343\ncpu: 18.791787751385854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.0981183432006,
            "unit": "us/iter",
            "extra": "iterations: 2028\ncpu: 343.07884763313587 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.5621640393634,
            "unit": "us/iter",
            "extra": "iterations: 10467\ncpu: 66.55402159166933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.31721220714262,
            "unit": "us/iter",
            "extra": "iterations: 14811\ncpu: 47.31553824859915 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.66922595838699,
            "unit": "us/iter",
            "extra": "iterations: 16773\ncpu: 41.6660061408214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.617881863363635,
            "unit": "us/iter",
            "extra": "iterations: 16701\ncpu: 41.61418394108112 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.03984492951388,
            "unit": "us/iter",
            "extra": "iterations: 17592\ncpu: 40.03859612323776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.29957980206537,
            "unit": "us/iter",
            "extra": "iterations: 18289\ncpu: 38.29727502870595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1870.4035733333817,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1870.3795733333286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 407.4980913853008,
            "unit": "us/iter",
            "extra": "iterations: 1718\ncpu: 407.47298253783345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.76629922779455,
            "unit": "us/iter",
            "extra": "iterations: 2590\ncpu: 269.76695250965247 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.76005263158467,
            "unit": "us/iter",
            "extra": "iterations: 3059\ncpu: 234.74978914677968 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 228.44155837397122,
            "unit": "us/iter",
            "extra": "iterations: 3075\ncpu: 228.43768682926935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 218.29823141524403,
            "unit": "us/iter",
            "extra": "iterations: 3215\ncpu: 218.2697303265937 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 210.4726483880669,
            "unit": "us/iter",
            "extra": "iterations: 3319\ncpu: 210.47257306417438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff824b217025f819e1a1bec99ce9ef645fb62ca2",
          "message": "Fix Doxygen comments and standardize SPDX license identifiers (#278)\n\n* Fix Doxygen comments in graph_overlay and standardize SPDX identifiers\n\ngraph_overlay.hpp: Change all doc comments from /* to /** so they are\npicked up by Doxygen documentation generators.\n\nAll files: Standardize SPDX license identifiers to GPL-3.0-or-later\nto match the project LICENSE file. Fixes mixed MIT/GPLv3/GPL-3.0-or-later\nidentifiers and a typo (Indentifier → Identifier) in ranges.hpp.\n\nCloses #276, closes #277\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Align license prose with SPDX identifier and add CHANGELOG\n\nFix \"GPLv3 license\" prose to \"GPL-3.0-or-later license\" across all\nheaders to match the SPDX identifier exactly.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-27T14:44:55-05:00",
          "tree_id": "18cbb01ec622ebf77dffa7766eb30c6c34513543",
          "url": "https://github.com/genogrove/genogrove/commit/ff824b217025f819e1a1bec99ce9ef645fb62ca2"
        },
        "date": 1774640938226,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.6958746245887,
            "unit": "us/iter",
            "extra": "iterations: 20977\ncpu: 32.690853077179774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.5422676935663695,
            "unit": "us/iter",
            "extra": "iterations: 92901\ncpu: 7.541511802886947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.102735886225737,
            "unit": "us/iter",
            "extra": "iterations: 136551\ncpu: 5.102101390689191 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.336341379353142,
            "unit": "us/iter",
            "extra": "iterations: 161032\ncpu: 4.336021610611555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.96735644825316,
            "unit": "us/iter",
            "extra": "iterations: 176668\ncpu: 3.966819565512713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.927822763547071,
            "unit": "us/iter",
            "extra": "iterations: 179190\ncpu: 3.927404397566828 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6632121804222755,
            "unit": "us/iter",
            "extra": "iterations: 187826\ncpu: 3.662836236729742 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.2803474509807,
            "unit": "us/iter",
            "extra": "iterations: 2550\ncpu: 272.24630901960785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.30026790996777,
            "unit": "us/iter",
            "extra": "iterations: 15550\ncpu: 43.29629569131836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.509486579973235,
            "unit": "us/iter",
            "extra": "iterations: 22839\ncpu: 30.50680086693812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.687805249228187,
            "unit": "us/iter",
            "extra": "iterations: 27204\ncpu: 25.686669019261892 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.573437516335787,
            "unit": "us/iter",
            "extra": "iterations: 26783\ncpu: 25.57040872941789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.149515996836094,
            "unit": "us/iter",
            "extra": "iterations: 27818\ncpu: 25.14579042346682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.462503388567747,
            "unit": "us/iter",
            "extra": "iterations: 28183\ncpu: 24.45901298655216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 630.5205341726667,
            "unit": "us/iter",
            "extra": "iterations: 1112\ncpu: 630.4246537769782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.40861747974303,
            "unit": "us/iter",
            "extra": "iterations: 5801\ncpu: 120.3941622134115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 72.06049538429473,
            "unit": "us/iter",
            "extra": "iterations: 9641\ncpu: 72.04809075822035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.450866815940756,
            "unit": "us/iter",
            "extra": "iterations: 11165\ncpu: 61.44768553515441 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.47500502191369,
            "unit": "us/iter",
            "extra": "iterations: 10952\ncpu: 62.466497991234405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.00056688283714,
            "unit": "us/iter",
            "extra": "iterations: 11565\ncpu: 58.99459636835283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.32977592120318,
            "unit": "us/iter",
            "extra": "iterations: 11371\ncpu: 62.323735555360365 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3639.8022187501174,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3639.187760416662 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 901.3572868118005,
            "unit": "us/iter",
            "extra": "iterations: 781\ncpu: 901.3241293213804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 624.4801555555517,
            "unit": "us/iter",
            "extra": "iterations: 1125\ncpu: 624.4227919999995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.2030780559494,
            "unit": "us/iter",
            "extra": "iterations: 1358\ncpu: 516.1421656848298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 494.2832806770056,
            "unit": "us/iter",
            "extra": "iterations: 1418\ncpu: 494.2273787023982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.59880700594607,
            "unit": "us/iter",
            "extra": "iterations: 1513\ncpu: 463.5811976206225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.6601038461538,
            "unit": "us/iter",
            "extra": "iterations: 1560\ncpu: 450.6056083333335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 24.967485035054867,
            "unit": "us/iter",
            "extra": "iterations: 28099\ncpu: 24.966679917434785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.985267233825374,
            "unit": "us/iter",
            "extra": "iterations: 117545\ncpu: 5.98441582372709 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.635800577059224,
            "unit": "us/iter",
            "extra": "iterations: 151111\ncpu: 4.635630457081225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.977807283943688,
            "unit": "us/iter",
            "extra": "iterations: 176690\ncpu: 3.97717556171825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8340954036774777,
            "unit": "us/iter",
            "extra": "iterations: 181754\ncpu: 3.833877636805795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7953586709049683,
            "unit": "us/iter",
            "extra": "iterations: 184035\ncpu: 3.795058863803097 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6453220245555595,
            "unit": "us/iter",
            "extra": "iterations: 192299\ncpu: 3.6450832765640726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.37044704879656,
            "unit": "us/iter",
            "extra": "iterations: 4693\ncpu: 148.357319624974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.136247645281635,
            "unit": "us/iter",
            "extra": "iterations: 22508\ncpu: 31.1334701439491 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.35420075605511,
            "unit": "us/iter",
            "extra": "iterations: 29892\ncpu: 23.351627191221638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.320510843865804,
            "unit": "us/iter",
            "extra": "iterations: 34259\ncpu: 20.319608803525966 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.68169014418127,
            "unit": "us/iter",
            "extra": "iterations: 33777\ncpu: 20.680605263936958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.39773495989283,
            "unit": "us/iter",
            "extra": "iterations: 35904\ncpu: 19.39691711229946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.712491701022085,
            "unit": "us/iter",
            "extra": "iterations: 37354\ncpu: 18.710093778444076 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 339.8443918327538,
            "unit": "us/iter",
            "extra": "iterations: 2057\ncpu: 339.8260116674774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.31137931687128,
            "unit": "us/iter",
            "extra": "iterations: 10569\ncpu: 66.3054844356141 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.09804355131424,
            "unit": "us/iter",
            "extra": "iterations: 14879\ncpu: 47.0962141945024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 40.550666004674305,
            "unit": "us/iter",
            "extra": "iterations: 17120\ncpu: 40.54840917056074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.12979835222508,
            "unit": "us/iter",
            "extra": "iterations: 17114\ncpu: 41.1250435316118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 42.278555849566025,
            "unit": "us/iter",
            "extra": "iterations: 17762\ncpu: 42.27462188942673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.787599557400476,
            "unit": "us/iter",
            "extra": "iterations: 18075\ncpu: 38.78258251728885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1864.3870884718442,
            "unit": "us/iter",
            "extra": "iterations: 373\ncpu: 1864.2504155495894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.40844315544746,
            "unit": "us/iter",
            "extra": "iterations: 1724\ncpu: 408.35080800464135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 277.05850158479046,
            "unit": "us/iter",
            "extra": "iterations: 2524\ncpu: 277.0509671156911 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 229.89774786325165,
            "unit": "us/iter",
            "extra": "iterations: 3042\ncpu: 229.87210420775864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 223.57247965116784,
            "unit": "us/iter",
            "extra": "iterations: 3096\ncpu: 223.55858074935313 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.05111893869505,
            "unit": "us/iter",
            "extra": "iterations: 3279\ncpu: 216.03313784690405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 209.01674955383208,
            "unit": "us/iter",
            "extra": "iterations: 3362\ncpu: 209.00706900654305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4390f0d2dc3b8741c277820192c11da48369c878",
          "message": "Add defensive checks and remove dead declaration (#279)\n\n* Add defensive checks and remove dead declaration\n\n- Check newlocale() return value before passing to strtod_l (#270)\n- Remove undeclared validate_extension() from filetype_detector (#271)\n- Add empty-keys precondition check to calc_parent_key() (#272)\n\nCloses #270, closes #271, closes #272\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for defensive checks\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-27T15:47:30-05:00",
          "tree_id": "cdc1ea32f5d92f0b0615c00fa905fc5bad05e70f",
          "url": "https://github.com/genogrove/genogrove/commit/4390f0d2dc3b8741c277820192c11da48369c878"
        },
        "date": 1774644701510,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.08054139521707,
            "unit": "us/iter",
            "extra": "iterations: 21029\ncpu: 33.078810357125874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.579698899269043,
            "unit": "us/iter",
            "extra": "iterations: 92484\ncpu: 7.578794342805243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.013375631254468,
            "unit": "us/iter",
            "extra": "iterations: 139999\ncpu: 5.013100593575667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.259931799517074,
            "unit": "us/iter",
            "extra": "iterations: 163166\ncpu: 4.259660486866138 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9650099235215084,
            "unit": "us/iter",
            "extra": "iterations: 176651\ncpu: 3.964594890490288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.870471743710899,
            "unit": "us/iter",
            "extra": "iterations: 180827\ncpu: 3.8700996919707773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.654207051355616,
            "unit": "us/iter",
            "extra": "iterations: 191566\ncpu: 3.6539816355720784 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 270.6407119715527,
            "unit": "us/iter",
            "extra": "iterations: 2531\ncpu: 270.6291272224419 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.52809622100243,
            "unit": "us/iter",
            "extra": "iterations: 16036\ncpu: 43.52614716886997 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.424254868097062,
            "unit": "us/iter",
            "extra": "iterations: 23161\ncpu: 30.42268023833168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.51723750137963,
            "unit": "us/iter",
            "extra": "iterations: 27183\ncpu: 25.516529338189294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.853478319579796,
            "unit": "us/iter",
            "extra": "iterations: 26660\ncpu: 25.85170645161292 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.303690501368237,
            "unit": "us/iter",
            "extra": "iterations: 27425\ncpu: 25.302624357338164 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.72634390503183,
            "unit": "us/iter",
            "extra": "iterations: 28220\ncpu: 24.72460269312546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 631.6897851314618,
            "unit": "us/iter",
            "extra": "iterations: 1103\ncpu: 631.5799320036258 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 118.35511197695813,
            "unit": "us/iter",
            "extra": "iterations: 5903\ncpu: 118.34733067931542 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.65681966199385,
            "unit": "us/iter",
            "extra": "iterations: 9704\ncpu: 70.65249845424572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.1339881253824,
            "unit": "us/iter",
            "extra": "iterations: 11453\ncpu: 61.13342993102257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.6623205407363,
            "unit": "us/iter",
            "extra": "iterations: 11022\ncpu: 62.65291725639629 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.30666254859567,
            "unit": "us/iter",
            "extra": "iterations: 11575\ncpu: 59.30108311015133 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.12717584480521,
            "unit": "us/iter",
            "extra": "iterations: 11186\ncpu: 62.12182183086023 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3656.6967604166516,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3656.313656250002 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 896.4324197689236,
            "unit": "us/iter",
            "extra": "iterations: 779\ncpu: 896.3751591784328 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 623.4886245551809,
            "unit": "us/iter",
            "extra": "iterations: 1124\ncpu: 623.4219839857653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 522.4805605947921,
            "unit": "us/iter",
            "extra": "iterations: 1345\ncpu: 522.4508118959103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.7190668073203,
            "unit": "us/iter",
            "extra": "iterations: 1422\ncpu: 492.6782855133617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 461.6334039473719,
            "unit": "us/iter",
            "extra": "iterations: 1520\ncpu: 461.5848460526306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.99703352675124,
            "unit": "us/iter",
            "extra": "iterations: 1551\ncpu: 449.95710058027083 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.1578472948758,
            "unit": "us/iter",
            "extra": "iterations: 27910\ncpu: 25.155898172698016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.009521793915744,
            "unit": "us/iter",
            "extra": "iterations: 116661\ncpu: 6.009031698682529 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.489372112688901,
            "unit": "us/iter",
            "extra": "iterations: 153733\ncpu: 4.488955305627277 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.156576681502462,
            "unit": "us/iter",
            "extra": "iterations: 168287\ncpu: 4.156304860149626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.905924350990093,
            "unit": "us/iter",
            "extra": "iterations: 179196\ncpu: 3.905516172235995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7791376469569617,
            "unit": "us/iter",
            "extra": "iterations: 184748\ncpu: 3.7789423214324556 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6346108603857044,
            "unit": "us/iter",
            "extra": "iterations: 192774\ncpu: 3.634363835372012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.18557470538738,
            "unit": "us/iter",
            "extra": "iterations: 4752\ncpu: 147.17549010942773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.188244369418495,
            "unit": "us/iter",
            "extra": "iterations: 22511\ncpu: 31.184989605081952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.8591997207613,
            "unit": "us/iter",
            "extra": "iterations: 30798\ncpu: 22.857786577050486 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.393727724529946,
            "unit": "us/iter",
            "extra": "iterations: 33804\ncpu: 20.391904774582965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.560586051578284,
            "unit": "us/iter",
            "extra": "iterations: 33968\ncpu: 20.557953338436008 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.45156209965856,
            "unit": "us/iter",
            "extra": "iterations: 36063\ncpu: 19.448495299891906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.745546411585547,
            "unit": "us/iter",
            "extra": "iterations: 37426\ncpu: 18.74134943622081 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 341.27482427801976,
            "unit": "us/iter",
            "extra": "iterations: 2043\ncpu: 341.22954576603047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.43009020912551,
            "unit": "us/iter",
            "extra": "iterations: 10520\ncpu: 66.42178127376438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.73461994463453,
            "unit": "us/iter",
            "extra": "iterations: 14811\ncpu: 47.72993268516622 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.249547611894805,
            "unit": "us/iter",
            "extra": "iterations: 16645\ncpu: 42.24577939321121 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.324850584356824,
            "unit": "us/iter",
            "extra": "iterations: 16685\ncpu: 41.321529397662495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.277132848458635,
            "unit": "us/iter",
            "extra": "iterations: 17599\ncpu: 39.27588510710841 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.05781917081604,
            "unit": "us/iter",
            "extra": "iterations: 18476\ncpu: 38.05442341415891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1852.1244801061298,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1852.0234509283823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.6104002327079,
            "unit": "us/iter",
            "extra": "iterations: 1719\ncpu: 408.5762821407797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.02153660406873,
            "unit": "us/iter",
            "extra": "iterations: 2609\ncpu: 269.0139413568428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.96486308548361,
            "unit": "us/iter",
            "extra": "iterations: 3053\ncpu: 228.9431293809373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 221.3111086818762,
            "unit": "us/iter",
            "extra": "iterations: 3156\ncpu: 221.3081625475283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 210.33940217391742,
            "unit": "us/iter",
            "extra": "iterations: 3312\ncpu: 210.31842904589303 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 203.35901653132169,
            "unit": "us/iter",
            "extra": "iterations: 3448\ncpu: 203.3505617749423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "816df50f9e3e66c50bde00978e118bfbe5b7857b",
          "message": "Decompose grove.hpp into .ipp files and split split_node() (#280)\n\n* Decompose grove.hpp into .ipp files and split split_node()\n\ngrove.hpp was 1351 lines. Split into 4 .ipp files included inside\nthe class body:\n\n- grove_graph.ipp (310 lines): all graph overlay forwarders\n- grove_insert.ipp (520 lines): insertion methods + helpers\n- grove_query.ipp (95 lines): intersect + search_iter\n- grove_serialize.ipp (181 lines): serialize/deserialize/grove_to_sif\n\ngrove.hpp retains construction, configuration, private tree\nmanagement, member variables, and #include directives (305 lines).\n\nAlso decomposed split_node() (66 lines) into:\n- split_node(): 8-line dispatcher\n- split_leaf_node(): leaf key redistribution, chain linking, cache\n- split_internal_node(): key promotion, child redistribution\n\nCloses #184\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for grove.hpp decomposition\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-27T20:21:33-05:00",
          "tree_id": "a9791ae4f6ed35b1120b8b364c8cdab635339482",
          "url": "https://github.com/genogrove/genogrove/commit/816df50f9e3e66c50bde00978e118bfbe5b7857b"
        },
        "date": 1774661153925,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.2139625268719,
            "unit": "us/iter",
            "extra": "iterations: 20468\ncpu: 34.211390707445766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.8491349252397375,
            "unit": "us/iter",
            "extra": "iterations: 89620\ncpu: 7.848260187458158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.191488648209057,
            "unit": "us/iter",
            "extra": "iterations: 135265\ncpu: 5.1911604406165655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.401967230648962,
            "unit": "us/iter",
            "extra": "iterations: 159875\ncpu: 4.401558386239249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9663462724120544,
            "unit": "us/iter",
            "extra": "iterations: 176468\ncpu: 3.9661375150168863 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.878331099248081,
            "unit": "us/iter",
            "extra": "iterations: 178895\ncpu: 3.8781746387545724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7039754750295892,
            "unit": "us/iter",
            "extra": "iterations: 189725\ncpu: 3.703397649229146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 277.719792774916,
            "unit": "us/iter",
            "extra": "iterations: 2519\ncpu: 277.68818975784046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.81341905891094,
            "unit": "us/iter",
            "extra": "iterations: 16024\ncpu: 43.80509585621573 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.535285123785147,
            "unit": "us/iter",
            "extra": "iterations: 22741\ncpu: 30.532667165032308 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.67262113887183,
            "unit": "us/iter",
            "extra": "iterations: 27097\ncpu: 25.669689227589775 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.964625279642007,
            "unit": "us/iter",
            "extra": "iterations: 26820\ncpu: 25.96267833706189 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.41114064427248,
            "unit": "us/iter",
            "extra": "iterations: 27566\ncpu: 25.407153159689514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.78879385764117,
            "unit": "us/iter",
            "extra": "iterations: 28393\ncpu: 24.78616384320079 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 639.8493542805054,
            "unit": "us/iter",
            "extra": "iterations: 1098\ncpu: 639.7718788706736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 119.00491021671714,
            "unit": "us/iter",
            "extra": "iterations: 5814\ncpu: 118.9993123495013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.16995866761579,
            "unit": "us/iter",
            "extra": "iterations: 9847\ncpu: 70.16182786635521 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.56893888497928,
            "unit": "us/iter",
            "extra": "iterations: 11372\ncpu: 60.56169899753787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 60.4481104707847,
            "unit": "us/iter",
            "extra": "iterations: 11279\ncpu: 60.44197411117996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.405196467040064,
            "unit": "us/iter",
            "extra": "iterations: 11605\ncpu: 59.40159999999999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.59624491060216,
            "unit": "us/iter",
            "extra": "iterations: 11298\ncpu: 62.58730430164624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3689.276132275211,
            "unit": "us/iter",
            "extra": "iterations: 189\ncpu: 3689.1026560846667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 902.6902799999906,
            "unit": "us/iter",
            "extra": "iterations: 775\ncpu: 902.6103483870934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 620.8693250443981,
            "unit": "us/iter",
            "extra": "iterations: 1126\ncpu: 620.8333863232695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 517.3348434268647,
            "unit": "us/iter",
            "extra": "iterations: 1354\ncpu: 517.2674785819784 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.0035857946362,
            "unit": "us/iter",
            "extra": "iterations: 1422\ncpu: 490.96727004219565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.82306361828574,
            "unit": "us/iter",
            "extra": "iterations: 1509\ncpu: 459.7907037773355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 447.6063550446949,
            "unit": "us/iter",
            "extra": "iterations: 1566\ncpu: 447.57742528735565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.403736470076254,
            "unit": "us/iter",
            "extra": "iterations: 27587\ncpu: 25.401829086163737 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.999728318682834,
            "unit": "us/iter",
            "extra": "iterations: 116379\ncpu: 5.999407556346095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.521456490653394,
            "unit": "us/iter",
            "extra": "iterations: 153852\ncpu: 4.520981605698987 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9328883075664067,
            "unit": "us/iter",
            "extra": "iterations: 178329\ncpu: 3.932425864553721 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.812421206220376,
            "unit": "us/iter",
            "extra": "iterations: 183333\ncpu: 3.8123435060791073 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.732096003417295,
            "unit": "us/iter",
            "extra": "iterations: 187285\ncpu: 3.7315493499212415 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5979330160790006,
            "unit": "us/iter",
            "extra": "iterations: 194166\ncpu: 3.597801582151361 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.4261176218987,
            "unit": "us/iter",
            "extra": "iterations: 4676\ncpu: 149.41579662104405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.73899298167139,
            "unit": "us/iter",
            "extra": "iterations: 22370\ncpu: 31.7391209208761 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.466294947670594,
            "unit": "us/iter",
            "extra": "iterations: 29907\ncpu: 23.463460360450647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.722519373429847,
            "unit": "us/iter",
            "extra": "iterations: 33835\ncpu: 20.722011053642692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.762833500857965,
            "unit": "us/iter",
            "extra": "iterations: 33826\ncpu: 20.76070436942005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.36168665296558,
            "unit": "us/iter",
            "extra": "iterations: 36008\ncpu: 19.360243445900952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.723003060952742,
            "unit": "us/iter",
            "extra": "iterations: 37570\ncpu: 18.721837423476323 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.87457184750144,
            "unit": "us/iter",
            "extra": "iterations: 2046\ncpu: 343.8506793743893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.87835521419652,
            "unit": "us/iter",
            "extra": "iterations: 10481\ncpu: 66.87600400725165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.63260295307452,
            "unit": "us/iter",
            "extra": "iterations: 14832\ncpu: 47.63185039104648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.682487534459916,
            "unit": "us/iter",
            "extra": "iterations: 16686\ncpu: 41.67963286587583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.316639990529886,
            "unit": "us/iter",
            "extra": "iterations: 16894\ncpu: 41.316164851426414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.79224089493036,
            "unit": "us/iter",
            "extra": "iterations: 17655\ncpu: 39.788122628150944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.686582423011096,
            "unit": "us/iter",
            "extra": "iterations: 18217\ncpu: 38.68557111489268 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1853.774976127317,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1853.5155543766562 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 414.51460846563646,
            "unit": "us/iter",
            "extra": "iterations: 1701\ncpu: 414.4813480305698 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 271.0542644435765,
            "unit": "us/iter",
            "extra": "iterations: 2579\ncpu: 271.03867429236146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.37172868473402,
            "unit": "us/iter",
            "extra": "iterations: 3026\ncpu: 235.36807501652345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 223.53264657097,
            "unit": "us/iter",
            "extra": "iterations: 3135\ncpu: 223.5158746411471 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 212.84222992366585,
            "unit": "us/iter",
            "extra": "iterations: 3275\ncpu: 212.8330522137411 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 205.51420469898034,
            "unit": "us/iter",
            "extra": "iterations: 3405\ncpu: 205.49657444933794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3d8b82b113eb0c24a0db4d3ef303b8caa907c1b6",
          "message": "Replace exit(1) with exception propagation in CLI handlers (#287)\n\n* Replace exit(1) with exception propagation in CLI handlers\n\nThe BED and GFF handlers called exit(1) in catch blocks, bypassing\nRAII destructors and leaking htslib file handles and grove memory.\nRemoved the try/catch entirely — exceptions propagate to main()\nwhich already catches and reports them.\n\nCloses #268\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for CLI exit(1) fix\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-27T21:12:01-05:00",
          "tree_id": "2e5ae5f9a6af8132f7369a45f2702adddc572abc",
          "url": "https://github.com/genogrove/genogrove/commit/3d8b82b113eb0c24a0db4d3ef303b8caa907c1b6"
        },
        "date": 1774664162987,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.979401532882804,
            "unit": "us/iter",
            "extra": "iterations: 21789\ncpu: 32.973343521960615 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.491031764841526,
            "unit": "us/iter",
            "extra": "iterations: 95357\ncpu: 7.490502217980853 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.938454528217143,
            "unit": "us/iter",
            "extra": "iterations: 142396\ncpu: 4.937981446108038 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.103036808595107,
            "unit": "us/iter",
            "extra": "iterations: 170884\ncpu: 4.102894998946653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.880397855090389,
            "unit": "us/iter",
            "extra": "iterations: 183411\ncpu: 3.880032484420234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.807002857079194,
            "unit": "us/iter",
            "extra": "iterations: 179554\ncpu: 3.8068993561825417 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.5775167049645105,
            "unit": "us/iter",
            "extra": "iterations: 198444\ncpu: 3.5774630676664443 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 280.7208651999872,
            "unit": "us/iter",
            "extra": "iterations: 2500\ncpu: 280.69842919999996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 41.95422046169489,
            "unit": "us/iter",
            "extra": "iterations: 16851\ncpu: 41.952159278381075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 28.080177431717868,
            "unit": "us/iter",
            "extra": "iterations: 24787\ncpu: 28.077936418283812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 23.823762802591514,
            "unit": "us/iter",
            "extra": "iterations: 29330\ncpu: 23.822616808728235 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 23.830545365291332,
            "unit": "us/iter",
            "extra": "iterations: 29538\ncpu: 23.82910640530838 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 22.314235208503742,
            "unit": "us/iter",
            "extra": "iterations: 31606\ncpu: 22.313686610137317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.25106320979965,
            "unit": "us/iter",
            "extra": "iterations: 31435\ncpu: 21.249746874502932 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 612.5542222222351,
            "unit": "us/iter",
            "extra": "iterations: 1134\ncpu: 612.5000705467372 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 129.86461608808918,
            "unit": "us/iter",
            "extra": "iterations: 5358\ncpu: 129.86285722284427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 68.76703590771939,
            "unit": "us/iter",
            "extra": "iterations: 9970\ncpu: 68.75739247743202 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 52.52219157814935,
            "unit": "us/iter",
            "extra": "iterations: 13180\ncpu: 52.52104886191188 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.75770138621504,
            "unit": "us/iter",
            "extra": "iterations: 10388\ncpu: 61.752094628417424 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.93896817365988,
            "unit": "us/iter",
            "extra": "iterations: 12254\ncpu: 58.93204724987753 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 54.69197655073937,
            "unit": "us/iter",
            "extra": "iterations: 12623\ncpu: 54.69012081121754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4091.4208596488697,
            "unit": "us/iter",
            "extra": "iterations: 171\ncpu: 4090.5945672514654 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 890.6103078880662,
            "unit": "us/iter",
            "extra": "iterations: 786\ncpu: 890.6186972010188 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 617.2747998196894,
            "unit": "us/iter",
            "extra": "iterations: 1109\ncpu: 617.2391767357977 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 526.1279517345342,
            "unit": "us/iter",
            "extra": "iterations: 1326\ncpu: 526.0974675716426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 500.3138860215211,
            "unit": "us/iter",
            "extra": "iterations: 1395\ncpu: 500.2885863799263 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 470.7613407407296,
            "unit": "us/iter",
            "extra": "iterations: 1485\ncpu: 470.70930101010003 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 460.5865899802129,
            "unit": "us/iter",
            "extra": "iterations: 1517\ncpu: 460.5603342122601 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.429947962725052,
            "unit": "us/iter",
            "extra": "iterations: 27365\ncpu: 25.429080065777548 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.635620036057879,
            "unit": "us/iter",
            "extra": "iterations: 124246\ncpu: 5.63528010559698 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.256025608388761,
            "unit": "us/iter",
            "extra": "iterations: 164985\ncpu: 4.2559338000424445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.657478515746888,
            "unit": "us/iter",
            "extra": "iterations: 192420\ncpu: 3.6573658091674375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.48408709611676,
            "unit": "us/iter",
            "extra": "iterations: 201203\ncpu: 3.4839573962614834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.492667871730486,
            "unit": "us/iter",
            "extra": "iterations: 200266\ncpu: 3.492095463034163 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.3043057873041017,
            "unit": "us/iter",
            "extra": "iterations: 212275\ncpu: 3.3041825886232283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.10727195407443,
            "unit": "us/iter",
            "extra": "iterations: 4703\ncpu: 149.07331001488302 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 29.378550882067923,
            "unit": "us/iter",
            "extra": "iterations: 23751\ncpu: 29.376866952970435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 20.967487705648292,
            "unit": "us/iter",
            "extra": "iterations: 33674\ncpu: 20.96655075132153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 18.6281189819903,
            "unit": "us/iter",
            "extra": "iterations: 37367\ncpu: 18.626511895522817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 18.54302586276602,
            "unit": "us/iter",
            "extra": "iterations: 37119\ncpu: 18.540994854387296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 17.9585338606437,
            "unit": "us/iter",
            "extra": "iterations: 37802\ncpu: 17.955852124226325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 17.387346043000232,
            "unit": "us/iter",
            "extra": "iterations: 39209\ncpu: 17.385001326226103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 327.6158936768216,
            "unit": "us/iter",
            "extra": "iterations: 2135\ncpu: 327.5707419203746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 63.40720882326477,
            "unit": "us/iter",
            "extra": "iterations: 10971\ncpu: 63.403892626013814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 42.73139825544106,
            "unit": "us/iter",
            "extra": "iterations: 15706\ncpu: 42.72463268814494 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 38.211915745069376,
            "unit": "us/iter",
            "extra": "iterations: 17542\ncpu: 38.208728936267455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 39.6281894815794,
            "unit": "us/iter",
            "extra": "iterations: 18672\ncpu: 39.61847156169653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.58334021674557,
            "unit": "us/iter",
            "extra": "iterations: 18547\ncpu: 39.581060818461175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 36.38605606382991,
            "unit": "us/iter",
            "extra": "iterations: 18800\ncpu: 36.384050000000066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1912.3069405404872,
            "unit": "us/iter",
            "extra": "iterations: 370\ncpu: 1912.0997864864903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 372.38454104477796,
            "unit": "us/iter",
            "extra": "iterations: 1876\ncpu: 372.35890618336884 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 250.98804930331792,
            "unit": "us/iter",
            "extra": "iterations: 2799\ncpu: 250.93728045730725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 214.72874290998573,
            "unit": "us/iter",
            "extra": "iterations: 3244\ncpu: 214.7148122688048 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 203.34939530792664,
            "unit": "us/iter",
            "extra": "iterations: 3410\ncpu: 203.33762785923636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 198.2306326068635,
            "unit": "us/iter",
            "extra": "iterations: 3533\ncpu: 198.21811972827638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 192.4438424938463,
            "unit": "us/iter",
            "extra": "iterations: 3657\ncpu: 192.4245004101718 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be60e42bb35bcb528c020986d194e9b79486825a",
          "message": "Delete move operations on zlib streambuf classes (#288)\n\n* Delete move operations on zlib streambuf classes\n\nA compiler-generated move would leave the source with a dangling\nz_stream, causing double deflateEnd/inflateEnd. Explicitly delete\nmove constructor and move assignment for both deflate_streambuf\nand inflate_streambuf.\n\nCloses #269\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for zlib streambuf move deletion\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-27T21:29:30-05:00",
          "tree_id": "c594e3c8fd548774de4ad92a21c638cb5f59a846",
          "url": "https://github.com/genogrove/genogrove/commit/be60e42bb35bcb528c020986d194e9b79486825a"
        },
        "date": 1774665218109,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.529820181427084,
            "unit": "us/iter",
            "extra": "iterations: 20504\ncpu: 33.52416621147093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.699074946302666,
            "unit": "us/iter",
            "extra": "iterations: 91252\ncpu: 7.698647996756234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.127492948010795,
            "unit": "us/iter",
            "extra": "iterations: 135990\ncpu: 5.127147378483714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.357853515563867,
            "unit": "us/iter",
            "extra": "iterations: 160017\ncpu: 4.357408444102812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.0469052938709416,
            "unit": "us/iter",
            "extra": "iterations: 174107\ncpu: 4.046625127077024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9584533774214004,
            "unit": "us/iter",
            "extra": "iterations: 177221\ncpu: 3.9581611152177207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.783158680667698,
            "unit": "us/iter",
            "extra": "iterations: 185700\ncpu: 3.782799407646739 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 275.5982752941187,
            "unit": "us/iter",
            "extra": "iterations: 2550\ncpu: 275.57346627450966 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.46023764234807,
            "unit": "us/iter",
            "extra": "iterations: 15982\ncpu: 43.45694669002627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.504454450215274,
            "unit": "us/iter",
            "extra": "iterations: 22909\ncpu: 30.502777903880624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.007037608882897,
            "unit": "us/iter",
            "extra": "iterations: 26749\ncpu: 26.00447041010881 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.303522780965675,
            "unit": "us/iter",
            "extra": "iterations: 26667\ncpu: 26.30134432069597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.26013121428556,
            "unit": "us/iter",
            "extra": "iterations: 28000\ncpu: 25.2582462857143 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.86445475877287,
            "unit": "us/iter",
            "extra": "iterations: 28127\ncpu: 24.86296373591212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 644.1646401826459,
            "unit": "us/iter",
            "extra": "iterations: 1095\ncpu: 644.1025424657538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 116.83475851601841,
            "unit": "us/iter",
            "extra": "iterations: 5930\ncpu: 116.81827554806074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.4553580195544,
            "unit": "us/iter",
            "extra": "iterations: 9614\ncpu: 71.45216912835443 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.29619586255922,
            "unit": "us/iter",
            "extra": "iterations: 11263\ncpu: 61.29074615999282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 66.20758024462518,
            "unit": "us/iter",
            "extra": "iterations: 10792\ncpu: 66.20393078206088 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.99932875747876,
            "unit": "us/iter",
            "extra": "iterations: 11364\ncpu: 60.990483984512466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.861551193921024,
            "unit": "us/iter",
            "extra": "iterations: 11056\ncpu: 62.85493297756853 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3746.5104491978063,
            "unit": "us/iter",
            "extra": "iterations: 187\ncpu: 3746.322727272719 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 912.5387451235403,
            "unit": "us/iter",
            "extra": "iterations: 769\ncpu: 912.4718920676175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 625.205881250019,
            "unit": "us/iter",
            "extra": "iterations: 1120\ncpu: 625.1793258928583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 519.2102293986516,
            "unit": "us/iter",
            "extra": "iterations: 1347\ncpu: 519.1861143281363 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 496.3363328612019,
            "unit": "us/iter",
            "extra": "iterations: 1412\ncpu: 496.30589093484605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 462.02611228535,
            "unit": "us/iter",
            "extra": "iterations: 1514\ncpu: 461.9829458388364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.92000708761395,
            "unit": "us/iter",
            "extra": "iterations: 1552\ncpu: 449.88121842783613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.53251611960969,
            "unit": "us/iter",
            "extra": "iterations: 27389\ncpu: 25.53003526963375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.2944753420161685,
            "unit": "us/iter",
            "extra": "iterations: 115784\ncpu: 6.294259534996202 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.521020715172864,
            "unit": "us/iter",
            "extra": "iterations: 152159\ncpu: 4.520764522637521 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.064249552777917,
            "unit": "us/iter",
            "extra": "iterations: 172733\ncpu: 4.063773430670461 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.833970680639885,
            "unit": "us/iter",
            "extra": "iterations: 181109\ncpu: 3.833717474007376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7614252118563507,
            "unit": "us/iter",
            "extra": "iterations: 182081\ncpu: 3.761125971408361 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.614095179603541,
            "unit": "us/iter",
            "extra": "iterations: 193760\ncpu: 3.6138944312551624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 150.4639302926009,
            "unit": "us/iter",
            "extra": "iterations: 4648\ncpu: 150.4537241824439 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.47800456069878,
            "unit": "us/iter",
            "extra": "iterations: 22365\ncpu: 31.475713480885407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.114676703913574,
            "unit": "us/iter",
            "extra": "iterations: 29623\ncpu: 23.112682476454122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.232121190277667,
            "unit": "us/iter",
            "extra": "iterations: 34681\ncpu: 20.230012975404374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.197513389376205,
            "unit": "us/iter",
            "extra": "iterations: 34617\ncpu: 20.195300285986544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.128393881400907,
            "unit": "us/iter",
            "extra": "iterations: 36577\ncpu: 19.12626617819949 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.72081858442394,
            "unit": "us/iter",
            "extra": "iterations: 37483\ncpu: 18.718459328228793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 347.4460978638842,
            "unit": "us/iter",
            "extra": "iterations: 2013\ncpu: 347.4181033283661 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.24703118362594,
            "unit": "us/iter",
            "extra": "iterations: 10358\ncpu: 67.24299922765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.26450903152996,
            "unit": "us/iter",
            "extra": "iterations: 15003\ncpu: 46.25797513830553 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.27446243779703,
            "unit": "us/iter",
            "extra": "iterations: 16679\ncpu: 42.27024689729604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.77491609558435,
            "unit": "us/iter",
            "extra": "iterations: 16781\ncpu: 41.77174131458187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.63192559777407,
            "unit": "us/iter",
            "extra": "iterations: 17607\ncpu: 39.6267265292214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.462908871320764,
            "unit": "us/iter",
            "extra": "iterations: 18216\ncpu: 38.46102388010567 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1888.046830645156,
            "unit": "us/iter",
            "extra": "iterations: 372\ncpu: 1887.8388924731273 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 413.6724938053263,
            "unit": "us/iter",
            "extra": "iterations: 1695\ncpu: 413.65232920353753 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.8089585913281,
            "unit": "us/iter",
            "extra": "iterations: 2584\ncpu: 269.780721362231 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 229.63097576154482,
            "unit": "us/iter",
            "extra": "iterations: 3053\ncpu: 229.61207893875033 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 221.73289346861694,
            "unit": "us/iter",
            "extra": "iterations: 3154\ncpu: 221.71188522511082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.41095755568827,
            "unit": "us/iter",
            "extra": "iterations: 3322\ncpu: 211.38969686935593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 204.41519105691265,
            "unit": "us/iter",
            "extra": "iterations: 3444\ncpu: 204.3908617886185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e398e93f56a5a62ab39b3507fa47df37ecc2fd1",
          "message": "Add validation to interval and genomic_coordinate setters (#289)\n\n* Replace individual setters with validated set_range()\n\ninterval and genomic_coordinate had separate set_start()/set_end()\nthat bypassed constructor validation. Replaced with set_range(start,\nend) that validates atomically — no ordering dependency. Added\nset_strand() validation for genomic_coordinate. Tests updated to use\nset_range() and verify validation throws.\n\nCloses #273\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for setter validation fix\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-27T22:04:28-05:00",
          "tree_id": "d03dc22594d6729ec9395ae712a1e5a196b5045b",
          "url": "https://github.com/genogrove/genogrove/commit/6e398e93f56a5a62ab39b3507fa47df37ecc2fd1"
        },
        "date": 1774667310380,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.51343656773878,
            "unit": "us/iter",
            "extra": "iterations: 19509\ncpu: 34.50851068737505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.098756374687461,
            "unit": "us/iter",
            "extra": "iterations: 86867\ncpu: 8.09807638113438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.135443811104682,
            "unit": "us/iter",
            "extra": "iterations: 137367\ncpu: 5.135071414531874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.358561897026472,
            "unit": "us/iter",
            "extra": "iterations: 161284\ncpu: 4.35821398898837 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.2013414200545105,
            "unit": "us/iter",
            "extra": "iterations: 167064\ncpu: 4.200954502466123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9351964813526843,
            "unit": "us/iter",
            "extra": "iterations: 176943\ncpu: 3.9348667480488038 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.728627128489244,
            "unit": "us/iter",
            "extra": "iterations: 185930\ncpu: 3.728230016672939 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 271.32596634429916,
            "unit": "us/iter",
            "extra": "iterations: 2585\ncpu: 271.2995829787232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.17819819159257,
            "unit": "us/iter",
            "extra": "iterations: 16368\ncpu: 43.17292662512216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.003884613710536,
            "unit": "us/iter",
            "extra": "iterations: 22975\ncpu: 30.003061501632203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.42339180046074,
            "unit": "us/iter",
            "extra": "iterations: 27343\ncpu: 25.419608418973738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.80584033834614,
            "unit": "us/iter",
            "extra": "iterations: 26600\ncpu: 25.804150601503796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.910673708217868,
            "unit": "us/iter",
            "extra": "iterations: 26746\ncpu: 25.907590069543083 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.706852841630358,
            "unit": "us/iter",
            "extra": "iterations: 28364\ncpu: 24.70532981948948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 637.8108363802475,
            "unit": "us/iter",
            "extra": "iterations: 1094\ncpu: 637.6874972577693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 117.40778932154376,
            "unit": "us/iter",
            "extra": "iterations: 5881\ncpu: 117.3931380717565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.12671957936827,
            "unit": "us/iter",
            "extra": "iterations: 9985\ncpu: 69.12561782673995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.19563456487485,
            "unit": "us/iter",
            "extra": "iterations: 11422\ncpu: 60.18888749781135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.08502794130494,
            "unit": "us/iter",
            "extra": "iterations: 11381\ncpu: 61.08058316492416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 57.856282745488066,
            "unit": "us/iter",
            "extra": "iterations: 12078\ncpu: 57.84915896671621 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.12766206956385,
            "unit": "us/iter",
            "extra": "iterations: 11529\ncpu: 60.12271081620263 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3716.6916702127746,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3716.500010638303 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.0063427835238,
            "unit": "us/iter",
            "extra": "iterations: 776\ncpu: 902.9120502577318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 619.6313724444483,
            "unit": "us/iter",
            "extra": "iterations: 1125\ncpu: 619.4843920000009 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.5876250917044,
            "unit": "us/iter",
            "extra": "iterations: 1363\ncpu: 513.5104269992677 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 489.991140154156,
            "unit": "us/iter",
            "extra": "iterations: 1427\ncpu: 489.93264611072067 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 458.6436732412889,
            "unit": "us/iter",
            "extra": "iterations: 1521\ncpu: 458.55180539118976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.5380261479747,
            "unit": "us/iter",
            "extra": "iterations: 1568\ncpu: 446.51950637755 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 26.05708892928713,
            "unit": "us/iter",
            "extra": "iterations: 26954\ncpu: 26.0547447132151 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.201580200769867,
            "unit": "us/iter",
            "extra": "iterations: 116651\ncpu: 6.19424597303065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.452086450694915,
            "unit": "us/iter",
            "extra": "iterations: 156008\ncpu: 4.451685663555721 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.913501966875996,
            "unit": "us/iter",
            "extra": "iterations: 178964\ncpu: 3.9130100858273305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8263337763856327,
            "unit": "us/iter",
            "extra": "iterations: 183575\ncpu: 3.825965866811949 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7578930626530647,
            "unit": "us/iter",
            "extra": "iterations: 186296\ncpu: 3.7576791074419402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5986600493217966,
            "unit": "us/iter",
            "extra": "iterations: 194640\ncpu: 3.5984979860254795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 150.86862011173,
            "unit": "us/iter",
            "extra": "iterations: 4654\ncpu: 150.85940996991934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 32.761765358322265,
            "unit": "us/iter",
            "extra": "iterations: 22089\ncpu: 32.76066716465202 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.648654594559414,
            "unit": "us/iter",
            "extra": "iterations: 30732\ncpu: 22.646872478198674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.277929944130904,
            "unit": "us/iter",
            "extra": "iterations: 34187\ncpu: 20.276595811273154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.38539987142394,
            "unit": "us/iter",
            "extra": "iterations: 34221\ncpu: 20.38361415505093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.429523540802016,
            "unit": "us/iter",
            "extra": "iterations: 36150\ncpu: 19.427985255878276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.11905208248695,
            "unit": "us/iter",
            "extra": "iterations: 36903\ncpu: 19.117977427309327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.1666046055801,
            "unit": "us/iter",
            "extra": "iterations: 2041\ncpu: 344.1218843704052 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.21543063528517,
            "unit": "us/iter",
            "extra": "iterations: 10452\ncpu: 67.20765508993543 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.719744767600034,
            "unit": "us/iter",
            "extra": "iterations: 14716\ncpu: 47.715160845338545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.0259952524038,
            "unit": "us/iter",
            "extra": "iterations: 16640\ncpu: 42.02337361778842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.695087157339316,
            "unit": "us/iter",
            "extra": "iterations: 16671\ncpu: 41.69172119248956 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.864633733560865,
            "unit": "us/iter",
            "extra": "iterations: 17490\ncpu: 39.86051000571766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.54956107500694,
            "unit": "us/iter",
            "extra": "iterations: 18158\ncpu: 38.54868383081823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1923.6490727762111,
            "unit": "us/iter",
            "extra": "iterations: 371\ncpu: 1923.3250997304538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 412.6496298048483,
            "unit": "us/iter",
            "extra": "iterations: 1691\ncpu: 412.6362448255479 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.8922790883572,
            "unit": "us/iter",
            "extra": "iterations: 2501\ncpu: 278.85750059976016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.62615301651678,
            "unit": "us/iter",
            "extra": "iterations: 2967\ncpu: 235.61466295921872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.02901579625635,
            "unit": "us/iter",
            "extra": "iterations: 3102\ncpu: 225.9990019342372 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.3128659252401,
            "unit": "us/iter",
            "extra": "iterations: 3237\ncpu: 215.30357244362176 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 207.57745362663803,
            "unit": "us/iter",
            "extra": "iterations: 3364\ncpu: 207.53885552913297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc9d5bd3ae32550198eceb2d68cbfbfe790f7344",
          "message": "Convert leaf chain traversal in search_iter to iteration (#290)\n\n* Convert leaf chain traversal in search_iter from recursion to iteration\n\nsearch_iter recursively called itself to walk the linked leaf chain.\nFor queries spanning many consecutive leaves, this could overflow the\nstack. Now uses a while loop for the leaf chain walk. The child node\nrecursion remains (bounded by tree depth O(log n)).\n\nCloses #274\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix leaf pruning condition and add CHANGELOG\n\nThe pruning checked first_key.end < query.start, but with (start, end)\nsort order, later keys in the leaf can have larger starts that overlap.\nOnly first_key.start > query.end is a safe early-exit since all\nsubsequent keys have start >= first_key.start.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-28T20:53:22-05:00",
          "tree_id": "2e8ed372a2f4514275dd655c4e742b95684af424",
          "url": "https://github.com/genogrove/genogrove/commit/cc9d5bd3ae32550198eceb2d68cbfbfe790f7344"
        },
        "date": 1774749453712,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.88678649258909,
            "unit": "us/iter",
            "extra": "iterations: 20374\ncpu: 34.88167546873466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.768523543270449,
            "unit": "us/iter",
            "extra": "iterations: 88709\ncpu: 7.76829615935249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.183289971557406,
            "unit": "us/iter",
            "extra": "iterations: 133251\ncpu: 5.182040840218834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.33474422417649,
            "unit": "us/iter",
            "extra": "iterations: 161016\ncpu: 4.334627266855469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9590452085212897,
            "unit": "us/iter",
            "extra": "iterations: 172932\ncpu: 3.9587340341868438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8921713255284565,
            "unit": "us/iter",
            "extra": "iterations: 179121\ncpu: 3.8918169505529794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.764079349311389,
            "unit": "us/iter",
            "extra": "iterations: 190260\ncpu: 3.763820245979184 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 275.14634222919864,
            "unit": "us/iter",
            "extra": "iterations: 2548\ncpu: 275.12310361067534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.566024169953735,
            "unit": "us/iter",
            "extra": "iterations: 15722\ncpu: 44.56446870627146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 31.114760041056254,
            "unit": "us/iter",
            "extra": "iterations: 22408\ncpu: 31.113742458050655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.00482044281536,
            "unit": "us/iter",
            "extra": "iterations: 26738\ncpu: 26.004032687560798 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.901190299888686,
            "unit": "us/iter",
            "extra": "iterations: 27010\ncpu: 26.899991336542012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.243919365807166,
            "unit": "us/iter",
            "extra": "iterations: 27941\ncpu: 25.24259296374503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.774534777487574,
            "unit": "us/iter",
            "extra": "iterations: 28021\ncpu: 24.773892509189544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 643.5218929551614,
            "unit": "us/iter",
            "extra": "iterations: 1093\ncpu: 643.4817767612075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.47066191621062,
            "unit": "us/iter",
            "extra": "iterations: 5824\ncpu: 120.46406301511014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.4924650399825,
            "unit": "us/iter",
            "extra": "iterations: 9754\ncpu: 71.48699641172843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.195003252620744,
            "unit": "us/iter",
            "extra": "iterations: 11068\ncpu: 62.192815684857216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.72867481132269,
            "unit": "us/iter",
            "extra": "iterations: 10600\ncpu: 64.72326367924526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.07494772921955,
            "unit": "us/iter",
            "extra": "iterations: 11670\ncpu: 59.07149228791794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.01307382609477,
            "unit": "us/iter",
            "extra": "iterations: 11351\ncpu: 62.009352744251544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3732.3057553192452,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3731.6202074467988 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 909.4137090908976,
            "unit": "us/iter",
            "extra": "iterations: 770\ncpu: 909.3728896103919 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.038325203264,
            "unit": "us/iter",
            "extra": "iterations: 1107\ncpu: 620.9225284552857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.4920628233531,
            "unit": "us/iter",
            "extra": "iterations: 1353\ncpu: 516.3859859571337 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 495.7085626760455,
            "unit": "us/iter",
            "extra": "iterations: 1420\ncpu: 495.6205077464779 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.7703631544056,
            "unit": "us/iter",
            "extra": "iterations: 1509\ncpu: 463.7536872100715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.9116848874556,
            "unit": "us/iter",
            "extra": "iterations: 1555\ncpu: 449.87295691318235 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.404624895388928,
            "unit": "us/iter",
            "extra": "iterations: 27483\ncpu: 25.404020048757353 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.991253351240755,
            "unit": "us/iter",
            "extra": "iterations: 116897\ncpu: 5.990601452560789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.580493195469576,
            "unit": "us/iter",
            "extra": "iterations: 154162\ncpu: 4.580263223102968 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.947637452775125,
            "unit": "us/iter",
            "extra": "iterations: 177872\ncpu: 3.9473973194207073 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8139382360310274,
            "unit": "us/iter",
            "extra": "iterations: 183586\ncpu: 3.813602023030104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.73910159423158,
            "unit": "us/iter",
            "extra": "iterations: 187363\ncpu: 3.738766581448852 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.7503390025840333,
            "unit": "us/iter",
            "extra": "iterations: 193500\ncpu: 3.750082971576212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.88555685440937,
            "unit": "us/iter",
            "extra": "iterations: 4705\ncpu: 148.87345717322003 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.837665955128173,
            "unit": "us/iter",
            "extra": "iterations: 22018\ncpu: 31.834390634935033 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.75297034934949,
            "unit": "us/iter",
            "extra": "iterations: 30657\ncpu: 22.74956897282857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.253729267581623,
            "unit": "us/iter",
            "extra": "iterations: 34270\ncpu: 20.252028567259984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.46417374573664,
            "unit": "us/iter",
            "extra": "iterations: 34303\ncpu: 20.461842608518182 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.354093048834,
            "unit": "us/iter",
            "extra": "iterations: 36368\ncpu: 19.353689699736023 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.85193677209116,
            "unit": "us/iter",
            "extra": "iterations: 36835\ncpu: 18.850883751866473 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 341.20747602905044,
            "unit": "us/iter",
            "extra": "iterations: 2065\ncpu: 341.1944915254229 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.580833301139,
            "unit": "us/iter",
            "extra": "iterations: 10354\ncpu: 67.57749401197599 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.79853403285944,
            "unit": "us/iter",
            "extra": "iterations: 14486\ncpu: 47.79739003175445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.37093900800269,
            "unit": "us/iter",
            "extra": "iterations: 17117\ncpu: 42.36713179879678 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.834972998355056,
            "unit": "us/iter",
            "extra": "iterations: 17036\ncpu: 41.83162972528783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.1755629142781,
            "unit": "us/iter",
            "extra": "iterations: 17802\ncpu: 39.17167638467601 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.81212862526715,
            "unit": "us/iter",
            "extra": "iterations: 18309\ncpu: 37.8087455349826 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1853.613271276618,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1853.5347845744689 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 414.00373874407757,
            "unit": "us/iter",
            "extra": "iterations: 1688\ncpu: 413.9549413507077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.2753851508106,
            "unit": "us/iter",
            "extra": "iterations: 2586\ncpu: 269.25969334879966 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 229.61872371555134,
            "unit": "us/iter",
            "extra": "iterations: 2939\ncpu: 229.593130316435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.65298440484176,
            "unit": "us/iter",
            "extra": "iterations: 3142\ncpu: 222.6435668364082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.55473932926225,
            "unit": "us/iter",
            "extra": "iterations: 3280\ncpu: 215.53555396341554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 217.199735276971,
            "unit": "us/iter",
            "extra": "iterations: 3430\ncpu: 217.18875276967896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4495d76bdf7619ab0e63f26b4682d305ea604b2",
          "message": "Replace stoi/stoul with from_chars in BED reader (#291)\n\n* Replace stoi/stoul with from_chars in BED reader\n\nparse_score used std::stoi and parse_thickness used std::stoul, both\nlocale-dependent and inconsistent with from_chars used elsewhere for\ncoordinate parsing. Replaced with std::from_chars which is\nlocale-independent, handles overflow via errc, and matches the\nexisting pattern in the codebase.\n\nCloses #275\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for BED reader from_chars fix\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-28T21:30:32-05:00",
          "tree_id": "e900bb993c7ee3887ac28d269fb73fb828d182b3",
          "url": "https://github.com/genogrove/genogrove/commit/b4495d76bdf7619ab0e63f26b4682d305ea604b2"
        },
        "date": 1774751678525,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.505150009473674,
            "unit": "us/iter",
            "extra": "iterations: 21112\ncpu: 33.4966390204623 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.566474327760115,
            "unit": "us/iter",
            "extra": "iterations: 92824\ncpu: 7.563170408515039 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.084060336582203,
            "unit": "us/iter",
            "extra": "iterations: 136965\ncpu: 5.083567692476181 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.338212528962166,
            "unit": "us/iter",
            "extra": "iterations: 161418\ncpu: 4.3373527921297494 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9802833317183306,
            "unit": "us/iter",
            "extra": "iterations: 175441\ncpu: 3.979814376343042 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8918089311616475,
            "unit": "us/iter",
            "extra": "iterations: 180626\ncpu: 3.891303488977225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6540715418391954,
            "unit": "us/iter",
            "extra": "iterations: 191077\ncpu: 3.6537305693516253 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.30318495541957,
            "unit": "us/iter",
            "extra": "iterations: 2579\ncpu: 272.265238464521 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.20058540497207,
            "unit": "us/iter",
            "extra": "iterations: 16211\ncpu: 43.19705428412806 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.869561131229382,
            "unit": "us/iter",
            "extra": "iterations: 23196\ncpu: 29.865615062941856 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.361190444882254,
            "unit": "us/iter",
            "extra": "iterations: 27378\ncpu: 25.35820910950401 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.716922024881075,
            "unit": "us/iter",
            "extra": "iterations: 26688\ncpu: 26.712910821342952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.980873060344827,
            "unit": "us/iter",
            "extra": "iterations: 27840\ncpu: 24.977221264367785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.650332457479635,
            "unit": "us/iter",
            "extra": "iterations: 28163\ncpu: 24.64830724709724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 636.0280902394146,
            "unit": "us/iter",
            "extra": "iterations: 1086\ncpu: 635.9344640883968 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.09662974358847,
            "unit": "us/iter",
            "extra": "iterations: 5850\ncpu: 122.07911076923082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.75696520671457,
            "unit": "us/iter",
            "extra": "iterations: 9772\ncpu: 69.75363733115016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.23946522245083,
            "unit": "us/iter",
            "extra": "iterations: 11171\ncpu: 61.23137570495028 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 65.72598891669813,
            "unit": "us/iter",
            "extra": "iterations: 11188\ncpu: 65.71756918126577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.16102422446625,
            "unit": "us/iter",
            "extra": "iterations: 11476\ncpu: 59.154112582781345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.089399585547405,
            "unit": "us/iter",
            "extra": "iterations: 11099\ncpu: 62.08208225966301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3699.2594736842107,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3698.732878947366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 906.3511279069545,
            "unit": "us/iter",
            "extra": "iterations: 774\ncpu: 906.278197674421 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.7755163283282,
            "unit": "us/iter",
            "extra": "iterations: 1133\ncpu: 621.6295039717565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 512.3885403225812,
            "unit": "us/iter",
            "extra": "iterations: 1364\ncpu: 512.2737551319644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.271306778479,
            "unit": "us/iter",
            "extra": "iterations: 1431\ncpu: 490.23513696715713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.7197346002677,
            "unit": "us/iter",
            "extra": "iterations: 1526\ncpu: 459.68739842726126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.27757442748043,
            "unit": "us/iter",
            "extra": "iterations: 1572\ncpu: 446.25452544529475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.775790223361145,
            "unit": "us/iter",
            "extra": "iterations: 27310\ncpu: 25.773883925302027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.010211358439125,
            "unit": "us/iter",
            "extra": "iterations: 116759\ncpu: 6.010079420001898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.511997207317914,
            "unit": "us/iter",
            "extra": "iterations: 154690\ncpu: 4.511350947055402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9673562926232053,
            "unit": "us/iter",
            "extra": "iterations: 176254\ncpu: 3.9669107651457582 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.832369313074083,
            "unit": "us/iter",
            "extra": "iterations: 182436\ncpu: 3.83190451994123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.766462203267763,
            "unit": "us/iter",
            "extra": "iterations: 185942\ncpu: 3.766097767045635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6117520695279532,
            "unit": "us/iter",
            "extra": "iterations: 193764\ncpu: 3.6115239776222756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 151.3076848721321,
            "unit": "us/iter",
            "extra": "iterations: 4614\ncpu: 151.29489423493598 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 32.06989949883641,
            "unit": "us/iter",
            "extra": "iterations: 22348\ncpu: 32.06636517809206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.637292131424154,
            "unit": "us/iter",
            "extra": "iterations: 29675\ncpu: 23.63559299073282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.804546923076675,
            "unit": "us/iter",
            "extra": "iterations: 33800\ncpu: 20.802435118343013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.263253880879855,
            "unit": "us/iter",
            "extra": "iterations: 34335\ncpu: 20.261042696956416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.1768433602849,
            "unit": "us/iter",
            "extra": "iterations: 36485\ncpu: 19.174744360696266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.739365193311347,
            "unit": "us/iter",
            "extra": "iterations: 37194\ncpu: 18.73697499596717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 345.92164668617096,
            "unit": "us/iter",
            "extra": "iterations: 2052\ncpu: 345.87288157894733 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.93491533378148,
            "unit": "us/iter",
            "extra": "iterations: 10441\ncpu: 66.93029977971463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.47126952381012,
            "unit": "us/iter",
            "extra": "iterations: 14700\ncpu: 47.465042517006715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.647551864976734,
            "unit": "us/iter",
            "extra": "iterations: 16649\ncpu: 41.64454339599951 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.46570263391615,
            "unit": "us/iter",
            "extra": "iterations: 16895\ncpu: 41.46188523231741 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.697214163822345,
            "unit": "us/iter",
            "extra": "iterations: 17580\ncpu: 39.69469994311712 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.486874539354964,
            "unit": "us/iter",
            "extra": "iterations: 18181\ncpu: 38.48579753588922 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1873.7714825737257,
            "unit": "us/iter",
            "extra": "iterations: 373\ncpu: 1873.5863914209026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 438.9652672974495,
            "unit": "us/iter",
            "extra": "iterations: 1691\ncpu: 438.95490183323506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 279.45069718875544,
            "unit": "us/iter",
            "extra": "iterations: 2490\ncpu: 279.42948835341423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.80379651545618,
            "unit": "us/iter",
            "extra": "iterations: 3042\ncpu: 228.78045857988116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.09408053265676,
            "unit": "us/iter",
            "extra": "iterations: 3154\ncpu: 222.08342105263029 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.62500877989166,
            "unit": "us/iter",
            "extra": "iterations: 3303\ncpu: 211.61188343929794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.7821673565903,
            "unit": "us/iter",
            "extra": "iterations: 3382\ncpu: 206.76812862211705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4aedd4402e0f5bd234f996de725d6fbea593caf3",
          "message": "Tighten range concepts on bulk insert container parameters (#292)\n\n* Tighten range concepts on bulk insert container parameters\n\ninput_range was too weak — sorted+bulk and build_tree_bottom_up\nneed forward_range + sized_range (multi-pass, size(), empty()).\nUnsorted bulk needs random_access_range (std::sort).\n\nCloses #281\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add sized_range to unsorted bulk overload and CHANGELOG\n\nrandom_access_range does not imply sized_range in C++20. The\nunsorted bulk overload calls data.empty() and forwards to the\nsorted overload which requires sized_range.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T06:43:42-05:00",
          "tree_id": "14489271db7af28df35efc4f84986d34e52dd2c1",
          "url": "https://github.com/genogrove/genogrove/commit/4aedd4402e0f5bd234f996de725d6fbea593caf3"
        },
        "date": 1774784883017,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.2732580881998,
            "unit": "us/iter",
            "extra": "iterations: 20431\ncpu: 34.2663876951691 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.687556080347973,
            "unit": "us/iter",
            "extra": "iterations: 91253\ncpu: 7.686241307135107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.153626759425225,
            "unit": "us/iter",
            "extra": "iterations: 136124\ncpu: 5.153070186006875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.333658575191332,
            "unit": "us/iter",
            "extra": "iterations: 159839\ncpu: 4.333127997547534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9643814882366364,
            "unit": "us/iter",
            "extra": "iterations: 174354\ncpu: 3.9636784186195917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9070547575399797,
            "unit": "us/iter",
            "extra": "iterations: 178916\ncpu: 3.906922807350934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6623515261074533,
            "unit": "us/iter",
            "extra": "iterations: 190845\ncpu: 3.6618823705101 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 276.3373489562916,
            "unit": "us/iter",
            "extra": "iterations: 2539\ncpu: 276.3266337140606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.42177541400598,
            "unit": "us/iter",
            "extra": "iterations: 16123\ncpu: 43.420637598461816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.26106401727887,
            "unit": "us/iter",
            "extra": "iterations: 23150\ncpu: 30.25942907127432 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.367272638601992,
            "unit": "us/iter",
            "extra": "iterations: 25631\ncpu: 25.365404939331317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.75481055040787,
            "unit": "us/iter",
            "extra": "iterations: 27089\ncpu: 25.75374292148106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.995666153901503,
            "unit": "us/iter",
            "extra": "iterations: 27953\ncpu: 24.99377143777054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.247439394480143,
            "unit": "us/iter",
            "extra": "iterations: 28009\ncpu: 25.245748616516117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 642.7527671860702,
            "unit": "us/iter",
            "extra": "iterations: 1091\ncpu: 642.6523703024757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 118.86764979619348,
            "unit": "us/iter",
            "extra": "iterations: 5888\ncpu: 118.8603593750001 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.206033068098,
            "unit": "us/iter",
            "extra": "iterations: 9677\ncpu: 71.20072212462527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.76505923375692,
            "unit": "us/iter",
            "extra": "iterations: 11328\ncpu: 60.76225573799433 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.816227812272246,
            "unit": "us/iter",
            "extra": "iterations: 10952\ncpu: 62.81515001826172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.764400840984884,
            "unit": "us/iter",
            "extra": "iterations: 11653\ncpu: 59.758029777739345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.771452102906444,
            "unit": "us/iter",
            "extra": "iterations: 11389\ncpu: 61.770253226797614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3745.805374331578,
            "unit": "us/iter",
            "extra": "iterations: 187\ncpu: 3745.1819732620406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 910.3400246753059,
            "unit": "us/iter",
            "extra": "iterations: 770\ncpu: 910.3161818181834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 623.0065767857086,
            "unit": "us/iter",
            "extra": "iterations: 1120\ncpu: 622.9802357142862 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.8673971789267,
            "unit": "us/iter",
            "extra": "iterations: 1347\ncpu: 516.8100044543445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 497.9980028388977,
            "unit": "us/iter",
            "extra": "iterations: 1409\ncpu: 497.97732931156736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 464.667555778217,
            "unit": "us/iter",
            "extra": "iterations: 1497\ncpu: 464.63273346693234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 453.1763130265745,
            "unit": "us/iter",
            "extra": "iterations: 1543\ncpu: 453.1110187945558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.34113143788516,
            "unit": "us/iter",
            "extra": "iterations: 27610\ncpu: 25.339735095979684 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.974000555588793,
            "unit": "us/iter",
            "extra": "iterations: 116993\ncpu: 5.973654893882542 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.549541550197285,
            "unit": "us/iter",
            "extra": "iterations: 153116\ncpu: 4.5492962133284625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9557420703624335,
            "unit": "us/iter",
            "extra": "iterations: 176742\ncpu: 3.955239105588936 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7974129951385938,
            "unit": "us/iter",
            "extra": "iterations: 183484\ncpu: 3.7973184528351194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7481831177201492,
            "unit": "us/iter",
            "extra": "iterations: 187759\ncpu: 3.74780593207249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6010336451479312,
            "unit": "us/iter",
            "extra": "iterations: 194560\ncpu: 3.600948416940801 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 150.63987615965368,
            "unit": "us/iter",
            "extra": "iterations: 4635\ncpu: 150.61653247033493 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.39647000762643,
            "unit": "us/iter",
            "extra": "iterations: 22289\ncpu: 31.39481677060445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.69227100192708,
            "unit": "us/iter",
            "extra": "iterations: 31140\ncpu: 22.69038615928086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.278209609766616,
            "unit": "us/iter",
            "extra": "iterations: 34569\ncpu: 20.276668980878814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.078490730177105,
            "unit": "us/iter",
            "extra": "iterations: 35060\ncpu: 20.07527686822594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.168212131120764,
            "unit": "us/iter",
            "extra": "iterations: 36699\ncpu: 19.16708834028173 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.59785841037085,
            "unit": "us/iter",
            "extra": "iterations: 37644\ncpu: 18.59513261077466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.9296526005894,
            "unit": "us/iter",
            "extra": "iterations: 2038\ncpu: 342.913350343475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.61713575178959,
            "unit": "us/iter",
            "extra": "iterations: 10475\ncpu: 66.61188973747052 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.28683898247911,
            "unit": "us/iter",
            "extra": "iterations: 14781\ncpu: 47.285572018131276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.818586782816695,
            "unit": "us/iter",
            "extra": "iterations: 16645\ncpu: 41.812618083508276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.50654865472031,
            "unit": "us/iter",
            "extra": "iterations: 17357\ncpu: 40.505147663766614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.06971060894781,
            "unit": "us/iter",
            "extra": "iterations: 17834\ncpu: 39.06638830324083 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.029228528268234,
            "unit": "us/iter",
            "extra": "iterations: 18536\ncpu: 38.02625221191205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1884.6278203753552,
            "unit": "us/iter",
            "extra": "iterations: 373\ncpu: 1884.4885656836311 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 412.6858933412067,
            "unit": "us/iter",
            "extra": "iterations: 1697\ncpu: 412.64193812610614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.79539552813924,
            "unit": "us/iter",
            "extra": "iterations: 2594\ncpu: 269.7856973785648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 229.47010848125254,
            "unit": "us/iter",
            "extra": "iterations: 3042\ncpu: 229.45936587771152 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 223.6908150159808,
            "unit": "us/iter",
            "extra": "iterations: 3130\ncpu: 223.6838817891365 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.9573816630997,
            "unit": "us/iter",
            "extra": "iterations: 3283\ncpu: 211.94062473347495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 205.41751375073534,
            "unit": "us/iter",
            "extra": "iterations: 3418\ncpu: 205.39203949678065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "403da3a5d99022925b00323f3f598c5d028dcb07",
          "message": "Fix vertex_count/indexed_vertex_count inflated by separator keys (#293)\n\n* Fix vertex_count/indexed_vertex_count inflated by separator keys\n\nkey_storage contains both leaf (data) keys and internal separator\nkeys. vertex_count() and indexed_vertex_count() used\nkey_storage.size(), inflating counts after splits. Added\nleaf_key_count member that tracks only data insertions. Reconstructed\nduring deserialization via link_leaves_and_find_rightmost.\n\nCloses #282\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add test verifying vertex count excludes separator keys after splits\n\nInserts 20 keys with order=3 to force multiple node splits, then\nverifies indexed_vertex_count() equals the number of data insertions\n(not inflated by internal separator keys in key_storage).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for vertex count fix\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add external keys to VertexCountExcludesSeparatorKeys test\n\nVerifies vertex_count() = indexed + external after splits,\nnot just the indexed count alone.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T13:40:30-05:00",
          "tree_id": "4b95d8ca69ca9e01a26c4a88fd0220189b8379e9",
          "url": "https://github.com/genogrove/genogrove/commit/403da3a5d99022925b00323f3f598c5d028dcb07"
        },
        "date": 1774809879568,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.256843004628074,
            "unit": "us/iter",
            "extra": "iterations: 19663\ncpu: 33.25510746071301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.717400885801891,
            "unit": "us/iter",
            "extra": "iterations: 90991\ncpu: 7.716168291369479 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.263527122510164,
            "unit": "us/iter",
            "extra": "iterations: 134593\ncpu: 5.262426485775633 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.343231567489982,
            "unit": "us/iter",
            "extra": "iterations: 161698\ncpu: 4.343111330999765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.996938188155286,
            "unit": "us/iter",
            "extra": "iterations: 175015\ncpu: 3.996527309087793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8833326311578378,
            "unit": "us/iter",
            "extra": "iterations: 179917\ncpu: 3.883052902171554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7043584662715454,
            "unit": "us/iter",
            "extra": "iterations: 189499\ncpu: 3.7040230344223457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.53356635441367,
            "unit": "us/iter",
            "extra": "iterations: 2562\ncpu: 273.52542466822814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.13166856470815,
            "unit": "us/iter",
            "extra": "iterations: 16157\ncpu: 43.13014185801821 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.574357285689427,
            "unit": "us/iter",
            "extra": "iterations: 23004\ncpu: 30.573664753955814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.803429359540736,
            "unit": "us/iter",
            "extra": "iterations: 27371\ncpu: 25.80309846187572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.91361493335304,
            "unit": "us/iter",
            "extra": "iterations: 26933\ncpu: 25.912838228195902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.147935221791446,
            "unit": "us/iter",
            "extra": "iterations: 27571\ncpu: 25.146416633419204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.572496446664495,
            "unit": "us/iter",
            "extra": "iterations: 28424\ncpu: 24.57183855192796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 641.817786960508,
            "unit": "us/iter",
            "extra": "iterations: 1089\ncpu: 641.7670055096423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 116.79092451244112,
            "unit": "us/iter",
            "extra": "iterations: 5948\ncpu: 116.78749092131795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.63107907396167,
            "unit": "us/iter",
            "extra": "iterations: 9978\ncpu: 70.62470946081375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.25489246581028,
            "unit": "us/iter",
            "extra": "iterations: 11773\ncpu: 60.11368240890199 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.51197455673585,
            "unit": "us/iter",
            "extra": "iterations: 11280\ncpu: 61.51143687943238 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.705796987391004,
            "unit": "us/iter",
            "extra": "iterations: 11817\ncpu: 58.69755978674817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.83753750331336,
            "unit": "us/iter",
            "extra": "iterations: 11319\ncpu: 60.83355004859085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3716.743643617078,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3716.2574627659633 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 902.1806821106888,
            "unit": "us/iter",
            "extra": "iterations: 777\ncpu: 902.1123719433735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 617.9239053934381,
            "unit": "us/iter",
            "extra": "iterations: 1131\ncpu: 617.8943545534943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 512.7854492330268,
            "unit": "us/iter",
            "extra": "iterations: 1369\ncpu: 512.7548853177486 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 501.9750920000092,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 501.93926400000066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.17437738331057,
            "unit": "us/iter",
            "extra": "iterations: 1521\ncpu: 459.1279355687053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.3869271099876,
            "unit": "us/iter",
            "extra": "iterations: 1564\ncpu: 446.35903772378504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.176166041410184,
            "unit": "us/iter",
            "extra": "iterations: 27722\ncpu: 25.173512408917126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.026570159353476,
            "unit": "us/iter",
            "extra": "iterations: 116157\ncpu: 6.025932496534866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.6543091209685725,
            "unit": "us/iter",
            "extra": "iterations: 150006\ncpu: 4.653618068610591 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9180283584680606,
            "unit": "us/iter",
            "extra": "iterations: 178571\ncpu: 3.917960508705218 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8221401508555477,
            "unit": "us/iter",
            "extra": "iterations: 183752\ncpu: 3.8220170392703317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7335750229754767,
            "unit": "us/iter",
            "extra": "iterations: 187156\ncpu: 3.7333915289918522 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.663314861150478,
            "unit": "us/iter",
            "extra": "iterations: 194635\ncpu: 3.6632188660826577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.50830021321553,
            "unit": "us/iter",
            "extra": "iterations: 4690\ncpu: 149.50182302771788 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.142403279725507,
            "unit": "us/iter",
            "extra": "iterations: 22136\ncpu: 31.14038073726047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.25404728766946,
            "unit": "us/iter",
            "extra": "iterations: 30177\ncpu: 23.253316366769354 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.55072514792061,
            "unit": "us/iter",
            "extra": "iterations: 33971\ncpu: 20.548954313973585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.62337809124748,
            "unit": "us/iter",
            "extra": "iterations: 33886\ncpu: 20.622524316827075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.436356545883527,
            "unit": "us/iter",
            "extra": "iterations: 36015\ncpu: 19.434410578925295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.031490424465705,
            "unit": "us/iter",
            "extra": "iterations: 36917\ncpu: 19.031099601809476 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.36035137796154,
            "unit": "us/iter",
            "extra": "iterations: 2032\ncpu: 344.3369178149625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.06407468840081,
            "unit": "us/iter",
            "extra": "iterations: 10430\ncpu: 67.06127238734454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.21466987421669,
            "unit": "us/iter",
            "extra": "iterations: 14549\ncpu: 48.207882741081434 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.379039102759585,
            "unit": "us/iter",
            "extra": "iterations: 16495\ncpu: 42.377639890876004 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 43.105057801059,
            "unit": "us/iter",
            "extra": "iterations: 16799\ncpu: 43.101887314721075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.90046253229999,
            "unit": "us/iter",
            "extra": "iterations: 17415\ncpu: 39.89720700545503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.70189059214059,
            "unit": "us/iter",
            "extra": "iterations: 18070\ncpu: 38.69903818483657 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1882.140217741923,
            "unit": "us/iter",
            "extra": "iterations: 372\ncpu: 1882.011809139787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 409.7213335307997,
            "unit": "us/iter",
            "extra": "iterations: 1688\ncpu: 409.69142654028525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.35196437054225,
            "unit": "us/iter",
            "extra": "iterations: 2526\ncpu: 278.3307216943763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.8400026755807,
            "unit": "us/iter",
            "extra": "iterations: 2990\ncpu: 234.8335428093661 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.99220275023848,
            "unit": "us/iter",
            "extra": "iterations: 3127\ncpu: 222.9707841381527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 214.42948923739434,
            "unit": "us/iter",
            "extra": "iterations: 3252\ncpu: 214.4167629151291 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 205.4326580893162,
            "unit": "us/iter",
            "extra": "iterations: 3381\ncpu: 205.41148003549165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c1d8b98113f7ca0ea0d9aaaed85a0b8829f4b3f",
          "message": "Fix dangling pointer in bulk insert when build_tree_bottom_up throws (#294)\n\n* Fix dangling pointer in bulk insert when build_tree_bottom_up throws\n\nThe old root was deleted before build_tree_bottom_up completed. If\nthe build threw, root_nodes/rightmost_nodes held dangling pointers.\nNow RAII-guards the old root with unique_ptr and erases map entries\nbefore the build — if it throws, maps are consistent and the old\nroot is still cleaned up.\n\nCloses #283\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for bulk insert exception safety fix\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T14:37:15-05:00",
          "tree_id": "5f362ca199fb5292d09eacd38bef0bed50b50e4c",
          "url": "https://github.com/genogrove/genogrove/commit/8c1d8b98113f7ca0ea0d9aaaed85a0b8829f4b3f"
        },
        "date": 1774813277169,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.485343522277525,
            "unit": "us/iter",
            "extra": "iterations: 20447\ncpu: 33.480195921162036 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.680337973255643,
            "unit": "us/iter",
            "extra": "iterations: 91309\ncpu: 7.678825187002377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.077640722390999,
            "unit": "us/iter",
            "extra": "iterations: 137654\ncpu: 5.077317811324044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.32496035373415,
            "unit": "us/iter",
            "extra": "iterations: 161251\ncpu: 4.324727362931084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.953658407510781,
            "unit": "us/iter",
            "extra": "iterations: 176491\ncpu: 3.952780209755741 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.894812405729407,
            "unit": "us/iter",
            "extra": "iterations: 181658\ncpu: 3.8942294476433754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.671191216407548,
            "unit": "us/iter",
            "extra": "iterations: 190742\ncpu: 3.6708094389279795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 276.29719575472177,
            "unit": "us/iter",
            "extra": "iterations: 2544\ncpu: 276.26510573899355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.00456378652397,
            "unit": "us/iter",
            "extra": "iterations: 15983\ncpu: 44.0014056810361 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.327220885634585,
            "unit": "us/iter",
            "extra": "iterations: 22944\ncpu: 30.325264513598338 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.919446161716582,
            "unit": "us/iter",
            "extra": "iterations: 27369\ncpu: 25.917915561401564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.27748443793438,
            "unit": "us/iter",
            "extra": "iterations: 27310\ncpu: 26.27540948370558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.42429691572445,
            "unit": "us/iter",
            "extra": "iterations: 27624\ncpu: 25.422638394149978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.73823620048663,
            "unit": "us/iter",
            "extra": "iterations: 27972\ncpu: 24.73721335621336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 636.61104166666,
            "unit": "us/iter",
            "extra": "iterations: 1104\ncpu: 636.5283414855058 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 119.27561169935848,
            "unit": "us/iter",
            "extra": "iterations: 5761\ncpu: 119.2642850199618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.96615711625715,
            "unit": "us/iter",
            "extra": "iterations: 9668\ncpu: 70.96190008274691 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.36512454407938,
            "unit": "us/iter",
            "extra": "iterations: 11241\ncpu: 62.35580188595331 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.53514813495821,
            "unit": "us/iter",
            "extra": "iterations: 11233\ncpu: 61.529664114662246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.505750128314844,
            "unit": "us/iter",
            "extra": "iterations: 11690\ncpu: 59.499307271171965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.2955767671417,
            "unit": "us/iter",
            "extra": "iterations: 11346\ncpu: 62.292265996827155 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3683.4228526315296,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3683.101573684205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.4048139534978,
            "unit": "us/iter",
            "extra": "iterations: 774\ncpu: 903.362409560722 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 617.6623186619763,
            "unit": "us/iter",
            "extra": "iterations: 1136\ncpu: 617.5975607394372 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 514.0815222790429,
            "unit": "us/iter",
            "extra": "iterations: 1369\ncpu: 513.8689349890425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 488.5025202514027,
            "unit": "us/iter",
            "extra": "iterations: 1432\ncpu: 488.4538393854746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 461.8366510862399,
            "unit": "us/iter",
            "extra": "iterations: 1519\ncpu: 461.7596576695189 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.60352490421343,
            "unit": "us/iter",
            "extra": "iterations: 1566\ncpu: 446.5667701149425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.056811791949183,
            "unit": "us/iter",
            "extra": "iterations: 28070\ncpu: 25.055491663697875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.02897857353287,
            "unit": "us/iter",
            "extra": "iterations: 115418\ncpu: 6.028467344781562 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.621180198240297,
            "unit": "us/iter",
            "extra": "iterations: 152643\ncpu: 4.6210139082696235 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.039585639977786,
            "unit": "us/iter",
            "extra": "iterations: 172256\ncpu: 4.039228113969917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.9467338437653265,
            "unit": "us/iter",
            "extra": "iterations: 179064\ncpu: 3.946362887012473 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.933824787859755,
            "unit": "us/iter",
            "extra": "iterations: 178184\ncpu: 3.93355314730843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.794493304340435,
            "unit": "us/iter",
            "extra": "iterations: 185792\ncpu: 3.7942599789011275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.4703452177622,
            "unit": "us/iter",
            "extra": "iterations: 4684\ncpu: 149.45926259607137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.45067920146443,
            "unit": "us/iter",
            "extra": "iterations: 22391\ncpu: 31.448987316332445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.39175158015016,
            "unit": "us/iter",
            "extra": "iterations: 29744\ncpu: 23.389615250134394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.809244561185107,
            "unit": "us/iter",
            "extra": "iterations: 33693\ncpu: 20.808098418069072 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.796625968419136,
            "unit": "us/iter",
            "extra": "iterations: 33818\ncpu: 20.794466053580976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.62883896358547,
            "unit": "us/iter",
            "extra": "iterations: 35700\ncpu: 19.62708607843127 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.085698066313615,
            "unit": "us/iter",
            "extra": "iterations: 36614\ncpu: 19.083709673895363 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.7863744514892,
            "unit": "us/iter",
            "extra": "iterations: 2051\ncpu: 344.75526036079964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.12238229664999,
            "unit": "us/iter",
            "extra": "iterations: 10450\ncpu: 67.1178677511962 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.40950115977627,
            "unit": "us/iter",
            "extra": "iterations: 14658\ncpu: 47.40620991949779 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.890263397947486,
            "unit": "us/iter",
            "extra": "iterations: 16663\ncpu: 41.887339314649005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.68625217752074,
            "unit": "us/iter",
            "extra": "iterations: 16877\ncpu: 41.68180541565426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.19933660989801,
            "unit": "us/iter",
            "extra": "iterations: 17498\ncpu: 40.19613738713015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.65912372441865,
            "unit": "us/iter",
            "extra": "iterations: 18129\ncpu: 38.657299795907086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1857.5903271767697,
            "unit": "us/iter",
            "extra": "iterations: 379\ncpu: 1857.422928759906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.62290169690266,
            "unit": "us/iter",
            "extra": "iterations: 1709\ncpu: 410.6046424809833 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 271.3791364696701,
            "unit": "us/iter",
            "extra": "iterations: 2572\ncpu: 271.3585575427681 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 230.38306794195321,
            "unit": "us/iter",
            "extra": "iterations: 3032\ncpu: 230.37551846965877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.3906250797657,
            "unit": "us/iter",
            "extra": "iterations: 3134\ncpu: 226.3794077855778 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.35004055728012,
            "unit": "us/iter",
            "extra": "iterations: 3230\ncpu: 216.33366811145686 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.88439667458428,
            "unit": "us/iter",
            "extra": "iterations: 3368\ncpu: 206.86825178147222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f23e5ca72fd58cbede26c2da763eb34688fcba6c",
          "message": "Clamp internal split midpoint to guarantee keys on both sides (#295)\n\n* Clamp internal split midpoint to guarantee keys on both sides\n\nFor order=3 with default_mid()=2 or sorted_mid()=2, the right\nsibling got 0 keys after an internal split — violating B+ tree\ninvariants. Now clamps mid to [1, keys.size()-2] for internal\nsplits so key[mid] is promoted and both sides get >= 1 key.\n\nCloses #285\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for internal split clamp fix\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T15:38:22-05:00",
          "tree_id": "bee707ed89ce90a2bc8f24cfc9ef2de25364847d",
          "url": "https://github.com/genogrove/genogrove/commit/f23e5ca72fd58cbede26c2da763eb34688fcba6c"
        },
        "date": 1774816980135,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 49.9119620308095,
            "unit": "us/iter",
            "extra": "iterations: 13827\ncpu: 49.90849157445578 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.277073840467699,
            "unit": "us/iter",
            "extra": "iterations: 83870\ncpu: 8.27628590676046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.503993402111206,
            "unit": "us/iter",
            "extra": "iterations: 125040\ncpu: 5.503543610044786 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.687174536446279,
            "unit": "us/iter",
            "extra": "iterations: 146531\ncpu: 4.686572042775929 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.287453720853138,
            "unit": "us/iter",
            "extra": "iterations: 163054\ncpu: 4.287291142811586 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.291084721220919,
            "unit": "us/iter",
            "extra": "iterations: 163678\ncpu: 4.289953041948214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.9720513547287926,
            "unit": "us/iter",
            "extra": "iterations: 176050\ncpu: 3.9710117523430872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 484.7239362279615,
            "unit": "us/iter",
            "extra": "iterations: 1474\ncpu: 484.6020278154683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 47.045531061060004,
            "unit": "us/iter",
            "extra": "iterations: 15051\ncpu: 47.04010936150423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 32.54003857635881,
            "unit": "us/iter",
            "extra": "iterations: 21438\ncpu: 32.536830954380065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 27.15198119918647,
            "unit": "us/iter",
            "extra": "iterations: 25584\ncpu: 27.148162328017555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 27.625880973239695,
            "unit": "us/iter",
            "extra": "iterations: 25112\ncpu: 27.624298980567055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 26.72519274010927,
            "unit": "us/iter",
            "extra": "iterations: 26061\ncpu: 26.722326810176135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 26.625141242068874,
            "unit": "us/iter",
            "extra": "iterations: 26005\ncpu: 26.62349601999621 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 1326.392895833321,
            "unit": "us/iter",
            "extra": "iterations: 528\ncpu: 1326.2596117424223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 127.82141205300515,
            "unit": "us/iter",
            "extra": "iterations: 5509\ncpu: 127.80733889998145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 76.09243994735064,
            "unit": "us/iter",
            "extra": "iterations: 9117\ncpu: 76.0878649775147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 63.70096173305068,
            "unit": "us/iter",
            "extra": "iterations: 10871\ncpu: 63.692563793579296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 67.02076472303125,
            "unit": "us/iter",
            "extra": "iterations: 10290\ncpu: 67.01393644314878 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.988887288665964,
            "unit": "us/iter",
            "extra": "iterations: 11179\ncpu: 62.98247356650841 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 65.71911194444677,
            "unit": "us/iter",
            "extra": "iterations: 10800\ncpu: 65.70809120370373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 7386.952604166552,
            "unit": "us/iter",
            "extra": "iterations: 96\ncpu: 7386.496489583339 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 963.1582123287513,
            "unit": "us/iter",
            "extra": "iterations: 730\ncpu: 963.0417232876727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 654.4360274101916,
            "unit": "us/iter",
            "extra": "iterations: 1058\ncpu: 654.396151228732 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 547.1781402013781,
            "unit": "us/iter",
            "extra": "iterations: 1291\ncpu: 547.1614144074367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 530.1487483345675,
            "unit": "us/iter",
            "extra": "iterations: 1351\ncpu: 530.0468193930425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 488.4582840663299,
            "unit": "us/iter",
            "extra": "iterations: 1387\ncpu: 488.43270656092193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 477.78932138023873,
            "unit": "us/iter",
            "extra": "iterations: 1478\ncpu: 477.7199303112324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 1033.738744047605,
            "unit": "us/iter",
            "extra": "iterations: 672\ncpu: 1033.624589285713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.906321269716848,
            "unit": "us/iter",
            "extra": "iterations: 102070\ncpu: 6.905209219163323 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 5.106936537091063,
            "unit": "us/iter",
            "extra": "iterations: 136111\ncpu: 5.106476978348546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.29474670797835,
            "unit": "us/iter",
            "extra": "iterations: 163957\ncpu: 4.294305330056059 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 4.132300860554353,
            "unit": "us/iter",
            "extra": "iterations: 167915\ncpu: 4.131946770687547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.9525642283316778,
            "unit": "us/iter",
            "extra": "iterations: 174518\ncpu: 3.9519342532002444 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.7658125489215593,
            "unit": "us/iter",
            "extra": "iterations: 183968\ncpu: 3.765737889198151 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 88394.61587499997,
            "unit": "us/iter",
            "extra": "iterations: 8\ncpu: 88375.91162499959 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 34.694281776416716,
            "unit": "us/iter",
            "extra": "iterations: 20243\ncpu: 34.68537020204527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 24.43481145719427,
            "unit": "us/iter",
            "extra": "iterations: 28349\ncpu: 24.426863099227532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 21.047310722989216,
            "unit": "us/iter",
            "extra": "iterations: 32006\ncpu: 21.046481191026643 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 21.305048983194656,
            "unit": "us/iter",
            "extra": "iterations: 32848\ncpu: 21.30208816366291 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 20.144025074335993,
            "unit": "us/iter",
            "extra": "iterations: 34976\ncpu: 20.142224353842465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.625580042870183,
            "unit": "us/iter",
            "extra": "iterations: 35456\ncpu: 19.62369525609207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 354592.319666665,
            "unit": "us/iter",
            "extra": "iterations: 3\ncpu: 354550.78633333417 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 73.4702098360645,
            "unit": "us/iter",
            "extra": "iterations: 9455\ncpu: 73.43373273400312 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 50.69442832168082,
            "unit": "us/iter",
            "extra": "iterations: 13728\ncpu: 50.6913198572258 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 43.53616698388557,
            "unit": "us/iter",
            "extra": "iterations: 15762\ncpu: 43.5299525440934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 43.717094972767335,
            "unit": "us/iter",
            "extra": "iterations: 15973\ncpu: 43.715103674951436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 42.17071877247787,
            "unit": "us/iter",
            "extra": "iterations: 16684\ncpu: 42.162248441620626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 40.614379600480575,
            "unit": "us/iter",
            "extra": "iterations: 17471\ncpu: 40.6095171426937 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 6434082.756000009,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 6432906.728999996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 629.4351550000101,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 629.3485679999975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 287.9649870941024,
            "unit": "us/iter",
            "extra": "iterations: 2402\ncpu: 287.9449034138234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 242.87017321739768,
            "unit": "us/iter",
            "extra": "iterations: 2875\ncpu: 242.83489113043325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 234.3328680765354,
            "unit": "us/iter",
            "extra": "iterations: 2979\ncpu: 234.3275931520641 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 227.39066341780253,
            "unit": "us/iter",
            "extra": "iterations: 3078\ncpu: 227.35621474983813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 216.99591197511904,
            "unit": "us/iter",
            "extra": "iterations: 3215\ncpu: 216.98170793156928 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "committer": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "distinct": true,
          "id": "13d64a5607b5cf814f6734a5987f1254c0bbb8c4",
          "message": "Revert \"Clamp internal split midpoint to guarantee keys on both sides (#295)\"\n\nThis reverts commit f23e5ca72fd58cbede26c2da763eb34688fcba6c.",
          "timestamp": "2026-03-29T15:56:02-05:00",
          "tree_id": "5f362ca199fb5292d09eacd38bef0bed50b50e4c",
          "url": "https://github.com/genogrove/genogrove/commit/13d64a5607b5cf814f6734a5987f1254c0bbb8c4"
        },
        "date": 1774818045285,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.27705042264591,
            "unit": "us/iter",
            "extra": "iterations: 20348\ncpu: 33.27406329860428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.728299060186124,
            "unit": "us/iter",
            "extra": "iterations: 89273\ncpu: 7.726264234426982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.214699118521506,
            "unit": "us/iter",
            "extra": "iterations: 134887\ncpu: 5.213341218946231 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.574001043451847,
            "unit": "us/iter",
            "extra": "iterations: 158129\ncpu: 4.572943704190885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.217623845849637,
            "unit": "us/iter",
            "extra": "iterations: 169497\ncpu: 4.21647578423217 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.133660861015459,
            "unit": "us/iter",
            "extra": "iterations: 170868\ncpu: 4.1331625406746735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.673360265102298,
            "unit": "us/iter",
            "extra": "iterations: 190568\ncpu: 3.6732960308131446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.33101908100093,
            "unit": "us/iter",
            "extra": "iterations: 2568\ncpu: 273.3058761682246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.08563386770876,
            "unit": "us/iter",
            "extra": "iterations: 15844\ncpu: 44.08461985609696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.629722217094514,
            "unit": "us/iter",
            "extra": "iterations: 21668\ncpu: 30.62839976001481 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.490194375728056,
            "unit": "us/iter",
            "extra": "iterations: 27488\ncpu: 25.489644681315507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.548041532719854,
            "unit": "us/iter",
            "extra": "iterations: 27063\ncpu: 25.546498946901675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.96095391006045,
            "unit": "us/iter",
            "extra": "iterations: 27685\ncpu: 24.96013082896875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.377209552888495,
            "unit": "us/iter",
            "extra": "iterations: 28494\ncpu: 24.376047659156352 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 644.5787272727185,
            "unit": "us/iter",
            "extra": "iterations: 1089\ncpu: 644.5253764921954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 119.60229634734921,
            "unit": "us/iter",
            "extra": "iterations: 5804\ncpu: 119.59243314955201 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.56623950391355,
            "unit": "us/iter",
            "extra": "iterations: 9837\ncpu: 70.56279709260942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.18043549682925,
            "unit": "us/iter",
            "extra": "iterations: 11201\ncpu: 61.17758967949297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 60.85756942155875,
            "unit": "us/iter",
            "extra": "iterations: 11531\ncpu: 60.85311690226364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.68141773531159,
            "unit": "us/iter",
            "extra": "iterations: 11931\ncpu: 58.679076355712056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.88443274179277,
            "unit": "us/iter",
            "extra": "iterations: 11270\ncpu: 60.88145856255535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3673.568823529345,
            "unit": "us/iter",
            "extra": "iterations: 187\ncpu: 3673.5371176470667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 896.6660089628817,
            "unit": "us/iter",
            "extra": "iterations: 781\ncpu: 896.6088501920584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 613.722457017561,
            "unit": "us/iter",
            "extra": "iterations: 1140\ncpu: 613.6738561403514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.1598830409326,
            "unit": "us/iter",
            "extra": "iterations: 1368\ncpu: 513.1448143274873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 489.89412263489413,
            "unit": "us/iter",
            "extra": "iterations: 1427\ncpu: 489.84440714786274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.348160501977,
            "unit": "us/iter",
            "extra": "iterations: 1514\ncpu: 463.31868560105636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.63498276962036,
            "unit": "us/iter",
            "extra": "iterations: 1567\ncpu: 446.61923994894727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.74882166451367,
            "unit": "us/iter",
            "extra": "iterations: 27095\ncpu: 25.74708902011442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.117518046354672,
            "unit": "us/iter",
            "extra": "iterations: 113818\ncpu: 6.116867542919415 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.801269561300072,
            "unit": "us/iter",
            "extra": "iterations: 146501\ncpu: 4.800226312448371 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.167008337926,
            "unit": "us/iter",
            "extra": "iterations: 168747\ncpu: 4.166659502094867 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.899487804063505,
            "unit": "us/iter",
            "extra": "iterations: 179691\ncpu: 3.899103533287717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8502616832653076,
            "unit": "us/iter",
            "extra": "iterations: 173710\ncpu: 3.850176915548918 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.7092586698901875,
            "unit": "us/iter",
            "extra": "iterations: 181173\ncpu: 3.7089958216732106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.28274091293676,
            "unit": "us/iter",
            "extra": "iterations: 4732\ncpu: 149.27573415046382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.06540911713788,
            "unit": "us/iter",
            "extra": "iterations: 22529\ncpu: 31.06260242354317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.388181227901494,
            "unit": "us/iter",
            "extra": "iterations: 31110\ncpu: 22.38768495660557 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.198815232151855,
            "unit": "us/iter",
            "extra": "iterations: 34611\ncpu: 20.19611328768303 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.183704310991,
            "unit": "us/iter",
            "extra": "iterations: 34702\ncpu: 20.182147743645768 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.258197178053102,
            "unit": "us/iter",
            "extra": "iterations: 36287\ncpu: 19.25579430650095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.812975926714902,
            "unit": "us/iter",
            "extra": "iterations: 37552\ncpu: 18.811612963357423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 340.9153164867579,
            "unit": "us/iter",
            "extra": "iterations: 2038\ncpu: 340.8469342492655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.71615873620021,
            "unit": "us/iter",
            "extra": "iterations: 10508\ncpu: 66.7116901408451 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.36109964678583,
            "unit": "us/iter",
            "extra": "iterations: 14722\ncpu: 47.35652825703012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.18162697222357,
            "unit": "us/iter",
            "extra": "iterations: 16669\ncpu: 41.178393424920344 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.93713412772917,
            "unit": "us/iter",
            "extra": "iterations: 17036\ncpu: 40.934042791735116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.522829385223275,
            "unit": "us/iter",
            "extra": "iterations: 17730\ncpu: 39.52184540327132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.58422240581663,
            "unit": "us/iter",
            "extra": "iterations: 18156\ncpu: 38.5816729455827 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1863.492740053082,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1863.419822281159 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 409.39039638061473,
            "unit": "us/iter",
            "extra": "iterations: 1713\ncpu: 409.36015236427625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 271.1073618420959,
            "unit": "us/iter",
            "extra": "iterations: 2584\ncpu: 271.0852341331263 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 233.11321092714684,
            "unit": "us/iter",
            "extra": "iterations: 3020\ncpu: 233.0962559602659 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 227.103029211293,
            "unit": "us/iter",
            "extra": "iterations: 3081\ncpu: 227.08912495942823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 213.22873559011703,
            "unit": "us/iter",
            "extra": "iterations: 3279\ncpu: 213.2152689844474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 208.06874911765007,
            "unit": "us/iter",
            "extra": "iterations: 3400\ncpu: 208.0580797058824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf9728949b4cf416b14e4028fa5934a38d4936e7",
          "message": "Serialize and deserialize graph overlay edges (#296)\n\n* Serialize and deserialize graph overlay edges\n\nEdges are written as a flat list of (source_index, target_index,\n[metadata]) pairs after external keys. Indices map to key_storage\n(0..N-1) and external_key_storage (N..N+M-1). On deserialization,\nthe index→pointer array is rebuilt from the restored deques.\n\nAdded GraphEdgesSerializationRoundTrip test verifying edges between\nindexed keys and external keys survive a round-trip.\n\nCloses #286\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add CHANGELOG entry for graph serialization\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T18:47:34-05:00",
          "tree_id": "638efb07c04fe1bb77bdacd277f5d4d12b0f6241",
          "url": "https://github.com/genogrove/genogrove/commit/cf9728949b4cf416b14e4028fa5934a38d4936e7"
        },
        "date": 1774828319454,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.47244611625006,
            "unit": "us/iter",
            "extra": "iterations: 20869\ncpu: 33.467469979395275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.591549721338868,
            "unit": "us/iter",
            "extra": "iterations: 90253\ncpu: 7.590894961940325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.132060055296053,
            "unit": "us/iter",
            "extra": "iterations: 132378\ncpu: 5.131491864207044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.344741055769839,
            "unit": "us/iter",
            "extra": "iterations: 159656\ncpu: 4.344292528937215 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.977448106356299,
            "unit": "us/iter",
            "extra": "iterations: 175561\ncpu: 3.9772145180307716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9062474947900587,
            "unit": "us/iter",
            "extra": "iterations: 180424\ncpu: 3.9058637930652225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6940952687058237,
            "unit": "us/iter",
            "extra": "iterations: 191343\ncpu: 3.6935741260458985 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.80941106414986,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 269.7966776796005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.31862125998767,
            "unit": "us/iter",
            "extra": "iterations: 16143\ncpu: 43.31312829090008 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.40931667821303,
            "unit": "us/iter",
            "extra": "iterations: 23096\ncpu: 30.407983763422216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.553306453968965,
            "unit": "us/iter",
            "extra": "iterations: 27394\ncpu: 25.54940173030592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.607630191900665,
            "unit": "us/iter",
            "extra": "iterations: 26941\ncpu: 25.606616940722326 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.932216068080614,
            "unit": "us/iter",
            "extra": "iterations: 27732\ncpu: 24.92681941439496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.70906151938931,
            "unit": "us/iter",
            "extra": "iterations: 28235\ncpu: 24.70607749247391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 637.0482615803691,
            "unit": "us/iter",
            "extra": "iterations: 1101\ncpu: 636.999673024524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.28804567922272,
            "unit": "us/iter",
            "extra": "iterations: 5867\ncpu: 120.27019004602019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.61025159301366,
            "unit": "us/iter",
            "extra": "iterations: 9730\ncpu: 70.60918468653638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.459177570902355,
            "unit": "us/iter",
            "extra": "iterations: 11494\ncpu: 60.44964564120405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.67627219689977,
            "unit": "us/iter",
            "extra": "iterations: 10970\ncpu: 63.67348614402901 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.26613361402119,
            "unit": "us/iter",
            "extra": "iterations: 11638\ncpu: 59.2598350231998 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.83905358397759,
            "unit": "us/iter",
            "extra": "iterations: 11384\ncpu: 61.83246170063265 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3858.760335135316,
            "unit": "us/iter",
            "extra": "iterations: 185\ncpu: 3858.3116486486533 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.706018064499,
            "unit": "us/iter",
            "extra": "iterations: 775\ncpu: 903.5455212903245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 619.1779406554192,
            "unit": "us/iter",
            "extra": "iterations: 1129\ncpu: 619.1387821080616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.8654502579268,
            "unit": "us/iter",
            "extra": "iterations: 1357\ncpu: 515.7766676492263 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.1324300773158,
            "unit": "us/iter",
            "extra": "iterations: 1423\ncpu: 490.0439100491921 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 461.7685777338815,
            "unit": "us/iter",
            "extra": "iterations: 1518\ncpu: 461.7116969696949 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.81504903226147,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 450.7858929032258 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.34577402851996,
            "unit": "us/iter",
            "extra": "iterations: 27561\ncpu: 25.343889662929417 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.024965960191042,
            "unit": "us/iter",
            "extra": "iterations: 116305\ncpu: 6.024774627058171 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.556305946694824,
            "unit": "us/iter",
            "extra": "iterations: 153043\ncpu: 4.555950255810452 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.996733274422148,
            "unit": "us/iter",
            "extra": "iterations: 175405\ncpu: 3.996554488184495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8411998170485973,
            "unit": "us/iter",
            "extra": "iterations: 182562\ncpu: 3.8409197751996516 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.774797075862527,
            "unit": "us/iter",
            "extra": "iterations: 185217\ncpu: 3.774210245279861 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6343334354985575,
            "unit": "us/iter",
            "extra": "iterations: 192499\ncpu: 3.6340739796050925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.48696931866917,
            "unit": "us/iter",
            "extra": "iterations: 4726\ncpu: 148.46314748201485 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.413523021001147,
            "unit": "us/iter",
            "extra": "iterations: 22284\ncpu: 31.411614162627803 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.656251794606415,
            "unit": "us/iter",
            "extra": "iterations: 30926\ncpu: 22.653590377028987 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.0900889507407,
            "unit": "us/iter",
            "extra": "iterations: 34491\ncpu: 20.089317793047442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.259174698618562,
            "unit": "us/iter",
            "extra": "iterations: 34093\ncpu: 20.25718672454759 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.18332718564285,
            "unit": "us/iter",
            "extra": "iterations: 36328\ncpu: 19.180483676502842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.442537803100098,
            "unit": "us/iter",
            "extra": "iterations: 37034\ncpu: 19.441577415347982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.5694992672049,
            "unit": "us/iter",
            "extra": "iterations: 2047\ncpu: 342.5486365412808 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.24752195215622,
            "unit": "us/iter",
            "extra": "iterations: 10409\ncpu: 67.2425794024406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.85131722302091,
            "unit": "us/iter",
            "extra": "iterations: 14649\ncpu: 47.848052699843386 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.155414248813294,
            "unit": "us/iter",
            "extra": "iterations: 16647\ncpu: 42.14949168018248 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.739544678563135,
            "unit": "us/iter",
            "extra": "iterations: 16753\ncpu: 41.73733916313486 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.17286342699432,
            "unit": "us/iter",
            "extra": "iterations: 17368\ncpu: 40.168350299401396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.7059679875489,
            "unit": "us/iter",
            "extra": "iterations: 17993\ncpu: 38.70220769188019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1881.6510752687782,
            "unit": "us/iter",
            "extra": "iterations: 372\ncpu: 1881.3070564515986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 412.3584000000001,
            "unit": "us/iter",
            "extra": "iterations: 1705\ncpu: 412.32648680352077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 270.7033883307439,
            "unit": "us/iter",
            "extra": "iterations: 2588\ncpu: 270.6674972952072 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.68647204764136,
            "unit": "us/iter",
            "extra": "iterations: 3023\ncpu: 235.67439331789754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 223.43372310693113,
            "unit": "us/iter",
            "extra": "iterations: 3077\ncpu: 223.38007052323903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 212.99037499999355,
            "unit": "us/iter",
            "extra": "iterations: 3280\ncpu: 212.96771036585443 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 205.0566790847887,
            "unit": "us/iter",
            "extra": "iterations: 3409\ncpu: 205.02327310061742 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "committer": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "distinct": true,
          "id": "ad545b09423c890b9f559971b5f6bffb5d94ab76",
          "message": "Add serialization size benchmarks and visualization",
          "timestamp": "2026-03-29T19:28:49-05:00",
          "tree_id": "26da2d24fdccc0b827e33b51cedbaca7255e9e4c",
          "url": "https://github.com/genogrove/genogrove/commit/ad545b09423c890b9f559971b5f6bffb5d94ab76"
        },
        "date": 1774830880495,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.37990301579726,
            "unit": "us/iter",
            "extra": "iterations: 20890\ncpu: 33.3735532312111 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.752604350021801,
            "unit": "us/iter",
            "extra": "iterations: 93057\ncpu: 7.751934362809893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.9934986754015,
            "unit": "us/iter",
            "extra": "iterations: 138910\ncpu: 4.992623741991216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.265232192692485,
            "unit": "us/iter",
            "extra": "iterations: 163037\ncpu: 4.264735624428813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9437657061799314,
            "unit": "us/iter",
            "extra": "iterations: 177653\ncpu: 3.9433936100150304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.832487502872588,
            "unit": "us/iter",
            "extra": "iterations: 182762\ncpu: 3.8323636970486206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6185775095922637,
            "unit": "us/iter",
            "extra": "iterations: 193647\ncpu: 3.6183457528389282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.5864877001091,
            "unit": "us/iter",
            "extra": "iterations: 2561\ncpu: 273.58716282702096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.224161343816036,
            "unit": "us/iter",
            "extra": "iterations: 16282\ncpu: 43.22009753101587 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.95186646909773,
            "unit": "us/iter",
            "extra": "iterations: 23283\ncpu: 29.947898080144288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.318904423293887,
            "unit": "us/iter",
            "extra": "iterations: 27423\ncpu: 25.31571611421069 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.890411949801305,
            "unit": "us/iter",
            "extra": "iterations: 27331\ncpu: 25.888629029307328 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.886701885437713,
            "unit": "us/iter",
            "extra": "iterations: 27845\ncpu: 24.88316160890643 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.12628540462412,
            "unit": "us/iter",
            "extra": "iterations: 27680\ncpu: 24.124266799132947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 636.4492441016395,
            "unit": "us/iter",
            "extra": "iterations: 1102\ncpu: 636.3599882032672 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 117.03050101078138,
            "unit": "us/iter",
            "extra": "iterations: 5936\ncpu: 117.02590801886795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.5952929251977,
            "unit": "us/iter",
            "extra": "iterations: 9866\ncpu: 69.5811179809447 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.84430919123775,
            "unit": "us/iter",
            "extra": "iterations: 11598\ncpu: 59.836061476116356 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.33476637183998,
            "unit": "us/iter",
            "extra": "iterations: 11193\ncpu: 61.333574019476636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.008815892931466,
            "unit": "us/iter",
            "extra": "iterations: 11955\ncpu: 58.00202308657481 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 59.60305513588812,
            "unit": "us/iter",
            "extra": "iterations: 11517\ncpu: 59.59483632890514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3707.8607712766384,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3707.033728723407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 907.8748586251687,
            "unit": "us/iter",
            "extra": "iterations: 771\ncpu: 907.7555577172469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 616.606437445322,
            "unit": "us/iter",
            "extra": "iterations: 1143\ncpu: 616.5574969378829 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 509.65865745454477,
            "unit": "us/iter",
            "extra": "iterations: 1375\ncpu: 509.57599490909 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 487.1252498235699,
            "unit": "us/iter",
            "extra": "iterations: 1417\ncpu: 487.08489908256877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.4657822105976,
            "unit": "us/iter",
            "extra": "iterations: 1529\ncpu: 459.4151726618702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.0359013367328,
            "unit": "us/iter",
            "extra": "iterations: 1571\ncpu: 445.95088860598264 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.434751073580124,
            "unit": "us/iter",
            "extra": "iterations: 27711\ncpu: 25.43120959185876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.0851635481454505,
            "unit": "us/iter",
            "extra": "iterations: 114798\ncpu: 6.08423757382532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.512322889401635,
            "unit": "us/iter",
            "extra": "iterations: 154731\ncpu: 4.511775578261628 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.986347057885717,
            "unit": "us/iter",
            "extra": "iterations: 175622\ncpu: 3.9854591622917384 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8181878090125974,
            "unit": "us/iter",
            "extra": "iterations: 184054\ncpu: 3.8181381822726044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7433211670651514,
            "unit": "us/iter",
            "extra": "iterations: 187376\ncpu: 3.742895242720543 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6137929479696584,
            "unit": "us/iter",
            "extra": "iterations: 193618\ncpu: 3.6135229834002978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.16934812141952,
            "unit": "us/iter",
            "extra": "iterations: 4711\ncpu: 149.1419032052642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.492855569540595,
            "unit": "us/iter",
            "extra": "iterations: 22246\ncpu: 31.49127811741449 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.726772117329762,
            "unit": "us/iter",
            "extra": "iterations: 29660\ncpu: 23.72328267026284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.868003097266342,
            "unit": "us/iter",
            "extra": "iterations: 33578\ncpu: 20.86770254333211 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.698128463251823,
            "unit": "us/iter",
            "extra": "iterations: 33675\ncpu: 20.695218945805664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.68454192148372,
            "unit": "us/iter",
            "extra": "iterations: 35483\ncpu: 19.6838675985685 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.07629384779193,
            "unit": "us/iter",
            "extra": "iterations: 36621\ncpu: 19.0723625242348 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 346.98351741048964,
            "unit": "us/iter",
            "extra": "iterations: 2039\ncpu: 346.9462589504649 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.59393755379267,
            "unit": "us/iter",
            "extra": "iterations: 10457\ncpu: 66.58479525676557 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.511502622079774,
            "unit": "us/iter",
            "extra": "iterations: 14683\ncpu: 46.50893570796147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.139100329722,
            "unit": "us/iter",
            "extra": "iterations: 16984\ncpu: 41.1343615756006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.098991746743586,
            "unit": "us/iter",
            "extra": "iterations: 16963\ncpu: 41.09779803100838 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.98667463350637,
            "unit": "us/iter",
            "extra": "iterations: 17531\ncpu: 39.97935913524638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.720878419454046,
            "unit": "us/iter",
            "extra": "iterations: 18095\ncpu: 38.716773197015726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1870.222396276596,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1869.9526755319257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.17290940969735,
            "unit": "us/iter",
            "extra": "iterations: 1711\ncpu: 410.10698831092924 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 277.9340338106701,
            "unit": "us/iter",
            "extra": "iterations: 2514\ncpu: 277.8932776451865 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 232.27035964614905,
            "unit": "us/iter",
            "extra": "iterations: 2939\ncpu: 232.23968050357402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.35899268680615,
            "unit": "us/iter",
            "extra": "iterations: 3145\ncpu: 222.3458384737679 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.91915142337157,
            "unit": "us/iter",
            "extra": "iterations: 3302\ncpu: 211.9097571168988 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 207.26697067535795,
            "unit": "us/iter",
            "extra": "iterations: 3376\ncpu: 207.23266143365015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/100/2",
            "value": 221.34004174572732,
            "unit": "us/iter",
            "extra": "iterations: 3162\ncpu: 221.32928747628102 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/100/5",
            "value": 158.12465226290456,
            "unit": "us/iter",
            "extra": "iterations: 4397\ncpu: 158.1035392312937 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/100/10",
            "value": 155.77081109644237,
            "unit": "us/iter",
            "extra": "iterations: 4542\ncpu: 155.76442800528434 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/100/15",
            "value": 154.48734539038307,
            "unit": "us/iter",
            "extra": "iterations: 4534\ncpu: 154.468855977062 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/100/20",
            "value": 151.36993932144463,
            "unit": "us/iter",
            "extra": "iterations: 4598\ncpu: 151.3534201826887 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/100/25",
            "value": 152.01071215721072,
            "unit": "us/iter",
            "extra": "iterations: 4631\ncpu: 151.99743813431255 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/100/30",
            "value": 152.0481212513401,
            "unit": "us/iter",
            "extra": "iterations: 4635\ncpu: 152.03238532901872 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/500/2",
            "value": 1084.217479999989,
            "unit": "us/iter",
            "extra": "iterations: 650\ncpu: 1084.145423076924 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/500/5",
            "value": 763.0299890351216,
            "unit": "us/iter",
            "extra": "iterations: 912\ncpu: 762.9380087719262 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/500/10",
            "value": 720.966883864304,
            "unit": "us/iter",
            "extra": "iterations: 973\ncpu: 720.9263864337074 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/500/15",
            "value": 702.0840810536897,
            "unit": "us/iter",
            "extra": "iterations: 987\ncpu: 702.0176514691008 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/500/20",
            "value": 695.0244327309218,
            "unit": "us/iter",
            "extra": "iterations: 996\ncpu: 694.9691495983903 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/500/25",
            "value": 686.463616062643,
            "unit": "us/iter",
            "extra": "iterations: 1021\ncpu: 686.4489813907876 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/500/30",
            "value": 689.0348643067598,
            "unit": "us/iter",
            "extra": "iterations: 1017\ncpu: 688.9574719764006 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/1000/2",
            "value": 2168.799640866834,
            "unit": "us/iter",
            "extra": "iterations: 323\ncpu: 2168.619117647031 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/1000/5",
            "value": 1649.357256470627,
            "unit": "us/iter",
            "extra": "iterations: 425\ncpu: 1649.1995623529392 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/1000/10",
            "value": 1523.5453934782645,
            "unit": "us/iter",
            "extra": "iterations: 460\ncpu: 1523.411132608712 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/1000/15",
            "value": 1477.1741389473677,
            "unit": "us/iter",
            "extra": "iterations: 475\ncpu: 1477.0464736842005 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/1000/20",
            "value": 1466.846305263157,
            "unit": "us/iter",
            "extra": "iterations: 475\ncpu: 1466.654909473696 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/1000/25",
            "value": 1459.4675574112596,
            "unit": "us/iter",
            "extra": "iterations: 479\ncpu: 1459.4313048016754 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/1000/30",
            "value": 1457.801509394597,
            "unit": "us/iter",
            "extra": "iterations: 479\ncpu: 1457.6269457202507 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/5000/2",
            "value": 10706.419615384604,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 10705.998707692506 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/5000/5",
            "value": 9550.54443835557,
            "unit": "us/iter",
            "extra": "iterations: 73\ncpu: 9548.363164383481 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/5000/10",
            "value": 8917.761730769003,
            "unit": "us/iter",
            "extra": "iterations: 78\ncpu: 8916.865525641162 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/5000/15",
            "value": 8649.525716049522,
            "unit": "us/iter",
            "extra": "iterations: 81\ncpu: 8649.315728395151 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/5000/20",
            "value": 8607.686740740548,
            "unit": "us/iter",
            "extra": "iterations: 81\ncpu: 8606.68304938268 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/5000/25",
            "value": 8529.615695121676,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8529.011463414665 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_sorted/5000/30",
            "value": 8532.232469879393,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8530.991795180673 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/100/2",
            "value": 259.33107400520436,
            "unit": "us/iter",
            "extra": "iterations: 2689\ncpu: 259.30252584603494 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/100/5",
            "value": 173.1183268376946,
            "unit": "us/iter",
            "extra": "iterations: 4054\ncpu: 173.0967661568797 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/100/10",
            "value": 156.7860532081365,
            "unit": "us/iter",
            "extra": "iterations: 4473\ncpu: 156.76273127654656 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/100/15",
            "value": 156.70738876504262,
            "unit": "us/iter",
            "extra": "iterations: 4486\ncpu: 156.699258136427 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/100/20",
            "value": 154.54447639011184,
            "unit": "us/iter",
            "extra": "iterations: 4532\ncpu: 154.5173003089159 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/100/25",
            "value": 154.01130586160795,
            "unit": "us/iter",
            "extra": "iterations: 4538\ncpu: 154.01101828999413 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/100/30",
            "value": 152.42570334719065,
            "unit": "us/iter",
            "extra": "iterations: 4571\ncpu: 152.39971187923592 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/500/2",
            "value": 1481.4210508474664,
            "unit": "us/iter",
            "extra": "iterations: 472\ncpu: 1481.3023008474408 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/500/5",
            "value": 907.310768831196,
            "unit": "us/iter",
            "extra": "iterations: 770\ncpu: 907.1968649350708 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/500/10",
            "value": 789.3502404063729,
            "unit": "us/iter",
            "extra": "iterations: 886\ncpu: 789.1775699774271 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/500/15",
            "value": 751.636781621614,
            "unit": "us/iter",
            "extra": "iterations: 925\ncpu: 751.6205827027068 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/500/20",
            "value": 734.201262827217,
            "unit": "us/iter",
            "extra": "iterations: 955\ncpu: 734.1427455497394 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/500/25",
            "value": 726.3966012461473,
            "unit": "us/iter",
            "extra": "iterations: 963\ncpu: 726.318485981302 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/500/30",
            "value": 722.7087014462861,
            "unit": "us/iter",
            "extra": "iterations: 968\ncpu: 722.6658078512302 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/1000/2",
            "value": 3093.3336725663235,
            "unit": "us/iter",
            "extra": "iterations: 226\ncpu: 3092.872384955783 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/1000/5",
            "value": 2055.467525073654,
            "unit": "us/iter",
            "extra": "iterations: 339\ncpu: 2055.3013687315674 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/1000/10",
            "value": 1733.4823935643985,
            "unit": "us/iter",
            "extra": "iterations: 404\ncpu: 1733.302158415824 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/1000/15",
            "value": 1640.5844579439095,
            "unit": "us/iter",
            "extra": "iterations: 428\ncpu: 1640.5623317756972 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/1000/20",
            "value": 1597.0178604119626,
            "unit": "us/iter",
            "extra": "iterations: 437\ncpu: 1596.8161601830661 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/1000/25",
            "value": 1569.3296090909505,
            "unit": "us/iter",
            "extra": "iterations: 440\ncpu: 1569.2840795454672 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/1000/30",
            "value": 1559.1780805369358,
            "unit": "us/iter",
            "extra": "iterations: 447\ncpu: 1559.0481789709218 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/5000/2",
            "value": 17707.529249999254,
            "unit": "us/iter",
            "extra": "iterations: 40\ncpu: 17705.067650000216 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/5000/5",
            "value": 13662.783800000398,
            "unit": "us/iter",
            "extra": "iterations: 50\ncpu: 13660.726880000026 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/5000/10",
            "value": 11604.454300000572,
            "unit": "us/iter",
            "extra": "iterations: 60\ncpu: 11602.19861666647 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/5000/15",
            "value": 10927.958328124987,
            "unit": "us/iter",
            "extra": "iterations: 64\ncpu: 10927.102624999963 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/5000/20",
            "value": 10495.1984626869,
            "unit": "us/iter",
            "extra": "iterations: 67\ncpu: 10493.797492537271 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/5000/25",
            "value": 10410.986426470172,
            "unit": "us/iter",
            "extra": "iterations: 68\ncpu: 10410.477426470688 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size_unsorted/5000/30",
            "value": 10296.147352941134,
            "unit": "us/iter",
            "extra": "iterations: 68\ncpu: 10295.160029411849 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/100/2",
            "value": 49.74374293077313,
            "unit": "us/iter",
            "extra": "iterations: 13969\ncpu: 49.737561887035994 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/100/5",
            "value": 17.761778401837486,
            "unit": "us/iter",
            "extra": "iterations: 39170\ncpu: 17.761297140668763 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/100/10",
            "value": 14.915344126984083,
            "unit": "us/iter",
            "extra": "iterations: 47250\ncpu: 14.914100275132474 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/100/15",
            "value": 13.61082921937705,
            "unit": "us/iter",
            "extra": "iterations: 51856\ncpu: 13.610097790033956 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/100/20",
            "value": 12.887070731796712,
            "unit": "us/iter",
            "extra": "iterations: 54742\ncpu: 12.88531652113544 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/100/25",
            "value": 12.910406527419752,
            "unit": "us/iter",
            "extra": "iterations: 53957\ncpu: 12.909302741071624 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/100/30",
            "value": 12.401056354429688,
            "unit": "us/iter",
            "extra": "iterations: 56677\ncpu: 12.400036875628595 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/500/2",
            "value": 224.91496172249848,
            "unit": "us/iter",
            "extra": "iterations: 3135\ncpu: 224.89566251993747 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/500/5",
            "value": 73.77775811551443,
            "unit": "us/iter",
            "extra": "iterations: 9488\ncpu: 73.77493370573288 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/500/10",
            "value": 55.73872106352476,
            "unit": "us/iter",
            "extra": "iterations: 12562\ncpu: 55.733346680464365 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/500/15",
            "value": 51.73915048183974,
            "unit": "us/iter",
            "extra": "iterations: 13490\ncpu: 51.73774581171206 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/500/20",
            "value": 48.9397572030943,
            "unit": "us/iter",
            "extra": "iterations: 14230\ncpu: 48.93618229093495 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/500/25",
            "value": 47.380584825350596,
            "unit": "us/iter",
            "extra": "iterations: 14801\ncpu: 47.37795439497338 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/500/30",
            "value": 46.71787075101263,
            "unit": "us/iter",
            "extra": "iterations: 15033\ncpu: 46.71560380496235 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/1000/2",
            "value": 450.4280469151565,
            "unit": "us/iter",
            "extra": "iterations: 1556\ncpu: 450.3711034704366 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/1000/5",
            "value": 147.41288280092326,
            "unit": "us/iter",
            "extra": "iterations: 4727\ncpu: 147.39766998096056 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/1000/10",
            "value": 110.17847686777756,
            "unit": "us/iter",
            "extra": "iterations: 6398\ncpu: 110.16976445764264 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/1000/15",
            "value": 99.52228721292741,
            "unit": "us/iter",
            "extra": "iterations: 7054\ncpu: 99.51168585199963 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/1000/20",
            "value": 94.55872959114691,
            "unit": "us/iter",
            "extra": "iterations: 7411\ncpu: 94.55521872891654 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/1000/25",
            "value": 92.53613903247164,
            "unit": "us/iter",
            "extra": "iterations: 7545\ncpu: 92.52048681245726 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/1000/30",
            "value": 90.57172476707917,
            "unit": "us/iter",
            "extra": "iterations: 7728\ncpu: 90.56461956521592 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/5000/2",
            "value": 2330.799713333249,
            "unit": "us/iter",
            "extra": "iterations: 300\ncpu: 2329.161526666657 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/5000/5",
            "value": 772.3321023707174,
            "unit": "us/iter",
            "extra": "iterations: 928\ncpu: 772.2567004310368 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/5000/10",
            "value": 554.5426877971488,
            "unit": "us/iter",
            "extra": "iterations: 1262\ncpu: 554.524352614893 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/5000/15",
            "value": 493.06487289325645,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 493.0286060393269 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/5000/20",
            "value": 466.98319038077824,
            "unit": "us/iter",
            "extra": "iterations: 1497\ncpu: 466.9317207748798 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/5000/25",
            "value": 452.5705520362134,
            "unit": "us/iter",
            "extra": "iterations: 1547\ncpu: 452.5578920491392 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization_sorted/5000/30",
            "value": 441.7819545741614,
            "unit": "us/iter",
            "extra": "iterations: 1585\ncpu: 441.73919873817624 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "committer": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "distinct": true,
          "id": "65c1a05b44ae22857b9084b5366ec59774f014ef",
          "message": "Add bulk insert benchmarks, SVG export, and sidebar navigation\n\ngrove_creation.cpp: Added BM_grove_creation_bulk_sorted and\nBM_grove_creation_bulk_unsorted benchmarks using insert_data with\nsorted+bulk and bulk tags.\n\ngrove_serialization.cpp: Removed redundant unsorted serialization\nbenchmark (serialized size is insertion-order independent). Renamed\nto BM_serialization_size and BM_deserialization.\n\nvisualize.py: Major overhaul:\n- All plots saved as both PNG and SVG (publication-quality)\n- HTML index with fixed sidebar navigation for quick section switching\n- Download links (PNG/SVG) on each plot card\n- Sections: Sorted, Unsorted, Bulk Sorted, Bulk Unsorted,\n  Comparison, Serialization Size\n- Cleaner code with shared save_plot helper\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T19:57:48-05:00",
          "tree_id": "7995dc217a906b6bae94a179cec40514b0c5f804",
          "url": "https://github.com/genogrove/genogrove/commit/65c1a05b44ae22857b9084b5366ec59774f014ef"
        },
        "date": 1774832627530,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.76993289576754,
            "unit": "us/iter",
            "extra": "iterations: 20416\ncpu: 33.75777184561129 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.698678987387279,
            "unit": "us/iter",
            "extra": "iterations: 89037\ncpu: 7.6983647584711985 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.241934435322135,
            "unit": "us/iter",
            "extra": "iterations: 137025\ncpu: 5.240338668126253 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.4063314523841015,
            "unit": "us/iter",
            "extra": "iterations: 157899\ncpu: 4.40594912570694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.084506852232745,
            "unit": "us/iter",
            "extra": "iterations: 178409\ncpu: 4.084281106894831 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.931322169977409,
            "unit": "us/iter",
            "extra": "iterations: 178859\ncpu: 3.931128939555742 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6109612839179532,
            "unit": "us/iter",
            "extra": "iterations: 193408\ncpu: 3.6104846335208474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 278.43974453715026,
            "unit": "us/iter",
            "extra": "iterations: 2517\ncpu: 278.41465991259446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.631705893311086,
            "unit": "us/iter",
            "extra": "iterations: 16103\ncpu: 43.6268833136683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.443907620339367,
            "unit": "us/iter",
            "extra": "iterations: 22873\ncpu: 30.440919774406456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.53195473205717,
            "unit": "us/iter",
            "extra": "iterations: 27282\ncpu: 25.52886694523862 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.732926305730402,
            "unit": "us/iter",
            "extra": "iterations: 27207\ncpu: 25.730519167861242 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.07743347821482,
            "unit": "us/iter",
            "extra": "iterations: 28299\ncpu: 25.073431640694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.538560152230374,
            "unit": "us/iter",
            "extra": "iterations: 28378\ncpu: 25.537290471492007 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 642.3581352833538,
            "unit": "us/iter",
            "extra": "iterations: 1094\ncpu: 642.2552614259594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 118.16977764606233,
            "unit": "us/iter",
            "extra": "iterations: 5905\ncpu: 118.16472565622364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 74.5227289852126,
            "unit": "us/iter",
            "extra": "iterations: 9874\ncpu: 74.51789183714793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.228272107637686,
            "unit": "us/iter",
            "extra": "iterations: 11297\ncpu: 61.21974878286261 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.80764653025045,
            "unit": "us/iter",
            "extra": "iterations: 11240\ncpu: 61.80370987544476 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.59820503872773,
            "unit": "us/iter",
            "extra": "iterations: 11749\ncpu: 59.592646778449385 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.09514824964524,
            "unit": "us/iter",
            "extra": "iterations: 11312\ncpu: 61.093336810466795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3694.3096052630453,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3694.0605526315776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.0045185659692,
            "unit": "us/iter",
            "extra": "iterations: 781\ncpu: 894.9208437900094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 615.57109833189,
            "unit": "us/iter",
            "extra": "iterations: 1139\ncpu: 615.5181018437213 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 508.839739795921,
            "unit": "us/iter",
            "extra": "iterations: 1372\ncpu: 508.7234693877547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.0932290502796,
            "unit": "us/iter",
            "extra": "iterations: 1432\ncpu: 490.06628072625796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 458.59078534031795,
            "unit": "us/iter",
            "extra": "iterations: 1528\ncpu: 458.5620693717272 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.2254789808893,
            "unit": "us/iter",
            "extra": "iterations: 1570\ncpu: 446.19294649681393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.288904803084538,
            "unit": "us/iter",
            "extra": "iterations: 27753\ncpu: 25.28812604042808 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.990688206015965,
            "unit": "us/iter",
            "extra": "iterations: 115525\ncpu: 5.990309465483674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.58101758913503,
            "unit": "us/iter",
            "extra": "iterations: 153447\ncpu: 4.580891441344567 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.928217866585418,
            "unit": "us/iter",
            "extra": "iterations: 177012\ncpu: 3.92778746073712 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7760814838110637,
            "unit": "us/iter",
            "extra": "iterations: 184417\ncpu: 3.7758234436087683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7029470105584994,
            "unit": "us/iter",
            "extra": "iterations: 187811\ncpu: 3.7025238564301115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5673723088210725,
            "unit": "us/iter",
            "extra": "iterations: 193549\ncpu: 3.567229704105954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.6200902433726,
            "unit": "us/iter",
            "extra": "iterations: 4643\ncpu: 149.60312814990226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.412180466708772,
            "unit": "us/iter",
            "extra": "iterations: 22198\ncpu: 31.41087773673318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.423000544190874,
            "unit": "us/iter",
            "extra": "iterations: 31239\ncpu: 22.42070805723605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.037123587081766,
            "unit": "us/iter",
            "extra": "iterations: 34680\ncpu: 20.035918310265313 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.95009533850053,
            "unit": "us/iter",
            "extra": "iterations: 35096\ncpu: 19.948919250056868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.099260316945617,
            "unit": "us/iter",
            "extra": "iterations: 36978\ncpu: 19.09821542538791 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.48138589594749,
            "unit": "us/iter",
            "extra": "iterations: 37904\ncpu: 18.48037890460112 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 341.4841494140675,
            "unit": "us/iter",
            "extra": "iterations: 2048\ncpu: 341.4772944335953 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.85628891227324,
            "unit": "us/iter",
            "extra": "iterations: 10453\ncpu: 66.8515935138237 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.15208637649843,
            "unit": "us/iter",
            "extra": "iterations: 14842\ncpu: 47.14978345236516 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.204277355489616,
            "unit": "us/iter",
            "extra": "iterations: 16971\ncpu: 41.199189735431275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.465762933517276,
            "unit": "us/iter",
            "extra": "iterations: 17358\ncpu: 40.46410479317887 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.485845279911175,
            "unit": "us/iter",
            "extra": "iterations: 18220\ncpu: 38.48238699231641 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.38775907041558,
            "unit": "us/iter",
            "extra": "iterations: 18632\ncpu: 37.38624651137845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1855.0878707123586,
            "unit": "us/iter",
            "extra": "iterations: 379\ncpu: 1854.8871662269214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 404.83517919075587,
            "unit": "us/iter",
            "extra": "iterations: 1730\ncpu: 404.8116167630054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 276.47398102017473,
            "unit": "us/iter",
            "extra": "iterations: 2529\ncpu: 276.4392795571376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 233.74547440615794,
            "unit": "us/iter",
            "extra": "iterations: 2989\ncpu: 233.72382234861217 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 225.0520292416459,
            "unit": "us/iter",
            "extra": "iterations: 3112\ncpu: 225.02580848328955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 213.824126081588,
            "unit": "us/iter",
            "extra": "iterations: 3236\ncpu: 213.80980346106284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 204.64061567709578,
            "unit": "us/iter",
            "extra": "iterations: 3419\ncpu: 204.61465691722657 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/2",
            "value": 15.05709152149676,
            "unit": "us/iter",
            "extra": "iterations: 46612\ncpu: 15.05629597528521 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/5",
            "value": 3.3923326187334126,
            "unit": "us/iter",
            "extra": "iterations: 206176\ncpu: 3.3919426509390016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/10",
            "value": 2.343787003226238,
            "unit": "us/iter",
            "extra": "iterations: 300967\ncpu: 2.34366154761151 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/15",
            "value": 2.06361651144369,
            "unit": "us/iter",
            "extra": "iterations: 339619\ncpu: 2.0633551126409397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/20",
            "value": 1.8534981118114282,
            "unit": "us/iter",
            "extra": "iterations: 378405\ncpu: 1.8534044132609357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/25",
            "value": 1.8372713957465432,
            "unit": "us/iter",
            "extra": "iterations: 381244\ncpu: 1.8371524902686889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/30",
            "value": 1.6395839879062117,
            "unit": "us/iter",
            "extra": "iterations: 428651\ncpu: 1.639534689059396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/2",
            "value": 132.2755680830955,
            "unit": "us/iter",
            "extra": "iterations: 5295\ncpu: 132.2704143531639 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/5",
            "value": 26.247020750686723,
            "unit": "us/iter",
            "extra": "iterations: 26216\ncpu: 26.2457810115961 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/10",
            "value": 13.97885458612924,
            "unit": "us/iter",
            "extra": "iterations: 49617\ncpu: 13.977898905616916 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/15",
            "value": 11.175681306944613,
            "unit": "us/iter",
            "extra": "iterations: 61793\ncpu: 11.174534429466148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/20",
            "value": 10.038218663152618,
            "unit": "us/iter",
            "extra": "iterations: 69806\ncpu: 10.037669226141105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/25",
            "value": 9.010096200557808,
            "unit": "us/iter",
            "extra": "iterations: 78222\ncpu: 9.009722124210706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/30",
            "value": 8.407305505703098,
            "unit": "us/iter",
            "extra": "iterations: 83023\ncpu: 8.406939787769765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/2",
            "value": 258.23330402660827,
            "unit": "us/iter",
            "extra": "iterations: 2707\ncpu: 258.2158463243462 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/5",
            "value": 51.41859915203867,
            "unit": "us/iter",
            "extra": "iterations: 13444\ncpu: 51.41440977387695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/10",
            "value": 28.160442490397603,
            "unit": "us/iter",
            "extra": "iterations: 24735\ncpu: 28.159594097433068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/15",
            "value": 22.106464542160694,
            "unit": "us/iter",
            "extra": "iterations: 31474\ncpu: 22.104341647073575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/20",
            "value": 19.722565188058603,
            "unit": "us/iter",
            "extra": "iterations: 35574\ncpu: 19.72127514476848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/25",
            "value": 18.34198298721536,
            "unit": "us/iter",
            "extra": "iterations: 38089\ncpu: 18.339953713670596 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/30",
            "value": 17.087539497856223,
            "unit": "us/iter",
            "extra": "iterations: 40825\ncpu: 17.087313974280207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/2",
            "value": 1267.4727290552098,
            "unit": "us/iter",
            "extra": "iterations: 561\ncpu: 1267.3581693404608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/5",
            "value": 252.8244872256177,
            "unit": "us/iter",
            "extra": "iterations: 2779\ncpu: 252.81826556314832 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/10",
            "value": 139.38327460092785,
            "unit": "us/iter",
            "extra": "iterations: 4949\ncpu: 139.33999959587933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/15",
            "value": 111.64938535338001,
            "unit": "us/iter",
            "extra": "iterations: 6254\ncpu: 111.64039334825777 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/20",
            "value": 100.01091184454644,
            "unit": "us/iter",
            "extra": "iterations: 6999\ncpu: 100.0017456779532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/25",
            "value": 91.96768584534954,
            "unit": "us/iter",
            "extra": "iterations: 7630\ncpu: 91.95652070773204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/30",
            "value": 86.60310928217743,
            "unit": "us/iter",
            "extra": "iterations: 8080\ncpu: 86.59896002475222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/2",
            "value": 28.949506682666797,
            "unit": "us/iter",
            "extra": "iterations: 24167\ncpu: 28.946821905904788 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/5",
            "value": 5.7741960082554105,
            "unit": "us/iter",
            "extra": "iterations: 122102\ncpu: 5.774076124879249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/10",
            "value": 3.8243270735609722,
            "unit": "us/iter",
            "extra": "iterations: 185044\ncpu: 3.82404232506868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/15",
            "value": 3.0938119324595252,
            "unit": "us/iter",
            "extra": "iterations: 231151\ncpu: 3.0936809315123046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/20",
            "value": 2.636578205504169,
            "unit": "us/iter",
            "extra": "iterations: 265902\ncpu: 2.636312254138736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/25",
            "value": 2.601236352963419,
            "unit": "us/iter",
            "extra": "iterations: 269161\ncpu: 2.601095972299098 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/30",
            "value": 2.372860365380603,
            "unit": "us/iter",
            "extra": "iterations: 295199\ncpu: 2.372694013191079 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/2",
            "value": 137.95997803285235,
            "unit": "us/iter",
            "extra": "iterations: 5053\ncpu: 137.95460300811416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/5",
            "value": 31.004840408453006,
            "unit": "us/iter",
            "extra": "iterations: 22426\ncpu: 31.003357353072513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/10",
            "value": 19.86344941990097,
            "unit": "us/iter",
            "extra": "iterations: 34994\ncpu: 19.862295279190665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/15",
            "value": 16.762816638207372,
            "unit": "us/iter",
            "extra": "iterations: 41579\ncpu: 16.762158469419617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/20",
            "value": 15.519756501496774,
            "unit": "us/iter",
            "extra": "iterations: 45105\ncpu: 15.518111029819302 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/25",
            "value": 14.468228727025663,
            "unit": "us/iter",
            "extra": "iterations: 48477\ncpu: 14.46730175134592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/30",
            "value": 13.910828313552306,
            "unit": "us/iter",
            "extra": "iterations: 50301\ncpu: 13.909674300709629 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/2",
            "value": 271.0257953398009,
            "unit": "us/iter",
            "extra": "iterations: 2575\ncpu: 271.021808155343 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/5",
            "value": 63.121311743904606,
            "unit": "us/iter",
            "extra": "iterations: 10746\ncpu: 63.11390610459616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/10",
            "value": 40.405989157868994,
            "unit": "us/iter",
            "extra": "iterations: 17432\ncpu: 40.403629359798515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/15",
            "value": 34.63191768549445,
            "unit": "us/iter",
            "extra": "iterations: 20203\ncpu: 34.62762020492014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/20",
            "value": 31.647437554027768,
            "unit": "us/iter",
            "extra": "iterations: 21979\ncpu: 31.64678160971846 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/25",
            "value": 30.100403055078097,
            "unit": "us/iter",
            "extra": "iterations: 23240\ncpu: 30.097705421687227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/30",
            "value": 29.306332109633622,
            "unit": "us/iter",
            "extra": "iterations: 23971\ncpu: 29.305078428100604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/2",
            "value": 1501.1032106382997,
            "unit": "us/iter",
            "extra": "iterations: 470\ncpu: 1500.9207297872404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/5",
            "value": 475.40848848236055,
            "unit": "us/iter",
            "extra": "iterations: 1476\ncpu: 475.3905081300833 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/10",
            "value": 363.7594968976391,
            "unit": "us/iter",
            "extra": "iterations: 1934\ncpu: 363.73393071354167 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/15",
            "value": 332.6227684210477,
            "unit": "us/iter",
            "extra": "iterations: 2090\ncpu: 332.6017449760745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/20",
            "value": 318.8028587699256,
            "unit": "us/iter",
            "extra": "iterations: 2195\ncpu: 318.77141685649514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/25",
            "value": 311.1070498442376,
            "unit": "us/iter",
            "extra": "iterations: 2247\ncpu: 311.0903947485552 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/30",
            "value": 306.72112319158623,
            "unit": "us/iter",
            "extra": "iterations: 2281\ncpu: 306.69836212187505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_BigO",
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/2",
            "value": 220.22976587677664,
            "unit": "us/iter",
            "extra": "iterations: 3165\ncpu: 220.2146992101138 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/5",
            "value": 157.29417883621772,
            "unit": "us/iter",
            "extra": "iterations: 4451\ncpu: 157.28071781622035 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/10",
            "value": 153.50471271930428,
            "unit": "us/iter",
            "extra": "iterations: 4560\ncpu: 153.49683289473907 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/15",
            "value": 152.0063738317713,
            "unit": "us/iter",
            "extra": "iterations: 4601\ncpu: 151.98971614866284 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/20",
            "value": 149.75675048314045,
            "unit": "us/iter",
            "extra": "iterations: 4657\ncpu: 149.75093364827134 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/25",
            "value": 149.64610790598923,
            "unit": "us/iter",
            "extra": "iterations: 4680\ncpu: 149.62916303419064 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/30",
            "value": 150.6433568821143,
            "unit": "us/iter",
            "extra": "iterations: 4657\ncpu: 150.6418389521152 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/2",
            "value": 1073.9607182236102,
            "unit": "us/iter",
            "extra": "iterations: 653\ncpu: 1073.923958652384 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/5",
            "value": 752.5479110397138,
            "unit": "us/iter",
            "extra": "iterations: 933\ncpu: 752.4430364415866 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/10",
            "value": 703.4793283132415,
            "unit": "us/iter",
            "extra": "iterations: 996\ncpu: 703.4395773092324 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/15",
            "value": 687.5300958498144,
            "unit": "us/iter",
            "extra": "iterations: 1012\ncpu: 687.4741294466345 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/20",
            "value": 689.37103036239,
            "unit": "us/iter",
            "extra": "iterations: 1021\ncpu: 689.3340460333134 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/25",
            "value": 675.9857149758217,
            "unit": "us/iter",
            "extra": "iterations: 1035\ncpu: 675.9517217391259 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/30",
            "value": 682.1235565217135,
            "unit": "us/iter",
            "extra": "iterations: 1035\ncpu: 682.0505362318854 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/2",
            "value": 2205.852749216284,
            "unit": "us/iter",
            "extra": "iterations: 319\ncpu: 2205.7568746081747 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/5",
            "value": 1654.772304964644,
            "unit": "us/iter",
            "extra": "iterations: 423\ncpu: 1654.502874704502 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/10",
            "value": 1499.5408466523781,
            "unit": "us/iter",
            "extra": "iterations: 463\ncpu: 1499.455399568027 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/15",
            "value": 1458.826762993681,
            "unit": "us/iter",
            "extra": "iterations: 481\ncpu: 1458.745831600819 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/20",
            "value": 1449.415029045643,
            "unit": "us/iter",
            "extra": "iterations: 482\ncpu: 1449.2755705394152 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/25",
            "value": 1438.9345888430105,
            "unit": "us/iter",
            "extra": "iterations: 484\ncpu: 1438.8542561983347 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/30",
            "value": 1432.9920143148784,
            "unit": "us/iter",
            "extra": "iterations: 489\ncpu: 1432.8134805726033 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/2",
            "value": 10668.837212121347,
            "unit": "us/iter",
            "extra": "iterations: 66\ncpu: 10668.282469697015 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/5",
            "value": 9413.262405405323,
            "unit": "us/iter",
            "extra": "iterations: 74\ncpu: 9412.193527026986 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/10",
            "value": 8758.29179999954,
            "unit": "us/iter",
            "extra": "iterations: 80\ncpu: 8757.973512499895 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/15",
            "value": 8519.941646341067,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8519.533195121683 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/20",
            "value": 8460.694060241316,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8459.674144578128 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/25",
            "value": 8365.048841463155,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8364.583804878088 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/30",
            "value": 8317.144416666553,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8316.202547619123 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/2",
            "value": 48.82017240891095,
            "unit": "us/iter",
            "extra": "iterations: 14135\ncpu: 48.81715160948058 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/5",
            "value": 18.18364655793279,
            "unit": "us/iter",
            "extra": "iterations: 38872\ncpu: 18.181741201893008 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/10",
            "value": 14.963143233481887,
            "unit": "us/iter",
            "extra": "iterations: 47070\ncpu: 14.962561164223633 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/15",
            "value": 13.746070348608452,
            "unit": "us/iter",
            "extra": "iterations: 51060\ncpu: 13.745032882882779 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/20",
            "value": 12.741140376424115,
            "unit": "us/iter",
            "extra": "iterations: 54938\ncpu: 12.74083710728455 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/25",
            "value": 12.947961485080333,
            "unit": "us/iter",
            "extra": "iterations: 54758\ncpu: 12.947190456188846 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/30",
            "value": 12.369789149612213,
            "unit": "us/iter",
            "extra": "iterations: 56680\ncpu: 12.36874523641538 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/2",
            "value": 225.70421527109767,
            "unit": "us/iter",
            "extra": "iterations: 3117\ncpu: 225.69000673725162 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/5",
            "value": 73.82840016849384,
            "unit": "us/iter",
            "extra": "iterations: 9496\ncpu: 73.81946777590545 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/10",
            "value": 57.11978151192281,
            "unit": "us/iter",
            "extra": "iterations: 12289\ncpu: 57.10712637317826 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/15",
            "value": 52.11929581562087,
            "unit": "us/iter",
            "extra": "iterations: 13407\ncpu: 52.1172627731783 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/20",
            "value": 49.52970076024322,
            "unit": "us/iter",
            "extra": "iterations: 14206\ncpu: 49.52803836407309 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/25",
            "value": 47.49634453896202,
            "unit": "us/iter",
            "extra": "iterations: 14695\ncpu: 47.49140156515835 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/30",
            "value": 46.929172487762735,
            "unit": "us/iter",
            "extra": "iterations: 14917\ncpu: 46.92734866259882 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/2",
            "value": 450.6611387096787,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 450.63495612904234 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/5",
            "value": 146.61539619883098,
            "unit": "us/iter",
            "extra": "iterations: 4788\ncpu: 146.60624582289088 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/10",
            "value": 109.51784656501275,
            "unit": "us/iter",
            "extra": "iterations: 6361\ncpu: 109.50199921396025 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/15",
            "value": 100.58411900635376,
            "unit": "us/iter",
            "extra": "iterations: 6924\ncpu: 100.58058044483087 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/20",
            "value": 96.06206115205688,
            "unit": "us/iter",
            "extra": "iterations: 7326\ncpu: 96.05057534807658 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/25",
            "value": 94.1057145916996,
            "unit": "us/iter",
            "extra": "iterations: 7470\ncpu: 94.10100240964003 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/30",
            "value": 91.8883975383025,
            "unit": "us/iter",
            "extra": "iterations: 7637\ncpu: 91.8811990310337 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/2",
            "value": 2309.4162790696,
            "unit": "us/iter",
            "extra": "iterations: 301\ncpu: 2309.3106279069793 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/5",
            "value": 755.1378740580866,
            "unit": "us/iter",
            "extra": "iterations: 929\ncpu: 755.0709870828707 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/10",
            "value": 552.6160150435765,
            "unit": "us/iter",
            "extra": "iterations: 1263\ncpu: 552.547855106887 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/15",
            "value": 492.8803968926487,
            "unit": "us/iter",
            "extra": "iterations: 1416\ncpu: 492.8645374293718 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/20",
            "value": 475.664330381484,
            "unit": "us/iter",
            "extra": "iterations: 1468\ncpu: 475.62519550409013 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/25",
            "value": 462.37519367588436,
            "unit": "us/iter",
            "extra": "iterations: 1518\ncpu: 462.30523254283713 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/30",
            "value": 454.21648126614576,
            "unit": "us/iter",
            "extra": "iterations: 1548\ncpu: 454.200091731267 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "committer": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "distinct": true,
          "id": "e10c02e4730df037363c19ec8f70d180ad3b912a",
          "message": "Extend benchmark orders, add all-modes comparison, label compressed axes\n\n- Extended orders to {2,5,10,15,20,25,30,50,75,100,150,200} in both\n  creation and serialization benchmarks to find the plateau\n- Added all-modes comparison plots showing sorted, unsorted, bulk\n  sorted, and bulk unsorted side by side per dataset size\n- Labeled serialization axes as \"zlib-compressed\"\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T21:28:07-05:00",
          "tree_id": "e73ae76c6fb8cfebee8d67d0a7548aec1c0af6be",
          "url": "https://github.com/genogrove/genogrove/commit/e10c02e4730df037363c19ec8f70d180ad3b912a"
        },
        "date": 1774838172927,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 35.139699148872126,
            "unit": "us/iter",
            "extra": "iterations: 19621\ncpu: 35.1355549666174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.087202210925486,
            "unit": "us/iter",
            "extra": "iterations: 86751\ncpu: 8.08669383638229 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.590093922431243,
            "unit": "us/iter",
            "extra": "iterations: 125231\ncpu: 5.589431306944763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.745725496791056,
            "unit": "us/iter",
            "extra": "iterations: 145685\ncpu: 4.745606246353434 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.46140037530495,
            "unit": "us/iter",
            "extra": "iterations: 159870\ncpu: 4.461110164508667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.866195363419461,
            "unit": "us/iter",
            "extra": "iterations: 161714\ncpu: 3.865844812446663 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.718858773751092,
            "unit": "us/iter",
            "extra": "iterations: 190255\ncpu: 3.7185581771832545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/50",
            "value": 3.4348610620771525,
            "unit": "us/iter",
            "extra": "iterations: 203940\ncpu: 3.434520447190355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/75",
            "value": 3.240543787762973,
            "unit": "us/iter",
            "extra": "iterations: 215985\ncpu: 3.2403855452924972 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/100",
            "value": 3.160283827726947,
            "unit": "us/iter",
            "extra": "iterations: 221416\ncpu: 3.160016091881346 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/150",
            "value": 3.010516501500476,
            "unit": "us/iter",
            "extra": "iterations: 231585\ncpu: 3.010189187555328 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/200",
            "value": 2.987733450222362,
            "unit": "us/iter",
            "extra": "iterations: 233840\ncpu: 2.9873802771125533 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 278.57848799999374,
            "unit": "us/iter",
            "extra": "iterations: 2500\ncpu: 278.55208519999974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 45.479253076723,
            "unit": "us/iter",
            "extra": "iterations: 15276\ncpu: 45.47837319979058 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 31.036418900479685,
            "unit": "us/iter",
            "extra": "iterations: 22719\ncpu: 31.035764338219046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.310176445055017,
            "unit": "us/iter",
            "extra": "iterations: 27646\ncpu: 25.309794219778546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.494079947480046,
            "unit": "us/iter",
            "extra": "iterations: 27418\ncpu: 25.49357385659057 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.702088863852726,
            "unit": "us/iter",
            "extra": "iterations: 28403\ncpu: 24.701189874309033 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.112917278233848,
            "unit": "us/iter",
            "extra": "iterations: 28070\ncpu: 25.112828820805124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/50",
            "value": 21.672914171969918,
            "unit": "us/iter",
            "extra": "iterations: 31901\ncpu: 21.67113012131281 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/75",
            "value": 21.209265848418983,
            "unit": "us/iter",
            "extra": "iterations: 32590\ncpu: 21.206851273396772 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/100",
            "value": 19.768212657869103,
            "unit": "us/iter",
            "extra": "iterations: 35235\ncpu: 19.76590041152269 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/150",
            "value": 21.09280566813686,
            "unit": "us/iter",
            "extra": "iterations: 33556\ncpu: 21.09080075098336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/200",
            "value": 19.71598301348166,
            "unit": "us/iter",
            "extra": "iterations: 35381\ncpu: 19.714422769282937 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 648.830740570353,
            "unit": "us/iter",
            "extra": "iterations: 1087\ncpu: 648.7504158233676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 121.28088133241216,
            "unit": "us/iter",
            "extra": "iterations: 5764\ncpu: 121.27650936849396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 72.15555268368735,
            "unit": "us/iter",
            "extra": "iterations: 9595\ncpu: 72.1546917144346 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.71048512585924,
            "unit": "us/iter",
            "extra": "iterations: 11362\ncpu: 60.70561089596895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.818733698579166,
            "unit": "us/iter",
            "extra": "iterations: 11134\ncpu: 61.81307023531522 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.094116641526654,
            "unit": "us/iter",
            "extra": "iterations: 11934\ncpu: 58.091872716608144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.76504765666148,
            "unit": "us/iter",
            "extra": "iterations: 11394\ncpu: 60.76471836054059 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/50",
            "value": 56.97940753731884,
            "unit": "us/iter",
            "extra": "iterations: 12259\ncpu: 56.975823802920154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/75",
            "value": 55.3160461722489,
            "unit": "us/iter",
            "extra": "iterations: 12540\ncpu: 55.309933811802296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/100",
            "value": 52.16946191260032,
            "unit": "us/iter",
            "extra": "iterations: 13364\ncpu: 52.16640616581843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/150",
            "value": 50.09437687490886,
            "unit": "us/iter",
            "extra": "iterations: 13734\ncpu: 50.091402067860784 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/200",
            "value": 49.16639841057689,
            "unit": "us/iter",
            "extra": "iterations: 14219\ncpu: 49.16411125958265 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3751.4214759358892,
            "unit": "us/iter",
            "extra": "iterations: 187\ncpu: 3751.2895989304775 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 904.5294291237163,
            "unit": "us/iter",
            "extra": "iterations: 776\ncpu: 904.5137139175262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 619.927589743585,
            "unit": "us/iter",
            "extra": "iterations: 1131\ncpu: 619.9138001768324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 512.9832577092571,
            "unit": "us/iter",
            "extra": "iterations: 1362\ncpu: 512.9519970631418 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 486.5180257301881,
            "unit": "us/iter",
            "extra": "iterations: 1438\ncpu: 486.51183936022204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 456.3723958197108,
            "unit": "us/iter",
            "extra": "iterations: 1531\ncpu: 456.3657622468999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.5191296061004,
            "unit": "us/iter",
            "extra": "iterations: 1574\ncpu: 446.4741766200779 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/50",
            "value": 446.124977070064,
            "unit": "us/iter",
            "extra": "iterations: 1570\ncpu: 446.090349681531 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/75",
            "value": 475.8039080381403,
            "unit": "us/iter",
            "extra": "iterations: 1468\ncpu: 475.7480497275192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/100",
            "value": 486.40197640527265,
            "unit": "us/iter",
            "extra": "iterations: 1441\ncpu: 486.3735503122818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/150",
            "value": 463.0427866136532,
            "unit": "us/iter",
            "extra": "iterations: 1509\ncpu: 463.0014996686543 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/200",
            "value": 457.8329459283468,
            "unit": "us/iter",
            "extra": "iterations: 1535\ncpu: 457.80474071661274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.404887097940197,
            "unit": "us/iter",
            "extra": "iterations: 27670\ncpu: 25.401740874593425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.975632819776574,
            "unit": "us/iter",
            "extra": "iterations: 117027\ncpu: 5.975398463602456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.652967496278032,
            "unit": "us/iter",
            "extra": "iterations: 151798\ncpu: 4.652682084085419 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.968422875101475,
            "unit": "us/iter",
            "extra": "iterations: 176279\ncpu: 3.9681770091729436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.83653894082697,
            "unit": "us/iter",
            "extra": "iterations: 182482\ncpu: 3.8362033789634107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.820904417854384,
            "unit": "us/iter",
            "extra": "iterations: 183528\ncpu: 3.8205002942330495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.606937826374386,
            "unit": "us/iter",
            "extra": "iterations: 193796\ncpu: 3.6066873206877075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/50",
            "value": 3.622791538389996,
            "unit": "us/iter",
            "extra": "iterations: 192942\ncpu: 3.6227826704398423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/75",
            "value": 3.581747955302919,
            "unit": "us/iter",
            "extra": "iterations: 195628\ncpu: 3.581623571267919 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/100",
            "value": 3.7716695127512923,
            "unit": "us/iter",
            "extra": "iterations: 186455\ncpu: 3.771484148990391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/150",
            "value": 3.4691440402776377,
            "unit": "us/iter",
            "extra": "iterations: 201402\ncpu: 3.4688806317712935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/200",
            "value": 3.5000162170241595,
            "unit": "us/iter",
            "extra": "iterations: 200715\ncpu: 3.4923748499115743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.7827018368264,
            "unit": "us/iter",
            "extra": "iterations: 4682\ncpu: 149.7736627509606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.222630016124885,
            "unit": "us/iter",
            "extra": "iterations: 22328\ncpu: 31.220180625224028 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.59328376161888,
            "unit": "us/iter",
            "extra": "iterations: 31093\ncpu: 22.592329366738536 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.062730477931837,
            "unit": "us/iter",
            "extra": "iterations: 34461\ncpu: 20.062183424740958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.14676344086123,
            "unit": "us/iter",
            "extra": "iterations: 34689\ncpu: 20.146306004785416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.184919121071886,
            "unit": "us/iter",
            "extra": "iterations: 36499\ncpu: 19.183783500917688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.575002887494037,
            "unit": "us/iter",
            "extra": "iterations: 37749\ncpu: 18.5743740231529 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/50",
            "value": 18.034084069770998,
            "unit": "us/iter",
            "extra": "iterations: 38813\ncpu: 18.03293437765696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/75",
            "value": 18.22513050957973,
            "unit": "us/iter",
            "extra": "iterations: 38365\ncpu: 18.224439593379298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/100",
            "value": 18.109280556561476,
            "unit": "us/iter",
            "extra": "iterations: 38666\ncpu: 18.108744711115726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/150",
            "value": 18.348632622029957,
            "unit": "us/iter",
            "extra": "iterations: 38146\ncpu: 18.34810834687802 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/200",
            "value": 18.35488264584074,
            "unit": "us/iter",
            "extra": "iterations: 38158\ncpu: 18.353955553226207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.81617773437955,
            "unit": "us/iter",
            "extra": "iterations: 2048\ncpu: 343.76772656249943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.67733624869368,
            "unit": "us/iter",
            "extra": "iterations: 10519\ncpu: 66.67523205627946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.54349804608558,
            "unit": "us/iter",
            "extra": "iterations: 14842\ncpu: 47.540918744105305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.7450898776301,
            "unit": "us/iter",
            "extra": "iterations: 16834\ncpu: 41.74395835808471 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.56326560733455,
            "unit": "us/iter",
            "extra": "iterations: 16803\ncpu: 41.56169600666542 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.51509507200694,
            "unit": "us/iter",
            "extra": "iterations: 17776\ncpu: 39.5139559518456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.287360058945794,
            "unit": "us/iter",
            "extra": "iterations: 18322\ncpu: 38.2864044318307 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/50",
            "value": 36.859559104758944,
            "unit": "us/iter",
            "extra": "iterations: 19034\ncpu: 36.85834133655564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/75",
            "value": 36.964585660098145,
            "unit": "us/iter",
            "extra": "iterations: 18982\ncpu: 36.96291881782785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/100",
            "value": 36.84725060392925,
            "unit": "us/iter",
            "extra": "iterations: 19042\ncpu: 36.84513275916369 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/150",
            "value": 37.097848062506834,
            "unit": "us/iter",
            "extra": "iterations: 18942\ncpu: 37.09634526449167 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/200",
            "value": 37.451823485455805,
            "unit": "us/iter",
            "extra": "iterations: 18735\ncpu: 37.449507872964794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1864.6302967913787,
            "unit": "us/iter",
            "extra": "iterations: 374\ncpu: 1864.5164759358358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 411.1700467836256,
            "unit": "us/iter",
            "extra": "iterations: 1710\ncpu: 411.15409883041315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 276.592441528373,
            "unit": "us/iter",
            "extra": "iterations: 2591\ncpu: 276.5766719413374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 231.7253034344772,
            "unit": "us/iter",
            "extra": "iterations: 2999\ncpu: 231.71850150050147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.03829072362961,
            "unit": "us/iter",
            "extra": "iterations: 3137\ncpu: 220.029434172778 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.37147305389632,
            "unit": "us/iter",
            "extra": "iterations: 3340\ncpu: 211.35615718563034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 204.13336427319942,
            "unit": "us/iter",
            "extra": "iterations: 3426\ncpu: 204.11629976649377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/50",
            "value": 195.01736689846658,
            "unit": "us/iter",
            "extra": "iterations: 3595\ncpu: 194.99946926286503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/75",
            "value": 184.82697883037378,
            "unit": "us/iter",
            "extra": "iterations: 3779\ncpu: 184.81335961894817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/100",
            "value": 182.60640109460374,
            "unit": "us/iter",
            "extra": "iterations: 3837\ncpu: 182.59840787073438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/150",
            "value": 186.11507349429823,
            "unit": "us/iter",
            "extra": "iterations: 3769\ncpu: 186.1101960732287 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/200",
            "value": 186.56436861702338,
            "unit": "us/iter",
            "extra": "iterations: 3760\ncpu: 186.56350851063536 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/2",
            "value": 14.8165059370373,
            "unit": "us/iter",
            "extra": "iterations: 47330\ncpu: 14.815949207690789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/5",
            "value": 3.3014233204461143,
            "unit": "us/iter",
            "extra": "iterations: 214164\ncpu: 3.3012495003829025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/10",
            "value": 2.298085661261105,
            "unit": "us/iter",
            "extra": "iterations: 308751\ncpu: 2.297972369320285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/15",
            "value": 1.9775707289917384,
            "unit": "us/iter",
            "extra": "iterations: 353886\ncpu: 1.9775427284493134 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/20",
            "value": 1.7690821368456655,
            "unit": "us/iter",
            "extra": "iterations: 394488\ncpu: 1.768952226683691 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/25",
            "value": 1.8358003341950504,
            "unit": "us/iter",
            "extra": "iterations: 380616\ncpu: 1.835675265884773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/30",
            "value": 1.5801353734861456,
            "unit": "us/iter",
            "extra": "iterations: 442908\ncpu: 1.5799833554598117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/50",
            "value": 1.534222044270578,
            "unit": "us/iter",
            "extra": "iterations: 457053\ncpu: 1.534168214627189 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/75",
            "value": 1.4516441061752947,
            "unit": "us/iter",
            "extra": "iterations: 482259\ncpu: 1.451623055246256 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/100",
            "value": 1.483001992129,
            "unit": "us/iter",
            "extra": "iterations: 471857\ncpu: 1.482905416259561 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/150",
            "value": 1.3241261411605174,
            "unit": "us/iter",
            "extra": "iterations: 528519\ncpu: 1.3241087851146163 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/200",
            "value": 1.3085391287273513,
            "unit": "us/iter",
            "extra": "iterations: 534735\ncpu: 1.3084985759301315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/2",
            "value": 131.2668465598545,
            "unit": "us/iter",
            "extra": "iterations: 5305\ncpu: 131.2553724787938 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/5",
            "value": 25.633476155751584,
            "unit": "us/iter",
            "extra": "iterations: 27428\ncpu: 25.63238941957098 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/10",
            "value": 13.841139137992217,
            "unit": "us/iter",
            "extra": "iterations: 50626\ncpu: 13.840708529214139 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/15",
            "value": 11.159757371163275,
            "unit": "us/iter",
            "extra": "iterations: 62948\ncpu: 11.15932225011121 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/20",
            "value": 9.654028028858825,
            "unit": "us/iter",
            "extra": "iterations: 72354\ncpu: 9.653630317605124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/25",
            "value": 8.937445942502022,
            "unit": "us/iter",
            "extra": "iterations: 78472\ncpu: 8.9362231624019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/30",
            "value": 8.306782507510643,
            "unit": "us/iter",
            "extra": "iterations: 84219\ncpu: 8.306393782875702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/50",
            "value": 7.347946956466891,
            "unit": "us/iter",
            "extra": "iterations: 95054\ncpu: 7.3477207482062195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/75",
            "value": 6.974774704030157,
            "unit": "us/iter",
            "extra": "iterations: 100348\ncpu: 6.974164158727743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/100",
            "value": 6.635861978351289,
            "unit": "us/iter",
            "extra": "iterations: 105411\ncpu: 6.635607469808645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/150",
            "value": 6.70527805471956,
            "unit": "us/iter",
            "extra": "iterations: 104314\ncpu: 6.705068034971279 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/200",
            "value": 6.557891573165958,
            "unit": "us/iter",
            "extra": "iterations: 106505\ncpu: 6.557555917562616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/2",
            "value": 257.87756816507465,
            "unit": "us/iter",
            "extra": "iterations: 2714\ncpu: 257.8645095799573 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/5",
            "value": 51.63033003937808,
            "unit": "us/iter",
            "extra": "iterations: 13459\ncpu: 51.62699026673607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/10",
            "value": 27.554520539402898,
            "unit": "us/iter",
            "extra": "iterations: 25658\ncpu: 27.55324982461618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/15",
            "value": 22.386805175950926,
            "unit": "us/iter",
            "extra": "iterations: 31685\ncpu: 22.384698500868016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/20",
            "value": 19.1822786599019,
            "unit": "us/iter",
            "extra": "iterations: 36654\ncpu: 19.181137392917766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/25",
            "value": 17.819380084400766,
            "unit": "us/iter",
            "extra": "iterations: 39336\ncpu: 17.817538133008146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/30",
            "value": 16.835811428156976,
            "unit": "us/iter",
            "extra": "iterations: 41459\ncpu: 16.835580911261488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/50",
            "value": 14.830537378321036,
            "unit": "us/iter",
            "extra": "iterations: 47153\ncpu: 14.829977477573024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/75",
            "value": 14.019153933935007,
            "unit": "us/iter",
            "extra": "iterations: 49950\ncpu: 14.01870916916929 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/100",
            "value": 13.622441945819094,
            "unit": "us/iter",
            "extra": "iterations: 51495\ncpu: 13.621761724439223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/150",
            "value": 13.493331539040772,
            "unit": "us/iter",
            "extra": "iterations: 51831\ncpu: 13.49262541722128 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/200",
            "value": 13.482752849960574,
            "unit": "us/iter",
            "extra": "iterations: 52106\ncpu: 13.481818926803092 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/2",
            "value": 1253.6712140287716,
            "unit": "us/iter",
            "extra": "iterations: 556\ncpu: 1253.6108327338213 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/5",
            "value": 251.70407681264686,
            "unit": "us/iter",
            "extra": "iterations: 2786\ncpu: 251.69946805455666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/10",
            "value": 134.75683133230143,
            "unit": "us/iter",
            "extra": "iterations: 5164\ncpu: 134.7560846243219 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/15",
            "value": 108.29138620154433,
            "unit": "us/iter",
            "extra": "iterations: 6450\ncpu: 108.2844565891495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/20",
            "value": 95.22472264561704,
            "unit": "us/iter",
            "extra": "iterations: 7348\ncpu: 95.21619093631077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/25",
            "value": 88.84286945005563,
            "unit": "us/iter",
            "extra": "iterations: 7928\ncpu: 88.83130083249223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/30",
            "value": 83.8922567697123,
            "unit": "us/iter",
            "extra": "iterations: 8346\ncpu: 83.88972849269149 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/50",
            "value": 75.56440015088047,
            "unit": "us/iter",
            "extra": "iterations: 9279\ncpu: 75.56280784567399 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/75",
            "value": 70.64465115105264,
            "unit": "us/iter",
            "extra": "iterations: 9904\ncpu: 70.6421498384481 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/100",
            "value": 68.23339842151385,
            "unit": "us/iter",
            "extra": "iterations: 10263\ncpu: 68.22875231413872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/150",
            "value": 67.83546517970544,
            "unit": "us/iter",
            "extra": "iterations: 10267\ncpu: 67.83307490016749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/200",
            "value": 66.50231424501534,
            "unit": "us/iter",
            "extra": "iterations: 10530\ncpu: 66.50081756884961 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/2",
            "value": 28.387923504812754,
            "unit": "us/iter",
            "extra": "iterations: 24629\ncpu: 28.387017662106196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/5",
            "value": 5.44938762576526,
            "unit": "us/iter",
            "extra": "iterations: 127022\ncpu: 5.449238045377988 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/10",
            "value": 3.671271690085392,
            "unit": "us/iter",
            "extra": "iterations: 190375\ncpu: 3.67108549441886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/15",
            "value": 3.1089319625292333,
            "unit": "us/iter",
            "extra": "iterations: 226096\ncpu: 3.1088093287807257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/20",
            "value": 2.6193610388732465,
            "unit": "us/iter",
            "extra": "iterations: 266481\ncpu: 2.6192897279730114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/25",
            "value": 2.6832253851781647,
            "unit": "us/iter",
            "extra": "iterations: 261113\ncpu: 2.6831803816738713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/30",
            "value": 2.454755558202633,
            "unit": "us/iter",
            "extra": "iterations: 285434\ncpu: 2.4547005507402297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/50",
            "value": 2.4073812240771337,
            "unit": "us/iter",
            "extra": "iterations: 290766\ncpu: 2.407299037714198 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/75",
            "value": 2.313539092240937,
            "unit": "us/iter",
            "extra": "iterations: 302349\ncpu: 2.3134500262941544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/100",
            "value": 2.360742919272594,
            "unit": "us/iter",
            "extra": "iterations: 297074\ncpu: 2.3606109790826455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/150",
            "value": 2.194328592155216,
            "unit": "us/iter",
            "extra": "iterations: 319119\ncpu: 2.1942246372043015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/200",
            "value": 2.1878521909194006,
            "unit": "us/iter",
            "extra": "iterations: 320596\ncpu: 2.187777299155298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/2",
            "value": 135.07704556166928,
            "unit": "us/iter",
            "extra": "iterations: 5092\ncpu: 135.0668505498819 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/5",
            "value": 31.60687155839374,
            "unit": "us/iter",
            "extra": "iterations: 22228\ncpu: 31.605483984163467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/10",
            "value": 19.90974855086946,
            "unit": "us/iter",
            "extra": "iterations: 35021\ncpu: 19.90830001998774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/15",
            "value": 17.20966738666241,
            "unit": "us/iter",
            "extra": "iterations: 40741\ncpu: 17.208220883140118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/20",
            "value": 15.762071553385471,
            "unit": "us/iter",
            "extra": "iterations: 44638\ncpu: 15.761116223845208 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/25",
            "value": 14.878647961131604,
            "unit": "us/iter",
            "extra": "iterations: 47134\ncpu: 14.877616815886896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/30",
            "value": 14.311976314484234,
            "unit": "us/iter",
            "extra": "iterations: 48384\ncpu: 14.311708126653677 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/50",
            "value": 13.539655984811386,
            "unit": "us/iter",
            "extra": "iterations: 51614\ncpu: 13.538951466655892 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/75",
            "value": 13.085009258565231,
            "unit": "us/iter",
            "extra": "iterations: 53356\ncpu: 13.083774814453783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/100",
            "value": 12.866964661460743,
            "unit": "us/iter",
            "extra": "iterations: 54558\ncpu: 12.866598317387036 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/150",
            "value": 12.950145064695318,
            "unit": "us/iter",
            "extra": "iterations: 54100\ncpu: 12.949684879852187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/200",
            "value": 12.841579143150833,
            "unit": "us/iter",
            "extra": "iterations: 54572\ncpu: 12.841211811918123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/2",
            "value": 271.09439047987416,
            "unit": "us/iter",
            "extra": "iterations: 2584\ncpu: 271.0864136996829 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/5",
            "value": 65.24984105588601,
            "unit": "us/iter",
            "extra": "iterations: 10683\ncpu: 65.24676757465191 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/10",
            "value": 41.03178646229425,
            "unit": "us/iter",
            "extra": "iterations: 17093\ncpu: 41.03028596501522 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/15",
            "value": 35.28911183978351,
            "unit": "us/iter",
            "extra": "iterations: 19823\ncpu: 35.287681228875655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/20",
            "value": 32.58503892842239,
            "unit": "us/iter",
            "extra": "iterations: 21501\ncpu: 32.58345193246794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/25",
            "value": 31.219493403459204,
            "unit": "us/iter",
            "extra": "iterations: 22436\ncpu: 31.218825414512228 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/30",
            "value": 30.238110952440813,
            "unit": "us/iter",
            "extra": "iterations: 23109\ncpu: 30.237181877190896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/50",
            "value": 28.25737762719912,
            "unit": "us/iter",
            "extra": "iterations: 24646\ncpu: 28.256364115880448 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/75",
            "value": 27.42434699710281,
            "unit": "us/iter",
            "extra": "iterations: 25542\ncpu: 27.422748414377168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/100",
            "value": 26.987466887544514,
            "unit": "us/iter",
            "extra": "iterations: 25957\ncpu: 26.98601849212137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/150",
            "value": 26.928992130496326,
            "unit": "us/iter",
            "extra": "iterations: 26177\ncpu: 26.926774114680754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/200",
            "value": 26.848769038845898,
            "unit": "us/iter",
            "extra": "iterations: 26052\ncpu: 26.84707515737797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/2",
            "value": 1497.0630938165823,
            "unit": "us/iter",
            "extra": "iterations: 469\ncpu: 1496.9738038379626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/5",
            "value": 481.9614848901179,
            "unit": "us/iter",
            "extra": "iterations: 1456\ncpu: 481.9455144230885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/10",
            "value": 362.2255297772959,
            "unit": "us/iter",
            "extra": "iterations: 1931\ncpu: 362.2024484722873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/15",
            "value": 334.38692484441515,
            "unit": "us/iter",
            "extra": "iterations: 2089\ncpu: 334.3647079942478 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/20",
            "value": 320.4361408257086,
            "unit": "us/iter",
            "extra": "iterations: 2180\ncpu: 320.40192706422266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/25",
            "value": 312.268189032554,
            "unit": "us/iter",
            "extra": "iterations: 2243\ncpu: 312.2527405260799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/30",
            "value": 305.547483814531,
            "unit": "us/iter",
            "extra": "iterations: 2286\ncpu: 305.53786132983964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/50",
            "value": 295.9239175126888,
            "unit": "us/iter",
            "extra": "iterations: 2364\ncpu: 295.9200317258868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/75",
            "value": 292.3222649750446,
            "unit": "us/iter",
            "extra": "iterations: 2404\ncpu: 291.6449326123141 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/100",
            "value": 290.8849214703254,
            "unit": "us/iter",
            "extra": "iterations: 2394\ncpu: 290.8681633249838 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/150",
            "value": 289.55103688354416,
            "unit": "us/iter",
            "extra": "iterations: 2413\ncpu: 289.54508785743957 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/200",
            "value": 287.7643603122422,
            "unit": "us/iter",
            "extra": "iterations: 2434\ncpu: 287.76317543138885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/2",
            "value": 220.03360430516054,
            "unit": "us/iter",
            "extra": "iterations: 3159\ncpu: 220.02150585628306 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/5",
            "value": 158.7686945446362,
            "unit": "us/iter",
            "extra": "iterations: 4436\ncpu: 158.757215058612 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/10",
            "value": 156.64830896121765,
            "unit": "us/iter",
            "extra": "iterations: 4486\ncpu: 156.63831029871 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/15",
            "value": 155.5738058810519,
            "unit": "us/iter",
            "extra": "iterations: 4523\ncpu: 155.5620546097774 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/20",
            "value": 152.90277616853223,
            "unit": "us/iter",
            "extra": "iterations: 4557\ncpu: 152.88913934605955 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/25",
            "value": 152.41412832823943,
            "unit": "us/iter",
            "extra": "iterations: 4582\ncpu: 152.4044340899144 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/30",
            "value": 152.27195291040346,
            "unit": "us/iter",
            "extra": "iterations: 4587\ncpu: 152.26962306518573 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/50",
            "value": 150.92851856650265,
            "unit": "us/iter",
            "extra": "iterations: 4632\ncpu: 150.9241556563037 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/75",
            "value": 149.02403205127501,
            "unit": "us/iter",
            "extra": "iterations: 4680\ncpu: 149.01791282051113 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/100",
            "value": 149.50552615844953,
            "unit": "us/iter",
            "extra": "iterations: 4683\ncpu: 149.4908101644256 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/150",
            "value": 147.1437078793014,
            "unit": "us/iter",
            "extra": "iterations: 4772\ncpu: 147.13218985749862 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/200",
            "value": 146.31341717404973,
            "unit": "us/iter",
            "extra": "iterations: 4763\ncpu: 146.30173651059735 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/2",
            "value": 1081.3928520801269,
            "unit": "us/iter",
            "extra": "iterations: 649\ncpu: 1081.2495716487012 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/5",
            "value": 770.5054679911528,
            "unit": "us/iter",
            "extra": "iterations: 906\ncpu: 770.490059602643 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/10",
            "value": 716.1476333676949,
            "unit": "us/iter",
            "extra": "iterations: 971\ncpu: 716.0712090628243 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/15",
            "value": 704.4246987952049,
            "unit": "us/iter",
            "extra": "iterations: 996\ncpu: 704.3588855421764 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/20",
            "value": 704.465042000038,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 704.3875269999944 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/25",
            "value": 695.4796374622774,
            "unit": "us/iter",
            "extra": "iterations: 993\ncpu: 695.4310896273951 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/30",
            "value": 697.4543902932664,
            "unit": "us/iter",
            "extra": "iterations: 989\ncpu: 697.4513245702902 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/50",
            "value": 693.0809731876968,
            "unit": "us/iter",
            "extra": "iterations: 1007\ncpu: 692.9943733863172 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/75",
            "value": 690.5954856293517,
            "unit": "us/iter",
            "extra": "iterations: 1009\ncpu: 690.5361486620385 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/100",
            "value": 684.9096390243819,
            "unit": "us/iter",
            "extra": "iterations: 1025\ncpu: 684.8646312195198 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/150",
            "value": 678.3824573947255,
            "unit": "us/iter",
            "extra": "iterations: 1021\ncpu: 678.3555651322222 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/200",
            "value": 681.0889911764884,
            "unit": "us/iter",
            "extra": "iterations: 1020\ncpu: 681.0659745098087 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/2",
            "value": 2170.47495341616,
            "unit": "us/iter",
            "extra": "iterations: 322\ncpu: 2170.3168447205444 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/5",
            "value": 1657.2455555555425,
            "unit": "us/iter",
            "extra": "iterations: 423\ncpu: 1657.1602624113073 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/10",
            "value": 1536.4139716157258,
            "unit": "us/iter",
            "extra": "iterations: 458\ncpu: 1536.3228537117961 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/15",
            "value": 1492.0352345415304,
            "unit": "us/iter",
            "extra": "iterations: 469\ncpu: 1491.9127185501334 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/20",
            "value": 1490.052348837124,
            "unit": "us/iter",
            "extra": "iterations: 473\ncpu: 1489.9664524313002 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/25",
            "value": 1472.4311389473817,
            "unit": "us/iter",
            "extra": "iterations: 475\ncpu: 1472.4282147368453 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/30",
            "value": 1471.363848421022,
            "unit": "us/iter",
            "extra": "iterations: 475\ncpu: 1471.3427557894408 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/50",
            "value": 1453.7172925311636,
            "unit": "us/iter",
            "extra": "iterations: 482\ncpu: 1453.6346244813267 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/75",
            "value": 1441.7767679670665,
            "unit": "us/iter",
            "extra": "iterations: 487\ncpu: 1441.6838398357227 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/100",
            "value": 1438.9767186858257,
            "unit": "us/iter",
            "extra": "iterations: 487\ncpu: 1438.8664928131197 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/150",
            "value": 1425.8710772357592,
            "unit": "us/iter",
            "extra": "iterations: 492\ncpu: 1425.7544898374076 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/200",
            "value": 1419.0311239837586,
            "unit": "us/iter",
            "extra": "iterations: 492\ncpu: 1418.9569512195096 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/2",
            "value": 10716.57884615346,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 10716.080615384708 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/5",
            "value": 9519.64579451993,
            "unit": "us/iter",
            "extra": "iterations: 73\ncpu: 9519.509246575497 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/10",
            "value": 8816.170860759226,
            "unit": "us/iter",
            "extra": "iterations: 79\ncpu: 8815.616620253224 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/15",
            "value": 8610.049358024713,
            "unit": "us/iter",
            "extra": "iterations: 81\ncpu: 8609.209012345471 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/20",
            "value": 8572.787134146049,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8572.238256097606 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/25",
            "value": 8556.838000000598,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8556.695243902575 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/30",
            "value": 8514.663560975618,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8514.4319024391 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/50",
            "value": 8462.458309523414,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8461.79992857137 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/75",
            "value": 8373.853880952776,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8373.113416666572 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/100",
            "value": 8314.793261904795,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8314.083797618956 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/150",
            "value": 8286.655607142686,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8286.554690476423 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/200",
            "value": 8262.491270587654,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8262.001870588165 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/2",
            "value": 48.85877868852654,
            "unit": "us/iter",
            "extra": "iterations: 14152\ncpu: 48.85773431317017 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/5",
            "value": 17.93690068976088,
            "unit": "us/iter",
            "extra": "iterations: 38999\ncpu: 17.93682338008689 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/10",
            "value": 14.754359796512599,
            "unit": "us/iter",
            "extra": "iterations: 47374\ncpu: 14.753978849158162 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/15",
            "value": 13.481457346520232,
            "unit": "us/iter",
            "extra": "iterations: 51766\ncpu: 13.480824730518087 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/20",
            "value": 12.820150130477522,
            "unit": "us/iter",
            "extra": "iterations: 54799\ncpu: 12.819225405572864 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/25",
            "value": 12.767261485709703,
            "unit": "us/iter",
            "extra": "iterations: 54829\ncpu: 12.766485673639728 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/30",
            "value": 12.357769481265844,
            "unit": "us/iter",
            "extra": "iterations: 56503\ncpu: 12.356970762614425 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/50",
            "value": 12.312988117211406,
            "unit": "us/iter",
            "extra": "iterations: 56889\ncpu: 12.312249099122733 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/75",
            "value": 12.096941272880299,
            "unit": "us/iter",
            "extra": "iterations: 57963\ncpu: 12.096410951814214 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/100",
            "value": 12.104166211025383,
            "unit": "us/iter",
            "extra": "iterations: 57794\ncpu: 12.103176904177191 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/150",
            "value": 11.8715221487891,
            "unit": "us/iter",
            "extra": "iterations: 59010\ncpu: 11.870559600067892 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/200",
            "value": 11.871073719781428,
            "unit": "us/iter",
            "extra": "iterations: 59482\ncpu: 11.870121465317348 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/2",
            "value": 224.09541140660914,
            "unit": "us/iter",
            "extra": "iterations: 3121\ncpu: 224.07625344440783 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/5",
            "value": 73.53602796982675,
            "unit": "us/iter",
            "extra": "iterations: 9546\ncpu: 73.53417724701595 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/10",
            "value": 55.93267479286292,
            "unit": "us/iter",
            "extra": "iterations: 12552\ncpu: 55.93044351497686 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/15",
            "value": 51.299570640177436,
            "unit": "us/iter",
            "extra": "iterations: 13590\ncpu: 51.29377314201521 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/20",
            "value": 48.85169393158378,
            "unit": "us/iter",
            "extra": "iterations: 14353\ncpu: 48.850667177594026 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/25",
            "value": 47.164803307459145,
            "unit": "us/iter",
            "extra": "iterations: 14815\ncpu: 47.1643484981426 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/30",
            "value": 46.609888911194396,
            "unit": "us/iter",
            "extra": "iterations: 14943\ncpu: 46.60556648597899 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/50",
            "value": 44.82473225620482,
            "unit": "us/iter",
            "extra": "iterations: 15597\ncpu: 44.8188037443114 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/75",
            "value": 44.05479721557427,
            "unit": "us/iter",
            "extra": "iterations: 15874\ncpu: 44.05140758472956 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/100",
            "value": 44.192513833992635,
            "unit": "us/iter",
            "extra": "iterations: 15939\ncpu: 44.191658008657946 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/150",
            "value": 43.359277106156,
            "unit": "us/iter",
            "extra": "iterations: 15882\ncpu: 43.35871634554798 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/200",
            "value": 43.33333825254628,
            "unit": "us/iter",
            "extra": "iterations: 16195\ncpu: 43.330262920655265 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/2",
            "value": 450.1266180064102,
            "unit": "us/iter",
            "extra": "iterations: 1555\ncpu: 450.07690546624616 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/5",
            "value": 145.8769383389241,
            "unit": "us/iter",
            "extra": "iterations: 4768\ncpu: 145.8660404781865 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/10",
            "value": 109.66799544383233,
            "unit": "us/iter",
            "extra": "iterations: 6365\ncpu: 109.6619703063645 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/15",
            "value": 98.92613021420794,
            "unit": "us/iter",
            "extra": "iterations: 7096\ncpu: 98.92236288049502 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/20",
            "value": 93.6669374244672,
            "unit": "us/iter",
            "extra": "iterations: 7447\ncpu: 93.65782758157698 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/25",
            "value": 92.0316694781264,
            "unit": "us/iter",
            "extra": "iterations: 7588\ncpu: 92.02185200316127 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/30",
            "value": 90.23908280827924,
            "unit": "us/iter",
            "extra": "iterations: 7777\ncpu: 90.23219017616051 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/50",
            "value": 86.55296159545796,
            "unit": "us/iter",
            "extra": "iterations: 8098\ncpu: 86.54914003457885 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/75",
            "value": 84.9590064375038,
            "unit": "us/iter",
            "extra": "iterations: 8233\ncpu: 84.95771067654336 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/100",
            "value": 84.19942275637345,
            "unit": "us/iter",
            "extra": "iterations: 8279\ncpu: 84.19737166324433 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/150",
            "value": 83.95850222275956,
            "unit": "us/iter",
            "extra": "iterations: 8323\ncpu: 83.9535171212314 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/200",
            "value": 83.6382487170324,
            "unit": "us/iter",
            "extra": "iterations: 8379\ncpu: 83.6306190476183 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/2",
            "value": 2315.726192052988,
            "unit": "us/iter",
            "extra": "iterations: 302\ncpu: 2315.462360927059 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/5",
            "value": 748.6781133690132,
            "unit": "us/iter",
            "extra": "iterations: 935\ncpu: 748.6187336898801 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/10",
            "value": 547.8569388714674,
            "unit": "us/iter",
            "extra": "iterations: 1276\ncpu: 547.8489835423377 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/15",
            "value": 488.7201415620694,
            "unit": "us/iter",
            "extra": "iterations: 1434\ncpu: 488.67007601115785 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/20",
            "value": 463.64242119208836,
            "unit": "us/iter",
            "extra": "iterations: 1510\ncpu: 463.59634503311185 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/25",
            "value": 450.8102028332415,
            "unit": "us/iter",
            "extra": "iterations: 1553\ncpu: 450.80248229234087 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/30",
            "value": 439.290774984296,
            "unit": "us/iter",
            "extra": "iterations: 1591\ncpu: 439.27119736015715 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/50",
            "value": 432.6321964933709,
            "unit": "us/iter",
            "extra": "iterations: 1654\ncpu: 432.59574486092345 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/75",
            "value": 413.57157565010493,
            "unit": "us/iter",
            "extra": "iterations: 1692\ncpu: 413.54510047283514 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/100",
            "value": 407.92229953377176,
            "unit": "us/iter",
            "extra": "iterations: 1716\ncpu: 407.8876270396413 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/150",
            "value": 406.5581176129644,
            "unit": "us/iter",
            "extra": "iterations: 1726\ncpu: 406.55266685978796 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/200",
            "value": 405.05923192596015,
            "unit": "us/iter",
            "extra": "iterations: 1729\ncpu: 405.03675534993937 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "committer": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "distinct": true,
          "id": "ea354d608bb2ccda93daff3fd05ba6e5e9568d6d",
          "message": "Release v0.19.0\n\nBreaking changes:\n- Serialization format includes graph edges (old files incompatible)\n- GFF reader stores native 1-based inclusive coordinates\n- set_start()/set_end() replaced with set_range() on interval/genomic_coordinate\n- skip_invalid_records removed from bam_reader_options\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-29T21:50:21-05:00",
          "tree_id": "ff4090c60f5018a2c1085269c06bf1ee7b30547d",
          "url": "https://github.com/genogrove/genogrove/commit/ea354d608bb2ccda93daff3fd05ba6e5e9568d6d"
        },
        "date": 1774839510480,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.58244155075533,
            "unit": "us/iter",
            "extra": "iterations: 20274\ncpu: 34.57906713031469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.879018906449321,
            "unit": "us/iter",
            "extra": "iterations: 88647\ncpu: 7.8781924825431195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.1015968238462905,
            "unit": "us/iter",
            "extra": "iterations: 135132\ncpu: 5.101195297930912 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.301385354775352,
            "unit": "us/iter",
            "extra": "iterations: 162920\ncpu: 4.300780640805304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9698134518559,
            "unit": "us/iter",
            "extra": "iterations: 176169\ncpu: 3.9694233094358236 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9089128506571575,
            "unit": "us/iter",
            "extra": "iterations: 180839\ncpu: 3.9085297087464532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.665375218058621,
            "unit": "us/iter",
            "extra": "iterations: 190889\ncpu: 3.664974388257047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/50",
            "value": 3.435969962906937,
            "unit": "us/iter",
            "extra": "iterations: 204081\ncpu: 3.435689804538397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/75",
            "value": 3.2298109834325963,
            "unit": "us/iter",
            "extra": "iterations: 216690\ncpu: 3.22952704785638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/100",
            "value": 3.1639848104358475,
            "unit": "us/iter",
            "extra": "iterations: 221007\ncpu: 3.163769029940229 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/150",
            "value": 3.014271416688562,
            "unit": "us/iter",
            "extra": "iterations: 232027\ncpu: 3.0141594642002816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/200",
            "value": 3.0285666224970216,
            "unit": "us/iter",
            "extra": "iterations: 230928\ncpu: 3.0284623389108285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 279.20222395208845,
            "unit": "us/iter",
            "extra": "iterations: 2505\ncpu: 279.18256726546906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.49560518444689,
            "unit": "us/iter",
            "extra": "iterations: 16048\ncpu: 43.49202355433697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.26936804950324,
            "unit": "us/iter",
            "extra": "iterations: 22948\ncpu: 30.268543968973358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.331910768997492,
            "unit": "us/iter",
            "extra": "iterations: 26437\ncpu: 25.330368763475345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.344108031011995,
            "unit": "us/iter",
            "extra": "iterations: 27344\ncpu: 25.34239968548857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.755085662211577,
            "unit": "us/iter",
            "extra": "iterations: 27982\ncpu: 24.7528945036095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.560464432042828,
            "unit": "us/iter",
            "extra": "iterations: 28312\ncpu: 24.559076681265896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/50",
            "value": 21.61891092034508,
            "unit": "us/iter",
            "extra": "iterations: 32151\ncpu: 21.61809271873342 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/75",
            "value": 21.708539232630617,
            "unit": "us/iter",
            "extra": "iterations: 31823\ncpu: 21.707682022436586 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/100",
            "value": 19.999620136518736,
            "unit": "us/iter",
            "extra": "iterations: 35160\ncpu: 19.998185409556296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/150",
            "value": 20.10264631434915,
            "unit": "us/iter",
            "extra": "iterations: 35082\ncpu: 20.100858046861646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/200",
            "value": 19.81537239627367,
            "unit": "us/iter",
            "extra": "iterations: 35430\ncpu: 19.813689980242735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 661.1700597426506,
            "unit": "us/iter",
            "extra": "iterations: 1088\ncpu: 661.0836737132357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 118.9824522913823,
            "unit": "us/iter",
            "extra": "iterations: 5848\ncpu: 118.96748991108024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.25557386480212,
            "unit": "us/iter",
            "extra": "iterations: 9734\ncpu: 70.24900667762469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.64879514682522,
            "unit": "us/iter",
            "extra": "iterations: 11374\ncpu: 60.644923597678805 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.448083742547325,
            "unit": "us/iter",
            "extra": "iterations: 11404\ncpu: 61.442835233251415 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.78095020290879,
            "unit": "us/iter",
            "extra": "iterations: 11828\ncpu: 58.775680334798714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.50573368806908,
            "unit": "us/iter",
            "extra": "iterations: 11464\ncpu: 60.50180582693651 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/50",
            "value": 56.885202345800764,
            "unit": "us/iter",
            "extra": "iterations: 12192\ncpu: 56.88214476706055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/75",
            "value": 55.835780869704855,
            "unit": "us/iter",
            "extra": "iterations: 12326\ncpu: 55.828269349343046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/100",
            "value": 51.90251819548859,
            "unit": "us/iter",
            "extra": "iterations: 13300\ncpu: 51.89608699248132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/150",
            "value": 49.49601662259116,
            "unit": "us/iter",
            "extra": "iterations: 13235\ncpu: 49.49318904420119 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/200",
            "value": 47.24153478712328,
            "unit": "us/iter",
            "extra": "iterations: 14445\ncpu: 47.23444797507781 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3730.60127127658,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3730.134835106401 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 902.8541182519314,
            "unit": "us/iter",
            "extra": "iterations: 778\ncpu: 902.7499010282751 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 613.8884064685304,
            "unit": "us/iter",
            "extra": "iterations: 1144\ncpu: 613.8420664335665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 512.7748021818248,
            "unit": "us/iter",
            "extra": "iterations: 1375\ncpu: 511.4444683636376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 487.0955995836234,
            "unit": "us/iter",
            "extra": "iterations: 1441\ncpu: 487.08336155447773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 466.44626447369313,
            "unit": "us/iter",
            "extra": "iterations: 1520\ncpu: 466.4026177631619 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 459.7520285158865,
            "unit": "us/iter",
            "extra": "iterations: 1543\ncpu: 459.710634478287 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/50",
            "value": 459.69938122605123,
            "unit": "us/iter",
            "extra": "iterations: 1566\ncpu: 459.6770830140456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/75",
            "value": 487.7883688858746,
            "unit": "us/iter",
            "extra": "iterations: 1472\ncpu: 487.75111480978484 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/100",
            "value": 488.7341554621833,
            "unit": "us/iter",
            "extra": "iterations: 1428\ncpu: 488.6972247899114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/150",
            "value": 469.1162995234674,
            "unit": "us/iter",
            "extra": "iterations: 1469\ncpu: 469.0872532334918 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/200",
            "value": 471.0092806191017,
            "unit": "us/iter",
            "extra": "iterations: 1486\ncpu: 470.9699549125187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.276323169631528,
            "unit": "us/iter",
            "extra": "iterations: 27713\ncpu: 25.274567675820084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.957278123930346,
            "unit": "us/iter",
            "extra": "iterations: 116840\ncpu: 5.956928859979449 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.5595100052051984,
            "unit": "us/iter",
            "extra": "iterations: 151771\ncpu: 4.55934411053493 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.904578613270378,
            "unit": "us/iter",
            "extra": "iterations: 179588\ncpu: 3.904210943938336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.794304076066412,
            "unit": "us/iter",
            "extra": "iterations: 184786\ncpu: 3.794149751604542 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.716870218550093,
            "unit": "us/iter",
            "extra": "iterations: 188332\ncpu: 3.7165760943440347 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5780319329622476,
            "unit": "us/iter",
            "extra": "iterations: 195472\ncpu: 3.577895355856598 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/50",
            "value": 3.598151364292576,
            "unit": "us/iter",
            "extra": "iterations: 194643\ncpu: 3.5978860118267817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/75",
            "value": 3.636304585729764,
            "unit": "us/iter",
            "extra": "iterations: 196828\ncpu: 3.6360030229439024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/100",
            "value": 3.7163246138143924,
            "unit": "us/iter",
            "extra": "iterations: 188122\ncpu: 3.716052338376153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/150",
            "value": 3.461555438142638,
            "unit": "us/iter",
            "extra": "iterations: 202514\ncpu: 3.461294162378876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/200",
            "value": 3.4731613777856927,
            "unit": "us/iter",
            "extra": "iterations: 201744\ncpu: 3.47300468911095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 150.42911234277918,
            "unit": "us/iter",
            "extra": "iterations: 4691\ncpu: 150.41627350245145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.25661196298398,
            "unit": "us/iter",
            "extra": "iterations: 22369\ncpu: 31.255587509499613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.43760647571559,
            "unit": "us/iter",
            "extra": "iterations: 31317\ncpu: 22.436353673723545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.068495320126555,
            "unit": "us/iter",
            "extra": "iterations: 34830\ncpu: 20.06625710594312 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.58257358891265,
            "unit": "us/iter",
            "extra": "iterations: 34849\ncpu: 20.5805005882522 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.04511243379054,
            "unit": "us/iter",
            "extra": "iterations: 36626\ncpu: 19.044097935892253 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.447330229000443,
            "unit": "us/iter",
            "extra": "iterations: 37904\ncpu: 18.445579068172542 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/50",
            "value": 17.98695717786639,
            "unit": "us/iter",
            "extra": "iterations: 38765\ncpu: 17.985809157745564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/75",
            "value": 18.21689253801464,
            "unit": "us/iter",
            "extra": "iterations: 38274\ncpu: 18.21608141296966 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/100",
            "value": 18.164404112237243,
            "unit": "us/iter",
            "extra": "iterations: 38811\ncpu: 18.163151812630463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/150",
            "value": 18.328969750843758,
            "unit": "us/iter",
            "extra": "iterations: 38249\ncpu: 18.328062563727094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/200",
            "value": 18.456316599062585,
            "unit": "us/iter",
            "extra": "iterations: 37966\ncpu: 18.45482128746789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.15714488496724,
            "unit": "us/iter",
            "extra": "iterations: 2043\ncpu: 344.12947038668773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.70845108695738,
            "unit": "us/iter",
            "extra": "iterations: 10488\ncpu: 66.70430921052592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.283773841033884,
            "unit": "us/iter",
            "extra": "iterations: 14733\ncpu: 47.28169673522022 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 40.57129707670041,
            "unit": "us/iter",
            "extra": "iterations: 17275\ncpu: 40.567681157742435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.42329052448684,
            "unit": "us/iter",
            "extra": "iterations: 17255\ncpu: 40.421551202549736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.90489342756968,
            "unit": "us/iter",
            "extra": "iterations: 17969\ncpu: 38.90172747509639 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.72700285360311,
            "unit": "us/iter",
            "extra": "iterations: 18573\ncpu: 37.72425467075882 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/50",
            "value": 36.48012503261455,
            "unit": "us/iter",
            "extra": "iterations: 19163\ncpu: 36.477832385326025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/75",
            "value": 36.68060113095169,
            "unit": "us/iter",
            "extra": "iterations: 19099\ncpu: 36.67864453636349 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/100",
            "value": 36.43827651258338,
            "unit": "us/iter",
            "extra": "iterations: 19189\ncpu: 36.43401172546818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/150",
            "value": 36.90073560374791,
            "unit": "us/iter",
            "extra": "iterations: 18998\ncpu: 36.898847615538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/200",
            "value": 37.473740774464765,
            "unit": "us/iter",
            "extra": "iterations: 18671\ncpu: 37.47158084730286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1863.977875331479,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1863.7543183023781 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.27159731152483,
            "unit": "us/iter",
            "extra": "iterations: 1711\ncpu: 410.25132612507633 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.3236238712179,
            "unit": "us/iter",
            "extra": "iterations: 2547\ncpu: 269.30456497840623 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 227.79158789062078,
            "unit": "us/iter",
            "extra": "iterations: 3072\ncpu: 227.77831575521157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 224.64440757097367,
            "unit": "us/iter",
            "extra": "iterations: 3170\ncpu: 224.6258712933751 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.2309224086184,
            "unit": "us/iter",
            "extra": "iterations: 3338\ncpu: 211.20970790892733 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 202.9571351273142,
            "unit": "us/iter",
            "extra": "iterations: 3456\ncpu: 202.92925520833165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/50",
            "value": 194.50656639641844,
            "unit": "us/iter",
            "extra": "iterations: 3577\ncpu: 194.4916894045314 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/75",
            "value": 186.23805413332474,
            "unit": "us/iter",
            "extra": "iterations: 3750\ncpu: 186.22023013333165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/100",
            "value": 184.13057810448186,
            "unit": "us/iter",
            "extra": "iterations: 3809\ncpu: 184.1040913625608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/150",
            "value": 186.86690928495668,
            "unit": "us/iter",
            "extra": "iterations: 3748\ncpu: 186.83789381003035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/200",
            "value": 187.60620010715544,
            "unit": "us/iter",
            "extra": "iterations: 3733\ncpu: 187.59349424055674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/2",
            "value": 14.866766453401812,
            "unit": "us/iter",
            "extra": "iterations: 46890\ncpu: 14.866346705054285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/5",
            "value": 3.2854527181742617,
            "unit": "us/iter",
            "extra": "iterations: 214427\ncpu: 3.277949474646357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/10",
            "value": 2.287008181713559,
            "unit": "us/iter",
            "extra": "iterations: 304215\ncpu: 2.2868498726229767 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/15",
            "value": 1.9758130440926258,
            "unit": "us/iter",
            "extra": "iterations: 353800\ncpu: 1.9757079282080243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/20",
            "value": 1.7758263775110668,
            "unit": "us/iter",
            "extra": "iterations: 394897\ncpu: 1.7756813219649723 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/25",
            "value": 1.7970889944069321,
            "unit": "us/iter",
            "extra": "iterations: 390665\ncpu: 1.7969402505983498 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/30",
            "value": 1.5788671456852117,
            "unit": "us/iter",
            "extra": "iterations: 436448\ncpu: 1.5787339499779922 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/50",
            "value": 1.537925233973023,
            "unit": "us/iter",
            "extra": "iterations: 455608\ncpu: 1.5378598685712286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/75",
            "value": 1.473001220445821,
            "unit": "us/iter",
            "extra": "iterations: 479333\ncpu: 1.4728424018375526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/100",
            "value": 1.4823007970243975,
            "unit": "us/iter",
            "extra": "iterations: 470500\ncpu: 1.4821927438894724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/150",
            "value": 1.3306186792325545,
            "unit": "us/iter",
            "extra": "iterations: 533084\ncpu: 1.3305423573020414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/200",
            "value": 1.3347342961287831,
            "unit": "us/iter",
            "extra": "iterations: 527561\ncpu: 1.3347060472627883 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/2",
            "value": 131.90315435108516,
            "unit": "us/iter",
            "extra": "iterations: 5332\ncpu: 131.8972441860473 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/5",
            "value": 26.163449128121993,
            "unit": "us/iter",
            "extra": "iterations: 27068\ncpu: 26.13918021279736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/10",
            "value": 14.126402916439702,
            "unit": "us/iter",
            "extra": "iterations: 49581\ncpu: 14.125275307073347 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/15",
            "value": 11.334993012535836,
            "unit": "us/iter",
            "extra": "iterations: 61825\ncpu: 11.334637881116084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/20",
            "value": 9.719200186232765,
            "unit": "us/iter",
            "extra": "iterations: 71953\ncpu: 9.718428696510315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/25",
            "value": 8.923721140384435,
            "unit": "us/iter",
            "extra": "iterations: 78570\ncpu: 8.9232861015655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/30",
            "value": 8.290681437563734,
            "unit": "us/iter",
            "extra": "iterations: 84671\ncpu: 8.290351903248903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/50",
            "value": 7.621909607168428,
            "unit": "us/iter",
            "extra": "iterations: 93857\ncpu: 7.620995780815477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/75",
            "value": 7.255896965427358,
            "unit": "us/iter",
            "extra": "iterations: 96521\ncpu: 7.2554499953377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/100",
            "value": 7.00571000178172,
            "unit": "us/iter",
            "extra": "iterations: 101042\ncpu: 7.005008610280858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/150",
            "value": 7.051432442987534,
            "unit": "us/iter",
            "extra": "iterations: 97303\ncpu: 7.05096358796752 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/200",
            "value": 6.85822694013826,
            "unit": "us/iter",
            "extra": "iterations: 104825\ncpu: 6.858005151442867 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/2",
            "value": 256.8013730684263,
            "unit": "us/iter",
            "extra": "iterations: 2718\ncpu: 256.78035540839204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/5",
            "value": 51.035889460531074,
            "unit": "us/iter",
            "extra": "iterations: 13606\ncpu: 51.034801484639196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/10",
            "value": 27.588013359155322,
            "unit": "us/iter",
            "extra": "iterations: 25301\ncpu: 27.5857812734674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/15",
            "value": 22.019920549411232,
            "unit": "us/iter",
            "extra": "iterations: 31743\ncpu: 22.01906319503514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/20",
            "value": 19.165371925066744,
            "unit": "us/iter",
            "extra": "iterations: 36139\ncpu: 19.163857024267248 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/25",
            "value": 17.87309820952393,
            "unit": "us/iter",
            "extra": "iterations: 39375\ncpu: 17.87187900952393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/30",
            "value": 16.836213843351434,
            "unit": "us/iter",
            "extra": "iterations: 41175\ncpu: 16.83541243472983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/50",
            "value": 14.869177091119564,
            "unit": "us/iter",
            "extra": "iterations: 46829\ncpu: 14.867826176087723 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/75",
            "value": 14.215987300303363,
            "unit": "us/iter",
            "extra": "iterations: 49450\ncpu: 14.214899575328591 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/100",
            "value": 13.629094785348181,
            "unit": "us/iter",
            "extra": "iterations: 51432\ncpu: 13.627189317934317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/150",
            "value": 13.532692621226,
            "unit": "us/iter",
            "extra": "iterations: 52258\ncpu: 13.532223353362019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/200",
            "value": 13.601792612147847,
            "unit": "us/iter",
            "extra": "iterations: 51517\ncpu: 13.601078576004044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/2",
            "value": 1273.8069243242976,
            "unit": "us/iter",
            "extra": "iterations: 555\ncpu: 1273.743535135132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/5",
            "value": 249.29425099169228,
            "unit": "us/iter",
            "extra": "iterations: 2773\ncpu: 249.25552686621327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/10",
            "value": 135.03748628815222,
            "unit": "us/iter",
            "extra": "iterations: 5178\ncpu: 135.0293192352265 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/15",
            "value": 108.04961150633424,
            "unit": "us/iter",
            "extra": "iterations: 6466\ncpu: 108.04581874419868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/20",
            "value": 96.53075310326307,
            "unit": "us/iter",
            "extra": "iterations: 7331\ncpu: 96.52309152912241 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/25",
            "value": 89.00224140127614,
            "unit": "us/iter",
            "extra": "iterations: 7850\ncpu: 88.9935110828025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/30",
            "value": 83.88093204115539,
            "unit": "us/iter",
            "extra": "iterations: 8358\ncpu: 83.87191816224185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/50",
            "value": 76.65361189956099,
            "unit": "us/iter",
            "extra": "iterations: 9160\ncpu: 76.64692412663574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/75",
            "value": 71.16444616481373,
            "unit": "us/iter",
            "extra": "iterations: 9817\ncpu: 71.1615897932156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/100",
            "value": 69.43515333200287,
            "unit": "us/iter",
            "extra": "iterations: 10024\ncpu: 69.42711292897084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/150",
            "value": 68.88943961780959,
            "unit": "us/iter",
            "extra": "iterations: 10152\ncpu: 68.88660195035528 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/200",
            "value": 67.78165054332395,
            "unit": "us/iter",
            "extra": "iterations: 10399\ncpu: 67.77730185594633 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/2",
            "value": 28.96169156086573,
            "unit": "us/iter",
            "extra": "iterations: 24102\ncpu: 28.959883495146087 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/5",
            "value": 5.6460431202567465,
            "unit": "us/iter",
            "extra": "iterations: 124118\ncpu: 5.645783915306352 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/10",
            "value": 3.746064636198943,
            "unit": "us/iter",
            "extra": "iterations: 185376\ncpu: 3.745698213360959 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/15",
            "value": 3.0499646162532477,
            "unit": "us/iter",
            "extra": "iterations: 228523\ncpu: 3.0497748891796563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/20",
            "value": 2.6241136337179287,
            "unit": "us/iter",
            "extra": "iterations: 266303\ncpu: 2.6237313436198613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/25",
            "value": 2.7097146998073987,
            "unit": "us/iter",
            "extra": "iterations: 258051\ncpu: 2.7095267253372266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/30",
            "value": 2.439556411719295,
            "unit": "us/iter",
            "extra": "iterations: 287458\ncpu: 2.439327313903294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/50",
            "value": 2.393099795101727,
            "unit": "us/iter",
            "extra": "iterations: 290876\ncpu: 2.392880691428583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/75",
            "value": 2.314845562961971,
            "unit": "us/iter",
            "extra": "iterations: 302285\ncpu: 2.314631361132736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/100",
            "value": 2.3777911714601765,
            "unit": "us/iter",
            "extra": "iterations: 299959\ncpu: 2.3777581469468183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/150",
            "value": 2.1666250729980208,
            "unit": "us/iter",
            "extra": "iterations: 323639\ncpu: 2.1665810115591944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/200",
            "value": 2.169088623998259,
            "unit": "us/iter",
            "extra": "iterations: 322565\ncpu: 2.1689643513709975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/2",
            "value": 137.34605029586712,
            "unit": "us/iter",
            "extra": "iterations: 5070\ncpu: 137.3352039447685 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/5",
            "value": 30.93399819104411,
            "unit": "us/iter",
            "extra": "iterations: 22665\ncpu: 30.931733774541293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/10",
            "value": 19.997367636581433,
            "unit": "us/iter",
            "extra": "iterations: 35089\ncpu: 19.996006782752286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/15",
            "value": 17.11164733530759,
            "unit": "us/iter",
            "extra": "iterations: 40849\ncpu: 17.109321990745894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/20",
            "value": 15.797991540909125,
            "unit": "us/iter",
            "extra": "iterations: 44331\ncpu: 15.795679231237864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/25",
            "value": 14.814787960713966,
            "unit": "us/iter",
            "extra": "iterations: 47345\ncpu: 14.812136001689998 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/30",
            "value": 14.456912433529185,
            "unit": "us/iter",
            "extra": "iterations: 48329\ncpu: 14.454575989571273 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/50",
            "value": 13.467026835775744,
            "unit": "us/iter",
            "extra": "iterations: 51722\ncpu: 13.465651888944663 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/75",
            "value": 13.076993085582103,
            "unit": "us/iter",
            "extra": "iterations: 53656\ncpu: 13.076005665722592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/100",
            "value": 12.980060368462366,
            "unit": "us/iter",
            "extra": "iterations: 54714\ncpu: 12.978366268231188 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/150",
            "value": 12.900707451226234,
            "unit": "us/iter",
            "extra": "iterations: 54179\ncpu: 12.899270307684034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/200",
            "value": 12.796631882307873,
            "unit": "us/iter",
            "extra": "iterations: 54651\ncpu: 12.793701597408852 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/2",
            "value": 270.8480724244792,
            "unit": "us/iter",
            "extra": "iterations: 2582\ncpu: 270.80235553834154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/5",
            "value": 65.35131634071688,
            "unit": "us/iter",
            "extra": "iterations: 10789\ncpu: 65.342135415702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/10",
            "value": 40.67241533806655,
            "unit": "us/iter",
            "extra": "iterations: 17186\ncpu: 40.66671569882463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/15",
            "value": 35.27698245702465,
            "unit": "us/iter",
            "extra": "iterations: 19837\ncpu: 35.27206316479284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/20",
            "value": 32.41010757912104,
            "unit": "us/iter",
            "extra": "iterations: 21612\ncpu: 32.405738015917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/25",
            "value": 31.172185460534646,
            "unit": "us/iter",
            "extra": "iterations: 22463\ncpu: 31.16793905533554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/30",
            "value": 30.007508220648123,
            "unit": "us/iter",
            "extra": "iterations: 23295\ncpu: 30.00426546469141 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/50",
            "value": 28.069857818386808,
            "unit": "us/iter",
            "extra": "iterations: 24954\ncpu: 28.065338743287583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/75",
            "value": 27.449483395990235,
            "unit": "us/iter",
            "extra": "iterations: 25536\ncpu: 27.44597066885962 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/100",
            "value": 27.096498664499816,
            "unit": "us/iter",
            "extra": "iterations: 25833\ncpu: 27.09307029768113 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/150",
            "value": 26.79602759174962,
            "unit": "us/iter",
            "extra": "iterations: 26131\ncpu: 26.792621522329497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/200",
            "value": 26.81928582956674,
            "unit": "us/iter",
            "extra": "iterations: 24784\ncpu: 26.815686128147508 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/2",
            "value": 1509.5018645161695,
            "unit": "us/iter",
            "extra": "iterations: 465\ncpu: 1509.3257419354609 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/5",
            "value": 482.071576527102,
            "unit": "us/iter",
            "extra": "iterations: 1457\ncpu: 482.00774605353854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/10",
            "value": 363.8869563636555,
            "unit": "us/iter",
            "extra": "iterations: 1925\ncpu: 363.8513937662301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/15",
            "value": 333.88308022922314,
            "unit": "us/iter",
            "extra": "iterations: 2094\ncpu: 333.84314899713934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/20",
            "value": 319.43622262775096,
            "unit": "us/iter",
            "extra": "iterations: 2192\ncpu: 319.41961359489954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/25",
            "value": 311.8626296791439,
            "unit": "us/iter",
            "extra": "iterations: 2244\ncpu: 311.8529251336891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/30",
            "value": 307.11293840105833,
            "unit": "us/iter",
            "extra": "iterations: 2289\ncpu: 307.1020052424725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/50",
            "value": 296.3409503882598,
            "unit": "us/iter",
            "extra": "iterations: 2318\ncpu: 296.32809275236355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/75",
            "value": 292.36637040132615,
            "unit": "us/iter",
            "extra": "iterations: 2392\ncpu: 292.35601295987243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/100",
            "value": 290.3765194536462,
            "unit": "us/iter",
            "extra": "iterations: 2416\ncpu: 290.3596891556198 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/150",
            "value": 289.5112322392987,
            "unit": "us/iter",
            "extra": "iterations: 2407\ncpu: 289.49498753634947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/200",
            "value": 291.34386374998655,
            "unit": "us/iter",
            "extra": "iterations: 2400\ncpu: 291.3244445833385 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/2",
            "value": 233.57957584270434,
            "unit": "us/iter",
            "extra": "iterations: 2848\ncpu: 233.56992591292024 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/5",
            "value": 162.1163077631812,
            "unit": "us/iter",
            "extra": "iterations: 4341\ncpu: 162.10358005068096 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/10",
            "value": 157.09380369203453,
            "unit": "us/iter",
            "extra": "iterations: 4442\ncpu: 157.08506145880193 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/15",
            "value": 155.30242993771148,
            "unit": "us/iter",
            "extra": "iterations: 4496\ncpu: 155.29332918149484 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/20",
            "value": 153.52797433083745,
            "unit": "us/iter",
            "extra": "iterations: 4558\ncpu: 153.52094405441426 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/25",
            "value": 153.32117116724405,
            "unit": "us/iter",
            "extra": "iterations: 4592\ncpu: 153.30812717769933 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/30",
            "value": 152.72887270341008,
            "unit": "us/iter",
            "extra": "iterations: 4572\ncpu: 152.71261264217057 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/50",
            "value": 153.41817519515232,
            "unit": "us/iter",
            "extra": "iterations: 4612\ncpu: 153.4118074588031 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/75",
            "value": 150.46441221699834,
            "unit": "us/iter",
            "extra": "iterations: 4682\ncpu: 150.45898825288165 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/100",
            "value": 150.42553403933024,
            "unit": "us/iter",
            "extra": "iterations: 4627\ncpu: 150.42002226064844 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/150",
            "value": 147.56933664412037,
            "unit": "us/iter",
            "extra": "iterations: 4732\ncpu: 147.56124535080153 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/200",
            "value": 148.25006630297543,
            "unit": "us/iter",
            "extra": "iterations: 4766\ncpu: 148.24024947545257 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/2",
            "value": 1131.004745627905,
            "unit": "us/iter",
            "extra": "iterations: 629\ncpu: 1130.9035373609127 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/5",
            "value": 770.2968843612291,
            "unit": "us/iter",
            "extra": "iterations: 908\ncpu: 770.222618942729 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/10",
            "value": 719.7644403292403,
            "unit": "us/iter",
            "extra": "iterations: 972\ncpu: 719.7416080246776 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/15",
            "value": 710.7935132382827,
            "unit": "us/iter",
            "extra": "iterations: 982\ncpu: 710.7614735234448 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/20",
            "value": 700.3325025075466,
            "unit": "us/iter",
            "extra": "iterations: 997\ncpu: 700.2924533600795 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/25",
            "value": 695.8912199004984,
            "unit": "us/iter",
            "extra": "iterations: 1005\ncpu: 695.8359422885588 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/30",
            "value": 693.1984568023843,
            "unit": "us/iter",
            "extra": "iterations: 1007\ncpu: 693.1687149950375 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/50",
            "value": 686.1087976308106,
            "unit": "us/iter",
            "extra": "iterations: 1013\ncpu: 686.0667601184717 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/75",
            "value": 690.5655561023933,
            "unit": "us/iter",
            "extra": "iterations: 1016\ncpu: 690.5001348425228 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/100",
            "value": 688.8669843443876,
            "unit": "us/iter",
            "extra": "iterations: 1022\ncpu: 688.7952827788658 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/150",
            "value": 685.8199186274194,
            "unit": "us/iter",
            "extra": "iterations: 1020\ncpu: 685.6961901960949 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/200",
            "value": 686.3115691855122,
            "unit": "us/iter",
            "extra": "iterations: 1019\ncpu: 686.2028400392509 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/2",
            "value": 2195.3255235108772,
            "unit": "us/iter",
            "extra": "iterations: 319\ncpu: 2195.245200626957 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/5",
            "value": 1667.4930738095857,
            "unit": "us/iter",
            "extra": "iterations: 420\ncpu: 1667.313323809508 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/10",
            "value": 1537.9754547460589,
            "unit": "us/iter",
            "extra": "iterations: 453\ncpu: 1537.9102538631832 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/15",
            "value": 1500.4903218884033,
            "unit": "us/iter",
            "extra": "iterations: 466\ncpu: 1500.408626609459 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/20",
            "value": 1485.9825285412792,
            "unit": "us/iter",
            "extra": "iterations: 473\ncpu: 1485.8669894291477 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/25",
            "value": 1466.8701823899291,
            "unit": "us/iter",
            "extra": "iterations: 477\ncpu: 1466.6685408804726 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/30",
            "value": 1463.1002489539994,
            "unit": "us/iter",
            "extra": "iterations: 478\ncpu: 1462.9710104602852 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/50",
            "value": 1449.7975829875613,
            "unit": "us/iter",
            "extra": "iterations: 482\ncpu: 1449.6801721991944 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/75",
            "value": 1445.4481375769908,
            "unit": "us/iter",
            "extra": "iterations: 487\ncpu: 1445.3505010267093 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/100",
            "value": 1441.6666584361758,
            "unit": "us/iter",
            "extra": "iterations: 486\ncpu: 1441.5584753086807 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/150",
            "value": 1438.029964875988,
            "unit": "us/iter",
            "extra": "iterations: 484\ncpu: 1437.9572747933923 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/200",
            "value": 1440.0945667350964,
            "unit": "us/iter",
            "extra": "iterations: 487\ncpu: 1439.9117268993618 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/2",
            "value": 10725.306630768746,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 10724.539861538373 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/5",
            "value": 9527.630890410712,
            "unit": "us/iter",
            "extra": "iterations: 73\ncpu: 9526.828671232735 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/10",
            "value": 8942.618797468323,
            "unit": "us/iter",
            "extra": "iterations: 79\ncpu: 8942.29639240507 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/15",
            "value": 8876.471712500233,
            "unit": "us/iter",
            "extra": "iterations: 80\ncpu: 8875.94861249994 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/20",
            "value": 8625.608061728835,
            "unit": "us/iter",
            "extra": "iterations: 81\ncpu: 8625.340567900988 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/25",
            "value": 8610.283317072637,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8609.189804878024 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/30",
            "value": 8540.412939024192,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8539.625597561053 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/50",
            "value": 8477.754585365945,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8477.009902439197 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/75",
            "value": 8396.939595238267,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8395.458678571511 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/100",
            "value": 8376.088915663084,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8375.289891566206 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/150",
            "value": 8382.63972289165,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8381.460024096496 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/200",
            "value": 8348.97133333289,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8348.333380952443 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/2",
            "value": 48.91848290329207,
            "unit": "us/iter",
            "extra": "iterations: 14301\ncpu: 48.913990769876285 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/5",
            "value": 17.787288018257904,
            "unit": "us/iter",
            "extra": "iterations: 39435\ncpu: 17.78547280334674 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/10",
            "value": 14.742074426424947,
            "unit": "us/iter",
            "extra": "iterations: 46986\ncpu: 14.741476801600687 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/15",
            "value": 13.89163954745536,
            "unit": "us/iter",
            "extra": "iterations: 51796\ncpu: 13.89111101243352 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/20",
            "value": 12.847922340055382,
            "unit": "us/iter",
            "extra": "iterations: 54597\ncpu: 12.846704361045632 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/25",
            "value": 12.855046601870313,
            "unit": "us/iter",
            "extra": "iterations: 54633\ncpu: 12.854126443724285 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/30",
            "value": 12.451513028156773,
            "unit": "us/iter",
            "extra": "iterations: 56186\ncpu: 12.450789324742543 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/50",
            "value": 12.412354252479975,
            "unit": "us/iter",
            "extra": "iterations: 56567\ncpu: 12.411227358707388 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/75",
            "value": 12.183530227379812,
            "unit": "us/iter",
            "extra": "iterations: 57481\ncpu: 12.1830591151863 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/100",
            "value": 12.170081270020596,
            "unit": "us/iter",
            "extra": "iterations: 56503\ncpu: 12.169641187193319 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/150",
            "value": 12.007808197366241,
            "unit": "us/iter",
            "extra": "iterations: 58409\ncpu: 12.006184166823296 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/200",
            "value": 11.853097572140005,
            "unit": "us/iter",
            "extra": "iterations: 58982\ncpu: 11.852174663456797 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/2",
            "value": 225.74196823869536,
            "unit": "us/iter",
            "extra": "iterations: 3117\ncpu: 225.71557811998494 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/5",
            "value": 73.2309885653734,
            "unit": "us/iter",
            "extra": "iterations: 9445\ncpu: 73.22330344097328 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/10",
            "value": 55.35264432621057,
            "unit": "us/iter",
            "extra": "iterations: 12593\ncpu: 55.35099865004391 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/15",
            "value": 51.236409912878415,
            "unit": "us/iter",
            "extra": "iterations: 13659\ncpu: 51.23448356394973 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/20",
            "value": 48.67927840434501,
            "unit": "us/iter",
            "extra": "iterations: 14364\ncpu: 48.67641917293254 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/25",
            "value": 47.15277487545274,
            "unit": "us/iter",
            "extra": "iterations: 14854\ncpu: 47.145897468694535 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/30",
            "value": 46.40708108646707,
            "unit": "us/iter",
            "extra": "iterations: 15058\ncpu: 46.39925494753606 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/50",
            "value": 44.978847753531085,
            "unit": "us/iter",
            "extra": "iterations: 15580\ncpu: 44.97522490372215 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/75",
            "value": 44.08862231787628,
            "unit": "us/iter",
            "extra": "iterations: 15333\ncpu: 44.08502132655133 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/100",
            "value": 43.7937289994985,
            "unit": "us/iter",
            "extra": "iterations: 15952\ncpu: 43.79012387161388 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/150",
            "value": 43.77671484814611,
            "unit": "us/iter",
            "extra": "iterations: 16002\ncpu: 43.77227840269883 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/200",
            "value": 43.52962599962907,
            "unit": "us/iter",
            "extra": "iterations: 16131\ncpu: 43.52576504866344 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/2",
            "value": 452.2619666238633,
            "unit": "us/iter",
            "extra": "iterations: 1558\ncpu: 452.21418934532244 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/5",
            "value": 145.52499396210217,
            "unit": "us/iter",
            "extra": "iterations: 4803\ncpu: 145.5085148865271 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/10",
            "value": 108.85232378268284,
            "unit": "us/iter",
            "extra": "iterations: 6387\ncpu: 108.83640144042488 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/15",
            "value": 98.85961523272361,
            "unit": "us/iter",
            "extra": "iterations: 7090\ncpu: 98.84590789844779 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/20",
            "value": 93.6998963521381,
            "unit": "us/iter",
            "extra": "iterations: 7429\ncpu: 93.69385031632766 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/25",
            "value": 91.85258012568559,
            "unit": "us/iter",
            "extra": "iterations: 7638\ncpu: 91.84802932704883 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/30",
            "value": 89.72334845387279,
            "unit": "us/iter",
            "extra": "iterations: 7826\ncpu: 89.71208497316704 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/50",
            "value": 86.86561738807013,
            "unit": "us/iter",
            "extra": "iterations: 8063\ncpu: 86.85484100210887 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/75",
            "value": 84.79232325440483,
            "unit": "us/iter",
            "extra": "iterations: 8235\ncpu: 84.7790636308451 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/100",
            "value": 84.14959453247529,
            "unit": "us/iter",
            "extra": "iterations: 8267\ncpu: 84.14579073424376 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/150",
            "value": 83.50332867716965,
            "unit": "us/iter",
            "extra": "iterations: 8376\ncpu: 83.49803068290306 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/200",
            "value": 83.72599916438246,
            "unit": "us/iter",
            "extra": "iterations: 8377\ncpu: 83.720008475588 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/2",
            "value": 2318.6829667773045,
            "unit": "us/iter",
            "extra": "iterations: 301\ncpu: 2318.471491694337 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/5",
            "value": 751.3731830834977,
            "unit": "us/iter",
            "extra": "iterations: 934\ncpu: 751.293791220577 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/10",
            "value": 549.985683713623,
            "unit": "us/iter",
            "extra": "iterations: 1271\ncpu: 549.9178867034148 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/15",
            "value": 489.6064236933967,
            "unit": "us/iter",
            "extra": "iterations: 1435\ncpu: 489.5437547038486 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/20",
            "value": 463.7839854400792,
            "unit": "us/iter",
            "extra": "iterations: 1511\ncpu: 463.7667140966432 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/25",
            "value": 449.669893617009,
            "unit": "us/iter",
            "extra": "iterations: 1551\ncpu: 449.6296789168209 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/30",
            "value": 439.08580703960104,
            "unit": "us/iter",
            "extra": "iterations: 1591\ncpu: 439.03932369578905 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/50",
            "value": 422.08499638118445,
            "unit": "us/iter",
            "extra": "iterations: 1658\ncpu: 422.0571067551249 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/75",
            "value": 414.5722885866651,
            "unit": "us/iter",
            "extra": "iterations: 1691\ncpu: 414.5234849201514 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/100",
            "value": 408.3556592765687,
            "unit": "us/iter",
            "extra": "iterations: 1714\ncpu: 408.3455443407279 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/150",
            "value": 405.8043517441912,
            "unit": "us/iter",
            "extra": "iterations: 1720\ncpu: 405.7716226744298 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/200",
            "value": 405.4326150724697,
            "unit": "us/iter",
            "extra": "iterations: 1725\ncpu: 405.3861721739112 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5446cedfe7c738ba2b036b09cfec6ff4ae5f7b2c",
          "message": "Add FASTA/FASTQ sequence reader (#297)\n\n* Add FASTA/FASTQ sequence reader using htslib kseq\n\nIntroduces sequence_reader for streaming FASTA and FASTQ files\n(including gzip-compressed) via htslib's kseq.h parser. Adds FASTA/FASTQ\nto the filetype detector and includes a full test suite.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix copyright headers, add trailing newlines, update CHANGELOG\n\nFix copyright to use Schäfer (with umlaut) matching all other files.\nAdd missing trailing newlines to source and test data files.\nAdd CHANGELOG entry under [Unreleased].\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Throw on non-EOF kseq errors, use brace init in EXPECT_THROW\n\nNon-EOF kseq_read failures (-2 truncated quality, -3 I/O error) now\nthrow std::runtime_error matching the bam_reader pattern, preventing\nsilent data loss. Use brace initialization in EXPECT_THROW per project\nguidelines.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-02T21:13:50-05:00",
          "tree_id": "16c9eee0f268b38a5a146364798966a654b752a8",
          "url": "https://github.com/genogrove/genogrove/commit/5446cedfe7c738ba2b036b09cfec6ff4ae5f7b2c"
        },
        "date": 1775182919348,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.93475934375188,
            "unit": "us/iter",
            "extra": "iterations: 20602\ncpu: 33.924202990000964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.660397794489348,
            "unit": "us/iter",
            "extra": "iterations: 90954\ncpu: 7.659950403500671 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.153740356686113,
            "unit": "us/iter",
            "extra": "iterations: 135301\ncpu: 5.152472893770187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.340985600911217,
            "unit": "us/iter",
            "extra": "iterations: 161538\ncpu: 4.340625660835222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.963493870656109,
            "unit": "us/iter",
            "extra": "iterations: 172857\ncpu: 3.963309874636258 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8664385278901823,
            "unit": "us/iter",
            "extra": "iterations: 181318\ncpu: 3.866254183258144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.664534776405712,
            "unit": "us/iter",
            "extra": "iterations: 191351\ncpu: 3.664167012453554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/50",
            "value": 3.430854105173524,
            "unit": "us/iter",
            "extra": "iterations: 204291\ncpu: 3.4305426866577546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/75",
            "value": 3.2374227683280354,
            "unit": "us/iter",
            "extra": "iterations: 216116\ncpu: 3.236869463621388 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/100",
            "value": 3.1747068808343597,
            "unit": "us/iter",
            "extra": "iterations: 219392\ncpu: 3.1745321069136496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/150",
            "value": 3.0103617574619186,
            "unit": "us/iter",
            "extra": "iterations: 232244\ncpu: 3.009958651246106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/200",
            "value": 3.010478472793356,
            "unit": "us/iter",
            "extra": "iterations: 233472\ncpu: 3.010312452885138 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 278.6559524375705,
            "unit": "us/iter",
            "extra": "iterations: 2523\ncpu: 278.6100281411023 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.217715592926275,
            "unit": "us/iter",
            "extra": "iterations: 16174\ncpu: 43.214472177569014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.114854832415602,
            "unit": "us/iter",
            "extra": "iterations: 23063\ncpu: 30.110761999739836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.36987883823369,
            "unit": "us/iter",
            "extra": "iterations: 27682\ncpu: 25.36845553066977 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.874301395686192,
            "unit": "us/iter",
            "extra": "iterations: 27585\ncpu: 25.871108428493717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.912925227963274,
            "unit": "us/iter",
            "extra": "iterations: 27965\ncpu: 24.91124323261226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.549668832303425,
            "unit": "us/iter",
            "extra": "iterations: 28629\ncpu: 24.546622271123667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/50",
            "value": 21.82359683955933,
            "unit": "us/iter",
            "extra": "iterations: 31831\ncpu: 21.82235641355912 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/75",
            "value": 21.687139299465695,
            "unit": "us/iter",
            "extra": "iterations: 32204\ncpu: 21.683983604521206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/100",
            "value": 20.402706096293368,
            "unit": "us/iter",
            "extra": "iterations: 34644\ncpu: 20.40154745410457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/150",
            "value": 20.165595990191527,
            "unit": "us/iter",
            "extra": "iterations: 34665\ncpu: 20.16244384826185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/200",
            "value": 20.175750701563008,
            "unit": "us/iter",
            "extra": "iterations: 34922\ncpu: 20.17372309718804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 640.206837442929,
            "unit": "us/iter",
            "extra": "iterations: 1095\ncpu: 640.163320547946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.64074020797175,
            "unit": "us/iter",
            "extra": "iterations: 5770\ncpu: 120.62670606585803 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.8342017507739,
            "unit": "us/iter",
            "extra": "iterations: 9710\ncpu: 70.82973295571558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.56347349513751,
            "unit": "us/iter",
            "extra": "iterations: 11413\ncpu: 61.55749750284789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.547109285272505,
            "unit": "us/iter",
            "extra": "iterations: 11319\ncpu: 62.54394495980201 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.58152745838478,
            "unit": "us/iter",
            "extra": "iterations: 11654\ncpu: 58.57694448258099 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.04447699779436,
            "unit": "us/iter",
            "extra": "iterations: 11325\ncpu: 61.038086181015565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/50",
            "value": 57.367305347244134,
            "unit": "us/iter",
            "extra": "iterations: 12268\ncpu: 57.361952722530205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/75",
            "value": 57.81049749028425,
            "unit": "us/iter",
            "extra": "iterations: 12352\ncpu: 57.803356136658074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/100",
            "value": 51.69586235538451,
            "unit": "us/iter",
            "extra": "iterations: 13484\ncpu: 51.693697270839365 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/150",
            "value": 50.447597225248145,
            "unit": "us/iter",
            "extra": "iterations: 13767\ncpu: 50.4432379603399 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/200",
            "value": 47.08864892521064,
            "unit": "us/iter",
            "extra": "iterations: 14561\ncpu: 47.08661602911873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3712.780406417058,
            "unit": "us/iter",
            "extra": "iterations: 187\ncpu: 3712.40398930481 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.3724097938064,
            "unit": "us/iter",
            "extra": "iterations: 776\ncpu: 900.3142512886607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 630.962814432985,
            "unit": "us/iter",
            "extra": "iterations: 873\ncpu: 630.9190630011467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 509.5644314868755,
            "unit": "us/iter",
            "extra": "iterations: 1372\ncpu: 509.5132806122466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 488.0526696864088,
            "unit": "us/iter",
            "extra": "iterations: 1435\ncpu: 488.01352543553725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 462.0481597359825,
            "unit": "us/iter",
            "extra": "iterations: 1515\ncpu: 462.0230270627087 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.46937065636047,
            "unit": "us/iter",
            "extra": "iterations: 1554\ncpu: 450.44139317889324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/50",
            "value": 448.80219245525143,
            "unit": "us/iter",
            "extra": "iterations: 1564\ncpu: 448.7925294117664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/75",
            "value": 477.7808329938799,
            "unit": "us/iter",
            "extra": "iterations: 1473\ncpu: 477.72767141887084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/100",
            "value": 492.2504449999922,
            "unit": "us/iter",
            "extra": "iterations: 1400\ncpu: 492.22358428571465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/150",
            "value": 470.75650873655223,
            "unit": "us/iter",
            "extra": "iterations: 1488\ncpu: 470.71347311828123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/200",
            "value": 470.5935573988069,
            "unit": "us/iter",
            "extra": "iterations: 1507\ncpu: 470.58424618447197 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.595707126503566,
            "unit": "us/iter",
            "extra": "iterations: 27517\ncpu: 25.59371853763118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.037568792455901,
            "unit": "us/iter",
            "extra": "iterations: 115267\ncpu: 6.037288399975688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.6906769893478515,
            "unit": "us/iter",
            "extra": "iterations: 149735\ncpu: 4.690369679767578 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.091482889800655,
            "unit": "us/iter",
            "extra": "iterations: 170600\ncpu: 4.09134427901524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.890983567045235,
            "unit": "us/iter",
            "extra": "iterations: 180065\ncpu: 3.8908289228889474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8429582986466126,
            "unit": "us/iter",
            "extra": "iterations: 181385\ncpu: 3.8427181078920687 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6942171675251956,
            "unit": "us/iter",
            "extra": "iterations: 191571\ncpu: 3.6941254365222123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/50",
            "value": 3.716482276034893,
            "unit": "us/iter",
            "extra": "iterations: 187853\ncpu: 3.7162746935103503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/75",
            "value": 3.67002961549386,
            "unit": "us/iter",
            "extra": "iterations: 193885\ncpu: 3.6699628645846802 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/100",
            "value": 3.7458114968272342,
            "unit": "us/iter",
            "extra": "iterations: 190209\ncpu: 3.745335546688132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/150",
            "value": 3.686802855261608,
            "unit": "us/iter",
            "extra": "iterations: 200472\ncpu: 3.686612429665977 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/200",
            "value": 3.6659423754240303,
            "unit": "us/iter",
            "extra": "iterations: 201303\ncpu: 3.6656333288624694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 150.04801695279096,
            "unit": "us/iter",
            "extra": "iterations: 4660\ncpu: 150.04600515021332 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.600268649307047,
            "unit": "us/iter",
            "extra": "iterations: 22159\ncpu: 31.595829865968817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.446367008628645,
            "unit": "us/iter",
            "extra": "iterations: 29438\ncpu: 23.445959643997497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.701641376047156,
            "unit": "us/iter",
            "extra": "iterations: 33807\ncpu: 20.700124323364978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.552983178552022,
            "unit": "us/iter",
            "extra": "iterations: 34242\ncpu: 20.552722913381473 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.313576336403052,
            "unit": "us/iter",
            "extra": "iterations: 36385\ncpu: 19.311810993541208 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.917611097642922,
            "unit": "us/iter",
            "extra": "iterations: 37125\ncpu: 18.91697341414111 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/50",
            "value": 18.18298023038655,
            "unit": "us/iter",
            "extra": "iterations: 38544\ncpu: 18.18155531340808 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/75",
            "value": 18.279807298468953,
            "unit": "us/iter",
            "extra": "iterations: 38282\ncpu: 18.27829517789054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/100",
            "value": 18.222533505491434,
            "unit": "us/iter",
            "extra": "iterations: 38337\ncpu: 18.221879541956504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/150",
            "value": 18.56438223189831,
            "unit": "us/iter",
            "extra": "iterations: 37663\ncpu: 18.563154634521972 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/200",
            "value": 18.425419548833123,
            "unit": "us/iter",
            "extra": "iterations: 38079\ncpu: 18.424881877149932 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 345.4249547244309,
            "unit": "us/iter",
            "extra": "iterations: 2032\ncpu: 345.40180807087114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.37135424174703,
            "unit": "us/iter",
            "extra": "iterations: 10267\ncpu: 67.36830232784682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.29729114785265,
            "unit": "us/iter",
            "extra": "iterations: 14697\ncpu: 48.294262638634386 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.99983958633903,
            "unit": "us/iter",
            "extra": "iterations: 16632\ncpu: 41.99703114478105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.5068460946297,
            "unit": "us/iter",
            "extra": "iterations: 16887\ncpu: 41.503367560845035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.74550134339367,
            "unit": "us/iter",
            "extra": "iterations: 17493\ncpu: 39.74186937632241 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.45863112138354,
            "unit": "us/iter",
            "extra": "iterations: 18174\ncpu: 38.45756019588396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/50",
            "value": 37.06450111394142,
            "unit": "us/iter",
            "extra": "iterations: 18852\ncpu: 37.06232930193047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/75",
            "value": 36.917406973059926,
            "unit": "us/iter",
            "extra": "iterations: 18930\ncpu: 36.916847754886106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/100",
            "value": 36.72129087472559,
            "unit": "us/iter",
            "extra": "iterations: 19046\ncpu: 36.71905486716367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/150",
            "value": 37.03434500186215,
            "unit": "us/iter",
            "extra": "iterations: 18797\ncpu: 37.03249311060277 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/200",
            "value": 37.46163346035889,
            "unit": "us/iter",
            "extra": "iterations: 18631\ncpu: 37.45903982609582 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1864.0359071618263,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1863.8193766578368 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 411.50643867925504,
            "unit": "us/iter",
            "extra": "iterations: 1696\ncpu: 411.4930347877321 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.01408587480233,
            "unit": "us/iter",
            "extra": "iterations: 2492\ncpu: 277.9935802568218 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 236.46362656301466,
            "unit": "us/iter",
            "extra": "iterations: 2959\ncpu: 236.45609361270664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.82559746176642,
            "unit": "us/iter",
            "extra": "iterations: 3073\ncpu: 226.81354344289156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.50551182069867,
            "unit": "us/iter",
            "extra": "iterations: 3257\ncpu: 215.4809453484801 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.46868582376757,
            "unit": "us/iter",
            "extra": "iterations: 3393\ncpu: 206.45264132036687 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/50",
            "value": 196.68788497320853,
            "unit": "us/iter",
            "extra": "iterations: 3547\ncpu: 196.66273470538297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/75",
            "value": 187.4051255776148,
            "unit": "us/iter",
            "extra": "iterations: 3679\ncpu: 187.39027181299357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/100",
            "value": 185.33445671167948,
            "unit": "us/iter",
            "extra": "iterations: 3777\ncpu: 185.30571167593067 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/150",
            "value": 188.28218956708557,
            "unit": "us/iter",
            "extra": "iterations: 3719\ncpu: 188.2709938155445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/200",
            "value": 188.46079477512242,
            "unit": "us/iter",
            "extra": "iterations: 3713\ncpu: 188.42449528683136 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/2",
            "value": 15.226130269860102,
            "unit": "us/iter",
            "extra": "iterations: 46135\ncpu: 15.225698211769929 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/5",
            "value": 3.2149642875275934,
            "unit": "us/iter",
            "extra": "iterations: 216675\ncpu: 3.2146531118034147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/10",
            "value": 2.314473561328148,
            "unit": "us/iter",
            "extra": "iterations: 302814\ncpu: 2.3143327157925193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/15",
            "value": 1.974563148536571,
            "unit": "us/iter",
            "extra": "iterations: 356572\ncpu: 1.9743064233871623 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/20",
            "value": 1.7866340283637587,
            "unit": "us/iter",
            "extra": "iterations: 388664\ncpu: 1.7865515226519773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/25",
            "value": 1.8381969600896184,
            "unit": "us/iter",
            "extra": "iterations: 380077\ncpu: 1.8380694780268345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/30",
            "value": 1.5933224471552279,
            "unit": "us/iter",
            "extra": "iterations: 440773\ncpu: 1.5931368504876584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/50",
            "value": 1.5434639396204484,
            "unit": "us/iter",
            "extra": "iterations: 453531\ncpu: 1.5434070195863145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/75",
            "value": 1.460401812544016,
            "unit": "us/iter",
            "extra": "iterations: 479547\ncpu: 1.4602916273065978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/100",
            "value": 1.4797507656732651,
            "unit": "us/iter",
            "extra": "iterations: 473113\ncpu: 1.4797261436485636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/150",
            "value": 1.3285586894144708,
            "unit": "us/iter",
            "extra": "iterations: 527642\ncpu: 1.328434413863948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/200",
            "value": 1.3273443948394308,
            "unit": "us/iter",
            "extra": "iterations: 528620\ncpu: 1.3273254700919415 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/2",
            "value": 131.97591735848954,
            "unit": "us/iter",
            "extra": "iterations: 5300\ncpu: 131.9675175471689 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/5",
            "value": 26.014143588779593,
            "unit": "us/iter",
            "extra": "iterations: 26555\ncpu: 26.01229806062922 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/10",
            "value": 14.344415573354393,
            "unit": "us/iter",
            "extra": "iterations: 49315\ncpu: 14.343796167494585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/15",
            "value": 11.566516076213235,
            "unit": "us/iter",
            "extra": "iterations: 60462\ncpu: 11.56527536303807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/20",
            "value": 9.84599196350323,
            "unit": "us/iter",
            "extra": "iterations: 70802\ncpu: 9.845971243750295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/25",
            "value": 9.031861352538112,
            "unit": "us/iter",
            "extra": "iterations: 77203\ncpu: 9.030690387679261 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/30",
            "value": 8.564489338953619,
            "unit": "us/iter",
            "extra": "iterations: 81371\ncpu: 8.564138857824013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/50",
            "value": 7.7426598134087525,
            "unit": "us/iter",
            "extra": "iterations: 92073\ncpu: 7.7422339665264595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/75",
            "value": 7.3765213455007,
            "unit": "us/iter",
            "extra": "iterations: 97421\ncpu: 7.375733907473716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/100",
            "value": 6.988974683544313,
            "unit": "us/iter",
            "extra": "iterations: 102305\ncpu: 6.988875333561394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/150",
            "value": 6.97158953519155,
            "unit": "us/iter",
            "extra": "iterations: 101999\ncpu: 6.970971293836222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/200",
            "value": 6.777158784347639,
            "unit": "us/iter",
            "extra": "iterations: 101937\ncpu: 6.777033785573373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/2",
            "value": 255.68013450291286,
            "unit": "us/iter",
            "extra": "iterations: 2736\ncpu: 255.66458881578933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/5",
            "value": 51.40222924320362,
            "unit": "us/iter",
            "extra": "iterations: 13610\ncpu: 51.39808295371027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/10",
            "value": 27.2983508382943,
            "unit": "us/iter",
            "extra": "iterations: 25707\ncpu: 27.297443770179306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/15",
            "value": 22.095719393384307,
            "unit": "us/iter",
            "extra": "iterations: 31717\ncpu: 22.094370243087305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/20",
            "value": 18.95420926521909,
            "unit": "us/iter",
            "extra": "iterations: 36977\ncpu: 18.952813884306376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/25",
            "value": 17.737166295319863,
            "unit": "us/iter",
            "extra": "iterations: 39496\ncpu: 17.73418941158613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/30",
            "value": 16.73589390967355,
            "unit": "us/iter",
            "extra": "iterations: 41804\ncpu: 16.72248481006612 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/50",
            "value": 14.73965769644787,
            "unit": "us/iter",
            "extra": "iterations: 47379\ncpu: 14.737285590662498 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/75",
            "value": 14.066130435647226,
            "unit": "us/iter",
            "extra": "iterations: 50247\ncpu: 14.064831731247546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/100",
            "value": 13.669554097143068,
            "unit": "us/iter",
            "extra": "iterations: 51121\ncpu: 13.668782320376964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/150",
            "value": 13.374775618509814,
            "unit": "us/iter",
            "extra": "iterations: 52384\ncpu: 13.373807097586813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/200",
            "value": 13.49366429727182,
            "unit": "us/iter",
            "extra": "iterations: 51912\ncpu: 13.49140127523494 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/2",
            "value": 1241.3359733096154,
            "unit": "us/iter",
            "extra": "iterations: 562\ncpu: 1241.151914590741 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/5",
            "value": 251.88796278902038,
            "unit": "us/iter",
            "extra": "iterations: 2768\ncpu: 251.8706885838122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/10",
            "value": 134.3256333077217,
            "unit": "us/iter",
            "extra": "iterations: 5206\ncpu: 134.29885535919755 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/15",
            "value": 108.52379402199469,
            "unit": "us/iter",
            "extra": "iterations: 6457\ncpu: 108.51947901502173 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/20",
            "value": 94.68125479266241,
            "unit": "us/iter",
            "extra": "iterations: 7355\ncpu: 94.67549259007333 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/25",
            "value": 88.25236768625771,
            "unit": "us/iter",
            "extra": "iterations: 7879\ncpu: 88.2440474679533 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/30",
            "value": 83.98209162679943,
            "unit": "us/iter",
            "extra": "iterations: 8360\ncpu: 83.97525131578752 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/50",
            "value": 75.64126236929981,
            "unit": "us/iter",
            "extra": "iterations: 9277\ncpu: 75.62515619273532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/75",
            "value": 70.66116461071573,
            "unit": "us/iter",
            "extra": "iterations: 9890\ncpu: 70.65802184024126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/100",
            "value": 68.5181397131058,
            "unit": "us/iter",
            "extra": "iterations: 10178\ncpu: 68.51548997838347 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/150",
            "value": 68.25639996101661,
            "unit": "us/iter",
            "extra": "iterations: 10261\ncpu: 68.24624139947407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/200",
            "value": 66.61165875201729,
            "unit": "us/iter",
            "extra": "iterations: 10529\ncpu: 66.60578611454083 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/2",
            "value": 29.00087974002294,
            "unit": "us/iter",
            "extra": "iterations: 24156\ncpu: 28.995521857923954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/5",
            "value": 5.71812569843825,
            "unit": "us/iter",
            "extra": "iterations: 122237\ncpu: 5.717884912096891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/10",
            "value": 3.7822575200136943,
            "unit": "us/iter",
            "extra": "iterations: 185372\ncpu: 3.7817608646397476 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/15",
            "value": 3.2046091888798776,
            "unit": "us/iter",
            "extra": "iterations: 218525\ncpu: 3.204232687335511 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/20",
            "value": 2.785807608175309,
            "unit": "us/iter",
            "extra": "iterations: 252807\ncpu: 2.7853853730315317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/25",
            "value": 2.998356991109768,
            "unit": "us/iter",
            "extra": "iterations: 234412\ncpu: 2.9980742410797903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/30",
            "value": 2.574431160767898,
            "unit": "us/iter",
            "extra": "iterations: 271553\ncpu: 2.573963734519574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/50",
            "value": 2.6131538025138394,
            "unit": "us/iter",
            "extra": "iterations: 274976\ncpu: 2.612922760531805 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/75",
            "value": 2.4566954293725347,
            "unit": "us/iter",
            "extra": "iterations: 285300\ncpu: 2.4564054504030572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/100",
            "value": 2.4808752168464236,
            "unit": "us/iter",
            "extra": "iterations: 282458\ncpu: 2.480869732845299 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/150",
            "value": 2.1742129573544067,
            "unit": "us/iter",
            "extra": "iterations: 321933\ncpu: 2.174024390168157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/200",
            "value": 2.157157792354495,
            "unit": "us/iter",
            "extra": "iterations: 323349\ncpu: 2.1570372291240107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/2",
            "value": 136.94192207791593,
            "unit": "us/iter",
            "extra": "iterations: 5082\ncpu: 136.92785478158507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/5",
            "value": 31.494666110785936,
            "unit": "us/iter",
            "extra": "iterations: 22187\ncpu: 31.494180330823898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/10",
            "value": 20.265546446502405,
            "unit": "us/iter",
            "extra": "iterations: 34459\ncpu: 20.26277764879996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/15",
            "value": 17.39929760397261,
            "unit": "us/iter",
            "extra": "iterations: 40275\ncpu: 17.399026021105467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/20",
            "value": 16.031279254036235,
            "unit": "us/iter",
            "extra": "iterations: 43541\ncpu: 16.030224937415195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/25",
            "value": 15.053205206212311,
            "unit": "us/iter",
            "extra": "iterations: 46675\ncpu: 15.05131869309059 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/30",
            "value": 14.464941750785341,
            "unit": "us/iter",
            "extra": "iterations: 48344\ncpu: 14.464743773787903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/50",
            "value": 13.653023124206976,
            "unit": "us/iter",
            "extra": "iterations: 51245\ncpu: 13.651891443067656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/75",
            "value": 13.527679693849118,
            "unit": "us/iter",
            "extra": "iterations: 52915\ncpu: 13.527647680242024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/100",
            "value": 12.895062233777763,
            "unit": "us/iter",
            "extra": "iterations: 54231\ncpu: 12.89367809924222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/150",
            "value": 13.066968973389248,
            "unit": "us/iter",
            "extra": "iterations: 53438\ncpu: 13.066098656386421 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/200",
            "value": 12.947768325606976,
            "unit": "us/iter",
            "extra": "iterations: 53709\ncpu: 12.946987897744915 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/2",
            "value": 271.10316289945,
            "unit": "us/iter",
            "extra": "iterations: 2566\ncpu: 271.0809267342194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/5",
            "value": 65.05445634737754,
            "unit": "us/iter",
            "extra": "iterations: 10847\ncpu: 65.05146888540528 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/10",
            "value": 40.97608423705902,
            "unit": "us/iter",
            "extra": "iterations: 17059\ncpu: 40.972821384607165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/15",
            "value": 35.57024956530664,
            "unit": "us/iter",
            "extra": "iterations: 19554\ncpu: 35.56708683645388 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/20",
            "value": 32.49809251019508,
            "unit": "us/iter",
            "extra": "iterations: 21576\ncpu: 32.49668622543545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/25",
            "value": 31.833542432274278,
            "unit": "us/iter",
            "extra": "iterations: 22259\ncpu: 31.831355945909458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/30",
            "value": 30.47977310558111,
            "unit": "us/iter",
            "extra": "iterations: 22949\ncpu: 30.47934075558872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/50",
            "value": 28.515335078321588,
            "unit": "us/iter",
            "extra": "iterations: 24642\ncpu: 28.512297784270768 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/75",
            "value": 27.538041852324476,
            "unit": "us/iter",
            "extra": "iterations: 25136\ncpu: 27.535786760025992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/100",
            "value": 27.204542334630318,
            "unit": "us/iter",
            "extra": "iterations: 25700\ncpu: 27.202636887159713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/150",
            "value": 27.042186439367338,
            "unit": "us/iter",
            "extra": "iterations: 25869\ncpu: 27.0413974254905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/200",
            "value": 27.000874198532557,
            "unit": "us/iter",
            "extra": "iterations: 25890\ncpu: 26.99960220162215 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/2",
            "value": 1492.1754522293136,
            "unit": "us/iter",
            "extra": "iterations: 471\ncpu: 1492.1445944798406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/5",
            "value": 478.85964246574207,
            "unit": "us/iter",
            "extra": "iterations: 1460\ncpu: 478.7962773972694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/10",
            "value": 362.22973605372067,
            "unit": "us/iter",
            "extra": "iterations: 1936\ncpu: 362.20330578511704 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/15",
            "value": 331.95062648315525,
            "unit": "us/iter",
            "extra": "iterations: 2107\ncpu: 331.9255287138207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/20",
            "value": 318.1670491579255,
            "unit": "us/iter",
            "extra": "iterations: 2197\ncpu: 318.1586681838864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/25",
            "value": 309.94580851061994,
            "unit": "us/iter",
            "extra": "iterations: 2256\ncpu: 309.9010115248301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/30",
            "value": 305.1849341761156,
            "unit": "us/iter",
            "extra": "iterations: 2294\ncpu: 305.1548997384465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/50",
            "value": 295.303713682426,
            "unit": "us/iter",
            "extra": "iterations: 2368\ncpu: 295.2606068412183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/75",
            "value": 289.85753744310045,
            "unit": "us/iter",
            "extra": "iterations: 2417\ncpu: 289.84402689283814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/100",
            "value": 288.6075695473262,
            "unit": "us/iter",
            "extra": "iterations: 2430\ncpu: 288.5585580246812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/150",
            "value": 289.3499162541413,
            "unit": "us/iter",
            "extra": "iterations: 2424\ncpu: 289.32743069306997 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/200",
            "value": 287.2708702945913,
            "unit": "us/iter",
            "extra": "iterations: 2444\ncpu: 287.2284230769254 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/2",
            "value": 220.0026318267412,
            "unit": "us/iter",
            "extra": "iterations: 3186\ncpu: 219.97840960451754 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/5",
            "value": 157.05434402332003,
            "unit": "us/iter",
            "extra": "iterations: 4459\ncpu: 157.02698430141388 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/10",
            "value": 153.11905899059994,
            "unit": "us/iter",
            "extra": "iterations: 4577\ncpu: 153.10160541839923 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/15",
            "value": 151.78470404172285,
            "unit": "us/iter",
            "extra": "iterations: 4602\ncpu: 151.76920512820453 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/20",
            "value": 150.13758473118756,
            "unit": "us/iter",
            "extra": "iterations: 4650\ncpu: 150.12714838709604 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/25",
            "value": 149.02086699297354,
            "unit": "us/iter",
            "extra": "iterations: 4699\ncpu: 149.00906788678734 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/30",
            "value": 149.36440000000215,
            "unit": "us/iter",
            "extra": "iterations: 4680\ncpu: 149.32808269230424 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/50",
            "value": 148.15169349386295,
            "unit": "us/iter",
            "extra": "iterations: 4734\ncpu: 148.15135107731484 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/75",
            "value": 146.82281558496265,
            "unit": "us/iter",
            "extra": "iterations: 4761\ncpu: 146.8104343625275 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/100",
            "value": 147.12695950482146,
            "unit": "us/iter",
            "extra": "iterations: 4766\ncpu: 147.123268778852 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/150",
            "value": 144.43622674659406,
            "unit": "us/iter",
            "extra": "iterations: 4838\ncpu: 144.4215905332805 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/200",
            "value": 145.36964969872852,
            "unit": "us/iter",
            "extra": "iterations: 4813\ncpu: 145.36329586536556 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/2",
            "value": 1071.515036697286,
            "unit": "us/iter",
            "extra": "iterations: 654\ncpu: 1071.465527522968 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/5",
            "value": 750.5074490889101,
            "unit": "us/iter",
            "extra": "iterations: 933\ncpu: 750.4352207931418 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/10",
            "value": 702.776461693531,
            "unit": "us/iter",
            "extra": "iterations: 992\ncpu: 702.7568991935526 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/15",
            "value": 687.9029881656337,
            "unit": "us/iter",
            "extra": "iterations: 1014\ncpu: 687.8522110453773 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/20",
            "value": 684.529809430216,
            "unit": "us/iter",
            "extra": "iterations: 1018\ncpu: 684.4845392927114 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/25",
            "value": 676.421116166462,
            "unit": "us/iter",
            "extra": "iterations: 1033\ncpu: 676.4029438528634 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/30",
            "value": 675.7390793036872,
            "unit": "us/iter",
            "extra": "iterations: 1034\ncpu: 675.6760502901413 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/50",
            "value": 670.2955873320735,
            "unit": "us/iter",
            "extra": "iterations: 1042\ncpu: 670.2525086372374 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/75",
            "value": 667.9165014409222,
            "unit": "us/iter",
            "extra": "iterations: 1041\ncpu: 667.8812641690671 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/100",
            "value": 667.7363902671835,
            "unit": "us/iter",
            "extra": "iterations: 1048\ncpu: 667.6727146946707 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/150",
            "value": 665.2988907480375,
            "unit": "us/iter",
            "extra": "iterations: 1016\ncpu: 665.2565866141722 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/200",
            "value": 665.8532171428803,
            "unit": "us/iter",
            "extra": "iterations: 1050\ncpu: 665.7247266666726 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/2",
            "value": 2163.7793777090083,
            "unit": "us/iter",
            "extra": "iterations: 323\ncpu: 2163.4774953560354 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/5",
            "value": 1626.6331395348348,
            "unit": "us/iter",
            "extra": "iterations: 430\ncpu: 1626.4581790697423 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/10",
            "value": 1499.0545536481045,
            "unit": "us/iter",
            "extra": "iterations: 466\ncpu: 1499.0078369099297 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/15",
            "value": 1453.8703492724328,
            "unit": "us/iter",
            "extra": "iterations: 481\ncpu: 1453.7906548856367 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/20",
            "value": 1444.0257520661132,
            "unit": "us/iter",
            "extra": "iterations: 484\ncpu: 1443.9156384297187 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/25",
            "value": 1435.2475790555043,
            "unit": "us/iter",
            "extra": "iterations: 487\ncpu: 1435.1062689938683 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/30",
            "value": 1432.325817622894,
            "unit": "us/iter",
            "extra": "iterations: 488\ncpu: 1432.1084446721 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/50",
            "value": 1413.9756989898801,
            "unit": "us/iter",
            "extra": "iterations: 495\ncpu: 1413.870240404009 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/75",
            "value": 1408.427838056738,
            "unit": "us/iter",
            "extra": "iterations: 494\ncpu: 1408.221232793494 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/100",
            "value": 1409.9973709678368,
            "unit": "us/iter",
            "extra": "iterations: 496\ncpu: 1409.912754032271 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/150",
            "value": 1402.3247214428586,
            "unit": "us/iter",
            "extra": "iterations: 499\ncpu: 1402.2801603206578 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/200",
            "value": 1402.6564128256293,
            "unit": "us/iter",
            "extra": "iterations: 499\ncpu: 1402.471202404813 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/2",
            "value": 10668.010727272303,
            "unit": "us/iter",
            "extra": "iterations: 66\ncpu: 10666.972318181442 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/5",
            "value": 9400.506972972657,
            "unit": "us/iter",
            "extra": "iterations: 74\ncpu: 9398.978594594757 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/10",
            "value": 8808.291662499812,
            "unit": "us/iter",
            "extra": "iterations: 80\ncpu: 8787.59022500013 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/15",
            "value": 8560.190756097847,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8559.656829268162 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/20",
            "value": 8437.46302409631,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8436.611578313012 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/25",
            "value": 8376.289566264546,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8375.842939758979 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/30",
            "value": 8329.432261905233,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8327.869095238057 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/50",
            "value": 8260.370705882531,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8259.844270588032 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/75",
            "value": 8196.327764706519,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8196.04195294132 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/100",
            "value": 8201.911488371676,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8200.981500000009 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/150",
            "value": 8175.346811764725,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8174.777317647314 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/200",
            "value": 8159.845848837222,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8158.715918604783 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/2",
            "value": 48.525396342728655,
            "unit": "us/iter",
            "extra": "iterations: 14437\ncpu: 48.52078915287146 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/5",
            "value": 17.644966338278913,
            "unit": "us/iter",
            "extra": "iterations: 39689\ncpu: 17.642439063720907 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/10",
            "value": 14.765377858180306,
            "unit": "us/iter",
            "extra": "iterations: 47539\ncpu: 14.764451713330413 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/15",
            "value": 13.44355745410351,
            "unit": "us/iter",
            "extra": "iterations: 51911\ncpu: 13.442305330276959 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/20",
            "value": 12.770251810342188,
            "unit": "us/iter",
            "extra": "iterations: 54962\ncpu: 12.76888930533834 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/25",
            "value": 12.753905745454507,
            "unit": "us/iter",
            "extra": "iterations: 55000\ncpu: 12.752966490908918 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/30",
            "value": 12.38076600098793,
            "unit": "us/iter",
            "extra": "iterations: 56684\ncpu: 12.379104967891996 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/50",
            "value": 12.316959383457895,
            "unit": "us/iter",
            "extra": "iterations: 56898\ncpu: 12.316226053639827 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/75",
            "value": 12.121093110352335,
            "unit": "us/iter",
            "extra": "iterations: 57942\ncpu: 12.119146474060207 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/100",
            "value": 12.20375854752881,
            "unit": "us/iter",
            "extra": "iterations: 57502\ncpu: 12.202949288720314 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/150",
            "value": 11.933065137302412,
            "unit": "us/iter",
            "extra": "iterations: 58630\ncpu: 11.93210873273065 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/200",
            "value": 11.834201020995012,
            "unit": "us/iter",
            "extra": "iterations: 59158\ncpu: 11.832952804354242 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/2",
            "value": 225.47733194490309,
            "unit": "us/iter",
            "extra": "iterations: 3121\ncpu: 225.45392374239196 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/5",
            "value": 73.88912860310558,
            "unit": "us/iter",
            "extra": "iterations: 9471\ncpu: 73.87568799493151 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/10",
            "value": 55.701897165667404,
            "unit": "us/iter",
            "extra": "iterations: 12525\ncpu: 55.698610379242034 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/15",
            "value": 51.37390616995206,
            "unit": "us/iter",
            "extra": "iterations: 13663\ncpu: 51.36984930103291 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/20",
            "value": 48.9564604008988,
            "unit": "us/iter",
            "extra": "iterations: 14268\ncpu: 48.95218986543306 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/25",
            "value": 47.55745682845855,
            "unit": "us/iter",
            "extra": "iterations: 14813\ncpu: 47.5484801188143 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/30",
            "value": 47.07804069845497,
            "unit": "us/iter",
            "extra": "iterations: 14890\ncpu: 47.07022834116935 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/50",
            "value": 45.74058569280066,
            "unit": "us/iter",
            "extra": "iterations: 15293\ncpu: 45.737526973125355 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/75",
            "value": 44.83844415452132,
            "unit": "us/iter",
            "extra": "iterations: 15713\ncpu: 44.831996372429714 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/100",
            "value": 45.124337174317795,
            "unit": "us/iter",
            "extra": "iterations: 15621\ncpu: 45.12041034504823 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/150",
            "value": 44.28372952320679,
            "unit": "us/iter",
            "extra": "iterations: 15835\ncpu: 44.27748228607545 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/200",
            "value": 44.03223258151662,
            "unit": "us/iter",
            "extra": "iterations: 15917\ncpu: 44.0291195577056 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/2",
            "value": 453.76983268483565,
            "unit": "us/iter",
            "extra": "iterations: 1542\ncpu: 453.7543385213921 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/5",
            "value": 146.47646419597433,
            "unit": "us/iter",
            "extra": "iterations: 4776\ncpu: 146.46377680066874 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/10",
            "value": 109.79819486215357,
            "unit": "us/iter",
            "extra": "iterations: 6384\ncpu: 109.77926864035186 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/15",
            "value": 99.49329877702586,
            "unit": "us/iter",
            "extra": "iterations: 7032\ncpu: 99.488098122868 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/20",
            "value": 94.44457694377394,
            "unit": "us/iter",
            "extra": "iterations: 7434\ncpu: 94.43331342480364 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/25",
            "value": 93.56055488378277,
            "unit": "us/iter",
            "extra": "iterations: 7443\ncpu: 93.55397433830586 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/30",
            "value": 91.62622742124822,
            "unit": "us/iter",
            "extra": "iterations: 7651\ncpu: 91.61714115801927 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/50",
            "value": 87.81483104396077,
            "unit": "us/iter",
            "extra": "iterations: 8008\ncpu: 87.80323389110613 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/75",
            "value": 86.48782849051396,
            "unit": "us/iter",
            "extra": "iterations: 8122\ncpu: 86.48243979315302 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/100",
            "value": 85.41325042818762,
            "unit": "us/iter",
            "extra": "iterations: 8174\ncpu: 85.39525177391828 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/150",
            "value": 85.2504063070772,
            "unit": "us/iter",
            "extra": "iterations: 8213\ncpu: 85.24287836357347 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/200",
            "value": 85.40965159149935,
            "unit": "us/iter",
            "extra": "iterations: 8137\ncpu: 85.40451308836474 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/2",
            "value": 2326.7619900332684,
            "unit": "us/iter",
            "extra": "iterations: 301\ncpu: 2326.547053156065 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/5",
            "value": 760.0106937229439,
            "unit": "us/iter",
            "extra": "iterations: 924\ncpu: 759.9442099567036 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/10",
            "value": 555.7779768555205,
            "unit": "us/iter",
            "extra": "iterations: 1253\ncpu: 555.7118651237017 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/15",
            "value": 495.8562090395551,
            "unit": "us/iter",
            "extra": "iterations: 1416\ncpu: 495.81715677966343 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/20",
            "value": 470.08735522791295,
            "unit": "us/iter",
            "extra": "iterations: 1492\ncpu: 470.06112332440506 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/25",
            "value": 452.17564276484893,
            "unit": "us/iter",
            "extra": "iterations: 1548\ncpu: 452.11160206715664 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/30",
            "value": 443.10504050632153,
            "unit": "us/iter",
            "extra": "iterations: 1580\ncpu: 443.0546436708842 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/50",
            "value": 424.49719902914046,
            "unit": "us/iter",
            "extra": "iterations: 1648\ncpu: 424.45897451456636 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/75",
            "value": 415.8115589285603,
            "unit": "us/iter",
            "extra": "iterations: 1680\ncpu: 415.78110416664805 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/100",
            "value": 411.0410194003602,
            "unit": "us/iter",
            "extra": "iterations: 1701\ncpu: 410.9842016460858 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/150",
            "value": 408.8429067055466,
            "unit": "us/iter",
            "extra": "iterations: 1715\ncpu: 408.76290145773214 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/200",
            "value": 408.29208974358363,
            "unit": "us/iter",
            "extra": "iterations: 1716\ncpu: 408.2526911421881 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "879d13dee04593a7ea00d94b0bdff946effafabd",
          "message": "Add fasta_index and rename sequence_reader to fasta_reader (#298)\n\n* Add indexed_fasta for random-access FASTA sequence retrieval\n\nWraps htslib's faidx API for efficient region-based lookups using\n0-based half-open coordinates. Auto-creates .fai index on first use.\nEnables GTF+FASTA association for quick sequence extraction.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Rename sequence_reader → fasta_reader, indexed_fasta → fasta_index\n\nConsistent naming: fasta_reader for streaming, fasta_index for random\naccess. Also renames sequence_entry → fasta_entry, sequence_reader_options\n→ fasta_reader_options. Updates CHANGELOG and all tests.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Guard size_t→int narrowing in fetch, handle empty sequences, update CHANGELOG\n\nAdd INT_MAX bounds check before casting coordinates to int for\nfaidx_fetch_seq. Return empty string from fetch(name) when sequence\nlength is 0 instead of throwing. Add CHANGELOG entries for fasta_index\nand the reader renames.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-03T00:26:38-05:00",
          "tree_id": "f27454a6113214d7d972a563688545377a65d0f1",
          "url": "https://github.com/genogrove/genogrove/commit/879d13dee04593a7ea00d94b0bdff946effafabd"
        },
        "date": 1775194483468,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.23459655136523,
            "unit": "us/iter",
            "extra": "iterations: 19254\ncpu: 33.232953100654406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.659236492365402,
            "unit": "us/iter",
            "extra": "iterations: 91948\ncpu: 7.658913016052552 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.132776437554611,
            "unit": "us/iter",
            "extra": "iterations: 136047\ncpu: 5.132139914882357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.382910923143176,
            "unit": "us/iter",
            "extra": "iterations: 160311\ncpu: 4.382175833224171 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.022789716048731,
            "unit": "us/iter",
            "extra": "iterations: 173727\ncpu: 4.021975024031955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9817012573611623,
            "unit": "us/iter",
            "extra": "iterations: 175924\ncpu: 3.9808419772174366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7463411533449236,
            "unit": "us/iter",
            "extra": "iterations: 187212\ncpu: 3.745779853855526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/50",
            "value": 3.6146082326756095,
            "unit": "us/iter",
            "extra": "iterations: 193643\ncpu: 3.6139077374343507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/75",
            "value": 3.456783988961317,
            "unit": "us/iter",
            "extra": "iterations: 203647\ncpu: 3.4567758867059193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/100",
            "value": 3.4482623741789067,
            "unit": "us/iter",
            "extra": "iterations: 199589\ncpu: 3.4479239537248985 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/150",
            "value": 3.3200695682298886,
            "unit": "us/iter",
            "extra": "iterations: 210714\ncpu: 3.319984282012584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/200",
            "value": 3.33890096327652,
            "unit": "us/iter",
            "extra": "iterations: 211881\ncpu: 3.3385888918779862 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.6495650644841,
            "unit": "us/iter",
            "extra": "iterations: 2559\ncpu: 273.62898046111746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.76011772478304,
            "unit": "us/iter",
            "extra": "iterations: 15893\ncpu: 43.755208204870144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.785354811935086,
            "unit": "us/iter",
            "extra": "iterations: 22891\ncpu: 30.7823433663885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.29988742159125,
            "unit": "us/iter",
            "extra": "iterations: 27261\ncpu: 26.29654234987711 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.92669335719018,
            "unit": "us/iter",
            "extra": "iterations: 26826\ncpu: 25.92492906135841 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.916780774042383,
            "unit": "us/iter",
            "extra": "iterations: 27182\ncpu: 25.91339912442069 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.095315116489605,
            "unit": "us/iter",
            "extra": "iterations: 27685\ncpu: 25.093545349467224 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/50",
            "value": 21.90046608960287,
            "unit": "us/iter",
            "extra": "iterations: 31539\ncpu: 21.89810098608067 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/75",
            "value": 22.125386342906488,
            "unit": "us/iter",
            "extra": "iterations: 31793\ncpu: 22.124048721416656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/100",
            "value": 20.59273502711617,
            "unit": "us/iter",
            "extra": "iterations: 33928\ncpu: 20.589683742042 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/150",
            "value": 22.183073295525098,
            "unit": "us/iter",
            "extra": "iterations: 32444\ncpu: 22.182300764394125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/200",
            "value": 23.41045465485587,
            "unit": "us/iter",
            "extra": "iterations: 29915\ncpu: 23.408045328430454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 637.4331414324405,
            "unit": "us/iter",
            "extra": "iterations: 1103\ncpu: 637.4078748866722 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 116.91715146960497,
            "unit": "us/iter",
            "extra": "iterations: 5988\ncpu: 116.90666783567161 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.76728081556989,
            "unit": "us/iter",
            "extra": "iterations: 9711\ncpu: 70.76081299557202 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.73092418645645,
            "unit": "us/iter",
            "extra": "iterations: 11370\ncpu: 62.726556728232275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.27260150709166,
            "unit": "us/iter",
            "extra": "iterations: 11280\ncpu: 61.26460824468098 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.77354021830592,
            "unit": "us/iter",
            "extra": "iterations: 11910\ncpu: 58.77324735516384 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.116142844579095,
            "unit": "us/iter",
            "extra": "iterations: 11369\ncpu: 61.10995241446021 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/50",
            "value": 58.249571226021885,
            "unit": "us/iter",
            "extra": "iterations: 11990\ncpu: 58.24490316930781 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/75",
            "value": 56.039707240293815,
            "unit": "us/iter",
            "extra": "iterations: 12389\ncpu: 56.03881289853903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/100",
            "value": 53.144307651026324,
            "unit": "us/iter",
            "extra": "iterations: 13044\ncpu: 53.13919978534185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/150",
            "value": 50.33087695538799,
            "unit": "us/iter",
            "extra": "iterations: 13808\ncpu: 50.32623319814624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/200",
            "value": 48.573008426359166,
            "unit": "us/iter",
            "extra": "iterations: 13885\ncpu: 48.57040857040008 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3723.7326648936873,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3723.3820851064156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.8777864450058,
            "unit": "us/iter",
            "extra": "iterations: 782\ncpu: 895.8567391304354 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 604.1948448275674,
            "unit": "us/iter",
            "extra": "iterations: 1160\ncpu: 604.1199396551731 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 503.3653383404885,
            "unit": "us/iter",
            "extra": "iterations: 1398\ncpu: 503.2903204578003 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 483.8363072164996,
            "unit": "us/iter",
            "extra": "iterations: 1455\ncpu: 483.71999175258094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 456.3657415364575,
            "unit": "us/iter",
            "extra": "iterations: 1536\ncpu: 456.32920312499897 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 444.21813226836383,
            "unit": "us/iter",
            "extra": "iterations: 1565\ncpu: 444.1717277955287 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/50",
            "value": 445.623023506981,
            "unit": "us/iter",
            "extra": "iterations: 1574\ncpu: 445.54398792884234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/75",
            "value": 471.6099952830101,
            "unit": "us/iter",
            "extra": "iterations: 1484\ncpu: 471.5714454177897 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/100",
            "value": 486.958338642666,
            "unit": "us/iter",
            "extra": "iterations: 1444\ncpu: 486.8846800553983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/150",
            "value": 466.64715399998613,
            "unit": "us/iter",
            "extra": "iterations: 1500\ncpu: 466.63178533333394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/200",
            "value": 461.68757704916686,
            "unit": "us/iter",
            "extra": "iterations: 1525\ncpu: 461.6286491803286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.456080272307258,
            "unit": "us/iter",
            "extra": "iterations: 27469\ncpu: 25.454148385452612 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.240423039075765,
            "unit": "us/iter",
            "extra": "iterations: 111784\ncpu: 6.239778626637089 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.770192515553001,
            "unit": "us/iter",
            "extra": "iterations: 146918\ncpu: 4.769847506772484 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.165237260511958,
            "unit": "us/iter",
            "extra": "iterations: 168119\ncpu: 4.164804614588492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.9782051186294387,
            "unit": "us/iter",
            "extra": "iterations: 176727\ncpu: 3.9777052346274306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.9503051601722,
            "unit": "us/iter",
            "extra": "iterations: 179994\ncpu: 3.950006839116885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.7609870456135,
            "unit": "us/iter",
            "extra": "iterations: 183104\ncpu: 3.760466521758133 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/50",
            "value": 3.754736629584745,
            "unit": "us/iter",
            "extra": "iterations: 184007\ncpu: 3.7546788980853925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/75",
            "value": 3.7065718585360123,
            "unit": "us/iter",
            "extra": "iterations: 186394\ncpu: 3.706225785164736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/100",
            "value": 3.834704265600366,
            "unit": "us/iter",
            "extra": "iterations: 182319\ncpu: 3.8343422024035134 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/150",
            "value": 3.6583600442052893,
            "unit": "us/iter",
            "extra": "iterations: 191832\ncpu: 3.6581407637932872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/200",
            "value": 3.7234110355063894,
            "unit": "us/iter",
            "extra": "iterations: 191346\ncpu: 3.7169271424539883 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.5957325605893,
            "unit": "us/iter",
            "extra": "iterations: 4745\ncpu: 147.57404467860852 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 32.65032508043225,
            "unit": "us/iter",
            "extra": "iterations: 21447\ncpu: 32.64513391150288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.660792434956594,
            "unit": "us/iter",
            "extra": "iterations: 29557\ncpu: 23.658135128734333 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 21.174986930681378,
            "unit": "us/iter",
            "extra": "iterations: 32978\ncpu: 21.17333155436943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.834664720600532,
            "unit": "us/iter",
            "extra": "iterations: 33572\ncpu: 20.832078219945192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.887132531149952,
            "unit": "us/iter",
            "extra": "iterations: 35071\ncpu: 19.885739756493678 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.469737050350084,
            "unit": "us/iter",
            "extra": "iterations: 35889\ncpu: 19.466543481289204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/50",
            "value": 18.909576059041243,
            "unit": "us/iter",
            "extra": "iterations: 36991\ncpu: 18.90680827768946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/75",
            "value": 19.0522899085565,
            "unit": "us/iter",
            "extra": "iterations: 36853\ncpu: 19.050384663392393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/100",
            "value": 18.9340489005489,
            "unit": "us/iter",
            "extra": "iterations: 36973\ncpu: 18.934007059205307 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/150",
            "value": 19.18802362031513,
            "unit": "us/iter",
            "extra": "iterations: 36367\ncpu: 19.185968900376693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/200",
            "value": 19.190436007012348,
            "unit": "us/iter",
            "extra": "iterations: 36504\ncpu: 19.190053720140458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.72538560158875,
            "unit": "us/iter",
            "extra": "iterations: 2028\ncpu: 344.702280078897 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 69.01961621941565,
            "unit": "us/iter",
            "extra": "iterations: 10136\ncpu: 69.01547346093211 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.19543528048756,
            "unit": "us/iter",
            "extra": "iterations: 14671\ncpu: 48.190623474883196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.61694838357277,
            "unit": "us/iter",
            "extra": "iterations: 16487\ncpu: 42.61686735003398 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.998843905661296,
            "unit": "us/iter",
            "extra": "iterations: 16663\ncpu: 41.99232311108424 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.63571172836154,
            "unit": "us/iter",
            "extra": "iterations: 17317\ncpu: 40.6308862967023 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 39.29383608946698,
            "unit": "us/iter",
            "extra": "iterations: 17839\ncpu: 39.29130657548019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/50",
            "value": 38.08657679588081,
            "unit": "us/iter",
            "extra": "iterations: 18445\ncpu: 38.084673949579575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/75",
            "value": 38.495815541990254,
            "unit": "us/iter",
            "extra": "iterations: 18183\ncpu: 38.49472545784521 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/100",
            "value": 38.048001684051016,
            "unit": "us/iter",
            "extra": "iterations: 18408\ncpu: 38.04455405258604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/150",
            "value": 38.29114648149305,
            "unit": "us/iter",
            "extra": "iterations: 18289\ncpu: 38.29056635135842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/200",
            "value": 38.58927238189872,
            "unit": "us/iter",
            "extra": "iterations: 18162\ncpu: 38.585574826561256 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1885.1668962765764,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1885.1052845744719 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 419.5825176752522,
            "unit": "us/iter",
            "extra": "iterations: 1669\ncpu: 419.51567705212653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 277.84416053774515,
            "unit": "us/iter",
            "extra": "iterations: 2529\ncpu: 277.8302961644925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.99553490725876,
            "unit": "us/iter",
            "extra": "iterations: 2965\ncpu: 235.97272478921118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 228.37480972584424,
            "unit": "us/iter",
            "extra": "iterations: 3064\ncpu: 228.36938674934413 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 218.8598176040681,
            "unit": "us/iter",
            "extra": "iterations: 3147\ncpu: 218.83431394979286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 209.89060191845175,
            "unit": "us/iter",
            "extra": "iterations: 3336\ncpu: 209.89050329736068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/50",
            "value": 202.78849435927376,
            "unit": "us/iter",
            "extra": "iterations: 3457\ncpu: 202.77811050043147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/75",
            "value": 194.24057233924879,
            "unit": "us/iter",
            "extra": "iterations: 3608\ncpu: 194.2321837583147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/100",
            "value": 193.24931829435863,
            "unit": "us/iter",
            "extra": "iterations: 3635\ncpu: 193.23565447042787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/150",
            "value": 194.16602056698096,
            "unit": "us/iter",
            "extra": "iterations: 3598\ncpu: 194.1539630350174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/200",
            "value": 194.41135992217556,
            "unit": "us/iter",
            "extra": "iterations: 3598\ncpu: 194.3937048360221 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/2",
            "value": 14.889622164794938,
            "unit": "us/iter",
            "extra": "iterations: 46822\ncpu: 14.887977147494711 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/5",
            "value": 3.2672047645449354,
            "unit": "us/iter",
            "extra": "iterations: 214627\ncpu: 3.2668550927888713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/10",
            "value": 2.2706558382253657,
            "unit": "us/iter",
            "extra": "iterations: 309863\ncpu: 2.2705539609440337 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/15",
            "value": 1.9089048015860195,
            "unit": "us/iter",
            "extra": "iterations: 367212\ncpu: 1.9088521998191745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/20",
            "value": 1.7683697551361566,
            "unit": "us/iter",
            "extra": "iterations: 394791\ncpu: 1.7681642869265195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/25",
            "value": 1.777450282737112,
            "unit": "us/iter",
            "extra": "iterations: 393475\ncpu: 1.7773687858186848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/30",
            "value": 1.5876196005773873,
            "unit": "us/iter",
            "extra": "iterations: 442038\ncpu: 1.5874174075532057 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/50",
            "value": 1.5770341062016802,
            "unit": "us/iter",
            "extra": "iterations: 454023\ncpu: 1.5769075641542583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/75",
            "value": 1.4598315104351494,
            "unit": "us/iter",
            "extra": "iterations: 479822\ncpu: 1.45973486834702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/100",
            "value": 1.4777854290025543,
            "unit": "us/iter",
            "extra": "iterations: 473214\ncpu: 1.4777045607272887 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/150",
            "value": 1.3110000259899548,
            "unit": "us/iter",
            "extra": "iterations: 538670\ncpu: 1.3109000037128267 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/200",
            "value": 1.3072894270140711,
            "unit": "us/iter",
            "extra": "iterations: 536802\ncpu: 1.3071834605683441 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/2",
            "value": 131.04712415476902,
            "unit": "us/iter",
            "extra": "iterations: 5324\ncpu: 131.0367958302033 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/5",
            "value": 26.71747484404397,
            "unit": "us/iter",
            "extra": "iterations: 27091\ncpu: 26.714399837584114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/10",
            "value": 14.113292254367419,
            "unit": "us/iter",
            "extra": "iterations: 49912\ncpu: 14.112517290431116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/15",
            "value": 11.257974723334069,
            "unit": "us/iter",
            "extra": "iterations: 61717\ncpu: 11.25679427062234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/20",
            "value": 9.637768792821234,
            "unit": "us/iter",
            "extra": "iterations: 71663\ncpu: 9.637199963719077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/25",
            "value": 8.886366962839007,
            "unit": "us/iter",
            "extra": "iterations: 79008\ncpu: 8.88552270656132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/30",
            "value": 8.432007855392746,
            "unit": "us/iter",
            "extra": "iterations: 82873\ncpu: 8.431312272995948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/50",
            "value": 7.52029183305423,
            "unit": "us/iter",
            "extra": "iterations: 93156\ncpu: 7.519588926102413 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/75",
            "value": 7.22779768400068,
            "unit": "us/iter",
            "extra": "iterations: 97323\ncpu: 7.226976870832142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/100",
            "value": 6.927329608992478,
            "unit": "us/iter",
            "extra": "iterations: 103195\ncpu: 6.926928727167068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/150",
            "value": 6.8738032664523026,
            "unit": "us/iter",
            "extra": "iterations: 101823\ncpu: 6.873316981428563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/200",
            "value": 6.648237953554136,
            "unit": "us/iter",
            "extra": "iterations: 105197\ncpu: 6.6474508303468145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/2",
            "value": 255.91569985303235,
            "unit": "us/iter",
            "extra": "iterations: 2722\ncpu: 255.89376671565373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/5",
            "value": 51.60905319542199,
            "unit": "us/iter",
            "extra": "iterations: 13535\ncpu: 51.60203494643571 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/10",
            "value": 27.35401624464364,
            "unit": "us/iter",
            "extra": "iterations: 25670\ncpu: 27.352619439033553 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/15",
            "value": 22.111099652669,
            "unit": "us/iter",
            "extra": "iterations: 31670\ncpu: 22.1091206820337 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/20",
            "value": 19.84337652804923,
            "unit": "us/iter",
            "extra": "iterations: 36239\ncpu: 19.843021661745805 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/25",
            "value": 17.842666113041208,
            "unit": "us/iter",
            "extra": "iterations: 39136\ncpu: 17.840761881643402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/30",
            "value": 16.660291785442872,
            "unit": "us/iter",
            "extra": "iterations: 42096\ncpu: 16.659038911060396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/50",
            "value": 14.782511980914027,
            "unit": "us/iter",
            "extra": "iterations: 47367\ncpu: 14.781646694956308 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/75",
            "value": 14.072895172330512,
            "unit": "us/iter",
            "extra": "iterations: 49672\ncpu: 14.071665103076278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/100",
            "value": 13.656412764961985,
            "unit": "us/iter",
            "extra": "iterations: 51281\ncpu: 13.656045845439982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/150",
            "value": 13.334175492083265,
            "unit": "us/iter",
            "extra": "iterations: 52481\ncpu: 13.332460471408698 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/200",
            "value": 13.40893076599252,
            "unit": "us/iter",
            "extra": "iterations: 52272\ncpu: 13.408441785277134 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/2",
            "value": 1245.608815217427,
            "unit": "us/iter",
            "extra": "iterations: 552\ncpu: 1245.5003786231787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/5",
            "value": 253.43399170573971,
            "unit": "us/iter",
            "extra": "iterations: 2773\ncpu: 253.41640497655555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/10",
            "value": 134.81774768874328,
            "unit": "us/iter",
            "extra": "iterations: 5192\ncpu: 134.80862249614378 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/15",
            "value": 108.07633767442422,
            "unit": "us/iter",
            "extra": "iterations: 6450\ncpu: 108.068503410854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/20",
            "value": 95.29377606860767,
            "unit": "us/iter",
            "extra": "iterations: 7346\ncpu: 95.29112346855526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/25",
            "value": 89.05458515505843,
            "unit": "us/iter",
            "extra": "iterations: 7868\ncpu: 89.0461270971013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/30",
            "value": 83.76010555289649,
            "unit": "us/iter",
            "extra": "iterations: 8356\ncpu: 83.75846481569941 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/50",
            "value": 75.77505044830939,
            "unit": "us/iter",
            "extra": "iterations: 9257\ncpu: 75.76931306038676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/75",
            "value": 71.33012330995078,
            "unit": "us/iter",
            "extra": "iterations: 9837\ncpu: 71.32439127782891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/100",
            "value": 68.76936584167832,
            "unit": "us/iter",
            "extra": "iterations: 10182\ncpu: 68.7639051266953 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/150",
            "value": 68.22566211603802,
            "unit": "us/iter",
            "extra": "iterations: 10255\ncpu: 68.21720429059015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/200",
            "value": 66.89326163124379,
            "unit": "us/iter",
            "extra": "iterations: 10446\ncpu: 66.8882189354782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/2",
            "value": 29.13433629018989,
            "unit": "us/iter",
            "extra": "iterations: 24012\ncpu: 29.130842620356404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/5",
            "value": 5.5217926382124904,
            "unit": "us/iter",
            "extra": "iterations: 126002\ncpu: 5.521494801669932 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/10",
            "value": 3.8023036069746774,
            "unit": "us/iter",
            "extra": "iterations: 183866\ncpu: 3.802128082407939 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/15",
            "value": 2.973858286314537,
            "unit": "us/iter",
            "extra": "iterations: 234127\ncpu: 2.9737356349331314 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/20",
            "value": 2.6270796893174655,
            "unit": "us/iter",
            "extra": "iterations: 266510\ncpu: 2.626827274774005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/25",
            "value": 2.656476766925115,
            "unit": "us/iter",
            "extra": "iterations: 263353\ncpu: 2.656362437488875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/30",
            "value": 2.4349825696240637,
            "unit": "us/iter",
            "extra": "iterations: 287544\ncpu: 2.4347857232283787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/50",
            "value": 2.396207095961717,
            "unit": "us/iter",
            "extra": "iterations: 291377\ncpu: 2.396031433503606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/75",
            "value": 2.3317413201814787,
            "unit": "us/iter",
            "extra": "iterations: 301504\ncpu: 2.331633069544693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/100",
            "value": 2.347411433794752,
            "unit": "us/iter",
            "extra": "iterations: 297574\ncpu: 2.347176870291105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/150",
            "value": 2.1742376510850128,
            "unit": "us/iter",
            "extra": "iterations: 321425\ncpu: 2.1740701874464774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/200",
            "value": 2.168673236485438,
            "unit": "us/iter",
            "extra": "iterations: 322637\ncpu: 2.168518124083679 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/2",
            "value": 137.8763146245028,
            "unit": "us/iter",
            "extra": "iterations: 5060\ncpu: 137.87046304347612 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/5",
            "value": 32.36265567863531,
            "unit": "us/iter",
            "extra": "iterations: 22479\ncpu: 32.358382712754626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/10",
            "value": 20.437253530678063,
            "unit": "us/iter",
            "extra": "iterations: 33917\ncpu: 20.436571571778742 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/15",
            "value": 17.607611704937298,
            "unit": "us/iter",
            "extra": "iterations: 39761\ncpu: 17.60611589245701 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/20",
            "value": 15.967263723232596,
            "unit": "us/iter",
            "extra": "iterations: 43849\ncpu: 15.967070332276181 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/25",
            "value": 15.096832133620513,
            "unit": "us/iter",
            "extra": "iterations: 46400\ncpu: 15.09545163793095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/30",
            "value": 14.513263417668828,
            "unit": "us/iter",
            "extra": "iterations: 48220\ncpu: 14.512833658233376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/50",
            "value": 13.695261075732644,
            "unit": "us/iter",
            "extra": "iterations: 51035\ncpu: 13.694487293034376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/75",
            "value": 13.30589067830464,
            "unit": "us/iter",
            "extra": "iterations: 52469\ncpu: 13.30476309821021 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/100",
            "value": 12.887321675996308,
            "unit": "us/iter",
            "extra": "iterations: 54129\ncpu: 12.88677586875804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/150",
            "value": 13.021336317611238,
            "unit": "us/iter",
            "extra": "iterations: 53726\ncpu: 13.019853720730962 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/200",
            "value": 12.844675479095828,
            "unit": "us/iter",
            "extra": "iterations: 54582\ncpu: 12.844448957531686 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/2",
            "value": 269.7588240992044,
            "unit": "us/iter",
            "extra": "iterations: 2581\ncpu: 269.7413242929072 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/5",
            "value": 65.54799060860205,
            "unit": "us/iter",
            "extra": "iterations: 10861\ncpu: 65.54473262130638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/10",
            "value": 41.99139351879205,
            "unit": "us/iter",
            "extra": "iterations: 17003\ncpu: 41.987693759924284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/15",
            "value": 36.048386798782275,
            "unit": "us/iter",
            "extra": "iterations: 19377\ncpu: 36.047677607473354 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/20",
            "value": 32.78928448558094,
            "unit": "us/iter",
            "extra": "iterations: 21393\ncpu: 32.786233394101075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/25",
            "value": 31.708555097977356,
            "unit": "us/iter",
            "extra": "iterations: 22097\ncpu: 31.707918224194106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/30",
            "value": 30.743948585668424,
            "unit": "us/iter",
            "extra": "iterations: 22873\ncpu: 30.73689397980156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/50",
            "value": 28.567211334314404,
            "unit": "us/iter",
            "extra": "iterations: 24492\ncpu: 28.565750000000502 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/75",
            "value": 27.732872305008435,
            "unit": "us/iter",
            "extra": "iterations: 25232\ncpu: 27.729924342105406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/100",
            "value": 27.32320670940381,
            "unit": "us/iter",
            "extra": "iterations: 25427\ncpu: 27.32237943917912 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/150",
            "value": 27.106982557464406,
            "unit": "us/iter",
            "extra": "iterations: 25799\ncpu: 27.10392553975043 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/200",
            "value": 27.107814244128054,
            "unit": "us/iter",
            "extra": "iterations: 25765\ncpu: 27.107232408305343 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/2",
            "value": 1487.8311443736047,
            "unit": "us/iter",
            "extra": "iterations: 471\ncpu: 1487.6987537154891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/5",
            "value": 485.146630555554,
            "unit": "us/iter",
            "extra": "iterations: 1440\ncpu: 485.1202798611275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/10",
            "value": 362.4430973084955,
            "unit": "us/iter",
            "extra": "iterations: 1932\ncpu: 362.3966340579823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/15",
            "value": 335.1139842256257,
            "unit": "us/iter",
            "extra": "iterations: 2092\ncpu: 335.0978479923507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/20",
            "value": 330.3682824752079,
            "unit": "us/iter",
            "extra": "iterations: 2117\ncpu: 330.3323925366013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/25",
            "value": 322.2760211884143,
            "unit": "us/iter",
            "extra": "iterations: 2171\ncpu: 322.2445347765947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/30",
            "value": 313.6935639300101,
            "unit": "us/iter",
            "extra": "iterations: 2229\ncpu: 313.68033647374745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/50",
            "value": 302.9596335324395,
            "unit": "us/iter",
            "extra": "iterations: 2344\ncpu: 302.93704266211074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/75",
            "value": 292.13982387556905,
            "unit": "us/iter",
            "extra": "iterations: 2379\ncpu: 292.1083383774718 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/100",
            "value": 290.4041712385677,
            "unit": "us/iter",
            "extra": "iterations: 2406\ncpu: 290.32310889443653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/150",
            "value": 291.0613318087349,
            "unit": "us/iter",
            "extra": "iterations: 2405\ncpu: 291.0571604989612 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/200",
            "value": 289.0207566899918,
            "unit": "us/iter",
            "extra": "iterations: 2429\ncpu: 288.9945401399667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/2",
            "value": 220.37590295225363,
            "unit": "us/iter",
            "extra": "iterations: 3184\ncpu: 220.36223115577477 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/5",
            "value": 157.18263777229504,
            "unit": "us/iter",
            "extra": "iterations: 4453\ncpu: 157.17370491803277 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/10",
            "value": 152.84620766702656,
            "unit": "us/iter",
            "extra": "iterations: 4565\ncpu: 152.83493953997834 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/15",
            "value": 151.52554032956513,
            "unit": "us/iter",
            "extra": "iterations: 4612\ncpu: 151.52027254987172 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/20",
            "value": 150.0341464300876,
            "unit": "us/iter",
            "extra": "iterations: 4678\ncpu: 150.01524540401854 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/25",
            "value": 149.3388064034146,
            "unit": "us/iter",
            "extra": "iterations: 4685\ncpu: 149.33870352187384 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/30",
            "value": 149.3344938007676,
            "unit": "us/iter",
            "extra": "iterations: 4678\ncpu: 149.31114878152908 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/50",
            "value": 147.8756722528674,
            "unit": "us/iter",
            "extra": "iterations: 4714\ncpu: 147.87037632583667 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/75",
            "value": 146.39859853402618,
            "unit": "us/iter",
            "extra": "iterations: 4775\ncpu: 146.3869798952894 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/100",
            "value": 146.7998411097077,
            "unit": "us/iter",
            "extra": "iterations: 4758\ncpu: 146.7865403530911 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/150",
            "value": 144.2927763320964,
            "unit": "us/iter",
            "extra": "iterations: 4842\ncpu: 144.28450061958074 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/200",
            "value": 144.53296306232272,
            "unit": "us/iter",
            "extra": "iterations: 4846\ncpu: 144.5037845645867 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/2",
            "value": 1069.6052879019462,
            "unit": "us/iter",
            "extra": "iterations: 653\ncpu: 1069.5744517610747 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/5",
            "value": 751.0048353067923,
            "unit": "us/iter",
            "extra": "iterations: 929\ncpu: 750.9144036598466 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/10",
            "value": 699.9922610441878,
            "unit": "us/iter",
            "extra": "iterations: 996\ncpu: 699.8659939759043 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/15",
            "value": 687.0773887795204,
            "unit": "us/iter",
            "extra": "iterations: 1016\ncpu: 687.0370846456808 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/20",
            "value": 685.5287200392593,
            "unit": "us/iter",
            "extra": "iterations: 1018\ncpu: 685.4198929273094 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/25",
            "value": 676.9653352657463,
            "unit": "us/iter",
            "extra": "iterations: 1035\ncpu: 676.9319323671641 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/30",
            "value": 677.8996355598791,
            "unit": "us/iter",
            "extra": "iterations: 1018\ncpu: 677.7957495088441 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/50",
            "value": 674.4912854349922,
            "unit": "us/iter",
            "extra": "iterations: 1023\ncpu: 674.4217976539645 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/75",
            "value": 687.0848653845812,
            "unit": "us/iter",
            "extra": "iterations: 1040\ncpu: 687.0612759615441 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/100",
            "value": 669.1107860554113,
            "unit": "us/iter",
            "extra": "iterations: 1047\ncpu: 669.0298920725879 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/150",
            "value": 667.009036294172,
            "unit": "us/iter",
            "extra": "iterations: 1047\ncpu: 666.98651289397 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/200",
            "value": 667.2389646271865,
            "unit": "us/iter",
            "extra": "iterations: 1046\ncpu: 667.1964770554677 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/2",
            "value": 2161.0029228395647,
            "unit": "us/iter",
            "extra": "iterations: 324\ncpu: 2160.8191111111473 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/5",
            "value": 1631.7801421912268,
            "unit": "us/iter",
            "extra": "iterations: 429\ncpu: 1631.6331981352237 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/10",
            "value": 1500.300219827599,
            "unit": "us/iter",
            "extra": "iterations: 464\ncpu: 1500.0824224138398 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/15",
            "value": 1453.9242738588794,
            "unit": "us/iter",
            "extra": "iterations: 482\ncpu: 1453.793892116173 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/20",
            "value": 1448.5945144628681,
            "unit": "us/iter",
            "extra": "iterations: 484\ncpu: 1448.4599793388754 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/25",
            "value": 1438.7210123456655,
            "unit": "us/iter",
            "extra": "iterations: 486\ncpu: 1438.6564794239027 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/30",
            "value": 1432.6218683127297,
            "unit": "us/iter",
            "extra": "iterations: 486\ncpu: 1432.4791090535227 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/50",
            "value": 1418.0529614603665,
            "unit": "us/iter",
            "extra": "iterations: 493\ncpu: 1417.8649675456495 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/75",
            "value": 1413.8135070707544,
            "unit": "us/iter",
            "extra": "iterations: 495\ncpu: 1413.7329050504723 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/100",
            "value": 1411.1758888889935,
            "unit": "us/iter",
            "extra": "iterations: 495\ncpu: 1411.0520666666603 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/150",
            "value": 1407.4028508064562,
            "unit": "us/iter",
            "extra": "iterations: 496\ncpu: 1407.310264112875 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/200",
            "value": 1405.793694779077,
            "unit": "us/iter",
            "extra": "iterations: 498\ncpu: 1405.6228373494105 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/2",
            "value": 10724.655876923023,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 10724.223430769196 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/5",
            "value": 9400.205405405679,
            "unit": "us/iter",
            "extra": "iterations: 74\ncpu: 9399.079432432392 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/10",
            "value": 8960.0734461538,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 8958.731338461454 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/15",
            "value": 8508.118951219674,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8507.677695121867 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/20",
            "value": 8417.07860240946,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8416.09925301208 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/25",
            "value": 8377.457927710691,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8376.80353012033 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/30",
            "value": 8328.93046428548,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8328.635714285665 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/50",
            "value": 8255.917000000114,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8254.71370588255 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/75",
            "value": 8209.225529411495,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8208.727929411785 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/100",
            "value": 8173.86704651122,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8172.810779069748 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/150",
            "value": 8162.759430232718,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8161.735255813853 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/200",
            "value": 8141.985534883604,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8141.514000000196 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/2",
            "value": 49.096924628747665,
            "unit": "us/iter",
            "extra": "iterations: 14276\ncpu: 49.09235563183022 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/5",
            "value": 17.93010843991062,
            "unit": "us/iter",
            "extra": "iterations: 39017\ncpu: 17.92881131301752 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/10",
            "value": 14.669309395395882,
            "unit": "us/iter",
            "extra": "iterations: 47651\ncpu: 14.66782480955257 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/15",
            "value": 13.678502819973568,
            "unit": "us/iter",
            "extra": "iterations: 50887\ncpu: 13.677540000393204 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/20",
            "value": 12.75307555377641,
            "unit": "us/iter",
            "extra": "iterations: 54941\ncpu: 12.751536065961508 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/25",
            "value": 12.957171377863144,
            "unit": "us/iter",
            "extra": "iterations: 54091\ncpu: 12.956757538222648 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/30",
            "value": 12.377395726164885,
            "unit": "us/iter",
            "extra": "iterations: 56764\ncpu: 12.37642218659724 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/50",
            "value": 12.231419541034647,
            "unit": "us/iter",
            "extra": "iterations: 57172\ncpu: 12.230730742321422 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/75",
            "value": 12.134870569840436,
            "unit": "us/iter",
            "extra": "iterations: 57560\ncpu: 12.13414826268267 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/100",
            "value": 12.162453691810605,
            "unit": "us/iter",
            "extra": "iterations: 57614\ncpu: 12.16102225153643 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/150",
            "value": 11.982826765977864,
            "unit": "us/iter",
            "extra": "iterations: 58268\ncpu: 11.981764810873916 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/200",
            "value": 11.86155372502554,
            "unit": "us/iter",
            "extra": "iterations: 59060\ncpu: 11.859825804266526 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/2",
            "value": 224.74000417067046,
            "unit": "us/iter",
            "extra": "iterations: 3117\ncpu: 224.73442220083658 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/5",
            "value": 73.66554697418673,
            "unit": "us/iter",
            "extra": "iterations: 9452\ncpu: 73.65630427422731 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/10",
            "value": 55.90080588990725,
            "unit": "us/iter",
            "extra": "iterations: 12462\ncpu: 55.8944102070281 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/15",
            "value": 51.40652067628042,
            "unit": "us/iter",
            "extra": "iterations: 13663\ncpu: 51.40267774280817 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/20",
            "value": 48.82345710502231,
            "unit": "us/iter",
            "extra": "iterations: 14349\ncpu: 48.81955056101512 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/25",
            "value": 47.66178717401528,
            "unit": "us/iter",
            "extra": "iterations: 14533\ncpu: 47.656083189980265 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/30",
            "value": 47.84968640628009,
            "unit": "us/iter",
            "extra": "iterations: 15029\ncpu: 47.84844706899983 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/50",
            "value": 45.25566195090325,
            "unit": "us/iter",
            "extra": "iterations: 15480\ncpu: 45.25009437984538 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/75",
            "value": 44.30687994430664,
            "unit": "us/iter",
            "extra": "iterations: 15801\ncpu: 44.304915574963395 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/100",
            "value": 44.130447553800515,
            "unit": "us/iter",
            "extra": "iterations: 15473\ncpu: 44.12545298261456 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/150",
            "value": 44.10018545043234,
            "unit": "us/iter",
            "extra": "iterations: 15918\ncpu: 44.091226912928725 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/200",
            "value": 43.72257293420756,
            "unit": "us/iter",
            "extra": "iterations: 16035\ncpu: 43.718118989709744 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/2",
            "value": 447.86622186700185,
            "unit": "us/iter",
            "extra": "iterations: 1564\ncpu: 447.80615345267285 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/5",
            "value": 146.16633683548085,
            "unit": "us/iter",
            "extra": "iterations: 4759\ncpu: 146.16268081529645 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/10",
            "value": 108.82828591548946,
            "unit": "us/iter",
            "extra": "iterations: 6390\ncpu: 108.8163028169005 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/15",
            "value": 99.5309099815463,
            "unit": "us/iter",
            "extra": "iterations: 7043\ncpu: 99.5227127644465 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/20",
            "value": 94.07108815985123,
            "unit": "us/iter",
            "extra": "iterations: 7407\ncpu: 94.06072336978394 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/25",
            "value": 92.39944553147028,
            "unit": "us/iter",
            "extra": "iterations: 7564\ncpu: 92.39136924907449 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/30",
            "value": 90.57537840630329,
            "unit": "us/iter",
            "extra": "iterations: 7743\ncpu: 90.57074660984048 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/50",
            "value": 86.95434119692096,
            "unit": "us/iter",
            "extra": "iterations: 8054\ncpu: 86.9460276881053 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/75",
            "value": 85.42090189874017,
            "unit": "us/iter",
            "extra": "iterations: 8216\ncpu: 85.406777263875 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/100",
            "value": 84.52889058894424,
            "unit": "us/iter",
            "extra": "iterations: 8235\ncpu: 84.52326945962162 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/150",
            "value": 83.98116654642037,
            "unit": "us/iter",
            "extra": "iterations: 8316\ncpu: 83.96846777296714 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/200",
            "value": 84.01461711063502,
            "unit": "us/iter",
            "extra": "iterations: 8334\ncpu: 84.00760139189137 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/2",
            "value": 2330.709383333366,
            "unit": "us/iter",
            "extra": "iterations: 300\ncpu: 2330.205406666626 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/5",
            "value": 750.9279444444429,
            "unit": "us/iter",
            "extra": "iterations: 936\ncpu: 750.907428418839 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/10",
            "value": 549.989898332021,
            "unit": "us/iter",
            "extra": "iterations: 1259\ncpu: 549.9273756949927 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/15",
            "value": 491.85816316528116,
            "unit": "us/iter",
            "extra": "iterations: 1428\ncpu: 491.8341603641551 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/20",
            "value": 466.793188290088,
            "unit": "us/iter",
            "extra": "iterations: 1503\ncpu: 466.72504391217166 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/25",
            "value": 451.4836139444732,
            "unit": "us/iter",
            "extra": "iterations: 1549\ncpu: 451.46090639124697 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/30",
            "value": 440.6091086387564,
            "unit": "us/iter",
            "extra": "iterations: 1528\ncpu: 440.59563481674024 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/50",
            "value": 425.23806666667264,
            "unit": "us/iter",
            "extra": "iterations: 1650\ncpu: 425.18737818179005 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/75",
            "value": 416.6842165377662,
            "unit": "us/iter",
            "extra": "iterations: 1681\ncpu: 416.6571754907648 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/100",
            "value": 412.97039313205255,
            "unit": "us/iter",
            "extra": "iterations: 1689\ncpu: 412.9229680284188 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/150",
            "value": 409.35881983567873,
            "unit": "us/iter",
            "extra": "iterations: 1704\ncpu: 409.3376408450736 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/200",
            "value": 408.7701980140301,
            "unit": "us/iter",
            "extra": "iterations: 1712\ncpu: 408.7555443925113 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "committer": {
            "email": "richard.schaefer@zoho.com",
            "name": "riasc",
            "username": "riasc"
          },
          "distinct": true,
          "id": "1690a1252aafbf0aa85cc321d3273b3e6bcc7c9a",
          "message": "Release v0.20.0\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-04-03T09:31:19-05:00",
          "tree_id": "24039f5950b769be9f3f40c058f370218b579ffd",
          "url": "https://github.com/genogrove/genogrove/commit/1690a1252aafbf0aa85cc321d3273b3e6bcc7c9a"
        },
        "date": 1775227223168,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.42861375992544,
            "unit": "us/iter",
            "extra": "iterations: 20785\ncpu: 34.424461149867696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.67022007713525,
            "unit": "us/iter",
            "extra": "iterations: 91009\ncpu: 7.669910338537947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.267584777005273,
            "unit": "us/iter",
            "extra": "iterations: 133456\ncpu: 5.2673029462894165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.43375541295072,
            "unit": "us/iter",
            "extra": "iterations: 157077\ncpu: 4.433663725434025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.050768025804151,
            "unit": "us/iter",
            "extra": "iterations: 172683\ncpu: 4.050514462917603 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.995459140879112,
            "unit": "us/iter",
            "extra": "iterations: 175016\ncpu: 3.995248520135302 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.79533018832187,
            "unit": "us/iter",
            "extra": "iterations: 184525\ncpu: 3.7950815390868478 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/50",
            "value": 3.5824207396006105,
            "unit": "us/iter",
            "extra": "iterations: 196214\ncpu: 3.5822696086925454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/75",
            "value": 3.362798530026402,
            "unit": "us/iter",
            "extra": "iterations: 208031\ncpu: 3.3626157015060234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/100",
            "value": 3.3112574546346285,
            "unit": "us/iter",
            "extra": "iterations: 211781\ncpu: 3.311044682950782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/150",
            "value": 3.216573148471433,
            "unit": "us/iter",
            "extra": "iterations: 220777\ncpu: 3.216404009475627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/200",
            "value": 3.1829613290402983,
            "unit": "us/iter",
            "extra": "iterations: 221122\ncpu: 3.1826532638091147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 278.89377198566285,
            "unit": "us/iter",
            "extra": "iterations: 2513\ncpu: 278.86963270990844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.9694133719512,
            "unit": "us/iter",
            "extra": "iterations: 15884\ncpu: 43.96499836313278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 31.226930830740795,
            "unit": "us/iter",
            "extra": "iterations: 22510\ncpu: 31.180595290981785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.258070906650467,
            "unit": "us/iter",
            "extra": "iterations: 26824\ncpu: 26.25609614524295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.52945670666979,
            "unit": "us/iter",
            "extra": "iterations: 26332\ncpu: 26.52776617803425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.8262675958414,
            "unit": "us/iter",
            "extra": "iterations: 27336\ncpu: 25.82468744512726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.201131262596103,
            "unit": "us/iter",
            "extra": "iterations: 27784\ncpu: 25.200153217679205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/50",
            "value": 22.630287192503726,
            "unit": "us/iter",
            "extra": "iterations: 30732\ncpu: 22.628221755824505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/75",
            "value": 21.84877546281185,
            "unit": "us/iter",
            "extra": "iterations: 30574\ncpu: 21.847662033100004 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/100",
            "value": 21.72852148327979,
            "unit": "us/iter",
            "extra": "iterations: 32118\ncpu: 21.727046858459477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/150",
            "value": 20.195624416548775,
            "unit": "us/iter",
            "extra": "iterations: 34493\ncpu: 20.194382454411045 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/200",
            "value": 20.354981160599536,
            "unit": "us/iter",
            "extra": "iterations: 34396\ncpu: 20.35401837422952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 639.7554526411311,
            "unit": "us/iter",
            "extra": "iterations: 1098\ncpu: 639.7071739526435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 118.56742397710372,
            "unit": "us/iter",
            "extra": "iterations: 5939\ncpu: 118.56233995622168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.3922531317938,
            "unit": "us/iter",
            "extra": "iterations: 9659\ncpu: 71.38543068640655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.618090094889475,
            "unit": "us/iter",
            "extra": "iterations: 11277\ncpu: 61.61536942449257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.24716446773567,
            "unit": "us/iter",
            "extra": "iterations: 11066\ncpu: 64.24177444424377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.08186565889673,
            "unit": "us/iter",
            "extra": "iterations: 11709\ncpu: 59.07849850542316 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 63.03365458652959,
            "unit": "us/iter",
            "extra": "iterations: 11065\ncpu: 63.03245006778114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/50",
            "value": 58.12421150420478,
            "unit": "us/iter",
            "extra": "iterations: 11787\ncpu: 58.11899423093243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/75",
            "value": 56.0953625251255,
            "unit": "us/iter",
            "extra": "iterations: 12435\ncpu: 56.092313952553276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/100",
            "value": 54.64818358415255,
            "unit": "us/iter",
            "extra": "iterations: 13024\ncpu: 54.64326850429973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/150",
            "value": 48.55370683440037,
            "unit": "us/iter",
            "extra": "iterations: 14149\ncpu: 48.55142914693593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/200",
            "value": 47.16581253914148,
            "unit": "us/iter",
            "extra": "iterations: 14371\ncpu: 47.161990745250485 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3683.642147367855,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3683.435710526302 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.2963772379046,
            "unit": "us/iter",
            "extra": "iterations: 782\ncpu: 895.2380946291617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 615.4942328042019,
            "unit": "us/iter",
            "extra": "iterations: 1134\ncpu: 615.4552310405647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 508.88958955758034,
            "unit": "us/iter",
            "extra": "iterations: 1379\ncpu: 508.85449383611484 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 487.8946869322357,
            "unit": "us/iter",
            "extra": "iterations: 1431\ncpu: 487.8431390635902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.0871220471858,
            "unit": "us/iter",
            "extra": "iterations: 1524\ncpu: 459.069292650919 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.52873882497965,
            "unit": "us/iter",
            "extra": "iterations: 1566\ncpu: 446.49982694763844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/50",
            "value": 447.49208706789614,
            "unit": "us/iter",
            "extra": "iterations: 1562\ncpu: 447.45805377721115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/75",
            "value": 479.86961274848693,
            "unit": "us/iter",
            "extra": "iterations: 1459\ncpu: 479.84154969157055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/100",
            "value": 489.4214109014463,
            "unit": "us/iter",
            "extra": "iterations: 1431\ncpu: 489.40208385744313 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/150",
            "value": 464.72524417832557,
            "unit": "us/iter",
            "extra": "iterations: 1503\ncpu: 464.68465335995086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/200",
            "value": 458.58864721311437,
            "unit": "us/iter",
            "extra": "iterations: 1525\ncpu: 458.5744845901659 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.527646406631916,
            "unit": "us/iter",
            "extra": "iterations: 27509\ncpu: 25.525421789232652 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.034638317014681,
            "unit": "us/iter",
            "extra": "iterations: 114487\ncpu: 6.034403548001048 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.483339840598681,
            "unit": "us/iter",
            "extra": "iterations: 154955\ncpu: 4.483051815043093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.018676906286715,
            "unit": "us/iter",
            "extra": "iterations: 174095\ncpu: 4.018621396364032 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8059768939457395,
            "unit": "us/iter",
            "extra": "iterations: 182463\ncpu: 3.8056895480179733 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.749764995098822,
            "unit": "us/iter",
            "extra": "iterations: 186711\ncpu: 3.749620884682766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.587120494889504,
            "unit": "us/iter",
            "extra": "iterations: 195195\ncpu: 3.586904782397076 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/50",
            "value": 3.613466881676213,
            "unit": "us/iter",
            "extra": "iterations: 193790\ncpu: 3.6132938644924835 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/75",
            "value": 3.571633325502261,
            "unit": "us/iter",
            "extra": "iterations: 195814\ncpu: 3.5715321478546036 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/100",
            "value": 3.706755761098261,
            "unit": "us/iter",
            "extra": "iterations: 189417\ncpu: 3.706575059260758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/150",
            "value": 3.474970952830644,
            "unit": "us/iter",
            "extra": "iterations: 201190\ncpu: 3.474872096028613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/200",
            "value": 3.487533462260855,
            "unit": "us/iter",
            "extra": "iterations: 200629\ncpu: 3.4872022090525014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 152.61212692476536,
            "unit": "us/iter",
            "extra": "iterations: 4546\ncpu: 152.60538363396267 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.371856545772463,
            "unit": "us/iter",
            "extra": "iterations: 22251\ncpu: 31.36899069704734 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.399930908974564,
            "unit": "us/iter",
            "extra": "iterations: 31046\ncpu: 22.39793429105201 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.1742993068138,
            "unit": "us/iter",
            "extra": "iterations: 34767\ncpu: 20.17294586820834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.114604102032757,
            "unit": "us/iter",
            "extra": "iterations: 34812\ncpu: 20.113797885786752 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.052147366699526,
            "unit": "us/iter",
            "extra": "iterations: 36684\ncpu: 19.051034647257648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.61536284666797,
            "unit": "us/iter",
            "extra": "iterations: 37644\ncpu: 18.613854080331578 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/50",
            "value": 18.13398143407392,
            "unit": "us/iter",
            "extra": "iterations: 38673\ncpu: 18.13319093424356 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/75",
            "value": 18.34456235786289,
            "unit": "us/iter",
            "extra": "iterations: 38255\ncpu: 18.343318755718457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/100",
            "value": 18.07379080187361,
            "unit": "us/iter",
            "extra": "iterations: 38834\ncpu: 18.073275222742993 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/150",
            "value": 18.751069454344123,
            "unit": "us/iter",
            "extra": "iterations: 37881\ncpu: 18.74946136585624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/200",
            "value": 18.293664911490183,
            "unit": "us/iter",
            "extra": "iterations: 37793\ncpu: 18.29342277670481 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.928070622908,
            "unit": "us/iter",
            "extra": "iterations: 2039\ncpu: 343.90314664050874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.21318172239202,
            "unit": "us/iter",
            "extra": "iterations: 10439\ncpu: 67.21056806207584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.316971120805576,
            "unit": "us/iter",
            "extra": "iterations: 15132\ncpu: 46.31344792492679 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.64372115955892,
            "unit": "us/iter",
            "extra": "iterations: 16834\ncpu: 41.62694255673107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.46706952430975,
            "unit": "us/iter",
            "extra": "iterations: 17217\ncpu: 40.464044200499394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.91146775708163,
            "unit": "us/iter",
            "extra": "iterations: 18097\ncpu: 38.908958169862395 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.74581963593252,
            "unit": "us/iter",
            "extra": "iterations: 18568\ncpu: 37.744229426971124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/50",
            "value": 36.30274489160652,
            "unit": "us/iter",
            "extra": "iterations: 19282\ncpu: 36.30143553573297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/75",
            "value": 36.620568976343016,
            "unit": "us/iter",
            "extra": "iterations: 19108\ncpu: 36.61932164538419 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/100",
            "value": 36.46793756509461,
            "unit": "us/iter",
            "extra": "iterations: 19204\ncpu: 36.465142834825656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/150",
            "value": 36.69540578113554,
            "unit": "us/iter",
            "extra": "iterations: 19062\ncpu: 36.693702182352936 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/200",
            "value": 37.267882710454714,
            "unit": "us/iter",
            "extra": "iterations: 18757\ncpu: 37.263889534573636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1846.7578999999853,
            "unit": "us/iter",
            "extra": "iterations: 380\ncpu: 1846.728476315799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.28907463554526,
            "unit": "us/iter",
            "extra": "iterations: 1715\ncpu: 408.25319825072853 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 270.65471497003824,
            "unit": "us/iter",
            "extra": "iterations: 2505\ncpu: 270.64791896207623 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.73257095157345,
            "unit": "us/iter",
            "extra": "iterations: 2995\ncpu: 228.71897061770065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 221.71239049129775,
            "unit": "us/iter",
            "extra": "iterations: 3155\ncpu: 221.70971885895312 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 210.86925430905308,
            "unit": "us/iter",
            "extra": "iterations: 3307\ncpu: 210.85251708497103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 202.85228861787786,
            "unit": "us/iter",
            "extra": "iterations: 3444\ncpu: 202.84235714285646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/50",
            "value": 196.09184888887893,
            "unit": "us/iter",
            "extra": "iterations: 3600\ncpu: 196.0588677777745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/75",
            "value": 186.5380489882987,
            "unit": "us/iter",
            "extra": "iterations: 3756\ncpu: 186.5232247071327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/100",
            "value": 184.15360762156237,
            "unit": "us/iter",
            "extra": "iterations: 3805\ncpu: 184.13405282523158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/150",
            "value": 186.39461378761553,
            "unit": "us/iter",
            "extra": "iterations: 3757\ncpu: 186.38402289060366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/200",
            "value": 187.23466399575443,
            "unit": "us/iter",
            "extra": "iterations: 3744\ncpu: 187.21965785256597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/2",
            "value": 14.629298967137428,
            "unit": "us/iter",
            "extra": "iterations: 47925\ncpu: 14.628136275430174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/5",
            "value": 3.1928845840147186,
            "unit": "us/iter",
            "extra": "iterations: 219467\ncpu: 3.192644420345667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/10",
            "value": 2.3074281245976174,
            "unit": "us/iter",
            "extra": "iterations: 303087\ncpu: 2.307243148006999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/15",
            "value": 1.8992896972820932,
            "unit": "us/iter",
            "extra": "iterations: 368495\ncpu: 1.8991983283355367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/20",
            "value": 1.7601733152388563,
            "unit": "us/iter",
            "extra": "iterations: 397178\ncpu: 1.7600694776649277 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/25",
            "value": 1.7861029382824838,
            "unit": "us/iter",
            "extra": "iterations: 391283\ncpu: 1.7860408936754344 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/30",
            "value": 1.5779636327602367,
            "unit": "us/iter",
            "extra": "iterations: 444026\ncpu: 1.5777755919698362 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/50",
            "value": 1.5338654344692237,
            "unit": "us/iter",
            "extra": "iterations: 455176\ncpu: 1.5337281337329027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/75",
            "value": 1.4584149125707884,
            "unit": "us/iter",
            "extra": "iterations: 481017\ncpu: 1.4582829858404232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/100",
            "value": 1.4747870179142808,
            "unit": "us/iter",
            "extra": "iterations: 475486\ncpu: 1.4747073920157356 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/150",
            "value": 1.3196752297069398,
            "unit": "us/iter",
            "extra": "iterations: 531003\ncpu: 1.3196069137085857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/200",
            "value": 1.3063332586983285,
            "unit": "us/iter",
            "extra": "iterations: 535941\ncpu: 1.3062545261512049 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/2",
            "value": 132.42556226343345,
            "unit": "us/iter",
            "extra": "iterations: 5284\ncpu: 132.4211625662388 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/5",
            "value": 26.102018656017673,
            "unit": "us/iter",
            "extra": "iterations: 26801\ncpu: 26.10064057311321 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/10",
            "value": 14.013337684436964,
            "unit": "us/iter",
            "extra": "iterations: 49949\ncpu: 14.012094556447616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/15",
            "value": 11.116560181718048,
            "unit": "us/iter",
            "extra": "iterations: 62735\ncpu: 11.115894110145843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/20",
            "value": 9.61721730041895,
            "unit": "us/iter",
            "extra": "iterations: 72715\ncpu: 9.616813958605407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/25",
            "value": 8.613446973161443,
            "unit": "us/iter",
            "extra": "iterations: 80893\ncpu: 8.61302866749902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/30",
            "value": 8.21037754317348,
            "unit": "us/iter",
            "extra": "iterations: 85818\ncpu: 8.209859889533615 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/50",
            "value": 7.378950675155096,
            "unit": "us/iter",
            "extra": "iterations: 94719\ncpu: 7.373385033625884 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/75",
            "value": 6.88703908432689,
            "unit": "us/iter",
            "extra": "iterations: 101652\ncpu: 6.886397276984177 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/100",
            "value": 6.573732424771657,
            "unit": "us/iter",
            "extra": "iterations: 106542\ncpu: 6.573252388729429 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/150",
            "value": 6.575871053568759,
            "unit": "us/iter",
            "extra": "iterations: 106742\ncpu: 6.575561597122064 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/200",
            "value": 6.387626956275285,
            "unit": "us/iter",
            "extra": "iterations: 109711\ncpu: 6.3871190855976225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/2",
            "value": 256.8961836137394,
            "unit": "us/iter",
            "extra": "iterations: 2734\ncpu: 256.8857798098016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/5",
            "value": 50.42517485870251,
            "unit": "us/iter",
            "extra": "iterations: 13977\ncpu: 50.42265901123299 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/10",
            "value": 27.28244032270625,
            "unit": "us/iter",
            "extra": "iterations: 25906\ncpu: 27.28073384544098 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/15",
            "value": 21.864829942813586,
            "unit": "us/iter",
            "extra": "iterations: 32001\ncpu: 21.86365807318514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/20",
            "value": 18.87594098413696,
            "unit": "us/iter",
            "extra": "iterations: 37007\ncpu: 18.87482295241452 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/25",
            "value": 17.651451363614875,
            "unit": "us/iter",
            "extra": "iterations: 40114\ncpu: 17.650651642818158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/30",
            "value": 16.577727500709198,
            "unit": "us/iter",
            "extra": "iterations: 42268\ncpu: 16.57628636320593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/50",
            "value": 14.418262247899285,
            "unit": "us/iter",
            "extra": "iterations: 48294\ncpu: 14.417208618047532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/75",
            "value": 13.665713466043426,
            "unit": "us/iter",
            "extra": "iterations: 51240\ncpu: 13.664554391100712 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/100",
            "value": 13.388387791980012,
            "unit": "us/iter",
            "extra": "iterations: 52572\ncpu: 13.38809847447312 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/150",
            "value": 13.23650830558396,
            "unit": "us/iter",
            "extra": "iterations: 52856\ncpu: 13.235443090661317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/200",
            "value": 13.112955500224459,
            "unit": "us/iter",
            "extra": "iterations: 53416\ncpu: 13.112206155458898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/2",
            "value": 1253.5451684398738,
            "unit": "us/iter",
            "extra": "iterations: 564\ncpu: 1253.5127677305304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/5",
            "value": 247.39010899471745,
            "unit": "us/iter",
            "extra": "iterations: 2835\ncpu: 247.37402857143488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/10",
            "value": 132.42668894358832,
            "unit": "us/iter",
            "extra": "iterations: 5282\ncpu: 132.42149621355458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/15",
            "value": 107.17535555556226,
            "unit": "us/iter",
            "extra": "iterations: 6525\ncpu: 107.1659451340992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/20",
            "value": 94.35410242260839,
            "unit": "us/iter",
            "extra": "iterations: 7430\ncpu: 94.35157604306782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/25",
            "value": 87.63326557623492,
            "unit": "us/iter",
            "extra": "iterations: 8009\ncpu: 87.62664702210009 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/30",
            "value": 82.69235276073456,
            "unit": "us/iter",
            "extra": "iterations: 8476\ncpu: 82.68951521944187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/50",
            "value": 74.53222015802208,
            "unit": "us/iter",
            "extra": "iterations: 9366\ncpu: 74.52611883407843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/75",
            "value": 69.75257618004242,
            "unit": "us/iter",
            "extra": "iterations: 10042\ncpu: 69.74538358892578 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/100",
            "value": 67.98642281685086,
            "unit": "us/iter",
            "extra": "iterations: 10352\ncpu: 67.81852144513026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/150",
            "value": 67.35027209571541,
            "unit": "us/iter",
            "extra": "iterations: 10364\ncpu: 67.34436578540961 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/200",
            "value": 65.81717233238285,
            "unit": "us/iter",
            "extra": "iterations: 10590\ncpu: 65.81169801699663 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/2",
            "value": 28.745484874787213,
            "unit": "us/iter",
            "extra": "iterations: 24198\ncpu: 28.743796098851103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/5",
            "value": 5.706471824141929,
            "unit": "us/iter",
            "extra": "iterations: 122463\ncpu: 5.705990446093748 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/10",
            "value": 3.7348012641346187,
            "unit": "us/iter",
            "extra": "iterations: 187480\ncpu: 3.7345673138467683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/15",
            "value": 3.135922295176137,
            "unit": "us/iter",
            "extra": "iterations: 222972\ncpu: 3.135456622356197 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/20",
            "value": 2.657115461362859,
            "unit": "us/iter",
            "extra": "iterations: 263101\ncpu: 2.6569557090242157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/25",
            "value": 2.7220408056511767,
            "unit": "us/iter",
            "extra": "iterations: 258077\ncpu: 2.72182362240726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/30",
            "value": 2.509774706477186,
            "unit": "us/iter",
            "extra": "iterations: 278854\ncpu: 2.5097368085090976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/50",
            "value": 2.4559141190126956,
            "unit": "us/iter",
            "extra": "iterations: 285197\ncpu: 2.455738857701842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/75",
            "value": 2.3739363168466348,
            "unit": "us/iter",
            "extra": "iterations: 295714\ncpu: 2.3736784426844735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/100",
            "value": 2.396029952481425,
            "unit": "us/iter",
            "extra": "iterations: 292096\ncpu: 2.3957576892529078 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/150",
            "value": 2.200364397166527,
            "unit": "us/iter",
            "extra": "iterations: 317368\ncpu: 2.200238647248603 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/200",
            "value": 2.2062769475774613,
            "unit": "us/iter",
            "extra": "iterations: 312709\ncpu: 2.2060640563590237 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/2",
            "value": 138.07974071892235,
            "unit": "us/iter",
            "extra": "iterations: 5091\ncpu: 138.07296483991783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/5",
            "value": 31.875966044762436,
            "unit": "us/iter",
            "extra": "iterations: 22029\ncpu: 31.873110354532514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/10",
            "value": 19.94358669935172,
            "unit": "us/iter",
            "extra": "iterations: 35081\ncpu: 19.943364584818664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/15",
            "value": 17.306365493530606,
            "unit": "us/iter",
            "extra": "iterations: 40433\ncpu: 17.30498857368952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/20",
            "value": 15.659302900203585,
            "unit": "us/iter",
            "extra": "iterations: 44721\ncpu: 15.658495717895283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/25",
            "value": 14.6856117996085,
            "unit": "us/iter",
            "extra": "iterations: 47527\ncpu: 14.684859195825535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/30",
            "value": 14.284167132453023,
            "unit": "us/iter",
            "extra": "iterations: 49021\ncpu: 14.282989677892713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/50",
            "value": 13.336978772865844,
            "unit": "us/iter",
            "extra": "iterations: 52480\ncpu: 13.33620274390226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/75",
            "value": 12.979129830616206,
            "unit": "us/iter",
            "extra": "iterations: 53901\ncpu: 12.9784302146528 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/100",
            "value": 12.567778948311886,
            "unit": "us/iter",
            "extra": "iterations: 55720\ncpu: 12.567283219670117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/150",
            "value": 12.746271668398338,
            "unit": "us/iter",
            "extra": "iterations: 54861\ncpu: 12.745524434480101 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/200",
            "value": 12.551968071541795,
            "unit": "us/iter",
            "extra": "iterations: 55687\ncpu: 12.551343473342156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/2",
            "value": 271.1113008129905,
            "unit": "us/iter",
            "extra": "iterations: 2583\ncpu: 271.09138753387714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/5",
            "value": 65.41976104565445,
            "unit": "us/iter",
            "extra": "iterations: 10864\ncpu: 65.41278902798271 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/10",
            "value": 40.747553780001965,
            "unit": "us/iter",
            "extra": "iterations: 17209\ncpu: 40.74244662676575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/15",
            "value": 35.30945887445886,
            "unit": "us/iter",
            "extra": "iterations: 19866\ncpu: 35.3077933655496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/20",
            "value": 32.2989927054449,
            "unit": "us/iter",
            "extra": "iterations: 21660\ncpu: 32.29566029547571 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/25",
            "value": 31.224346318228047,
            "unit": "us/iter",
            "extra": "iterations: 22462\ncpu: 31.223245837414318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/30",
            "value": 30.238204594618875,
            "unit": "us/iter",
            "extra": "iterations: 23114\ncpu: 30.235348792939266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/50",
            "value": 28.077195564114728,
            "unit": "us/iter",
            "extra": "iterations: 24933\ncpu: 28.075238358801716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/75",
            "value": 27.341896491293753,
            "unit": "us/iter",
            "extra": "iterations: 25679\ncpu: 27.34024673857993 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/100",
            "value": 26.909778823980425,
            "unit": "us/iter",
            "extra": "iterations: 26020\ncpu: 26.909067294389825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/150",
            "value": 26.67962110925026,
            "unit": "us/iter",
            "extra": "iterations: 26216\ncpu: 26.677725320414474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/200",
            "value": 26.52160217745815,
            "unit": "us/iter",
            "extra": "iterations: 26361\ncpu: 26.5206509237137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/2",
            "value": 1499.9239936709876,
            "unit": "us/iter",
            "extra": "iterations: 474\ncpu: 1499.849280590708 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/5",
            "value": 478.28278004069267,
            "unit": "us/iter",
            "extra": "iterations: 1473\ncpu: 478.2509361846591 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/10",
            "value": 360.3491905252305,
            "unit": "us/iter",
            "extra": "iterations: 1942\ncpu: 360.30219876416066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/15",
            "value": 331.4860660019245,
            "unit": "us/iter",
            "extra": "iterations: 2106\ncpu: 331.47034235517856 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/20",
            "value": 317.30058655159047,
            "unit": "us/iter",
            "extra": "iterations: 2201\ncpu: 317.2640340754212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/25",
            "value": 310.6294264117096,
            "unit": "us/iter",
            "extra": "iterations: 2249\ncpu: 310.6109608714882 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/30",
            "value": 302.65634490237704,
            "unit": "us/iter",
            "extra": "iterations: 2305\ncpu: 302.62425509760845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/50",
            "value": 298.31465230249097,
            "unit": "us/iter",
            "extra": "iterations: 2367\ncpu: 298.2995133079763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/75",
            "value": 296.2295290916456,
            "unit": "us/iter",
            "extra": "iterations: 2389\ncpu: 296.1722381749684 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/100",
            "value": 293.90880816154714,
            "unit": "us/iter",
            "extra": "iterations: 2377\ncpu: 293.8859078670617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/150",
            "value": 291.43628703701495,
            "unit": "us/iter",
            "extra": "iterations: 2376\ncpu: 291.4059099326604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/200",
            "value": 292.37740583331134,
            "unit": "us/iter",
            "extra": "iterations: 2400\ncpu: 292.3604191666721 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/2",
            "value": 218.68361894271865,
            "unit": "us/iter",
            "extra": "iterations: 3178\ncpu: 218.651089049718 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/5",
            "value": 156.09715671807984,
            "unit": "us/iter",
            "extra": "iterations: 4473\ncpu: 156.08976101050786 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/10",
            "value": 152.59283409836652,
            "unit": "us/iter",
            "extra": "iterations: 4575\ncpu: 152.58531912568137 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/15",
            "value": 173.5561889412414,
            "unit": "us/iter",
            "extra": "iterations: 4033\ncpu: 173.08432085296553 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/20",
            "value": 172.98684605972494,
            "unit": "us/iter",
            "extra": "iterations: 4086\ncpu: 172.54457317670125 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/25",
            "value": 171.10705625913673,
            "unit": "us/iter",
            "extra": "iterations: 4106\ncpu: 170.61469556745948 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/30",
            "value": 170.84912442172532,
            "unit": "us/iter",
            "extra": "iterations: 4107\ncpu: 170.4043949354736 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/50",
            "value": 170.00681196995276,
            "unit": "us/iter",
            "extra": "iterations: 4127\ncpu: 169.53908844196778 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/75",
            "value": 168.82352757792316,
            "unit": "us/iter",
            "extra": "iterations: 4170\ncpu: 168.3626822541986 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/100",
            "value": 169.3205334783767,
            "unit": "us/iter",
            "extra": "iterations: 4137\ncpu: 168.83134856176187 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/150",
            "value": 166.55811835862923,
            "unit": "us/iter",
            "extra": "iterations: 4216\ncpu: 166.09385602466764 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/200",
            "value": 167.0859747257933,
            "unit": "us/iter",
            "extra": "iterations: 4194\ncpu: 166.59207463042665 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/2",
            "value": 1118.5941936507752,
            "unit": "us/iter",
            "extra": "iterations: 630\ncpu: 1115.8017571428252 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/5",
            "value": 786.6742590090377,
            "unit": "us/iter",
            "extra": "iterations: 888\ncpu: 786.6079324324382 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/10",
            "value": 734.8843697478397,
            "unit": "us/iter",
            "extra": "iterations: 952\ncpu: 734.8230483193221 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/15",
            "value": 720.7005565843994,
            "unit": "us/iter",
            "extra": "iterations: 972\ncpu: 720.6769907407506 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/20",
            "value": 690.2719783890233,
            "unit": "us/iter",
            "extra": "iterations: 1018\ncpu: 690.2328290766245 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/25",
            "value": 677.2948268858896,
            "unit": "us/iter",
            "extra": "iterations: 1034\ncpu: 677.229276595749 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/30",
            "value": 677.7523002915565,
            "unit": "us/iter",
            "extra": "iterations: 1029\ncpu: 677.7132536443304 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/50",
            "value": 676.8810742526467,
            "unit": "us/iter",
            "extra": "iterations: 1037\ncpu: 676.7814108003738 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/75",
            "value": 670.1734879923896,
            "unit": "us/iter",
            "extra": "iterations: 1041\ncpu: 670.1557665706059 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/100",
            "value": 669.8823390969578,
            "unit": "us/iter",
            "extra": "iterations: 1041\ncpu: 669.8156791546592 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/150",
            "value": 666.6952104762372,
            "unit": "us/iter",
            "extra": "iterations: 1050\ncpu: 666.6466647619104 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/200",
            "value": 668.9995587392048,
            "unit": "us/iter",
            "extra": "iterations: 1047\ncpu: 668.9310286532924 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/2",
            "value": 2162.695413580372,
            "unit": "us/iter",
            "extra": "iterations: 324\ncpu: 2162.471179012383 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/5",
            "value": 1629.8355116278735,
            "unit": "us/iter",
            "extra": "iterations: 430\ncpu: 1629.6454023255576 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/10",
            "value": 1501.934952789846,
            "unit": "us/iter",
            "extra": "iterations: 466\ncpu: 1501.8021673820053 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/15",
            "value": 1452.8190331949431,
            "unit": "us/iter",
            "extra": "iterations: 482\ncpu: 1452.7668734439462 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/20",
            "value": 1445.6063057850338,
            "unit": "us/iter",
            "extra": "iterations: 484\ncpu: 1445.457464876055 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/25",
            "value": 1435.0796242299627,
            "unit": "us/iter",
            "extra": "iterations: 487\ncpu: 1435.0266078028558 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/30",
            "value": 1429.0612719837193,
            "unit": "us/iter",
            "extra": "iterations: 489\ncpu: 1428.9850920245638 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/50",
            "value": 1416.187066666735,
            "unit": "us/iter",
            "extra": "iterations: 495\ncpu: 1416.0055070706817 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/75",
            "value": 1409.3131488933204,
            "unit": "us/iter",
            "extra": "iterations: 497\ncpu: 1409.222758551309 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/100",
            "value": 1408.2528326613347,
            "unit": "us/iter",
            "extra": "iterations: 496\ncpu: 1408.1608729838417 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/150",
            "value": 1401.507921843608,
            "unit": "us/iter",
            "extra": "iterations: 499\ncpu: 1401.4628597194614 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/200",
            "value": 1399.9669019997327,
            "unit": "us/iter",
            "extra": "iterations: 500\ncpu: 1399.7798620000026 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/2",
            "value": 10656.344984850517,
            "unit": "us/iter",
            "extra": "iterations: 66\ncpu: 10655.577424242152 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/5",
            "value": 9381.267933334431,
            "unit": "us/iter",
            "extra": "iterations: 75\ncpu: 9380.191599999913 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/10",
            "value": 8728.770637500817,
            "unit": "us/iter",
            "extra": "iterations: 80\ncpu: 8727.693012500025 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/15",
            "value": 8498.417280487423,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8498.118609756351 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/20",
            "value": 8427.0145903603,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8425.937975903664 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/25",
            "value": 8346.552154759614,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8345.9524047618 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/30",
            "value": 8300.16815476007,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8299.602190476207 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/50",
            "value": 8249.939235292914,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8249.045247058843 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/75",
            "value": 8170.134127905924,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8169.560581395381 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/100",
            "value": 8234.621360463998,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8232.984965116173 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/150",
            "value": 8137.98093023241,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8137.387348837191 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/200",
            "value": 8138.818511629643,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8137.905360465365 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/2",
            "value": 49.25428247365752,
            "unit": "us/iter",
            "extra": "iterations: 14327\ncpu: 49.25053947092871 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/5",
            "value": 17.78470248877181,
            "unit": "us/iter",
            "extra": "iterations: 39417\ncpu: 17.782139939620016 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/10",
            "value": 14.67199858297073,
            "unit": "us/iter",
            "extra": "iterations: 47282\ncpu: 14.670111416606675 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/15",
            "value": 13.495184956418523,
            "unit": "us/iter",
            "extra": "iterations: 51969\ncpu: 13.49419890704092 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/20",
            "value": 12.780841578122052,
            "unit": "us/iter",
            "extra": "iterations: 54115\ncpu: 12.77963858449578 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/25",
            "value": 12.725721029575153,
            "unit": "us/iter",
            "extra": "iterations: 55013\ncpu: 12.724775198589699 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/30",
            "value": 12.375890045701533,
            "unit": "us/iter",
            "extra": "iterations: 56669\ncpu: 12.374901621697875 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/50",
            "value": 12.299904866866598,
            "unit": "us/iter",
            "extra": "iterations: 56710\ncpu: 12.298961893845878 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/75",
            "value": 12.098617388741914,
            "unit": "us/iter",
            "extra": "iterations: 57727\ncpu: 12.097215064008164 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/100",
            "value": 12.127453742043055,
            "unit": "us/iter",
            "extra": "iterations: 57482\ncpu: 12.125924793848489 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/150",
            "value": 11.858467294645719,
            "unit": "us/iter",
            "extra": "iterations: 58813\ncpu: 11.857764150783142 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/200",
            "value": 11.800151782853801,
            "unit": "us/iter",
            "extra": "iterations: 59315\ncpu: 11.798651015763134 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/2",
            "value": 222.31195297505775,
            "unit": "us/iter",
            "extra": "iterations: 3126\ncpu: 222.29561836212113 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/5",
            "value": 73.0312238305018,
            "unit": "us/iter",
            "extra": "iterations: 9534\ncpu: 72.98689804908638 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/10",
            "value": 55.722104128241234,
            "unit": "us/iter",
            "extra": "iterations: 12475\ncpu: 55.71552897795792 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/15",
            "value": 50.914423445676846,
            "unit": "us/iter",
            "extra": "iterations: 13768\ncpu: 50.91244777745489 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/20",
            "value": 48.53222681486904,
            "unit": "us/iter",
            "extra": "iterations: 14395\ncpu: 48.524186939909164 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/25",
            "value": 46.920892895434186,
            "unit": "us/iter",
            "extra": "iterations: 14920\ncpu: 46.91756126005267 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/30",
            "value": 46.142423204133515,
            "unit": "us/iter",
            "extra": "iterations: 15118\ncpu: 46.13805701812414 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/50",
            "value": 44.74157509439843,
            "unit": "us/iter",
            "extra": "iterations: 15627\ncpu: 44.737803929096565 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/75",
            "value": 43.555840936123204,
            "unit": "us/iter",
            "extra": "iterations: 15981\ncpu: 43.551623615543775 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/100",
            "value": 43.579066048309016,
            "unit": "us/iter",
            "extra": "iterations: 16064\ncpu: 43.57355092131559 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/150",
            "value": 43.39555728263579,
            "unit": "us/iter",
            "extra": "iterations: 16148\ncpu: 43.392667822641265 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/200",
            "value": 43.097626864761025,
            "unit": "us/iter",
            "extra": "iterations: 16222\ncpu: 43.09448033534692 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/2",
            "value": 448.60081334190744,
            "unit": "us/iter",
            "extra": "iterations: 1559\ncpu: 448.5563758819712 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/5",
            "value": 145.55191769118335,
            "unit": "us/iter",
            "extra": "iterations: 4799\ncpu: 145.5366807668234 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/10",
            "value": 109.04985484369104,
            "unit": "us/iter",
            "extra": "iterations: 6462\ncpu: 109.04358170844918 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/15",
            "value": 99.01638412832281,
            "unit": "us/iter",
            "extra": "iterations: 7107\ncpu: 99.01113156043633 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/20",
            "value": 93.63625632446136,
            "unit": "us/iter",
            "extra": "iterations: 7471\ncpu: 93.62790041493463 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/25",
            "value": 92.03581670839367,
            "unit": "us/iter",
            "extra": "iterations: 7589\ncpu: 92.02631058110504 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/30",
            "value": 89.66381031378063,
            "unit": "us/iter",
            "extra": "iterations: 7776\ncpu: 89.6592268518524 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/50",
            "value": 85.99301665844973,
            "unit": "us/iter",
            "extra": "iterations: 8104\ncpu: 85.98574494076959 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/75",
            "value": 88.52073785583795,
            "unit": "us/iter",
            "extra": "iterations: 8255\ncpu: 88.45210393700944 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/100",
            "value": 84.03692571222655,
            "unit": "us/iter",
            "extra": "iterations: 8319\ncpu: 84.0321265777127 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/150",
            "value": 83.44850208357667,
            "unit": "us/iter",
            "extra": "iterations: 8399\ncpu: 83.44167912846609 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/200",
            "value": 83.2585484599867,
            "unit": "us/iter",
            "extra": "iterations: 8409\ncpu: 83.25312022832462 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/2",
            "value": 2309.4258947367052,
            "unit": "us/iter",
            "extra": "iterations: 285\ncpu: 2309.2969614034496 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/5",
            "value": 758.7828902045221,
            "unit": "us/iter",
            "extra": "iterations: 929\ncpu: 758.7402411195008 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/10",
            "value": 549.4600883280657,
            "unit": "us/iter",
            "extra": "iterations: 1268\ncpu: 549.4323880126364 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/15",
            "value": 490.3568047753202,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 490.33089817417124 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/20",
            "value": 465.1560119521927,
            "unit": "us/iter",
            "extra": "iterations: 1506\ncpu: 465.1315039840544 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/25",
            "value": 449.2404470814314,
            "unit": "us/iter",
            "extra": "iterations: 1559\ncpu: 449.2196978832699 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/30",
            "value": 440.9558519448612,
            "unit": "us/iter",
            "extra": "iterations: 1594\ncpu: 440.92814805522966 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/50",
            "value": 423.96684712991936,
            "unit": "us/iter",
            "extra": "iterations: 1655\ncpu: 423.9203613293199 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/75",
            "value": 413.3304438535219,
            "unit": "us/iter",
            "extra": "iterations: 1692\ncpu: 413.3085484633632 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/100",
            "value": 408.1781648027973,
            "unit": "us/iter",
            "extra": "iterations: 1699\ncpu: 408.1376397881005 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/150",
            "value": 405.57529183553237,
            "unit": "us/iter",
            "extra": "iterations: 1727\ncpu: 405.55571163866216 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/200",
            "value": 405.73967033598353,
            "unit": "us/iter",
            "extra": "iterations: 1726\ncpu: 405.7125260718338 us\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "richard.schaefer@zoho.com",
            "name": "Richard A. Schäfer",
            "username": "riasc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f041e431d762d6148da33744299f636f05115780",
          "message": "Fix edge index mismatch in serialization roundtrip (#300)\n\n* Fix edge index mismatch in serialization roundtrip\n\nDuring serialization, key_index was built by iterating key_storage\nsequentially (insertion order). During deserialization, keys are added\nto key_storage via DFS pre-order traversal of tree nodes. When internal\nseparator keys exist (from node splits), these orders diverge, causing\nedge source/target indices to map to wrong keys after roundtrip.\n\nFix: build key_index via DFS traversal matching deserialization order.\n\nFixes #299\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use order=3 in serialization roundtrip test to trigger node splits\n\nThe test previously used order=5, which fit all 3 keys in a single leaf\nnode — no splits, no separator keys, so the edge index mismatch never\nmanifested. Order=3 forces a split, exercising the fix.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Update CHANGELOG with PR #300 changes\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-07T22:00:08-05:00",
          "tree_id": "e2ebc1faae0f0f24d128673f60f052ef96d619bd",
          "url": "https://github.com/genogrove/genogrove/commit/f041e431d762d6148da33744299f636f05115780"
        },
        "date": 1775617723792,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.00789685725517,
            "unit": "us/iter",
            "extra": "iterations: 20428\ncpu: 34.005600254552576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.897573423361333,
            "unit": "us/iter",
            "extra": "iterations: 87084\ncpu: 7.894757728170501 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.2170983089131315,
            "unit": "us/iter",
            "extra": "iterations: 133701\ncpu: 5.216608424768699 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.296614915572224,
            "unit": "us/iter",
            "extra": "iterations: 162032\ncpu: 4.296108472400511 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9846964238109543,
            "unit": "us/iter",
            "extra": "iterations: 176305\ncpu: 3.9842890388814847 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8784389079673542,
            "unit": "us/iter",
            "extra": "iterations: 179958\ncpu: 3.8779416975071923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6671886478615217,
            "unit": "us/iter",
            "extra": "iterations: 188176\ncpu: 3.6669951481591716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/50",
            "value": 3.4337429119601115,
            "unit": "us/iter",
            "extra": "iterations: 203794\ncpu: 3.433202837178718 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/75",
            "value": 3.4207998810904288,
            "unit": "us/iter",
            "extra": "iterations: 205198\ncpu: 3.420522821859857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/100",
            "value": 3.141607496009093,
            "unit": "us/iter",
            "extra": "iterations: 222385\ncpu: 3.1412785214830157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/150",
            "value": 3.074615023413721,
            "unit": "us/iter",
            "extra": "iterations: 233409\ncpu: 3.0743163288476416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/200",
            "value": 3.0327920891456293,
            "unit": "us/iter",
            "extra": "iterations: 234134\ncpu: 3.032539848975373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 277.8063696421566,
            "unit": "us/iter",
            "extra": "iterations: 2543\ncpu: 277.7737668108537 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.400596800298636,
            "unit": "us/iter",
            "extra": "iterations: 16064\ncpu: 43.3958616782869 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.00026983170412,
            "unit": "us/iter",
            "extra": "iterations: 23233\ncpu: 29.994587526363333 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.360022866625037,
            "unit": "us/iter",
            "extra": "iterations: 27726\ncpu: 25.357796220154313 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.540511847822167,
            "unit": "us/iter",
            "extra": "iterations: 27389\ncpu: 25.536131038007955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.76594536258611,
            "unit": "us/iter",
            "extra": "iterations: 28076\ncpu: 24.764648739136636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.21979124112753,
            "unit": "us/iter",
            "extra": "iterations: 28885\ncpu: 24.215995880214642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/50",
            "value": 21.769920679357586,
            "unit": "us/iter",
            "extra": "iterations: 32148\ncpu: 21.767316069428944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/75",
            "value": 21.50106576103755,
            "unit": "us/iter",
            "extra": "iterations: 32390\ncpu: 21.498213769681936 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/100",
            "value": 19.9571716809112,
            "unit": "us/iter",
            "extra": "iterations: 35100\ncpu: 19.95466823361831 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/150",
            "value": 19.930572170093328,
            "unit": "us/iter",
            "extra": "iterations: 35063\ncpu: 19.92846154065544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/200",
            "value": 19.730939670675667,
            "unit": "us/iter",
            "extra": "iterations: 35588\ncpu: 19.72819217151843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 673.224875575997,
            "unit": "us/iter",
            "extra": "iterations: 1085\ncpu: 673.1703317972368 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 117.14543125103988,
            "unit": "us/iter",
            "extra": "iterations: 5971\ncpu: 117.12255501590984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.11987359609853,
            "unit": "us/iter",
            "extra": "iterations: 9438\ncpu: 70.11024772197499 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.621517818055366,
            "unit": "us/iter",
            "extra": "iterations: 11421\ncpu: 60.611010419402874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.89363231642737,
            "unit": "us/iter",
            "extra": "iterations: 11276\ncpu: 63.880958052501036 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.02138557338416,
            "unit": "us/iter",
            "extra": "iterations: 11964\ncpu: 58.01896180207278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.249054282913235,
            "unit": "us/iter",
            "extra": "iterations: 11219\ncpu: 62.23876245654691 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/50",
            "value": 55.94460615831189,
            "unit": "us/iter",
            "extra": "iterations: 12406\ncpu: 55.93715516685477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/75",
            "value": 55.54009508716375,
            "unit": "us/iter",
            "extra": "iterations: 12620\ncpu: 55.53594231378744 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/100",
            "value": 51.08071604298146,
            "unit": "us/iter",
            "extra": "iterations: 13495\ncpu: 51.07406076324567 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/150",
            "value": 48.199702152856474,
            "unit": "us/iter",
            "extra": "iterations: 14353\ncpu: 48.197064028426304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/200",
            "value": 46.21035734293679,
            "unit": "us/iter",
            "extra": "iterations: 14994\ncpu: 46.20356836067753 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3746.544946808471,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3745.9690106383027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.9826623876953,
            "unit": "us/iter",
            "extra": "iterations: 779\ncpu: 903.8181681643078 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 614.7966267482312,
            "unit": "us/iter",
            "extra": "iterations: 1144\ncpu: 614.750912587414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 507.4250516363464,
            "unit": "us/iter",
            "extra": "iterations: 1375\ncpu: 507.3230799999971 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 485.7623588850085,
            "unit": "us/iter",
            "extra": "iterations: 1435\ncpu: 485.7345825783999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.20640222366785,
            "unit": "us/iter",
            "extra": "iterations: 1529\ncpu: 459.1597220405503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 444.89466053300697,
            "unit": "us/iter",
            "extra": "iterations: 1576\ncpu: 444.818244923857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/50",
            "value": 447.41521966795494,
            "unit": "us/iter",
            "extra": "iterations: 1566\ncpu: 447.3592554278412 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/75",
            "value": 476.98616146540536,
            "unit": "us/iter",
            "extra": "iterations: 1474\ncpu: 476.92228765264446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/100",
            "value": 487.61562273361875,
            "unit": "us/iter",
            "extra": "iterations: 1434\ncpu: 487.57180474198105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/150",
            "value": 467.7650473965495,
            "unit": "us/iter",
            "extra": "iterations: 1498\ncpu: 467.7034839786358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/200",
            "value": 457.58425310658447,
            "unit": "us/iter",
            "extra": "iterations: 1529\ncpu: 457.51193459777323 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/2",
            "value": 25.316646809895275,
            "unit": "us/iter",
            "extra": "iterations: 27648\ncpu: 25.313959418402806 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.968280319510604,
            "unit": "us/iter",
            "extra": "iterations: 117680\ncpu: 5.967574813052304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.656294947939816,
            "unit": "us/iter",
            "extra": "iterations: 150691\ncpu: 4.655723573405168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9219605290031527,
            "unit": "us/iter",
            "extra": "iterations: 176256\ncpu: 3.921244757625295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8365582003535526,
            "unit": "us/iter",
            "extra": "iterations: 183925\ncpu: 3.8364101400027075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.737409963500383,
            "unit": "us/iter",
            "extra": "iterations: 187946\ncpu: 3.7368464133314956 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.57244562381632,
            "unit": "us/iter",
            "extra": "iterations: 195867\ncpu: 3.5721120913681466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/50",
            "value": 3.611002906453485,
            "unit": "us/iter",
            "extra": "iterations: 194395\ncpu: 3.6105569124720462 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/75",
            "value": 3.5625489209186543,
            "unit": "us/iter",
            "extra": "iterations: 195305\ncpu: 3.5622924451498834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/100",
            "value": 3.6912682674210178,
            "unit": "us/iter",
            "extra": "iterations: 190202\ncpu: 3.6908024521298612 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/150",
            "value": 3.4634229880401617,
            "unit": "us/iter",
            "extra": "iterations: 202514\ncpu: 3.463014655776874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/200",
            "value": 3.488689217569713,
            "unit": "us/iter",
            "extra": "iterations: 200938\ncpu: 3.488390757348069 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 150.9213065208035,
            "unit": "us/iter",
            "extra": "iterations: 4662\ncpu: 150.90286465036442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.465826321902234,
            "unit": "us/iter",
            "extra": "iterations: 22392\ncpu: 31.46181823865676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.806623566754887,
            "unit": "us/iter",
            "extra": "iterations: 30874\ncpu: 22.804120230614675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.041351607620225,
            "unit": "us/iter",
            "extra": "iterations: 34803\ncpu: 20.038852139183504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.966122155212027,
            "unit": "us/iter",
            "extra": "iterations: 35152\ncpu: 19.963851587391687 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.024241417648074,
            "unit": "us/iter",
            "extra": "iterations: 36878\ncpu: 19.021128260751517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.48309501950315,
            "unit": "us/iter",
            "extra": "iterations: 37687\ncpu: 18.482292090110604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/50",
            "value": 17.994055171527684,
            "unit": "us/iter",
            "extra": "iterations: 38915\ncpu: 17.990496389566697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/75",
            "value": 18.035243269057375,
            "unit": "us/iter",
            "extra": "iterations: 38739\ncpu: 18.03410170629072 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/100",
            "value": 18.046805423100235,
            "unit": "us/iter",
            "extra": "iterations: 38797\ncpu: 18.04493092249427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/150",
            "value": 18.25994892150094,
            "unit": "us/iter",
            "extra": "iterations: 38294\ncpu: 18.258722959210278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/200",
            "value": 18.329650171857477,
            "unit": "us/iter",
            "extra": "iterations: 38113\ncpu: 18.327858421011364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.0346563725622,
            "unit": "us/iter",
            "extra": "iterations: 2040\ncpu: 344.00285882352574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.73693548077514,
            "unit": "us/iter",
            "extra": "iterations: 10431\ncpu: 66.73264250790892 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.89469753950837,
            "unit": "us/iter",
            "extra": "iterations: 14997\ncpu: 47.891721610989 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.3724349119462,
            "unit": "us/iter",
            "extra": "iterations: 16808\ncpu: 41.365595133269295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.15956150234686,
            "unit": "us/iter",
            "extra": "iterations: 17040\ncpu: 41.158525293426635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.59883140195634,
            "unit": "us/iter",
            "extra": "iterations: 17604\ncpu: 39.591358895705824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 39.040347071108215,
            "unit": "us/iter",
            "extra": "iterations: 18198\ncpu: 39.03574689526322 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/50",
            "value": 37.783455182589435,
            "unit": "us/iter",
            "extra": "iterations: 18977\ncpu: 37.77796696000428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/75",
            "value": 37.0995256898188,
            "unit": "us/iter",
            "extra": "iterations: 18918\ncpu: 37.094231895548724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/100",
            "value": 37.72679887326912,
            "unit": "us/iter",
            "extra": "iterations: 18993\ncpu: 37.721336808297615 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/150",
            "value": 38.00583749533948,
            "unit": "us/iter",
            "extra": "iterations: 18781\ncpu: 38.002153399712725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/200",
            "value": 39.49587236104981,
            "unit": "us/iter",
            "extra": "iterations: 18568\ncpu: 39.47805401766481 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1866.5230817438403,
            "unit": "us/iter",
            "extra": "iterations: 367\ncpu: 1866.2133760217973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 409.0906727060402,
            "unit": "us/iter",
            "extra": "iterations: 1711\ncpu: 409.0427942723593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 272.3483891245677,
            "unit": "us/iter",
            "extra": "iterations: 2593\ncpu: 272.293654068646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 230.2394071975835,
            "unit": "us/iter",
            "extra": "iterations: 3001\ncpu: 230.22221559480155 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 224.97187887595794,
            "unit": "us/iter",
            "extra": "iterations: 3096\ncpu: 224.9293546511596 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 209.86385084032077,
            "unit": "us/iter",
            "extra": "iterations: 3332\ncpu: 209.847244297719 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 203.95647564888543,
            "unit": "us/iter",
            "extra": "iterations: 3429\ncpu: 203.91852872557757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/50",
            "value": 195.8890092696703,
            "unit": "us/iter",
            "extra": "iterations: 3560\ncpu: 195.87513820224757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/75",
            "value": 188.03743054053103,
            "unit": "us/iter",
            "extra": "iterations: 3700\ncpu: 188.01735243243144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/100",
            "value": 185.0403525065938,
            "unit": "us/iter",
            "extra": "iterations: 3790\ncpu: 185.01565145118738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/150",
            "value": 186.81348133004914,
            "unit": "us/iter",
            "extra": "iterations: 3669\ncpu: 186.7896928318317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/200",
            "value": 192.64166272825526,
            "unit": "us/iter",
            "extra": "iterations: 3724\ncpu: 192.6297314715394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/2",
            "value": 15.056445641234957,
            "unit": "us/iter",
            "extra": "iterations: 46699\ncpu: 15.055979764020499 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/5",
            "value": 3.1885394532819102,
            "unit": "us/iter",
            "extra": "iterations: 219272\ncpu: 3.188139497975106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/10",
            "value": 2.28721944065183,
            "unit": "us/iter",
            "extra": "iterations: 306142\ncpu: 2.287084614329297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/15",
            "value": 1.9178654701552933,
            "unit": "us/iter",
            "extra": "iterations: 366900\ncpu: 1.9176198010356886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/20",
            "value": 1.7739879422222684,
            "unit": "us/iter",
            "extra": "iterations: 393439\ncpu: 1.7738506528330893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/25",
            "value": 1.777668905447432,
            "unit": "us/iter",
            "extra": "iterations: 393220\ncpu: 1.7774418798636982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/30",
            "value": 1.5789917416214674,
            "unit": "us/iter",
            "extra": "iterations: 442823\ncpu: 1.578896247484889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/50",
            "value": 1.5360483189220056,
            "unit": "us/iter",
            "extra": "iterations: 455660\ncpu: 1.535919703287558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/75",
            "value": 1.4797049500055304,
            "unit": "us/iter",
            "extra": "iterations: 481454\ncpu: 1.4795314297939293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/100",
            "value": 1.4733582570166972,
            "unit": "us/iter",
            "extra": "iterations: 475759\ncpu: 1.47317613749818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/150",
            "value": 1.3061478220833294,
            "unit": "us/iter",
            "extra": "iterations: 536476\ncpu: 1.3059518002669217 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/100/200",
            "value": 1.3207499373694502,
            "unit": "us/iter",
            "extra": "iterations: 526900\ncpu: 1.3207013702789883 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/2",
            "value": 129.03010408505807,
            "unit": "us/iter",
            "extra": "iterations: 5361\ncpu: 129.01402462227287 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/5",
            "value": 25.522242539219032,
            "unit": "us/iter",
            "extra": "iterations: 27410\ncpu: 25.521077964246857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/10",
            "value": 13.988577928829029,
            "unit": "us/iter",
            "extra": "iterations: 50020\ncpu: 13.985011335465815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/15",
            "value": 11.372223506306462,
            "unit": "us/iter",
            "extra": "iterations: 61609\ncpu: 11.37078444707765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/20",
            "value": 9.647266035535495,
            "unit": "us/iter",
            "extra": "iterations: 72885\ncpu: 9.646296233792919 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/25",
            "value": 8.73071151743991,
            "unit": "us/iter",
            "extra": "iterations: 80504\ncpu: 8.729404923978906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/30",
            "value": 8.269563096950709,
            "unit": "us/iter",
            "extra": "iterations: 84806\ncpu: 8.269183064877522 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/50",
            "value": 7.329242788234859,
            "unit": "us/iter",
            "extra": "iterations: 95573\ncpu: 7.328592834796398 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/75",
            "value": 7.018638523938967,
            "unit": "us/iter",
            "extra": "iterations: 99481\ncpu: 7.017871392527212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/100",
            "value": 6.627594882972008,
            "unit": "us/iter",
            "extra": "iterations: 105530\ncpu: 6.627175457216001 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/150",
            "value": 6.622646556948905,
            "unit": "us/iter",
            "extra": "iterations: 105604\ncpu: 6.621906092572249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/500/200",
            "value": 6.560234714504348,
            "unit": "us/iter",
            "extra": "iterations: 106359\ncpu: 6.5598809033556025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/2",
            "value": 253.55269719080664,
            "unit": "us/iter",
            "extra": "iterations: 2741\ncpu: 253.52211784020201 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/5",
            "value": 52.51224999999917,
            "unit": "us/iter",
            "extra": "iterations: 13340\ncpu: 52.50800164917542 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/10",
            "value": 27.502368519677212,
            "unit": "us/iter",
            "extra": "iterations: 25616\ncpu: 27.48175644128652 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/15",
            "value": 22.219575523073384,
            "unit": "us/iter",
            "extra": "iterations: 31401\ncpu: 22.21734772777931 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/20",
            "value": 19.07876641957811,
            "unit": "us/iter",
            "extra": "iterations: 36694\ncpu: 19.076255763885122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/25",
            "value": 17.833555029646902,
            "unit": "us/iter",
            "extra": "iterations: 39297\ncpu: 17.832154566506524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/30",
            "value": 16.6858069572691,
            "unit": "us/iter",
            "extra": "iterations: 41913\ncpu: 16.685387087538622 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/50",
            "value": 14.638686762340335,
            "unit": "us/iter",
            "extra": "iterations: 47871\ncpu: 14.636509410707863 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/75",
            "value": 13.96981825613625,
            "unit": "us/iter",
            "extra": "iterations: 50153\ncpu: 13.968707116224321 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/100",
            "value": 13.541313694390976,
            "unit": "us/iter",
            "extra": "iterations: 51700\ncpu: 13.539443346228154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/150",
            "value": 13.301268790679247,
            "unit": "us/iter",
            "extra": "iterations: 52699\ncpu: 13.300485948500091 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/1000/200",
            "value": 13.31104344604883,
            "unit": "us/iter",
            "extra": "iterations: 52640\ncpu: 13.309740786474025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/2",
            "value": 1231.7705649122634,
            "unit": "us/iter",
            "extra": "iterations: 570\ncpu: 1231.6499701754467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/5",
            "value": 250.87390444048418,
            "unit": "us/iter",
            "extra": "iterations: 2815\ncpu: 250.85901314386496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/10",
            "value": 135.56974247684474,
            "unit": "us/iter",
            "extra": "iterations: 5184\ncpu: 135.5518391203684 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/15",
            "value": 109.25878734295003,
            "unit": "us/iter",
            "extra": "iterations: 6447\ncpu: 109.25568636575485 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/20",
            "value": 94.89105654237223,
            "unit": "us/iter",
            "extra": "iterations: 7375\ncpu: 94.88136149152756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/25",
            "value": 88.13040958990624,
            "unit": "us/iter",
            "extra": "iterations: 7925\ncpu: 88.12271596214599 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/30",
            "value": 83.180295794723,
            "unit": "us/iter",
            "extra": "iterations: 8418\ncpu: 83.16863518650544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/50",
            "value": 75.10264930592717,
            "unit": "us/iter",
            "extra": "iterations: 9293\ncpu: 75.09208156676975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/75",
            "value": 70.0763032026336,
            "unit": "us/iter",
            "extra": "iterations: 10023\ncpu: 70.07350843060912 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/100",
            "value": 67.79508869716662,
            "unit": "us/iter",
            "extra": "iterations: 10316\ncpu: 67.78107066692445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/150",
            "value": 67.47077284544953,
            "unit": "us/iter",
            "extra": "iterations: 10385\ncpu: 67.46487828598991 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted/5000/200",
            "value": 65.86557928437057,
            "unit": "us/iter",
            "extra": "iterations: 10620\ncpu: 65.86388879472601 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_sorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/2",
            "value": 28.73484943589714,
            "unit": "us/iter",
            "extra": "iterations: 24375\ncpu: 28.731070153846815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/5",
            "value": 5.758080660187014,
            "unit": "us/iter",
            "extra": "iterations: 121299\ncpu: 5.757762677351175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/10",
            "value": 3.857398676482904,
            "unit": "us/iter",
            "extra": "iterations: 181335\ncpu: 3.856779369674955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/15",
            "value": 3.0066869326733126,
            "unit": "us/iter",
            "extra": "iterations: 231899\ncpu: 3.0061248129573577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/20",
            "value": 2.631813835634976,
            "unit": "us/iter",
            "extra": "iterations: 265604\ncpu: 2.6315629583892335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/25",
            "value": 2.6586394283132915,
            "unit": "us/iter",
            "extra": "iterations: 263501\ncpu: 2.6586198230746243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/30",
            "value": 2.4703031671491935,
            "unit": "us/iter",
            "extra": "iterations: 283220\ncpu: 2.4700330061435523 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/50",
            "value": 2.5179633667624657,
            "unit": "us/iter",
            "extra": "iterations: 292958\ncpu: 2.5178916704783907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/75",
            "value": 2.33396625519607,
            "unit": "us/iter",
            "extra": "iterations: 300224\ncpu: 2.333652979108983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/100",
            "value": 2.3279710709929096,
            "unit": "us/iter",
            "extra": "iterations: 300114\ncpu: 2.3278945700633376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/150",
            "value": 2.148750019178702,
            "unit": "us/iter",
            "extra": "iterations: 325881\ncpu: 2.148508114925353 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/100/200",
            "value": 2.1586744141618186,
            "unit": "us/iter",
            "extra": "iterations: 324535\ncpu: 2.158625799990725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/2",
            "value": 134.43215714009426,
            "unit": "us/iter",
            "extra": "iterations: 5161\ncpu: 134.41270083317661 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/5",
            "value": 31.306645953167397,
            "unit": "us/iter",
            "extra": "iterations: 22079\ncpu: 31.303693192626945 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/10",
            "value": 19.829445846357597,
            "unit": "us/iter",
            "extra": "iterations: 34873\ncpu: 19.8255221804834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/15",
            "value": 17.191080817029576,
            "unit": "us/iter",
            "extra": "iterations: 40635\ncpu: 17.1903335794266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/20",
            "value": 15.698929317666899,
            "unit": "us/iter",
            "extra": "iterations: 44509\ncpu: 15.697831786829505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/25",
            "value": 14.791936041851965,
            "unit": "us/iter",
            "extra": "iterations: 47406\ncpu: 14.79072311521767 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/30",
            "value": 14.379217638106438,
            "unit": "us/iter",
            "extra": "iterations: 48622\ncpu: 14.378352145119864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/50",
            "value": 13.332357040215715,
            "unit": "us/iter",
            "extra": "iterations: 52193\ncpu: 13.33101139999626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/75",
            "value": 13.006086335081271,
            "unit": "us/iter",
            "extra": "iterations: 53802\ncpu: 13.005739637931713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/100",
            "value": 12.654633830774019,
            "unit": "us/iter",
            "extra": "iterations: 55417\ncpu: 12.653085641590058 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/150",
            "value": 12.741072521793832,
            "unit": "us/iter",
            "extra": "iterations: 54949\ncpu: 12.740259931936821 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/500/200",
            "value": 12.568802996174037,
            "unit": "us/iter",
            "extra": "iterations: 55938\ncpu: 12.567914780649826 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/2",
            "value": 271.08004066615644,
            "unit": "us/iter",
            "extra": "iterations: 2582\ncpu: 271.0253505034881 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/5",
            "value": 64.88415534333788,
            "unit": "us/iter",
            "extra": "iterations: 10995\ncpu: 64.88218653933764 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/10",
            "value": 40.78612700814678,
            "unit": "us/iter",
            "extra": "iterations: 17180\ncpu: 40.78163154831168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/15",
            "value": 35.33971276541907,
            "unit": "us/iter",
            "extra": "iterations: 19827\ncpu: 35.33591703232878 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/20",
            "value": 32.32361586012755,
            "unit": "us/iter",
            "extra": "iterations: 21677\ncpu: 32.32016446002632 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/25",
            "value": 31.050262554440522,
            "unit": "us/iter",
            "extra": "iterations: 22502\ncpu: 31.047124211180307 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/30",
            "value": 30.13174049486979,
            "unit": "us/iter",
            "extra": "iterations: 23198\ncpu: 30.129140270713023 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/50",
            "value": 28.146393721072343,
            "unit": "us/iter",
            "extra": "iterations: 24845\ncpu: 28.143581324209904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/75",
            "value": 27.323977572869776,
            "unit": "us/iter",
            "extra": "iterations: 25594\ncpu: 27.323082597483886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/100",
            "value": 26.869993526011612,
            "unit": "us/iter",
            "extra": "iterations: 25950\ncpu: 26.865441657032264 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/150",
            "value": 26.705607392682673,
            "unit": "us/iter",
            "extra": "iterations: 26161\ncpu: 26.70239902908899 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/1000/200",
            "value": 26.695852403314788,
            "unit": "us/iter",
            "extra": "iterations: 26193\ncpu: 26.69202611384758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/2",
            "value": 1488.0238540771948,
            "unit": "us/iter",
            "extra": "iterations: 466\ncpu: 1487.8643133047428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/5",
            "value": 479.25199314128287,
            "unit": "us/iter",
            "extra": "iterations: 1458\ncpu: 479.17607064471946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/10",
            "value": 361.56447648577705,
            "unit": "us/iter",
            "extra": "iterations: 1935\ncpu: 361.5444196382431 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/15",
            "value": 334.33870999999726,
            "unit": "us/iter",
            "extra": "iterations: 2100\ncpu: 334.2943242857169 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/20",
            "value": 319.450636239174,
            "unit": "us/iter",
            "extra": "iterations: 2191\ncpu: 319.4439917845724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/25",
            "value": 312.33978523489895,
            "unit": "us/iter",
            "extra": "iterations: 2235\ncpu: 312.28931991051286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/30",
            "value": 305.90023763676186,
            "unit": "us/iter",
            "extra": "iterations: 2285\ncpu: 305.886912035008 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/50",
            "value": 297.1245101867649,
            "unit": "us/iter",
            "extra": "iterations: 2356\ncpu: 297.07353650255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/75",
            "value": 291.2801800000153,
            "unit": "us/iter",
            "extra": "iterations: 2400\ncpu: 291.25368500000803 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/100",
            "value": 289.7465488410699,
            "unit": "us/iter",
            "extra": "iterations: 2416\ncpu: 289.7007032284833 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/150",
            "value": 289.9776121011309,
            "unit": "us/iter",
            "extra": "iterations: 2413\ncpu: 289.9678234562756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted/5000/200",
            "value": 288.49116845139844,
            "unit": "us/iter",
            "extra": "iterations: 2428\ncpu: 288.4568859143301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_BigO",
            "value": null,
            "unit": "ns/iter",
            "extra": "iterations: undefined\ncpu: undefined ns\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_bulk_unsorted_RMS",
            "unit": "undefined/iter",
            "extra": "iterations: undefined\ncpu: undefined undefined\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/2",
            "value": 216.9946095060515,
            "unit": "us/iter",
            "extra": "iterations: 3219\ncpu: 216.97916930723693 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/5",
            "value": 157.1054885547505,
            "unit": "us/iter",
            "extra": "iterations: 4456\ncpu: 157.08388128366465 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/10",
            "value": 154.0119118426824,
            "unit": "us/iter",
            "extra": "iterations: 4526\ncpu: 154.00436787450235 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/15",
            "value": 152.97168053136085,
            "unit": "us/iter",
            "extra": "iterations: 4592\ncpu: 152.94718837108263 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/20",
            "value": 150.56079290964243,
            "unit": "us/iter",
            "extra": "iterations: 4626\ncpu: 150.5485773886701 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/25",
            "value": 150.13278188062864,
            "unit": "us/iter",
            "extra": "iterations: 4658\ncpu: 150.11715714898799 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/30",
            "value": 150.27210358137975,
            "unit": "us/iter",
            "extra": "iterations: 4663\ncpu: 150.26489513188994 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/50",
            "value": 148.93779295715171,
            "unit": "us/iter",
            "extra": "iterations: 4714\ncpu: 148.93197857445935 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/75",
            "value": 147.56143362832327,
            "unit": "us/iter",
            "extra": "iterations: 4746\ncpu: 147.54017045933495 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/100",
            "value": 147.85658910786194,
            "unit": "us/iter",
            "extra": "iterations: 4719\ncpu: 147.85310108074106 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/150",
            "value": 145.1118570244526,
            "unit": "us/iter",
            "extra": "iterations: 4826\ncpu: 145.0866075424771 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/100/200",
            "value": 145.2945076891038,
            "unit": "us/iter",
            "extra": "iterations: 4812\ncpu: 145.28345552785095 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/2",
            "value": 1074.6974831288703,
            "unit": "us/iter",
            "extra": "iterations: 652\ncpu: 1074.5702837423592 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/5",
            "value": 760.0559629225844,
            "unit": "us/iter",
            "extra": "iterations: 917\ncpu: 759.9570687022775 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/10",
            "value": 709.8821803278752,
            "unit": "us/iter",
            "extra": "iterations: 976\ncpu: 709.850305327866 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/15",
            "value": 697.7853379446371,
            "unit": "us/iter",
            "extra": "iterations: 1012\ncpu: 697.7183280632375 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/20",
            "value": 694.3727888445816,
            "unit": "us/iter",
            "extra": "iterations: 1004\ncpu: 694.3390747011789 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/25",
            "value": 684.8659533980623,
            "unit": "us/iter",
            "extra": "iterations: 1030\ncpu: 684.8268019417475 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/30",
            "value": 680.2593169774369,
            "unit": "us/iter",
            "extra": "iterations: 1019\ncpu: 680.1676977428992 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/50",
            "value": 674.8640332355985,
            "unit": "us/iter",
            "extra": "iterations: 1023\ncpu: 674.8161964809528 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/75",
            "value": 673.9927874999825,
            "unit": "us/iter",
            "extra": "iterations: 1040\ncpu: 673.8999701923103 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/100",
            "value": 673.4356349663273,
            "unit": "us/iter",
            "extra": "iterations: 1041\ncpu: 673.3659221902013 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/150",
            "value": 670.1369389313115,
            "unit": "us/iter",
            "extra": "iterations: 1048\ncpu: 670.118845419849 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/500/200",
            "value": 666.8597219047678,
            "unit": "us/iter",
            "extra": "iterations: 1050\ncpu: 666.7778533333258 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/2",
            "value": 2205.885639751516,
            "unit": "us/iter",
            "extra": "iterations: 322\ncpu: 2201.685642857068 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/5",
            "value": 1642.4863341175671,
            "unit": "us/iter",
            "extra": "iterations: 425\ncpu: 1642.2712305882883 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/10",
            "value": 1518.58425269969,
            "unit": "us/iter",
            "extra": "iterations: 463\ncpu: 1518.4788250540107 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/15",
            "value": 1462.108334033568,
            "unit": "us/iter",
            "extra": "iterations: 476\ncpu: 1461.9688592436507 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/20",
            "value": 1457.2498440749177,
            "unit": "us/iter",
            "extra": "iterations: 481\ncpu: 1457.180382536389 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/25",
            "value": 1448.3965652173945,
            "unit": "us/iter",
            "extra": "iterations: 483\ncpu: 1448.279113871652 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/30",
            "value": 1443.8524742268248,
            "unit": "us/iter",
            "extra": "iterations: 485\ncpu: 1443.6951278350264 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/50",
            "value": 1432.3789550102342,
            "unit": "us/iter",
            "extra": "iterations: 489\ncpu: 1432.2633374233098 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/75",
            "value": 1419.032967611346,
            "unit": "us/iter",
            "extra": "iterations: 494\ncpu: 1418.7885890688174 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/100",
            "value": 1421.1279939270933,
            "unit": "us/iter",
            "extra": "iterations: 494\ncpu: 1421.0497105263078 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/150",
            "value": 1411.8273360323244,
            "unit": "us/iter",
            "extra": "iterations: 494\ncpu: 1411.7330425101302 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/1000/200",
            "value": 1411.4326854838516,
            "unit": "us/iter",
            "extra": "iterations: 496\ncpu: 1411.292868951593 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/2",
            "value": 10945.115969231596,
            "unit": "us/iter",
            "extra": "iterations: 65\ncpu: 10944.33683076921 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/5",
            "value": 9507.0792837838,
            "unit": "us/iter",
            "extra": "iterations: 74\ncpu: 9505.827418918769 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/10",
            "value": 8826.85121518989,
            "unit": "us/iter",
            "extra": "iterations: 79\ncpu: 8826.357873417663 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/15",
            "value": 8613.29386419727,
            "unit": "us/iter",
            "extra": "iterations: 81\ncpu: 8612.189098765433 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/20",
            "value": 8525.759451219566,
            "unit": "us/iter",
            "extra": "iterations: 82\ncpu: 8524.947792682893 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/25",
            "value": 8451.532277109047,
            "unit": "us/iter",
            "extra": "iterations: 83\ncpu: 8450.854795180625 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/30",
            "value": 8365.768666666083,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8364.09698809536 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/50",
            "value": 8314.914869048029,
            "unit": "us/iter",
            "extra": "iterations: 84\ncpu: 8314.326809523565 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/75",
            "value": 8244.97247058857,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8244.024129411668 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/100",
            "value": 8310.627023529512,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8309.026517646851 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/150",
            "value": 8247.76208235308,
            "unit": "us/iter",
            "extra": "iterations: 85\ncpu: 8247.157976470522 us\nthreads: 1"
          },
          {
            "name": "BM_serialization_size/5000/200",
            "value": 8184.310360464616,
            "unit": "us/iter",
            "extra": "iterations: 86\ncpu: 8182.574430232435 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/2",
            "value": 48.75744294167464,
            "unit": "us/iter",
            "extra": "iterations: 14196\ncpu: 48.75367497886828 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/5",
            "value": 17.937992377853888,
            "unit": "us/iter",
            "extra": "iterations: 39359\ncpu: 17.93449429609553 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/10",
            "value": 14.76788065878395,
            "unit": "us/iter",
            "extra": "iterations: 47360\ncpu: 14.766372867398509 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/15",
            "value": 13.65940571205698,
            "unit": "us/iter",
            "extra": "iterations: 51295\ncpu: 13.657803021737074 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/20",
            "value": 12.825722393143513,
            "unit": "us/iter",
            "extra": "iterations: 54606\ncpu: 12.825255557997341 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/25",
            "value": 12.919980314815458,
            "unit": "us/iter",
            "extra": "iterations: 54000\ncpu: 12.91737233333326 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/30",
            "value": 12.45556368376172,
            "unit": "us/iter",
            "extra": "iterations: 56388\ncpu: 12.453917429240306 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/50",
            "value": 12.396006378644605,
            "unit": "us/iter",
            "extra": "iterations: 55968\ncpu: 12.394985777587411 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/75",
            "value": 12.171860955863208,
            "unit": "us/iter",
            "extra": "iterations: 57435\ncpu: 12.169966449029571 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/100",
            "value": 12.193240170106828,
            "unit": "us/iter",
            "extra": "iterations: 57376\ncpu: 12.192722322922595 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/150",
            "value": 12.007696720189061,
            "unit": "us/iter",
            "extra": "iterations: 58418\ncpu: 12.006260775788204 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/100/200",
            "value": 11.855323103559018,
            "unit": "us/iter",
            "extra": "iterations: 58913\ncpu: 11.853930796259188 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/2",
            "value": 223.0145645472188,
            "unit": "us/iter",
            "extra": "iterations: 3114\ncpu: 222.97867469492988 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/5",
            "value": 73.69742227353976,
            "unit": "us/iter",
            "extra": "iterations: 9527\ncpu: 73.68619859346875 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/10",
            "value": 55.855907218193366,
            "unit": "us/iter",
            "extra": "iterations: 12136\ncpu: 55.850061882004944 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/15",
            "value": 51.155121807613796,
            "unit": "us/iter",
            "extra": "iterations: 13587\ncpu: 51.147652829910236 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/20",
            "value": 48.67358390578922,
            "unit": "us/iter",
            "extra": "iterations: 14266\ncpu: 48.67044013738846 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/25",
            "value": 47.44699255851998,
            "unit": "us/iter",
            "extra": "iterations: 14782\ncpu: 47.44172682992857 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/30",
            "value": 46.88864319657409,
            "unit": "us/iter",
            "extra": "iterations: 14941\ncpu: 46.88211224148227 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/50",
            "value": 45.488253621775826,
            "unit": "us/iter",
            "extra": "iterations: 15393\ncpu: 45.48431631260967 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/75",
            "value": 44.496920400227935,
            "unit": "us/iter",
            "extra": "iterations: 15691\ncpu: 44.490287362181796 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/100",
            "value": 44.15617762617746,
            "unit": "us/iter",
            "extra": "iterations: 15831\ncpu: 44.15078851620292 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/150",
            "value": 44.0565061347752,
            "unit": "us/iter",
            "extra": "iterations: 15893\ncpu: 44.051079217265524 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/500/200",
            "value": 43.82540432175971,
            "unit": "us/iter",
            "extra": "iterations: 16012\ncpu: 43.81901692480634 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/2",
            "value": 449.8780607805647,
            "unit": "us/iter",
            "extra": "iterations: 1563\ncpu: 449.8643064619315 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/5",
            "value": 145.68381327192046,
            "unit": "us/iter",
            "extra": "iterations: 4777\ncpu: 145.65975675110164 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/10",
            "value": 110.62116263910981,
            "unit": "us/iter",
            "extra": "iterations: 6290\ncpu: 110.6004669316378 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/15",
            "value": 99.37713068827708,
            "unit": "us/iter",
            "extra": "iterations: 7032\ncpu: 99.37053626279965 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/20",
            "value": 94.46146553352241,
            "unit": "us/iter",
            "extra": "iterations: 7413\ncpu: 94.443583704301 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/25",
            "value": 92.86109612320607,
            "unit": "us/iter",
            "extra": "iterations: 7532\ncpu: 92.85251301115386 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/30",
            "value": 90.88763447018646,
            "unit": "us/iter",
            "extra": "iterations: 7682\ncpu: 90.8701286123425 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/50",
            "value": 87.65404272230604,
            "unit": "us/iter",
            "extra": "iterations: 8052\ncpu: 87.64110817188265 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/75",
            "value": 85.71841542227779,
            "unit": "us/iter",
            "extra": "iterations: 8170\ncpu: 85.70952484700254 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/100",
            "value": 85.17938599051283,
            "unit": "us/iter",
            "extra": "iterations: 8223\ncpu: 85.1614081235565 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/150",
            "value": 84.6275046536925,
            "unit": "us/iter",
            "extra": "iterations: 8273\ncpu: 84.62530085821297 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/1000/200",
            "value": 84.51118805898192,
            "unit": "us/iter",
            "extra": "iterations: 8274\ncpu: 84.49657541696874 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/2",
            "value": 2321.7778039868085,
            "unit": "us/iter",
            "extra": "iterations: 301\ncpu: 2321.542498338962 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/5",
            "value": 747.8048245989547,
            "unit": "us/iter",
            "extra": "iterations: 935\ncpu: 747.6751614973562 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/10",
            "value": 552.0597089905377,
            "unit": "us/iter",
            "extra": "iterations: 1268\ncpu: 551.9852176656088 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/15",
            "value": 492.8963907238264,
            "unit": "us/iter",
            "extra": "iterations: 1423\ncpu: 492.81914968376566 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/20",
            "value": 467.7707917222826,
            "unit": "us/iter",
            "extra": "iterations: 1498\ncpu: 467.73319826434215 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/25",
            "value": 452.03615394565475,
            "unit": "us/iter",
            "extra": "iterations: 1546\ncpu: 451.96839909442457 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/30",
            "value": 447.19871636132393,
            "unit": "us/iter",
            "extra": "iterations: 1583\ncpu: 447.13195451675807 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/50",
            "value": 425.916415552844,
            "unit": "us/iter",
            "extra": "iterations: 1646\ncpu: 425.85508809234244 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/75",
            "value": 418.9944806432188,
            "unit": "us/iter",
            "extra": "iterations: 1679\ncpu: 418.9296063132843 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/100",
            "value": 411.2478752207198,
            "unit": "us/iter",
            "extra": "iterations: 1699\ncpu: 411.2301624484948 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/150",
            "value": 409.115142690054,
            "unit": "us/iter",
            "extra": "iterations: 1710\ncpu: 409.05469356724825 us\nthreads: 1"
          },
          {
            "name": "BM_deserialization/5000/200",
            "value": 408.97196489174354,
            "unit": "us/iter",
            "extra": "iterations: 1709\ncpu: 408.92832065537067 us\nthreads: 1"
          }
        ]
      }
    ]
  }
}