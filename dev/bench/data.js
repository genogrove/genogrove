window.BENCHMARK_DATA = {
  "lastUpdate": 1774557929470,
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
          "id": "7b1874572b711997c10ad78246d6c050f5818258",
          "message": "Merge pull request #236 from genogrove/refactor/const-qualifiers-nodiscard-150-156\n\nAdd const qualifiers and targeted [[nodiscard]]",
          "timestamp": "2026-03-16T00:29:59-04:00",
          "tree_id": "d5f47fbe3cb8da7d255e7b514e00e838db46eea8",
          "url": "https://github.com/genogrove/genogrove/commit/7b1874572b711997c10ad78246d6c050f5818258"
        },
        "date": 1773635643068,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.90048763388497,
            "unit": "us/iter",
            "extra": "iterations: 20540\ncpu: 33.89899829600779 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.9847469745290836,
            "unit": "us/iter",
            "extra": "iterations: 91556\ncpu: 7.984179442090087 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.147399326742494,
            "unit": "us/iter",
            "extra": "iterations: 136352\ncpu: 5.14669726149965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.360633254599649,
            "unit": "us/iter",
            "extra": "iterations: 160880\ncpu: 4.360411238189955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.025759173769905,
            "unit": "us/iter",
            "extra": "iterations: 173511\ncpu: 4.025678516059501 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9336979854087146,
            "unit": "us/iter",
            "extra": "iterations: 178051\ncpu: 3.9331711981398554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.732393980192979,
            "unit": "us/iter",
            "extra": "iterations: 187913\ncpu: 3.732015565713917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 276.7333300434215,
            "unit": "us/iter",
            "extra": "iterations: 2533\ncpu: 276.68855151993705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.34688988484258,
            "unit": "us/iter",
            "extra": "iterations: 16065\ncpu: 43.34277161531281 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.26522925107851,
            "unit": "us/iter",
            "extra": "iterations: 22953\ncpu: 30.261926632684176 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.751071061894628,
            "unit": "us/iter",
            "extra": "iterations: 27272\ncpu: 25.748884716925733 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.91757207765442,
            "unit": "us/iter",
            "extra": "iterations: 26631\ncpu: 25.914117231797523 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.053329190084746,
            "unit": "us/iter",
            "extra": "iterations: 27756\ncpu: 25.051059482634336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.62333127208479,
            "unit": "us/iter",
            "extra": "iterations: 28300\ncpu: 24.619979293286235 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 629.2557213706228,
            "unit": "us/iter",
            "extra": "iterations: 1109\ncpu: 629.209247069432 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.80052495543889,
            "unit": "us/iter",
            "extra": "iterations: 5610\ncpu: 124.786990909091 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.37978535483121,
            "unit": "us/iter",
            "extra": "iterations: 9737\ncpu: 71.37279490602869 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.708897663674755,
            "unit": "us/iter",
            "extra": "iterations: 11257\ncpu: 61.7001122856889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.37966350797281,
            "unit": "us/iter",
            "extra": "iterations: 10975\ncpu: 64.37478678815488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.691656761154405,
            "unit": "us/iter",
            "extra": "iterations: 11677\ncpu: 60.69042879164171 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.8490905660364,
            "unit": "us/iter",
            "extra": "iterations: 11130\ncpu: 62.842095867025975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3674.1767277486474,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3674.1424712041935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 910.5128602845922,
            "unit": "us/iter",
            "extra": "iterations: 773\ncpu: 910.4254217335057 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 628.5237904085479,
            "unit": "us/iter",
            "extra": "iterations: 1126\ncpu: 628.4678143872118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 517.6843549337271,
            "unit": "us/iter",
            "extra": "iterations: 1358\ncpu: 517.6738998527239 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.9980877193031,
            "unit": "us/iter",
            "extra": "iterations: 1425\ncpu: 492.9518666666666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.0293460526166,
            "unit": "us/iter",
            "extra": "iterations: 1520\ncpu: 462.9610269736821 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 448.4632827895089,
            "unit": "us/iter",
            "extra": "iterations: 1563\ncpu: 448.442362763916 us\nthreads: 1"
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
            "value": 25.226050862754036,
            "unit": "us/iter",
            "extra": "iterations: 27702\ncpu: 25.22354306548271 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.102528871893114,
            "unit": "us/iter",
            "extra": "iterations: 117675\ncpu: 6.102088854896942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.6764816982024495,
            "unit": "us/iter",
            "extra": "iterations: 156542\ncpu: 4.676175818630145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.988097146661757,
            "unit": "us/iter",
            "extra": "iterations: 175724\ncpu: 3.9880564009469515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.808439959757506,
            "unit": "us/iter",
            "extra": "iterations: 183885\ncpu: 3.808195654893009 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7363145672659557,
            "unit": "us/iter",
            "extra": "iterations: 188141\ncpu: 3.736205128068843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6539810781135955,
            "unit": "us/iter",
            "extra": "iterations: 191260\ncpu: 3.6536748353027226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.10298085513887,
            "unit": "us/iter",
            "extra": "iterations: 4701\ncpu: 148.1007945118051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.470950044602567,
            "unit": "us/iter",
            "extra": "iterations: 22420\ncpu: 31.46925762711886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.576568877124053,
            "unit": "us/iter",
            "extra": "iterations: 29843\ncpu: 23.574940019434994 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.74999667201561,
            "unit": "us/iter",
            "extra": "iterations: 33654\ncpu: 20.74812901883876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.857932288271527,
            "unit": "us/iter",
            "extra": "iterations: 33746\ncpu: 20.85710759793763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.409124538361773,
            "unit": "us/iter",
            "extra": "iterations: 36013\ncpu: 19.407390081359374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.981832361318673,
            "unit": "us/iter",
            "extra": "iterations: 36865\ncpu: 18.981076251186614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.0353452497639,
            "unit": "us/iter",
            "extra": "iterations: 2042\ncpu: 344.00664446620806 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.71047044287977,
            "unit": "us/iter",
            "extra": "iterations: 10522\ncpu: 66.70808753088757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.17268798814985,
            "unit": "us/iter",
            "extra": "iterations: 14852\ncpu: 47.16929760301685 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.64161304321835,
            "unit": "us/iter",
            "extra": "iterations: 16821\ncpu: 41.638817192794924 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.69792885210786,
            "unit": "us/iter",
            "extra": "iterations: 16796\ncpu: 41.69260454870193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.858797732426275,
            "unit": "us/iter",
            "extra": "iterations: 17640\ncpu: 39.854111337868595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.47019678272237,
            "unit": "us/iter",
            "extra": "iterations: 18152\ncpu: 38.46506390480378 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1867.9575466667302,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1867.8098026666514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.01628971963,
            "unit": "us/iter",
            "extra": "iterations: 1712\ncpu: 410.00956717289887 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.2663474739696,
            "unit": "us/iter",
            "extra": "iterations: 2593\ncpu: 269.2447196297722 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.76717075564713,
            "unit": "us/iter",
            "extra": "iterations: 3057\ncpu: 228.75362741249768 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.04111304623058,
            "unit": "us/iter",
            "extra": "iterations: 3158\ncpu: 222.0131865104485 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 217.6135950661862,
            "unit": "us/iter",
            "extra": "iterations: 3324\ncpu: 217.5964344163641 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 204.25754809437421,
            "unit": "us/iter",
            "extra": "iterations: 3306\ncpu: 204.23961433756864 us\nthreads: 1"
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
          "id": "a998393775884695c3458f61c366e17130c130f9",
          "message": "Merge pull request #238 from genogrove/test/query-result-coverage-io-error-checks-174-178\n\nAdd query_result test coverage and IO error checks",
          "timestamp": "2026-03-16T17:48:48-04:00",
          "tree_id": "dd547a498f882cdda90bbc9316e12354c7043c23",
          "url": "https://github.com/genogrove/genogrove/commit/a998393775884695c3458f61c366e17130c130f9"
        },
        "date": 1773697977105,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.28872405682563,
            "unit": "us/iter",
            "extra": "iterations: 21258\ncpu: 33.28595027754257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.602190573369903,
            "unit": "us/iter",
            "extra": "iterations: 92122\ncpu: 7.6008149410564245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.079109203985589,
            "unit": "us/iter",
            "extra": "iterations: 138603\ncpu: 5.0784855594756255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.275402685267945,
            "unit": "us/iter",
            "extra": "iterations: 161995\ncpu: 4.274334942436496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.019340071025011,
            "unit": "us/iter",
            "extra": "iterations: 175431\ncpu: 4.018302056079025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.857861482636874,
            "unit": "us/iter",
            "extra": "iterations: 180786\ncpu: 3.8576677950726257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7252152873276967,
            "unit": "us/iter",
            "extra": "iterations: 188339\ncpu: 3.7249265101757993 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.1738840245855,
            "unit": "us/iter",
            "extra": "iterations: 2604\ncpu: 269.14666090629845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.184752378536636,
            "unit": "us/iter",
            "extra": "iterations: 15766\ncpu: 44.18124578206264 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.723500417124292,
            "unit": "us/iter",
            "extra": "iterations: 22775\ncpu: 30.720107925356782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.518730941377402,
            "unit": "us/iter",
            "extra": "iterations: 27481\ncpu: 25.516508897056177 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.769118623163767,
            "unit": "us/iter",
            "extra": "iterations: 26757\ncpu: 25.767185671039353 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.75115985116751,
            "unit": "us/iter",
            "extra": "iterations: 27951\ncpu: 24.74906869163894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.93143607606211,
            "unit": "us/iter",
            "extra": "iterations: 28135\ncpu: 24.928603305491375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 629.5880054054109,
            "unit": "us/iter",
            "extra": "iterations: 1110\ncpu: 629.5064117117131 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.19100906505348,
            "unit": "us/iter",
            "extra": "iterations: 5626\ncpu: 124.1825049768928 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.417743959392,
            "unit": "us/iter",
            "extra": "iterations: 9850\ncpu: 70.41379959390875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 63.013710171895454,
            "unit": "us/iter",
            "extra": "iterations: 11286\ncpu: 63.00378389154716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.83590332936006,
            "unit": "us/iter",
            "extra": "iterations: 10903\ncpu: 64.83193203705409 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.14095808589513,
            "unit": "us/iter",
            "extra": "iterations: 11619\ncpu: 60.13726060762539 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.78941882438364,
            "unit": "us/iter",
            "extra": "iterations: 11007\ncpu: 62.78869183247025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3670.081643979069,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3669.610984293194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.9552925258051,
            "unit": "us/iter",
            "extra": "iterations: 776\ncpu: 903.9089175257727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.8463155555582,
            "unit": "us/iter",
            "extra": "iterations: 1125\ncpu: 621.7641511111115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.1858377581156,
            "unit": "us/iter",
            "extra": "iterations: 1356\ncpu: 515.1543016224173 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.5745045550081,
            "unit": "us/iter",
            "extra": "iterations: 1427\ncpu: 490.5388451296425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.9036721744842,
            "unit": "us/iter",
            "extra": "iterations: 1513\ncpu: 463.8474725710513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.51345589182665,
            "unit": "us/iter",
            "extra": "iterations: 1553\ncpu: 450.4483805537675 us\nthreads: 1"
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
            "value": 25.072490133105575,
            "unit": "us/iter",
            "extra": "iterations: 28023\ncpu: 25.069797559147798 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.952847664946481,
            "unit": "us/iter",
            "extra": "iterations: 117235\ncpu: 5.952210670874739 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.581975385931617,
            "unit": "us/iter",
            "extra": "iterations: 154302\ncpu: 4.581727566719813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9403577587922185,
            "unit": "us/iter",
            "extra": "iterations: 175923\ncpu: 3.93998455005883 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8022880178482965,
            "unit": "us/iter",
            "extra": "iterations: 185117\ncpu: 3.8017848225716917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.692110913775458,
            "unit": "us/iter",
            "extra": "iterations: 188624\ncpu: 3.6918205901688306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5957241310782986,
            "unit": "us/iter",
            "extra": "iterations: 196249\ncpu: 3.5954437627707363 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.1425680523338,
            "unit": "us/iter",
            "extra": "iterations: 4739\ncpu: 148.12373918548266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.02485013744834,
            "unit": "us/iter",
            "extra": "iterations: 22554\ncpu: 31.022330274009075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.490688306450867,
            "unit": "us/iter",
            "extra": "iterations: 29760\ncpu: 23.48854569892482 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.757154028086305,
            "unit": "us/iter",
            "extra": "iterations: 33825\ncpu: 20.75571479674793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.623425286338264,
            "unit": "us/iter",
            "extra": "iterations: 33876\ncpu: 20.621719594993603 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.590666028097154,
            "unit": "us/iter",
            "extra": "iterations: 36018\ncpu: 19.588004081292688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.91231078087014,
            "unit": "us/iter",
            "extra": "iterations: 37010\ncpu: 18.910042745204017 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 340.49913729307826,
            "unit": "us/iter",
            "extra": "iterations: 2054\ncpu: 340.4706835443038 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.46989728958556,
            "unit": "us/iter",
            "extra": "iterations: 10515\ncpu: 66.46441464574457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.91730525883415,
            "unit": "us/iter",
            "extra": "iterations: 14604\ncpu: 47.911850178033056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.46040361873094,
            "unit": "us/iter",
            "extra": "iterations: 16912\ncpu: 41.455884460737884 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.48578805294325,
            "unit": "us/iter",
            "extra": "iterations: 17226\ncpu: 40.48122396377571 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.646041980197865,
            "unit": "us/iter",
            "extra": "iterations: 17675\ncpu: 39.64080729844442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.363809453310004,
            "unit": "us/iter",
            "extra": "iterations: 18237\ncpu: 38.35831085156524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1873.3503844085715,
            "unit": "us/iter",
            "extra": "iterations: 372\ncpu: 1873.0738064516092 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 407.0558611272415,
            "unit": "us/iter",
            "extra": "iterations: 1721\ncpu: 406.98458744915825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 273.0852296557194,
            "unit": "us/iter",
            "extra": "iterations: 2556\ncpu: 273.0562053990604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.51688130464396,
            "unit": "us/iter",
            "extra": "iterations: 2974\ncpu: 235.49197713517052 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.80522254616957,
            "unit": "us/iter",
            "extra": "iterations: 3087\ncpu: 226.78044055717695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.11409706062793,
            "unit": "us/iter",
            "extra": "iterations: 3266\ncpu: 216.09329730557357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.83172676139657,
            "unit": "us/iter",
            "extra": "iterations: 3378\ncpu: 206.81336826524577 us\nthreads: 1"
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
          "id": "f069545b2cf8afecd208abf0d9e0403946b944e3",
          "message": "Merge pull request #239 from genogrove/test/graph-overlay-typed-tests-176\n\nAdd typed graph overlay tests for all key types",
          "timestamp": "2026-03-16T22:04:19-04:00",
          "tree_id": "b4600408e886c4f4bf7513742b85f8084ae92180",
          "url": "https://github.com/genogrove/genogrove/commit/f069545b2cf8afecd208abf0d9e0403946b944e3"
        },
        "date": 1773713304186,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 29.88236981993663,
            "unit": "us/iter",
            "extra": "iterations: 23214\ncpu: 29.87961247523047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.160697791319207,
            "unit": "us/iter",
            "extra": "iterations: 97479\ncpu: 7.159733357954022 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.938628205933104,
            "unit": "us/iter",
            "extra": "iterations: 143367\ncpu: 4.938279625018308 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.075277772931621,
            "unit": "us/iter",
            "extra": "iterations: 171957\ncpu: 4.075088778008455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.8361866194479677,
            "unit": "us/iter",
            "extra": "iterations: 182414\ncpu: 3.8360619798918907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.799295764478495,
            "unit": "us/iter",
            "extra": "iterations: 184204\ncpu: 3.79913436190311 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.587453500719365,
            "unit": "us/iter",
            "extra": "iterations: 191175\ncpu: 3.587109062377405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 268.11748234843407,
            "unit": "us/iter",
            "extra": "iterations: 2606\ncpu: 268.096853031466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 40.91118308220387,
            "unit": "us/iter",
            "extra": "iterations: 17189\ncpu: 40.90741189132584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 28.01626027067208,
            "unit": "us/iter",
            "extra": "iterations: 24901\ncpu: 28.014327617364728 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 23.840011989997603,
            "unit": "us/iter",
            "extra": "iterations: 29191\ncpu: 23.838584221164055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 23.62145942786428,
            "unit": "us/iter",
            "extra": "iterations: 29084\ncpu: 23.61918178379866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 22.226581028917725,
            "unit": "us/iter",
            "extra": "iterations: 31606\ncpu: 22.224705277479 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.240960301886687,
            "unit": "us/iter",
            "extra": "iterations: 33125\ncpu: 21.239037252830187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 597.1735933219223,
            "unit": "us/iter",
            "extra": "iterations: 1168\ncpu: 597.1465488013694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 127.99917024372748,
            "unit": "us/iter",
            "extra": "iterations: 5498\ncpu: 127.98399636231385 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.35079488225298,
            "unit": "us/iter",
            "extra": "iterations: 9809\ncpu: 69.34635722295877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 50.64746184318817,
            "unit": "us/iter",
            "extra": "iterations: 13379\ncpu: 50.644895059421565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 59.44450082768073,
            "unit": "us/iter",
            "extra": "iterations: 12082\ncpu: 59.44164716106602 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 53.20623963369713,
            "unit": "us/iter",
            "extra": "iterations: 13650\ncpu: 53.20466622710628 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 47.993387885799834,
            "unit": "us/iter",
            "extra": "iterations: 12960\ncpu: 47.991037962963 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4025.948851428568,
            "unit": "us/iter",
            "extra": "iterations: 175\ncpu: 4025.5878228571314 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 881.5582138365113,
            "unit": "us/iter",
            "extra": "iterations: 795\ncpu: 881.4999446540907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 641.9404353982425,
            "unit": "us/iter",
            "extra": "iterations: 1130\ncpu: 641.3453955752221 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 535.3999364471641,
            "unit": "us/iter",
            "extra": "iterations: 1306\ncpu: 535.3382013782548 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 501.3954218077516,
            "unit": "us/iter",
            "extra": "iterations: 1394\ncpu: 501.37328622668576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 474.7041158249062,
            "unit": "us/iter",
            "extra": "iterations: 1485\ncpu: 474.6728107744091 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 463.79556411959453,
            "unit": "us/iter",
            "extra": "iterations: 1505\ncpu: 463.7527375415283 us\nthreads: 1"
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
            "value": 23.508282260237845,
            "unit": "us/iter",
            "extra": "iterations: 29696\ncpu: 23.50722481142243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.553530639499111,
            "unit": "us/iter",
            "extra": "iterations: 125051\ncpu: 5.553390936497911 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.124404999674024,
            "unit": "us/iter",
            "extra": "iterations: 168731\ncpu: 4.12420674920434 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.6846004992380212,
            "unit": "us/iter",
            "extra": "iterations: 190290\ncpu: 3.68430151873458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.437453196144491,
            "unit": "us/iter",
            "extra": "iterations: 202932\ncpu: 3.4372797833757067 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.485722991869057,
            "unit": "us/iter",
            "extra": "iterations: 200597\ncpu: 3.4855152719133304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.2693224332603776,
            "unit": "us/iter",
            "extra": "iterations: 213179\ncpu: 3.269142251347466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 141.53934283980522,
            "unit": "us/iter",
            "extra": "iterations: 4944\ncpu: 141.52392293689297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 28.845488808604806,
            "unit": "us/iter",
            "extra": "iterations: 24081\ncpu: 28.844793820854868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 20.907169897717175,
            "unit": "us/iter",
            "extra": "iterations: 33632\ncpu: 20.905953377735482 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 18.7714898873423,
            "unit": "us/iter",
            "extra": "iterations: 37725\ncpu: 18.77059872763408 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 18.837914113123816,
            "unit": "us/iter",
            "extra": "iterations: 36420\ncpu: 18.837253212520668 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 17.993304989529847,
            "unit": "us/iter",
            "extra": "iterations: 39162\ncpu: 17.992319135897027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 17.50488683637412,
            "unit": "us/iter",
            "extra": "iterations: 39951\ncpu: 17.504415258691925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 316.5170627272832,
            "unit": "us/iter",
            "extra": "iterations: 2200\ncpu: 316.50015181818185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 62.684332439919096,
            "unit": "us/iter",
            "extra": "iterations: 11193\ncpu: 62.68024175824135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 42.22356562987982,
            "unit": "us/iter",
            "extra": "iterations: 16654\ncpu: 42.2220114687161 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 38.00435941982658,
            "unit": "us/iter",
            "extra": "iterations: 18822\ncpu: 38.00295882477937 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 37.21569392536024,
            "unit": "us/iter",
            "extra": "iterations: 18783\ncpu: 37.215022147686696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 36.95681098958421,
            "unit": "us/iter",
            "extra": "iterations: 19200\ncpu: 36.952112395833474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 35.86886974281397,
            "unit": "us/iter",
            "extra": "iterations: 19830\ncpu: 35.865776903681464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1798.513609254486,
            "unit": "us/iter",
            "extra": "iterations: 389\ncpu: 1798.3705089974312 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 364.8626685803587,
            "unit": "us/iter",
            "extra": "iterations: 1916\ncpu: 364.8312995824635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 249.79954069558661,
            "unit": "us/iter",
            "extra": "iterations: 2789\ncpu: 249.77883399067701 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 213.87028697236386,
            "unit": "us/iter",
            "extra": "iterations: 3293\ncpu: 213.85419070756032 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 207.29901821922277,
            "unit": "us/iter",
            "extra": "iterations: 3403\ncpu: 207.27908110490765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 200.95580617646982,
            "unit": "us/iter",
            "extra": "iterations: 3400\ncpu: 200.95178294117613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 191.93857539138057,
            "unit": "us/iter",
            "extra": "iterations: 3641\ncpu: 191.9153394671797 us\nthreads: 1"
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
          "id": "429ba60ce8f80f035ba0ba87ce65e74b98000807",
          "message": "Merge pull request #240 from genogrove/fix/parse-csv-optional-error-161\n\nReturn std::optional from parse_csv to distinguish errors",
          "timestamp": "2026-03-16T22:41:28-04:00",
          "tree_id": "a72d3148ddf1883409052af9be18f2087f8d041b",
          "url": "https://github.com/genogrove/genogrove/commit/429ba60ce8f80f035ba0ba87ce65e74b98000807"
        },
        "date": 1773715548047,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.21476018553976,
            "unit": "us/iter",
            "extra": "iterations: 20912\ncpu: 33.211879064651875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.592281102694797,
            "unit": "us/iter",
            "extra": "iterations: 92283\ncpu: 7.589260611380212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.158482600281134,
            "unit": "us/iter",
            "extra": "iterations: 135893\ncpu: 5.157146990647052 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.334966546045366,
            "unit": "us/iter",
            "extra": "iterations: 162492\ncpu: 4.3337661792580535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.970524395509447,
            "unit": "us/iter",
            "extra": "iterations: 176016\ncpu: 3.969216451913463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8759318326655325,
            "unit": "us/iter",
            "extra": "iterations: 180453\ncpu: 3.875436767468538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7036864740104725,
            "unit": "us/iter",
            "extra": "iterations: 188903\ncpu: 3.7034824963076325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.06870856030866,
            "unit": "us/iter",
            "extra": "iterations: 2570\ncpu: 273.03536225680926 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.14691916462022,
            "unit": "us/iter",
            "extra": "iterations: 16280\ncpu: 43.14449834152334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.203094954207536,
            "unit": "us/iter",
            "extra": "iterations: 23148\ncpu: 30.19808722135825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.673263651688845,
            "unit": "us/iter",
            "extra": "iterations: 27286\ncpu: 25.671955215128627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.726385999633965,
            "unit": "us/iter",
            "extra": "iterations: 27285\ncpu: 25.72282224665567 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.972903136699333,
            "unit": "us/iter",
            "extra": "iterations: 27513\ncpu: 24.9708188856177 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.469290352048326,
            "unit": "us/iter",
            "extra": "iterations: 28462\ncpu: 24.465500702691283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 631.6557688766064,
            "unit": "us/iter",
            "extra": "iterations: 1086\ncpu: 631.5953618784534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.9567047063,
            "unit": "us/iter",
            "extra": "iterations: 5652\ncpu: 123.92092197452232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.90826292452016,
            "unit": "us/iter",
            "extra": "iterations: 9923\ncpu: 69.9001536833618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.79476187144561,
            "unit": "us/iter",
            "extra": "iterations: 11435\ncpu: 61.78535286401391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.634317175016584,
            "unit": "us/iter",
            "extra": "iterations: 11016\ncpu: 62.62777677923027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.79036715472141,
            "unit": "us/iter",
            "extra": "iterations: 11679\ncpu: 59.78904212689447 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.08856770142488,
            "unit": "us/iter",
            "extra": "iterations: 11307\ncpu: 61.082887857079825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3659.5480526315037,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3659.1219210526197 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 898.7784369189767,
            "unit": "us/iter",
            "extra": "iterations: 753\ncpu: 898.722559096946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 632.1550963425648,
            "unit": "us/iter",
            "extra": "iterations: 1121\ncpu: 632.0482185548617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 520.7056148148055,
            "unit": "us/iter",
            "extra": "iterations: 1350\ncpu: 520.6511718518537 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 495.6343187279036,
            "unit": "us/iter",
            "extra": "iterations: 1415\ncpu: 495.56167632508703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 464.1396273209531,
            "unit": "us/iter",
            "extra": "iterations: 1508\ncpu: 464.069314323607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 451.28241494846003,
            "unit": "us/iter",
            "extra": "iterations: 1552\ncpu: 451.2476501288643 us\nthreads: 1"
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
            "value": 25.23585262020542,
            "unit": "us/iter",
            "extra": "iterations: 27765\ncpu: 25.232309670448405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.9682773515902054,
            "unit": "us/iter",
            "extra": "iterations: 117580\ncpu: 5.967816652491913 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.669995031238919,
            "unit": "us/iter",
            "extra": "iterations: 149333\ncpu: 4.659116344009692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.034565022573651,
            "unit": "us/iter",
            "extra": "iterations: 176754\ncpu: 4.034106622763845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7908203216349823,
            "unit": "us/iter",
            "extra": "iterations: 183873\ncpu: 3.7903730890342935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7881321259418588,
            "unit": "us/iter",
            "extra": "iterations: 185800\ncpu: 3.787901921420866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.636565862670058,
            "unit": "us/iter",
            "extra": "iterations: 191626\ncpu: 3.636300204565123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 150.50821246278022,
            "unit": "us/iter",
            "extra": "iterations: 4702\ncpu: 150.4998058273085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.766987642376904,
            "unit": "us/iter",
            "extra": "iterations: 22739\ncpu: 30.76435573244199 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.639550753002244,
            "unit": "us/iter",
            "extra": "iterations: 30146\ncpu: 22.63833201751475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.10530288254704,
            "unit": "us/iter",
            "extra": "iterations: 34865\ncpu: 20.10337653807549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.1738729313409,
            "unit": "us/iter",
            "extra": "iterations: 34926\ncpu: 20.173276785202955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.23648354686783,
            "unit": "us/iter",
            "extra": "iterations: 36528\ncpu: 19.23464728427503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.925523168423716,
            "unit": "us/iter",
            "extra": "iterations: 36990\ncpu: 18.92309624222757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 346.1766228373705,
            "unit": "us/iter",
            "extra": "iterations: 2023\ncpu: 346.1366742461725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.68948843063295,
            "unit": "us/iter",
            "extra": "iterations: 10329\ncpu: 66.68546509826679 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.2032656239498,
            "unit": "us/iter",
            "extra": "iterations: 14897\ncpu: 48.19646083103947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.640508853513985,
            "unit": "us/iter",
            "extra": "iterations: 16773\ncpu: 41.638244201991625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.80913651775549,
            "unit": "us/iter",
            "extra": "iterations: 16811\ncpu: 41.80533793349577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.201445017478,
            "unit": "us/iter",
            "extra": "iterations: 17451\ncpu: 40.20028605810563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.40486570293551,
            "unit": "us/iter",
            "extra": "iterations: 18124\ncpu: 38.40171088060017 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1858.6938457447175,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1858.5856276595769 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 409.1217237762341,
            "unit": "us/iter",
            "extra": "iterations: 1716\ncpu: 409.07150233100214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 270.81449181637737,
            "unit": "us/iter",
            "extra": "iterations: 2505\ncpu: 270.8025181636735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.96347410893912,
            "unit": "us/iter",
            "extra": "iterations: 2974\ncpu: 234.93687626092745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.292893206945,
            "unit": "us/iter",
            "extra": "iterations: 3165\ncpu: 220.27982180094799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.41525301568046,
            "unit": "us/iter",
            "extra": "iterations: 3316\ncpu: 211.39646351025323 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 204.00045250583062,
            "unit": "us/iter",
            "extra": "iterations: 3432\ncpu: 203.98931089743638 us\nthreads: 1"
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
          "id": "b8801ac2b3a2279fc1437e86435ce37792c10b81",
          "message": "Merge pull request #241 from genogrove/refactor/decompose-io-reader-functions-183\n\nDecompose long IO reader functions into focused helpers",
          "timestamp": "2026-03-17T21:41:44-04:00",
          "tree_id": "0bef97fd88f5d94f7cdcded97fa341c1793cd23d",
          "url": "https://github.com/genogrove/genogrove/commit/b8801ac2b3a2279fc1437e86435ce37792c10b81"
        },
        "date": 1773798343332,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.443474534097064,
            "unit": "us/iter",
            "extra": "iterations: 19693\ncpu: 33.44120499669933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.661536490103634,
            "unit": "us/iter",
            "extra": "iterations: 91148\ncpu: 7.660978968271382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.2029032985996535,
            "unit": "us/iter",
            "extra": "iterations: 135603\ncpu: 5.202283054209714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.287562937797743,
            "unit": "us/iter",
            "extra": "iterations: 161890\ncpu: 4.287067879424301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.986668721791687,
            "unit": "us/iter",
            "extra": "iterations: 176145\ncpu: 3.986386539498708 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9010253089392575,
            "unit": "us/iter",
            "extra": "iterations: 178514\ncpu: 3.9009409177991645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.748843685771995,
            "unit": "us/iter",
            "extra": "iterations: 186349\ncpu: 3.7485474029911603 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.29168504851606,
            "unit": "us/iter",
            "extra": "iterations: 2575\ncpu: 273.26993902912636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.38005870915204,
            "unit": "us/iter",
            "extra": "iterations: 15943\ncpu: 43.37495741077588 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.445292107732296,
            "unit": "us/iter",
            "extra": "iterations: 22389\ncpu: 30.441421099647105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.507018194439752,
            "unit": "us/iter",
            "extra": "iterations: 27371\ncpu: 25.50478148405242 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.892728150290935,
            "unit": "us/iter",
            "extra": "iterations: 26934\ncpu: 25.891439444568153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.978479907785868,
            "unit": "us/iter",
            "extra": "iterations: 28195\ncpu: 24.97483947508428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.90973994514081,
            "unit": "us/iter",
            "extra": "iterations: 28071\ncpu: 24.90817523422749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 630.8928849955353,
            "unit": "us/iter",
            "extra": "iterations: 1113\ncpu: 630.8214573225521 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.57574977692033,
            "unit": "us/iter",
            "extra": "iterations: 5603\ncpu: 124.57029502052472 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.8420946493523,
            "unit": "us/iter",
            "extra": "iterations: 9625\ncpu: 69.83130784415566 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.962698747357756,
            "unit": "us/iter",
            "extra": "iterations: 11336\ncpu: 60.95222371206771 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.29990540298954,
            "unit": "us/iter",
            "extra": "iterations: 11216\ncpu: 61.294197039942745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.65217757496254,
            "unit": "us/iter",
            "extra": "iterations: 11505\ncpu: 59.64731960017372 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.59708959944134,
            "unit": "us/iter",
            "extra": "iterations: 11384\ncpu: 61.59520054462387 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3644.763869110124,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3644.568806282718 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.0953307692364,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 900.0188897435927 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 627.4591385700786,
            "unit": "us/iter",
            "extra": "iterations: 1133\ncpu: 627.3847590467783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.671175516262,
            "unit": "us/iter",
            "extra": "iterations: 1356\ncpu: 515.6258126843655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.5879866573077,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 492.5211622191 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.0985968586403,
            "unit": "us/iter",
            "extra": "iterations: 1528\ncpu: 459.0863226439788 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.6811777070069,
            "unit": "us/iter",
            "extra": "iterations: 1570\ncpu: 446.6495847133759 us\nthreads: 1"
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
            "value": 25.46039244872009,
            "unit": "us/iter",
            "extra": "iterations: 27545\ncpu: 25.459184715919505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.933435498152419,
            "unit": "us/iter",
            "extra": "iterations: 117454\ncpu: 5.933029577536738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.541754288447821,
            "unit": "us/iter",
            "extra": "iterations: 154718\ncpu: 4.541660168823268 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.91628721228183,
            "unit": "us/iter",
            "extra": "iterations: 177952\ncpu: 3.9159186859377813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.866821598916915,
            "unit": "us/iter",
            "extra": "iterations: 180935\ncpu: 3.8666442700417427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8311548972596245,
            "unit": "us/iter",
            "extra": "iterations: 184348\ncpu: 3.830945988022651 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6230594461775327,
            "unit": "us/iter",
            "extra": "iterations: 191686\ncpu: 3.622938780088261 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.02474249471305,
            "unit": "us/iter",
            "extra": "iterations: 4730\ncpu: 148.0122082452433 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.32650472496919,
            "unit": "us/iter",
            "extra": "iterations: 22434\ncpu: 31.324853258447085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.386311124519086,
            "unit": "us/iter",
            "extra": "iterations: 31489\ncpu: 22.384669948235917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.27088899130285,
            "unit": "us/iter",
            "extra": "iterations: 34718\ncpu: 20.269853735814447 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.53236654845877,
            "unit": "us/iter",
            "extra": "iterations: 34121\ncpu: 20.53112388265299 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.35148731620399,
            "unit": "us/iter",
            "extra": "iterations: 36385\ncpu: 19.351369273052093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.068338599522498,
            "unit": "us/iter",
            "extra": "iterations: 36459\ncpu: 19.06744515757414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 340.89520916630556,
            "unit": "us/iter",
            "extra": "iterations: 2051\ncpu: 340.8889483178938 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.56476781478669,
            "unit": "us/iter",
            "extra": "iterations: 10539\ncpu: 66.56050071164249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.18371172881018,
            "unit": "us/iter",
            "extra": "iterations: 14750\ncpu: 47.1831858983054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.87107590462262,
            "unit": "us/iter",
            "extra": "iterations: 16692\ncpu: 41.8681946441411 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.27430024872944,
            "unit": "us/iter",
            "extra": "iterations: 16886\ncpu: 41.27279592561868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.37662111264438,
            "unit": "us/iter",
            "extra": "iterations: 17364\ncpu: 40.37456507717104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.66590293503488,
            "unit": "us/iter",
            "extra": "iterations: 18194\ncpu: 38.66257326591185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1865.4799920211233,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1865.3332739361608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.6039573348524,
            "unit": "us/iter",
            "extra": "iterations: 1711\ncpu: 406.57348100525917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 274.73445925071246,
            "unit": "us/iter",
            "extra": "iterations: 2589\ncpu: 274.7211487060628 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.5739751427317,
            "unit": "us/iter",
            "extra": "iterations: 2977\ncpu: 234.554099093047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.19690483870434,
            "unit": "us/iter",
            "extra": "iterations: 3100\ncpu: 226.18426741935593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 213.9048764113484,
            "unit": "us/iter",
            "extra": "iterations: 3277\ncpu: 213.89232834910104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.41887106268484,
            "unit": "us/iter",
            "extra": "iterations: 3397\ncpu: 206.4114586399773 us\nthreads: 1"
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
          "id": "bc98f3cb09a3eea527b4528ed5546d1ff739e491",
          "message": "Merge pull request #242 from genogrove/refactor/dedup-bed-gff-readers-185\n\nExtract shared BGZF utilities from bed_reader and gff_reader",
          "timestamp": "2026-03-17T23:17:33-04:00",
          "tree_id": "ca88f00bc238de42520316cfe7954d822d4f346d",
          "url": "https://github.com/genogrove/genogrove/commit/bc98f3cb09a3eea527b4528ed5546d1ff739e491"
        },
        "date": 1773804105676,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.0196233355444,
            "unit": "us/iter",
            "extra": "iterations: 19601\ncpu: 34.01809652568747 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.758947001533125,
            "unit": "us/iter",
            "extra": "iterations: 90663\ncpu: 7.757965741261597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.127965431389511,
            "unit": "us/iter",
            "extra": "iterations: 135759\ncpu: 5.126455608836247 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.435731498069731,
            "unit": "us/iter",
            "extra": "iterations: 158524\ncpu: 4.434527711892207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.069458662128634,
            "unit": "us/iter",
            "extra": "iterations: 171586\ncpu: 4.068813749373495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.91594414690131,
            "unit": "us/iter",
            "extra": "iterations: 176445\ncpu: 3.915312193601402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7843560423636036,
            "unit": "us/iter",
            "extra": "iterations: 187708\ncpu: 3.783823710230785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 278.79448314606174,
            "unit": "us/iter",
            "extra": "iterations: 2492\ncpu: 278.75005457463857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.882497402840634,
            "unit": "us/iter",
            "extra": "iterations: 15979\ncpu: 43.880952750485015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.854081985643337,
            "unit": "us/iter",
            "extra": "iterations: 23126\ncpu: 30.853018637031965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.818221295750085,
            "unit": "us/iter",
            "extra": "iterations: 27104\ncpu: 25.81707943476979 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.335216648311572,
            "unit": "us/iter",
            "extra": "iterations: 26333\ncpu: 26.334179964303345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.26883490308683,
            "unit": "us/iter",
            "extra": "iterations: 27499\ncpu: 25.267251500054563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.27453044727836,
            "unit": "us/iter",
            "extra": "iterations: 27835\ncpu: 25.273719813184844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 633.1543073436005,
            "unit": "us/iter",
            "extra": "iterations: 1103\ncpu: 633.0482774252034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.34195888244402,
            "unit": "us/iter",
            "extra": "iterations: 5691\ncpu: 123.32284589703019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 72.74914825672805,
            "unit": "us/iter",
            "extra": "iterations: 9551\ncpu: 72.73425787875598 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.66477614335407,
            "unit": "us/iter",
            "extra": "iterations: 11217\ncpu: 61.65560559864492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.105434822326814,
            "unit": "us/iter",
            "extra": "iterations: 10947\ncpu: 62.10139691239603 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.1967514936347,
            "unit": "us/iter",
            "extra": "iterations: 11549\ncpu: 59.19374448004174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.842777846426486,
            "unit": "us/iter",
            "extra": "iterations: 11330\ncpu: 60.83282603706986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3724.4073386243144,
            "unit": "us/iter",
            "extra": "iterations: 189\ncpu: 3724.088582010575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.5651887034612,
            "unit": "us/iter",
            "extra": "iterations: 779\ncpu: 900.4708344030815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.5869379982362,
            "unit": "us/iter",
            "extra": "iterations: 1129\ncpu: 621.5610310008866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.8896764705901,
            "unit": "us/iter",
            "extra": "iterations: 1360\ncpu: 513.857360294118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 489.9603228070167,
            "unit": "us/iter",
            "extra": "iterations: 1425\ncpu: 489.9131859649131 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.56479712042096,
            "unit": "us/iter",
            "extra": "iterations: 1528\ncpu: 459.51252356020876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 445.7007714831305,
            "unit": "us/iter",
            "extra": "iterations: 1571\ncpu: 445.616603437301 us\nthreads: 1"
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
            "value": 25.23871805865784,
            "unit": "us/iter",
            "extra": "iterations: 27754\ncpu: 25.235837464869952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.990284619070596,
            "unit": "us/iter",
            "extra": "iterations: 116872\ncpu: 5.989606210212904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.7501834326275265,
            "unit": "us/iter",
            "extra": "iterations: 149052\ncpu: 4.749593812897505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.957466907726014,
            "unit": "us/iter",
            "extra": "iterations: 174784\ncpu: 3.957077243912471 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8841157193748406,
            "unit": "us/iter",
            "extra": "iterations: 180497\ncpu: 3.8833290359396595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.868344576151948,
            "unit": "us/iter",
            "extra": "iterations: 180619\ncpu: 3.8681175734557454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.651737005848056,
            "unit": "us/iter",
            "extra": "iterations: 195107\ncpu: 3.6515412619741734 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.3677528137672,
            "unit": "us/iter",
            "extra": "iterations: 4709\ncpu: 148.3574671904858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.302796116072788,
            "unit": "us/iter",
            "extra": "iterations: 22400\ncpu: 31.300892455357374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.38335652261618,
            "unit": "us/iter",
            "extra": "iterations: 29712\ncpu: 23.381471492999427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.593931546477922,
            "unit": "us/iter",
            "extra": "iterations: 33877\ncpu: 20.590879623343405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.990616956371507,
            "unit": "us/iter",
            "extra": "iterations: 34748\ncpu: 19.989096494762265 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.326241703038754,
            "unit": "us/iter",
            "extra": "iterations: 36429\ncpu: 19.324301243514817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.690457023116963,
            "unit": "us/iter",
            "extra": "iterations: 37462\ncpu: 18.689501521541782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 339.98122141823586,
            "unit": "us/iter",
            "extra": "iterations: 2073\ncpu: 339.93684032802724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.18859160852682,
            "unit": "us/iter",
            "extra": "iterations: 10463\ncpu: 67.1822619707538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 49.52583766852999,
            "unit": "us/iter",
            "extra": "iterations: 14686\ncpu: 49.52005147759767 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.806804632007825,
            "unit": "us/iter",
            "extra": "iterations: 16753\ncpu: 41.80403766489564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.5598419613668,
            "unit": "us/iter",
            "extra": "iterations: 16825\ncpu: 41.55806835066886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.06000596843701,
            "unit": "us/iter",
            "extra": "iterations: 17425\ncpu: 40.05389859397432 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.832483847690646,
            "unit": "us/iter",
            "extra": "iterations: 18016\ncpu: 38.83053802175844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1861.9161111110943,
            "unit": "us/iter",
            "extra": "iterations: 378\ncpu: 1861.67024338626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.3493263646667,
            "unit": "us/iter",
            "extra": "iterations: 1722\ncpu: 408.31406910569245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 276.17813512445565,
            "unit": "us/iter",
            "extra": "iterations: 2531\ncpu: 276.12591623864245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.18236558421438,
            "unit": "us/iter",
            "extra": "iterations: 2987\ncpu: 234.16243890190876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 224.75932311167955,
            "unit": "us/iter",
            "extra": "iterations: 3098\ncpu: 224.73635216268553 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.43039429271465,
            "unit": "us/iter",
            "extra": "iterations: 3259\ncpu: 215.41844921755168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.7845001474589,
            "unit": "us/iter",
            "extra": "iterations: 3391\ncpu: 206.74984458861636 us\nthreads: 1"
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
          "id": "655632dec24f856c53e861d3ef4d768d4a9369ea",
          "message": "Merge pull request #244 from genogrove/fix/bed-from-chars-overflow-243\n\nCheck from_chars() return values in bed_reader constructor",
          "timestamp": "2026-03-19T00:30:43-04:00",
          "tree_id": "6c7cf2b63cfbf312ae3b86bf22e515518d55ab51",
          "url": "https://github.com/genogrove/genogrove/commit/655632dec24f856c53e861d3ef4d768d4a9369ea"
        },
        "date": 1773894876859,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.836724099643135,
            "unit": "us/iter",
            "extra": "iterations: 20714\ncpu: 33.835959592546104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.506537177753544,
            "unit": "us/iter",
            "extra": "iterations: 93174\ncpu: 7.506053029815186 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.872251206815004,
            "unit": "us/iter",
            "extra": "iterations: 137345\ncpu: 4.871514019440096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.151221817813597,
            "unit": "us/iter",
            "extra": "iterations: 167872\ncpu: 4.150927218356844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.873221125078252,
            "unit": "us/iter",
            "extra": "iterations: 172468\ncpu: 3.8729262877751203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.730351098445315,
            "unit": "us/iter",
            "extra": "iterations: 185626\ncpu: 3.7300814972040564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.538956099077787,
            "unit": "us/iter",
            "extra": "iterations: 196169\ncpu: 3.5387786959203553 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 265.7880068052915,
            "unit": "us/iter",
            "extra": "iterations: 2645\ncpu: 265.76793988657886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.29528907079893,
            "unit": "us/iter",
            "extra": "iterations: 16003\ncpu: 42.293603011935325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.373053208467436,
            "unit": "us/iter",
            "extra": "iterations: 23812\ncpu: 29.371637367713728 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.865352970209884,
            "unit": "us/iter",
            "extra": "iterations: 28365\ncpu: 24.86397031552971 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 24.891412112152217,
            "unit": "us/iter",
            "extra": "iterations: 27427\ncpu: 24.890272906260254 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.23521662583229,
            "unit": "us/iter",
            "extra": "iterations: 28570\ncpu: 24.234574133706687 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 23.895592350810606,
            "unit": "us/iter",
            "extra": "iterations: 29258\ncpu: 23.894415134322244 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 597.5323512361106,
            "unit": "us/iter",
            "extra": "iterations: 1173\ncpu: 597.4890963341873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 119.07632155843994,
            "unit": "us/iter",
            "extra": "iterations: 5775\ncpu: 119.06734632034647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.90604679184835,
            "unit": "us/iter",
            "extra": "iterations: 9959\ncpu: 69.90162225123014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.332046718974546,
            "unit": "us/iter",
            "extra": "iterations: 11216\ncpu: 61.3300454707559 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.7260239873478,
            "unit": "us/iter",
            "extra": "iterations: 11381\ncpu: 61.72137764695544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 57.833511107413145,
            "unit": "us/iter",
            "extra": "iterations: 12019\ncpu: 57.82741010067389 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 58.93866719348036,
            "unit": "us/iter",
            "extra": "iterations: 12022\ncpu: 58.936977125270246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3473.867565000148,
            "unit": "us/iter",
            "extra": "iterations: 200\ncpu: 3473.6189200000035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 852.037817087867,
            "unit": "us/iter",
            "extra": "iterations: 831\ncpu: 851.9940722021673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 595.7262519547933,
            "unit": "us/iter",
            "extra": "iterations: 1151\ncpu: 595.6666072980014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 491.8357293868927,
            "unit": "us/iter",
            "extra": "iterations: 1419\ncpu: 491.80278858350846 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 477.17490013226967,
            "unit": "us/iter",
            "extra": "iterations: 1512\ncpu: 477.1400112433865 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 436.3693415559992,
            "unit": "us/iter",
            "extra": "iterations: 1581\ncpu: 436.31823213156207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 420.47480499695894,
            "unit": "us/iter",
            "extra": "iterations: 1641\ncpu: 420.44758744667774 us\nthreads: 1"
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
            "value": 24.3477441461025,
            "unit": "us/iter",
            "extra": "iterations: 28528\ncpu: 24.345974761637663 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.805505013412904,
            "unit": "us/iter",
            "extra": "iterations: 122272\ncpu: 5.805093030293122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.346796879247965,
            "unit": "us/iter",
            "extra": "iterations: 158167\ncpu: 4.346434174005968 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.8074161494755234,
            "unit": "us/iter",
            "extra": "iterations: 183040\ncpu: 3.8071097956730773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.6352023623949226,
            "unit": "us/iter",
            "extra": "iterations: 194379\ncpu: 3.6349060135096702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.5429638072080882,
            "unit": "us/iter",
            "extra": "iterations: 197415\ncpu: 3.5427837297064513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.410739401196581,
            "unit": "us/iter",
            "extra": "iterations: 203773\ncpu: 3.410536695244195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 142.33054198782227,
            "unit": "us/iter",
            "extra": "iterations: 4930\ncpu: 142.3233395537517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 29.66181523009602,
            "unit": "us/iter",
            "extra": "iterations: 23099\ncpu: 29.6592813541711 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.717481978686013,
            "unit": "us/iter",
            "extra": "iterations: 31435\ncpu: 22.716688627326313 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 19.66271270948574,
            "unit": "us/iter",
            "extra": "iterations: 35981\ncpu: 19.661314721658584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.30083074197879,
            "unit": "us/iter",
            "extra": "iterations: 35567\ncpu: 19.299855062276873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.931304622412867,
            "unit": "us/iter",
            "extra": "iterations: 37210\ncpu: 18.929777640419324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.321312007268386,
            "unit": "us/iter",
            "extra": "iterations: 37419\ncpu: 18.319920227691746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 329.0187734883729,
            "unit": "us/iter",
            "extra": "iterations: 2150\ncpu: 328.981295813955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 63.35572940965117,
            "unit": "us/iter",
            "extra": "iterations: 11146\ncpu: 63.349807823434084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 45.162421083285544,
            "unit": "us/iter",
            "extra": "iterations: 15453\ncpu: 45.15840594059411 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 39.65855087799699,
            "unit": "us/iter",
            "extra": "iterations: 17483\ncpu: 39.65680329462937 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.12395278111249,
            "unit": "us/iter",
            "extra": "iterations: 17493\ncpu: 40.12072457554451 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.047625504874404,
            "unit": "us/iter",
            "extra": "iterations: 18569\ncpu: 38.04470558457623 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 36.84167704839583,
            "unit": "us/iter",
            "extra": "iterations: 18783\ncpu: 36.83792844593544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1800.0694263959554,
            "unit": "us/iter",
            "extra": "iterations: 394\ncpu: 1799.9626573603982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 388.35698398674623,
            "unit": "us/iter",
            "extra": "iterations: 1811\ncpu: 388.32512258420854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 254.0062314680312,
            "unit": "us/iter",
            "extra": "iterations: 2752\ncpu: 253.9862245639546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 218.09197389365187,
            "unit": "us/iter",
            "extra": "iterations: 3141\ncpu: 218.06660362941852 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 210.45050398527982,
            "unit": "us/iter",
            "extra": "iterations: 3262\ncpu: 210.44095769466574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 201.41119501594477,
            "unit": "us/iter",
            "extra": "iterations: 3451\ncpu: 201.39443552593568 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 192.78043484223636,
            "unit": "us/iter",
            "extra": "iterations: 3645\ncpu: 192.77379396433528 us\nthreads: 1"
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
          "id": "5a38c12d7a2dafd5bb997b311d1f9518f8965852",
          "message": "Merge pull request #245 from genogrove/refactor/gff-attr-string-allocs-169\n\nReduce temporary string allocations in GFF attribute parsing",
          "timestamp": "2026-03-19T01:01:57-04:00",
          "tree_id": "ae86044b9b2338d7bcb75b63ba3044e3c5e5cb7a",
          "url": "https://github.com/genogrove/genogrove/commit/5a38c12d7a2dafd5bb997b311d1f9518f8965852"
        },
        "date": 1773896761741,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.27722223811619,
            "unit": "us/iter",
            "extra": "iterations: 20973\ncpu: 33.271310446764886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.658312746113924,
            "unit": "us/iter",
            "extra": "iterations: 91675\ncpu: 7.657166348513771 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.0454704328535955,
            "unit": "us/iter",
            "extra": "iterations: 137044\ncpu: 5.045158810309097 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.361881827676196,
            "unit": "us/iter",
            "extra": "iterations: 153200\ncpu: 4.361510855091382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.036703489577387,
            "unit": "us/iter",
            "extra": "iterations: 173660\ncpu: 4.036415374870437 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9705909721674337,
            "unit": "us/iter",
            "extra": "iterations: 177274\ncpu: 3.970229345532903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.77290676516159,
            "unit": "us/iter",
            "extra": "iterations: 185864\ncpu: 3.772572219472305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 274.50565263571264,
            "unit": "us/iter",
            "extra": "iterations: 2542\ncpu: 274.4683599527931 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.397845422338584,
            "unit": "us/iter",
            "extra": "iterations: 16089\ncpu: 43.39381173472551 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.275595507559434,
            "unit": "us/iter",
            "extra": "iterations: 23150\ncpu: 30.2725067386609 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.641180142159715,
            "unit": "us/iter",
            "extra": "iterations: 27012\ncpu: 25.63879945949948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.953434626489408,
            "unit": "us/iter",
            "extra": "iterations: 27014\ncpu: 25.95158184645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.29106731675515,
            "unit": "us/iter",
            "extra": "iterations: 27586\ncpu: 25.286913398100538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.460904429976704,
            "unit": "us/iter",
            "extra": "iterations: 28262\ncpu: 24.458697119807464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 642.7857969452068,
            "unit": "us/iter",
            "extra": "iterations: 1113\ncpu: 642.7443441150037 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.61171443736539,
            "unit": "us/iter",
            "extra": "iterations: 5652\ncpu: 124.59602830856346 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.26172911261213,
            "unit": "us/iter",
            "extra": "iterations: 9635\ncpu: 71.25375246497151 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.74322469420389,
            "unit": "us/iter",
            "extra": "iterations: 11282\ncpu: 60.73433876972153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.590448163854674,
            "unit": "us/iter",
            "extra": "iterations: 11083\ncpu: 63.58455291888469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.010014617068535,
            "unit": "us/iter",
            "extra": "iterations: 11425\ncpu: 59.00473295404811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.5773072510544,
            "unit": "us/iter",
            "extra": "iterations: 11157\ncpu: 61.57383705297131 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3682.727773684148,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3682.2388631578992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.0143432258067,
            "unit": "us/iter",
            "extra": "iterations: 775\ncpu: 902.9659961290342 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 625.1114852809808,
            "unit": "us/iter",
            "extra": "iterations: 1121\ncpu: 625.0173077609293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 517.1710133729466,
            "unit": "us/iter",
            "extra": "iterations: 1346\ncpu: 517.0918476968809 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 493.5850345801037,
            "unit": "us/iter",
            "extra": "iterations: 1417\ncpu: 493.5195913902617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 460.26276137111404,
            "unit": "us/iter",
            "extra": "iterations: 1517\ncpu: 460.2075787738977 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 447.6167466324565,
            "unit": "us/iter",
            "extra": "iterations: 1559\ncpu: 447.57435856318125 us\nthreads: 1"
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
            "value": 24.994649404676903,
            "unit": "us/iter",
            "extra": "iterations: 27884\ncpu: 24.991860170707177 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.924281294276231,
            "unit": "us/iter",
            "extra": "iterations: 117162\ncpu: 5.923873192673397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.706122968757223,
            "unit": "us/iter",
            "extra": "iterations: 150339\ncpu: 4.705849453568272 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.056491927051696,
            "unit": "us/iter",
            "extra": "iterations: 173109\ncpu: 4.056028467612897 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7966339457595897,
            "unit": "us/iter",
            "extra": "iterations: 183369\ncpu: 3.7963534294237165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7691310495703525,
            "unit": "us/iter",
            "extra": "iterations: 187410\ncpu: 3.768747612187197 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.574997222265354,
            "unit": "us/iter",
            "extra": "iterations: 193683\ncpu: 3.574600806472407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.13582713674964,
            "unit": "us/iter",
            "extra": "iterations: 4680\ncpu: 149.12447606837645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.23306786808113,
            "unit": "us/iter",
            "extra": "iterations: 22529\ncpu: 31.228463935372233 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.543186056318902,
            "unit": "us/iter",
            "extra": "iterations: 30824\ncpu: 22.540278678951527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.058940729612164,
            "unit": "us/iter",
            "extra": "iterations: 35279\ncpu: 20.05749788826224 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.352337043289037,
            "unit": "us/iter",
            "extra": "iterations: 34951\ncpu: 20.351262596206222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.270536256924927,
            "unit": "us/iter",
            "extra": "iterations: 36462\ncpu: 19.269607701168493 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.860319902678903,
            "unit": "us/iter",
            "extra": "iterations: 37402\ncpu: 18.859238329501082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.482028431364,
            "unit": "us/iter",
            "extra": "iterations: 2040\ncpu: 343.4562651960785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.24584945117331,
            "unit": "us/iter",
            "extra": "iterations: 10568\ncpu: 66.23901362604103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.446850323833836,
            "unit": "us/iter",
            "extra": "iterations: 15440\ncpu: 46.443466774611345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.5743040075873,
            "unit": "us/iter",
            "extra": "iterations: 16868\ncpu: 41.57170043870077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.86365009230034,
            "unit": "us/iter",
            "extra": "iterations: 16793\ncpu: 41.85647406657543 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.3923391348716,
            "unit": "us/iter",
            "extra": "iterations: 17639\ncpu: 39.38783802936673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.37763554973181,
            "unit": "us/iter",
            "extra": "iterations: 18318\ncpu: 38.37440528441976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1878.4972299465062,
            "unit": "us/iter",
            "extra": "iterations: 374\ncpu: 1878.239363636364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.3813831775672,
            "unit": "us/iter",
            "extra": "iterations: 1712\ncpu: 410.33947897196225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 277.8068382877543,
            "unit": "us/iter",
            "extra": "iterations: 2523\ncpu: 277.78457629805797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.10853815261115,
            "unit": "us/iter",
            "extra": "iterations: 2988\ncpu: 235.08698694779102 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.38303374329465,
            "unit": "us/iter",
            "extra": "iterations: 3171\ncpu: 222.36594386628857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.2469806748442,
            "unit": "us/iter",
            "extra": "iterations: 3260\ncpu: 215.20895030674782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.49904604486227,
            "unit": "us/iter",
            "extra": "iterations: 3388\ncpu: 206.47664138134522 us\nthreads: 1"
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
          "id": "56101ee073a9b9476d35e0d64bbf5fdf28f3dc5b",
          "message": "Merge pull request #246 from genogrove/test/serialization-traits-tests-180\n\nAdd dedicated tests for serialization_traits infrastructure",
          "timestamp": "2026-03-19T12:01:51-05:00",
          "tree_id": "7e53c66e145980bcc9703df18fd698556887883b",
          "url": "https://github.com/genogrove/genogrove/commit/56101ee073a9b9476d35e0d64bbf5fdf28f3dc5b"
        },
        "date": 1773939953964,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.524965143938644,
            "unit": "us/iter",
            "extra": "iterations: 20599\ncpu: 33.52280382542842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.6553542812169395,
            "unit": "us/iter",
            "extra": "iterations: 91481\ncpu: 7.652945715503765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.079962652651412,
            "unit": "us/iter",
            "extra": "iterations: 136422\ncpu: 5.07870932840744 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.280541047076649,
            "unit": "us/iter",
            "extra": "iterations: 162204\ncpu: 4.2802663621119095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.012317559274023,
            "unit": "us/iter",
            "extra": "iterations: 175161\ncpu: 4.011856708970604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.893283128848044,
            "unit": "us/iter",
            "extra": "iterations: 179964\ncpu: 3.8929387266342186 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.716426675192476,
            "unit": "us/iter",
            "extra": "iterations: 187665\ncpu: 3.716314368688888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.48076812158746,
            "unit": "us/iter",
            "extra": "iterations: 2566\ncpu: 272.4600646921277 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.27843900936514,
            "unit": "us/iter",
            "extra": "iterations: 16232\ncpu: 43.27537955889593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.430572256110423,
            "unit": "us/iter",
            "extra": "iterations: 22787\ncpu: 30.426760126387872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.593794616005443,
            "unit": "us/iter",
            "extra": "iterations: 27266\ncpu: 25.59206403579547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.22720755341456,
            "unit": "us/iter",
            "extra": "iterations: 27193\ncpu: 26.22499099032837 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.897425453092044,
            "unit": "us/iter",
            "extra": "iterations: 27533\ncpu: 24.895532887807324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.783718610104206,
            "unit": "us/iter",
            "extra": "iterations: 28146\ncpu: 24.781194343778854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 625.3829774571687,
            "unit": "us/iter",
            "extra": "iterations: 1109\ncpu: 625.3443706041477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.79682709289546,
            "unit": "us/iter",
            "extra": "iterations: 5662\ncpu: 123.787846344048 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.63771676000894,
            "unit": "us/iter",
            "extra": "iterations: 9642\ncpu: 71.63002779506331 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.40149199104454,
            "unit": "us/iter",
            "extra": "iterations: 11612\ncpu: 60.396393730623444 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.70138858417597,
            "unit": "us/iter",
            "extra": "iterations: 10757\ncpu: 62.693778562796375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.802609286329066,
            "unit": "us/iter",
            "extra": "iterations: 11630\ncpu: 59.79788598452267 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.567141107560595,
            "unit": "us/iter",
            "extra": "iterations: 11268\ncpu: 62.562957046503364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3623.4649528796044,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3622.9679947643917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 925.5809333333641,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 925.4982666666668 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.4982919254817,
            "unit": "us/iter",
            "extra": "iterations: 1127\ncpu: 621.3993717834949 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 535.4023868828381,
            "unit": "us/iter",
            "extra": "iterations: 1357\ncpu: 535.3864871039049 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.525831926868,
            "unit": "us/iter",
            "extra": "iterations: 1422\ncpu: 491.4729205344572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.61634293193185,
            "unit": "us/iter",
            "extra": "iterations: 1528\ncpu: 463.5661263088998 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 447.51887795526477,
            "unit": "us/iter",
            "extra": "iterations: 1565\ncpu: 447.4445226837082 us\nthreads: 1"
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
            "value": 25.33942046348555,
            "unit": "us/iter",
            "extra": "iterations: 27962\ncpu: 25.33662363207208 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.954569226734904,
            "unit": "us/iter",
            "extra": "iterations: 118213\ncpu: 5.953871976855341 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.483166152147834,
            "unit": "us/iter",
            "extra": "iterations: 155809\ncpu: 4.482852909652199 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.081208811014392,
            "unit": "us/iter",
            "extra": "iterations: 167563\ncpu: 4.080607693822632 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.769446125232383,
            "unit": "us/iter",
            "extra": "iterations: 185495\ncpu: 3.7693731475241794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7583520563255406,
            "unit": "us/iter",
            "extra": "iterations: 185209\ncpu: 3.758097138907948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.561664907137862,
            "unit": "us/iter",
            "extra": "iterations: 195128\ncpu: 3.561252224181045 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.1799381771873,
            "unit": "us/iter",
            "extra": "iterations: 4707\ncpu: 148.16851880178532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.23194718668366,
            "unit": "us/iter",
            "extra": "iterations: 22589\ncpu: 31.230350170436942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.577461163087804,
            "unit": "us/iter",
            "extra": "iterations: 29714\ncpu: 23.57588712391456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.501062498161502,
            "unit": "us/iter",
            "extra": "iterations: 33985\ncpu: 20.499744504928653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.70821820749761,
            "unit": "us/iter",
            "extra": "iterations: 33986\ncpu: 20.707314717824854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.326977652710816,
            "unit": "us/iter",
            "extra": "iterations: 36425\ncpu: 19.325441537405577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.98894328860917,
            "unit": "us/iter",
            "extra": "iterations: 36818\ncpu: 18.986371747514756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.6907632732559,
            "unit": "us/iter",
            "extra": "iterations: 2053\ncpu: 342.66625669751704 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.58698773880823,
            "unit": "us/iter",
            "extra": "iterations: 10521\ncpu: 66.57811206159131 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.231207106187185,
            "unit": "us/iter",
            "extra": "iterations: 14804\ncpu: 47.225887260200295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.56199284905653,
            "unit": "us/iter",
            "extra": "iterations: 16781\ncpu: 41.560727668196485 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.655377615251055,
            "unit": "us/iter",
            "extra": "iterations: 16681\ncpu: 41.65112984833034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.6524275814659,
            "unit": "us/iter",
            "extra": "iterations: 17461\ncpu: 39.648922684840294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.51360600735819,
            "unit": "us/iter",
            "extra": "iterations: 18211\ncpu: 38.50781126791506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1869.3961914893252,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1869.2483404255265 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.3924405182682,
            "unit": "us/iter",
            "extra": "iterations: 1698\ncpu: 406.3405141342735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 270.5564681097794,
            "unit": "us/iter",
            "extra": "iterations: 2587\ncpu: 270.5369458832619 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 246.09257503276575,
            "unit": "us/iter",
            "extra": "iterations: 3052\ncpu: 246.07152719528207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 222.1726467598468,
            "unit": "us/iter",
            "extra": "iterations: 3148\ncpu: 222.15626715374785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.7712414626754,
            "unit": "us/iter",
            "extra": "iterations: 3309\ncpu: 211.74641402236182 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 203.53085539000944,
            "unit": "us/iter",
            "extra": "iterations: 3423\ncpu: 203.5139447852777 us\nthreads: 1"
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
          "id": "22c24f94d7b2b05084355f5d67df9bedd38fe6d4",
          "message": "Merge pull request #247 from genogrove/fix/macos-ci-apple-clang-path\n\nUse absolute path to Apple Clang in macOS CI",
          "timestamp": "2026-03-19T13:49:35-05:00",
          "tree_id": "b2daf9943b76f127e8b155d3f675f9e8dff3f7b5",
          "url": "https://github.com/genogrove/genogrove/commit/22c24f94d7b2b05084355f5d67df9bedd38fe6d4"
        },
        "date": 1773946427640,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.672533861121536,
            "unit": "us/iter",
            "extra": "iterations: 20968\ncpu: 33.670095383441435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.586895731462537,
            "unit": "us/iter",
            "extra": "iterations: 92233\ncpu: 7.586615257012134 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.145394023493625,
            "unit": "us/iter",
            "extra": "iterations: 134761\ncpu: 5.144989485088417 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.293332102914436,
            "unit": "us/iter",
            "extra": "iterations: 163359\ncpu: 4.293106954621416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.935263949538969,
            "unit": "us/iter",
            "extra": "iterations: 177246\ncpu: 3.935155715784841 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9135832094018728,
            "unit": "us/iter",
            "extra": "iterations: 178862\ncpu: 3.913339949234607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7120177453026253,
            "unit": "us/iter",
            "extra": "iterations: 190642\ncpu: 3.7119769672999645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.9918269307007,
            "unit": "us/iter",
            "extra": "iterations: 2525\ncpu: 272.96043722772316 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.89380034234019,
            "unit": "us/iter",
            "extra": "iterations: 16358\ncpu: 42.89072808411783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.359070883882282,
            "unit": "us/iter",
            "extra": "iterations: 23080\ncpu: 30.35418288561525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.855456237407004,
            "unit": "us/iter",
            "extra": "iterations: 27295\ncpu: 25.853913537277904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.44638108555569,
            "unit": "us/iter",
            "extra": "iterations: 27175\ncpu: 26.443751683532668 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.711149854371136,
            "unit": "us/iter",
            "extra": "iterations: 28154\ncpu: 24.710533068125276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.026090748548853,
            "unit": "us/iter",
            "extra": "iterations: 27747\ncpu: 25.02376379428408 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 624.3089553172374,
            "unit": "us/iter",
            "extra": "iterations: 1119\ncpu: 624.2708900804298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.45244805195053,
            "unit": "us/iter",
            "extra": "iterations: 5698\ncpu: 123.43781783081813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.71529359958639,
            "unit": "us/iter",
            "extra": "iterations: 9765\ncpu: 69.7077760368665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.46631308370067,
            "unit": "us/iter",
            "extra": "iterations: 11457\ncpu: 61.462010037531684 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.45527028474836,
            "unit": "us/iter",
            "extra": "iterations: 11203\ncpu: 62.4507915736858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.92783445265067,
            "unit": "us/iter",
            "extra": "iterations: 11912\ncpu: 58.923829667562394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.487425914556376,
            "unit": "us/iter",
            "extra": "iterations: 11399\ncpu: 62.479609965786466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3633.781859374944,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3633.210770833321 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 897.1231782051237,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 897.0584589743606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 620.3519574468138,
            "unit": "us/iter",
            "extra": "iterations: 1128\ncpu: 620.2710310283678 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 518.010182557269,
            "unit": "us/iter",
            "extra": "iterations: 1353\ncpu: 517.9925158906137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.84810805084203,
            "unit": "us/iter",
            "extra": "iterations: 1416\ncpu: 491.77180649717656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 460.05063421054916,
            "unit": "us/iter",
            "extra": "iterations: 1520\ncpu: 460.018965789473 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.0761834509558,
            "unit": "us/iter",
            "extra": "iterations: 1559\ncpu: 449.0376343810126 us\nthreads: 1"
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
            "value": 25.158489405257704,
            "unit": "us/iter",
            "extra": "iterations: 27844\ncpu: 25.15644336302255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.95333287682846,
            "unit": "us/iter",
            "extra": "iterations: 117560\ncpu: 5.95284957468526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.74654853934439,
            "unit": "us/iter",
            "extra": "iterations: 147468\ncpu: 4.7461332424661515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.069754817526851,
            "unit": "us/iter",
            "extra": "iterations: 172080\ncpu: 4.069533897024648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8753557894506794,
            "unit": "us/iter",
            "extra": "iterations: 181658\ncpu: 3.8750007101256334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.797217885599497,
            "unit": "us/iter",
            "extra": "iterations: 185244\ncpu: 3.7971185895359576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6213266730049507,
            "unit": "us/iter",
            "extra": "iterations: 192483\ncpu: 3.6209960671851413 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.53219606598904,
            "unit": "us/iter",
            "extra": "iterations: 4728\ncpu: 148.524317258882 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.84517954236005,
            "unit": "us/iter",
            "extra": "iterations: 22769\ncpu: 30.842454433659768 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.466250680588423,
            "unit": "us/iter",
            "extra": "iterations: 31223\ncpu: 22.46594734650737 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.05542037133056,
            "unit": "us/iter",
            "extra": "iterations: 34686\ncpu: 20.054109871417804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.287647937369265,
            "unit": "us/iter",
            "extra": "iterations: 34616\ncpu: 20.28627287959338 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.394056009654886,
            "unit": "us/iter",
            "extra": "iterations: 36458\ncpu: 19.39015480827243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.75489642627793,
            "unit": "us/iter",
            "extra": "iterations: 37384\ncpu: 18.753401722662044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 341.7879859086561,
            "unit": "us/iter",
            "extra": "iterations: 2058\ncpu: 341.7464266277924 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 65.95143616020862,
            "unit": "us/iter",
            "extra": "iterations: 10636\ncpu: 65.9435559420835 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.446444219203784,
            "unit": "us/iter",
            "extra": "iterations: 14799\ncpu: 48.441199878370305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 40.503474156912134,
            "unit": "us/iter",
            "extra": "iterations: 17258\ncpu: 40.5018011357051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.83754367975965,
            "unit": "us/iter",
            "extra": "iterations: 17262\ncpu: 40.8349635036498 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.05340495407693,
            "unit": "us/iter",
            "extra": "iterations: 17965\ncpu: 39.05108817144437 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.012676988989,
            "unit": "us/iter",
            "extra": "iterations: 18439\ncpu: 38.00884901567314 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1859.744493368629,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1859.6124854111442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.6082198953023,
            "unit": "us/iter",
            "extra": "iterations: 1719\ncpu: 406.5753234438647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 267.66606195029317,
            "unit": "us/iter",
            "extra": "iterations: 2615\ncpu: 267.64975411089665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 229.10113608314052,
            "unit": "us/iter",
            "extra": "iterations: 3079\ncpu: 229.0832416368962 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.85084862819386,
            "unit": "us/iter",
            "extra": "iterations: 3171\ncpu: 220.85081740775942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 218.03136655559305,
            "unit": "us/iter",
            "extra": "iterations: 3301\ncpu: 218.01604574371373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 204.40947157772365,
            "unit": "us/iter",
            "extra": "iterations: 3448\ncpu: 204.39007424593956 us\nthreads: 1"
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
          "id": "9f228b5b78d955b08007167f2c7722c8c56d83da",
          "message": "Merge pull request #249 from genogrove/test/bam-filter-array-tag-tests-177\n\nAdd BAM reader tests for QC-fail/duplicate filters and array tags",
          "timestamp": "2026-03-19T15:34:37-05:00",
          "tree_id": "d90e2ad0a8cffb28568fe002c993da099cc312f2",
          "url": "https://github.com/genogrove/genogrove/commit/9f228b5b78d955b08007167f2c7722c8c56d83da"
        },
        "date": 1773952724728,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.580491560389795,
            "unit": "us/iter",
            "extra": "iterations: 21328\ncpu: 33.57857248687172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.670788613193023,
            "unit": "us/iter",
            "extra": "iterations: 91808\ncpu: 7.670173122168005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.21683376370411,
            "unit": "us/iter",
            "extra": "iterations: 135542\ncpu: 5.216456463679156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.30603844374403,
            "unit": "us/iter",
            "extra": "iterations: 162107\ncpu: 4.305758270771775 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.999040620736637,
            "unit": "us/iter",
            "extra": "iterations: 175920\ncpu: 3.998960572987727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.039415551806684,
            "unit": "us/iter",
            "extra": "iterations: 178423\ncpu: 4.039040488053671 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6609300050634923,
            "unit": "us/iter",
            "extra": "iterations: 185642\ncpu: 3.660808701694663 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.4647764797404,
            "unit": "us/iter",
            "extra": "iterations: 2568\ncpu: 272.43849493769466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.28910595861332,
            "unit": "us/iter",
            "extra": "iterations: 16044\ncpu: 43.282730553477954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.355355992296133,
            "unit": "us/iter",
            "extra": "iterations: 22846\ncpu: 30.352193644401673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.73765760229602,
            "unit": "us/iter",
            "extra": "iterations: 27176\ncpu: 25.73531936267297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.532944648215878,
            "unit": "us/iter",
            "extra": "iterations: 26991\ncpu: 25.530669148975605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.851763016873683,
            "unit": "us/iter",
            "extra": "iterations: 27618\ncpu: 25.84920631472227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.792207333618588,
            "unit": "us/iter",
            "extra": "iterations: 28008\ncpu: 24.78863421165379 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 632.0259963996339,
            "unit": "us/iter",
            "extra": "iterations: 1111\ncpu: 631.9988118811888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 126.15949332611557,
            "unit": "us/iter",
            "extra": "iterations: 5544\ncpu: 126.14772420634927 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.63488344192979,
            "unit": "us/iter",
            "extra": "iterations: 9669\ncpu: 71.62944006619115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.011328384587166,
            "unit": "us/iter",
            "extra": "iterations: 11316\ncpu: 61.00603455284571 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.83017759440394,
            "unit": "us/iter",
            "extra": "iterations: 11149\ncpu: 61.821218315544115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.897733624455846,
            "unit": "us/iter",
            "extra": "iterations: 11679\ncpu: 58.89581393954976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.543122119205464,
            "unit": "us/iter",
            "extra": "iterations: 11325\ncpu: 61.53525174392958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3655.0240732984403,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3654.7325130889985 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 902.8645587096845,
            "unit": "us/iter",
            "extra": "iterations: 775\ncpu: 902.7721987096799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.2080887311605,
            "unit": "us/iter",
            "extra": "iterations: 1127\ncpu: 621.1111419698298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.0006894273165,
            "unit": "us/iter",
            "extra": "iterations: 1362\ncpu: 514.9386424375925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.11029564606633,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 492.04460182584245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.87487335957917,
            "unit": "us/iter",
            "extra": "iterations: 1524\ncpu: 459.82197112860877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.281040868464,
            "unit": "us/iter",
            "extra": "iterations: 1566\ncpu: 446.2549540229879 us\nthreads: 1"
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
            "value": 25.271776676195266,
            "unit": "us/iter",
            "extra": "iterations: 27637\ncpu: 25.26946535441615 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.962685193975626,
            "unit": "us/iter",
            "extra": "iterations: 115865\ncpu: 5.96191275190954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.526091802108825,
            "unit": "us/iter",
            "extra": "iterations: 154125\ncpu: 4.525397352798069 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.045658845555729,
            "unit": "us/iter",
            "extra": "iterations: 173590\ncpu: 4.045459703899979 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.9174685687490602,
            "unit": "us/iter",
            "extra": "iterations: 179137\ncpu: 3.917200689974703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8369058020100884,
            "unit": "us/iter",
            "extra": "iterations: 181575\ncpu: 3.8364042241497973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6661392636919237,
            "unit": "us/iter",
            "extra": "iterations: 192175\ncpu: 3.6657344919994816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.09540784479486,
            "unit": "us/iter",
            "extra": "iterations: 4742\ncpu: 147.09237832138356 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.25712172948951,
            "unit": "us/iter",
            "extra": "iterations: 22550\ncpu: 31.25302811529932 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.511008277720727,
            "unit": "us/iter",
            "extra": "iterations: 31168\ncpu: 22.510160741786297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.305129929396,
            "unit": "us/iter",
            "extra": "iterations: 34842\ncpu: 20.303345445152537 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.312874837441363,
            "unit": "us/iter",
            "extra": "iterations: 34603\ncpu: 20.31236051787416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.116577434718657,
            "unit": "us/iter",
            "extra": "iterations: 36534\ncpu: 19.114782805058425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.878817440149994,
            "unit": "us/iter",
            "extra": "iterations: 37385\ncpu: 18.877664357362594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.54934191354533,
            "unit": "us/iter",
            "extra": "iterations: 2059\ncpu: 342.51589412336125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.54642868076401,
            "unit": "us/iter",
            "extra": "iterations: 10453\ncpu: 66.53832105615633 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.24271892873821,
            "unit": "us/iter",
            "extra": "iterations: 14861\ncpu: 47.239961240832066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.65384812846845,
            "unit": "us/iter",
            "extra": "iterations: 16751\ncpu: 41.652400155214416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.12427703792161,
            "unit": "us/iter",
            "extra": "iterations: 16745\ncpu: 41.1198639593907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.50397607845372,
            "unit": "us/iter",
            "extra": "iterations: 17641\ncpu: 39.499880448953924 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.47809005524813,
            "unit": "us/iter",
            "extra": "iterations: 18100\ncpu: 38.472899337016855 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1871.8810804289749,
            "unit": "us/iter",
            "extra": "iterations: 373\ncpu: 1871.7113780160948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.2762688734045,
            "unit": "us/iter",
            "extra": "iterations: 1722\ncpu: 408.2293931475004 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 267.6821366934002,
            "unit": "us/iter",
            "extra": "iterations: 2619\ncpu: 267.64854639175314 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 227.1527508122126,
            "unit": "us/iter",
            "extra": "iterations: 3078\ncpu: 227.12971767381433 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 219.0902743557518,
            "unit": "us/iter",
            "extra": "iterations: 3182\ncpu: 219.07247611565015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 209.36599400299727,
            "unit": "us/iter",
            "extra": "iterations: 3335\ncpu: 209.33144767616153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 202.39523931375237,
            "unit": "us/iter",
            "extra": "iterations: 3439\ncpu: 202.35362314626272 us\nthreads: 1"
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
          "id": "ed8dd499d9faf2e82978b6be503c05497b46d2eb",
          "message": "Merge pull request #251 from genogrove/enhance/query-result-const-ref-157\n\nReturn query_result getters by const reference",
          "timestamp": "2026-03-19T16:04:08-05:00",
          "tree_id": "b421621a13a5629dd20cfde23f952498f793771d",
          "url": "https://github.com/genogrove/genogrove/commit/ed8dd499d9faf2e82978b6be503c05497b46d2eb"
        },
        "date": 1773954489626,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.55126166173758,
            "unit": "us/iter",
            "extra": "iterations: 20966\ncpu: 33.546178145569016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.707079332633589,
            "unit": "us/iter",
            "extra": "iterations: 90505\ncpu: 7.706586862604276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.108076987350301,
            "unit": "us/iter",
            "extra": "iterations: 137633\ncpu: 5.1076238329470405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.3816339180480295,
            "unit": "us/iter",
            "extra": "iterations: 159508\ncpu: 4.381407666073173 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9829761576087304,
            "unit": "us/iter",
            "extra": "iterations: 176031\ncpu: 3.982722918122379 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.890095706314853,
            "unit": "us/iter",
            "extra": "iterations: 179403\ncpu: 3.8897582927821714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6980006926635154,
            "unit": "us/iter",
            "extra": "iterations: 189125\ncpu: 3.6978876563119645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.32947186651336,
            "unit": "us/iter",
            "extra": "iterations: 2577\ncpu: 273.2963053938689 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.76838029661039,
            "unit": "us/iter",
            "extra": "iterations: 16048\ncpu: 43.76640740279154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.235908120770397,
            "unit": "us/iter",
            "extra": "iterations: 23052\ncpu: 30.230034877667823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.621930580252574,
            "unit": "us/iter",
            "extra": "iterations: 27557\ncpu: 25.621111151431553 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.67163096111527,
            "unit": "us/iter",
            "extra": "iterations: 27260\ncpu: 25.66973400586938 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.239867885364706,
            "unit": "us/iter",
            "extra": "iterations: 27461\ncpu: 25.23886795819527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.480934541021163,
            "unit": "us/iter",
            "extra": "iterations: 28705\ncpu: 24.479241560703738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 625.8375053667347,
            "unit": "us/iter",
            "extra": "iterations: 1118\ncpu: 625.8009293381047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.12862279774298,
            "unit": "us/iter",
            "extra": "iterations: 5676\ncpu: 124.11489975334736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.44007689144553,
            "unit": "us/iter",
            "extra": "iterations: 9728\ncpu: 70.43496217105269 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.987350345423664,
            "unit": "us/iter",
            "extra": "iterations: 11580\ncpu: 59.98528514680476 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.51411420204853,
            "unit": "us/iter",
            "extra": "iterations: 10928\ncpu: 61.50611447657399 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.12564101908541,
            "unit": "us/iter",
            "extra": "iterations: 11736\ncpu: 60.12179345603257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 63.714695889187766,
            "unit": "us/iter",
            "extra": "iterations: 11190\ncpu: 63.709181590706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3812.6456321243527,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3812.280119170986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 896.4466653796688,
            "unit": "us/iter",
            "extra": "iterations: 777\ncpu: 896.383072072072 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 619.6186312997237,
            "unit": "us/iter",
            "extra": "iterations: 1131\ncpu: 619.5292130857653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 510.39998532648195,
            "unit": "us/iter",
            "extra": "iterations: 1363\ncpu: 510.3645040352171 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 495.1490419580415,
            "unit": "us/iter",
            "extra": "iterations: 1430\ncpu: 495.08901818181766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 457.3766240995308,
            "unit": "us/iter",
            "extra": "iterations: 1527\ncpu: 457.33445972495053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 444.3237530158657,
            "unit": "us/iter",
            "extra": "iterations: 1575\ncpu: 444.307554920634 us\nthreads: 1"
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
            "value": 25.224757200606973,
            "unit": "us/iter",
            "extra": "iterations: 27706\ncpu: 25.22285393055651 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.946484495252729,
            "unit": "us/iter",
            "extra": "iterations: 115642\ncpu: 5.945789384479671 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.563135540365457,
            "unit": "us/iter",
            "extra": "iterations: 151999\ncpu: 4.562790814413259 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9023939696596712,
            "unit": "us/iter",
            "extra": "iterations: 180222\ncpu: 3.902140576622165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.803821630267993,
            "unit": "us/iter",
            "extra": "iterations: 183798\ncpu: 3.8032445837277877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7548356017593427,
            "unit": "us/iter",
            "extra": "iterations: 187575\ncpu: 3.754537385045976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5721760307538415,
            "unit": "us/iter",
            "extra": "iterations: 194057\ncpu: 3.5718046862519635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.88521390601792,
            "unit": "us/iter",
            "extra": "iterations: 4703\ncpu: 147.87101318307558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.207066297117343,
            "unit": "us/iter",
            "extra": "iterations: 22550\ncpu: 31.203795299334825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.518418443514772,
            "unit": "us/iter",
            "extra": "iterations: 29875\ncpu: 23.517175196652726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.69470514774795,
            "unit": "us/iter",
            "extra": "iterations: 34112\ncpu: 20.690659738508547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.030504424018506,
            "unit": "us/iter",
            "extra": "iterations: 34923\ncpu: 20.029570054119116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.09654673214126,
            "unit": "us/iter",
            "extra": "iterations: 36859\ncpu: 19.091212376895776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.571815608646936,
            "unit": "us/iter",
            "extra": "iterations: 37838\ncpu: 18.570093768169457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 345.42912683643294,
            "unit": "us/iter",
            "extra": "iterations: 2042\ncpu: 345.39273898139146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.82961829291573,
            "unit": "us/iter",
            "extra": "iterations: 10474\ncpu: 66.82772904334507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.47887251621885,
            "unit": "us/iter",
            "extra": "iterations: 14645\ncpu: 47.4721235916693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.17757524096359,
            "unit": "us/iter",
            "extra": "iterations: 16600\ncpu: 42.1765624096386 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.66459958494011,
            "unit": "us/iter",
            "extra": "iterations: 16865\ncpu: 41.65935072635648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.00659739007144,
            "unit": "us/iter",
            "extra": "iterations: 17625\ncpu: 40.004863489361874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.71552469644517,
            "unit": "us/iter",
            "extra": "iterations: 18201\ncpu: 38.710656172737735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1884.5879274193621,
            "unit": "us/iter",
            "extra": "iterations: 372\ncpu: 1884.4619435483803 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 414.27281257414313,
            "unit": "us/iter",
            "extra": "iterations: 1686\ncpu: 414.2432419928791 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 275.66173764564337,
            "unit": "us/iter",
            "extra": "iterations: 2489\ncpu: 275.6305781438322 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 238.0904936881613,
            "unit": "us/iter",
            "extra": "iterations: 2931\ncpu: 238.06936745138313 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 228.01031184896405,
            "unit": "us/iter",
            "extra": "iterations: 3072\ncpu: 227.9861907552074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 218.3330203061497,
            "unit": "us/iter",
            "extra": "iterations: 3201\ncpu: 218.311887847547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 208.46655695443502,
            "unit": "us/iter",
            "extra": "iterations: 3336\ncpu: 208.4614175659476 us\nthreads: 1"
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
          "id": "fe827a9faf12127bea264214c82d94e1535b0b8f",
          "message": "Merge pull request #252 from genogrove/feat/gtf-attribute-validation-219\n\nAdd opt-in GTF attribute validation",
          "timestamp": "2026-03-19T21:03:11-05:00",
          "tree_id": "940ebfe062997a2b8bdceda52c1ce43af34e0531",
          "url": "https://github.com/genogrove/genogrove/commit/fe827a9faf12127bea264214c82d94e1535b0b8f"
        },
        "date": 1773972434294,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.07170768879759,
            "unit": "us/iter",
            "extra": "iterations: 21915\ncpu: 32.050543554642935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.583670984483875,
            "unit": "us/iter",
            "extra": "iterations: 92485\ncpu: 7.581506017191978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.260527169566587,
            "unit": "us/iter",
            "extra": "iterations: 132538\ncpu: 5.259921939368332 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.5404305561814935,
            "unit": "us/iter",
            "extra": "iterations: 155327\ncpu: 4.539412130537509 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.149050248135154,
            "unit": "us/iter",
            "extra": "iterations: 169061\ncpu: 4.147999225131761 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.103512517250521,
            "unit": "us/iter",
            "extra": "iterations: 170285\ncpu: 4.102947294242007 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.9081278235525474,
            "unit": "us/iter",
            "extra": "iterations: 178410\ncpu: 3.9075047026511953 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 262.4791922352023,
            "unit": "us/iter",
            "extra": "iterations: 2653\ncpu: 262.43982548058773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.27264006665499,
            "unit": "us/iter",
            "extra": "iterations: 16203\ncpu: 43.265421094858965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.51284925569219,
            "unit": "us/iter",
            "extra": "iterations: 22840\ncpu: 30.510297416812577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.044901816963097,
            "unit": "us/iter",
            "extra": "iterations: 26858\ncpu: 26.041522786506807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.701803574055692,
            "unit": "us/iter",
            "extra": "iterations: 27196\ncpu: 25.7004196573025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.68105943134318,
            "unit": "us/iter",
            "extra": "iterations: 28453\ncpu: 24.67726872386036 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 23.95115473960265,
            "unit": "us/iter",
            "extra": "iterations: 29359\ncpu: 23.949496679042163 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 618.0957272727269,
            "unit": "us/iter",
            "extra": "iterations: 1133\ncpu: 618.0043221535744 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 107.75042137190803,
            "unit": "us/iter",
            "extra": "iterations: 6429\ncpu: 107.74334842121641 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 64.86308289436957,
            "unit": "us/iter",
            "extra": "iterations: 10821\ncpu: 64.85971185657513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 54.721042875059766,
            "unit": "us/iter",
            "extra": "iterations: 12758\ncpu: 54.71435663897159 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 54.85525175424789,
            "unit": "us/iter",
            "extra": "iterations: 12826\ncpu: 54.85219881490705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 52.74196700154587,
            "unit": "us/iter",
            "extra": "iterations: 12940\ncpu: 52.736134621329306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 53.10904679860319,
            "unit": "us/iter",
            "extra": "iterations: 12885\ncpu: 53.101850679084244 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3853.716303867324,
            "unit": "us/iter",
            "extra": "iterations: 181\ncpu: 3853.282972375697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 913.7927639429166,
            "unit": "us/iter",
            "extra": "iterations: 771\ncpu: 913.7241880674425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 640.795059687779,
            "unit": "us/iter",
            "extra": "iterations: 1089\ncpu: 640.6704159779592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 529.4177163388835,
            "unit": "us/iter",
            "extra": "iterations: 1322\ncpu: 529.342562027232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 509.28201235464684,
            "unit": "us/iter",
            "extra": "iterations: 1376\ncpu: 509.20705377907024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 481.02465887208365,
            "unit": "us/iter",
            "extra": "iterations: 1454\ncpu: 480.96096354883025 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 469.69525302012363,
            "unit": "us/iter",
            "extra": "iterations: 1490\ncpu: 469.6663718120813 us\nthreads: 1"
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
            "value": 24.024895694629166,
            "unit": "us/iter",
            "extra": "iterations: 29289\ncpu: 24.02141670934482 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.771555543619376,
            "unit": "us/iter",
            "extra": "iterations: 121013\ncpu: 5.771014849644235 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.441233639248058,
            "unit": "us/iter",
            "extra": "iterations: 158214\ncpu: 4.440600439910493 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.8929082520814124,
            "unit": "us/iter",
            "extra": "iterations: 179688\ncpu: 3.8926366479676027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7734610978700696,
            "unit": "us/iter",
            "extra": "iterations: 186288\ncpu: 3.773170027054877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.6935589057686586,
            "unit": "us/iter",
            "extra": "iterations: 189905\ncpu: 3.693324451699502 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5833543598021866,
            "unit": "us/iter",
            "extra": "iterations: 195135\ncpu: 3.5829583519102015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 145.94412983770306,
            "unit": "us/iter",
            "extra": "iterations: 4806\ncpu: 145.93327777777824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.335492072359003,
            "unit": "us/iter",
            "extra": "iterations: 23273\ncpu: 30.33104541743651 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 21.966887702034338,
            "unit": "us/iter",
            "extra": "iterations: 32111\ncpu: 21.96539942698763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 19.314460486865396,
            "unit": "us/iter",
            "extra": "iterations: 36355\ncpu: 19.312194223628193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.482379688497858,
            "unit": "us/iter",
            "extra": "iterations: 36019\ncpu: 19.480874705016873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.690171606614836,
            "unit": "us/iter",
            "extra": "iterations: 37551\ncpu: 18.68777984607615 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.48087185638201,
            "unit": "us/iter",
            "extra": "iterations: 37934\ncpu: 18.479631544261167 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.0494513145045,
            "unit": "us/iter",
            "extra": "iterations: 2054\ncpu: 343.00939581304715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.340027572484,
            "unit": "us/iter",
            "extra": "iterations: 10554\ncpu: 66.33513795717266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 44.99338363204193,
            "unit": "us/iter",
            "extra": "iterations: 15567\ncpu: 44.98891398471117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 39.60489805579053,
            "unit": "us/iter",
            "extra": "iterations: 17745\ncpu: 39.60128188222062 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 39.396689354673185,
            "unit": "us/iter",
            "extra": "iterations: 17557\ncpu: 39.39285293615093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.27980120516564,
            "unit": "us/iter",
            "extra": "iterations: 17425\ncpu: 38.277362123386006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.730613582752845,
            "unit": "us/iter",
            "extra": "iterations: 18229\ncpu: 37.7273904218555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1936.8846160220455,
            "unit": "us/iter",
            "extra": "iterations: 362\ncpu: 1936.672417127067 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 407.7771596980221,
            "unit": "us/iter",
            "extra": "iterations: 1722\ncpu: 407.74914285714226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 267.43296853415995,
            "unit": "us/iter",
            "extra": "iterations: 2606\ncpu: 267.39912624712053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 226.80357370647474,
            "unit": "us/iter",
            "extra": "iterations: 3073\ncpu: 226.77009306866367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.0231955359951,
            "unit": "us/iter",
            "extra": "iterations: 3181\ncpu: 219.99542816724193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 213.69916370325316,
            "unit": "us/iter",
            "extra": "iterations: 3262\ncpu: 213.65899110974902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 208.803664181329,
            "unit": "us/iter",
            "extra": "iterations: 3353\ncpu: 208.78039218610266 us\nthreads: 1"
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
          "id": "279ca2152e94fc78a5fd2288ef8f1fd56234c0e3",
          "message": "Release v0.18.0\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-19T21:08:52-05:00",
          "tree_id": "be547fcaae5cb735f548c4cbd366dd76c3ad7230",
          "url": "https://github.com/genogrove/genogrove/commit/279ca2152e94fc78a5fd2288ef8f1fd56234c0e3"
        },
        "date": 1773972977201,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.998624799116264,
            "unit": "us/iter",
            "extra": "iterations: 19912\ncpu: 34.998020439935715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.487290772328754,
            "unit": "us/iter",
            "extra": "iterations: 84420\ncpu: 8.48579507225776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.417590482163692,
            "unit": "us/iter",
            "extra": "iterations: 130744\ncpu: 5.416789458789694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.482773911530931,
            "unit": "us/iter",
            "extra": "iterations: 155218\ncpu: 4.482263977116056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.115747096299923,
            "unit": "us/iter",
            "extra": "iterations: 163240\ncpu: 4.115541092869393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.983397001959252,
            "unit": "us/iter",
            "extra": "iterations: 174047\ncpu: 3.982784925910818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.8303325283258505,
            "unit": "us/iter",
            "extra": "iterations: 182607\ncpu: 3.8302179105948824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 279.7248765432097,
            "unit": "us/iter",
            "extra": "iterations: 2511\ncpu: 279.6975619275186 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 47.193059113958704,
            "unit": "us/iter",
            "extra": "iterations: 14988\ncpu: 47.18952688817726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 32.15776172125872,
            "unit": "us/iter",
            "extra": "iterations: 21798\ncpu: 32.15484347187814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.596553294951406,
            "unit": "us/iter",
            "extra": "iterations: 25706\ncpu: 26.594698124951403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.704678349480503,
            "unit": "us/iter",
            "extra": "iterations: 25907\ncpu: 26.702762033427305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.593436993666113,
            "unit": "us/iter",
            "extra": "iterations: 27156\ncpu: 25.59162133598466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.198590234474242,
            "unit": "us/iter",
            "extra": "iterations: 27423\ncpu: 25.196641687634454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 644.5990642791555,
            "unit": "us/iter",
            "extra": "iterations: 1089\ncpu: 644.5699182736452 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 127.58364047186836,
            "unit": "us/iter",
            "extra": "iterations: 5510\ncpu: 127.56916007259517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 74.02955520000128,
            "unit": "us/iter",
            "extra": "iterations: 9375\ncpu: 74.0263689599999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 67.28128377153048,
            "unit": "us/iter",
            "extra": "iterations: 11030\ncpu: 67.27681396192219 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.91587175250031,
            "unit": "us/iter",
            "extra": "iterations: 10893\ncpu: 64.9109734692002 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.72622429986985,
            "unit": "us/iter",
            "extra": "iterations: 11605\ncpu: 59.72193744075813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.56863137978775,
            "unit": "us/iter",
            "extra": "iterations: 10835\ncpu: 62.55557157360392 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3714.7022553191487,
            "unit": "us/iter",
            "extra": "iterations: 188\ncpu: 3714.397632978709 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 926.3234921259769,
            "unit": "us/iter",
            "extra": "iterations: 762\ncpu: 926.2032454068217 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 630.6223285328532,
            "unit": "us/iter",
            "extra": "iterations: 1111\ncpu: 630.590783978397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 524.0137488687749,
            "unit": "us/iter",
            "extra": "iterations: 1326\ncpu: 523.9728416289605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 493.5821335689166,
            "unit": "us/iter",
            "extra": "iterations: 1415\ncpu: 493.5318946996472 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 462.8870382585812,
            "unit": "us/iter",
            "extra": "iterations: 1516\ncpu: 462.81007981530445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 448.5642933247702,
            "unit": "us/iter",
            "extra": "iterations: 1558\ncpu: 448.54555263157835 us\nthreads: 1"
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
            "value": 26.869261090520084,
            "unit": "us/iter",
            "extra": "iterations: 26171\ncpu: 26.866878415039555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.318751561974004,
            "unit": "us/iter",
            "extra": "iterations: 106916\ncpu: 6.318478010774793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.673244211793798,
            "unit": "us/iter",
            "extra": "iterations: 149485\ncpu: 4.672545372445394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.159314041937249,
            "unit": "us/iter",
            "extra": "iterations: 168538\ncpu: 4.15904545562426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.88632693256205,
            "unit": "us/iter",
            "extra": "iterations: 180447\ncpu: 3.8858119336979944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8226445537028346,
            "unit": "us/iter",
            "extra": "iterations: 182849\ncpu: 3.8222145431475965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.654458246198808,
            "unit": "us/iter",
            "extra": "iterations: 190797\ncpu: 3.6541401751599856 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 156.27817784256547,
            "unit": "us/iter",
            "extra": "iterations: 4459\ncpu: 156.25698340435142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 32.99633232997785,
            "unit": "us/iter",
            "extra": "iterations: 21262\ncpu: 32.993724673125705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.346701697193307,
            "unit": "us/iter",
            "extra": "iterations: 29755\ncpu: 23.34457341623262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.805722638369023,
            "unit": "us/iter",
            "extra": "iterations: 33642\ncpu: 20.80318738481656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.68699973374372,
            "unit": "us/iter",
            "extra": "iterations: 33802\ncpu: 20.685418111354398 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.919969593827815,
            "unit": "us/iter",
            "extra": "iterations: 35256\ncpu: 19.916986640571807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.092937325414585,
            "unit": "us/iter",
            "extra": "iterations: 36873\ncpu: 19.091315542537966 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 358.2124897959156,
            "unit": "us/iter",
            "extra": "iterations: 1960\ncpu: 358.17325867346693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 70.5392767803117,
            "unit": "us/iter",
            "extra": "iterations: 9914\ncpu: 70.53576901351587 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 49.15160213926184,
            "unit": "us/iter",
            "extra": "iterations: 14304\ncpu: 49.14779278523499 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 43.028101719810806,
            "unit": "us/iter",
            "extra": "iterations: 16339\ncpu: 43.022113654446684 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 42.50522855056526,
            "unit": "us/iter",
            "extra": "iterations: 16434\ncpu: 42.50022581234011 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.65897055761324,
            "unit": "us/iter",
            "extra": "iterations: 17288\ncpu: 40.652696899583525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.97461886708279,
            "unit": "us/iter",
            "extra": "iterations: 17936\ncpu: 38.9724728479036 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1973.3050840336252,
            "unit": "us/iter",
            "extra": "iterations: 357\ncpu: 1972.9565042016804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 431.022296980912,
            "unit": "us/iter",
            "extra": "iterations: 1623\ncpu: 430.9907393715317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 276.0030587534752,
            "unit": "us/iter",
            "extra": "iterations: 2519\ncpu: 275.9544950377135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.91884317031867,
            "unit": "us/iter",
            "extra": "iterations: 2965\ncpu: 234.90841956154995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.300884715022,
            "unit": "us/iter",
            "extra": "iterations: 3088\ncpu: 226.26717843264422 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 214.112455645163,
            "unit": "us/iter",
            "extra": "iterations: 3224\ncpu: 214.09725062034616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 207.09347714538018,
            "unit": "us/iter",
            "extra": "iterations: 3391\ncpu: 207.05599085815297 us\nthreads: 1"
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
          "id": "90b0d8c9469de15eb8308647e6fec3d4103d8866",
          "message": "Update CLAUDE.md for v0.18.0 API changes\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-19T21:15:49-05:00",
          "tree_id": "9378b950ac91cefb2f30b605a37cd2afca0a92d5",
          "url": "https://github.com/genogrove/genogrove/commit/90b0d8c9469de15eb8308647e6fec3d4103d8866"
        },
        "date": 1773973193228,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 30.850997215576257,
            "unit": "us/iter",
            "extra": "iterations: 22985\ncpu: 30.84261635849467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.271821033636126,
            "unit": "us/iter",
            "extra": "iterations: 95314\ncpu: 7.271317623853789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.869461313336559,
            "unit": "us/iter",
            "extra": "iterations: 142827\ncpu: 4.868923417841163 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.156151113340643,
            "unit": "us/iter",
            "extra": "iterations: 167424\ncpu: 4.15590526447821 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.7987754750227674,
            "unit": "us/iter",
            "extra": "iterations: 183307\ncpu: 3.7985552924874626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.819259171430602,
            "unit": "us/iter",
            "extra": "iterations: 184704\ncpu: 3.8188780048076927 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7510749926507945,
            "unit": "us/iter",
            "extra": "iterations: 187085\ncpu: 3.7509425127615756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 268.8876536098518,
            "unit": "us/iter",
            "extra": "iterations: 2604\ncpu: 268.88354416282647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 40.635115108339164,
            "unit": "us/iter",
            "extra": "iterations: 16984\ncpu: 40.63479315826656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 28.023986117777802,
            "unit": "us/iter",
            "extra": "iterations: 24996\ncpu: 28.023490998559765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 23.960563315814074,
            "unit": "us/iter",
            "extra": "iterations: 29495\ncpu: 23.960175860315292 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 23.53664991311494,
            "unit": "us/iter",
            "extra": "iterations: 29924\ncpu: 23.53638845074185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 22.150363829994504,
            "unit": "us/iter",
            "extra": "iterations: 30517\ncpu: 22.149433791001766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.0219445480243,
            "unit": "us/iter",
            "extra": "iterations: 33254\ncpu: 21.021577584651503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 598.1393877027508,
            "unit": "us/iter",
            "extra": "iterations: 1171\ncpu: 598.1097907771125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 127.31924096386244,
            "unit": "us/iter",
            "extra": "iterations: 5478\ncpu: 127.30743446513297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 68.01799781334262,
            "unit": "us/iter",
            "extra": "iterations: 10061\ncpu: 68.01076046118656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 50.53811503501605,
            "unit": "us/iter",
            "extra": "iterations: 13422\ncpu: 50.536584711667295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 51.59844252376657,
            "unit": "us/iter",
            "extra": "iterations: 11570\ncpu: 51.59615479688842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 52.635690445960165,
            "unit": "us/iter",
            "extra": "iterations: 13387\ncpu: 52.63222215582282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 51.576619203286526,
            "unit": "us/iter",
            "extra": "iterations: 13154\ncpu: 51.57363326744717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4006.560360000029,
            "unit": "us/iter",
            "extra": "iterations: 175\ncpu: 4006.1517028571407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 878.8519811321223,
            "unit": "us/iter",
            "extra": "iterations: 795\ncpu: 878.829110691824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 615.6443055311656,
            "unit": "us/iter",
            "extra": "iterations: 1139\ncpu: 615.6346514486399 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 537.0498645598337,
            "unit": "us/iter",
            "extra": "iterations: 1329\ncpu: 536.9959638826188 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 506.4744417441157,
            "unit": "us/iter",
            "extra": "iterations: 1399\ncpu: 506.44774553252125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 474.71540053586654,
            "unit": "us/iter",
            "extra": "iterations: 1493\ncpu: 474.67311252511803 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 459.9237350200296,
            "unit": "us/iter",
            "extra": "iterations: 1502\ncpu: 459.89427163781653 us\nthreads: 1"
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
            "value": 23.758112350654933,
            "unit": "us/iter",
            "extra": "iterations: 29043\ncpu: 23.75722136142965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.482536432846953,
            "unit": "us/iter",
            "extra": "iterations: 126493\ncpu: 5.482443400030035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.296615316609149,
            "unit": "us/iter",
            "extra": "iterations: 162882\ncpu: 4.296298934197774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.6784467737832385,
            "unit": "us/iter",
            "extra": "iterations: 188704\ncpu: 3.67832350665591 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.4805885748398033,
            "unit": "us/iter",
            "extra": "iterations: 202693\ncpu: 3.4804139560813625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.5102553802295753,
            "unit": "us/iter",
            "extra": "iterations: 199945\ncpu: 3.5102409462602298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.492586042160645,
            "unit": "us/iter",
            "extra": "iterations: 199902\ncpu: 3.4925408800311972 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 140.1710681451752,
            "unit": "us/iter",
            "extra": "iterations: 4960\ncpu: 140.16867318548373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 29.077302625628068,
            "unit": "us/iter",
            "extra": "iterations: 24337\ncpu: 29.076347577762316 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 20.946147196887942,
            "unit": "us/iter",
            "extra": "iterations: 33445\ncpu: 20.944494632979467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 18.78478780185042,
            "unit": "us/iter",
            "extra": "iterations: 37022\ncpu: 18.783870374371986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 18.562592747111896,
            "unit": "us/iter",
            "extra": "iterations: 37392\ncpu: 18.562242137355483 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 17.978860112837015,
            "unit": "us/iter",
            "extra": "iterations: 38817\ncpu: 17.977732565628383 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 17.59776092816874,
            "unit": "us/iter",
            "extra": "iterations: 39691\ncpu: 17.597667959990815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 316.4431486854387,
            "unit": "us/iter",
            "extra": "iterations: 2206\ncpu: 316.4190675430638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 61.69481479844348,
            "unit": "us/iter",
            "extra": "iterations: 11312\ncpu: 61.692220120226736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 42.263076304008194,
            "unit": "us/iter",
            "extra": "iterations: 16526\ncpu: 42.26109131066222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 37.41915041738299,
            "unit": "us/iter",
            "extra": "iterations: 18688\ncpu: 37.41878301583925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 37.556581127428096,
            "unit": "us/iter",
            "extra": "iterations: 18662\ncpu: 37.554681652556035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 36.378692303704945,
            "unit": "us/iter",
            "extra": "iterations: 19295\ncpu: 36.377106556102376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 35.71542971745955,
            "unit": "us/iter",
            "extra": "iterations: 19820\ncpu: 35.71447623612502 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1792.5898179485628,
            "unit": "us/iter",
            "extra": "iterations: 390\ncpu: 1792.580012820512 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 364.9666751559556,
            "unit": "us/iter",
            "extra": "iterations: 1924\ncpu: 364.94940800415935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 248.80986559711505,
            "unit": "us/iter",
            "extra": "iterations: 2805\ncpu: 248.80635151515085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 214.69318173430537,
            "unit": "us/iter",
            "extra": "iterations: 3252\ncpu: 214.68407595326107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 206.9178431952423,
            "unit": "us/iter",
            "extra": "iterations: 3380\ncpu: 206.91552751479279 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 200.0905286368906,
            "unit": "us/iter",
            "extra": "iterations: 3492\ncpu: 200.07839690721605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 193.24494152048422,
            "unit": "us/iter",
            "extra": "iterations: 3591\ncpu: 193.23515510999636 us\nthreads: 1"
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
          "id": "db76b538c9a2c9b9378bf2a2bba89e9ba88aea40",
          "message": "Merge pull request #254 from genogrove/refactor/set-root-nodes-private-253\n\nMake set_root_nodes() private",
          "timestamp": "2026-03-22T21:30:35-05:00",
          "tree_id": "45ff57e8f16f31e3220d1685c6e6bc63ccbf48b3",
          "url": "https://github.com/genogrove/genogrove/commit/db76b538c9a2c9b9378bf2a2bba89e9ba88aea40"
        },
        "date": 1774233297571,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.33579614497272,
            "unit": "us/iter",
            "extra": "iterations: 20804\ncpu: 34.32799875024034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.658706800458241,
            "unit": "us/iter",
            "extra": "iterations: 90788\ncpu: 7.657024474600167 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.066816657833475,
            "unit": "us/iter",
            "extra": "iterations: 137737\ncpu: 5.066207090324315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.287315684743014,
            "unit": "us/iter",
            "extra": "iterations: 161316\ncpu: 4.286993993156288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9374991057877704,
            "unit": "us/iter",
            "extra": "iterations: 177251\ncpu: 3.937034273431462 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.900198509970806,
            "unit": "us/iter",
            "extra": "iterations: 178520\ncpu: 3.8998689558592887 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7288283805046976,
            "unit": "us/iter",
            "extra": "iterations: 188108\ncpu: 3.728539487953731 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 277.27969838136397,
            "unit": "us/iter",
            "extra": "iterations: 2533\ncpu: 277.2591630477696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.95082166205638,
            "unit": "us/iter",
            "extra": "iterations: 15908\ncpu: 43.94845587125974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.6799219250864,
            "unit": "us/iter",
            "extra": "iterations: 22773\ncpu: 30.67641992710667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.83665110528807,
            "unit": "us/iter",
            "extra": "iterations: 27097\ncpu: 25.83509632062593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.39367098871576,
            "unit": "us/iter",
            "extra": "iterations: 26762\ncpu: 26.391881959494818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.42355737287796,
            "unit": "us/iter",
            "extra": "iterations: 27513\ncpu: 25.421895358557784 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.76100962978867,
            "unit": "us/iter",
            "extra": "iterations: 28038\ncpu: 24.759249375847094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 631.7426064981852,
            "unit": "us/iter",
            "extra": "iterations: 1108\ncpu: 631.6261462093854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.7395260003527,
            "unit": "us/iter",
            "extra": "iterations: 5673\ncpu: 122.72739414771748 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.88807472504908,
            "unit": "us/iter",
            "extra": "iterations: 9729\ncpu: 69.88298345153667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.850839900339416,
            "unit": "us/iter",
            "extra": "iterations: 10837\ncpu: 60.84292294915558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.88717368756197,
            "unit": "us/iter",
            "extra": "iterations: 10991\ncpu: 64.87915358020207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.15092737477563,
            "unit": "us/iter",
            "extra": "iterations: 11759\ncpu: 59.14242333531773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.04288166199222,
            "unit": "us/iter",
            "extra": "iterations: 11408\ncpu: 61.03851463884986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3682.7715026177916,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3682.4998219895283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.5585635430118,
            "unit": "us/iter",
            "extra": "iterations: 779\ncpu: 900.4815442875456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 624.4592952720857,
            "unit": "us/iter",
            "extra": "iterations: 1121\ncpu: 624.380736842103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 523.0819336316137,
            "unit": "us/iter",
            "extra": "iterations: 1341\ncpu: 523.0120850111851 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 497.02833356990413,
            "unit": "us/iter",
            "extra": "iterations: 1409\ncpu: 496.9817998580568 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.1917170184714,
            "unit": "us/iter",
            "extra": "iterations: 1516\ncpu: 463.1594558047487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 455.54127890267637,
            "unit": "us/iter",
            "extra": "iterations: 1531\ncpu: 455.5059477465721 us\nthreads: 1"
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
            "value": 25.610946389417144,
            "unit": "us/iter",
            "extra": "iterations: 27364\ncpu: 25.609055766700795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.926651999932185,
            "unit": "us/iter",
            "extra": "iterations: 118204\ncpu: 5.926232657101285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.631911720363703,
            "unit": "us/iter",
            "extra": "iterations: 150567\ncpu: 4.631535283295819 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.023979575469791,
            "unit": "us/iter",
            "extra": "iterations: 173321\ncpu: 4.02347838403886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8479712721169577,
            "unit": "us/iter",
            "extra": "iterations: 181705\ncpu: 3.847608827495107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.805027721587948,
            "unit": "us/iter",
            "extra": "iterations: 183900\ncpu: 3.804745791190868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6520330662106177,
            "unit": "us/iter",
            "extra": "iterations: 191797\ncpu: 3.6518138083494716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.9104896918202,
            "unit": "us/iter",
            "extra": "iterations: 4705\ncpu: 148.8909202975555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 32.90381743465375,
            "unit": "us/iter",
            "extra": "iterations: 22266\ncpu: 32.901809305667804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.695266979477438,
            "unit": "us/iter",
            "extra": "iterations: 29624\ncpu: 23.693654469349376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.87981135046789,
            "unit": "us/iter",
            "extra": "iterations: 33655\ncpu: 20.878670539295896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.14686817672327,
            "unit": "us/iter",
            "extra": "iterations: 34789\ncpu: 20.144853114490278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.0038096651968,
            "unit": "us/iter",
            "extra": "iterations: 35364\ncpu: 19.002103975794462 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.81122807204851,
            "unit": "us/iter",
            "extra": "iterations: 37475\ncpu: 18.810117464976816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.0170375609718,
            "unit": "us/iter",
            "extra": "iterations: 2050\ncpu: 343.98357219512206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.16375306852083,
            "unit": "us/iter",
            "extra": "iterations: 10347\ncpu: 67.16021871073745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.40621979729861,
            "unit": "us/iter",
            "extra": "iterations: 14800\ncpu: 47.40372993243273 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.708318805002705,
            "unit": "us/iter",
            "extra": "iterations: 16703\ncpu: 41.70462707298084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.91916526945909,
            "unit": "us/iter",
            "extra": "iterations: 16700\ncpu: 41.91497455089858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.64987625777112,
            "unit": "us/iter",
            "extra": "iterations: 17690\ncpu: 39.64740412662549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.39148879960287,
            "unit": "us/iter",
            "extra": "iterations: 18169\ncpu: 38.38950800814583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1866.591168449186,
            "unit": "us/iter",
            "extra": "iterations: 374\ncpu: 1866.4651978609675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.5392408589723,
            "unit": "us/iter",
            "extra": "iterations: 1723\ncpu: 408.5071625072515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 271.1154521360681,
            "unit": "us/iter",
            "extra": "iterations: 2528\ncpu: 271.0996238132918 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.9139181728673,
            "unit": "us/iter",
            "extra": "iterations: 3043\ncpu: 228.8810046007222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 223.30490981013284,
            "unit": "us/iter",
            "extra": "iterations: 3160\ncpu: 223.29469968354448 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 220.10846975745025,
            "unit": "us/iter",
            "extra": "iterations: 3257\ncpu: 220.08985968682808 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 209.4653773296633,
            "unit": "us/iter",
            "extra": "iterations: 3273\ncpu: 209.44967033302822 us\nthreads: 1"
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
          "id": "ce8f269136481ca25ec5afb6eee791f83982b153",
          "message": "Merge pull request #255 from genogrove/enhance/get-root-nodes-const-ref-146\n\nReturn get_root_nodes() by const reference",
          "timestamp": "2026-03-22T23:34:05-05:00",
          "tree_id": "3b5bdd97e691a55da4d252dd4309d16c408f8c56",
          "url": "https://github.com/genogrove/genogrove/commit/ce8f269136481ca25ec5afb6eee791f83982b153"
        },
        "date": 1774240685980,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.293535829598575,
            "unit": "us/iter",
            "extra": "iterations: 20751\ncpu: 33.29189031853886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.681114103830284,
            "unit": "us/iter",
            "extra": "iterations: 91110\ncpu: 7.680675480188783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.049392080914023,
            "unit": "us/iter",
            "extra": "iterations: 138122\ncpu: 5.048927730557043 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.3046999771225325,
            "unit": "us/iter",
            "extra": "iterations: 161731\ncpu: 4.30436039472952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9753249659011547,
            "unit": "us/iter",
            "extra": "iterations: 175960\ncpu: 3.974738076835643 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8661929939963198,
            "unit": "us/iter",
            "extra": "iterations: 179389\ncpu: 3.8659108306529393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.723044675360564,
            "unit": "us/iter",
            "extra": "iterations: 188717\ncpu: 3.7226255292316024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.8861883890721,
            "unit": "us/iter",
            "extra": "iterations: 2601\ncpu: 269.8603540945793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.35932034577953,
            "unit": "us/iter",
            "extra": "iterations: 15964\ncpu: 43.35591850413421 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.177318508942793,
            "unit": "us/iter",
            "extra": "iterations: 23205\ncpu: 30.175847920706694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.38686533647616,
            "unit": "us/iter",
            "extra": "iterations: 27164\ncpu: 25.383861581504938 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.625193598749263,
            "unit": "us/iter",
            "extra": "iterations: 26901\ncpu: 25.623263224415467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.40186673677417,
            "unit": "us/iter",
            "extra": "iterations: 27577\ncpu: 25.39790285382749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.539472962093882,
            "unit": "us/iter",
            "extra": "iterations: 28571\ncpu: 24.538049840747625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 630.2038646209269,
            "unit": "us/iter",
            "extra": "iterations: 1108\ncpu: 630.1428601083037 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 121.81338373105963,
            "unit": "us/iter",
            "extra": "iterations: 5741\ncpu: 121.80507629332871 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.5331660207993,
            "unit": "us/iter",
            "extra": "iterations: 9806\ncpu: 69.5249514582909 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.56288849806298,
            "unit": "us/iter",
            "extra": "iterations: 11372\ncpu: 60.558385860006936 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.54537808024387,
            "unit": "us/iter",
            "extra": "iterations: 11241\ncpu: 63.541913174984415 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.71538389653426,
            "unit": "us/iter",
            "extra": "iterations: 11985\ncpu: 58.7072194409681 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.216306451616894,
            "unit": "us/iter",
            "extra": "iterations: 11346\ncpu: 61.210944826370515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3642.1716302085606,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3641.7525468749877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 907.8554628205327,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 907.7405153846166 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.775428697151,
            "unit": "us/iter",
            "extra": "iterations: 1136\ncpu: 621.7231540492949 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 514.4875716385146,
            "unit": "us/iter",
            "extra": "iterations: 1361\ncpu: 514.4285951506242 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 488.99726871938714,
            "unit": "us/iter",
            "extra": "iterations: 1429\ncpu: 488.9751651504563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.6867536136734,
            "unit": "us/iter",
            "extra": "iterations: 1522\ncpu: 459.6494480946117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 445.7971915976796,
            "unit": "us/iter",
            "extra": "iterations: 1571\ncpu: 445.77520432845273 us\nthreads: 1"
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
            "value": 25.040308080625717,
            "unit": "us/iter",
            "extra": "iterations: 27931\ncpu: 25.038253445991952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.954209206974304,
            "unit": "us/iter",
            "extra": "iterations: 117802\ncpu: 5.953719987776104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.557972518454949,
            "unit": "us/iter",
            "extra": "iterations: 155377\ncpu: 4.557552012202581 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.8792691470735425,
            "unit": "us/iter",
            "extra": "iterations: 178761\ncpu: 3.879036064913477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.776553507106901,
            "unit": "us/iter",
            "extra": "iterations: 185452\ncpu: 3.776478323231891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.708084276829576,
            "unit": "us/iter",
            "extra": "iterations: 188925\ncpu: 3.7074745745666484 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5579518441685525,
            "unit": "us/iter",
            "extra": "iterations: 196674\ncpu: 3.557688769232346 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.44826945854828,
            "unit": "us/iter",
            "extra": "iterations: 4728\ncpu: 147.43858671742836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.68624280686393,
            "unit": "us/iter",
            "extra": "iterations: 22730\ncpu: 30.685639067311957 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.320322176851597,
            "unit": "us/iter",
            "extra": "iterations: 29878\ncpu: 23.31833496217969 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.47785004666824,
            "unit": "us/iter",
            "extra": "iterations: 34284\ncpu: 20.47757047019022 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.57978183099808,
            "unit": "us/iter",
            "extra": "iterations: 34047\ncpu: 20.578111904132474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.281073358116434,
            "unit": "us/iter",
            "extra": "iterations: 36315\ncpu: 19.280448519895366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.878673124008046,
            "unit": "us/iter",
            "extra": "iterations: 37167\ncpu: 18.877292625178253 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 338.43703671497155,
            "unit": "us/iter",
            "extra": "iterations: 2070\ncpu: 338.4165985507233 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 68.16173076197659,
            "unit": "us/iter",
            "extra": "iterations: 10604\ncpu: 68.15956544700119 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.9885857066441,
            "unit": "us/iter",
            "extra": "iterations: 14958\ncpu: 46.98509613584714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.48826944824674,
            "unit": "us/iter",
            "extra": "iterations: 16801\ncpu: 41.48317260877326 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 42.593030955505455,
            "unit": "us/iter",
            "extra": "iterations: 16766\ncpu: 42.59294983895971 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.75719205410825,
            "unit": "us/iter",
            "extra": "iterations: 17594\ncpu: 39.7552257019436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.470555512932464,
            "unit": "us/iter",
            "extra": "iterations: 18248\ncpu: 38.470043237615066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1861.5474153439666,
            "unit": "us/iter",
            "extra": "iterations: 378\ncpu: 1861.380071428555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 405.4201549213819,
            "unit": "us/iter",
            "extra": "iterations: 1717\ncpu: 405.40328305183436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 265.38854101487755,
            "unit": "us/iter",
            "extra": "iterations: 2621\ncpu: 265.3698138115239 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 233.18211946615762,
            "unit": "us/iter",
            "extra": "iterations: 3072\ncpu: 233.17681184895773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 219.6828758642434,
            "unit": "us/iter",
            "extra": "iterations: 3182\ncpu: 219.66802105593914 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 209.5046526409996,
            "unit": "us/iter",
            "extra": "iterations: 3351\ncpu: 209.50440137272398 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 202.08861516203393,
            "unit": "us/iter",
            "extra": "iterations: 3456\ncpu: 202.07390740740863 us\nthreads: 1"
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
          "id": "9a1ad485147c9d25cc722a9c03b426de59f8dac5",
          "message": "Merge pull request #258 from genogrove/test/edge-case-tests-179\n\nAdd edge case tests for key types and grove operations",
          "timestamp": "2026-03-23T20:13:09-05:00",
          "tree_id": "d5d35f0a718086ebccad0f0c0ae416c45a3e9fd9",
          "url": "https://github.com/genogrove/genogrove/commit/9a1ad485147c9d25cc722a9c03b426de59f8dac5"
        },
        "date": 1774315031256,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.33857573133198,
            "unit": "us/iter",
            "extra": "iterations: 20784\ncpu: 33.328993456505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.699451942333159,
            "unit": "us/iter",
            "extra": "iterations: 90381\ncpu: 7.699100839778271 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.1303511895142115,
            "unit": "us/iter",
            "extra": "iterations: 136106\ncpu: 5.129650213803948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.4097409669638,
            "unit": "us/iter",
            "extra": "iterations: 155042\ncpu: 4.409450806878138 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.198175253334458,
            "unit": "us/iter",
            "extra": "iterations: 173486\ncpu: 4.197401092883576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9368821028238417,
            "unit": "us/iter",
            "extra": "iterations: 177799\ncpu: 3.936503315541704 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6951677838869226,
            "unit": "us/iter",
            "extra": "iterations: 184237\ncpu: 3.6945576458583234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 276.7764000786817,
            "unit": "us/iter",
            "extra": "iterations: 2542\ncpu: 276.74447285601906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.80687025414711,
            "unit": "us/iter",
            "extra": "iterations: 16093\ncpu: 43.80053781147086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.9351390969304,
            "unit": "us/iter",
            "extra": "iterations: 23099\ncpu: 30.931894670764937 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.64817462817769,
            "unit": "us/iter",
            "extra": "iterations: 27298\ncpu: 25.644845739614638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.945690516304968,
            "unit": "us/iter",
            "extra": "iterations: 26709\ncpu: 26.942897337975968 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.291340777651985,
            "unit": "us/iter",
            "extra": "iterations: 27493\ncpu: 25.286649729021924 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.53845057410062,
            "unit": "us/iter",
            "extra": "iterations: 26302\ncpu: 25.536113983727496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 635.2015524412418,
            "unit": "us/iter",
            "extra": "iterations: 1106\ncpu: 635.0925253164555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 125.41481875337205,
            "unit": "us/iter",
            "extra": "iterations: 5567\ncpu: 125.40214585952917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.41311684307851,
            "unit": "us/iter",
            "extra": "iterations: 9731\ncpu: 71.40336255266658 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.20411815484029,
            "unit": "us/iter",
            "extra": "iterations: 11121\ncpu: 62.19516194586797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 65.1872617125896,
            "unit": "us/iter",
            "extra": "iterations: 10779\ncpu: 65.17959912793407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.45326731289888,
            "unit": "us/iter",
            "extra": "iterations: 11451\ncpu: 62.44679862020762 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 63.53045843920061,
            "unit": "us/iter",
            "extra": "iterations: 11020\ncpu: 63.527693194192274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3652.830781250079,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3652.359802083338 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.8667384615402,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 900.8303102564086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 624.3145115658331,
            "unit": "us/iter",
            "extra": "iterations: 1124\ncpu: 624.2466432384354 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 520.0822327650232,
            "unit": "us/iter",
            "extra": "iterations: 1349\ncpu: 520.0322186805048 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 495.2167283603186,
            "unit": "us/iter",
            "extra": "iterations: 1421\ncpu: 495.17457213229983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 465.01243300330805,
            "unit": "us/iter",
            "extra": "iterations: 1515\ncpu: 464.98633465346404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.9430610147724,
            "unit": "us/iter",
            "extra": "iterations: 1557\ncpu: 449.9061072575447 us\nthreads: 1"
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
            "value": 25.03299688317309,
            "unit": "us/iter",
            "extra": "iterations: 27913\ncpu: 25.031569483753096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.971369602969114,
            "unit": "us/iter",
            "extra": "iterations: 117472\ncpu: 5.9708907824843545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.669218524802903,
            "unit": "us/iter",
            "extra": "iterations: 150285\ncpu: 4.668940240210248 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.033073826153338,
            "unit": "us/iter",
            "extra": "iterations: 175534\ncpu: 4.032637158613144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8246723349780343,
            "unit": "us/iter",
            "extra": "iterations: 182006\ncpu: 3.824380350098363 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8220879347050722,
            "unit": "us/iter",
            "extra": "iterations: 183659\ncpu: 3.8216878399642686 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.614199846160174,
            "unit": "us/iter",
            "extra": "iterations: 192408\ncpu: 3.6139378092387022 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.3393978195785,
            "unit": "us/iter",
            "extra": "iterations: 4678\ncpu: 149.32228088926956 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.12894875438509,
            "unit": "us/iter",
            "extra": "iterations: 22519\ncpu: 31.12695621475205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.3453469428466,
            "unit": "us/iter",
            "extra": "iterations: 30077\ncpu: 23.34294454234125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.848181887860612,
            "unit": "us/iter",
            "extra": "iterations: 33922\ncpu: 20.84712157302051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.65339766927311,
            "unit": "us/iter",
            "extra": "iterations: 33895\ncpu: 20.65087411122577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.349548536976936,
            "unit": "us/iter",
            "extra": "iterations: 36158\ncpu: 19.348141683721607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.93855108677969,
            "unit": "us/iter",
            "extra": "iterations: 36898\ncpu: 18.935656295734145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.6644913580213,
            "unit": "us/iter",
            "extra": "iterations: 2025\ncpu: 344.6455422222194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.72254763268309,
            "unit": "us/iter",
            "extra": "iterations: 10476\ncpu: 66.7149484536081 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.28428560815865,
            "unit": "us/iter",
            "extra": "iterations: 14807\ncpu: 47.28146599581258 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.52502455079283,
            "unit": "us/iter",
            "extra": "iterations: 16863\ncpu: 41.52149083792934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.71318853434955,
            "unit": "us/iter",
            "extra": "iterations: 16798\ncpu: 41.70786540064263 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.320400247971314,
            "unit": "us/iter",
            "extra": "iterations: 17744\ncpu: 39.31773951758367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.0860843491504,
            "unit": "us/iter",
            "extra": "iterations: 18376\ncpu: 38.08295009795389 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1861.2641010638213,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1861.0649042553266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 409.7097893505008,
            "unit": "us/iter",
            "extra": "iterations: 1709\ncpu: 409.67004388531456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.5540810488753,
            "unit": "us/iter",
            "extra": "iterations: 2517\ncpu: 278.53189988080925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.31234912634318,
            "unit": "us/iter",
            "extra": "iterations: 2976\ncpu: 235.28879670699027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 225.83352728446775,
            "unit": "us/iter",
            "extra": "iterations: 3097\ncpu: 225.82308169195952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.74862231759042,
            "unit": "us/iter",
            "extra": "iterations: 3262\ncpu: 215.72671183323092 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 205.95318216598133,
            "unit": "us/iter",
            "extra": "iterations: 3398\ncpu: 205.93659123013572 us\nthreads: 1"
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
          "id": "1dcd997eca6a25c0b1a3895fe7dd4abd7916d6ae",
          "message": "Merge pull request #256 from genogrove/test/bam-skip-invalid-records-250\n\nRemove skip_invalid_records from bam_reader_options",
          "timestamp": "2026-03-23T20:25:08-05:00",
          "tree_id": "fd8e11407c00d2bc8507af5e7479c424fea84e8f",
          "url": "https://github.com/genogrove/genogrove/commit/1dcd997eca6a25c0b1a3895fe7dd4abd7916d6ae"
        },
        "date": 1774315767832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.414124533058164,
            "unit": "us/iter",
            "extra": "iterations: 21416\ncpu: 32.41387467314158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.604300173913158,
            "unit": "us/iter",
            "extra": "iterations: 92000\ncpu: 7.604061858695651 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.050183065825714,
            "unit": "us/iter",
            "extra": "iterations: 136694\ncpu: 5.049450297745326 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.324808729299726,
            "unit": "us/iter",
            "extra": "iterations: 160746\ncpu: 4.3244046197106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9561310163439742,
            "unit": "us/iter",
            "extra": "iterations: 177558\ncpu: 3.955824175762283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.895328950588351,
            "unit": "us/iter",
            "extra": "iterations: 179796\ncpu: 3.895069562170457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7214747100927292,
            "unit": "us/iter",
            "extra": "iterations: 188336\ncpu: 3.7211693356554227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 270.46664513647903,
            "unit": "us/iter",
            "extra": "iterations: 2601\ncpu: 270.4352137639369 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.20331590293371,
            "unit": "us/iter",
            "extra": "iterations: 16236\ncpu: 43.20021618625273 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.04804245181766,
            "unit": "us/iter",
            "extra": "iterations: 23297\ncpu: 30.044231317337008 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.67849434003701,
            "unit": "us/iter",
            "extra": "iterations: 27297\ncpu: 25.67684434186911 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.632507542706477,
            "unit": "us/iter",
            "extra": "iterations: 27046\ncpu: 25.629325704355526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.226230633231356,
            "unit": "us/iter",
            "extra": "iterations: 27715\ncpu: 25.224520404113306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.870426130508577,
            "unit": "us/iter",
            "extra": "iterations: 28151\ncpu: 24.867635607971305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 627.4398381037929,
            "unit": "us/iter",
            "extra": "iterations: 1118\ncpu: 627.4274803220039 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.83430798342356,
            "unit": "us/iter",
            "extra": "iterations: 5549\ncpu: 123.82440764101666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.63139213678369,
            "unit": "us/iter",
            "extra": "iterations: 9767\ncpu: 71.45931688338266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.6667793856526,
            "unit": "us/iter",
            "extra": "iterations: 11264\ncpu: 61.66423703835243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.8230624886332,
            "unit": "us/iter",
            "extra": "iterations: 10994\ncpu: 62.819614698926564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.27315652470478,
            "unit": "us/iter",
            "extra": "iterations: 11717\ncpu: 58.272672783135434 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.99427110360592,
            "unit": "us/iter",
            "extra": "iterations: 11254\ncpu: 61.98816989514825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3645.185212435135,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3645.0285336787642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 898.1902064102215,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 898.1102820512841 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.4675838509035,
            "unit": "us/iter",
            "extra": "iterations: 1127\ncpu: 621.4226060337163 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.8016322771132,
            "unit": "us/iter",
            "extra": "iterations: 1357\ncpu: 515.7814148857776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.2319846153922,
            "unit": "us/iter",
            "extra": "iterations: 1430\ncpu: 491.20010629370483 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 460.5755955351113,
            "unit": "us/iter",
            "extra": "iterations: 1523\ncpu: 460.5493801707156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 444.1626518706652,
            "unit": "us/iter",
            "extra": "iterations: 1577\ncpu: 444.13120355104616 us\nthreads: 1"
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
            "value": 25.05574972318535,
            "unit": "us/iter",
            "extra": "iterations: 27997\ncpu: 25.054524770511122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.976475302723008,
            "unit": "us/iter",
            "extra": "iterations: 117847\ncpu: 5.976119120554616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.710112785694869,
            "unit": "us/iter",
            "extra": "iterations: 148760\ncpu: 4.709693432374302 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.029753659750646,
            "unit": "us/iter",
            "extra": "iterations: 174807\ncpu: 4.029708627228895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.83474351348973,
            "unit": "us/iter",
            "extra": "iterations: 181916\ncpu: 3.8343849688867446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8106805055813533,
            "unit": "us/iter",
            "extra": "iterations: 184817\ncpu: 3.8105182044941674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6299864121662706,
            "unit": "us/iter",
            "extra": "iterations: 192010\ncpu: 3.6297756627259075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.38499345300846,
            "unit": "us/iter",
            "extra": "iterations: 4735\ncpu: 147.3741309398105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.499662946232927,
            "unit": "us/iter",
            "extra": "iterations: 22578\ncpu: 31.495944680662447 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.329752589455495,
            "unit": "us/iter",
            "extra": "iterations: 29736\ncpu: 23.32777317056752 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.95574876519057,
            "unit": "us/iter",
            "extra": "iterations: 33001\ncpu: 20.95443632011157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.991444434402453,
            "unit": "us/iter",
            "extra": "iterations: 33195\ncpu: 20.99129302605814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.40573203120696,
            "unit": "us/iter",
            "extra": "iterations: 36146\ncpu: 19.404579178885673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.011952240343035,
            "unit": "us/iter",
            "extra": "iterations: 36914\ncpu: 19.01090916725378 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 345.23196971177475,
            "unit": "us/iter",
            "extra": "iterations: 2047\ncpu: 345.2061333659015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 65.89911232669847,
            "unit": "us/iter",
            "extra": "iterations: 10603\ncpu: 65.8949930208429 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.14960775570797,
            "unit": "us/iter",
            "extra": "iterations: 14802\ncpu: 47.145609512227765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.65651645172952,
            "unit": "us/iter",
            "extra": "iterations: 16594\ncpu: 41.655277329154906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.36281758242063,
            "unit": "us/iter",
            "extra": "iterations: 16835\ncpu: 41.359129313929394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.3531883598501,
            "unit": "us/iter",
            "extra": "iterations: 17663\ncpu: 39.349096925776855 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.40135438250356,
            "unit": "us/iter",
            "extra": "iterations: 18243\ncpu: 38.39763410623251 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1863.1793501326238,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1863.048787798403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 409.02114894861313,
            "unit": "us/iter",
            "extra": "iterations: 1712\ncpu: 408.9797862149554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 274.2116974723414,
            "unit": "us/iter",
            "extra": "iterations: 2532\ncpu: 274.17885584518376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 233.3437795302123,
            "unit": "us/iter",
            "extra": "iterations: 2980\ncpu: 233.31419932885817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 229.50080405626915,
            "unit": "us/iter",
            "extra": "iterations: 3057\ncpu: 229.47479784102018 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 213.70368188737652,
            "unit": "us/iter",
            "extra": "iterations: 3285\ncpu: 213.67586727549468 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.22560170991264,
            "unit": "us/iter",
            "extra": "iterations: 3392\ncpu: 206.2106105542457 us\nthreads: 1"
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
          "id": "08cb96a5c7cf6936b758d2236a8c1688d004a404",
          "message": "Merge pull request #259 from genogrove/test/grove-fixture-isolation-181\n\nDocument grove test fixture isolation guarantees",
          "timestamp": "2026-03-23T21:25:45-05:00",
          "tree_id": "dd03ae03bf20fbe41f1ab9f0027ab2b856b5d704",
          "url": "https://github.com/genogrove/genogrove/commit/08cb96a5c7cf6936b758d2236a8c1688d004a404"
        },
        "date": 1774319387345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.39095546368661,
            "unit": "us/iter",
            "extra": "iterations: 21286\ncpu: 33.38833463309218 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.622543877384666,
            "unit": "us/iter",
            "extra": "iterations: 91995\ncpu: 7.622093059405401 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.0228079301114645,
            "unit": "us/iter",
            "extra": "iterations: 137476\ncpu: 5.022499636300156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.3088958033351785,
            "unit": "us/iter",
            "extra": "iterations: 162510\ncpu: 4.308644643406559 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9708138617781525,
            "unit": "us/iter",
            "extra": "iterations: 176745\ncpu: 3.9703976576423616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9449010516811356,
            "unit": "us/iter",
            "extra": "iterations: 179427\ncpu: 3.9445870186761187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7451102812513395,
            "unit": "us/iter",
            "extra": "iterations: 187448\ncpu: 3.745037210319663 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 276.45244549389514,
            "unit": "us/iter",
            "extra": "iterations: 2541\ncpu: 276.43440141676496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.42436846095453,
            "unit": "us/iter",
            "extra": "iterations: 15828\ncpu: 44.42320792266878 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.442058285310942,
            "unit": "us/iter",
            "extra": "iterations: 22733\ncpu: 30.440815510491372 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.87412368719585,
            "unit": "us/iter",
            "extra": "iterations: 27327\ncpu: 25.87304010685405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.741634468226795,
            "unit": "us/iter",
            "extra": "iterations: 27051\ncpu: 25.74144334775054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.378521300612466,
            "unit": "us/iter",
            "extra": "iterations: 27464\ncpu: 25.37720124526653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.950574991970193,
            "unit": "us/iter",
            "extra": "iterations: 28023\ncpu: 24.950468329586403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 635.4906757991199,
            "unit": "us/iter",
            "extra": "iterations: 1095\ncpu: 635.4604803652975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 126.48227926657124,
            "unit": "us/iter",
            "extra": "iterations: 5672\ncpu: 126.4722207334274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.60266304571081,
            "unit": "us/iter",
            "extra": "iterations: 9758\ncpu: 70.59974748923973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.340908169669646,
            "unit": "us/iter",
            "extra": "iterations: 11151\ncpu: 62.33724024751161 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.97109847640108,
            "unit": "us/iter",
            "extra": "iterations: 10764\ncpu: 63.9692389446301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.20230816640563,
            "unit": "us/iter",
            "extra": "iterations: 11682\ncpu: 59.20140951891787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.77093343392084,
            "unit": "us/iter",
            "extra": "iterations: 11267\ncpu: 61.76745815212574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3684.2529368420014,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3684.1370105263068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 904.3324980694312,
            "unit": "us/iter",
            "extra": "iterations: 777\ncpu: 904.2601454311458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 622.5222938557137,
            "unit": "us/iter",
            "extra": "iterations: 1123\ncpu: 622.4895805877114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 514.5520183823331,
            "unit": "us/iter",
            "extra": "iterations: 1360\ncpu: 514.5330169117661 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.1601271960962,
            "unit": "us/iter",
            "extra": "iterations: 1423\ncpu: 490.1595495432172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.98683847670185,
            "unit": "us/iter",
            "extra": "iterations: 1523\ncpu: 459.9143782009184 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 443.93528980894166,
            "unit": "us/iter",
            "extra": "iterations: 1570\ncpu: 443.9127802547789 us\nthreads: 1"
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
            "value": 25.99361811596779,
            "unit": "us/iter",
            "extra": "iterations: 26783\ncpu: 25.99119967890076 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.139920848741204,
            "unit": "us/iter",
            "extra": "iterations: 113580\ncpu: 6.139779767564715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.81560949043585,
            "unit": "us/iter",
            "extra": "iterations: 144967\ncpu: 4.815340946560259 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.037889899279103,
            "unit": "us/iter",
            "extra": "iterations: 167592\ncpu: 4.037805193565319 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.99723164828195,
            "unit": "us/iter",
            "extra": "iterations: 176414\ncpu: 3.9970478873558664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8148742713701935,
            "unit": "us/iter",
            "extra": "iterations: 178074\ncpu: 3.8147719262778748 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.8134297273620645,
            "unit": "us/iter",
            "extra": "iterations: 188345\ncpu: 3.813418699726582 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.8735765208079,
            "unit": "us/iter",
            "extra": "iterations: 4685\ncpu: 148.86889306296598 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.8642085549446,
            "unit": "us/iter",
            "extra": "iterations: 22186\ncpu: 31.863994636257054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.790548880013574,
            "unit": "us/iter",
            "extra": "iterations: 28795\ncpu: 23.789475117207893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.9342795507548,
            "unit": "us/iter",
            "extra": "iterations: 32588\ncpu: 20.933508408002943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 21.329060116952746,
            "unit": "us/iter",
            "extra": "iterations: 33518\ncpu: 21.32852330091296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.787592808469974,
            "unit": "us/iter",
            "extra": "iterations: 35514\ncpu: 19.78728217041165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.330593018434847,
            "unit": "us/iter",
            "extra": "iterations: 36181\ncpu: 19.329976451728804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 352.42961828227124,
            "unit": "us/iter",
            "extra": "iterations: 1991\ncpu: 352.40837870416823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.9466060249244,
            "unit": "us/iter",
            "extra": "iterations: 10191\ncpu: 67.94494504955355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.196162048069226,
            "unit": "us/iter",
            "extra": "iterations: 14687\ncpu: 48.19526526860493 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.0990042719611,
            "unit": "us/iter",
            "extra": "iterations: 16620\ncpu: 42.09778748495792 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.70481512354792,
            "unit": "us/iter",
            "extra": "iterations: 16795\ncpu: 41.70144590651949 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.11609780427561,
            "unit": "us/iter",
            "extra": "iterations: 17443\ncpu: 40.11119629650864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.45974218191536,
            "unit": "us/iter",
            "extra": "iterations: 18195\ncpu: 38.45744182467674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1929.1649423077108,
            "unit": "us/iter",
            "extra": "iterations: 364\ncpu: 1929.0212884615394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 423.9463947525255,
            "unit": "us/iter",
            "extra": "iterations: 1677\ncpu: 423.9190274299344 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.79123244928917,
            "unit": "us/iter",
            "extra": "iterations: 2564\ncpu: 278.7573798751952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 231.35872417319644,
            "unit": "us/iter",
            "extra": "iterations: 2933\ncpu: 231.3506195022152 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 225.2667880363961,
            "unit": "us/iter",
            "extra": "iterations: 3076\ncpu: 225.2323634590366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.13599750155845,
            "unit": "us/iter",
            "extra": "iterations: 3202\ncpu: 216.1221648969413 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 209.4610812668059,
            "unit": "us/iter",
            "extra": "iterations: 3347\ncpu: 209.42342187033194 us\nthreads: 1"
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
          "id": "2ccecbf7cc59169e61542d032cefa77cf67fe4f9",
          "message": "Merge pull request #260 from genogrove/refactor/named-constants-187\n\nReplace magic numbers with named constants",
          "timestamp": "2026-03-23T22:29:37-05:00",
          "tree_id": "ca3b2e498a854073ffe06f1f1071749693a68794",
          "url": "https://github.com/genogrove/genogrove/commit/2ccecbf7cc59169e61542d032cefa77cf67fe4f9"
        },
        "date": 1774323210920,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.093252796528425,
            "unit": "us/iter",
            "extra": "iterations: 20740\ncpu: 34.08472526518805 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.625298966487194,
            "unit": "us/iter",
            "extra": "iterations: 91726\ncpu: 7.62370942807928 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.060155264749397,
            "unit": "us/iter",
            "extra": "iterations: 137243\ncpu: 5.059744708291134 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.314864164465523,
            "unit": "us/iter",
            "extra": "iterations: 162417\ncpu: 4.314160500440224 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9939597818368164,
            "unit": "us/iter",
            "extra": "iterations: 176015\ncpu: 3.9936673408516317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9592109379867115,
            "unit": "us/iter",
            "extra": "iterations: 176559\ncpu: 3.958937086186488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7375437430135614,
            "unit": "us/iter",
            "extra": "iterations: 186967\ncpu: 3.737123048452397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.3369549514546,
            "unit": "us/iter",
            "extra": "iterations: 2575\ncpu: 272.31042679611664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.47563968194441,
            "unit": "us/iter",
            "extra": "iterations: 15972\ncpu: 43.47153155522172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.87906623735035,
            "unit": "us/iter",
            "extra": "iterations: 22827\ncpu: 30.87553901082057 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.706053988540557,
            "unit": "us/iter",
            "extra": "iterations: 27228\ncpu: 25.703605516380183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.02374794389797,
            "unit": "us/iter",
            "extra": "iterations: 27236\ncpu: 25.965873586429687 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.96480358937586,
            "unit": "us/iter",
            "extra": "iterations: 27860\ncpu: 24.962136970567123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.829970812272858,
            "unit": "us/iter",
            "extra": "iterations: 28094\ncpu: 24.826915284402364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 628.9780963096384,
            "unit": "us/iter",
            "extra": "iterations: 1111\ncpu: 628.9174896489639 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.95373928197913,
            "unit": "us/iter",
            "extra": "iterations: 5738\ncpu: 120.94498030672735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.55864095190844,
            "unit": "us/iter",
            "extra": "iterations: 10085\ncpu: 69.55365562716912 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.7159068241477,
            "unit": "us/iter",
            "extra": "iterations: 11430\ncpu: 59.71349728783899 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 60.71144939235214,
            "unit": "us/iter",
            "extra": "iterations: 11273\ncpu: 60.705887252727656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.79732085790003,
            "unit": "us/iter",
            "extra": "iterations: 11703\ncpu: 58.79310253781094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.75775816478359,
            "unit": "us/iter",
            "extra": "iterations: 11421\ncpu: 60.75707363628406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3632.6023575130585,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3632.1876735751252 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.0833405889879,
            "unit": "us/iter",
            "extra": "iterations: 781\ncpu: 895.00142893726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 619.0356056587261,
            "unit": "us/iter",
            "extra": "iterations: 1131\ncpu: 618.968050397878 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.063025659825,
            "unit": "us/iter",
            "extra": "iterations: 1364\ncpu: 513.0015300586506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.01624474054125,
            "unit": "us/iter",
            "extra": "iterations: 1426\ncpu: 490.94602805048936 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.3841185770791,
            "unit": "us/iter",
            "extra": "iterations: 1518\ncpu: 459.37004281949964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 447.4000587467357,
            "unit": "us/iter",
            "extra": "iterations: 1532\ncpu: 447.35445039164364 us\nthreads: 1"
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
            "value": 25.185303567605757,
            "unit": "us/iter",
            "extra": "iterations: 28030\ncpu: 25.183372993221642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.923573196506298,
            "unit": "us/iter",
            "extra": "iterations: 117813\ncpu: 5.92332399650291 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.545344900675848,
            "unit": "us/iter",
            "extra": "iterations: 154746\ncpu: 4.545082037661725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.101325714704766,
            "unit": "us/iter",
            "extra": "iterations: 177241\ncpu: 4.100930619890444 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7855186105830754,
            "unit": "us/iter",
            "extra": "iterations: 184653\ncpu: 3.785002464081284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7370776224704128,
            "unit": "us/iter",
            "extra": "iterations: 188515\ncpu: 3.736633265257442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5608671069186557,
            "unit": "us/iter",
            "extra": "iterations: 188377\ncpu: 3.560495341787999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 146.592241213388,
            "unit": "us/iter",
            "extra": "iterations: 4780\ncpu: 146.57563535564844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.9087500768658,
            "unit": "us/iter",
            "extra": "iterations: 22767\ncpu: 30.90662081082253 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.61447980666326,
            "unit": "us/iter",
            "extra": "iterations: 30827\ncpu: 22.612321406559158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.093383886816916,
            "unit": "us/iter",
            "extra": "iterations: 33786\ncpu: 20.092698070206634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.096984316055195,
            "unit": "us/iter",
            "extra": "iterations: 33665\ncpu: 20.095976711718453 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.14342026134613,
            "unit": "us/iter",
            "extra": "iterations: 35585\ncpu: 19.14249689475916 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.777032518050103,
            "unit": "us/iter",
            "extra": "iterations: 35734\ncpu: 18.77656041864888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 340.378504868538,
            "unit": "us/iter",
            "extra": "iterations: 2054\ncpu: 340.349586173319 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.44219308302264,
            "unit": "us/iter",
            "extra": "iterations: 10467\ncpu: 66.43635291869711 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.22613739179043,
            "unit": "us/iter",
            "extra": "iterations: 14324\ncpu: 48.223650027925395 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.833378919484254,
            "unit": "us/iter",
            "extra": "iterations: 16233\ncpu: 41.83043775026196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 42.15606895915389,
            "unit": "us/iter",
            "extra": "iterations: 16256\ncpu: 42.15361700295282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.51333710102487,
            "unit": "us/iter",
            "extra": "iterations: 17075\ncpu: 39.50919578330893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.38513132234702,
            "unit": "us/iter",
            "extra": "iterations: 17537\ncpu: 38.380335120031944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1861.484225464176,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1861.2949230769168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 404.89632080924156,
            "unit": "us/iter",
            "extra": "iterations: 1730\ncpu: 404.8442549132965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 274.2999729729742,
            "unit": "us/iter",
            "extra": "iterations: 2627\ncpu: 274.2774967643711 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 232.17076938637797,
            "unit": "us/iter",
            "extra": "iterations: 2966\ncpu: 232.13318442346588 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 225.3596428571433,
            "unit": "us/iter",
            "extra": "iterations: 3108\ncpu: 225.329108751609 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 213.2123391277808,
            "unit": "us/iter",
            "extra": "iterations: 3279\ncpu: 213.188858188471 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 202.57169095114713,
            "unit": "us/iter",
            "extra": "iterations: 3459\ncpu: 202.5525449551901 us\nthreads: 1"
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
          "id": "67a2fe5bbf72295c75731aed195b2cc4e8579b91",
          "message": "Merge pull request #261 from genogrove/enhance/native-gff-coords-257\n\nStore GFF coordinates in native 1-based inclusive format",
          "timestamp": "2026-03-24T08:20:09-05:00",
          "tree_id": "5480543a169aa5e11ad5862325e0c2b85fe02f7f",
          "url": "https://github.com/genogrove/genogrove/commit/67a2fe5bbf72295c75731aed195b2cc4e8579b91"
        },
        "date": 1774358657369,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.75773624003896,
            "unit": "us/iter",
            "extra": "iterations: 21330\ncpu: 33.75284636661978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.635850522743761,
            "unit": "us/iter",
            "extra": "iterations: 91345\ncpu: 7.632825529585639 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.09314151998853,
            "unit": "us/iter",
            "extra": "iterations: 136751\ncpu: 5.092624295251954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.29344140918914,
            "unit": "us/iter",
            "extra": "iterations: 159496\ncpu: 4.293281304860311 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.998695870287468,
            "unit": "us/iter",
            "extra": "iterations: 175218\ncpu: 3.997667265920171 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.89960215172417,
            "unit": "us/iter",
            "extra": "iterations: 181250\ncpu: 3.8992752827586226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.681559362440411,
            "unit": "us/iter",
            "extra": "iterations: 189598\ncpu: 3.6810175845736772 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 271.48825773993036,
            "unit": "us/iter",
            "extra": "iterations: 2584\ncpu: 271.4459040247675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.055813522695054,
            "unit": "us/iter",
            "extra": "iterations: 16195\ncpu: 43.05070392096334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.85383031110484,
            "unit": "us/iter",
            "extra": "iterations: 23272\ncpu: 29.84898569095905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.331420535682213,
            "unit": "us/iter",
            "extra": "iterations: 27591\ncpu: 25.328491935776146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.837988626650713,
            "unit": "us/iter",
            "extra": "iterations: 26905\ncpu: 25.835278870098506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.299900621563445,
            "unit": "us/iter",
            "extra": "iterations: 27833\ncpu: 25.29635687852549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.447459469924166,
            "unit": "us/iter",
            "extra": "iterations: 28411\ncpu: 24.444292386751645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 627.2536385869715,
            "unit": "us/iter",
            "extra": "iterations: 1104\ncpu: 627.1282454710148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.51209119010294,
            "unit": "us/iter",
            "extra": "iterations: 5823\ncpu: 122.50632509015995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.7829173084738,
            "unit": "us/iter",
            "extra": "iterations: 9868\ncpu: 69.77503972436159 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.43357820614157,
            "unit": "us/iter",
            "extra": "iterations: 11361\ncpu: 60.42668347856719 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 60.41330584654161,
            "unit": "us/iter",
            "extra": "iterations: 11169\ncpu: 60.403951562360206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.32302361146222,
            "unit": "us/iter",
            "extra": "iterations: 11901\ncpu: 58.31834366859934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.89371178803537,
            "unit": "us/iter",
            "extra": "iterations: 11096\ncpu: 60.891769917087096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3653.3999843750094,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3652.8190520833487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 899.267091025626,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 899.1824615384585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 623.1438083407278,
            "unit": "us/iter",
            "extra": "iterations: 1127\ncpu: 623.0583141082491 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.9307862932619,
            "unit": "us/iter",
            "extra": "iterations: 1357\ncpu: 515.8554333087702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.7324866573181,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 491.6652703651704 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 457.68429692608714,
            "unit": "us/iter",
            "extra": "iterations: 1529\ncpu: 457.6255722694577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.4532916400628,
            "unit": "us/iter",
            "extra": "iterations: 1567\ncpu: 446.36442118698295 us\nthreads: 1"
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
            "value": 25.136624648648404,
            "unit": "us/iter",
            "extra": "iterations: 27750\ncpu: 25.135458990991086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.959888650043195,
            "unit": "us/iter",
            "extra": "iterations: 116300\ncpu: 5.95919800515907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.753240505907011,
            "unit": "us/iter",
            "extra": "iterations: 149988\ncpu: 4.753011274235292 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.048004312552448,
            "unit": "us/iter",
            "extra": "iterations: 171824\ncpu: 4.047508130412531 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.858677567560172,
            "unit": "us/iter",
            "extra": "iterations: 182615\ncpu: 3.858406762861749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8292916860932933,
            "unit": "us/iter",
            "extra": "iterations: 182309\ncpu: 3.828840660636611 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6495967063661165,
            "unit": "us/iter",
            "extra": "iterations: 192614\ncpu: 3.6493001599053327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.19377156276218,
            "unit": "us/iter",
            "extra": "iterations: 4684\ncpu: 149.17157023911108 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.1107900387983,
            "unit": "us/iter",
            "extra": "iterations: 22166\ncpu: 31.10777109085994 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.424826146636455,
            "unit": "us/iter",
            "extra": "iterations: 29870\ncpu: 23.420673284231636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.66123597320981,
            "unit": "us/iter",
            "extra": "iterations: 34042\ncpu: 20.65948443099697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.391560646900388,
            "unit": "us/iter",
            "extra": "iterations: 34503\ncpu: 20.38879981450885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.37269286604773,
            "unit": "us/iter",
            "extra": "iterations: 36095\ncpu: 19.372413132012724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.086279712370384,
            "unit": "us/iter",
            "extra": "iterations: 37131\ncpu: 19.0844592927743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.05605185907723,
            "unit": "us/iter",
            "extra": "iterations: 2044\ncpu: 343.027835127203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 65.8908295625966,
            "unit": "us/iter",
            "extra": "iterations: 10608\ncpu: 65.88525773001453 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.95879199027403,
            "unit": "us/iter",
            "extra": "iterations: 14807\ncpu: 46.95783804957127 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.2007956264772,
            "unit": "us/iter",
            "extra": "iterations: 16920\ncpu: 41.19620679669012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.05356182084995,
            "unit": "us/iter",
            "extra": "iterations: 17025\ncpu: 41.04747154185019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.2214350895044,
            "unit": "us/iter",
            "extra": "iterations: 17709\ncpu: 39.214281156474094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.21753051436257,
            "unit": "us/iter",
            "extra": "iterations: 18139\ncpu: 38.213878714372285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1876.1294247311864,
            "unit": "us/iter",
            "extra": "iterations: 372\ncpu: 1875.8409999999958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.3466703877885,
            "unit": "us/iter",
            "extra": "iterations: 1702\ncpu: 410.29716980023164 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 275.2778128834349,
            "unit": "us/iter",
            "extra": "iterations: 2608\ncpu: 275.2407473159525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.95068609714096,
            "unit": "us/iter",
            "extra": "iterations: 2985\ncpu: 234.93000904522603 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.9969424778792,
            "unit": "us/iter",
            "extra": "iterations: 3164\ncpu: 220.97160998735785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 211.49750439527045,
            "unit": "us/iter",
            "extra": "iterations: 3299\ncpu: 210.92069566535324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 205.86765768666604,
            "unit": "us/iter",
            "extra": "iterations: 3415\ncpu: 205.84555256222643 us\nthreads: 1"
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
          "id": "7b39a65396a822e67d4c71685d943fa177e0a078",
          "message": "Merge pull request #262 from genogrove/test/io-edge-cases-179\n\nAdd IO edge case tests for coordinate boundaries and invalid blocks",
          "timestamp": "2026-03-26T11:09:27-05:00",
          "tree_id": "5f26270d90386b13e4aa59da864d5127d898a398",
          "url": "https://github.com/genogrove/genogrove/commit/7b39a65396a822e67d4c71685d943fa177e0a078"
        },
        "date": 1774541617471,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.33308265841014,
            "unit": "us/iter",
            "extra": "iterations: 20990\ncpu: 33.33198789899953 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.5889210711386195,
            "unit": "us/iter",
            "extra": "iterations: 92425\ncpu: 7.58815011090073 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.11351988254748,
            "unit": "us/iter",
            "extra": "iterations: 136225\ncpu: 5.112982404110847 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.3121158520818295,
            "unit": "us/iter",
            "extra": "iterations: 162414\ncpu: 4.31202023224599 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.961785459108457,
            "unit": "us/iter",
            "extra": "iterations: 176908\ncpu: 3.9615235207000246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.916749649623086,
            "unit": "us/iter",
            "extra": "iterations: 179093\ncpu: 3.916486423254957 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6887873754681837,
            "unit": "us/iter",
            "extra": "iterations: 188506\ncpu: 3.6885649793640507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.0151086025754,
            "unit": "us/iter",
            "extra": "iterations: 2569\ncpu: 272.98142039704135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.13943410275544,
            "unit": "us/iter",
            "extra": "iterations: 16116\ncpu: 43.13772424919337 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.291844090929835,
            "unit": "us/iter",
            "extra": "iterations: 23007\ncpu: 30.28719654887638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.522554544462068,
            "unit": "us/iter",
            "extra": "iterations: 27473\ncpu: 25.52162785280098 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.68202747774086,
            "unit": "us/iter",
            "extra": "iterations: 27404\ncpu: 25.680172091665423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.952383035075695,
            "unit": "us/iter",
            "extra": "iterations: 27940\ncpu: 24.951392519684997 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.506123014899195,
            "unit": "us/iter",
            "extra": "iterations: 28525\ncpu: 24.504457388255894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 632.8455622743467,
            "unit": "us/iter",
            "extra": "iterations: 1108\ncpu: 632.8141552346565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.1932820927781,
            "unit": "us/iter",
            "extra": "iterations: 5562\ncpu: 124.18055429701562 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.65658578629414,
            "unit": "us/iter",
            "extra": "iterations: 9920\ncpu: 70.64855020161279 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.017408554182914,
            "unit": "us/iter",
            "extra": "iterations: 11433\ncpu: 59.01431645237474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.39714267445773,
            "unit": "us/iter",
            "extra": "iterations: 10948\ncpu: 63.39070579101187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.7829648013631,
            "unit": "us/iter",
            "extra": "iterations: 11705\ncpu: 58.77656027338758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.534667738192745,
            "unit": "us/iter",
            "extra": "iterations: 11199\ncpu: 61.53039280292877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3662.211161458373,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3661.920531249992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 898.2899539052402,
            "unit": "us/iter",
            "extra": "iterations: 781\ncpu: 898.1310384122937 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 623.6555529830802,
            "unit": "us/iter",
            "extra": "iterations: 1123\ncpu: 623.5697898486188 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.2681142433172,
            "unit": "us/iter",
            "extra": "iterations: 1348\ncpu: 516.2390497032645 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.4487514045071,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 492.3581741573039 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 460.04822834646944,
            "unit": "us/iter",
            "extra": "iterations: 1524\ncpu: 460.029046587928 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 445.85741284986216,
            "unit": "us/iter",
            "extra": "iterations: 1572\ncpu: 445.8281145038183 us\nthreads: 1"
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
            "value": 25.405732347812286,
            "unit": "us/iter",
            "extra": "iterations: 27532\ncpu: 25.40337948568942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.166967311202199,
            "unit": "us/iter",
            "extra": "iterations: 116156\ncpu: 6.166563492200154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.648096195507086,
            "unit": "us/iter",
            "extra": "iterations: 149560\ncpu: 4.647949458411342 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.016017236347446,
            "unit": "us/iter",
            "extra": "iterations: 174747\ncpu: 4.015785644388755 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8450397768721216,
            "unit": "us/iter",
            "extra": "iterations: 182317\ncpu: 3.8447289336704684 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8219014539229166,
            "unit": "us/iter",
            "extra": "iterations: 184604\ncpu: 3.821727178176003 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.633402062927708,
            "unit": "us/iter",
            "extra": "iterations: 192348\ncpu: 3.633221255224893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.52462311771586,
            "unit": "us/iter",
            "extra": "iterations: 4715\ncpu: 148.51972979851627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.010377178292117,
            "unit": "us/iter",
            "extra": "iterations: 22093\ncpu: 31.008100710632466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.67590721718322,
            "unit": "us/iter",
            "extra": "iterations: 29984\ncpu: 23.675074372998992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.709285197706397,
            "unit": "us/iter",
            "extra": "iterations: 34015\ncpu: 20.706879464941984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.64895518819246,
            "unit": "us/iter",
            "extra": "iterations: 33875\ncpu: 20.647999586715933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.406114371604072,
            "unit": "us/iter",
            "extra": "iterations: 36259\ncpu: 19.40512543092756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.075569218329896,
            "unit": "us/iter",
            "extra": "iterations: 37100\ncpu: 19.07378795148257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.7408499506399,
            "unit": "us/iter",
            "extra": "iterations: 2026\ncpu: 344.7247028627857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.37733191930751,
            "unit": "us/iter",
            "extra": "iterations: 10608\ncpu: 66.37377611236852 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.58481689189518,
            "unit": "us/iter",
            "extra": "iterations: 14800\ncpu: 47.582006148648624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.69937734388953,
            "unit": "us/iter",
            "extra": "iterations: 16799\ncpu: 41.698207333769716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.33381448794596,
            "unit": "us/iter",
            "extra": "iterations: 16883\ncpu: 41.33011787004683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.61187901178865,
            "unit": "us/iter",
            "extra": "iterations: 17729\ncpu: 39.60998962152389 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.190266666666886,
            "unit": "us/iter",
            "extra": "iterations: 18285\ncpu: 38.188192124692506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1877.257095999994,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1877.2166373333334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 413.41170761961246,
            "unit": "us/iter",
            "extra": "iterations: 1693\ncpu: 413.3873189604242 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 279.3436379032381,
            "unit": "us/iter",
            "extra": "iterations: 2480\ncpu: 279.333237096774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 236.63925540539117,
            "unit": "us/iter",
            "extra": "iterations: 2960\ncpu: 236.62478513513585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.59063562621543,
            "unit": "us/iter",
            "extra": "iterations: 3082\ncpu: 226.58233225178438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 217.28881395349106,
            "unit": "us/iter",
            "extra": "iterations: 3225\ncpu: 217.279792248064 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 208.7564225729557,
            "unit": "us/iter",
            "extra": "iterations: 3358\ncpu: 208.75710303752243 us\nthreads: 1"
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
          "id": "ced2f4cabc2208c39c18c7c0e5eaaaef2c3342a5",
          "message": "Merge pull request #264 from genogrove/fix/gtf-quoted-semicolon-263\n\nFix GTF parser splitting on semicolons inside quoted values",
          "timestamp": "2026-03-26T12:29:58-05:00",
          "tree_id": "80e0916d669afda8899a56b43b41141a36e5970d",
          "url": "https://github.com/genogrove/genogrove/commit/ced2f4cabc2208c39c18c7c0e5eaaaef2c3342a5"
        },
        "date": 1774546442684,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.81476497830734,
            "unit": "us/iter",
            "extra": "iterations: 20513\ncpu: 32.81210105786574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.5938738462201405,
            "unit": "us/iter",
            "extra": "iterations: 92522\ncpu: 7.5922511835023005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.0992399248141265,
            "unit": "us/iter",
            "extra": "iterations: 138856\ncpu: 5.0871323889497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.294099538955527,
            "unit": "us/iter",
            "extra": "iterations: 162891\ncpu: 4.293260045060808 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.949740560931047,
            "unit": "us/iter",
            "extra": "iterations: 177348\ncpu: 3.9495541872476725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.878579968612748,
            "unit": "us/iter",
            "extra": "iterations: 180327\ncpu: 3.878397688643408 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7283862001953514,
            "unit": "us/iter",
            "extra": "iterations: 187307\ncpu: 3.728208561345811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.1138856031061,
            "unit": "us/iter",
            "extra": "iterations: 2570\ncpu: 273.09208443579763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.733439243587526,
            "unit": "us/iter",
            "extra": "iterations: 16023\ncpu: 43.732876490045626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.68856152708982,
            "unit": "us/iter",
            "extra": "iterations: 22998\ncpu: 30.685904122097565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.375101197035555,
            "unit": "us/iter",
            "extra": "iterations: 26315\ncpu: 25.37374668440056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.75901038514646,
            "unit": "us/iter",
            "extra": "iterations: 26769\ncpu: 25.7551001531622 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.918529741177245,
            "unit": "us/iter",
            "extra": "iterations: 27857\ncpu: 24.917309832358104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.944196275793814,
            "unit": "us/iter",
            "extra": "iterations: 27818\ncpu: 24.94197555539577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 625.032424215274,
            "unit": "us/iter",
            "extra": "iterations: 1115\ncpu: 625.0128986547087 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.2014388237357,
            "unit": "us/iter",
            "extra": "iterations: 5713\ncpu: 122.18954542272017 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.11412345804663,
            "unit": "us/iter",
            "extra": "iterations: 9809\ncpu: 70.10697359567757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.51731539677082,
            "unit": "us/iter",
            "extra": "iterations: 11392\ncpu: 61.51201307935391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.278457904794706,
            "unit": "us/iter",
            "extra": "iterations: 10987\ncpu: 62.272012651315194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 57.76820917053264,
            "unit": "us/iter",
            "extra": "iterations: 11646\ncpu: 57.7662534775889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.15135370909285,
            "unit": "us/iter",
            "extra": "iterations: 11337\ncpu: 61.14941924671437 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3664.069010471015,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3663.899743455514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 901.3124551281693,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 901.2044461538466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 623.1946527531203,
            "unit": "us/iter",
            "extra": "iterations: 1126\ncpu: 623.086779751332 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.528874538717,
            "unit": "us/iter",
            "extra": "iterations: 1355\ncpu: 515.5175616236168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 508.4686730091356,
            "unit": "us/iter",
            "extra": "iterations: 1419\ncpu: 508.4202191684271 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 464.29598747527075,
            "unit": "us/iter",
            "extra": "iterations: 1517\ncpu: 464.273411338166 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 448.9560180180062,
            "unit": "us/iter",
            "extra": "iterations: 1554\ncpu: 448.9188970398979 us\nthreads: 1"
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
            "value": 25.2624881400061,
            "unit": "us/iter",
            "extra": "iterations: 27656\ncpu: 25.26051930864916 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.9707672619296766,
            "unit": "us/iter",
            "extra": "iterations: 117875\ncpu: 5.9701090053022225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.616089147465362,
            "unit": "us/iter",
            "extra": "iterations: 152029\ncpu: 4.615922692381056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.937516863667399,
            "unit": "us/iter",
            "extra": "iterations: 177749\ncpu: 3.937307067831588 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.937976859475915,
            "unit": "us/iter",
            "extra": "iterations: 177308\ncpu: 3.9377533331829446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7186673403718506,
            "unit": "us/iter",
            "extra": "iterations: 188015\ncpu: 3.7185901124910177 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.7376700523369273,
            "unit": "us/iter",
            "extra": "iterations: 186866\ncpu: 3.7372926589106905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.51721887678963,
            "unit": "us/iter",
            "extra": "iterations: 4683\ncpu: 149.51279265428212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.057068919696587,
            "unit": "us/iter",
            "extra": "iterations: 22577\ncpu: 31.05516308632696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.476343039244274,
            "unit": "us/iter",
            "extra": "iterations: 30909\ncpu: 23.47562942832181 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.39089652465308,
            "unit": "us/iter",
            "extra": "iterations: 33119\ncpu: 20.389101875056685 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.245227389640366,
            "unit": "us/iter",
            "extra": "iterations: 33436\ncpu: 20.244433066156322 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.165793955419854,
            "unit": "us/iter",
            "extra": "iterations: 35172\ncpu: 19.164737632207572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.806327822504418,
            "unit": "us/iter",
            "extra": "iterations: 37139\ncpu: 18.80454907240368 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.6403921568575,
            "unit": "us/iter",
            "extra": "iterations: 2040\ncpu: 343.6201877450981 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.53065426238915,
            "unit": "us/iter",
            "extra": "iterations: 10534\ncpu: 66.52247228023535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.85487468518005,
            "unit": "us/iter",
            "extra": "iterations: 14691\ncpu: 47.85098978966671 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.77376966626923,
            "unit": "us/iter",
            "extra": "iterations: 16780\ncpu: 41.77352413587634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 42.26692578570916,
            "unit": "us/iter",
            "extra": "iterations: 16641\ncpu: 42.265041103299225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.29470303636867,
            "unit": "us/iter",
            "extra": "iterations: 17982\ncpu: 39.292485318651785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.470445222087065,
            "unit": "us/iter",
            "extra": "iterations: 18146\ncpu: 38.465114405378564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1910.5709413332384,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1910.5023333333409 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 419.9433108839567,
            "unit": "us/iter",
            "extra": "iterations: 1663\ncpu: 419.88555923030646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 277.7457844792924,
            "unit": "us/iter",
            "extra": "iterations: 2487\ncpu: 277.7298998793714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.09826411289393,
            "unit": "us/iter",
            "extra": "iterations: 2976\ncpu: 235.0692647849442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.85140207523563,
            "unit": "us/iter",
            "extra": "iterations: 3084\ncpu: 226.83532911802865 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.1818178746914,
            "unit": "us/iter",
            "extra": "iterations: 3256\ncpu: 215.15905313267857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.60845489499997,
            "unit": "us/iter",
            "extra": "iterations: 3381\ncpu: 206.6002413487132 us\nthreads: 1"
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
      }
    ]
  }
}