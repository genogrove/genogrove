window.BENCHMARK_DATA = {
  "lastUpdate": 1772670342681,
  "repoUrl": "https://github.com/genogrove/genogrove",
  "entries": {
    "C++ Benchmark": [
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
          "id": "84b8e69e145ab163c50b9e83078ada9f86978e76",
          "message": "Make intersect() accept const key_type& instead of key_type& (#120)\n\nAllow passing temporaries like grove.intersect(interval{100, 200})\nby changing intersect() and search_iter() to take const key_type&.\nThe query is never modified, so the non-const reference was needlessly\nrestrictive.\n\nCloses #113\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T11:39:08-06:00",
          "tree_id": "5df9307fe3193536f6653d3208e16918d40cde98",
          "url": "https://github.com/genogrove/genogrove/commit/84b8e69e145ab163c50b9e83078ada9f86978e76"
        },
        "date": 1772386966720,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 35.84889175364245,
            "unit": "us/iter",
            "extra": "iterations: 19354\ncpu: 35.84588488167821 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.055912185404452,
            "unit": "us/iter",
            "extra": "iterations: 86341\ncpu: 8.05494563417148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.384666495146196,
            "unit": "us/iter",
            "extra": "iterations: 130208\ncpu: 5.384306663185056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.768701044618802,
            "unit": "us/iter",
            "extra": "iterations: 146082\ncpu: 4.768410296956505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.4625806386098406,
            "unit": "us/iter",
            "extra": "iterations: 157561\ncpu: 4.456047156339446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.515740529676952,
            "unit": "us/iter",
            "extra": "iterations: 154245\ncpu: 4.51540255437778 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.373783537874176,
            "unit": "us/iter",
            "extra": "iterations: 153759\ncpu: 4.373294369760471 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 302.861735807845,
            "unit": "us/iter",
            "extra": "iterations: 2290\ncpu: 302.8311860262006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 45.800713583965255,
            "unit": "us/iter",
            "extra": "iterations: 15268\ncpu: 45.796025609117066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 32.446543972880185,
            "unit": "us/iter",
            "extra": "iterations: 21536\ncpu: 32.443116270430835 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 27.316760779243086,
            "unit": "us/iter",
            "extra": "iterations: 25512\ncpu: 27.313622922546262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 28.81943788549909,
            "unit": "us/iter",
            "extra": "iterations: 24157\ncpu: 28.816742310717377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.531669102989248,
            "unit": "us/iter",
            "extra": "iterations: 24080\ncpu: 29.528932475083046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 30.008447089374005,
            "unit": "us/iter",
            "extra": "iterations: 23105\ncpu: 30.005552997186737 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 668.6837186312187,
            "unit": "us/iter",
            "extra": "iterations: 1052\ncpu: 668.6131549429657 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 135.97726549865152,
            "unit": "us/iter",
            "extra": "iterations: 5194\ncpu: 135.9645215633422 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 78.6790987414124,
            "unit": "us/iter",
            "extra": "iterations: 8740\ncpu: 78.67148077803192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 70.23846008869201,
            "unit": "us/iter",
            "extra": "iterations: 9922\ncpu: 70.23693106228593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 69.54529200125488,
            "unit": "us/iter",
            "extra": "iterations: 9589\ncpu: 69.53391782250503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 67.93305673133877,
            "unit": "us/iter",
            "extra": "iterations: 10206\ncpu: 67.92477767979634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 73.99827327650968,
            "unit": "us/iter",
            "extra": "iterations: 9269\ncpu: 73.99096051353993 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4445.604424050684,
            "unit": "us/iter",
            "extra": "iterations: 158\ncpu: 4444.651841772154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 943.7544059139366,
            "unit": "us/iter",
            "extra": "iterations: 744\ncpu: 943.6147338709682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 660.4598973880616,
            "unit": "us/iter",
            "extra": "iterations: 1072\ncpu: 660.459611007464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 552.4655882352826,
            "unit": "us/iter",
            "extra": "iterations: 1258\ncpu: 552.4073775834643 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 535.9779287338774,
            "unit": "us/iter",
            "extra": "iterations: 1319\ncpu: 535.9334200151638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 499.9244407988512,
            "unit": "us/iter",
            "extra": "iterations: 1402\ncpu: 499.8553701854512 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 490.5641220196181,
            "unit": "us/iter",
            "extra": "iterations: 1426\ncpu: 490.56123632538623 us\nthreads: 1"
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
            "value": 29.353982495078775,
            "unit": "us/iter",
            "extra": "iterations: 23879\ncpu: 29.353094560073746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.37774482101607,
            "unit": "us/iter",
            "extra": "iterations: 74532\ncpu: 9.377490004293465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.899847779793385,
            "unit": "us/iter",
            "extra": "iterations: 88753\ncpu: 7.899224848737509 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.868532842776774,
            "unit": "us/iter",
            "extra": "iterations: 101925\ncpu: 6.868088192298255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.2009229252246545,
            "unit": "us/iter",
            "extra": "iterations: 97866\ncpu: 7.2006193672981516 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.256743276840856,
            "unit": "us/iter",
            "extra": "iterations: 96532\ncpu: 7.2565782020470015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.672532561775834,
            "unit": "us/iter",
            "extra": "iterations: 90812\ncpu: 7.672251905034569 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 170.91566333495345,
            "unit": "us/iter",
            "extra": "iterations: 4102\ncpu: 170.90619137006271 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 49.571203869046194,
            "unit": "us/iter",
            "extra": "iterations: 14112\ncpu: 49.57018856292533 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 41.632228526685715,
            "unit": "us/iter",
            "extra": "iterations: 16602\ncpu: 41.630830080713274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 36.310875220870024,
            "unit": "us/iter",
            "extra": "iterations: 19242\ncpu: 36.309807556387106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 38.556812572887814,
            "unit": "us/iter",
            "extra": "iterations: 18007\ncpu: 38.55518487254933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 39.46908284358154,
            "unit": "us/iter",
            "extra": "iterations: 17696\ncpu: 39.46569727622042 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 42.60148922166385,
            "unit": "us/iter",
            "extra": "iterations: 16561\ncpu: 42.59943203912819 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 375.16601282050766,
            "unit": "us/iter",
            "extra": "iterations: 1872\ncpu: 375.14174626068046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 107.05800794864341,
            "unit": "us/iter",
            "extra": "iterations: 6542\ncpu: 107.05003072454944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 83.65201446305547,
            "unit": "us/iter",
            "extra": "iterations: 8297\ncpu: 83.65029251536707 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 73.30136446636197,
            "unit": "us/iter",
            "extra": "iterations: 9529\ncpu: 73.29956060447068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 77.68036207868535,
            "unit": "us/iter",
            "extra": "iterations: 8871\ncpu: 77.67784646601255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 79.84796435486093,
            "unit": "us/iter",
            "extra": "iterations: 8781\ncpu: 79.84468329347436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.40610591102819,
            "unit": "us/iter",
            "extra": "iterations: 8205\ncpu: 85.40282340036559 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2080.8031047904738,
            "unit": "us/iter",
            "extra": "iterations: 334\ncpu: 2080.6575479042012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 597.156234295386,
            "unit": "us/iter",
            "extra": "iterations: 1178\ncpu: 597.1439702886266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 477.76781668945284,
            "unit": "us/iter",
            "extra": "iterations: 1462\ncpu: 477.7064917920689 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 402.5751433505922,
            "unit": "us/iter",
            "extra": "iterations: 1737\ncpu: 402.5327345998857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 414.29535032599955,
            "unit": "us/iter",
            "extra": "iterations: 1687\ncpu: 414.26948606994654 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 422.388234016884,
            "unit": "us/iter",
            "extra": "iterations: 1658\ncpu: 422.38338540410126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 448.3136971465675,
            "unit": "us/iter",
            "extra": "iterations: 1542\ncpu: 448.3071063553833 us\nthreads: 1"
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
          "id": "e8ae3a2b6e663a41d62471bba868792ec1ecab74",
          "message": "Add PR #120 reference to CHANGELOG intersect const-ref entry\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T11:40:08-06:00",
          "tree_id": "6612a95e6ef3247bb6dcdba41f0d84c61f49be15",
          "url": "https://github.com/genogrove/genogrove/commit/e8ae3a2b6e663a41d62471bba868792ec1ecab74"
        },
        "date": 1772387089689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 40.81170983363638,
            "unit": "us/iter",
            "extra": "iterations: 17552\ncpu: 40.809665622151314 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.361472324723033,
            "unit": "us/iter",
            "extra": "iterations: 74525\ncpu: 9.360763609527007 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.657567582198412,
            "unit": "us/iter",
            "extra": "iterations: 105294\ncpu: 6.657000398883128 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 6.060239734236593,
            "unit": "us/iter",
            "extra": "iterations: 115140\ncpu: 6.060069914886225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.652283752656974,
            "unit": "us/iter",
            "extra": "iterations: 123731\ncpu: 5.651745552852558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.73237280395559,
            "unit": "us/iter",
            "extra": "iterations: 121753\ncpu: 5.732076679835402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 5.6597223698064445,
            "unit": "us/iter",
            "extra": "iterations: 123470\ncpu: 5.659235619988656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 310.15273474801995,
            "unit": "us/iter",
            "extra": "iterations: 2262\ncpu: 310.13457294429696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 53.882185173743984,
            "unit": "us/iter",
            "extra": "iterations: 12950\ncpu: 53.88072486486487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 40.673676634092445,
            "unit": "us/iter",
            "extra": "iterations: 17089\ncpu: 40.67173000175549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 34.929342484384655,
            "unit": "us/iter",
            "extra": "iterations: 19852\ncpu: 34.92830797904492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 36.13555218509048,
            "unit": "us/iter",
            "extra": "iterations: 19450\ncpu: 36.133919331619566 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 36.9301410369555,
            "unit": "us/iter",
            "extra": "iterations: 18130\ncpu: 36.92525002757854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 38.57528190190869,
            "unit": "us/iter",
            "extra": "iterations: 18024\ncpu: 38.528610463826006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 704.4560841683347,
            "unit": "us/iter",
            "extra": "iterations: 998\ncpu: 704.3797615230461 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 135.93406939015279,
            "unit": "us/iter",
            "extra": "iterations: 5116\ncpu: 135.92355336200166 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 89.33499051282139,
            "unit": "us/iter",
            "extra": "iterations: 7800\ncpu: 89.32799294871785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 78.35819468827557,
            "unit": "us/iter",
            "extra": "iterations: 8886\ncpu: 78.34942043664186 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 83.23621222935832,
            "unit": "us/iter",
            "extra": "iterations: 8406\ncpu: 83.23342112776574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 80.16539610913044,
            "unit": "us/iter",
            "extra": "iterations: 8687\ncpu: 80.16033740071376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 90.16003056375791,
            "unit": "us/iter",
            "extra": "iterations: 7787\ncpu: 90.15369474765642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4048.247768786025,
            "unit": "us/iter",
            "extra": "iterations: 173\ncpu: 4048.0619710982546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 1005.9987865329674,
            "unit": "us/iter",
            "extra": "iterations: 698\ncpu: 1005.7800931232097 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 713.2050881459024,
            "unit": "us/iter",
            "extra": "iterations: 987\ncpu: 713.0763819655525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 617.6654000000029,
            "unit": "us/iter",
            "extra": "iterations: 1135\ncpu: 617.6045136563893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 612.3286431064458,
            "unit": "us/iter",
            "extra": "iterations: 1146\ncpu: 612.2872748691107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 580.6180721991727,
            "unit": "us/iter",
            "extra": "iterations: 1205\ncpu: 580.5801535269702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 573.2551877049194,
            "unit": "us/iter",
            "extra": "iterations: 1220\ncpu: 573.2152114754088 us\nthreads: 1"
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
            "value": 31.726384476043467,
            "unit": "us/iter",
            "extra": "iterations: 22082\ncpu: 31.724396567339813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.47510662048352,
            "unit": "us/iter",
            "extra": "iterations: 60917\ncpu: 11.473410821281393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.942062147774685,
            "unit": "us/iter",
            "extra": "iterations: 70445\ncpu: 9.941460302363552 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 8.97344519018535,
            "unit": "us/iter",
            "extra": "iterations: 77924\ncpu: 8.972689158667414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 9.667125565611043,
            "unit": "us/iter",
            "extra": "iterations: 72488\ncpu: 9.666141113011799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 9.92477753997053,
            "unit": "us/iter",
            "extra": "iterations: 70552\ncpu: 9.924315653702248 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 10.598511777690087,
            "unit": "us/iter",
            "extra": "iterations: 66142\ncpu: 10.59770673702033 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 182.0398226729195,
            "unit": "us/iter",
            "extra": "iterations: 3846\ncpu: 182.0331063442538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 60.30235022803354,
            "unit": "us/iter",
            "extra": "iterations: 11621\ncpu: 60.2953517769557 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 51.63424471948683,
            "unit": "us/iter",
            "extra": "iterations: 13493\ncpu: 51.630861631957046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 47.229554274996204,
            "unit": "us/iter",
            "extra": "iterations: 14924\ncpu: 47.22515679442503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 51.51039239298024,
            "unit": "us/iter",
            "extra": "iterations: 13619\ncpu: 51.50725280857615 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 53.638553230626655,
            "unit": "us/iter",
            "extra": "iterations: 13047\ncpu: 53.63442875756901 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 57.63888105219778,
            "unit": "us/iter",
            "extra": "iterations: 12165\ncpu: 57.62999712289359 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 411.7334254694572,
            "unit": "us/iter",
            "extra": "iterations: 1704\ncpu: 411.7116625586848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 127.91698371156389,
            "unit": "us/iter",
            "extra": "iterations: 5464\ncpu: 127.90062902635343 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 103.14613584287655,
            "unit": "us/iter",
            "extra": "iterations: 6721\ncpu: 103.13776253533742 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 94.76223272826014,
            "unit": "us/iter",
            "extra": "iterations: 7382\ncpu: 94.75018585749193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 103.57874339058586,
            "unit": "us/iter",
            "extra": "iterations: 6695\ncpu: 103.57115533980532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 108.5938622401514,
            "unit": "us/iter",
            "extra": "iterations: 6446\ncpu: 108.58861650636106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 117.23721048225096,
            "unit": "us/iter",
            "extra": "iterations: 5972\ncpu: 117.22541242464827 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2167.1029876162143,
            "unit": "us/iter",
            "extra": "iterations: 323\ncpu: 2167.0009102167137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 743.9223700954685,
            "unit": "us/iter",
            "extra": "iterations: 943\ncpu: 743.8526086956464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 599.9952711719453,
            "unit": "us/iter",
            "extra": "iterations: 1169\ncpu: 599.9365218135148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 523.4746404494132,
            "unit": "us/iter",
            "extra": "iterations: 1335\ncpu: 523.4204284644197 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 553.5436805993565,
            "unit": "us/iter",
            "extra": "iterations: 1268\ncpu: 553.4729219242902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 570.4273243243106,
            "unit": "us/iter",
            "extra": "iterations: 1221\ncpu: 570.4031908271908 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 612.6633874345536,
            "unit": "us/iter",
            "extra": "iterations: 1146\ncpu: 612.6212120418813 us\nthreads: 1"
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
          "id": "bce062c3eabc69946110b2736388e7983d412557",
          "message": "Add constexpr to data type constructors, operators, and trivial functions (#121)\n\nMove constructors, comparison operators, getters/setters,\nis_overlapping(), and decode_base() inline into headers as constexpr,\nenabling compile-time construction of interval, numeric,\ngenomic_coordinate, and kmer. Also add constexpr to alignment_flags\nand cigar_element helpers in bam_reader.hpp.\n\nFunctions that use streams, vectors, or string operations remain in\nthe .cpp files.\n\nCloses #114\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T21:08:52-06:00",
          "tree_id": "e129a522333c094d637aa56f025388701915803f",
          "url": "https://github.com/genogrove/genogrove/commit/bce062c3eabc69946110b2736388e7983d412557"
        },
        "date": 1772421166179,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.588275372842304,
            "unit": "us/iter",
            "extra": "iterations: 17903\ncpu: 39.58486382170585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.786688963505123,
            "unit": "us/iter",
            "extra": "iterations: 79518\ncpu: 8.785901846122888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.980830833037473,
            "unit": "us/iter",
            "extra": "iterations: 118386\ncpu: 5.979652712313957 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.2616664736754215,
            "unit": "us/iter",
            "extra": "iterations: 132994\ncpu: 5.261398055551378 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.838657454281444,
            "unit": "us/iter",
            "extra": "iterations: 143213\ncpu: 4.838345220056838 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.938951677065087,
            "unit": "us/iter",
            "extra": "iterations: 141527\ncpu: 4.9387419785623985 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.774640567146451,
            "unit": "us/iter",
            "extra": "iterations: 147193\ncpu: 4.774266609145811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 303.8160398096121,
            "unit": "us/iter",
            "extra": "iterations: 2311\ncpu: 303.8008957161406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 48.48640187304859,
            "unit": "us/iter",
            "extra": "iterations: 14415\ncpu: 48.48325681581683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 34.202205724164656,
            "unit": "us/iter",
            "extra": "iterations: 20824\ncpu: 34.20009133691893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.06250715376603,
            "unit": "us/iter",
            "extra": "iterations: 24882\ncpu: 28.06172482115592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 28.406426793222593,
            "unit": "us/iter",
            "extra": "iterations: 24021\ncpu: 28.404687814828712 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.627846746090096,
            "unit": "us/iter",
            "extra": "iterations: 24678\ncpu: 28.627890023502726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 29.4818417199587,
            "unit": "us/iter",
            "extra": "iterations: 23768\ncpu: 29.480508751262214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 696.5980247770204,
            "unit": "us/iter",
            "extra": "iterations: 1009\ncpu: 696.570943508424 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.07343407960278,
            "unit": "us/iter",
            "extra": "iterations: 5628\ncpu: 124.06958315565065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 74.31365802884127,
            "unit": "us/iter",
            "extra": "iterations: 9223\ncpu: 74.30649669304984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.47912723194224,
            "unit": "us/iter",
            "extra": "iterations: 11145\ncpu: 62.4789169134142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 65.36104753422222,
            "unit": "us/iter",
            "extra": "iterations: 10666\ncpu: 65.35308859928745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.06617666993677,
            "unit": "us/iter",
            "extra": "iterations: 11213\ncpu: 62.06039855524849 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.22650980200086,
            "unit": "us/iter",
            "extra": "iterations: 10202\ncpu: 68.22416408547353 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4012.4181542856672,
            "unit": "us/iter",
            "extra": "iterations: 175\ncpu: 4012.1691714285694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 921.9011368421018,
            "unit": "us/iter",
            "extra": "iterations: 760\ncpu: 921.8635513157894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 624.2776414590742,
            "unit": "us/iter",
            "extra": "iterations: 1124\ncpu: 624.1539172597867 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 517.0285206489672,
            "unit": "us/iter",
            "extra": "iterations: 1356\ncpu: 516.9853502949867 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 495.88848618001583,
            "unit": "us/iter",
            "extra": "iterations: 1411\ncpu: 495.80632600992146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 470.5695552560749,
            "unit": "us/iter",
            "extra": "iterations: 1484\ncpu: 470.54127425875976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 452.30810967743474,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 452.25986451612926 us\nthreads: 1"
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
            "value": 32.278347764791135,
            "unit": "us/iter",
            "extra": "iterations: 21989\ncpu: 32.274606848878996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.39570006824379,
            "unit": "us/iter",
            "extra": "iterations: 61544\ncpu: 11.394153678668884 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.388380249973325,
            "unit": "us/iter",
            "extra": "iterations: 75048\ncpu: 9.387517388871139 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.90597754735934,
            "unit": "us/iter",
            "extra": "iterations: 88631\ncpu: 7.905133068565194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.796096871982564,
            "unit": "us/iter",
            "extra": "iterations: 89066\ncpu: 7.795672961623941 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.70891945707286,
            "unit": "us/iter",
            "extra": "iterations: 91504\ncpu: 7.708507639010316 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.906338487646388,
            "unit": "us/iter",
            "extra": "iterations: 89569\ncpu: 7.905393908606789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 179.82330971399182,
            "unit": "us/iter",
            "extra": "iterations: 3881\ncpu: 179.81123705230556 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 58.84884199426344,
            "unit": "us/iter",
            "extra": "iterations: 11854\ncpu: 58.84103526235853 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.71243341285403,
            "unit": "us/iter",
            "extra": "iterations: 14252\ncpu: 48.70949915801287 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.56587444477227,
            "unit": "us/iter",
            "extra": "iterations: 16885\ncpu: 41.560078353568265 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.879998158707316,
            "unit": "us/iter",
            "extra": "iterations: 16836\ncpu: 41.87696691613219 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 41.08212922336963,
            "unit": "us/iter",
            "extra": "iterations: 17048\ncpu: 41.07965696855956 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 42.26293515606085,
            "unit": "us/iter",
            "extra": "iterations: 16532\ncpu: 42.25925181466253 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 404.3575797687952,
            "unit": "us/iter",
            "extra": "iterations: 1730\ncpu: 404.32432658959664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 124.96705965351039,
            "unit": "us/iter",
            "extra": "iterations: 5599\ncpu: 124.95532362922012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.82666352907938,
            "unit": "us/iter",
            "extra": "iterations: 7118\ncpu: 97.82284532171929 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 84.35974394213137,
            "unit": "us/iter",
            "extra": "iterations: 8295\ncpu: 84.35121000602801 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 85.04582852973539,
            "unit": "us/iter",
            "extra": "iterations: 8223\ncpu: 85.03454201629555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.62300672510997,
            "unit": "us/iter",
            "extra": "iterations: 8327\ncpu: 83.61615431728137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 86.50837294780656,
            "unit": "us/iter",
            "extra": "iterations: 8162\ncpu: 86.49982308257779 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2151.0366044304265,
            "unit": "us/iter",
            "extra": "iterations: 316\ncpu: 2150.9563196202675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 726.1413112719755,
            "unit": "us/iter",
            "extra": "iterations: 967\ncpu: 726.0885356773509 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 570.1622534637438,
            "unit": "us/iter",
            "extra": "iterations: 1227\ncpu: 570.0951100244503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 467.11981249999207,
            "unit": "us/iter",
            "extra": "iterations: 1504\ncpu: 467.0929574468085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 453.79071753247837,
            "unit": "us/iter",
            "extra": "iterations: 1540\ncpu: 453.7741038961082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 441.51485967130145,
            "unit": "us/iter",
            "extra": "iterations: 1582\ncpu: 441.44579709228856 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 451.732093083382,
            "unit": "us/iter",
            "extra": "iterations: 1547\ncpu: 451.69810342598845 us\nthreads: 1"
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
          "id": "05d88b8ad118db9c4c9314ad6de8c63432bf6e4e",
          "message": "Add PR #121 reference to CHANGELOG constexpr entry\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T21:10:03-06:00",
          "tree_id": "3727ea2c72120fb3a53648d2c89c7f009e573f5a",
          "url": "https://github.com/genogrove/genogrove/commit/05d88b8ad118db9c4c9314ad6de8c63432bf6e4e"
        },
        "date": 1772421238172,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 37.909357893027604,
            "unit": "us/iter",
            "extra": "iterations: 18472\ncpu: 37.90651483326115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.693045623302497,
            "unit": "us/iter",
            "extra": "iterations: 80266\ncpu: 8.691287107866344 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.985804810463332,
            "unit": "us/iter",
            "extra": "iterations: 117286\ncpu: 5.985252408642123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.316893979879916,
            "unit": "us/iter",
            "extra": "iterations: 132107\ncpu: 5.316593609725451 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.8722286752876895,
            "unit": "us/iter",
            "extra": "iterations: 143601\ncpu: 4.871700538297085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.955136387702661,
            "unit": "us/iter",
            "extra": "iterations: 141655\ncpu: 4.9546772651865405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.8138277453303795,
            "unit": "us/iter",
            "extra": "iterations: 145192\ncpu: 4.813239159182327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 302.7093866379372,
            "unit": "us/iter",
            "extra": "iterations: 2320\ncpu: 302.68726249999986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 48.01124600136747,
            "unit": "us/iter",
            "extra": "iterations: 14630\ncpu: 48.00835543403972 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 33.56892108804407,
            "unit": "us/iter",
            "extra": "iterations: 20808\ncpu: 33.567237120338305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.070948116419117,
            "unit": "us/iter",
            "extra": "iterations: 24979\ncpu: 28.069349253372792 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 29.271587075028037,
            "unit": "us/iter",
            "extra": "iterations: 24031\ncpu: 29.269977570637906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.500684455895442,
            "unit": "us/iter",
            "extra": "iterations: 24453\ncpu: 28.499045147834632 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.98434699419653,
            "unit": "us/iter",
            "extra": "iterations: 24303\ncpu: 28.982548656544523 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 694.8339353876984,
            "unit": "us/iter",
            "extra": "iterations: 1006\ncpu: 694.7645825049703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 121.7335370273534,
            "unit": "us/iter",
            "extra": "iterations: 5739\ncpu: 121.72683516292066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 72.83853274545609,
            "unit": "us/iter",
            "extra": "iterations: 9299\ncpu: 72.83219658027735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.945810654100704,
            "unit": "us/iter",
            "extra": "iterations: 11038\ncpu: 62.94279470918659 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 66.79897042779322,
            "unit": "us/iter",
            "extra": "iterations: 10449\ncpu: 66.79443458704196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.902497693350675,
            "unit": "us/iter",
            "extra": "iterations: 11055\ncpu: 62.89559837177726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.4252473720401,
            "unit": "us/iter",
            "extra": "iterations: 10179\ncpu: 68.42325405246108 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4004.004977143073,
            "unit": "us/iter",
            "extra": "iterations: 175\ncpu: 4003.622074285716 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 920.2485742443688,
            "unit": "us/iter",
            "extra": "iterations: 761\ncpu: 920.1957082785813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 627.3701506239208,
            "unit": "us/iter",
            "extra": "iterations: 1122\ncpu: 627.2951666666655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 518.8866572909005,
            "unit": "us/iter",
            "extra": "iterations: 1351\ncpu: 518.8426676535893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 495.04041352313146,
            "unit": "us/iter",
            "extra": "iterations: 1405\ncpu: 495.0005487544496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 469.50048854446686,
            "unit": "us/iter",
            "extra": "iterations: 1484\ncpu: 469.47116913746754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 452.45129145077624,
            "unit": "us/iter",
            "extra": "iterations: 1544\ncpu: 452.40352979274644 us\nthreads: 1"
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
            "value": 31.676190001359306,
            "unit": "us/iter",
            "extra": "iterations: 22063\ncpu: 31.674868331595917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.252628738852149,
            "unit": "us/iter",
            "extra": "iterations: 62118\ncpu: 11.251549148394943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.245271635671497,
            "unit": "us/iter",
            "extra": "iterations: 75119\ncpu: 9.245150947163875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.846249856559656,
            "unit": "us/iter",
            "extra": "iterations: 88887\ncpu: 7.845705041232138 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.90942827651552,
            "unit": "us/iter",
            "extra": "iterations: 88646\ncpu: 7.908962818401305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.6393839005578785,
            "unit": "us/iter",
            "extra": "iterations: 91792\ncpu: 7.639177150514224 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.835724675150397,
            "unit": "us/iter",
            "extra": "iterations: 89349\ncpu: 7.835214014706375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 182.3799724889712,
            "unit": "us/iter",
            "extra": "iterations: 3853\ncpu: 182.37749519854697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 58.69884430634856,
            "unit": "us/iter",
            "extra": "iterations: 11908\ncpu: 58.69434900906981 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.79496054279667,
            "unit": "us/iter",
            "extra": "iterations: 14370\ncpu: 48.79283368128041 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.282965832106235,
            "unit": "us/iter",
            "extra": "iterations: 16975\ncpu: 41.278766362297226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 44.76810044030265,
            "unit": "us/iter",
            "extra": "iterations: 15671\ncpu: 44.76669389317844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 40.88722095338412,
            "unit": "us/iter",
            "extra": "iterations: 17076\ncpu: 40.88507636448828 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 41.93221817964208,
            "unit": "us/iter",
            "extra": "iterations: 16711\ncpu: 41.92936520854513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 407.43096789257436,
            "unit": "us/iter",
            "extra": "iterations: 1713\ncpu: 407.4249492119094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 124.74482397003824,
            "unit": "us/iter",
            "extra": "iterations: 5607\ncpu: 124.73288014981183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.3280132792837,
            "unit": "us/iter",
            "extra": "iterations: 7154\ncpu: 97.32074517752295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 83.85663660049337,
            "unit": "us/iter",
            "extra": "iterations: 8060\ncpu: 83.85309230769192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 91.32716782028905,
            "unit": "us/iter",
            "extra": "iterations: 7657\ncpu: 91.31893039049231 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.21804456857242,
            "unit": "us/iter",
            "extra": "iterations: 8414\ncpu: 83.21246113620157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.20280201505456,
            "unit": "us/iter",
            "extra": "iterations: 8238\ncpu: 85.1971012381649 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2142.6901987766246,
            "unit": "us/iter",
            "extra": "iterations: 327\ncpu: 2142.530039755351 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 727.4834072539005,
            "unit": "us/iter",
            "extra": "iterations: 965\ncpu: 727.4476341968874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 570.9408158755901,
            "unit": "us/iter",
            "extra": "iterations: 1222\ncpu: 570.8855016366603 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 467.842160320642,
            "unit": "us/iter",
            "extra": "iterations: 1497\ncpu: 467.82312424850085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 455.68629185666924,
            "unit": "us/iter",
            "extra": "iterations: 1535\ncpu: 455.66029446254316 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 442.8654243191768,
            "unit": "us/iter",
            "extra": "iterations: 1579\ncpu: 442.83088980366966 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 452.8862281835963,
            "unit": "us/iter",
            "extra": "iterations: 1547\ncpu: 452.87948157724753 us\nthreads: 1"
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
          "id": "7dc8b7de6717f08b86971707d92053ea9a55ed8c",
          "message": "Add explicit, const, std::move, and fix signed/unsigned comparisons (#122)\n\n- Add explicit to single-argument constructors: node(int), grove(int),\n  query_result(key_type) to prevent implicit conversions\n- Add const to query-only methods: file_reader_base::get_error_message(),\n  get_current_line() and all derived overrides (bed/gff/bam_reader),\n  plus index_registry::is_registered(), key_lookup(), value_lookup()\n- Add std::move for sink parameters in bed_entry, gff_entry, and\n  file_entry constructors to avoid unnecessary string copies\n- Fix signed/unsigned comparisons: change int loop variables to size_t\n  in node::insert_key_ptr, calc_parent_key, print_keys and\n  grove::split_node, search_iter\n\nCloses #115\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T21:43:46-06:00",
          "tree_id": "bdb7ef975b08e4bb2bb6eb267cfad8220126f65b",
          "url": "https://github.com/genogrove/genogrove/commit/7dc8b7de6717f08b86971707d92053ea9a55ed8c"
        },
        "date": 1772423256669,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 38.70398434870382,
            "unit": "us/iter",
            "extra": "iterations: 17826\ncpu: 38.69756771008638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.91317422349141,
            "unit": "us/iter",
            "extra": "iterations: 78428\ncpu: 8.911647179578722 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.024143435472924,
            "unit": "us/iter",
            "extra": "iterations: 116345\ncpu: 6.0239463750053694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.244087877104099,
            "unit": "us/iter",
            "extra": "iterations: 133186\ncpu: 5.243765823735227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.896437536834474,
            "unit": "us/iter",
            "extra": "iterations: 142532\ncpu: 4.896489693542499 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.943786308064074,
            "unit": "us/iter",
            "extra": "iterations: 141587\ncpu: 4.943337884127779 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.73858703362462,
            "unit": "us/iter",
            "extra": "iterations: 145484\ncpu: 4.73787741607324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 302.35773883162244,
            "unit": "us/iter",
            "extra": "iterations: 2328\ncpu: 302.3349136597934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 49.06003917714808,
            "unit": "us/iter",
            "extra": "iterations: 14243\ncpu: 49.05949448852071 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 34.31104994125179,
            "unit": "us/iter",
            "extra": "iterations: 20424\ncpu: 34.31251987857419 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.519591223084273,
            "unit": "us/iter",
            "extra": "iterations: 24610\ncpu: 28.51690674522547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 28.69578694990924,
            "unit": "us/iter",
            "extra": "iterations: 24337\ncpu: 28.695611661256535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.640130204330262,
            "unit": "us/iter",
            "extra": "iterations: 24715\ncpu: 28.638251871333217 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.819372731775584,
            "unit": "us/iter",
            "extra": "iterations: 24248\ncpu: 28.818942551963065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 695.6765424900677,
            "unit": "us/iter",
            "extra": "iterations: 1012\ncpu: 695.6036788537557 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.97335007071301,
            "unit": "us/iter",
            "extra": "iterations: 5656\ncpu: 122.97298391089139 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 76.84848018171769,
            "unit": "us/iter",
            "extra": "iterations: 8805\ncpu: 76.84484179443487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 63.05450341810382,
            "unit": "us/iter",
            "extra": "iterations: 10971\ncpu: 63.048967459666166 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 65.00827967207006,
            "unit": "us/iter",
            "extra": "iterations: 10734\ncpu: 65.00920504937592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 61.93757301684796,
            "unit": "us/iter",
            "extra": "iterations: 11333\ncpu: 61.936123621282974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 67.51962210772943,
            "unit": "us/iter",
            "extra": "iterations: 10286\ncpu: 67.5186270659149 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4007.81454022998,
            "unit": "us/iter",
            "extra": "iterations: 174\ncpu: 4007.678080459784 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 922.871142480268,
            "unit": "us/iter",
            "extra": "iterations: 758\ncpu: 922.7872559366767 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 633.125394570139,
            "unit": "us/iter",
            "extra": "iterations: 1105\ncpu: 633.1145457013569 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 529.3463330809676,
            "unit": "us/iter",
            "extra": "iterations: 1321\ncpu: 529.2873981831947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 501.01614224138825,
            "unit": "us/iter",
            "extra": "iterations: 1392\ncpu: 501.01741738505706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 470.24335080650616,
            "unit": "us/iter",
            "extra": "iterations: 1488\ncpu: 470.21216801075315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 451.3222958199707,
            "unit": "us/iter",
            "extra": "iterations: 1555\ncpu: 451.31341286173546 us\nthreads: 1"
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
            "value": 32.019943024642124,
            "unit": "us/iter",
            "extra": "iterations: 21834\ncpu: 32.01715375103048 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.379534568445926,
            "unit": "us/iter",
            "extra": "iterations: 61371\ncpu: 11.379683531309613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.332637248338502,
            "unit": "us/iter",
            "extra": "iterations: 74704\ncpu: 9.332383794709793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.876816726480535,
            "unit": "us/iter",
            "extra": "iterations: 88889\ncpu: 7.8766477179403624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.878910740621683,
            "unit": "us/iter",
            "extra": "iterations: 88831\ncpu: 7.878660715290838 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.681799695428368,
            "unit": "us/iter",
            "extra": "iterations: 91276\ncpu: 7.681235374030405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.804804667349134,
            "unit": "us/iter",
            "extra": "iterations: 89944\ncpu: 7.804765409588226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 180.64200566717753,
            "unit": "us/iter",
            "extra": "iterations: 3882\ncpu: 180.62252575991857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 59.0186771421188,
            "unit": "us/iter",
            "extra": "iterations: 11869\ncpu: 59.0102068413516 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.709709030324134,
            "unit": "us/iter",
            "extra": "iterations: 14407\ncpu: 48.70318331366662 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.314168287086474,
            "unit": "us/iter",
            "extra": "iterations: 16971\ncpu: 41.31225060397143 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.48162419173854,
            "unit": "us/iter",
            "extra": "iterations: 16857\ncpu: 41.47621023906982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 41.00921381732416,
            "unit": "us/iter",
            "extra": "iterations: 17080\ncpu: 41.008611358313665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 41.67506962855888,
            "unit": "us/iter",
            "extra": "iterations: 16746\ncpu: 41.671001015167626 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 405.85725810186824,
            "unit": "us/iter",
            "extra": "iterations: 1728\ncpu: 405.7983848379623 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 124.61423116930037,
            "unit": "us/iter",
            "extra": "iterations: 5576\ncpu: 124.60307550215246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.26285505431917,
            "unit": "us/iter",
            "extra": "iterations: 7182\ncpu: 97.25747939292611 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 83.40098594569024,
            "unit": "us/iter",
            "extra": "iterations: 8396\ncpu: 83.39033897093788 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.0962146036355,
            "unit": "us/iter",
            "extra": "iterations: 8313\ncpu: 84.09343883074692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.47007373546471,
            "unit": "us/iter",
            "extra": "iterations: 8422\ncpu: 83.46355841842778 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.40838020069147,
            "unit": "us/iter",
            "extra": "iterations: 8172\ncpu: 85.40374596182053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2166.8695763237847,
            "unit": "us/iter",
            "extra": "iterations: 321\ncpu: 2166.672031152658 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 724.9791772021805,
            "unit": "us/iter",
            "extra": "iterations: 965\ncpu: 724.8852528497462 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 570.2278026101889,
            "unit": "us/iter",
            "extra": "iterations: 1226\ncpu: 570.1901696574203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 464.4075367791994,
            "unit": "us/iter",
            "extra": "iterations: 1509\ncpu: 464.3093744201464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 452.8583857604188,
            "unit": "us/iter",
            "extra": "iterations: 1545\ncpu: 452.829326213593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 439.55624387168433,
            "unit": "us/iter",
            "extra": "iterations: 1591\ncpu: 439.5258152105599 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 449.9348855306,
            "unit": "us/iter",
            "extra": "iterations: 1555\ncpu: 449.86464180064416 us\nthreads: 1"
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
          "id": "811614dae39276711c8717c0c248c29497c153c5",
          "message": "Add PR #122 reference to CHANGELOG explicit/const/move/signedness entry\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T21:51:37-06:00",
          "tree_id": "b0ad6d0c99ff8222bb875bc0109e3f593384161b",
          "url": "https://github.com/genogrove/genogrove/commit/811614dae39276711c8717c0c248c29497c153c5"
        },
        "date": 1772423734473,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 40.027051387284516,
            "unit": "us/iter",
            "extra": "iterations: 17300\ncpu: 40.02239184971098 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.317009651560134,
            "unit": "us/iter",
            "extra": "iterations: 75221\ncpu: 9.315219779051063 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.463681166697075,
            "unit": "us/iter",
            "extra": "iterations: 109540\ncpu: 6.4623398119408435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.678491146670892,
            "unit": "us/iter",
            "extra": "iterations: 124360\ncpu: 5.678081465101318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.336982453213671,
            "unit": "us/iter",
            "extra": "iterations: 131876\ncpu: 5.336650141041586 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.2414372831121145,
            "unit": "us/iter",
            "extra": "iterations: 134286\ncpu: 5.240480191531511 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 5.1573909428338975,
            "unit": "us/iter",
            "extra": "iterations: 136864\ncpu: 5.156612345101706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 304.33294013015956,
            "unit": "us/iter",
            "extra": "iterations: 2305\ncpu: 304.30209501084585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 49.996364048444555,
            "unit": "us/iter",
            "extra": "iterations: 14119\ncpu: 49.99543707061407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 35.22948540053576,
            "unit": "us/iter",
            "extra": "iterations: 19761\ncpu: 35.226870401295464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 29.544928242829688,
            "unit": "us/iter",
            "extra": "iterations: 23259\ncpu: 29.543345887613402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.08709408207791,
            "unit": "us/iter",
            "extra": "iterations: 22491\ncpu: 30.084450224534283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.62687768086655,
            "unit": "us/iter",
            "extra": "iterations: 23733\ncpu: 29.625898706442506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 30.090468521605914,
            "unit": "us/iter",
            "extra": "iterations: 23397\ncpu: 30.08883874000944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 690.2826099009741,
            "unit": "us/iter",
            "extra": "iterations: 1010\ncpu: 690.223487128712 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.54031672535291,
            "unit": "us/iter",
            "extra": "iterations: 5680\ncpu: 123.5264545774648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 77.53588487432762,
            "unit": "us/iter",
            "extra": "iterations: 8912\ncpu: 77.52910210951522 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 63.300861321094395,
            "unit": "us/iter",
            "extra": "iterations: 11112\ncpu: 63.29767584593229 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 68.71900087685131,
            "unit": "us/iter",
            "extra": "iterations: 10264\ncpu: 68.71344982462963 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 63.48149269005872,
            "unit": "us/iter",
            "extra": "iterations: 10944\ncpu: 63.47891410818731 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.7146506346685,
            "unit": "us/iter",
            "extra": "iterations: 10084\ncpu: 68.70887346291134 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3981.4687897726294,
            "unit": "us/iter",
            "extra": "iterations: 176\ncpu: 3981.4072102272676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 927.9048333333188,
            "unit": "us/iter",
            "extra": "iterations: 756\ncpu: 927.8783386243406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 634.6507291666875,
            "unit": "us/iter",
            "extra": "iterations: 1104\ncpu: 634.5694148550717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 531.9392887538007,
            "unit": "us/iter",
            "extra": "iterations: 1316\ncpu: 531.8985919452892 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 513.8963369330264,
            "unit": "us/iter",
            "extra": "iterations: 1389\ncpu: 513.8476349892013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 473.0915164983231,
            "unit": "us/iter",
            "extra": "iterations: 1485\ncpu: 473.0325723905728 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 452.6769092676488,
            "unit": "us/iter",
            "extra": "iterations: 1543\ncpu: 452.6322566429042 us\nthreads: 1"
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
            "value": 31.88626704415722,
            "unit": "us/iter",
            "extra": "iterations: 21899\ncpu: 31.88561728846055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.339003725721923,
            "unit": "us/iter",
            "extra": "iterations: 61733\ncpu: 11.337699334229681 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.28347275211603,
            "unit": "us/iter",
            "extra": "iterations: 75382\ncpu: 9.282856517470973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.906369917138959,
            "unit": "us/iter",
            "extra": "iterations: 88582\ncpu: 7.905423618793874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.879821847052577,
            "unit": "us/iter",
            "extra": "iterations: 88671\ncpu: 7.879009721329394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.703520461354386,
            "unit": "us/iter",
            "extra": "iterations: 91123\ncpu: 7.703441809422424 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.824048603420638,
            "unit": "us/iter",
            "extra": "iterations: 89397\ncpu: 7.823148148148179 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 183.35321314019532,
            "unit": "us/iter",
            "extra": "iterations: 3866\ncpu: 183.33622659079077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 59.43610390498125,
            "unit": "us/iter",
            "extra": "iterations: 11703\ncpu: 59.43261744851702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.44255704137046,
            "unit": "us/iter",
            "extra": "iterations: 14358\ncpu: 48.44044971444479 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.411041725435076,
            "unit": "us/iter",
            "extra": "iterations: 17016\ncpu: 41.40754654442873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.97941698841685,
            "unit": "us/iter",
            "extra": "iterations: 16835\ncpu: 41.978023997624035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 40.97589156626534,
            "unit": "us/iter",
            "extra": "iterations: 17015\ncpu: 40.97367787246549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 42.09990778861159,
            "unit": "us/iter",
            "extra": "iterations: 16614\ncpu: 42.09739936198396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 405.50694672841655,
            "unit": "us/iter",
            "extra": "iterations: 1727\ncpu: 405.4991349160391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 125.78691914664829,
            "unit": "us/iter",
            "extra": "iterations: 5578\ncpu: 125.77699264969627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.98264347704288,
            "unit": "us/iter",
            "extra": "iterations: 7144\ncpu: 97.97785918253052 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 83.79495524542725,
            "unit": "us/iter",
            "extra": "iterations: 8312\ncpu: 83.7916397978833 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.6848299697898,
            "unit": "us/iter",
            "extra": "iterations: 8275\ncpu: 84.67480809667698 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.2170474035261,
            "unit": "us/iter",
            "extra": "iterations: 8396\ncpu: 83.21262291567426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.31677299793367,
            "unit": "us/iter",
            "extra": "iterations: 8229\ncpu: 85.31039093449986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2165.567242424185,
            "unit": "us/iter",
            "extra": "iterations: 297\ncpu: 2165.4698552188506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 723.6837767489714,
            "unit": "us/iter",
            "extra": "iterations: 972\ncpu: 723.668449588474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 569.9038345558367,
            "unit": "us/iter",
            "extra": "iterations: 1227\ncpu: 569.8388818255914 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 463.6027564698055,
            "unit": "us/iter",
            "extra": "iterations: 1507\ncpu: 463.5915879230262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 456.082829663222,
            "unit": "us/iter",
            "extra": "iterations: 1544\ncpu: 456.0343957253898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 441.19353938249066,
            "unit": "us/iter",
            "extra": "iterations: 1587\ncpu: 441.166759924383 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 452.9273399871174,
            "unit": "us/iter",
            "extra": "iterations: 1553\ncpu: 452.9151056020596 us\nthreads: 1"
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
          "id": "cf60c850c5fda21915f7420ef15d33896e897705",
          "message": "Merge pull request #149 from genogrove/fix/throw-on-parse-errors\n\nThrow on parse errors instead of silently stopping iteration",
          "timestamp": "2026-03-01T22:55:48-06:00",
          "tree_id": "ef6106aee353d18866dcc3b726c590f7891acd20",
          "url": "https://github.com/genogrove/genogrove/commit/cf60c850c5fda21915f7420ef15d33896e897705"
        },
        "date": 1772427575330,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.457808151637764,
            "unit": "us/iter",
            "extra": "iterations: 18254\ncpu: 39.454433220116144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.905511851230862,
            "unit": "us/iter",
            "extra": "iterations: 78726\ncpu: 8.90372739628585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.02017895638014,
            "unit": "us/iter",
            "extra": "iterations: 116805\ncpu: 6.018900560763666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.273952602005333,
            "unit": "us/iter",
            "extra": "iterations: 132052\ncpu: 5.273716339017962 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.964039223322916,
            "unit": "us/iter",
            "extra": "iterations: 141217\ncpu: 4.963126457862719 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.930742933483299,
            "unit": "us/iter",
            "extra": "iterations: 142220\ncpu: 4.930588693573335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.82382681329289,
            "unit": "us/iter",
            "extra": "iterations: 145040\ncpu: 4.823510190292333 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 302.563919689118,
            "unit": "us/iter",
            "extra": "iterations: 2316\ncpu: 302.5525323834193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 49.10374444210644,
            "unit": "us/iter",
            "extra": "iterations: 14259\ncpu: 49.10205862963741 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 34.22610560202725,
            "unit": "us/iter",
            "extra": "iterations: 19725\ncpu: 34.22231731305444 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.442106112469837,
            "unit": "us/iter",
            "extra": "iterations: 24540\ncpu: 28.441504237978776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 28.99727378461987,
            "unit": "us/iter",
            "extra": "iterations: 23902\ncpu: 28.995888084679127 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.377178992629613,
            "unit": "us/iter",
            "extra": "iterations: 24420\ncpu: 28.376538533988537 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 29.366456407231222,
            "unit": "us/iter",
            "extra": "iterations: 23731\ncpu: 29.36367338080992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 694.9604001976386,
            "unit": "us/iter",
            "extra": "iterations: 1012\ncpu: 694.9378063241103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.41246205083408,
            "unit": "us/iter",
            "extra": "iterations: 5705\ncpu: 122.40848606485547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 76.2977242929187,
            "unit": "us/iter",
            "extra": "iterations: 9122\ncpu: 76.28612212234137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.6561735312759,
            "unit": "us/iter",
            "extra": "iterations: 11047\ncpu: 62.65436462387978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 65.90356612857506,
            "unit": "us/iter",
            "extra": "iterations: 10593\ncpu: 65.89843151137545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.17454297788137,
            "unit": "us/iter",
            "extra": "iterations: 11122\ncpu: 62.16920014385905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.36644452041183,
            "unit": "us/iter",
            "extra": "iterations: 10238\ncpu: 68.36417161555005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4040.527751444997,
            "unit": "us/iter",
            "extra": "iterations: 173\ncpu: 4040.276011560701 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 924.9121216931546,
            "unit": "us/iter",
            "extra": "iterations: 756\ncpu: 924.8638928571422 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 625.7012344028432,
            "unit": "us/iter",
            "extra": "iterations: 1122\ncpu: 625.667229946526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 531.8904562737708,
            "unit": "us/iter",
            "extra": "iterations: 1315\ncpu: 531.8732509505717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 504.50589144500424,
            "unit": "us/iter",
            "extra": "iterations: 1391\ncpu: 504.47977929547176 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 471.62771736204485,
            "unit": "us/iter",
            "extra": "iterations: 1486\ncpu: 471.6212113055169 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 451.46080980013056,
            "unit": "us/iter",
            "extra": "iterations: 1551\ncpu: 451.4401321727935 us\nthreads: 1"
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
            "value": 31.89853471969492,
            "unit": "us/iter",
            "extra": "iterations: 21976\ncpu: 31.897794958136267 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.306835027428443,
            "unit": "us/iter",
            "extra": "iterations: 61980\ncpu: 11.305196547273319 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.37299176703335,
            "unit": "us/iter",
            "extra": "iterations: 75307\ncpu: 9.372523643220394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.918395091016837,
            "unit": "us/iter",
            "extra": "iterations: 87676\ncpu: 7.91789890049727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.963623141004287,
            "unit": "us/iter",
            "extra": "iterations: 87749\ncpu: 7.962677124525657 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.692305300562643,
            "unit": "us/iter",
            "extra": "iterations: 91179\ncpu: 7.692379637855216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.804472241421505,
            "unit": "us/iter",
            "extra": "iterations: 89702\ncpu: 7.80396446010118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 180.70300696234764,
            "unit": "us/iter",
            "extra": "iterations: 3878\ncpu: 180.69246415678217 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 58.85695659838723,
            "unit": "us/iter",
            "extra": "iterations: 11912\ncpu: 58.85215967091978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.48282835562385,
            "unit": "us/iter",
            "extra": "iterations: 14431\ncpu: 48.480651999168394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.18973362342652,
            "unit": "us/iter",
            "extra": "iterations: 17006\ncpu: 41.187651769963765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.460607841973555,
            "unit": "us/iter",
            "extra": "iterations: 16858\ncpu: 41.460524142840065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 40.915048807575715,
            "unit": "us/iter",
            "extra": "iterations: 17108\ncpu: 40.91097106616763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 41.92927458576769,
            "unit": "us/iter",
            "extra": "iterations: 16778\ncpu: 41.92608558827032 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 407.55191268917235,
            "unit": "us/iter",
            "extra": "iterations: 1718\ncpu: 407.5100541327118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 124.40255089714276,
            "unit": "us/iter",
            "extra": "iterations: 5629\ncpu: 124.39004032687902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.02736837713796,
            "unit": "us/iter",
            "extra": "iterations: 7191\ncpu: 97.02111778612199 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 83.16443271516746,
            "unit": "us/iter",
            "extra": "iterations: 8412\ncpu: 83.1652196861622 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.37094690585201,
            "unit": "us/iter",
            "extra": "iterations: 8306\ncpu: 84.36318528774315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 82.73663657844872,
            "unit": "us/iter",
            "extra": "iterations: 8464\ncpu: 82.73040678166274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.25955650268014,
            "unit": "us/iter",
            "extra": "iterations: 8212\ncpu: 85.25294240136415 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2155.930280864202,
            "unit": "us/iter",
            "extra": "iterations: 324\ncpu: 2155.726438271597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 719.3949712820588,
            "unit": "us/iter",
            "extra": "iterations: 975\ncpu: 719.3927466666686 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 569.4883666666606,
            "unit": "us/iter",
            "extra": "iterations: 1230\ncpu: 569.4638894308935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 467.5888764119542,
            "unit": "us/iter",
            "extra": "iterations: 1505\ncpu: 467.5815328903656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 454.60543571429275,
            "unit": "us/iter",
            "extra": "iterations: 1540\ncpu: 454.57465909091195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 448.6910915403936,
            "unit": "us/iter",
            "extra": "iterations: 1584\ncpu: 448.6834223484813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 452.3822818358139,
            "unit": "us/iter",
            "extra": "iterations: 1547\ncpu: 452.3746354234016 us\nthreads: 1"
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
          "id": "6847eecc58031b1534e611b9cc74fa22dde0e047",
          "message": "Update CHANGELOG for PR #149: throw on parse errors, add reader options\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T22:57:05-06:00",
          "tree_id": "0c372d74d846004860802810ab0c490f3bacbc1f",
          "url": "https://github.com/genogrove/genogrove/commit/6847eecc58031b1534e611b9cc74fa22dde0e047"
        },
        "date": 1772427660865,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.84741065115743,
            "unit": "us/iter",
            "extra": "iterations: 17538\ncpu: 39.8419231383282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.890038053467503,
            "unit": "us/iter",
            "extra": "iterations: 78889\ncpu: 8.889261430617703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.979616814985444,
            "unit": "us/iter",
            "extra": "iterations: 116753\ncpu: 5.978822993841701 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.240328900416797,
            "unit": "us/iter",
            "extra": "iterations: 133396\ncpu: 5.2400340265075425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.889146766377542,
            "unit": "us/iter",
            "extra": "iterations: 143214\ncpu: 4.888679835770245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.9391692664789995,
            "unit": "us/iter",
            "extra": "iterations: 141741\ncpu: 4.938782024961024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.783557279244402,
            "unit": "us/iter",
            "extra": "iterations: 146327\ncpu: 4.783045493996327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 302.24141561821494,
            "unit": "us/iter",
            "extra": "iterations: 2305\ncpu: 302.20074273318835 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 49.23412234452794,
            "unit": "us/iter",
            "extra": "iterations: 14263\ncpu: 49.23061957512445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 35.55785666598287,
            "unit": "us/iter",
            "extra": "iterations: 19472\ncpu: 35.555973294987695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.633538777335833,
            "unit": "us/iter",
            "extra": "iterations: 24602\ncpu: 28.631574099666672 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 29.88982890843472,
            "unit": "us/iter",
            "extra": "iterations: 24671\ncpu: 29.886342223663362 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.914624638757676,
            "unit": "us/iter",
            "extra": "iterations: 24222\ncpu: 28.911526628684683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 30.281085332523016,
            "unit": "us/iter",
            "extra": "iterations: 23051\ncpu: 30.276951672378644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 690.4718530572147,
            "unit": "us/iter",
            "extra": "iterations: 1014\ncpu: 690.353724852072 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 125.59453327338159,
            "unit": "us/iter",
            "extra": "iterations: 5560\ncpu: 125.58349622302144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 78.69939420387288,
            "unit": "us/iter",
            "extra": "iterations: 8937\ncpu: 78.6866488754618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 64.69683465079638,
            "unit": "us/iter",
            "extra": "iterations: 10753\ncpu: 64.68956086673492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 68.20276303408481,
            "unit": "us/iter",
            "extra": "iterations: 10415\ncpu: 68.19505866538658 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 65.59622400507556,
            "unit": "us/iter",
            "extra": "iterations: 11031\ncpu: 65.59081515728377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.67389188922809,
            "unit": "us/iter",
            "extra": "iterations: 10147\ncpu: 68.66832098157084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3985.814028571407,
            "unit": "us/iter",
            "extra": "iterations: 175\ncpu: 3985.2712914285703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 924.1224546649266,
            "unit": "us/iter",
            "extra": "iterations: 761\ncpu: 923.9944034165529 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 635.9669029918434,
            "unit": "us/iter",
            "extra": "iterations: 1103\ncpu: 635.8712085222113 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 531.6738661596993,
            "unit": "us/iter",
            "extra": "iterations: 1315\ncpu: 531.589241825094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 506.31455965291826,
            "unit": "us/iter",
            "extra": "iterations: 1383\ncpu: 506.2961337671717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 473.44417936613786,
            "unit": "us/iter",
            "extra": "iterations: 1483\ncpu: 473.37171476736177 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 453.17984002590737,
            "unit": "us/iter",
            "extra": "iterations: 1544\ncpu: 453.1339132124348 us\nthreads: 1"
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
            "value": 31.916917167576997,
            "unit": "us/iter",
            "extra": "iterations: 21960\ncpu: 31.91403051001823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.428177351090842,
            "unit": "us/iter",
            "extra": "iterations: 61195\ncpu: 11.426467570879996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.383812069104414,
            "unit": "us/iter",
            "extra": "iterations: 74554\ncpu: 9.382952007940535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.906886950809851,
            "unit": "us/iter",
            "extra": "iterations: 82212\ncpu: 7.906587371673262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.9068800328308635,
            "unit": "us/iter",
            "extra": "iterations: 88941\ncpu: 7.905701869778815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.668794816060977,
            "unit": "us/iter",
            "extra": "iterations: 91552\ncpu: 7.66777119014329 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.796083790612558,
            "unit": "us/iter",
            "extra": "iterations: 89843\ncpu: 7.795205191278109 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 181.806689178617,
            "unit": "us/iter",
            "extra": "iterations: 3835\ncpu: 181.7940790091271 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 59.63580165500862,
            "unit": "us/iter",
            "extra": "iterations: 11722\ncpu: 59.633920235454546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.591757027690306,
            "unit": "us/iter",
            "extra": "iterations: 14265\ncpu: 48.58952365930591 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.22734222484575,
            "unit": "us/iter",
            "extra": "iterations: 16945\ncpu: 41.22246048981993 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.58108771093035,
            "unit": "us/iter",
            "extra": "iterations: 16771\ncpu: 41.577237075904534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 41.203218672929445,
            "unit": "us/iter",
            "extra": "iterations: 17030\ncpu: 41.19750428655279 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 41.9285533433285,
            "unit": "us/iter",
            "extra": "iterations: 16675\ncpu: 41.92564821589196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 406.8909924768407,
            "unit": "us/iter",
            "extra": "iterations: 1728\ncpu: 406.8652499999992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 126.1349758471518,
            "unit": "us/iter",
            "extra": "iterations: 5548\ncpu: 126.12586896178789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 96.96481426969567,
            "unit": "us/iter",
            "extra": "iterations: 7134\ncpu: 96.95423507148804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 83.23612628804318,
            "unit": "us/iter",
            "extra": "iterations: 8346\ncpu: 83.2285667385578 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.62207454764635,
            "unit": "us/iter",
            "extra": "iterations: 8290\ncpu: 84.61462255729836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.64223929081521,
            "unit": "us/iter",
            "extra": "iterations: 8404\ncpu: 83.63516337458276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.37236437788833,
            "unit": "us/iter",
            "extra": "iterations: 8214\ncpu: 85.3621915023135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2150.3717217125513,
            "unit": "us/iter",
            "extra": "iterations: 327\ncpu: 2150.1115198776715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 727.759884177883,
            "unit": "us/iter",
            "extra": "iterations: 967\ncpu: 727.6558479834528 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 571.439649795918,
            "unit": "us/iter",
            "extra": "iterations: 1225\ncpu: 571.378637551024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 465.46704457751747,
            "unit": "us/iter",
            "extra": "iterations: 1503\ncpu: 465.41588955422446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 454.4831457384497,
            "unit": "us/iter",
            "extra": "iterations: 1537\ncpu: 454.42672088484164 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 441.47942361111245,
            "unit": "us/iter",
            "extra": "iterations: 1584\ncpu: 441.4524210858596 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 451.9168703225865,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 451.88693419354587 us\nthreads: 1"
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
          "id": "4a1569e9768b2cc0957242dd3500fa9b6e3dab1b",
          "message": "Release v0.16.0\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-01T23:12:30-06:00",
          "tree_id": "ba20e6b776e14059795dbd734ffd11599754a45c",
          "url": "https://github.com/genogrove/genogrove/commit/4a1569e9768b2cc0957242dd3500fa9b6e3dab1b"
        },
        "date": 1772428605826,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 41.581530982221516,
            "unit": "us/iter",
            "extra": "iterations: 17155\ncpu: 41.573277236957146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.196401466279594,
            "unit": "us/iter",
            "extra": "iterations: 76111\ncpu: 9.1952062908121 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.128850528281307,
            "unit": "us/iter",
            "extra": "iterations: 114617\ncpu: 6.128081035099503 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.434534539473837,
            "unit": "us/iter",
            "extra": "iterations: 128288\ncpu: 5.434165728672985 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.060881835169479,
            "unit": "us/iter",
            "extra": "iterations: 138603\ncpu: 5.060546214728397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.127799494952845,
            "unit": "us/iter",
            "extra": "iterations: 139393\ncpu: 5.1273363798756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.881036387096673,
            "unit": "us/iter",
            "extra": "iterations: 143375\ncpu: 4.880864265039231 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 306.95528220857386,
            "unit": "us/iter",
            "extra": "iterations: 2282\ncpu: 306.93362751971944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 50.9870939530247,
            "unit": "us/iter",
            "extra": "iterations: 14007\ncpu: 50.98387677589778 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 35.17561420105934,
            "unit": "us/iter",
            "extra": "iterations: 19238\ncpu: 35.17295784385064 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 29.355643268416927,
            "unit": "us/iter",
            "extra": "iterations: 23620\ncpu: 29.353278577476697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 29.50811943962612,
            "unit": "us/iter",
            "extra": "iterations: 23627\ncpu: 29.507759385448836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.38545955213231,
            "unit": "us/iter",
            "extra": "iterations: 23623\ncpu: 29.382966769673644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 29.938359487488448,
            "unit": "us/iter",
            "extra": "iterations: 23336\ncpu: 29.93549884298935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 702.5903945783379,
            "unit": "us/iter",
            "extra": "iterations: 996\ncpu: 702.5257510040158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 125.98869126912916,
            "unit": "us/iter",
            "extra": "iterations: 5555\ncpu: 125.97658271827183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 79.06237036614263,
            "unit": "us/iter",
            "extra": "iterations: 8767\ncpu: 79.05835861754291 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 63.48371746090059,
            "unit": "us/iter",
            "extra": "iterations: 10933\ncpu: 63.47549693588227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.59571323459961,
            "unit": "us/iter",
            "extra": "iterations: 10601\ncpu: 64.59253089331183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.6381695342812,
            "unit": "us/iter",
            "extra": "iterations: 11101\ncpu: 62.63223403297004 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.53675302449155,
            "unit": "us/iter",
            "extra": "iterations: 10167\ncpu: 68.5316049965577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4051.4195202311153,
            "unit": "us/iter",
            "extra": "iterations: 173\ncpu: 4051.2566878612743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 936.9152836218796,
            "unit": "us/iter",
            "extra": "iterations: 751\ncpu: 936.842476697734 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 633.7493666666564,
            "unit": "us/iter",
            "extra": "iterations: 1110\ncpu: 633.720211711712 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 536.8586764028038,
            "unit": "us/iter",
            "extra": "iterations: 1301\ncpu: 536.818675634126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.1195926966164,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 491.0684129213472 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 473.89872105618133,
            "unit": "us/iter",
            "extra": "iterations: 1477\ncpu: 473.8538808395394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 453.77951134156194,
            "unit": "us/iter",
            "extra": "iterations: 1543\ncpu: 453.7446072585876 us\nthreads: 1"
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
            "value": 33.50350508490777,
            "unit": "us/iter",
            "extra": "iterations: 20846\ncpu: 33.50295212510794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.791635125338967,
            "unit": "us/iter",
            "extra": "iterations: 59319\ncpu: 11.790925049309664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.594947892046303,
            "unit": "us/iter",
            "extra": "iterations: 72772\ncpu: 9.59395029681743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 8.002564026131273,
            "unit": "us/iter",
            "extra": "iterations: 87558\ncpu: 8.001675106786353 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.9697953460820266,
            "unit": "us/iter",
            "extra": "iterations: 87797\ncpu: 7.969140266751725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.798361240152636,
            "unit": "us/iter",
            "extra": "iterations: 88473\ncpu: 7.797906807726629 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.875082480847133,
            "unit": "us/iter",
            "extra": "iterations: 88760\ncpu: 7.874760477692614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 187.52565359828083,
            "unit": "us/iter",
            "extra": "iterations: 3724\ncpu: 187.51107599355538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 61.2482356071206,
            "unit": "us/iter",
            "extra": "iterations: 11464\ncpu: 61.24298578157741 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 50.26425285457734,
            "unit": "us/iter",
            "extra": "iterations: 13925\ncpu: 50.26068409335744 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 42.072487832653245,
            "unit": "us/iter",
            "extra": "iterations: 16684\ncpu: 42.06927385519091 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 42.18245072882496,
            "unit": "us/iter",
            "extra": "iterations: 16602\ncpu: 42.177338874834135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 41.27284110156727,
            "unit": "us/iter",
            "extra": "iterations: 16885\ncpu: 41.269669351495715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 42.28339689137751,
            "unit": "us/iter",
            "extra": "iterations: 16599\ncpu: 42.280498463762775 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 420.7075488902277,
            "unit": "us/iter",
            "extra": "iterations: 1667\ncpu: 420.6817168566283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 128.99663820763212,
            "unit": "us/iter",
            "extra": "iterations: 5423\ncpu: 128.98436050156758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 99.74543959201098,
            "unit": "us/iter",
            "extra": "iterations: 6961\ncpu: 99.73907814969085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 86.4342131007568,
            "unit": "us/iter",
            "extra": "iterations: 8198\ncpu: 86.4201723591113 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 85.78748082560445,
            "unit": "us/iter",
            "extra": "iterations: 8188\ncpu: 85.7817112848073 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.9479215074398,
            "unit": "us/iter",
            "extra": "iterations: 8332\ncpu: 83.94284829572743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 86.06983229510018,
            "unit": "us/iter",
            "extra": "iterations: 8187\ncpu: 86.05630096494478 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2261.7463580645344,
            "unit": "us/iter",
            "extra": "iterations: 310\ncpu: 2261.571551612898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 748.6428122977146,
            "unit": "us/iter",
            "extra": "iterations: 927\ncpu: 748.5259989212548 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 583.7813678929605,
            "unit": "us/iter",
            "extra": "iterations: 1196\ncpu: 583.7500785953148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 474.69118071475566,
            "unit": "us/iter",
            "extra": "iterations: 1483\ncpu: 474.6477741065406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 461.45792814767753,
            "unit": "us/iter",
            "extra": "iterations: 1517\ncpu: 461.4313480553735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 446.62585869563804,
            "unit": "us/iter",
            "extra": "iterations: 1564\ncpu: 446.6021010230211 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 455.6148321358773,
            "unit": "us/iter",
            "extra": "iterations: 1531\ncpu: 455.5678687132602 us\nthreads: 1"
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
          "id": "7c2b25654f9c58034770ca17ca2e46e99464f1f6",
          "message": "Merge pull request #152: Rename is_overlapping() to overlaps(), fix closed-interval docs",
          "timestamp": "2026-03-02T15:23:38-06:00",
          "tree_id": "4dbd4052845a2f2fb5cf388445cdfbac0c847aef",
          "url": "https://github.com/genogrove/genogrove/commit/7c2b25654f9c58034770ca17ca2e46e99464f1f6"
        },
        "date": 1772486853278,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 38.7677906114538,
            "unit": "us/iter",
            "extra": "iterations: 17532\ncpu: 38.764709331508094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.884699000190887,
            "unit": "us/iter",
            "extra": "iterations: 78515\ncpu: 8.884276240208878 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.96374330708661,
            "unit": "us/iter",
            "extra": "iterations: 117475\ncpu: 5.9633804128537955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.222659386442115,
            "unit": "us/iter",
            "extra": "iterations: 132734\ncpu: 5.221961283469194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.9243851610766045,
            "unit": "us/iter",
            "extra": "iterations: 141951\ncpu: 4.924033856753384 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.902023317416098,
            "unit": "us/iter",
            "extra": "iterations: 139681\ncpu: 4.901188279007165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.8026698624426105,
            "unit": "us/iter",
            "extra": "iterations: 146339\ncpu: 4.802348827038584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 302.3094234737794,
            "unit": "us/iter",
            "extra": "iterations: 2326\ncpu: 302.27687360275115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 49.35577416180644,
            "unit": "us/iter",
            "extra": "iterations: 14227\ncpu: 49.35329598650455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 34.36337764350486,
            "unit": "us/iter",
            "extra": "iterations: 20191\ncpu: 34.361930166906085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.380904411165524,
            "unit": "us/iter",
            "extra": "iterations: 24574\ncpu: 28.37902677626763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 29.375476579429517,
            "unit": "us/iter",
            "extra": "iterations: 23996\ncpu: 29.374432947157874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.60120245724407,
            "unit": "us/iter",
            "extra": "iterations: 24499\ncpu: 28.597817543573214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 29.154024680531318,
            "unit": "us/iter",
            "extra": "iterations: 23946\ncpu: 29.153303850329955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 692.2146238894318,
            "unit": "us/iter",
            "extra": "iterations: 1013\ncpu: 692.1782724580447 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 125.2352027269435,
            "unit": "us/iter",
            "extra": "iterations: 5574\ncpu: 125.22678794402576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 77.17996402958308,
            "unit": "us/iter",
            "extra": "iterations: 8924\ncpu: 77.17864757956082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 65.6335018567166,
            "unit": "us/iter",
            "extra": "iterations: 11041\ncpu: 65.62714074812082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.26356663840845,
            "unit": "us/iter",
            "extra": "iterations: 10617\ncpu: 64.26234181030429 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.8162247170972,
            "unit": "us/iter",
            "extra": "iterations: 11223\ncpu: 62.81244783034862 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 66.18519913710449,
            "unit": "us/iter",
            "extra": "iterations: 10430\ncpu: 66.18036558005747 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3994.311925714393,
            "unit": "us/iter",
            "extra": "iterations: 175\ncpu: 3994.1707657142847 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 924.5914257555719,
            "unit": "us/iter",
            "extra": "iterations: 761\ncpu: 924.4840906701704 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 638.0658704379774,
            "unit": "us/iter",
            "extra": "iterations: 1096\ncpu: 638.0534434306549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 534.4788593272223,
            "unit": "us/iter",
            "extra": "iterations: 1308\ncpu: 534.3949288990831 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 504.92382008670484,
            "unit": "us/iter",
            "extra": "iterations: 1384\ncpu: 504.89818641618393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 475.6682294636736,
            "unit": "us/iter",
            "extra": "iterations: 1473\ncpu: 475.6129843856084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 455.9042839506249,
            "unit": "us/iter",
            "extra": "iterations: 1539\ncpu: 455.89405393112327 us\nthreads: 1"
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
            "value": 31.90600405855178,
            "unit": "us/iter",
            "extra": "iterations: 21929\ncpu: 31.902617948834976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.390646855484391,
            "unit": "us/iter",
            "extra": "iterations: 61329\ncpu: 11.390429633615438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.316814581665792,
            "unit": "us/iter",
            "extra": "iterations: 73709\ncpu: 9.316145043346118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.932655458089557,
            "unit": "us/iter",
            "extra": "iterations: 88236\ncpu: 7.932182646538812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.981768937286302,
            "unit": "us/iter",
            "extra": "iterations: 88067\ncpu: 7.981613135453704 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.756624250072079,
            "unit": "us/iter",
            "extra": "iterations: 90342\ncpu: 7.755827732394695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.849534506529195,
            "unit": "us/iter",
            "extra": "iterations: 89215\ncpu: 7.8494010760522075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 182.9910463421001,
            "unit": "us/iter",
            "extra": "iterations: 3841\ncpu: 182.9779276230142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 59.20378656728953,
            "unit": "us/iter",
            "extra": "iterations: 11807\ncpu: 59.20003972219845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.40285879902844,
            "unit": "us/iter",
            "extra": "iterations: 14405\ncpu: 48.39950621312058 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.371227696482805,
            "unit": "us/iter",
            "extra": "iterations: 16948\ncpu: 41.370444536228305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.713894680343,
            "unit": "us/iter",
            "extra": "iterations: 16768\ncpu: 41.70904961832051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 41.18250064523711,
            "unit": "us/iter",
            "extra": "iterations: 17048\ncpu: 41.18208992257148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 42.13814649834802,
            "unit": "us/iter",
            "extra": "iterations: 16635\ncpu: 42.13605674782062 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 409.2978800468152,
            "unit": "us/iter",
            "extra": "iterations: 1709\ncpu: 409.2753042715027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 125.65368107329671,
            "unit": "us/iter",
            "extra": "iterations: 5553\ncpu: 125.6465762650812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.37706565443489,
            "unit": "us/iter",
            "extra": "iterations: 7113\ncpu: 97.36881259665375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 89.10360687961051,
            "unit": "us/iter",
            "extra": "iterations: 7326\ncpu: 89.08470147420094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.70244394781285,
            "unit": "us/iter",
            "extra": "iterations: 8278\ncpu: 84.69837533220591 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.1069560113845,
            "unit": "us/iter",
            "extra": "iterations: 8434\ncpu: 83.10240917713999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.09580021927344,
            "unit": "us/iter",
            "extra": "iterations: 8209\ncpu: 85.08827871847905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2158.737541538515,
            "unit": "us/iter",
            "extra": "iterations: 325\ncpu: 2158.6803569230883 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 726.6545868886783,
            "unit": "us/iter",
            "extra": "iterations: 961\ncpu: 726.5706992715851 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 574.230171451996,
            "unit": "us/iter",
            "extra": "iterations: 1219\ncpu: 574.2190869565175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 466.86690915162717,
            "unit": "us/iter",
            "extra": "iterations: 1497\ncpu: 466.793359385437 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 456.3945145502759,
            "unit": "us/iter",
            "extra": "iterations: 1512\ncpu: 456.3863617724838 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 445.38346692111224,
            "unit": "us/iter",
            "extra": "iterations: 1572\ncpu: 445.3536227735394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 453.08238715953314,
            "unit": "us/iter",
            "extra": "iterations: 1542\ncpu: 453.0556874189368 us\nthreads: 1"
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
          "id": "19bd9a8d90ae9f5cee7409267dafac9984212645",
          "message": "Merge pull request #163 from genogrove/refactor/decouple-io-from-interval\n\nDecouple I/O entry types from gdt::interval",
          "timestamp": "2026-03-02T21:01:48-06:00",
          "tree_id": "a1feae47dd53ca98e9c75d822c7574cd26ff7eb6",
          "url": "https://github.com/genogrove/genogrove/commit/19bd9a8d90ae9f5cee7409267dafac9984212645"
        },
        "date": 1772507155440,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 38.88117072624435,
            "unit": "us/iter",
            "extra": "iterations: 17859\ncpu: 38.88038540791758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.040214707753812,
            "unit": "us/iter",
            "extra": "iterations: 77007\ncpu: 9.03953492539639 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.091081995631549,
            "unit": "us/iter",
            "extra": "iterations: 115372\ncpu: 6.090594364317162 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.281917912651083,
            "unit": "us/iter",
            "extra": "iterations: 132091\ncpu: 5.281875888591958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.913687718039659,
            "unit": "us/iter",
            "extra": "iterations: 142176\ncpu: 4.913455878629303 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.0345672399998875,
            "unit": "us/iter",
            "extra": "iterations: 100000\ncpu: 5.034530009999996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.8352166075180865,
            "unit": "us/iter",
            "extra": "iterations: 145115\ncpu: 4.834818599042138 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 302.4562843601951,
            "unit": "us/iter",
            "extra": "iterations: 2321\ncpu: 302.4535781990523 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 49.13609138951482,
            "unit": "us/iter",
            "extra": "iterations: 14192\ncpu: 49.13375584836526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 35.46077242508459,
            "unit": "us/iter",
            "extra": "iterations: 20156\ncpu: 35.45897350664814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.386026451587067,
            "unit": "us/iter",
            "extra": "iterations: 24611\ncpu: 28.38461094632485 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 28.54043579926705,
            "unit": "us/iter",
            "extra": "iterations: 24291\ncpu: 28.53963249763286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.97003711628602,
            "unit": "us/iter",
            "extra": "iterations: 24302\ncpu: 28.969222121636065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 29.111440753182762,
            "unit": "us/iter",
            "extra": "iterations: 24111\ncpu: 29.10977628468333 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 694.8509137412204,
            "unit": "us/iter",
            "extra": "iterations: 997\ncpu: 694.7932718154469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 125.03932732464823,
            "unit": "us/iter",
            "extra": "iterations: 5603\ncpu: 125.03560895948594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 76.86614269788083,
            "unit": "us/iter",
            "extra": "iterations: 8970\ncpu: 76.85883623188391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.19482672005894,
            "unit": "us/iter",
            "extra": "iterations: 10988\ncpu: 62.19212104113571 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 66.21990756302455,
            "unit": "us/iter",
            "extra": "iterations: 10591\ncpu: 66.21561599471232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.53124870795061,
            "unit": "us/iter",
            "extra": "iterations: 11029\ncpu: 62.52467494786469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 67.88257435355129,
            "unit": "us/iter",
            "extra": "iterations: 10403\ncpu: 67.88279967317116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3993.7345485714104,
            "unit": "us/iter",
            "extra": "iterations: 175\ncpu: 3993.4816114285763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 932.7054389920365,
            "unit": "us/iter",
            "extra": "iterations: 754\ncpu: 932.6970729443011 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 640.213340347672,
            "unit": "us/iter",
            "extra": "iterations: 1093\ncpu: 640.1381482159179 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 536.231541347629,
            "unit": "us/iter",
            "extra": "iterations: 1306\ncpu: 536.2078928024494 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 507.7666719883828,
            "unit": "us/iter",
            "extra": "iterations: 1378\ncpu: 507.7346763425249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 473.5887364498688,
            "unit": "us/iter",
            "extra": "iterations: 1476\ncpu: 473.55946883468766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 454.35156975989054,
            "unit": "us/iter",
            "extra": "iterations: 1541\ncpu: 454.3144795587291 us\nthreads: 1"
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
            "value": 32.04688100371591,
            "unit": "us/iter",
            "extra": "iterations: 21799\ncpu: 32.04556672324413 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.290406283218987,
            "unit": "us/iter",
            "extra": "iterations: 61147\ncpu: 11.289213469180822 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.312252156805506,
            "unit": "us/iter",
            "extra": "iterations: 75227\ncpu: 9.311528121552088 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.894191873640102,
            "unit": "us/iter",
            "extra": "iterations: 88699\ncpu: 7.8939063800042915 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.954108601492375,
            "unit": "us/iter",
            "extra": "iterations: 88194\ncpu: 7.95355612626707 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.697108028778183,
            "unit": "us/iter",
            "extra": "iterations: 90624\ncpu: 7.696980877030366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.81277967179455,
            "unit": "us/iter",
            "extra": "iterations: 89639\ncpu: 7.812462566516792 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 181.06448171206446,
            "unit": "us/iter",
            "extra": "iterations: 3855\ncpu: 181.05819974059608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 59.126424155888415,
            "unit": "us/iter",
            "extra": "iterations: 11906\ncpu: 59.123423903913746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.77069027835394,
            "unit": "us/iter",
            "extra": "iterations: 14442\ncpu: 48.768848843650744 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.19223567029768,
            "unit": "us/iter",
            "extra": "iterations: 16888\ncpu: 41.19044481288489 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.57276712817191,
            "unit": "us/iter",
            "extra": "iterations: 16829\ncpu: 41.57098621427308 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 40.93151095576673,
            "unit": "us/iter",
            "extra": "iterations: 17023\ncpu: 40.92879098866209 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 42.16894514361413,
            "unit": "us/iter",
            "extra": "iterations: 16607\ncpu: 42.168052869271754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 408.49855005821234,
            "unit": "us/iter",
            "extra": "iterations: 1718\ncpu: 408.46853667054836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 124.50567928888934,
            "unit": "us/iter",
            "extra": "iterations: 5625\ncpu: 124.50509475555565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 96.94483095437845,
            "unit": "us/iter",
            "extra": "iterations: 7146\ncpu: 96.94050013993841 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 83.41164895005599,
            "unit": "us/iter",
            "extra": "iterations: 8429\ncpu: 83.40891363150995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.24658492159244,
            "unit": "us/iter",
            "extra": "iterations: 8290\ncpu: 84.24163522316034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 83.03535643212496,
            "unit": "us/iter",
            "extra": "iterations: 8442\ncpu: 83.02979424307041 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.40402264978258,
            "unit": "us/iter",
            "extra": "iterations: 8212\ncpu: 85.40338017535366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2164.466318885495,
            "unit": "us/iter",
            "extra": "iterations: 323\ncpu: 2164.3523839009304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 721.7227337461304,
            "unit": "us/iter",
            "extra": "iterations: 969\ncpu: 721.6983560371515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 571.9081251015215,
            "unit": "us/iter",
            "extra": "iterations: 1231\ncpu: 571.8777611697803 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 465.1987805851166,
            "unit": "us/iter",
            "extra": "iterations: 1504\ncpu: 465.1905731382951 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 459.2857057291733,
            "unit": "us/iter",
            "extra": "iterations: 1536\ncpu: 459.2581764322895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 443.09932616939534,
            "unit": "us/iter",
            "extra": "iterations: 1582\ncpu: 443.09597787610386 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 453.0535333333282,
            "unit": "us/iter",
            "extra": "iterations: 1545\ncpu: 453.03956763754104 us\nthreads: 1"
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
          "id": "ed9532fd7a319753fd3d91f77964e2d5bcca3dcb",
          "message": "Merge pull request #190 from genogrove/refactor/concepts-string-view-span\n\nConstrain template params with concepts, adopt string_view and span",
          "timestamp": "2026-03-03T09:17:17-06:00",
          "tree_id": "95437e831d168bb03d327f3fab8b0cadbed1dbd3",
          "url": "https://github.com/genogrove/genogrove/commit/ed9532fd7a319753fd3d91f77964e2d5bcca3dcb"
        },
        "date": 1772551281761,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 37.95333903637022,
            "unit": "us/iter",
            "extra": "iterations: 18119\ncpu: 37.95155659804625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.807027563105356,
            "unit": "us/iter",
            "extra": "iterations: 79708\ncpu: 8.8062704370954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.9638954303097345,
            "unit": "us/iter",
            "extra": "iterations: 117032\ncpu: 5.963117942101305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.3162229219905415,
            "unit": "us/iter",
            "extra": "iterations: 132266\ncpu: 5.315890674852191 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.892927044288613,
            "unit": "us/iter",
            "extra": "iterations: 143265\ncpu: 4.89235675147454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.906647299767053,
            "unit": "us/iter",
            "extra": "iterations: 142821\ncpu: 4.906346587686686 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.803034456542237,
            "unit": "us/iter",
            "extra": "iterations: 147316\ncpu: 4.802553592277825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 301.2596761168331,
            "unit": "us/iter",
            "extra": "iterations: 2328\ncpu: 301.24062371134016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 48.60284081122313,
            "unit": "us/iter",
            "extra": "iterations: 14398\ncpu: 48.59817356577311 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 34.36714413440912,
            "unit": "us/iter",
            "extra": "iterations: 20356\ncpu: 34.3622812929849 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.21678253680207,
            "unit": "us/iter",
            "extra": "iterations: 24795\ncpu: 28.215528654970758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 28.691404260630854,
            "unit": "us/iter",
            "extra": "iterations: 24034\ncpu: 28.68705238412244 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.65679438416911,
            "unit": "us/iter",
            "extra": "iterations: 24609\ncpu: 28.654214271201628 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 30.41474785914079,
            "unit": "us/iter",
            "extra": "iterations: 22888\ncpu: 30.409175375742695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 695.9147128712981,
            "unit": "us/iter",
            "extra": "iterations: 1010\ncpu: 695.8871643564361 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.16808790054452,
            "unit": "us/iter",
            "extra": "iterations: 5711\ncpu: 122.16439485204026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 76.38712291666806,
            "unit": "us/iter",
            "extra": "iterations: 9120\ncpu: 76.37463355263152 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.86874654867523,
            "unit": "us/iter",
            "extra": "iterations: 11300\ncpu: 61.865412743362874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.18299201855989,
            "unit": "us/iter",
            "extra": "iterations: 10775\ncpu: 64.17480649651974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 63.12582746072498,
            "unit": "us/iter",
            "extra": "iterations: 11267\ncpu: 63.121725570249204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 67.15029598086167,
            "unit": "us/iter",
            "extra": "iterations: 10450\ncpu: 67.14596095693788 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3999.6493333333824,
            "unit": "us/iter",
            "extra": "iterations: 174\ncpu: 3999.314965517229 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 962.0052048192352,
            "unit": "us/iter",
            "extra": "iterations: 664\ncpu: 961.945447289157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 625.0307786738555,
            "unit": "us/iter",
            "extra": "iterations: 1116\ncpu: 624.9402392473093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 532.624343963559,
            "unit": "us/iter",
            "extra": "iterations: 1317\ncpu: 532.5973113135913 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 510.4744020172966,
            "unit": "us/iter",
            "extra": "iterations: 1388\ncpu: 509.6748940922179 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 470.9365649831828,
            "unit": "us/iter",
            "extra": "iterations: 1485\ncpu: 470.91062020201815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 452.2147392144226,
            "unit": "us/iter",
            "extra": "iterations: 1553\ncpu: 452.1538061815833 us\nthreads: 1"
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
            "value": 31.856999354185366,
            "unit": "us/iter",
            "extra": "iterations: 21678\ncpu: 31.8549697850355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.236194991717072,
            "unit": "us/iter",
            "extra": "iterations: 62177\ncpu: 11.235147273107401 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.267519763713965,
            "unit": "us/iter",
            "extra": "iterations: 75163\ncpu: 9.266840626372035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.818487951267346,
            "unit": "us/iter",
            "extra": "iterations: 89304\ncpu: 7.818073871271159 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.853568716481522,
            "unit": "us/iter",
            "extra": "iterations: 88756\ncpu: 7.852926404975433 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.71075919263552,
            "unit": "us/iter",
            "extra": "iterations: 92003\ncpu: 7.710315174505198 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.771676985598615,
            "unit": "us/iter",
            "extra": "iterations: 90061\ncpu: 7.770591465784352 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 185.21983813230221,
            "unit": "us/iter",
            "extra": "iterations: 3855\ncpu: 185.20544980544773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 58.74318378151396,
            "unit": "us/iter",
            "extra": "iterations: 11900\ncpu: 58.730592857142575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.42104457538975,
            "unit": "us/iter",
            "extra": "iterations: 14425\ncpu: 48.4168188561524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.01845509438501,
            "unit": "us/iter",
            "extra": "iterations: 17058\ncpu: 41.01260651893561 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.331078781761754,
            "unit": "us/iter",
            "extra": "iterations: 16844\ncpu: 41.326969544051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 40.64414830730079,
            "unit": "us/iter",
            "extra": "iterations: 17221\ncpu: 40.63706271412785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 41.62103962398971,
            "unit": "us/iter",
            "extra": "iterations: 16808\ncpu: 41.61713594716765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 418.7163887257862,
            "unit": "us/iter",
            "extra": "iterations: 1703\ncpu: 418.68186611861563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 124.3417093727735,
            "unit": "us/iter",
            "extra": "iterations: 5612\ncpu: 124.33808695652233 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.09686775590367,
            "unit": "us/iter",
            "extra": "iterations: 7161\ncpu: 97.08746767211268 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 82.88846713419406,
            "unit": "us/iter",
            "extra": "iterations: 8413\ncpu: 82.88410983002458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 83.71987728522197,
            "unit": "us/iter",
            "extra": "iterations: 8369\ncpu: 83.71085004182096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 82.80186133365041,
            "unit": "us/iter",
            "extra": "iterations: 8488\ncpu: 82.79582975966096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 85.25278541188376,
            "unit": "us/iter",
            "extra": "iterations: 8267\ncpu: 85.25031813233342 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2161.4706646153954,
            "unit": "us/iter",
            "extra": "iterations: 325\ncpu: 2161.21842153847 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 727.5526687434955,
            "unit": "us/iter",
            "extra": "iterations: 963\ncpu: 727.5025773624116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 583.4346647399244,
            "unit": "us/iter",
            "extra": "iterations: 1211\ncpu: 583.3433303055318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 465.0166868350712,
            "unit": "us/iter",
            "extra": "iterations: 1504\ncpu: 464.9798417553181 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 454.6782839505957,
            "unit": "us/iter",
            "extra": "iterations: 1539\ncpu: 454.63724171539866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 441.0066664565032,
            "unit": "us/iter",
            "extra": "iterations: 1586\ncpu: 440.9718524590142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 450.78787435568063,
            "unit": "us/iter",
            "extra": "iterations: 1552\ncpu: 450.7419748711331 us\nthreads: 1"
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
          "id": "72113afcd1497de25e28edcc29953733e4855652",
          "message": "Merge pull request #192 from genogrove/refactor/style-cleanups\n\nMinor C++20 style cleanups",
          "timestamp": "2026-03-03T22:31:17-06:00",
          "tree_id": "17ea99bb08e1774d2faff79546537bc73e4aad5b",
          "url": "https://github.com/genogrove/genogrove/commit/72113afcd1497de25e28edcc29953733e4855652"
        },
        "date": 1772598897630,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 37.969471494956956,
            "unit": "us/iter",
            "extra": "iterations: 17646\ncpu: 37.96539272356342 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.822479656658812,
            "unit": "us/iter",
            "extra": "iterations: 79338\ncpu: 8.82181500668028 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.942097971137522,
            "unit": "us/iter",
            "extra": "iterations: 117800\ncpu: 5.941730551782682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.243163692344438,
            "unit": "us/iter",
            "extra": "iterations: 133812\ncpu: 5.242273914148209 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.897890340077445,
            "unit": "us/iter",
            "extra": "iterations: 144173\ncpu: 4.8973596026995345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.036771778387842,
            "unit": "us/iter",
            "extra": "iterations: 138440\ncpu: 5.036178438312622 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.782117823350236,
            "unit": "us/iter",
            "extra": "iterations: 146482\ncpu: 4.78198394341967 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 298.7835206470796,
            "unit": "us/iter",
            "extra": "iterations: 2349\ncpu: 298.75044742443606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 48.39715955897662,
            "unit": "us/iter",
            "extra": "iterations: 14421\ncpu: 48.392364052423524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 34.016150425177926,
            "unit": "us/iter",
            "extra": "iterations: 20462\ncpu: 34.01375276121587 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.160711704130144,
            "unit": "us/iter",
            "extra": "iterations: 24957\ncpu: 28.159076291220856 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 29.242375331033205,
            "unit": "us/iter",
            "extra": "iterations: 24922\ncpu: 29.241016009951075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.01607918314619,
            "unit": "us/iter",
            "extra": "iterations: 24778\ncpu: 28.0144576236984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.991143436349592,
            "unit": "us/iter",
            "extra": "iterations: 24171\ncpu: 28.988058706714614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 689.3590127827131,
            "unit": "us/iter",
            "extra": "iterations: 1017\ncpu: 689.2959616519158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.59272393177461,
            "unit": "us/iter",
            "extra": "iterations: 5687\ncpu: 123.57401758396344 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 76.19853269273278,
            "unit": "us/iter",
            "extra": "iterations: 9054\ncpu: 76.19221217141593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.19049274448022,
            "unit": "us/iter",
            "extra": "iterations: 11095\ncpu: 62.1781195132943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.61385681229144,
            "unit": "us/iter",
            "extra": "iterations: 10804\ncpu: 64.60891790077729 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 62.28424986671361,
            "unit": "us/iter",
            "extra": "iterations: 11254\ncpu: 62.27750079971556 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 67.71532066485297,
            "unit": "us/iter",
            "extra": "iterations: 10288\ncpu: 67.7036794323483 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3988.1862954545195,
            "unit": "us/iter",
            "extra": "iterations: 176\ncpu: 3987.8344715909207 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 923.0944580052608,
            "unit": "us/iter",
            "extra": "iterations: 762\ncpu: 922.9189895013101 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 630.6817666666785,
            "unit": "us/iter",
            "extra": "iterations: 1110\ncpu: 630.6089108108118 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 527.7711240601358,
            "unit": "us/iter",
            "extra": "iterations: 1330\ncpu: 527.7066225563926 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 500.0914590000036,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 500.03526500000106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 469.0203100671171,
            "unit": "us/iter",
            "extra": "iterations: 1490\ncpu: 468.9869993288599 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.45890557376566,
            "unit": "us/iter",
            "extra": "iterations: 1525\ncpu: 450.43088655737654 us\nthreads: 1"
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
            "value": 31.609078890392574,
            "unit": "us/iter",
            "extra": "iterations: 22170\ncpu: 31.605066035182684 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.188736316898648,
            "unit": "us/iter",
            "extra": "iterations: 62632\ncpu: 11.18782097011111 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.97038392927848,
            "unit": "us/iter",
            "extra": "iterations: 75790\ncpu: 9.969887874389757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.833779324743797,
            "unit": "us/iter",
            "extra": "iterations: 89566\ncpu: 7.832662003438811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.794684675845794,
            "unit": "us/iter",
            "extra": "iterations: 89695\ncpu: 7.79414738837172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.650745993721203,
            "unit": "us/iter",
            "extra": "iterations: 91419\ncpu: 7.64999772476183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.752965825604414,
            "unit": "us/iter",
            "extra": "iterations: 90243\ncpu: 7.752456711323884 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 179.30100950179715,
            "unit": "us/iter",
            "extra": "iterations: 3894\ncpu: 179.29539856188973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 58.57868754697995,
            "unit": "us/iter",
            "extra": "iterations: 11973\ncpu: 58.570966090369815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 48.5708739716561,
            "unit": "us/iter",
            "extra": "iterations: 14465\ncpu: 48.56831946076736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 40.960408794692015,
            "unit": "us/iter",
            "extra": "iterations: 17033\ncpu: 40.95717319321305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.54715622763025,
            "unit": "us/iter",
            "extra": "iterations: 16764\ncpu: 41.54180798138872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 40.705089570479956,
            "unit": "us/iter",
            "extra": "iterations: 17182\ncpu: 40.70242532883232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 41.777656182731114,
            "unit": "us/iter",
            "extra": "iterations: 16724\ncpu: 41.767845192537315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 406.6155488157115,
            "unit": "us/iter",
            "extra": "iterations: 1731\ncpu: 406.59571461582993 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 124.10652557726678,
            "unit": "us/iter",
            "extra": "iterations: 5630\ncpu: 124.08979058614634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 97.0923808196249,
            "unit": "us/iter",
            "extra": "iterations: 7174\ncpu: 97.08495929746351 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 83.05920794889775,
            "unit": "us/iter",
            "extra": "iterations: 8454\ncpu: 83.04984326945826 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 83.78490032463439,
            "unit": "us/iter",
            "extra": "iterations: 8317\ncpu: 83.77687735962509 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 82.67696524317952,
            "unit": "us/iter",
            "extra": "iterations: 8430\ncpu: 82.67469134045142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 84.6717366315011,
            "unit": "us/iter",
            "extra": "iterations: 8247\ncpu: 84.65787522735529 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2153.995092307661,
            "unit": "us/iter",
            "extra": "iterations: 325\ncpu: 2153.8368615384666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 722.5050588842845,
            "unit": "us/iter",
            "extra": "iterations: 968\ncpu: 722.3875237603332 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 569.2467778681826,
            "unit": "us/iter",
            "extra": "iterations: 1229\ncpu: 569.2108437754256 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 461.9332846763622,
            "unit": "us/iter",
            "extra": "iterations: 1514\ncpu: 461.8752628797901 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 452.09319677419734,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 452.06498322580694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 439.80596173148865,
            "unit": "us/iter",
            "extra": "iterations: 1594\ncpu: 439.72969385194403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 449.3356602564037,
            "unit": "us/iter",
            "extra": "iterations: 1560\ncpu: 449.3168275641023 us\nthreads: 1"
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
          "id": "9b06ec4911abebff281f624128a494f598ab4379",
          "message": "Merge pull request #191 from genogrove/refactor/ranges-and-contains\n\nReplace legacy algorithms with std::ranges and map::contains()",
          "timestamp": "2026-03-03T22:44:49-06:00",
          "tree_id": "6e1e4922bedfef487ac4cb248b542b1f37696b3e",
          "url": "https://github.com/genogrove/genogrove/commit/9b06ec4911abebff281f624128a494f598ab4379"
        },
        "date": 1772599721639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.78525818731549,
            "unit": "us/iter",
            "extra": "iterations: 17863\ncpu: 39.78313457985781 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.432059596218465,
            "unit": "us/iter",
            "extra": "iterations: 74149\ncpu: 9.428911246274394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.427951200798647,
            "unit": "us/iter",
            "extra": "iterations: 108178\ncpu: 6.425855913401987 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.652490119437125,
            "unit": "us/iter",
            "extra": "iterations: 124082\ncpu: 5.651814050386034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.271414747413879,
            "unit": "us/iter",
            "extra": "iterations: 132430\ncpu: 5.2712584686249375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.238788733764449,
            "unit": "us/iter",
            "extra": "iterations: 133656\ncpu: 5.237863807086847 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 5.108398497915939,
            "unit": "us/iter",
            "extra": "iterations: 139140\ncpu: 5.10785700014374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 307.57474671915764,
            "unit": "us/iter",
            "extra": "iterations: 2286\ncpu: 307.51931146106745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 51.85040556719483,
            "unit": "us/iter",
            "extra": "iterations: 13364\ncpu: 51.84411800359174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 36.546317465289675,
            "unit": "us/iter",
            "extra": "iterations: 19158\ncpu: 36.54173520200439 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 31.345134021076987,
            "unit": "us/iter",
            "extra": "iterations: 22489\ncpu: 31.340978745164346 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.722275963739808,
            "unit": "us/iter",
            "extra": "iterations: 22724\ncpu: 30.719493002992394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.29857797670887,
            "unit": "us/iter",
            "extra": "iterations: 24129\ncpu: 29.296162460110306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.40401993233635,
            "unit": "us/iter",
            "extra": "iterations: 24533\ncpu: 28.40116239351078 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 706.995850100617,
            "unit": "us/iter",
            "extra": "iterations: 994\ncpu: 706.9331428571433 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 131.55173934272068,
            "unit": "us/iter",
            "extra": "iterations: 5325\ncpu: 131.54311154929547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 79.79419708615195,
            "unit": "us/iter",
            "extra": "iterations: 8717\ncpu: 79.78496822301257 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 68.35384042870062,
            "unit": "us/iter",
            "extra": "iterations: 10077\ncpu: 68.34920730376095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 69.72953680357979,
            "unit": "us/iter",
            "extra": "iterations: 9836\ncpu: 69.71946726311486 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 65.51848911316634,
            "unit": "us/iter",
            "extra": "iterations: 10701\ncpu: 65.51336445192067 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 69.52594187661224,
            "unit": "us/iter",
            "extra": "iterations: 10082\ncpu: 69.52284745090249 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4054.6331502891217,
            "unit": "us/iter",
            "extra": "iterations: 173\ncpu: 4053.89259537573 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 957.3689154160842,
            "unit": "us/iter",
            "extra": "iterations: 733\ncpu: 957.3439658935889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 638.3701916058342,
            "unit": "us/iter",
            "extra": "iterations: 1096\ncpu: 638.2975939781 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 528.0398407547156,
            "unit": "us/iter",
            "extra": "iterations: 1325\ncpu: 527.9881456603754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 503.19021767241725,
            "unit": "us/iter",
            "extra": "iterations: 1392\ncpu: 503.13720186781774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 473.06144121623333,
            "unit": "us/iter",
            "extra": "iterations: 1480\ncpu: 473.01611689189167 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 461.37388118812106,
            "unit": "us/iter",
            "extra": "iterations: 1515\ncpu: 461.3294270627074 us\nthreads: 1"
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
            "value": 32.574123867636146,
            "unit": "us/iter",
            "extra": "iterations: 21305\ncpu: 32.57199253696317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.699259737874492,
            "unit": "us/iter",
            "extra": "iterations: 59895\ncpu: 11.69769329660238 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.597464993466863,
            "unit": "us/iter",
            "extra": "iterations: 73472\ncpu: 9.596470573824076 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.996083993878176,
            "unit": "us/iter",
            "extra": "iterations: 87554\ncpu: 7.9954181990543045 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.849840664050263,
            "unit": "us/iter",
            "extra": "iterations: 88668\ncpu: 7.84948042134703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.3755158089665995,
            "unit": "us/iter",
            "extra": "iterations: 95041\ncpu: 7.374775907240024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.189804056639999,
            "unit": "us/iter",
            "extra": "iterations: 96681\ncpu: 7.18922099481799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 182.54362382445305,
            "unit": "us/iter",
            "extra": "iterations: 3828\ncpu: 182.5293121734595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 61.06917779917785,
            "unit": "us/iter",
            "extra": "iterations: 11423\ncpu: 61.06247456885205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 49.91180060979829,
            "unit": "us/iter",
            "extra": "iterations: 14103\ncpu: 49.908325533574285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 42.27168805952017,
            "unit": "us/iter",
            "extra": "iterations: 16532\ncpu: 42.26740267360282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.79512538299739,
            "unit": "us/iter",
            "extra": "iterations: 16645\ncpu: 41.78966362270939 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 39.35029703915929,
            "unit": "us/iter",
            "extra": "iterations: 17799\ncpu: 39.34880071914145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 38.40923537818843,
            "unit": "us/iter",
            "extra": "iterations: 18192\ncpu: 38.407911829375614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 410.9397247058703,
            "unit": "us/iter",
            "extra": "iterations: 1700\ncpu: 410.9014529411785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 128.9942331913321,
            "unit": "us/iter",
            "extra": "iterations: 5399\ncpu: 128.98887053157944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 100.85216714906058,
            "unit": "us/iter",
            "extra": "iterations: 6910\ncpu: 100.84792098408109 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 85.88608660451509,
            "unit": "us/iter",
            "extra": "iterations: 8152\ncpu: 85.87837046123609 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.75398885928776,
            "unit": "us/iter",
            "extra": "iterations: 8258\ncpu: 84.7470635747157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 79.96197657410401,
            "unit": "us/iter",
            "extra": "iterations: 8751\ncpu: 79.95193475031384 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 77.93538520921867,
            "unit": "us/iter",
            "extra": "iterations: 8938\ncpu: 77.9331988140523 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2178.627763975125,
            "unit": "us/iter",
            "extra": "iterations: 322\ncpu: 2178.49334161492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 745.630392553211,
            "unit": "us/iter",
            "extra": "iterations: 940\ncpu: 745.5252521276649 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 584.987609715229,
            "unit": "us/iter",
            "extra": "iterations: 1194\ncpu: 584.9084547738671 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 475.6434769335065,
            "unit": "us/iter",
            "extra": "iterations: 1474\ncpu: 475.5804803256426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 456.0810364820782,
            "unit": "us/iter",
            "extra": "iterations: 1535\ncpu: 456.05021693810943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 426.9113855054751,
            "unit": "us/iter",
            "extra": "iterations: 1642\ncpu: 426.8788331303275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 414.9578195845671,
            "unit": "us/iter",
            "extra": "iterations: 1685\ncpu: 414.9226089020792 us\nthreads: 1"
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
          "id": "8fa50b276d2061d9103be49b215550f1e278c5be",
          "message": "Merge pull request #193 from genogrove/refactor/operators-noexcept-deadcode\n\nRemove redundant operator!=, add noexcept, clean up dead code",
          "timestamp": "2026-03-03T22:45:56-06:00",
          "tree_id": "fb42c84584253178b1d7beae7cf2794ae86f9020",
          "url": "https://github.com/genogrove/genogrove/commit/8fa50b276d2061d9103be49b215550f1e278c5be"
        },
        "date": 1772599795534,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 36.318178775338765,
            "unit": "us/iter",
            "extra": "iterations: 19091\ncpu: 36.31143544078361 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.087830667191222,
            "unit": "us/iter",
            "extra": "iterations: 86392\ncpu: 8.086096941846469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.1852837346045515,
            "unit": "us/iter",
            "extra": "iterations: 132994\ncpu: 5.18502943741823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.55385852436691,
            "unit": "us/iter",
            "extra": "iterations: 154903\ncpu: 4.553322750366358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.192396916754628,
            "unit": "us/iter",
            "extra": "iterations: 166448\ncpu: 4.1922080890127855 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.197717088395362,
            "unit": "us/iter",
            "extra": "iterations: 166932\ncpu: 4.19753515802842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.9757356087940163,
            "unit": "us/iter",
            "extra": "iterations: 175437\ncpu: 3.975483159196751 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 313.0737888392814,
            "unit": "us/iter",
            "extra": "iterations: 2240\ncpu: 313.042395982143 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.138503084653166,
            "unit": "us/iter",
            "extra": "iterations: 15723\ncpu: 44.136247662659706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.60306316278569,
            "unit": "us/iter",
            "extra": "iterations: 23669\ncpu: 29.60182589040514 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.834193434668713,
            "unit": "us/iter",
            "extra": "iterations: 26381\ncpu: 24.833373715931927 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 24.002442288332784,
            "unit": "us/iter",
            "extra": "iterations: 28807\ncpu: 24.000692644148973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 22.954723787452274,
            "unit": "us/iter",
            "extra": "iterations: 30205\ncpu: 22.954368912431683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.92219880944902,
            "unit": "us/iter",
            "extra": "iterations: 32086\ncpu: 21.920201489746276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 686.7827411764772,
            "unit": "us/iter",
            "extra": "iterations: 1020\ncpu: 686.7373441176471 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 134.42273890489614,
            "unit": "us/iter",
            "extra": "iterations: 5205\ncpu: 134.41903804034547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 67.57597043222117,
            "unit": "us/iter",
            "extra": "iterations: 10180\ncpu: 67.57167387033384 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 57.10693692959426,
            "unit": "us/iter",
            "extra": "iterations: 12272\ncpu: 57.106363428943844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 52.44167163829407,
            "unit": "us/iter",
            "extra": "iterations: 12806\ncpu: 52.437209198813164 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 54.01319659999899,
            "unit": "us/iter",
            "extra": "iterations: 10000\ncpu: 54.01115680000003 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 58.65849530358927,
            "unit": "us/iter",
            "extra": "iterations: 11924\ncpu: 58.654746645421156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4575.110279220821,
            "unit": "us/iter",
            "extra": "iterations: 154\ncpu: 4574.6064610389585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 930.2211866666615,
            "unit": "us/iter",
            "extra": "iterations: 750\ncpu: 930.1834306666686 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 623.9616078431202,
            "unit": "us/iter",
            "extra": "iterations: 1122\ncpu: 623.9003850267407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 521.0031858735852,
            "unit": "us/iter",
            "extra": "iterations: 1345\ncpu: 520.983359107807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 497.67670148201194,
            "unit": "us/iter",
            "extra": "iterations: 1417\ncpu: 497.6320324629497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 466.0340364126694,
            "unit": "us/iter",
            "extra": "iterations: 1483\ncpu: 466.0197498314214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 454.3771644993491,
            "unit": "us/iter",
            "extra": "iterations: 1538\ncpu: 454.35680624187137 us\nthreads: 1"
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
            "value": 30.443847250152725,
            "unit": "us/iter",
            "extra": "iterations: 22874\ncpu: 30.44112442073965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.783847108488532,
            "unit": "us/iter",
            "extra": "iterations: 70828\ncpu: 9.783131925227288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.610029515413788,
            "unit": "us/iter",
            "extra": "iterations: 92223\ncpu: 7.6097387744922695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.028493066733317,
            "unit": "us/iter",
            "extra": "iterations: 116179\ncpu: 6.028284810507902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 5.9689439933819095,
            "unit": "us/iter",
            "extra": "iterations: 117254\ncpu: 5.968641086871251 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 5.459471817699869,
            "unit": "us/iter",
            "extra": "iterations: 128272\ncpu: 5.459079557502821 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.304987059767187,
            "unit": "us/iter",
            "extra": "iterations: 132146\ncpu: 5.304759130053124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 174.6164702053097,
            "unit": "us/iter",
            "extra": "iterations: 3994\ncpu: 174.61565948923433 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 50.23903277981392,
            "unit": "us/iter",
            "extra": "iterations: 13911\ncpu: 50.2374998202861 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 39.28747690056951,
            "unit": "us/iter",
            "extra": "iterations: 17771\ncpu: 39.286954645208624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 32.204453114179174,
            "unit": "us/iter",
            "extra": "iterations: 21659\ncpu: 32.20262399002728 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 31.54273989978818,
            "unit": "us/iter",
            "extra": "iterations: 22153\ncpu: 31.54267241457112 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 29.303982572266975,
            "unit": "us/iter",
            "extra": "iterations: 23870\ncpu: 29.30266284038541 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 28.75695163543683,
            "unit": "us/iter",
            "extra": "iterations: 24336\ncpu: 28.75505411735699 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 384.70984920197725,
            "unit": "us/iter",
            "extra": "iterations: 1817\ncpu: 384.69250963126063 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 108.29500696055885,
            "unit": "us/iter",
            "extra": "iterations: 6465\ncpu: 108.29393457076523 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 81.01745093945753,
            "unit": "us/iter",
            "extra": "iterations: 8622\ncpu: 81.01471839480404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 65.31748291910908,
            "unit": "us/iter",
            "extra": "iterations: 10743\ncpu: 65.31588448291943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 64.67850855973262,
            "unit": "us/iter",
            "extra": "iterations: 10748\ncpu: 64.67305331224453 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 60.02385098882305,
            "unit": "us/iter",
            "extra": "iterations: 11630\ncpu: 60.020872828890425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 58.405172301527735,
            "unit": "us/iter",
            "extra": "iterations: 11979\ncpu: 58.40399799649374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2150.8547107692684,
            "unit": "us/iter",
            "extra": "iterations: 325\ncpu: 2150.737495384629 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 610.5354255874673,
            "unit": "us/iter",
            "extra": "iterations: 1149\ncpu: 610.4938694516972 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 457.37786723348046,
            "unit": "us/iter",
            "extra": "iterations: 1529\ncpu: 457.3476442119041 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 362.68056240289985,
            "unit": "us/iter",
            "extra": "iterations: 1931\ncpu: 362.6711796996373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 348.20407676868314,
            "unit": "us/iter",
            "extra": "iterations: 1993\ncpu: 348.18157200200585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 320.96227630375097,
            "unit": "us/iter",
            "extra": "iterations: 2186\ncpu: 320.9449107959757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 310.9852890763827,
            "unit": "us/iter",
            "extra": "iterations: 2252\ncpu: 310.9700848134998 us\nthreads: 1"
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
          "id": "dc62c9fbad44583411f6ec1f7398313eadaf8b69",
          "message": "Merge pull request #194 from genogrove/refactor/std-format\n\nAdopt std::format, drop GCC 12 from CI",
          "timestamp": "2026-03-03T23:06:02-06:00",
          "tree_id": "0821fd9c4eb85625f22f78424420005da59f6dfb",
          "url": "https://github.com/genogrove/genogrove/commit/dc62c9fbad44583411f6ec1f7398313eadaf8b69"
        },
        "date": 1772600966528,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 36.433935356198184,
            "unit": "us/iter",
            "extra": "iterations: 18950\ncpu: 36.43386290237467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.788516594588609,
            "unit": "us/iter",
            "extra": "iterations: 80237\ncpu: 8.787854194448947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.9551757270250825,
            "unit": "us/iter",
            "extra": "iterations: 116846\ncpu: 5.954829784502681 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.238860255951097,
            "unit": "us/iter",
            "extra": "iterations: 134088\ncpu: 5.238435482668099 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.887394791412032,
            "unit": "us/iter",
            "extra": "iterations: 143225\ncpu: 4.887249698027578 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.827031863368258,
            "unit": "us/iter",
            "extra": "iterations: 145559\ncpu: 4.826572839879364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.687613345520917,
            "unit": "us/iter",
            "extra": "iterations: 148784\ncpu: 4.687570478008387 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 283.110242944782,
            "unit": "us/iter",
            "extra": "iterations: 2445\ncpu: 283.09827893660525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 47.824057898798934,
            "unit": "us/iter",
            "extra": "iterations: 14249\ncpu: 47.82078019510137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 33.68103149152936,
            "unit": "us/iter",
            "extra": "iterations: 20831\ncpu: 33.67913326292539 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 28.87919383096845,
            "unit": "us/iter",
            "extra": "iterations: 24315\ncpu: 28.877286901089875 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 28.63220078644403,
            "unit": "us/iter",
            "extra": "iterations: 24668\ncpu: 28.629482690124835 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 27.181344883468434,
            "unit": "us/iter",
            "extra": "iterations: 25916\ncpu: 27.179576863713518 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 27.036037924528312,
            "unit": "us/iter",
            "extra": "iterations: 26500\ncpu: 27.034153358490563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 652.2329795918115,
            "unit": "us/iter",
            "extra": "iterations: 1078\ncpu: 652.2195918367338 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 121.36303031346631,
            "unit": "us/iter",
            "extra": "iterations: 5806\ncpu: 121.35483758181196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 73.74028214625852,
            "unit": "us/iter",
            "extra": "iterations: 9449\ncpu: 73.73728225209014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 63.472839836660825,
            "unit": "us/iter",
            "extra": "iterations: 11020\ncpu: 63.46981950998201 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.152808490833614,
            "unit": "us/iter",
            "extra": "iterations: 10741\ncpu: 63.1500436644635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.71940010533827,
            "unit": "us/iter",
            "extra": "iterations: 11392\ncpu: 59.718283532303246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 64.00549876362354,
            "unit": "us/iter",
            "extra": "iterations: 10919\ncpu: 63.99804524223834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3790.300163043424,
            "unit": "us/iter",
            "extra": "iterations: 184\ncpu: 3790.268521739123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.9199760101221,
            "unit": "us/iter",
            "extra": "iterations: 792\ncpu: 895.8441477272729 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 590.9418391193874,
            "unit": "us/iter",
            "extra": "iterations: 1181\ncpu: 590.9191541066895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 486.30650347223855,
            "unit": "us/iter",
            "extra": "iterations: 1440\ncpu: 486.2838229166666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 464.3770079628356,
            "unit": "us/iter",
            "extra": "iterations: 1507\ncpu: 464.36539548772515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 437.31921609634236,
            "unit": "us/iter",
            "extra": "iterations: 1578\ncpu: 437.287808618506 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 424.6369684274537,
            "unit": "us/iter",
            "extra": "iterations: 1647\ncpu: 424.6069447480266 us\nthreads: 1"
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
            "value": 30.11241719005567,
            "unit": "us/iter",
            "extra": "iterations: 23246\ncpu: 30.110291577045487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 10.84575974447771,
            "unit": "us/iter",
            "extra": "iterations: 64652\ncpu: 10.845301846810612 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 8.795001066311803,
            "unit": "us/iter",
            "extra": "iterations: 79714\ncpu: 8.794178074114972 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.368377738164331,
            "unit": "us/iter",
            "extra": "iterations: 95365\ncpu: 7.36825474754891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.331585733181805,
            "unit": "us/iter",
            "extra": "iterations: 96013\ncpu: 7.331119525480894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 6.841941434348356,
            "unit": "us/iter",
            "extra": "iterations: 102876\ncpu: 6.841581962751301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 6.6146370011245095,
            "unit": "us/iter",
            "extra": "iterations: 105813\ncpu: 6.61457111130013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 168.86156557575305,
            "unit": "us/iter",
            "extra": "iterations: 4125\ncpu: 168.8529835151509 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 56.52388897873341,
            "unit": "us/iter",
            "extra": "iterations: 12367\ncpu: 56.522557855583266 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 45.8099490913866,
            "unit": "us/iter",
            "extra": "iterations: 15243\ncpu: 45.8054802204291 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 39.060461620232736,
            "unit": "us/iter",
            "extra": "iterations: 17874\ncpu: 39.05987182499715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 38.4777396963122,
            "unit": "us/iter",
            "extra": "iterations: 17979\ncpu: 38.47491973969599 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 36.244821791418495,
            "unit": "us/iter",
            "extra": "iterations: 19292\ncpu: 36.24307832262086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 35.68693898047159,
            "unit": "us/iter",
            "extra": "iterations: 19715\ncpu: 35.68469596753747 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 380.2272838569928,
            "unit": "us/iter",
            "extra": "iterations: 1846\ncpu: 380.1933407367284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 119.2398677573275,
            "unit": "us/iter",
            "extra": "iterations: 5868\ncpu: 119.232993524199 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 92.5305175799399,
            "unit": "us/iter",
            "extra": "iterations: 7537\ncpu: 92.52547830701891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 79.0315540725521,
            "unit": "us/iter",
            "extra": "iterations: 8766\ncpu: 79.0257623773668 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 78.2850495060475,
            "unit": "us/iter",
            "extra": "iterations: 9009\ncpu: 78.2837908757916 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 73.53821807672358,
            "unit": "us/iter",
            "extra": "iterations: 9515\ncpu: 73.53426537046809 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 72.8711120204574,
            "unit": "us/iter",
            "extra": "iterations: 9775\ncpu: 72.86139703324817 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2015.972573487078,
            "unit": "us/iter",
            "extra": "iterations: 347\ncpu: 2015.9122074927923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 689.34697832516,
            "unit": "us/iter",
            "extra": "iterations: 1015\ncpu: 689.2944679802928 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 538.50729800307,
            "unit": "us/iter",
            "extra": "iterations: 1302\ncpu: 538.4971213517682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 437.3240991839415,
            "unit": "us/iter",
            "extra": "iterations: 1593\ncpu: 437.2698637790336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 421.1137441300609,
            "unit": "us/iter",
            "extra": "iterations: 1661\ncpu: 421.0929584587592 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 390.8559179864301,
            "unit": "us/iter",
            "extra": "iterations: 1768\ncpu: 390.8267279411774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 382.0414014161516,
            "unit": "us/iter",
            "extra": "iterations: 1836\ncpu: 382.02118028322565 us\nthreads: 1"
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
          "id": "abcf05825e6f9983ce7a90b96c5e90e21f043a83",
          "message": "Merge pull request #195 from genogrove/refactor/remove-type-erasure\n\nRemove legacy type erasure code (any_type, type_registry)",
          "timestamp": "2026-03-03T23:22:43-06:00",
          "tree_id": "a7233f0cb1f638aeecd0f3ee13749f6af6c72f2a",
          "url": "https://github.com/genogrove/genogrove/commit/abcf05825e6f9983ce7a90b96c5e90e21f043a83"
        },
        "date": 1772601995270,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.236312221976256,
            "unit": "us/iter",
            "extra": "iterations: 17984\ncpu: 39.234201234430614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.511900484768272,
            "unit": "us/iter",
            "extra": "iterations: 72612\ncpu: 9.511516787858758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.463356451048653,
            "unit": "us/iter",
            "extra": "iterations: 108618\ncpu: 6.462809948627299 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.682907939565076,
            "unit": "us/iter",
            "extra": "iterations: 123571\ncpu: 5.681325254307239 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.276610066304998,
            "unit": "us/iter",
            "extra": "iterations: 132720\ncpu: 5.275833167570824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.212949771038218,
            "unit": "us/iter",
            "extra": "iterations: 133210\ncpu: 5.212581195105475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 5.04543871805053,
            "unit": "us/iter",
            "extra": "iterations: 138695\ncpu: 5.0447275821046205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 312.3099542425619,
            "unit": "us/iter",
            "extra": "iterations: 2251\ncpu: 312.2682905375388 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 51.76949094971967,
            "unit": "us/iter",
            "extra": "iterations: 13425\ncpu: 51.764065996275555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 36.353101664746994,
            "unit": "us/iter",
            "extra": "iterations: 19102\ncpu: 36.34897780337139 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 31.12143580299407,
            "unit": "us/iter",
            "extra": "iterations: 21177\ncpu: 31.118827548755746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 31.019536651503834,
            "unit": "us/iter",
            "extra": "iterations: 22864\ncpu: 31.016818929321165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.262445194632086,
            "unit": "us/iter",
            "extra": "iterations: 23994\ncpu: 29.25936167375178 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.572447352228597,
            "unit": "us/iter",
            "extra": "iterations: 24379\ncpu: 28.568587349768247 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 714.7582591463486,
            "unit": "us/iter",
            "extra": "iterations: 984\ncpu: 714.6640010162597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 132.24661154655115,
            "unit": "us/iter",
            "extra": "iterations: 5231\ncpu: 132.24195622251955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 79.47943258618791,
            "unit": "us/iter",
            "extra": "iterations: 8789\ncpu: 79.47629354875414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 69.5627172759151,
            "unit": "us/iter",
            "extra": "iterations: 9985\ncpu: 69.55707761642464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 70.76929335905596,
            "unit": "us/iter",
            "extra": "iterations: 9848\ncpu: 70.76333803818048 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 65.86174120486409,
            "unit": "us/iter",
            "extra": "iterations: 10773\ncpu: 65.85401605866518 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 70.25088070913344,
            "unit": "us/iter",
            "extra": "iterations: 9984\ncpu: 70.24845022035278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4091.0266959064343,
            "unit": "us/iter",
            "extra": "iterations: 171\ncpu: 4090.4230233918124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 962.3848027397204,
            "unit": "us/iter",
            "extra": "iterations: 730\ncpu: 962.2883273972634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 643.3963549862796,
            "unit": "us/iter",
            "extra": "iterations: 1093\ncpu: 643.3496651418099 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 545.4780354717033,
            "unit": "us/iter",
            "extra": "iterations: 1325\ncpu: 545.4044747169838 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 505.0623123188342,
            "unit": "us/iter",
            "extra": "iterations: 1380\ncpu: 505.0152739130428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 477.19798773007204,
            "unit": "us/iter",
            "extra": "iterations: 1467\ncpu: 477.1306571233811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 463.446343708606,
            "unit": "us/iter",
            "extra": "iterations: 1510\ncpu: 463.4025503311247 us\nthreads: 1"
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
            "value": 32.38432387783462,
            "unit": "us/iter",
            "extra": "iterations: 21610\ncpu: 32.38251411383617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.807273830301607,
            "unit": "us/iter",
            "extra": "iterations: 59588\ncpu: 11.805984946633538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.58101379854653,
            "unit": "us/iter",
            "extra": "iterations: 73486\ncpu: 9.580053642870753 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 8.02115488564282,
            "unit": "us/iter",
            "extra": "iterations: 87839\ncpu: 8.020087705916513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.798489313121444,
            "unit": "us/iter",
            "extra": "iterations: 89783\ncpu: 7.797967020482719 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.404033122642776,
            "unit": "us/iter",
            "extra": "iterations: 94135\ncpu: 7.403892377967818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.186657644424311,
            "unit": "us/iter",
            "extra": "iterations: 97352\ncpu: 7.185915707946441 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 183.59716210526537,
            "unit": "us/iter",
            "extra": "iterations: 3800\ncpu: 183.5765563157902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 61.69765022855083,
            "unit": "us/iter",
            "extra": "iterations: 11376\ncpu: 61.693581926863736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 50.41550787740012,
            "unit": "us/iter",
            "extra": "iterations: 13964\ncpu: 50.41196032655363 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 42.635228693269205,
            "unit": "us/iter",
            "extra": "iterations: 16415\ncpu: 42.63124593359739 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 42.190377232946574,
            "unit": "us/iter",
            "extra": "iterations: 16682\ncpu: 42.187496643088146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 40.106579998871304,
            "unit": "us/iter",
            "extra": "iterations: 17719\ncpu: 40.10305993566259 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 38.89841770324315,
            "unit": "us/iter",
            "extra": "iterations: 18008\ncpu: 38.89655131052864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 415.73599169631933,
            "unit": "us/iter",
            "extra": "iterations: 1686\ncpu: 415.69599288256194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 129.00838386082,
            "unit": "us/iter",
            "extra": "iterations: 5403\ncpu: 128.99876568572992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 100.49775003601512,
            "unit": "us/iter",
            "extra": "iterations: 6941\ncpu: 100.48941247658934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 85.92937644030538,
            "unit": "us/iter",
            "extra": "iterations: 8158\ncpu: 85.9195427800931 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.89870469392463,
            "unit": "us/iter",
            "extra": "iterations: 8266\ncpu: 84.89697314299555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 80.19928663003775,
            "unit": "us/iter",
            "extra": "iterations: 8736\ncpu: 80.19398923992713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 78.00553092207903,
            "unit": "us/iter",
            "extra": "iterations: 8958\ncpu: 78.00049196249212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2189.9542781249615,
            "unit": "us/iter",
            "extra": "iterations: 320\ncpu: 2189.750703125015 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 748.2607350427561,
            "unit": "us/iter",
            "extra": "iterations: 936\ncpu: 748.1771762820478 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 585.842701754377,
            "unit": "us/iter",
            "extra": "iterations: 1197\ncpu: 585.8225012531324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 478.53606151742787,
            "unit": "us/iter",
            "extra": "iterations: 1463\ncpu: 478.4895208475697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 457.33498021108653,
            "unit": "us/iter",
            "extra": "iterations: 1516\ncpu: 457.28209036939234 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 427.80609738283255,
            "unit": "us/iter",
            "extra": "iterations: 1643\ncpu: 427.78059403530216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 416.25598394767724,
            "unit": "us/iter",
            "extra": "iterations: 1682\ncpu: 416.2431961950062 us\nthreads: 1"
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
          "id": "d7d670b48e8794e1769c608b00d4576baeb719ec",
          "message": "Merge pull request #196 from genogrove/fix/minor-performance-172\n\nMinor performance improvements",
          "timestamp": "2026-03-04T10:36:25-06:00",
          "tree_id": "75d11ded6ac77627db029953cf7ba2c847558f7d",
          "url": "https://github.com/genogrove/genogrove/commit/d7d670b48e8794e1769c608b00d4576baeb719ec"
        },
        "date": 1772642452869,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.97094764852181,
            "unit": "us/iter",
            "extra": "iterations: 17287\ncpu: 39.96865106727598 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.437851040053662,
            "unit": "us/iter",
            "extra": "iterations: 74275\ncpu: 9.437277320767418 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.457562488984414,
            "unit": "us/iter",
            "extra": "iterations: 107803\ncpu: 6.4565818576477465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.651373287976129,
            "unit": "us/iter",
            "extra": "iterations: 123465\ncpu: 5.651031871380552 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.271381346503684,
            "unit": "us/iter",
            "extra": "iterations: 133026\ncpu: 5.271065047434335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.214910714818437,
            "unit": "us/iter",
            "extra": "iterations: 134132\ncpu: 5.214733926281572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 5.032126978298178,
            "unit": "us/iter",
            "extra": "iterations: 138882\ncpu: 5.031533359254621 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 308.1863979815742,
            "unit": "us/iter",
            "extra": "iterations: 2279\ncpu: 308.11752523036404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 52.296725677710434,
            "unit": "us/iter",
            "extra": "iterations: 13280\ncpu: 52.2913225150602 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 36.59360646278128,
            "unit": "us/iter",
            "extra": "iterations: 19063\ncpu: 36.59102533704038 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 31.132174154065805,
            "unit": "us/iter",
            "extra": "iterations: 22549\ncpu: 31.130892367732457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.878564497563207,
            "unit": "us/iter",
            "extra": "iterations: 22590\ncpu: 30.873756972111547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.326008083333004,
            "unit": "us/iter",
            "extra": "iterations: 24000\ncpu: 29.324552416666688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.80202848192383,
            "unit": "us/iter",
            "extra": "iterations: 24261\ncpu: 28.798638349614613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 707.6489402229508,
            "unit": "us/iter",
            "extra": "iterations: 987\ncpu: 707.6051995947308 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 134.04432630578643,
            "unit": "us/iter",
            "extra": "iterations: 5265\ncpu: 134.0257618233618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 80.37777739049557,
            "unit": "us/iter",
            "extra": "iterations: 8607\ncpu: 80.37225397931917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 69.0391327099073,
            "unit": "us/iter",
            "extra": "iterations: 10052\ncpu: 69.03516802626343 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 71.16606254471121,
            "unit": "us/iter",
            "extra": "iterations: 9785\ncpu: 71.1560336228923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 65.58781172189195,
            "unit": "us/iter",
            "extra": "iterations: 10442\ncpu: 65.58271078337494 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 70.06256510834602,
            "unit": "us/iter",
            "extra": "iterations: 9968\ncpu: 70.05932564205457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4050.2369418603857,
            "unit": "us/iter",
            "extra": "iterations: 172\ncpu: 4049.9747848837214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 961.0708960327856,
            "unit": "us/iter",
            "extra": "iterations: 731\ncpu: 960.9803187414525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 638.2103879781498,
            "unit": "us/iter",
            "extra": "iterations: 1098\ncpu: 638.1700100182145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 530.9116691900052,
            "unit": "us/iter",
            "extra": "iterations: 1321\ncpu: 530.8535889477675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 507.6332903458379,
            "unit": "us/iter",
            "extra": "iterations: 1388\ncpu: 507.5672161383275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 476.36552513587714,
            "unit": "us/iter",
            "extra": "iterations: 1472\ncpu: 476.3280285326079 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 463.4320013236508,
            "unit": "us/iter",
            "extra": "iterations: 1511\ncpu: 463.38999007279915 us\nthreads: 1"
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
            "value": 32.49345493382967,
            "unit": "us/iter",
            "extra": "iterations: 21535\ncpu: 32.49127490132356 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.735192659013368,
            "unit": "us/iter",
            "extra": "iterations: 59665\ncpu: 11.734078991033307 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.535920241478022,
            "unit": "us/iter",
            "extra": "iterations: 73547\ncpu: 9.535204739826233 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 8.013810998599082,
            "unit": "us/iter",
            "extra": "iterations: 87793\ncpu: 8.013058694884574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.855772268228739,
            "unit": "us/iter",
            "extra": "iterations: 89118\ncpu: 7.855539116676747 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.404648936170593,
            "unit": "us/iter",
            "extra": "iterations: 94376\ncpu: 7.404145121641124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.161770150046297,
            "unit": "us/iter",
            "extra": "iterations: 97903\ncpu: 7.1607932239053165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 183.2414037805171,
            "unit": "us/iter",
            "extra": "iterations: 3809\ncpu: 183.23081596219558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 61.17890942472554,
            "unit": "us/iter",
            "extra": "iterations: 11438\ncpu: 61.17122267878982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 49.70184819277051,
            "unit": "us/iter",
            "extra": "iterations: 14110\ncpu: 49.69818136073701 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 42.32048539858057,
            "unit": "us/iter",
            "extra": "iterations: 16471\ncpu: 42.3154008256935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.78679102434505,
            "unit": "us/iter",
            "extra": "iterations: 16801\ncpu: 41.78430135111022 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 39.47498151800424,
            "unit": "us/iter",
            "extra": "iterations: 17747\ncpu: 39.4733825435285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 38.32112242883097,
            "unit": "us/iter",
            "extra": "iterations: 18231\ncpu: 38.31802024025008 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 412.44826753090626,
            "unit": "us/iter",
            "extra": "iterations: 1697\ncpu: 412.41465055981297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 129.28828138287602,
            "unit": "us/iter",
            "extra": "iterations: 5409\ncpu: 129.2734485117396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 100.27642429044552,
            "unit": "us/iter",
            "extra": "iterations: 6941\ncpu: 100.26924434519542 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 85.91445302713832,
            "unit": "us/iter",
            "extra": "iterations: 8143\ncpu: 85.91091391379024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.61308701456282,
            "unit": "us/iter",
            "extra": "iterations: 8240\ncpu: 84.59907014563039 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 80.16109803696213,
            "unit": "us/iter",
            "extra": "iterations: 8711\ncpu: 80.155005510275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 78.2113509438171,
            "unit": "us/iter",
            "extra": "iterations: 8953\ncpu: 78.20138824974913 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2193.526943038019,
            "unit": "us/iter",
            "extra": "iterations: 316\ncpu: 2193.467503164551 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 748.1210867237608,
            "unit": "us/iter",
            "extra": "iterations: 934\ncpu: 748.1141777301949 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 584.9067076023717,
            "unit": "us/iter",
            "extra": "iterations: 1197\ncpu: 584.8461979949877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 477.1993215258847,
            "unit": "us/iter",
            "extra": "iterations: 1468\ncpu: 477.1836498637598 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 456.47528739388184,
            "unit": "us/iter",
            "extra": "iterations: 1531\ncpu: 456.45529588504127 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 428.17046059865515,
            "unit": "us/iter",
            "extra": "iterations: 1637\ncpu: 428.12459926695203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 415.7629458010485,
            "unit": "us/iter",
            "extra": "iterations: 1679\ncpu: 415.7600881477094 us\nthreads: 1"
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
          "id": "da404399bc2aafefe95e92e2e733eb7c7510c112",
          "message": "Merge pull request #200 from genogrove/fix/benchmark-order-min-3\n\nRelax grove constructor validation from order >= 3 to order >= 2",
          "timestamp": "2026-03-04T12:26:49-06:00",
          "tree_id": "a4e8899557e7d9f0fbeadba04a87dcfa42f54588",
          "url": "https://github.com/genogrove/genogrove/commit/da404399bc2aafefe95e92e2e733eb7c7510c112"
        },
        "date": 1772649062832,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 35.6828219961851,
            "unit": "us/iter",
            "extra": "iterations: 18876\ncpu: 35.681409832591655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.009806212119766,
            "unit": "us/iter",
            "extra": "iterations: 87281\ncpu: 8.00955170082836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.277480545110618,
            "unit": "us/iter",
            "extra": "iterations: 133771\ncpu: 5.277392925222957 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.533739588954739,
            "unit": "us/iter",
            "extra": "iterations: 153803\ncpu: 4.533527258896119 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.214864549761825,
            "unit": "us/iter",
            "extra": "iterations: 166312\ncpu: 4.214766956082539 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.2405564476055435,
            "unit": "us/iter",
            "extra": "iterations: 167031\ncpu: 4.240533607533927 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.017239879191838,
            "unit": "us/iter",
            "extra": "iterations: 176147\ncpu: 4.01711385944694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 310.11703592017477,
            "unit": "us/iter",
            "extra": "iterations: 2255\ncpu: 310.11443991130824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.099061795965476,
            "unit": "us/iter",
            "extra": "iterations: 15713\ncpu: 44.09686775281617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.331147655821148,
            "unit": "us/iter",
            "extra": "iterations: 23697\ncpu: 29.331287673545177 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.75377201537708,
            "unit": "us/iter",
            "extra": "iterations: 28094\ncpu: 24.752173026268995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 24.63959921864026,
            "unit": "us/iter",
            "extra": "iterations: 28412\ncpu: 24.639513269041263 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 23.250030625106763,
            "unit": "us/iter",
            "extra": "iterations: 29355\ncpu: 23.249487548969544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.968007233101854,
            "unit": "us/iter",
            "extra": "iterations: 31660\ncpu: 21.968165603284913 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 679.5879912875043,
            "unit": "us/iter",
            "extra": "iterations: 1033\ncpu: 679.5623988383351 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 134.6096883541861,
            "unit": "us/iter",
            "extra": "iterations: 5195\ncpu: 134.60772993262765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 67.7016834425249,
            "unit": "us/iter",
            "extra": "iterations: 10074\ncpu: 67.69913599364706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 57.011427730325245,
            "unit": "us/iter",
            "extra": "iterations: 12059\ncpu: 57.00977593498628 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 58.92110350584267,
            "unit": "us/iter",
            "extra": "iterations: 12579\ncpu: 58.9196894029733 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 49.607997634123386,
            "unit": "us/iter",
            "extra": "iterations: 14371\ncpu: 49.606764595365846 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 58.731441206283506,
            "unit": "us/iter",
            "extra": "iterations: 11838\ncpu: 58.7318820746745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4489.574212903247,
            "unit": "us/iter",
            "extra": "iterations: 155\ncpu: 4489.197251612907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 931.3852984084826,
            "unit": "us/iter",
            "extra": "iterations: 754\ncpu: 931.3549310344857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 631.6312216216191,
            "unit": "us/iter",
            "extra": "iterations: 1110\ncpu: 631.5728207207223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 521.8800638930029,
            "unit": "us/iter",
            "extra": "iterations: 1346\ncpu: 521.8459933135211 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 498.12218973999654,
            "unit": "us/iter",
            "extra": "iterations: 1423\ncpu: 498.0868130709764 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.3240834437135,
            "unit": "us/iter",
            "extra": "iterations: 1510\ncpu: 463.30956225165664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.5622883750752,
            "unit": "us/iter",
            "extra": "iterations: 1557\ncpu: 449.5343673731543 us\nthreads: 1"
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
            "value": 30.10918017467279,
            "unit": "us/iter",
            "extra": "iterations: 22900\ncpu: 30.107459694323044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.58918454524297,
            "unit": "us/iter",
            "extra": "iterations: 73039\ncpu: 9.588813579046828 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.608422662766703,
            "unit": "us/iter",
            "extra": "iterations: 92310\ncpu: 7.608191647708836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.056972013949594,
            "unit": "us/iter",
            "extra": "iterations: 114700\ncpu: 6.056460619006106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 5.946361773874433,
            "unit": "us/iter",
            "extra": "iterations: 117731\ncpu: 5.945831182950973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 5.498274037744847,
            "unit": "us/iter",
            "extra": "iterations: 127435\ncpu: 5.498075112802625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.349263791912931,
            "unit": "us/iter",
            "extra": "iterations: 130330\ncpu: 5.349050149620223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 173.99780649963336,
            "unit": "us/iter",
            "extra": "iterations: 4031\ncpu: 173.98965045894278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 50.61930999999902,
            "unit": "us/iter",
            "extra": "iterations: 10000\ncpu: 50.61604499999959 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 39.60924038082366,
            "unit": "us/iter",
            "extra": "iterations: 17751\ncpu: 39.606825587290636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 32.17135179093648,
            "unit": "us/iter",
            "extra": "iterations: 21888\ncpu: 32.168975466008874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 31.79782020211292,
            "unit": "us/iter",
            "extra": "iterations: 21869\ncpu: 31.79679596689369 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 29.842357079327524,
            "unit": "us/iter",
            "extra": "iterations: 23611\ncpu: 29.840484096396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 29.041884701399248,
            "unit": "us/iter",
            "extra": "iterations: 24146\ncpu: 29.04094438002129 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 386.60420764119334,
            "unit": "us/iter",
            "extra": "iterations: 1806\ncpu: 386.57548006644583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 107.88072631903913,
            "unit": "us/iter",
            "extra": "iterations: 6482\ncpu: 107.87341854365995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 80.59065723851282,
            "unit": "us/iter",
            "extra": "iterations: 8662\ncpu: 80.58593973678167 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 65.38497853359256,
            "unit": "us/iter",
            "extra": "iterations: 10761\ncpu: 65.38011244308133 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 64.21953186206818,
            "unit": "us/iter",
            "extra": "iterations: 10875\ncpu: 64.21927439080473 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 59.9631106259104,
            "unit": "us/iter",
            "extra": "iterations: 11679\ncpu: 59.95938042640653 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 58.520880869130586,
            "unit": "us/iter",
            "extra": "iterations: 12012\ncpu: 58.51839951714978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2133.173222560978,
            "unit": "us/iter",
            "extra": "iterations: 328\ncpu: 2132.9933628048816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 609.1084393414037,
            "unit": "us/iter",
            "extra": "iterations: 1154\ncpu: 609.0782608318929 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 457.25817774850964,
            "unit": "us/iter",
            "extra": "iterations: 1519\ncpu: 457.2318841342987 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 362.91151400414066,
            "unit": "us/iter",
            "extra": "iterations: 1928\ncpu: 362.8892053941919 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 348.6560538653392,
            "unit": "us/iter",
            "extra": "iterations: 2005\ncpu: 348.6341451371596 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 319.68990247253225,
            "unit": "us/iter",
            "extra": "iterations: 2184\ncpu: 319.67323672161376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 312.72864078536975,
            "unit": "us/iter",
            "extra": "iterations: 2241\ncpu: 312.70608969210144 us\nthreads: 1"
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
          "id": "c2f7d6189064ec7302de89e093838f2404bdabca",
          "message": "Merge pull request #201 from genogrove/ci/benchmark-limit-history\n\nLimit benchmark chart history to last 25 commits",
          "timestamp": "2026-03-04T13:14:11-06:00",
          "tree_id": "8dae78686dd8c57ffeceda79ce7ec84310525973",
          "url": "https://github.com/genogrove/genogrove/commit/c2f7d6189064ec7302de89e093838f2404bdabca"
        },
        "date": 1772651903329,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 35.728938322411445,
            "unit": "us/iter",
            "extra": "iterations: 19683\ncpu: 35.722502565665806 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.112637682678335,
            "unit": "us/iter",
            "extra": "iterations: 85875\ncpu: 8.111381834061135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.216048910812672,
            "unit": "us/iter",
            "extra": "iterations: 133999\ncpu: 5.215683743908538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.529216098483688,
            "unit": "us/iter",
            "extra": "iterations: 151741\ncpu: 4.528464607456126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.158166520699819,
            "unit": "us/iter",
            "extra": "iterations: 168988\ncpu: 4.157698398702868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.148554238001287,
            "unit": "us/iter",
            "extra": "iterations: 168747\ncpu: 4.148121572531655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.931186287897905,
            "unit": "us/iter",
            "extra": "iterations: 177945\ncpu: 3.9308694877630743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 309.71784567628106,
            "unit": "us/iter",
            "extra": "iterations: 2255\ncpu: 309.68301241685145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.26911487639871,
            "unit": "us/iter",
            "extra": "iterations: 15817\ncpu: 44.26727685401783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.07718584218165,
            "unit": "us/iter",
            "extra": "iterations: 24015\ncpu: 29.0753738080367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.57164850078878,
            "unit": "us/iter",
            "extra": "iterations: 28515\ncpu: 24.569644993862845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 24.756644213555845,
            "unit": "us/iter",
            "extra": "iterations: 28489\ncpu: 24.753350591456364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 23.05616026018317,
            "unit": "us/iter",
            "extra": "iterations: 30594\ncpu: 23.05472033732109 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.92836772528439,
            "unit": "us/iter",
            "extra": "iterations: 31771\ncpu: 21.92590516508769 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 681.4592816764059,
            "unit": "us/iter",
            "extra": "iterations: 1026\ncpu: 681.4425867446392 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 134.90281816409936,
            "unit": "us/iter",
            "extra": "iterations: 5131\ncpu: 134.8935067238352 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 68.48557065271731,
            "unit": "us/iter",
            "extra": "iterations: 9943\ncpu: 68.48100764356849 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 57.86927161108414,
            "unit": "us/iter",
            "extra": "iterations: 12054\ncpu: 57.86649975112 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.73014981707888,
            "unit": "us/iter",
            "extra": "iterations: 11207\ncpu: 62.72265146783285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 56.15184043248039,
            "unit": "us/iter",
            "extra": "iterations: 13781\ncpu: 56.14918300558728 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 59.31995319257497,
            "unit": "us/iter",
            "extra": "iterations: 11793\ncpu: 59.31727194098192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4533.48525974022,
            "unit": "us/iter",
            "extra": "iterations: 154\ncpu: 4533.133785714301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 934.5433247282325,
            "unit": "us/iter",
            "extra": "iterations: 736\ncpu: 934.3451046195672 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 625.9884345878414,
            "unit": "us/iter",
            "extra": "iterations: 1116\ncpu: 625.9152034050193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 519.7241230541134,
            "unit": "us/iter",
            "extra": "iterations: 1349\ncpu: 519.7043876945903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.55859971812714,
            "unit": "us/iter",
            "extra": "iterations: 1419\ncpu: 492.5270916138126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 469.74238054269813,
            "unit": "us/iter",
            "extra": "iterations: 1511\ncpu: 469.7015221707477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.1951286173405,
            "unit": "us/iter",
            "extra": "iterations: 1555\ncpu: 450.1800675241171 us\nthreads: 1"
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
            "value": 30.21741934229198,
            "unit": "us/iter",
            "extra": "iterations: 23141\ncpu: 30.21562192645093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.580626527717468,
            "unit": "us/iter",
            "extra": "iterations: 73312\ncpu: 9.580038424814509 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.5252908939084975,
            "unit": "us/iter",
            "extra": "iterations: 91016\ncpu: 7.525156554891464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.008399496152875,
            "unit": "us/iter",
            "extra": "iterations: 116702\ncpu: 6.007959752189339 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 5.961924810813981,
            "unit": "us/iter",
            "extra": "iterations: 117477\ncpu: 5.961501383249482 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 5.45111098874665,
            "unit": "us/iter",
            "extra": "iterations: 128941\ncpu: 5.450449632002229 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.284325730050877,
            "unit": "us/iter",
            "extra": "iterations: 132662\ncpu: 5.283892727382366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 176.09206719760735,
            "unit": "us/iter",
            "extra": "iterations: 4018\ncpu: 176.08598282727706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 49.39898188534705,
            "unit": "us/iter",
            "extra": "iterations: 14077\ncpu: 49.39401257370187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 39.21803628219392,
            "unit": "us/iter",
            "extra": "iterations: 17860\ncpu: 39.21475851063849 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 32.025978894470065,
            "unit": "us/iter",
            "extra": "iterations: 21890\ncpu: 32.02542060301511 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 31.505618137672947,
            "unit": "us/iter",
            "extra": "iterations: 22241\ncpu: 31.50335641383047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 29.468978270939175,
            "unit": "us/iter",
            "extra": "iterations: 23747\ncpu: 29.467165410367517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 28.802904144218658,
            "unit": "us/iter",
            "extra": "iterations: 24130\ncpu: 28.800615996684634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 383.8885911086416,
            "unit": "us/iter",
            "extra": "iterations: 1822\ncpu: 383.85133095499344 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 107.06536185932015,
            "unit": "us/iter",
            "extra": "iterations: 6497\ncpu: 107.05753547791213 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 80.18483749711395,
            "unit": "us/iter",
            "extra": "iterations: 8646\ncpu: 80.17805482303976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 65.4622536184563,
            "unit": "us/iter",
            "extra": "iterations: 10709\ncpu: 65.45761891866613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 63.96328411386635,
            "unit": "us/iter",
            "extra": "iterations: 10890\ncpu: 63.95442203856738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 60.180730466746375,
            "unit": "us/iter",
            "extra": "iterations: 11698\ncpu: 60.178284493075246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 58.525900301610356,
            "unit": "us/iter",
            "extra": "iterations: 11936\ncpu: 58.52111285187673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2143.6149204891876,
            "unit": "us/iter",
            "extra": "iterations: 327\ncpu: 2143.3530519877754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 605.9559499136092,
            "unit": "us/iter",
            "extra": "iterations: 1158\ncpu: 605.8999706390293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 464.7828185430258,
            "unit": "us/iter",
            "extra": "iterations: 1510\ncpu: 464.72414966887436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 367.56104621848505,
            "unit": "us/iter",
            "extra": "iterations: 1904\ncpu: 367.53397268907605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 351.36291716865793,
            "unit": "us/iter",
            "extra": "iterations: 1992\ncpu: 351.3444231927722 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 325.72518245123246,
            "unit": "us/iter",
            "extra": "iterations: 2154\ncpu: 325.6892386258142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 313.8904483841967,
            "unit": "us/iter",
            "extra": "iterations: 2228\ncpu: 313.8726234290849 us\nthreads: 1"
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
          "id": "8ad00b102cfbe73cc0bd6d4d5add5bca9841f888",
          "message": "Merge pull request #198 from genogrove/fix/serialize-stream-validation-126\n\nAdd stream validation to all serialize() methods",
          "timestamp": "2026-03-04T13:27:48-06:00",
          "tree_id": "8a33ad24794ddd4876a7f43679719294ea59bac2",
          "url": "https://github.com/genogrove/genogrove/commit/8ad00b102cfbe73cc0bd6d4d5add5bca9841f888"
        },
        "date": 1772652691861,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.76650563835212,
            "unit": "us/iter",
            "extra": "iterations: 17647\ncpu: 39.7597521391738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.531007317571861,
            "unit": "us/iter",
            "extra": "iterations: 73385\ncpu: 9.529758888056142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.379312580650879,
            "unit": "us/iter",
            "extra": "iterations: 110042\ncpu: 6.378853955762346 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.534953744015476,
            "unit": "us/iter",
            "extra": "iterations: 129086\ncpu: 5.534188587453324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.150583612924745,
            "unit": "us/iter",
            "extra": "iterations: 137999\ncpu: 5.150251588779628 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.027683586415808,
            "unit": "us/iter",
            "extra": "iterations: 140073\ncpu: 5.026937132780763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.8055080672651505,
            "unit": "us/iter",
            "extra": "iterations: 140816\ncpu: 4.805225933132596 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 306.95785476084984,
            "unit": "us/iter",
            "extra": "iterations: 2279\ncpu: 306.9189354980251 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 53.03527439303578,
            "unit": "us/iter",
            "extra": "iterations: 13098\ncpu: 53.03077508016487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 36.990049556487605,
            "unit": "us/iter",
            "extra": "iterations: 18827\ncpu: 36.986420194401646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 31.112987260298574,
            "unit": "us/iter",
            "extra": "iterations: 22528\ncpu: 31.110517578125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.44308987386291,
            "unit": "us/iter",
            "extra": "iterations: 22832\ncpu: 30.43900687631396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.379552427632206,
            "unit": "us/iter",
            "extra": "iterations: 23871\ncpu: 29.37816865652885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.452345042999085,
            "unit": "us/iter",
            "extra": "iterations: 24652\ncpu: 28.45006628265455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 707.2949229990234,
            "unit": "us/iter",
            "extra": "iterations: 987\ncpu: 707.2605136778121 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 137.41262136685276,
            "unit": "us/iter",
            "extra": "iterations: 5092\ncpu: 137.40291673212894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 83.97028022176772,
            "unit": "us/iter",
            "extra": "iterations: 8297\ncpu: 83.95934337712409 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 68.34472685827619,
            "unit": "us/iter",
            "extra": "iterations: 10090\ncpu: 68.34177373637262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 69.79149016641252,
            "unit": "us/iter",
            "extra": "iterations: 9915\ncpu: 69.78254382249138 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 65.8684990042647,
            "unit": "us/iter",
            "extra": "iterations: 10545\ncpu: 65.86163167377885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.91067160889297,
            "unit": "us/iter",
            "extra": "iterations: 9982\ncpu: 68.90310168302932 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4074.6403604651696,
            "unit": "us/iter",
            "extra": "iterations: 172\ncpu: 4074.209889534888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 968.1176496551728,
            "unit": "us/iter",
            "extra": "iterations: 725\ncpu: 968.0773186206902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 667.4018847618732,
            "unit": "us/iter",
            "extra": "iterations: 1050\ncpu: 667.3391247619046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 549.7186119631955,
            "unit": "us/iter",
            "extra": "iterations: 1304\ncpu: 549.6952507668725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 516.7469600000155,
            "unit": "us/iter",
            "extra": "iterations: 1350\ncpu: 516.7129311111112 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 482.59867854696523,
            "unit": "us/iter",
            "extra": "iterations: 1459\ncpu: 482.57027210418113 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 469.9452283991751,
            "unit": "us/iter",
            "extra": "iterations: 1493\ncpu: 469.89192364366966 us\nthreads: 1"
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
            "value": 32.34579047972469,
            "unit": "us/iter",
            "extra": "iterations: 21554\ncpu: 32.34499698431858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.201519867333872,
            "unit": "us/iter",
            "extra": "iterations: 61508\ncpu: 11.199574152955762 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.16928925887084,
            "unit": "us/iter",
            "extra": "iterations: 77301\ncpu: 9.16908865344561 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.4742569816915205,
            "unit": "us/iter",
            "extra": "iterations: 93781\ncpu: 7.473554568622618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.4416925929041255,
            "unit": "us/iter",
            "extra": "iterations: 95206\ncpu: 7.440720595340641 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 6.854096986687888,
            "unit": "us/iter",
            "extra": "iterations: 102014\ncpu: 6.853827386437134 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 6.6521315060176756,
            "unit": "us/iter",
            "extra": "iterations: 105364\ncpu: 6.651454396188469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 182.46902351711006,
            "unit": "us/iter",
            "extra": "iterations: 3827\ncpu: 182.4601034753074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 58.64422698823231,
            "unit": "us/iter",
            "extra": "iterations: 11983\ncpu: 58.63769990820359 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 47.96504917810681,
            "unit": "us/iter",
            "extra": "iterations: 14783\ncpu: 47.96158837854299 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 39.644468307658286,
            "unit": "us/iter",
            "extra": "iterations: 17591\ncpu: 39.63893269285428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 39.25774928599509,
            "unit": "us/iter",
            "extra": "iterations: 17857\ncpu: 39.25574564596512 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 37.33930397905774,
            "unit": "us/iter",
            "extra": "iterations: 19100\ncpu: 37.33455219895289 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 35.83552625335156,
            "unit": "us/iter",
            "extra": "iterations: 19388\ncpu: 35.83320775737579 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 409.8369766491498,
            "unit": "us/iter",
            "extra": "iterations: 1713\ncpu: 409.79031406888424 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 123.90506619216356,
            "unit": "us/iter",
            "extra": "iterations: 5620\ncpu: 123.89650533807831 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 95.57011504787633,
            "unit": "us/iter",
            "extra": "iterations: 7310\ncpu: 95.55807537619677 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 80.37081547139807,
            "unit": "us/iter",
            "extra": "iterations: 8687\ncpu: 80.36573707839318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 79.61210321179539,
            "unit": "us/iter",
            "extra": "iterations: 8749\ncpu: 79.60567253400352 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 75.81672844287475,
            "unit": "us/iter",
            "extra": "iterations: 8779\ncpu: 75.81300125299019 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 72.86076480418029,
            "unit": "us/iter",
            "extra": "iterations: 9575\ncpu: 72.85653054830219 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2167.4318142414313,
            "unit": "us/iter",
            "extra": "iterations: 323\ncpu: 2167.158482972124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 720.7930092118369,
            "unit": "us/iter",
            "extra": "iterations: 977\ncpu: 720.7439989764581 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 556.9321534181022,
            "unit": "us/iter",
            "extra": "iterations: 1258\ncpu: 556.8971534181209 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 452.48502256610254,
            "unit": "us/iter",
            "extra": "iterations: 1551\ncpu: 452.4651521598975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 433.30441995076546,
            "unit": "us/iter",
            "extra": "iterations: 1624\ncpu: 433.2184051724157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 400.88958668198586,
            "unit": "us/iter",
            "extra": "iterations: 1742\ncpu: 400.8733088404114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 398.304159090915,
            "unit": "us/iter",
            "extra": "iterations: 1760\ncpu: 398.2541448863634 us\nthreads: 1"
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
          "id": "2ac6644a292cdf671c6c0aa7524cdbcf495e4013",
          "message": "Merge pull request #202 from genogrove/ci/deduplicate-workflow-triggers\n\nDeduplicate CI triggers: push on main only, pull_request for PRs",
          "timestamp": "2026-03-04T13:46:24-06:00",
          "tree_id": "22950644521ecac5b4d0b76741912fde86b9bc21",
          "url": "https://github.com/genogrove/genogrove/commit/2ac6644a292cdf671c6c0aa7524cdbcf495e4013"
        },
        "date": 1772653815922,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 36.38362356525058,
            "unit": "us/iter",
            "extra": "iterations: 18383\ncpu: 36.37496213893271 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.066807288974545,
            "unit": "us/iter",
            "extra": "iterations: 87063\ncpu: 8.065177802281104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.225803053525498,
            "unit": "us/iter",
            "extra": "iterations: 135057\ncpu: 5.224484439903153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.525704771576181,
            "unit": "us/iter",
            "extra": "iterations: 150663\ncpu: 4.5249305204330215 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.1607186837465,
            "unit": "us/iter",
            "extra": "iterations: 168387\ncpu: 4.160126886279821 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.1945526204224155,
            "unit": "us/iter",
            "extra": "iterations: 167473\ncpu: 4.194376789094358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.007359245527978,
            "unit": "us/iter",
            "extra": "iterations: 175593\ncpu: 4.0070754870638385 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 310.5622246344723,
            "unit": "us/iter",
            "extra": "iterations: 2257\ncpu: 310.55072662826797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.33017893602186,
            "unit": "us/iter",
            "extra": "iterations: 15771\ncpu: 44.32341848963279 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.274314405757206,
            "unit": "us/iter",
            "extra": "iterations: 24039\ncpu: 29.270094679479232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.577430366417826,
            "unit": "us/iter",
            "extra": "iterations: 28492\ncpu: 24.576389196967575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.076774020733243,
            "unit": "us/iter",
            "extra": "iterations: 28746\ncpu: 25.074465838725402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 23.15690100156773,
            "unit": "us/iter",
            "extra": "iterations: 29354\ncpu: 23.155227396606964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.897337025267028,
            "unit": "us/iter",
            "extra": "iterations: 31781\ncpu: 21.896064157830164 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 687.339888780493,
            "unit": "us/iter",
            "extra": "iterations: 1025\ncpu: 687.2468302439027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 134.8523073180182,
            "unit": "us/iter",
            "extra": "iterations: 5138\ncpu: 134.83410840794116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 68.98025107648319,
            "unit": "us/iter",
            "extra": "iterations: 9754\ncpu: 68.97087338527766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 57.84347880832993,
            "unit": "us/iter",
            "extra": "iterations: 12151\ncpu: 57.838787754094376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 58.23665806995219,
            "unit": "us/iter",
            "extra": "iterations: 11865\ncpu: 58.23384450063201 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 52.130467073390356,
            "unit": "us/iter",
            "extra": "iterations: 11146\ncpu: 52.120598062084945 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 58.17258741376392,
            "unit": "us/iter",
            "extra": "iterations: 11886\ncpu: 58.170164395086864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4584.17919607842,
            "unit": "us/iter",
            "extra": "iterations: 153\ncpu: 4582.975274509818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 935.1392053333333,
            "unit": "us/iter",
            "extra": "iterations: 750\ncpu: 934.9705879999988 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 629.2659505395734,
            "unit": "us/iter",
            "extra": "iterations: 1112\ncpu: 629.1540665467627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 523.1513127354993,
            "unit": "us/iter",
            "extra": "iterations: 1327\ncpu: 523.1064348153708 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 493.8620403111671,
            "unit": "us/iter",
            "extra": "iterations: 1414\ncpu: 493.82494554455366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 465.4568259136121,
            "unit": "us/iter",
            "extra": "iterations: 1505\ncpu: 465.3832923588034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 455.9477943078704,
            "unit": "us/iter",
            "extra": "iterations: 1546\ncpu: 455.8568919793013 us\nthreads: 1"
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
            "value": 30.381411685514777,
            "unit": "us/iter",
            "extra": "iterations: 22284\ncpu: 30.380892030156247 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.582392379725679,
            "unit": "us/iter",
            "extra": "iterations: 72937\ncpu: 9.581301767278612 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.55024017820504,
            "unit": "us/iter",
            "extra": "iterations: 92702\ncpu: 7.550203900670983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.083531769526702,
            "unit": "us/iter",
            "extra": "iterations: 115189\ncpu: 6.083072888904327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 6.0448488578399875,
            "unit": "us/iter",
            "extra": "iterations: 117234\ncpu: 6.038523414709053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 5.47536905949838,
            "unit": "us/iter",
            "extra": "iterations: 128272\ncpu: 5.474836137270807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.3336094979193485,
            "unit": "us/iter",
            "extra": "iterations: 131692\ncpu: 5.332996651277221 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 173.98517107232095,
            "unit": "us/iter",
            "extra": "iterations: 4010\ncpu: 173.96308877805464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 49.919785393339666,
            "unit": "us/iter",
            "extra": "iterations: 14021\ncpu: 49.91017152842141 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 39.274169772140695,
            "unit": "us/iter",
            "extra": "iterations: 17818\ncpu: 39.268066000673265 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 32.17646590020551,
            "unit": "us/iter",
            "extra": "iterations: 21745\ncpu: 32.17155681765908 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 31.73618107874658,
            "unit": "us/iter",
            "extra": "iterations: 22007\ncpu: 31.733845321942873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 29.421996507910713,
            "unit": "us/iter",
            "extra": "iterations: 23768\ncpu: 29.416584483338852 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 29.386372614663493,
            "unit": "us/iter",
            "extra": "iterations: 23896\ncpu: 29.383120020086974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 383.6399819375848,
            "unit": "us/iter",
            "extra": "iterations: 1827\ncpu: 383.6041631089213 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 107.42709509155792,
            "unit": "us/iter",
            "extra": "iterations: 6499\ncpu: 107.41360209262994 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 80.34758047371639,
            "unit": "us/iter",
            "extra": "iterations: 8655\ncpu: 80.33457180820342 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 65.16812470981279,
            "unit": "us/iter",
            "extra": "iterations: 10769\ncpu: 65.16643903797967 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 64.99783226585303,
            "unit": "us/iter",
            "extra": "iterations: 10773\ncpu: 64.99444472291837 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 60.30444463505006,
            "unit": "us/iter",
            "extra": "iterations: 11659\ncpu: 60.29618595076801 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 59.332160510635696,
            "unit": "us/iter",
            "extra": "iterations: 11750\ncpu: 59.32571004255356 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2135.731057926887,
            "unit": "us/iter",
            "extra": "iterations: 328\ncpu: 2135.2966432926705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 609.4859367417552,
            "unit": "us/iter",
            "extra": "iterations: 1154\ncpu: 609.4674766031219 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 461.58154105960085,
            "unit": "us/iter",
            "extra": "iterations: 1510\ncpu: 461.48289006622286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 366.3429095661339,
            "unit": "us/iter",
            "extra": "iterations: 1913\ncpu: 366.3216351280714 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 351.3880910462814,
            "unit": "us/iter",
            "extra": "iterations: 1988\ncpu: 351.32998541247457 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 322.02142090259827,
            "unit": "us/iter",
            "extra": "iterations: 2105\ncpu: 321.983707363423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 319.95845088274586,
            "unit": "us/iter",
            "extra": "iterations: 2209\ncpu: 319.9289013128124 us\nthreads: 1"
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
          "id": "36b8751df7790b3e4140ebe3de981030d5c64e5e",
          "message": "Merge pull request #203 from genogrove/fix/reader-constructor-resource-leak-129\n\nFix resource leaks in IO reader constructors on allocation failure",
          "timestamp": "2026-03-04T15:07:53-06:00",
          "tree_id": "e1975309fc420cc8f0738da07a65cb85372ecf2d",
          "url": "https://github.com/genogrove/genogrove/commit/36b8751df7790b3e4140ebe3de981030d5c64e5e"
        },
        "date": 1772658711560,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.43833415406186,
            "unit": "us/iter",
            "extra": "iterations: 17058\ncpu: 39.435242818618825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.598168625447093,
            "unit": "us/iter",
            "extra": "iterations: 74366\ncpu: 9.597612780033888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.381145247644946,
            "unit": "us/iter",
            "extra": "iterations: 107210\ncpu: 6.375022022199422 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.594737913976201,
            "unit": "us/iter",
            "extra": "iterations: 124524\ncpu: 5.593671003180109 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.245474719899462,
            "unit": "us/iter",
            "extra": "iterations: 133702\ncpu: 5.244737730176063 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.193020372833219,
            "unit": "us/iter",
            "extra": "iterations: 134591\ncpu: 5.192614565609886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 5.013067533304765,
            "unit": "us/iter",
            "extra": "iterations: 139620\ncpu: 5.01268633433606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 307.9212639193248,
            "unit": "us/iter",
            "extra": "iterations: 2281\ncpu: 307.88622621657174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 51.928712877889176,
            "unit": "us/iter",
            "extra": "iterations: 13496\ncpu: 51.92546769413162 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 36.48069357023786,
            "unit": "us/iter",
            "extra": "iterations: 19192\ncpu: 36.47737937682365 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 31.246662369415816,
            "unit": "us/iter",
            "extra": "iterations: 22495\ncpu: 31.245951144698882 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.937607466312265,
            "unit": "us/iter",
            "extra": "iterations: 22635\ncpu: 30.93498758559749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 29.37926401529363,
            "unit": "us/iter",
            "extra": "iterations: 24063\ncpu: 29.37830627935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.569710620915203,
            "unit": "us/iter",
            "extra": "iterations: 24480\ncpu: 28.56731887254903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 718.6446138917069,
            "unit": "us/iter",
            "extra": "iterations: 979\ncpu: 718.5925587334024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 133.03325732217834,
            "unit": "us/iter",
            "extra": "iterations: 5258\ncpu: 133.02391061240033 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 80.47429812206472,
            "unit": "us/iter",
            "extra": "iterations: 8520\ncpu: 80.46952875586862 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 67.83891890830728,
            "unit": "us/iter",
            "extra": "iterations: 10186\ncpu: 67.8358054192028 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 69.64569490351268,
            "unit": "us/iter",
            "extra": "iterations: 10105\ncpu: 69.63783236021749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 64.77517512856622,
            "unit": "us/iter",
            "extra": "iterations: 10695\ncpu: 64.77181748480602 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.75075877623216,
            "unit": "us/iter",
            "extra": "iterations: 10198\ncpu: 68.74557834869584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4116.175835294116,
            "unit": "us/iter",
            "extra": "iterations: 170\ncpu: 4115.948370588243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 952.0600312075987,
            "unit": "us/iter",
            "extra": "iterations: 737\ncpu: 952.0022103120791 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 645.495682612682,
            "unit": "us/iter",
            "extra": "iterations: 1087\ncpu: 645.4477755289759 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 529.9687137433546,
            "unit": "us/iter",
            "extra": "iterations: 1317\ncpu: 529.9264707668964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 502.1184062946955,
            "unit": "us/iter",
            "extra": "iterations: 1398\ncpu: 502.086638054364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 467.29283789191027,
            "unit": "us/iter",
            "extra": "iterations: 1499\ncpu: 467.2774943295527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 454.26190702210033,
            "unit": "us/iter",
            "extra": "iterations: 1538\ncpu: 454.23394018205585 us\nthreads: 1"
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
            "value": 32.68135600578868,
            "unit": "us/iter",
            "extra": "iterations: 21421\ncpu: 32.67938443583403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.761482398018996,
            "unit": "us/iter",
            "extra": "iterations: 59766\ncpu: 11.760657865676153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.535024185728915,
            "unit": "us/iter",
            "extra": "iterations: 73225\ncpu: 9.534697849095275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.996275611285366,
            "unit": "us/iter",
            "extra": "iterations: 87725\ncpu: 7.99558621829581 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.8735957219731985,
            "unit": "us/iter",
            "extra": "iterations: 89013\ncpu: 7.873047150416226 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.433007066653893,
            "unit": "us/iter",
            "extra": "iterations: 94953\ncpu: 7.432615220161549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.1832155416029115,
            "unit": "us/iter",
            "extra": "iterations: 97313\ncpu: 7.182684266233703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 183.01606643996783,
            "unit": "us/iter",
            "extra": "iterations: 3823\ncpu: 183.0060405440758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 60.969645741463275,
            "unit": "us/iter",
            "extra": "iterations: 11565\ncpu: 60.965586078685995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 49.68092365492172,
            "unit": "us/iter",
            "extra": "iterations: 14107\ncpu: 49.67672623520201 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 42.15207314562489,
            "unit": "us/iter",
            "extra": "iterations: 16515\ncpu: 42.14923312140462 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.344053933784124,
            "unit": "us/iter",
            "extra": "iterations: 16854\ncpu: 41.34200925596335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 39.27351728775503,
            "unit": "us/iter",
            "extra": "iterations: 17845\ncpu: 39.268156346315635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 38.410116190999794,
            "unit": "us/iter",
            "extra": "iterations: 18220\ncpu: 38.40479110867178 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 413.4730578171156,
            "unit": "us/iter",
            "extra": "iterations: 1695\ncpu: 413.45341887905573 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 128.0208636197447,
            "unit": "us/iter",
            "extra": "iterations: 5470\ncpu: 128.01147404021927 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 99.7237061936783,
            "unit": "us/iter",
            "extra": "iterations: 6991\ncpu: 99.71647632670589 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 85.22580727762731,
            "unit": "us/iter",
            "extra": "iterations: 8162\ncpu: 85.22252242097566 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.46817863608852,
            "unit": "us/iter",
            "extra": "iterations: 8285\ncpu: 84.46100627640281 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 79.99441326938305,
            "unit": "us/iter",
            "extra": "iterations: 8757\ncpu: 79.99042994176091 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 77.8018233653201,
            "unit": "us/iter",
            "extra": "iterations: 8962\ncpu: 77.79686197277397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2202.253338558053,
            "unit": "us/iter",
            "extra": "iterations: 319\ncpu: 2202.0211222570438 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 745.3727473460657,
            "unit": "us/iter",
            "extra": "iterations: 942\ncpu: 745.3061242038203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 581.430990856196,
            "unit": "us/iter",
            "extra": "iterations: 1203\ncpu: 581.3590872817912 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 473.48787339201044,
            "unit": "us/iter",
            "extra": "iterations: 1477\ncpu: 473.46983073798293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 465.7486554621819,
            "unit": "us/iter",
            "extra": "iterations: 1190\ncpu: 465.6856571428602 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 423.6094410163418,
            "unit": "us/iter",
            "extra": "iterations: 1653\ncpu: 423.58569147005306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 413.76035976332713,
            "unit": "us/iter",
            "extra": "iterations: 1690\ncpu: 413.73381301775055 us\nthreads: 1"
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
          "id": "ad2482df6fdfa5a8603f151a43d01d5ae672d3c7",
          "message": "Merge pull request #204 from genogrove/fix/index-registry-overflow-130\n\nAdd overflow check and in-class initializer to index_registry",
          "timestamp": "2026-03-04T15:25:24-06:00",
          "tree_id": "8bc687afc45e7a3b73f8dba983f5ada0af93bc58",
          "url": "https://github.com/genogrove/genogrove/commit/ad2482df6fdfa5a8603f151a43d01d5ae672d3c7"
        },
        "date": 1772659767093,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 37.139836027714054,
            "unit": "us/iter",
            "extra": "iterations: 18619\ncpu: 37.13770320640205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.077659837439974,
            "unit": "us/iter",
            "extra": "iterations: 86491\ncpu: 8.075405811009238 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.211886618174336,
            "unit": "us/iter",
            "extra": "iterations: 135004\ncpu: 5.2107062827768065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.532488750610823,
            "unit": "us/iter",
            "extra": "iterations: 153475\ncpu: 4.531207323668351 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.18071764034115,
            "unit": "us/iter",
            "extra": "iterations: 168126\ncpu: 4.179712584609159 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.198960073071957,
            "unit": "us/iter",
            "extra": "iterations: 167506\ncpu: 4.1982419435721665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.981221533106876,
            "unit": "us/iter",
            "extra": "iterations: 175265\ncpu: 3.9810125295980385 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 310.71424122611813,
            "unit": "us/iter",
            "extra": "iterations: 2251\ncpu: 310.69672501110614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.008697244219256,
            "unit": "us/iter",
            "extra": "iterations: 15785\ncpu: 44.005851187836555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.406161189424108,
            "unit": "us/iter",
            "extra": "iterations: 23978\ncpu: 29.405060013345604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.77438267236585,
            "unit": "us/iter",
            "extra": "iterations: 28544\ncpu: 24.774079421244387 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 24.320737461343906,
            "unit": "us/iter",
            "extra": "iterations: 28133\ncpu: 24.31861394092345 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 23.511423587929563,
            "unit": "us/iter",
            "extra": "iterations: 29956\ncpu: 23.5096143009748 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.94425043755503,
            "unit": "us/iter",
            "extra": "iterations: 31996\ncpu: 21.941984560570084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 683.9493966535415,
            "unit": "us/iter",
            "extra": "iterations: 1016\ncpu: 683.9180177165355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 134.8646124346309,
            "unit": "us/iter",
            "extra": "iterations: 5163\ncpu: 134.86087313577357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 68.68426632302521,
            "unit": "us/iter",
            "extra": "iterations: 9894\ncpu: 68.6809645239537 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 57.00076007661405,
            "unit": "us/iter",
            "extra": "iterations: 12008\ncpu: 56.99882786475696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 55.75197504025929,
            "unit": "us/iter",
            "extra": "iterations: 11178\ncpu: 55.7474607264269 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 55.20454432032489,
            "unit": "us/iter",
            "extra": "iterations: 13786\ncpu: 55.20302284926743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 58.4060442855967,
            "unit": "us/iter",
            "extra": "iterations: 12171\ncpu: 58.403160381234024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4643.765243243158,
            "unit": "us/iter",
            "extra": "iterations: 148\ncpu: 4643.561560810796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 932.0480956175483,
            "unit": "us/iter",
            "extra": "iterations: 753\ncpu: 931.8994727755622 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 627.6892324955152,
            "unit": "us/iter",
            "extra": "iterations: 1114\ncpu: 627.6455134649905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 522.0084678624763,
            "unit": "us/iter",
            "extra": "iterations: 1338\ncpu: 521.9727548579978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.81885573540507,
            "unit": "us/iter",
            "extra": "iterations: 1421\ncpu: 492.7611710063334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.82972913907537,
            "unit": "us/iter",
            "extra": "iterations: 1510\ncpu: 463.8003860927157 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.2118774855701,
            "unit": "us/iter",
            "extra": "iterations: 1559\ncpu: 449.19644387427996 us\nthreads: 1"
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
            "value": 29.937657446624108,
            "unit": "us/iter",
            "extra": "iterations: 23138\ncpu: 29.93682600051859 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.57257948290716,
            "unit": "us/iter",
            "extra": "iterations: 73217\ncpu: 9.572037791769679 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.577224693143993,
            "unit": "us/iter",
            "extra": "iterations: 92633\ncpu: 7.576944112789171 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.018583956678574,
            "unit": "us/iter",
            "extra": "iterations: 116709\ncpu: 6.018081724631341 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 5.956909963985634,
            "unit": "us/iter",
            "extra": "iterations: 117453\ncpu: 5.9568272841051355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 5.456309073125088,
            "unit": "us/iter",
            "extra": "iterations: 127795\ncpu: 5.45621570483978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.283505627764605,
            "unit": "us/iter",
            "extra": "iterations: 132024\ncpu: 5.283201652729799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 173.43606636948888,
            "unit": "us/iter",
            "extra": "iterations: 4038\ncpu: 173.41942025755367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 49.785893858767054,
            "unit": "us/iter",
            "extra": "iterations: 13906\ncpu: 49.7808426578456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 39.43499023130452,
            "unit": "us/iter",
            "extra": "iterations: 17812\ncpu: 39.43386542780135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 31.982344424132652,
            "unit": "us/iter",
            "extra": "iterations: 21880\ncpu: 31.980859003656374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 31.72151171910629,
            "unit": "us/iter",
            "extra": "iterations: 21930\ncpu: 31.720380848153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 29.601783733514186,
            "unit": "us/iter",
            "extra": "iterations: 23656\ncpu: 29.59970891105823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 29.033940784573595,
            "unit": "us/iter",
            "extra": "iterations: 24166\ncpu: 29.032654473226643 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 381.7190202296329,
            "unit": "us/iter",
            "extra": "iterations: 1829\ncpu: 381.6548381629319 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 106.90342022093006,
            "unit": "us/iter",
            "extra": "iterations: 6518\ncpu: 106.89496900889863 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 80.48068226458594,
            "unit": "us/iter",
            "extra": "iterations: 8655\ncpu: 80.47150537261771 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 65.43134221848099,
            "unit": "us/iter",
            "extra": "iterations: 10692\ncpu: 65.42575327347515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 64.45849133320928,
            "unit": "us/iter",
            "extra": "iterations: 10846\ncpu: 64.45281062142747 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 60.16508347691138,
            "unit": "us/iter",
            "extra": "iterations: 11608\ncpu: 60.158599672640044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 59.0340191050797,
            "unit": "us/iter",
            "extra": "iterations: 11934\ncpu: 59.032506200771046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2155.6811288343797,
            "unit": "us/iter",
            "extra": "iterations: 326\ncpu: 2155.4375214723777 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 609.660413194435,
            "unit": "us/iter",
            "extra": "iterations: 1152\ncpu: 609.6262994791688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 462.6726394963563,
            "unit": "us/iter",
            "extra": "iterations: 1509\ncpu: 462.63069383697893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 367.15460472441083,
            "unit": "us/iter",
            "extra": "iterations: 1905\ncpu: 367.1156120734904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 351.3035709984965,
            "unit": "us/iter",
            "extra": "iterations: 1993\ncpu: 351.2909954841952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 322.0092072777553,
            "unit": "us/iter",
            "extra": "iterations: 2171\ncpu: 321.9936310456017 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 313.64030510752303,
            "unit": "us/iter",
            "extra": "iterations: 2232\ncpu: 313.6061563620047 us\nthreads: 1"
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
          "id": "97c7d38512a93cf9a53f013b9b1e1ab9efb0b2c7",
          "message": "Merge pull request #205 from genogrove/fix/bam-unaligned-reinterpret-cast-131\n\nFix undefined behavior from unaligned pointer casts in parse_tags()",
          "timestamp": "2026-03-04T18:21:51-06:00",
          "tree_id": "677a0d35cff4b431fb116eb3d82194e1db0c2220",
          "url": "https://github.com/genogrove/genogrove/commit/97c7d38512a93cf9a53f013b9b1e1ab9efb0b2c7"
        },
        "date": 1772670338817,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.31057470598326,
            "unit": "us/iter",
            "extra": "iterations: 17261\ncpu: 39.296891895023464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.453846507007412,
            "unit": "us/iter",
            "extra": "iterations: 74492\ncpu: 9.451229017881113 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.404888938754054,
            "unit": "us/iter",
            "extra": "iterations: 109183\ncpu: 6.4047605488033845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.600194392165476,
            "unit": "us/iter",
            "extra": "iterations: 125396\ncpu: 5.599237208523397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 5.234855490764228,
            "unit": "us/iter",
            "extra": "iterations: 132905\ncpu: 5.234661848688914 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.1893906255804865,
            "unit": "us/iter",
            "extra": "iterations: 134579\ncpu: 5.1889637982151795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 5.001873307978326,
            "unit": "us/iter",
            "extra": "iterations: 140143\ncpu: 5.00167414712115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 305.6195211513395,
            "unit": "us/iter",
            "extra": "iterations: 2293\ncpu: 305.57584518098577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 51.53522785465878,
            "unit": "us/iter",
            "extra": "iterations: 13513\ncpu: 51.533668837415824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 36.22386676654527,
            "unit": "us/iter",
            "extra": "iterations: 19357\ncpu: 36.220412460608564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 30.84594288612592,
            "unit": "us/iter",
            "extra": "iterations: 22674\ncpu: 30.84467425244773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.686570671920304,
            "unit": "us/iter",
            "extra": "iterations: 22845\ncpu: 30.68197307944843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.99793066357736,
            "unit": "us/iter",
            "extra": "iterations: 24172\ncpu: 28.99642607148763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 28.426732195456555,
            "unit": "us/iter",
            "extra": "iterations: 24783\ncpu: 28.424101077351384 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 705.2926014056432,
            "unit": "us/iter",
            "extra": "iterations: 996\ncpu: 705.2626646586341 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 132.19835774807405,
            "unit": "us/iter",
            "extra": "iterations: 5311\ncpu: 132.1908188665035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 79.34606948640463,
            "unit": "us/iter",
            "extra": "iterations: 8606\ncpu: 79.34354729258656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 67.69666666666699,
            "unit": "us/iter",
            "extra": "iterations: 10251\ncpu: 67.69317051994919 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 68.54240212744699,
            "unit": "us/iter",
            "extra": "iterations: 10059\ncpu: 68.5382589720646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 65.1491847725178,
            "unit": "us/iter",
            "extra": "iterations: 10770\ncpu: 65.14772887650868 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 67.68590613718177,
            "unit": "us/iter",
            "extra": "iterations: 10249\ncpu: 67.68415796663089 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4048.3717630057317,
            "unit": "us/iter",
            "extra": "iterations: 173\ncpu: 4048.1431271676392 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 951.3688917456151,
            "unit": "us/iter",
            "extra": "iterations: 739\ncpu: 951.3200202977024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 635.5470018066762,
            "unit": "us/iter",
            "extra": "iterations: 1107\ncpu: 635.4512366756982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 532.304883067582,
            "unit": "us/iter",
            "extra": "iterations: 1317\ncpu: 532.2774426727407 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 504.45175432276,
            "unit": "us/iter",
            "extra": "iterations: 1388\ncpu: 504.3958443804011 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 472.52749830966684,
            "unit": "us/iter",
            "extra": "iterations: 1479\ncpu: 472.50977349560674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 459.2693489137528,
            "unit": "us/iter",
            "extra": "iterations: 1519\ncpu: 459.22435549703897 us\nthreads: 1"
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
            "value": 32.66687372909221,
            "unit": "us/iter",
            "extra": "iterations: 21343\ncpu: 32.66463383779223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 11.649730832516155,
            "unit": "us/iter",
            "extra": "iterations: 60167\ncpu: 11.648765502684206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 9.575805586853203,
            "unit": "us/iter",
            "extra": "iterations: 72778\ncpu: 9.575532523564807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 7.953861671897226,
            "unit": "us/iter",
            "extra": "iterations: 80938\ncpu: 7.953355296646836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 7.882663605699544,
            "unit": "us/iter",
            "extra": "iterations: 88643\ncpu: 7.882456099184391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 7.376092702190465,
            "unit": "us/iter",
            "extra": "iterations: 94960\ncpu: 7.375475558129739 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 7.189260603320837,
            "unit": "us/iter",
            "extra": "iterations: 97328\ncpu: 7.188400337004765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 184.92292679703937,
            "unit": "us/iter",
            "extra": "iterations: 3784\ncpu: 184.9121746828749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 60.62590939742398,
            "unit": "us/iter",
            "extra": "iterations: 11567\ncpu: 60.62220956168417 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 49.82711033013956,
            "unit": "us/iter",
            "extra": "iterations: 14085\ncpu: 49.82522016329414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 41.96947074036139,
            "unit": "us/iter",
            "extra": "iterations: 16627\ncpu: 41.966018042942174 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 41.5642177759308,
            "unit": "us/iter",
            "extra": "iterations: 16843\ncpu: 41.56276227512887 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 39.2557431310269,
            "unit": "us/iter",
            "extra": "iterations: 17943\ncpu: 39.25279886306658 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 38.64966410949885,
            "unit": "us/iter",
            "extra": "iterations: 18119\ncpu: 38.64628141729682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 411.66359823528313,
            "unit": "us/iter",
            "extra": "iterations: 1700\ncpu: 411.6248847058803 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 127.64997166362042,
            "unit": "us/iter",
            "extra": "iterations: 5470\ncpu: 127.64600365630747 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 99.68391741935483,
            "unit": "us/iter",
            "extra": "iterations: 6975\ncpu: 99.67497792114635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 84.97250408685971,
            "unit": "us/iter",
            "extra": "iterations: 8197\ncpu: 84.9686005855804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 84.47878584370099,
            "unit": "us/iter",
            "extra": "iterations: 8279\ncpu: 84.47018649595364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 79.98362411831722,
            "unit": "us/iter",
            "extra": "iterations: 8790\ncpu: 79.98071956769085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 78.33710002239977,
            "unit": "us/iter",
            "extra": "iterations: 8928\ncpu: 78.33574395161244 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2179.8389781931173,
            "unit": "us/iter",
            "extra": "iterations: 321\ncpu: 2179.771305295933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 741.1578702531698,
            "unit": "us/iter",
            "extra": "iterations: 948\ncpu: 741.129655063293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 580.5256558603438,
            "unit": "us/iter",
            "extra": "iterations: 1203\ncpu: 580.4486508728172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 472.5800661268655,
            "unit": "us/iter",
            "extra": "iterations: 1482\ncpu: 472.55812753036423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 453.8036683937717,
            "unit": "us/iter",
            "extra": "iterations: 1544\ncpu: 453.78427396372814 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 424.6499284414847,
            "unit": "us/iter",
            "extra": "iterations: 1649\ncpu: 424.6380363856874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 414.49569887374173,
            "unit": "us/iter",
            "extra": "iterations: 1687\ncpu: 414.46011321873044 us\nthreads: 1"
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