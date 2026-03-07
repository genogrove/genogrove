window.BENCHMARK_DATA = {
  "lastUpdate": 1772851948724,
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
          "id": "bec08089502f16590f4476b5fa32455efd3942e2",
          "message": "Merge pull request #206 from genogrove/fix/value-lookup-linear-scan-164\n\nFix O(n) linear scan in value_lookup(), add reverse map to index_registry",
          "timestamp": "2026-03-04T18:57:22-06:00",
          "tree_id": "cf0883ee1ceb940b17e5fe363210e740c6f124d9",
          "url": "https://github.com/genogrove/genogrove/commit/bec08089502f16590f4476b5fa32455efd3942e2"
        },
        "date": 1772672468809,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 39.851496239334125,
            "unit": "us/iter",
            "extra": "iterations: 17816\ncpu: 39.84979288280198 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.779650509532482,
            "unit": "us/iter",
            "extra": "iterations: 79779\ncpu: 8.779401910277139 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.944385589699148,
            "unit": "us/iter",
            "extra": "iterations: 119137\ncpu: 5.943873053711273 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.062329575855852,
            "unit": "us/iter",
            "extra": "iterations: 138302\ncpu: 5.062050635565644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.921296510236841,
            "unit": "us/iter",
            "extra": "iterations: 146285\ncpu: 4.920983053628193 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.663498328642833,
            "unit": "us/iter",
            "extra": "iterations: 151374\ncpu: 4.663349472168275 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.398142562749279,
            "unit": "us/iter",
            "extra": "iterations: 159165\ncpu: 4.397983256369179 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 323.1121273062774,
            "unit": "us/iter",
            "extra": "iterations: 2168\ncpu: 323.0775940959405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 48.097090984342124,
            "unit": "us/iter",
            "extra": "iterations: 14497\ncpu: 48.09413161343726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 32.909027501577114,
            "unit": "us/iter",
            "extra": "iterations: 20617\ncpu: 32.906922345637106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 27.71213456557604,
            "unit": "us/iter",
            "extra": "iterations: 25482\ncpu: 27.71146087434269 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 27.623563336726527,
            "unit": "us/iter",
            "extra": "iterations: 25546\ncpu: 27.621236005636934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.940494208064084,
            "unit": "us/iter",
            "extra": "iterations: 26934\ncpu: 25.938946944382554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.312497251647347,
            "unit": "us/iter",
            "extra": "iterations: 27471\ncpu: 25.310587383058476 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 717.46579815575,
            "unit": "us/iter",
            "extra": "iterations: 976\ncpu: 717.4225420081973 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 128.88052208611313,
            "unit": "us/iter",
            "extra": "iterations: 5388\ncpu: 128.86866109873816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.45515484939563,
            "unit": "us/iter",
            "extra": "iterations: 9661\ncpu: 71.4478560190456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.38809793263318,
            "unit": "us/iter",
            "extra": "iterations: 11222\ncpu: 60.38506460523967 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.140821052632056,
            "unit": "us/iter",
            "extra": "iterations: 11020\ncpu: 63.1344108892923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.171692779961,
            "unit": "us/iter",
            "extra": "iterations: 12216\ncpu: 59.164793876882854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.76958598324392,
            "unit": "us/iter",
            "extra": "iterations: 11101\ncpu: 62.76818872173683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4101.07230994149,
            "unit": "us/iter",
            "extra": "iterations: 171\ncpu: 4100.862491228069 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 946.342632432458,
            "unit": "us/iter",
            "extra": "iterations: 740\ncpu: 946.3152932432441 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 619.0170106666908,
            "unit": "us/iter",
            "extra": "iterations: 1125\ncpu: 618.9020755555564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 509.1666802030556,
            "unit": "us/iter",
            "extra": "iterations: 1379\ncpu: 509.1014111675144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 481.74502415459074,
            "unit": "us/iter",
            "extra": "iterations: 1449\ncpu: 481.6655327812286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 449.2253785347152,
            "unit": "us/iter",
            "extra": "iterations: 1556\ncpu: 449.2068997429309 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 436.9998929912378,
            "unit": "us/iter",
            "extra": "iterations: 1598\ncpu: 436.9632803504378 us\nthreads: 1"
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
            "value": 30.430790993072144,
            "unit": "us/iter",
            "extra": "iterations: 22516\ncpu: 30.424749644697183 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 10.460976058602837,
            "unit": "us/iter",
            "extra": "iterations: 67164\ncpu: 10.460227026383164 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 8.303096317785718,
            "unit": "us/iter",
            "extra": "iterations: 84107\ncpu: 8.30251908877978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.700019598626233,
            "unit": "us/iter",
            "extra": "iterations: 104242\ncpu: 6.699136749103031 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 6.6358429860383925,
            "unit": "us/iter",
            "extra": "iterations: 105290\ncpu: 6.634923459017958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 6.109852162211837,
            "unit": "us/iter",
            "extra": "iterations: 114443\ncpu: 6.1096495635382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.942451082038672,
            "unit": "us/iter",
            "extra": "iterations: 118249\ncpu: 5.941708699439349 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 183.2674833714176,
            "unit": "us/iter",
            "extra": "iterations: 3939\ncpu: 183.25115892358497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 54.47546519457987,
            "unit": "us/iter",
            "extra": "iterations: 12771\ncpu: 54.470954428001384 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 43.256093011749165,
            "unit": "us/iter",
            "extra": "iterations: 16170\ncpu: 43.25533265306127 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 36.1606635954229,
            "unit": "us/iter",
            "extra": "iterations: 19319\ncpu: 36.157410683782885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 35.376595076486716,
            "unit": "us/iter",
            "extra": "iterations: 19742\ncpu: 35.37610931010009 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 33.13043925631464,
            "unit": "us/iter",
            "extra": "iterations: 21138\ncpu: 33.127835887974335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 32.44171034899369,
            "unit": "us/iter",
            "extra": "iterations: 21519\ncpu: 32.44058687671354 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 401.3093120689661,
            "unit": "us/iter",
            "extra": "iterations: 1740\ncpu: 401.29175632183876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 115.06999787163984,
            "unit": "us/iter",
            "extra": "iterations: 6108\ncpu: 115.06835183366027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 80.83560853596582,
            "unit": "us/iter",
            "extra": "iterations: 7896\ncpu: 80.82784827760894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 73.30052790231859,
            "unit": "us/iter",
            "extra": "iterations: 10483\ncpu: 73.2958927787847 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 66.41517736083858,
            "unit": "us/iter",
            "extra": "iterations: 9647\ncpu: 66.41208531149618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 67.6288072452529,
            "unit": "us/iter",
            "extra": "iterations: 10324\ncpu: 67.62488115071694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 65.55101076980687,
            "unit": "us/iter",
            "extra": "iterations: 10678\ncpu: 65.54952341262391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2114.0834833837116,
            "unit": "us/iter",
            "extra": "iterations: 331\ncpu: 2113.8352265860985 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 675.5418992322376,
            "unit": "us/iter",
            "extra": "iterations: 1042\ncpu: 675.4945710172715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 521.9764456035932,
            "unit": "us/iter",
            "extra": "iterations: 1342\ncpu: 521.9158837555924 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 413.4153886925797,
            "unit": "us/iter",
            "extra": "iterations: 1698\ncpu: 413.38918669022155 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 394.1089644469617,
            "unit": "us/iter",
            "extra": "iterations: 1772\ncpu: 394.06508069977735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 363.98385295508274,
            "unit": "us/iter",
            "extra": "iterations: 2115\ncpu: 363.96751867612363 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 320.38345032778784,
            "unit": "us/iter",
            "extra": "iterations: 1983\ncpu: 320.35288552698177 us\nthreads: 1"
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
          "id": "60ab23c2c8930dc862c5dd1b3212ca0db2d9b135",
          "message": "Merge pull request #207 from genogrove/perf/grove-transparent-hash-165\n\nEliminate std::string allocations on grove map lookups",
          "timestamp": "2026-03-04T19:24:42-06:00",
          "tree_id": "44650964bcd90b7d66fc2d66f2dce9e4b4c3fc4e",
          "url": "https://github.com/genogrove/genogrove/commit/60ab23c2c8930dc862c5dd1b3212ca0db2d9b135"
        },
        "date": 1772674110603,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 41.043493442998845,
            "unit": "us/iter",
            "extra": "iterations: 17386\ncpu: 41.02828948579317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.442396446135835,
            "unit": "us/iter",
            "extra": "iterations: 74623\ncpu: 9.441196346970772 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.285699488514134,
            "unit": "us/iter",
            "extra": "iterations: 111440\ncpu: 6.285096527279258 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.542777807501391,
            "unit": "us/iter",
            "extra": "iterations: 127097\ncpu: 5.542305144889336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.986798055497669,
            "unit": "us/iter",
            "extra": "iterations: 139573\ncpu: 4.986456191383722 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 5.0784922950599025,
            "unit": "us/iter",
            "extra": "iterations: 141273\ncpu: 5.078083441280355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.692451164871436,
            "unit": "us/iter",
            "extra": "iterations: 145295\ncpu: 4.692062238893283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 312.7720040106964,
            "unit": "us/iter",
            "extra": "iterations: 2244\ncpu: 312.75586497326213 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 51.380612083612235,
            "unit": "us/iter",
            "extra": "iterations: 13539\ncpu: 51.37422394563848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 36.78111619217983,
            "unit": "us/iter",
            "extra": "iterations: 19003\ncpu: 36.77826585276012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 31.442630358176388,
            "unit": "us/iter",
            "extra": "iterations: 22419\ncpu: 31.44075052410905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.990740134061273,
            "unit": "us/iter",
            "extra": "iterations: 22527\ncpu: 30.988075553779925 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 30.315942385941284,
            "unit": "us/iter",
            "extra": "iterations: 23102\ncpu: 30.31449649381005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 30.268291261303144,
            "unit": "us/iter",
            "extra": "iterations: 23333\ncpu: 30.265664723781818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 719.1619270297997,
            "unit": "us/iter",
            "extra": "iterations: 973\ncpu: 719.0973812949642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 136.63400409676527,
            "unit": "us/iter",
            "extra": "iterations: 5126\ncpu: 136.61645591104198 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 80.94226044110808,
            "unit": "us/iter",
            "extra": "iterations: 8524\ncpu: 80.9349912013141 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 70.96390101549228,
            "unit": "us/iter",
            "extra": "iterations: 9749\ncpu: 70.95320217458182 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 73.8952675712903,
            "unit": "us/iter",
            "extra": "iterations: 9433\ncpu: 73.88628781935759 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 68.8663435039349,
            "unit": "us/iter",
            "extra": "iterations: 10160\ncpu: 68.86037480314948 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 72.9514207480893,
            "unit": "us/iter",
            "extra": "iterations: 9678\ncpu: 72.94589791279172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4106.050894736585,
            "unit": "us/iter",
            "extra": "iterations: 171\ncpu: 4105.575280701764 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 985.5700451977507,
            "unit": "us/iter",
            "extra": "iterations: 708\ncpu: 985.5284745762746 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 660.6707672658915,
            "unit": "us/iter",
            "extra": "iterations: 1057\ncpu: 660.483271523178 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 560.8407379421349,
            "unit": "us/iter",
            "extra": "iterations: 1244\ncpu: 560.7909437299029 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 539.622753266727,
            "unit": "us/iter",
            "extra": "iterations: 1301\ncpu: 539.551444273635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 515.177538235304,
            "unit": "us/iter",
            "extra": "iterations: 1360\ncpu: 515.133500735294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 502.52102650432477,
            "unit": "us/iter",
            "extra": "iterations: 1396\ncpu: 502.4789319484239 us\nthreads: 1"
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
            "value": 31.868384390287027,
            "unit": "us/iter",
            "extra": "iterations: 21871\ncpu: 31.86451936354079 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.914461759891934,
            "unit": "us/iter",
            "extra": "iterations: 70868\ncpu: 9.913485578822597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.755084918373202,
            "unit": "us/iter",
            "extra": "iterations: 90534\ncpu: 7.754485872710834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.22597931132984,
            "unit": "us/iter",
            "extra": "iterations: 112042\ncpu: 6.225334517413129 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 6.24142589967326,
            "unit": "us/iter",
            "extra": "iterations: 113569\ncpu: 6.241304907148954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 5.630896845860903,
            "unit": "us/iter",
            "extra": "iterations: 123330\ncpu: 5.630279907565071 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.408081261389222,
            "unit": "us/iter",
            "extra": "iterations: 129508\ncpu: 5.407764400654786 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 180.88829992249796,
            "unit": "us/iter",
            "extra": "iterations: 3871\ncpu: 180.86980185998488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 52.0253259846041,
            "unit": "us/iter",
            "extra": "iterations: 13381\ncpu: 52.02287467304376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 40.73167659376544,
            "unit": "us/iter",
            "extra": "iterations: 17192\ncpu: 40.72770282689588 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 33.785886489879836,
            "unit": "us/iter",
            "extra": "iterations: 20703\ncpu: 33.78237139544979 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 33.92986748436775,
            "unit": "us/iter",
            "extra": "iterations: 20790\ncpu: 33.9271767676769 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 31.011788404249877,
            "unit": "us/iter",
            "extra": "iterations: 22491\ncpu: 31.010049486461035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 30.467417841801943,
            "unit": "us/iter",
            "extra": "iterations: 23047\ncpu: 30.463989239380293 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 406.2632229965157,
            "unit": "us/iter",
            "extra": "iterations: 1722\ncpu: 406.22769105690855 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 111.71603160919422,
            "unit": "us/iter",
            "extra": "iterations: 6264\ncpu: 111.70302442528813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 81.90025565318963,
            "unit": "us/iter",
            "extra": "iterations: 8535\ncpu: 81.89316813122426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 68.65078609729612,
            "unit": "us/iter",
            "extra": "iterations: 10257\ncpu: 68.64650141366906 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 68.55307862962958,
            "unit": "us/iter",
            "extra": "iterations: 10187\ncpu: 68.54838588396976 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 62.99551212720057,
            "unit": "us/iter",
            "extra": "iterations: 11132\ncpu: 62.992066924182495 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 61.3900632138777,
            "unit": "us/iter",
            "extra": "iterations: 11469\ncpu: 61.38632661958342 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2139.718539634139,
            "unit": "us/iter",
            "extra": "iterations: 328\ncpu: 2139.508533536597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 658.1076492048784,
            "unit": "us/iter",
            "extra": "iterations: 1069\ncpu: 658.0751375116924 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 492.6686370683925,
            "unit": "us/iter",
            "extra": "iterations: 1419\ncpu: 492.63554686399175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 386.89905752212866,
            "unit": "us/iter",
            "extra": "iterations: 1808\ncpu: 386.8382068584075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 376.92870556747243,
            "unit": "us/iter",
            "extra": "iterations: 1868\ncpu: 376.8884507494638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 338.0138944821009,
            "unit": "us/iter",
            "extra": "iterations: 2066\ncpu: 337.9654240077437 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 333.0035135767835,
            "unit": "us/iter",
            "extra": "iterations: 2136\ncpu: 332.9743520599268 us\nthreads: 1"
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
          "id": "b930239bc469d8d7ed8a0e11fdfebd7b94e059c4",
          "message": "Merge pull request #208 from genogrove/perf/replace-stringstream-tokenizer-167\n\nReplace std::stringstream with zero-copy tab tokenizer in BED/GFF readers",
          "timestamp": "2026-03-04T20:32:54-06:00",
          "tree_id": "91831b219abc903ac9de7f673032f34e772851ba",
          "url": "https://github.com/genogrove/genogrove/commit/b930239bc469d8d7ed8a0e11fdfebd7b94e059c4"
        },
        "date": 1772678203216,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 41.04309335433738,
            "unit": "us/iter",
            "extra": "iterations: 17139\ncpu: 41.030582472723026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.345785702357693,
            "unit": "us/iter",
            "extra": "iterations: 71858\ncpu: 9.343029655709874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 6.2065155194377475,
            "unit": "us/iter",
            "extra": "iterations: 113825\ncpu: 6.205197900285524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 5.455530703598007,
            "unit": "us/iter",
            "extra": "iterations: 128454\ncpu: 5.455106684104816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.914829650312389,
            "unit": "us/iter",
            "extra": "iterations: 142184\ncpu: 4.914519516963933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.917002334502057,
            "unit": "us/iter",
            "extra": "iterations: 109231\ncpu: 4.916817368695703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.640460801474502,
            "unit": "us/iter",
            "extra": "iterations: 150822\ncpu: 4.640315623715373 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 310.7804734278107,
            "unit": "us/iter",
            "extra": "iterations: 2258\ncpu: 310.7610890168289 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 51.42299660766871,
            "unit": "us/iter",
            "extra": "iterations: 13560\ncpu: 51.418988126843566 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 37.07227290015814,
            "unit": "us/iter",
            "extra": "iterations: 18930\ncpu: 37.06879107237192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 31.409915151788258,
            "unit": "us/iter",
            "extra": "iterations: 22169\ncpu: 31.408545175695785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 30.96474787636198,
            "unit": "us/iter",
            "extra": "iterations: 22485\ncpu: 30.962804313987178 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 30.533865935114296,
            "unit": "us/iter",
            "extra": "iterations: 23056\ncpu: 30.532079805690426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 30.77332608983183,
            "unit": "us/iter",
            "extra": "iterations: 22687\ncpu: 30.771177767003135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 715.6015224948783,
            "unit": "us/iter",
            "extra": "iterations: 978\ncpu: 715.5216758691216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 134.34074634615237,
            "unit": "us/iter",
            "extra": "iterations: 5200\ncpu: 134.32195134615398 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 80.70748950224126,
            "unit": "us/iter",
            "extra": "iterations: 8478\ncpu: 80.69948443029008 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 71.17204194011566,
            "unit": "us/iter",
            "extra": "iterations: 9752\ncpu: 71.16343211648922 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 73.14211909005121,
            "unit": "us/iter",
            "extra": "iterations: 9539\ncpu: 73.13657207254401 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 68.55466518159757,
            "unit": "us/iter",
            "extra": "iterations: 10325\ncpu: 68.54808319612587 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 70.9019496454637,
            "unit": "us/iter",
            "extra": "iterations: 9731\ncpu: 70.89328445175187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4135.373349112519,
            "unit": "us/iter",
            "extra": "iterations: 169\ncpu: 4134.728917159763 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 985.3602766854024,
            "unit": "us/iter",
            "extra": "iterations: 712\ncpu: 985.1064396067402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 672.2572107795964,
            "unit": "us/iter",
            "extra": "iterations: 1039\ncpu: 672.0499403272369 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 559.2180613545798,
            "unit": "us/iter",
            "extra": "iterations: 1255\ncpu: 559.1587219123505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 548.7228337182418,
            "unit": "us/iter",
            "extra": "iterations: 1299\ncpu: 548.6927844495789 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 514.393242112994,
            "unit": "us/iter",
            "extra": "iterations: 1363\ncpu: 514.3675289801928 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 498.27394868140254,
            "unit": "us/iter",
            "extra": "iterations: 1403\ncpu: 498.25547042052847 us\nthreads: 1"
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
            "value": 31.336081280457577,
            "unit": "us/iter",
            "extra": "iterations: 22367\ncpu: 31.334573165824796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 9.828819754987782,
            "unit": "us/iter",
            "extra": "iterations: 71425\ncpu: 9.828502667133318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 7.891687405108733,
            "unit": "us/iter",
            "extra": "iterations: 90235\ncpu: 7.88647382944533 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 6.242522565571813,
            "unit": "us/iter",
            "extra": "iterations: 113425\ncpu: 6.2421867048710595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 6.222501837579387,
            "unit": "us/iter",
            "extra": "iterations: 112104\ncpu: 6.222212293941338 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 5.711125668492541,
            "unit": "us/iter",
            "extra": "iterations: 123038\ncpu: 5.710861034802243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 5.440304488199309,
            "unit": "us/iter",
            "extra": "iterations: 128849\ncpu: 5.439880356075722 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 180.58826547988068,
            "unit": "us/iter",
            "extra": "iterations: 3876\ncpu: 180.5745203818362 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 51.98678759482468,
            "unit": "us/iter",
            "extra": "iterations: 13446\ncpu: 51.98345760821056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 40.582192736466325,
            "unit": "us/iter",
            "extra": "iterations: 17402\ncpu: 40.58035582116995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 33.66262313505059,
            "unit": "us/iter",
            "extra": "iterations: 20644\ncpu: 33.6583640282889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 33.509521862115,
            "unit": "us/iter",
            "extra": "iterations: 20858\ncpu: 33.50726148240475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 30.85502088680462,
            "unit": "us/iter",
            "extra": "iterations: 22598\ncpu: 30.853269846889024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 30.06283389552003,
            "unit": "us/iter",
            "extra": "iterations: 23124\ncpu: 30.061339647120146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 404.5770559400283,
            "unit": "us/iter",
            "extra": "iterations: 1734\ncpu: 404.55973587081917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 111.17726233683669,
            "unit": "us/iter",
            "extra": "iterations: 6282\ncpu: 111.17219165870766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 81.89294426074491,
            "unit": "us/iter",
            "extra": "iterations: 8468\ncpu: 81.88935285781781 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 68.83334931708801,
            "unit": "us/iter",
            "extra": "iterations: 10177\ncpu: 68.82946172742454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 68.86724621324869,
            "unit": "us/iter",
            "extra": "iterations: 10101\ncpu: 68.86474844074895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 63.04341271989283,
            "unit": "us/iter",
            "extra": "iterations: 11085\ncpu: 63.04100162381594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 61.425556681054445,
            "unit": "us/iter",
            "extra": "iterations: 11353\ncpu: 61.42233700343547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2151.1038103975266,
            "unit": "us/iter",
            "extra": "iterations: 327\ncpu: 2150.8720672782943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 658.7661433926892,
            "unit": "us/iter",
            "extra": "iterations: 1067\ncpu: 658.7274686035573 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 495.2314080622199,
            "unit": "us/iter",
            "extra": "iterations: 1414\ncpu: 495.19950353606896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 389.3786068660109,
            "unit": "us/iter",
            "extra": "iterations: 1806\ncpu: 389.36352823920305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 375.7297482555044,
            "unit": "us/iter",
            "extra": "iterations: 1863\ncpu: 375.7167037037024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 340.07243058253545,
            "unit": "us/iter",
            "extra": "iterations: 2060\ncpu: 340.058189805824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 327.75556364490956,
            "unit": "us/iter",
            "extra": "iterations: 2129\ncpu: 327.73476890559016 us\nthreads: 1"
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
          "id": "76adb6504a33982ec02eebc12bf06df7189554dd",
          "message": "Merge pull request #209 from genogrove/fix/rightmost-nodes-linear-scan-170\n\nReplace O(n) rightmost-node scan in split_node() with O(1) lookup",
          "timestamp": "2026-03-04T21:04:10-06:00",
          "tree_id": "7efa9e1f9e882e6adb0e6bf03a2e744b4918d7eb",
          "url": "https://github.com/genogrove/genogrove/commit/76adb6504a33982ec02eebc12bf06df7189554dd"
        },
        "date": 1772680086462,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 40.643730809737654,
            "unit": "us/iter",
            "extra": "iterations: 17092\ncpu: 40.642225544114204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 9.238866431854277,
            "unit": "us/iter",
            "extra": "iterations: 76373\ncpu: 9.237171906301965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.852282106062954,
            "unit": "us/iter",
            "extra": "iterations: 118420\ncpu: 5.851406282722513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.9877520170365806,
            "unit": "us/iter",
            "extra": "iterations: 139933\ncpu: 4.987612007174864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.572224803162714,
            "unit": "us/iter",
            "extra": "iterations: 153045\ncpu: 4.572104276519977 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.52938095114987,
            "unit": "us/iter",
            "extra": "iterations: 154697\ncpu: 4.528980678358339 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 4.295431223788667,
            "unit": "us/iter",
            "extra": "iterations: 163574\ncpu: 4.295204659664738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 322.1224053308896,
            "unit": "us/iter",
            "extra": "iterations: 2176\ncpu: 322.09150091911727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 52.789110502700616,
            "unit": "us/iter",
            "extra": "iterations: 13149\ncpu: 52.785263213932694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 35.596173437820696,
            "unit": "us/iter",
            "extra": "iterations: 19396\ncpu: 35.593703856465254 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 29.514674890350324,
            "unit": "us/iter",
            "extra": "iterations: 23712\ncpu: 29.5132400894062 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 29.513159396899592,
            "unit": "us/iter",
            "extra": "iterations: 23545\ncpu: 29.5107151836908 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 28.261158115859864,
            "unit": "us/iter",
            "extra": "iterations: 24754\ncpu: 28.258733820796635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 27.3884209027269,
            "unit": "us/iter",
            "extra": "iterations: 25279\ncpu: 27.38640895605046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 735.4989989506769,
            "unit": "us/iter",
            "extra": "iterations: 953\ncpu: 735.4708226652666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 147.32950116401523,
            "unit": "us/iter",
            "extra": "iterations: 4725\ncpu: 147.32240910052926 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 82.4736860256267,
            "unit": "us/iter",
            "extra": "iterations: 8351\ncpu: 82.4706788408574 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 69.27754082863996,
            "unit": "us/iter",
            "extra": "iterations: 9944\ncpu: 69.27237298873692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 70.48765983898411,
            "unit": "us/iter",
            "extra": "iterations: 9813\ncpu: 70.48211444002851 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 66.92027213968849,
            "unit": "us/iter",
            "extra": "iterations: 10366\ncpu: 66.91429741462463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 68.46559885645706,
            "unit": "us/iter",
            "extra": "iterations: 9969\ncpu: 68.46343926171143 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4192.411281437017,
            "unit": "us/iter",
            "extra": "iterations: 167\ncpu: 4192.31806586825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 1017.6396088824905,
            "unit": "us/iter",
            "extra": "iterations: 698\ncpu: 1016.8682650429799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 676.827256038692,
            "unit": "us/iter",
            "extra": "iterations: 1035\ncpu: 676.7658589371982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 553.5225925632745,
            "unit": "us/iter",
            "extra": "iterations: 1264\ncpu: 553.4800609177216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 526.9690744361147,
            "unit": "us/iter",
            "extra": "iterations: 1330\ncpu: 526.9210105263143 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 489.04461834733263,
            "unit": "us/iter",
            "extra": "iterations: 1428\ncpu: 489.01292436974654 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 477.22535636115674,
            "unit": "us/iter",
            "extra": "iterations: 1462\ncpu: 477.18996922024684 us\nthreads: 1"
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
            "value": 30.21852859671158,
            "unit": "us/iter",
            "extra": "iterations: 23167\ncpu: 30.215724478784608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 8.705737679192032,
            "unit": "us/iter",
            "extra": "iterations: 80291\ncpu: 8.704908495348196 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 6.611371464123858,
            "unit": "us/iter",
            "extra": "iterations: 105278\ncpu: 6.610895552727065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 5.193749050164945,
            "unit": "us/iter",
            "extra": "iterations: 134497\ncpu: 5.193512598794027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 5.356226010849408,
            "unit": "us/iter",
            "extra": "iterations: 131622\ncpu: 5.355812896020408 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 4.727757078775619,
            "unit": "us/iter",
            "extra": "iterations: 148472\ncpu: 4.727443585322476 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 4.450309784717062,
            "unit": "us/iter",
            "extra": "iterations: 157235\ncpu: 4.449987693579651 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 174.8686230942297,
            "unit": "us/iter",
            "extra": "iterations: 4001\ncpu: 174.85485553611488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 46.441281830154544,
            "unit": "us/iter",
            "extra": "iterations: 15190\ncpu: 46.43864990125065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 35.79496578705169,
            "unit": "us/iter",
            "extra": "iterations: 19554\ncpu: 35.79167873580826 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 28.90765412691603,
            "unit": "us/iter",
            "extra": "iterations: 24110\ncpu: 28.906338656159274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 29.165106922722025,
            "unit": "us/iter",
            "extra": "iterations: 23849\ncpu: 29.162337330705842 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 26.512145889810384,
            "unit": "us/iter",
            "extra": "iterations: 26191\ncpu: 26.510731854453702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 25.768568717759017,
            "unit": "us/iter",
            "extra": "iterations: 27140\ncpu: 25.765864075165904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 394.8826452340724,
            "unit": "us/iter",
            "extra": "iterations: 1773\ncpu: 394.8602870840358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 100.15479426523741,
            "unit": "us/iter",
            "extra": "iterations: 6975\ncpu: 100.14442293906808 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 70.91328173342856,
            "unit": "us/iter",
            "extra": "iterations: 9761\ncpu: 70.90723942219049 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 58.3533459161527,
            "unit": "us/iter",
            "extra": "iterations: 11974\ncpu: 58.3499233338904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 59.06868715369812,
            "unit": "us/iter",
            "extra": "iterations: 11731\ncpu: 59.064168613076376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 53.31830826552938,
            "unit": "us/iter",
            "extra": "iterations: 13151\ncpu: 53.31566474032416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 51.681514591008714,
            "unit": "us/iter",
            "extra": "iterations: 13570\ncpu: 51.67668459837911 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 2125.5961077844822,
            "unit": "us/iter",
            "extra": "iterations: 334\ncpu: 2125.457128742523 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 602.568253424663,
            "unit": "us/iter",
            "extra": "iterations: 1168\ncpu: 602.5441780821944 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 441.6487121212003,
            "unit": "us/iter",
            "extra": "iterations: 1584\ncpu: 441.6184696969676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 339.05566602036436,
            "unit": "us/iter",
            "extra": "iterations: 2063\ncpu: 339.00890014541994 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 338.48348533584493,
            "unit": "us/iter",
            "extra": "iterations: 2114\ncpu: 338.4535771050122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 293.6985891440482,
            "unit": "us/iter",
            "extra": "iterations: 2395\ncpu: 293.67544008350956 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 280.9111482966028,
            "unit": "us/iter",
            "extra": "iterations: 2495\ncpu: 280.8915494989964 us\nthreads: 1"
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
          "id": "2fc20b964a637899b5f87ca644af0bfae682e2e8",
          "message": "Merge pull request #210 from genogrove/perf/aggregate-pairwise-fold-168\n\nReplace aggregate(span) with pairwise aggregate(a, b)",
          "timestamp": "2026-03-04T22:15:42-06:00",
          "tree_id": "40e1414697b1fde7b2604736c56f46f894d3782e",
          "url": "https://github.com/genogrove/genogrove/commit/2fc20b964a637899b5f87ca644af0bfae682e2e8"
        },
        "date": 1772684368573,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 35.64596999593194,
            "unit": "us/iter",
            "extra": "iterations: 19664\ncpu: 35.64199323637103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.73457727077528,
            "unit": "us/iter",
            "extra": "iterations: 90817\ncpu: 7.7323232764790735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.284080066948667,
            "unit": "us/iter",
            "extra": "iterations: 132639\ncpu: 5.283460897624379 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.328324871210542,
            "unit": "us/iter",
            "extra": "iterations: 161504\ncpu: 4.3279772822964135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.001571999361571,
            "unit": "us/iter",
            "extra": "iterations: 175446\ncpu: 4.0014174275845535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8740152389595837,
            "unit": "us/iter",
            "extra": "iterations: 180721\ncpu: 3.8733370941949192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7007276297454608,
            "unit": "us/iter",
            "extra": "iterations: 189448\ncpu: 3.700336266416116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 276.4117501963802,
            "unit": "us/iter",
            "extra": "iterations: 2546\ncpu: 276.37479929300895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.54816283394263,
            "unit": "us/iter",
            "extra": "iterations: 16133\ncpu: 43.545505423665674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.826578046947244,
            "unit": "us/iter",
            "extra": "iterations: 22621\ncpu: 30.825378144202297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.67302752360781,
            "unit": "us/iter",
            "extra": "iterations: 27322\ncpu: 25.670021777322297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.98648868878534,
            "unit": "us/iter",
            "extra": "iterations: 27097\ncpu: 25.984983429900016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.645846845227343,
            "unit": "us/iter",
            "extra": "iterations: 27815\ncpu: 24.642520186949437 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.6641256551824,
            "unit": "us/iter",
            "extra": "iterations: 28618\ncpu: 24.661466035362377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 633.2531301989192,
            "unit": "us/iter",
            "extra": "iterations: 1106\ncpu: 633.1714909584084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 119.35844781491186,
            "unit": "us/iter",
            "extra": "iterations: 5835\ncpu: 119.33636469580124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.57530691244243,
            "unit": "us/iter",
            "extra": "iterations: 9765\ncpu: 71.57259324116741 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.05032912502349,
            "unit": "us/iter",
            "extra": "iterations: 11406\ncpu: 61.03968463966318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.19405344482778,
            "unit": "us/iter",
            "extra": "iterations: 11002\ncpu: 62.18741810579879 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.35951748371407,
            "unit": "us/iter",
            "extra": "iterations: 11668\ncpu: 59.35046391840931 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.0649077877804,
            "unit": "us/iter",
            "extra": "iterations: 11441\ncpu: 62.05437304431422 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3662.1021570680587,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3661.9231151832337 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 889.6071696202454,
            "unit": "us/iter",
            "extra": "iterations: 790\ncpu: 889.478030379748 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 611.3084551002551,
            "unit": "us/iter",
            "extra": "iterations: 1147\ncpu: 611.2602353966865 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.5581221098331,
            "unit": "us/iter",
            "extra": "iterations: 1384\ncpu: 513.4732239884396 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 484.99360084628046,
            "unit": "us/iter",
            "extra": "iterations: 1418\ncpu: 484.9614837799707 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 460.0041824721928,
            "unit": "us/iter",
            "extra": "iterations: 1529\ncpu: 459.96365533028126 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.22075127876343,
            "unit": "us/iter",
            "extra": "iterations: 1564\ncpu: 450.17983439897625 us\nthreads: 1"
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
            "value": 24.91055210556319,
            "unit": "us/iter",
            "extra": "iterations: 28116\ncpu: 24.90587796983917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 7.380999506732643,
            "unit": "us/iter",
            "extra": "iterations: 95283\ncpu: 7.380678578550199 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 5.702363969089896,
            "unit": "us/iter",
            "extra": "iterations: 122678\ncpu: 5.701533388219562 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.544902496099872,
            "unit": "us/iter",
            "extra": "iterations: 153840\ncpu: 4.544524050962045 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 4.569469539240082,
            "unit": "us/iter",
            "extra": "iterations: 153312\ncpu: 4.568907743686082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 4.239115795380317,
            "unit": "us/iter",
            "extra": "iterations: 163953\ncpu: 4.238666276310862 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.939040285786746,
            "unit": "us/iter",
            "extra": "iterations: 177755\ncpu: 3.938593046609097 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.98585388318676,
            "unit": "us/iter",
            "extra": "iterations: 4777\ncpu: 147.60990454259974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 38.26158630952322,
            "unit": "us/iter",
            "extra": "iterations: 18144\ncpu: 38.2559634589947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 29.919498620485445,
            "unit": "us/iter",
            "extra": "iterations: 23559\ncpu: 29.91493993802815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 24.473859324646302,
            "unit": "us/iter",
            "extra": "iterations: 28548\ncpu: 24.471935477091165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 24.64398363408954,
            "unit": "us/iter",
            "extra": "iterations: 27985\ncpu: 24.64211863498319 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 22.44102270249494,
            "unit": "us/iter",
            "extra": "iterations: 31186\ncpu: 22.43796209837738 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 21.647808250100766,
            "unit": "us/iter",
            "extra": "iterations: 32339\ncpu: 21.6462543059465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 334.4101854493575,
            "unit": "us/iter",
            "extra": "iterations: 2103\ncpu: 334.37850927246666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 84.2132093498352,
            "unit": "us/iter",
            "extra": "iterations: 8321\ncpu: 84.20868861915675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 60.227413382378394,
            "unit": "us/iter",
            "extra": "iterations: 11418\ncpu: 60.22000779471034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 49.80867360568498,
            "unit": "us/iter",
            "extra": "iterations: 14075\ncpu: 49.80728646536458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 50.46792002897562,
            "unit": "us/iter",
            "extra": "iterations: 13805\ncpu: 50.46229279246628 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 45.93869824193112,
            "unit": "us/iter",
            "extra": "iterations: 15244\ncpu: 45.93798097612194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 44.22802219559919,
            "unit": "us/iter",
            "extra": "iterations: 15859\ncpu: 44.223286903335676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1828.6149896372874,
            "unit": "us/iter",
            "extra": "iterations: 386\ncpu: 1828.508235751289 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 520.1219564575629,
            "unit": "us/iter",
            "extra": "iterations: 1355\ncpu: 520.0737675276771 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 385.9046133625403,
            "unit": "us/iter",
            "extra": "iterations: 1826\ncpu: 385.88572836801853 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 291.20059957982573,
            "unit": "us/iter",
            "extra": "iterations: 2380\ncpu: 291.178031932773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 284.1947483766228,
            "unit": "us/iter",
            "extra": "iterations: 2464\ncpu: 284.19431696428546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 251.870631522138,
            "unit": "us/iter",
            "extra": "iterations: 2779\ncpu: 251.84493091040028 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 242.15557301807746,
            "unit": "us/iter",
            "extra": "iterations: 2876\ncpu: 242.15251634214147 us\nthreads: 1"
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
          "id": "735cbf35ea0ee165a6d3c5affba3d876f3a320d1",
          "message": "Merge pull request #212 from genogrove/perf/sorted-split-fill-factor-211\n\nFill-factor-aware splits for sorted insertion",
          "timestamp": "2026-03-05T07:39:08-06:00",
          "tree_id": "7b62b6dd3e11cbd1bcd416e76dfd1be535302ca9",
          "url": "https://github.com/genogrove/genogrove/commit/735cbf35ea0ee165a6d3c5affba3d876f3a320d1"
        },
        "date": 1772718193808,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.14999710504638,
            "unit": "us/iter",
            "extra": "iterations: 21762\ncpu: 32.148400974175175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.451236237874079,
            "unit": "us/iter",
            "extra": "iterations: 94117\ncpu: 7.450581457122519 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.069315733260779,
            "unit": "us/iter",
            "extra": "iterations: 139507\ncpu: 5.0688906076397595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.251183294266122,
            "unit": "us/iter",
            "extra": "iterations: 163393\ncpu: 4.251063227922861 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9164689267733808,
            "unit": "us/iter",
            "extra": "iterations: 179962\ncpu: 3.9162410008779682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8400137399686116,
            "unit": "us/iter",
            "extra": "iterations: 180932\ncpu: 3.839631430592709 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.647974868246246,
            "unit": "us/iter",
            "extra": "iterations: 192784\ncpu: 3.6475791196364846 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.7344594698482,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 269.7073991548217 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.80450946044824,
            "unit": "us/iter",
            "extra": "iterations: 16384\ncpu: 42.801172241210956 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.924377975423354,
            "unit": "us/iter",
            "extra": "iterations: 23274\ncpu: 29.922343000773452 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.621365144020277,
            "unit": "us/iter",
            "extra": "iterations: 27496\ncpu: 25.620299934535957 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.453773418324957,
            "unit": "us/iter",
            "extra": "iterations: 27297\ncpu: 25.45238381507128 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.254322952340083,
            "unit": "us/iter",
            "extra": "iterations: 28032\ncpu: 25.25268589469178 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.155103808760597,
            "unit": "us/iter",
            "extra": "iterations: 28697\ncpu: 25.15326668292853 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 625.2014609865536,
            "unit": "us/iter",
            "extra": "iterations: 1115\ncpu: 625.1080331838564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 117.35744828755617,
            "unit": "us/iter",
            "extra": "iterations: 5898\ncpu: 117.35066429298091 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.52463895169646,
            "unit": "us/iter",
            "extra": "iterations: 9730\ncpu: 69.51700966084294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.88081620674674,
            "unit": "us/iter",
            "extra": "iterations: 11415\ncpu: 59.87671703898355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.627645317544015,
            "unit": "us/iter",
            "extra": "iterations: 11148\ncpu: 63.622861948331426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.041203355534485,
            "unit": "us/iter",
            "extra": "iterations: 11861\ncpu: 59.038421633926326 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.38057955438922,
            "unit": "us/iter",
            "extra": "iterations: 11445\ncpu: 60.379211533420715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3639.547776041585,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3639.316026041654 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 890.9337734176985,
            "unit": "us/iter",
            "extra": "iterations: 790\ncpu: 890.8853658227858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 609.6819200000116,
            "unit": "us/iter",
            "extra": "iterations: 1150\ncpu: 609.6367869565216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.8717339118009,
            "unit": "us/iter",
            "extra": "iterations: 1383\ncpu: 516.8269045553168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 483.96852380952964,
            "unit": "us/iter",
            "extra": "iterations: 1449\ncpu: 483.91312146307735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 455.2127725795924,
            "unit": "us/iter",
            "extra": "iterations: 1539\ncpu: 455.1952066276811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 444.32498165718584,
            "unit": "us/iter",
            "extra": "iterations: 1581\ncpu: 444.28764832384434 us\nthreads: 1"
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
            "value": 24.601863996633202,
            "unit": "us/iter",
            "extra": "iterations: 28514\ncpu: 24.600219190573114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.058247551300115,
            "unit": "us/iter",
            "extra": "iterations: 118226\ncpu: 6.057902584879813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.700094286052389,
            "unit": "us/iter",
            "extra": "iterations: 152154\ncpu: 4.699901415670984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9240913099913235,
            "unit": "us/iter",
            "extra": "iterations: 176421\ncpu: 3.9238977332630434 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8197499379699456,
            "unit": "us/iter",
            "extra": "iterations: 185394\ncpu: 3.819439507211662 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8266399885932314,
            "unit": "us/iter",
            "extra": "iterations: 182347\ncpu: 3.8264458532358705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.589928720830021,
            "unit": "us/iter",
            "extra": "iterations: 195064\ncpu: 3.5896949975392625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 144.51154617304667,
            "unit": "us/iter",
            "extra": "iterations: 4808\ncpu: 144.49749084858607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.645846840538432,
            "unit": "us/iter",
            "extra": "iterations: 22852\ncpu: 30.64265644144942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 21.838337848404855,
            "unit": "us/iter",
            "extra": "iterations: 31967\ncpu: 21.83624669190095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 19.6518806951236,
            "unit": "us/iter",
            "extra": "iterations: 35447\ncpu: 19.638415944931708 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.052611169116613,
            "unit": "us/iter",
            "extra": "iterations: 35437\ncpu: 20.050986454835343 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.90859170956386,
            "unit": "us/iter",
            "extra": "iterations: 36910\ncpu: 18.908092847466886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.500594159777517,
            "unit": "us/iter",
            "extra": "iterations: 37978\ncpu: 18.499153114961295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 332.7558102710169,
            "unit": "us/iter",
            "extra": "iterations: 2103\ncpu: 332.7438349976241 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 65.57433592724803,
            "unit": "us/iter",
            "extra": "iterations: 10666\ncpu: 65.56898696793517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.4457972160267,
            "unit": "us/iter",
            "extra": "iterations: 14799\ncpu: 47.441201027096184 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.20230440289503,
            "unit": "us/iter",
            "extra": "iterations: 16580\ncpu: 42.1983490349816 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 42.82630750851174,
            "unit": "us/iter",
            "extra": "iterations: 16741\ncpu: 42.82305334209423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.999232832064244,
            "unit": "us/iter",
            "extra": "iterations: 17489\ncpu: 39.99730253302051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.61584426048581,
            "unit": "us/iter",
            "extra": "iterations: 18120\ncpu: 38.612549503311136 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1820.7076046511736,
            "unit": "us/iter",
            "extra": "iterations: 387\ncpu: 1820.568124030999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 400.64360023175,
            "unit": "us/iter",
            "extra": "iterations: 1726\ncpu: 400.62333024333583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 264.0166277673651,
            "unit": "us/iter",
            "extra": "iterations: 2665\ncpu: 264.00798311444566 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 223.13540669857724,
            "unit": "us/iter",
            "extra": "iterations: 3135\ncpu: 223.1219894736848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 227.88018617860922,
            "unit": "us/iter",
            "extra": "iterations: 3169\ncpu: 227.87175418112997 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 209.52539712487652,
            "unit": "us/iter",
            "extra": "iterations: 3339\ncpu: 209.50916292303202 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 201.7499095100864,
            "unit": "us/iter",
            "extra": "iterations: 3470\ncpu: 201.7415288184435 us\nthreads: 1"
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
          "id": "0b889f997ceb602d33d69b0755165a97c05cacbf",
          "message": "Merge pull request #213 from genogrove/fix/deserialization-safety\n\nFix deserialization safety: bounds-check strings, eliminate rehome_keys",
          "timestamp": "2026-03-05T08:01:39-06:00",
          "tree_id": "5972cc80c7348bf83b15b2003667dacb1d9fcd7a",
          "url": "https://github.com/genogrove/genogrove/commit/0b889f997ceb602d33d69b0755165a97c05cacbf"
        },
        "date": 1772719530530,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.70746082738454,
            "unit": "us/iter",
            "extra": "iterations: 21852\ncpu: 32.7049743730551 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.574937073863585,
            "unit": "us/iter",
            "extra": "iterations: 91520\ncpu: 7.574295454545455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.049178611418213,
            "unit": "us/iter",
            "extra": "iterations: 140215\ncpu: 5.049169846307456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.281851299181872,
            "unit": "us/iter",
            "extra": "iterations: 163449\ncpu: 4.281698958084787 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9565434421258474,
            "unit": "us/iter",
            "extra": "iterations: 178076\ncpu: 3.956429350389721 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8323494244418272,
            "unit": "us/iter",
            "extra": "iterations: 182171\ncpu: 3.832232188438338 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.616001196488156,
            "unit": "us/iter",
            "extra": "iterations: 193065\ncpu: 3.6159237251702825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 268.01213282442495,
            "unit": "us/iter",
            "extra": "iterations: 2620\ncpu: 268.00614618320583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.32725441953636,
            "unit": "us/iter",
            "extra": "iterations: 16461\ncpu: 42.32489150112392 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.837025482659083,
            "unit": "us/iter",
            "extra": "iterations: 23153\ncpu: 29.836132164298427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.971099474380292,
            "unit": "us/iter",
            "extra": "iterations: 27967\ncpu: 24.969030500232435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.300275004577724,
            "unit": "us/iter",
            "extra": "iterations: 27305\ncpu: 26.29926101446618 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.408689412839827,
            "unit": "us/iter",
            "extra": "iterations: 28459\ncpu: 24.407196001264992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.32517737744654,
            "unit": "us/iter",
            "extra": "iterations: 28865\ncpu: 24.32395482418148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 625.2466300630243,
            "unit": "us/iter",
            "extra": "iterations: 1111\ncpu: 625.2072322232232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 115.95090225688837,
            "unit": "us/iter",
            "extra": "iterations: 6026\ncpu: 115.94100066378996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.68195105595059,
            "unit": "us/iter",
            "extra": "iterations: 9991\ncpu: 69.680430887799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.13332165938749,
            "unit": "us/iter",
            "extra": "iterations: 11450\ncpu: 60.12815318777294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.56813286334037,
            "unit": "us/iter",
            "extra": "iterations: 11064\ncpu: 62.56414280549507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 57.56262018000255,
            "unit": "us/iter",
            "extra": "iterations: 12111\ncpu: 57.55753001403693 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 59.27140039329692,
            "unit": "us/iter",
            "extra": "iterations: 11696\ncpu: 59.26829805061534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3622.1803886010466,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3622.0861398963725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 885.9978106060507,
            "unit": "us/iter",
            "extra": "iterations: 792\ncpu: 885.9011666666673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 605.8806899827408,
            "unit": "us/iter",
            "extra": "iterations: 1158\ncpu: 605.8568929188259 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 522.5795389048943,
            "unit": "us/iter",
            "extra": "iterations: 1388\ncpu: 522.5631707492795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 478.71436543715924,
            "unit": "us/iter",
            "extra": "iterations: 1464\ncpu: 478.6897165300544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 451.25013633440983,
            "unit": "us/iter",
            "extra": "iterations: 1555\ncpu: 451.22178906752515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 439.30473545966106,
            "unit": "us/iter",
            "extra": "iterations: 1599\ncpu: 439.2954803001872 us\nthreads: 1"
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
            "value": 25.160548295759156,
            "unit": "us/iter",
            "extra": "iterations: 27901\ncpu: 25.159445754632436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.944967627091321,
            "unit": "us/iter",
            "extra": "iterations: 117691\ncpu: 5.944664179928784 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.508748945678965,
            "unit": "us/iter",
            "extra": "iterations: 154839\ncpu: 4.508536970659858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.891836457931237,
            "unit": "us/iter",
            "extra": "iterations: 178743\ncpu: 3.8914501938537445 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.740872845228092,
            "unit": "us/iter",
            "extra": "iterations: 188361\ncpu: 3.740710938039175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.6855421553992,
            "unit": "us/iter",
            "extra": "iterations: 184235\ncpu: 3.6852605042472844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5561581786705907,
            "unit": "us/iter",
            "extra": "iterations: 198712\ncpu: 3.555943304883465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 145.7697172241843,
            "unit": "us/iter",
            "extra": "iterations: 4813\ncpu: 145.75996987326073 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.843343891602128,
            "unit": "us/iter",
            "extra": "iterations: 22731\ncpu: 30.84154168316399 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.16239837034669,
            "unit": "us/iter",
            "extra": "iterations: 31295\ncpu: 22.161016679980698 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 19.84587252747296,
            "unit": "us/iter",
            "extra": "iterations: 35035\ncpu: 19.844539003853306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.80906941774988,
            "unit": "us/iter",
            "extra": "iterations: 35380\ncpu: 19.807594601469678 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.805550107527267,
            "unit": "us/iter",
            "extra": "iterations: 37200\ncpu: 18.80450059139773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.378409386091334,
            "unit": "us/iter",
            "extra": "iterations: 38035\ncpu: 18.3778509793611 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 334.9999665711596,
            "unit": "us/iter",
            "extra": "iterations: 2094\ncpu: 334.9685625596923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 65.86042383292386,
            "unit": "us/iter",
            "extra": "iterations: 10582\ncpu: 65.85697306747295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.71872600186352,
            "unit": "us/iter",
            "extra": "iterations: 15022\ncpu: 46.7168228598055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 40.420511889645866,
            "unit": "us/iter",
            "extra": "iterations: 17326\ncpu: 40.41838520143139 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 39.908112720222654,
            "unit": "us/iter",
            "extra": "iterations: 17539\ncpu: 39.90597964536187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.188359666447276,
            "unit": "us/iter",
            "extra": "iterations: 18228\ncpu: 38.18689565503636 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.061463158455894,
            "unit": "us/iter",
            "extra": "iterations: 18756\ncpu: 37.060022072936505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1825.5183489583142,
            "unit": "us/iter",
            "extra": "iterations: 384\ncpu: 1825.4147526041709 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 400.29632418523704,
            "unit": "us/iter",
            "extra": "iterations: 1749\ncpu: 400.26189136649657 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 263.5884924585269,
            "unit": "us/iter",
            "extra": "iterations: 2652\ncpu: 263.57549698340756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 224.81539789069996,
            "unit": "us/iter",
            "extra": "iterations: 3129\ncpu: 224.80292425695228 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 216.42767327346107,
            "unit": "us/iter",
            "extra": "iterations: 3229\ncpu: 216.40748374109558 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 206.835304193735,
            "unit": "us/iter",
            "extra": "iterations: 3386\ncpu: 206.82404932073212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 200.06288723951195,
            "unit": "us/iter",
            "extra": "iterations: 3503\ncpu: 200.0551752783316 us\nthreads: 1"
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
          "id": "331a3fe12236fd5f845e13d6d61af2e846de10b8",
          "message": "Merge pull request #214 from genogrove/fix/grove-to-sif-cleanup\n\nClean up grove_to_sif() and implement key link output",
          "timestamp": "2026-03-05T08:31:50-06:00",
          "tree_id": "0295fb948b7ad03c797e2f3d44466b648eb599a4",
          "url": "https://github.com/genogrove/genogrove/commit/331a3fe12236fd5f845e13d6d61af2e846de10b8"
        },
        "date": 1772721345627,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.85532158590553,
            "unit": "us/iter",
            "extra": "iterations: 20657\ncpu: 34.847828677929996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.62716361932604,
            "unit": "us/iter",
            "extra": "iterations: 91774\ncpu: 7.62577828143047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.051917671644316,
            "unit": "us/iter",
            "extra": "iterations: 137814\ncpu: 5.051431182608443 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.292472636416454,
            "unit": "us/iter",
            "extra": "iterations: 161894\ncpu: 4.292215739928594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9492349622258467,
            "unit": "us/iter",
            "extra": "iterations: 177237\ncpu: 3.948914549445093 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9463428601735884,
            "unit": "us/iter",
            "extra": "iterations: 179108\ncpu: 3.9460132043236484 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.66964259481433,
            "unit": "us/iter",
            "extra": "iterations: 190873\ncpu: 3.669542633059677 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.3555460194226,
            "unit": "us/iter",
            "extra": "iterations: 2575\ncpu: 273.31828504854354 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.785783313440604,
            "unit": "us/iter",
            "extra": "iterations: 15917\ncpu: 44.78410504492052 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.545318602216717,
            "unit": "us/iter",
            "extra": "iterations: 22922\ncpu: 30.541564348660614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.56120680962931,
            "unit": "us/iter",
            "extra": "iterations: 27373\ncpu: 25.56005059730393 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.75025642917646,
            "unit": "us/iter",
            "extra": "iterations: 27103\ncpu: 25.74705589787105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.224411972089868,
            "unit": "us/iter",
            "extra": "iterations: 27230\ncpu: 25.22319919206756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.580810432931834,
            "unit": "us/iter",
            "extra": "iterations: 28180\ncpu: 24.57829474804824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 631.5774648648508,
            "unit": "us/iter",
            "extra": "iterations: 1110\ncpu: 631.5538171171163 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.6383138002755,
            "unit": "us/iter",
            "extra": "iterations: 5768\ncpu: 120.6273120665742 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.77448447587024,
            "unit": "us/iter",
            "extra": "iterations: 9759\ncpu: 70.76704959524547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.57616497174896,
            "unit": "us/iter",
            "extra": "iterations: 11505\ncpu: 60.57336627553243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.403498848741414,
            "unit": "us/iter",
            "extra": "iterations: 11292\ncpu: 63.39523432518572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.29061447825549,
            "unit": "us/iter",
            "extra": "iterations: 11797\ncpu: 58.28947935915896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.37068134941166,
            "unit": "us/iter",
            "extra": "iterations: 11442\ncpu: 61.366978675056615 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3687.996248677409,
            "unit": "us/iter",
            "extra": "iterations: 189\ncpu: 3687.7938042328124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.2911920614619,
            "unit": "us/iter",
            "extra": "iterations: 781\ncpu: 895.2819385403337 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 610.9069027778129,
            "unit": "us/iter",
            "extra": "iterations: 1152\ncpu: 610.8607899305563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 510.1547026239041,
            "unit": "us/iter",
            "extra": "iterations: 1372\ncpu: 510.12491763848465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 485.5768243055299,
            "unit": "us/iter",
            "extra": "iterations: 1440\ncpu: 485.53019374999946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 456.38382637076194,
            "unit": "us/iter",
            "extra": "iterations: 1532\ncpu: 456.3713074412518 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 443.7229841471039,
            "unit": "us/iter",
            "extra": "iterations: 1577\ncpu: 443.70072289156525 us\nthreads: 1"
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
            "value": 25.828074916656856,
            "unit": "us/iter",
            "extra": "iterations: 27297\ncpu: 25.82629962999589 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.044873505916065,
            "unit": "us/iter",
            "extra": "iterations: 116543\ncpu: 6.0444418454991045 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.578317500786337,
            "unit": "us/iter",
            "extra": "iterations: 152576\ncpu: 4.578091639576336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9910521231881653,
            "unit": "us/iter",
            "extra": "iterations: 169886\ncpu: 3.9909472057732898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.851415898058273,
            "unit": "us/iter",
            "extra": "iterations: 181280\ncpu: 3.8511711992497593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.833922830524484,
            "unit": "us/iter",
            "extra": "iterations: 184192\ncpu: 3.8337609396716643 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6676273015774337,
            "unit": "us/iter",
            "extra": "iterations: 190956\ncpu: 3.667168206288379 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.4396742100789,
            "unit": "us/iter",
            "extra": "iterations: 4684\ncpu: 149.4292922715621 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.233564746914386,
            "unit": "us/iter",
            "extra": "iterations: 22364\ncpu: 31.23006277946702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.33568970479957,
            "unit": "us/iter",
            "extra": "iterations: 29878\ncpu: 23.335045685788913 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.818341778927163,
            "unit": "us/iter",
            "extra": "iterations: 33627\ncpu: 20.81727427364898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.48485318591817,
            "unit": "us/iter",
            "extra": "iterations: 34370\ncpu: 20.484464474832595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.38215882140488,
            "unit": "us/iter",
            "extra": "iterations: 36009\ncpu: 19.38074595240081 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.858254173646422,
            "unit": "us/iter",
            "extra": "iterations: 37018\ncpu: 18.85658455346055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 344.5622700049262,
            "unit": "us/iter",
            "extra": "iterations: 2037\ncpu: 344.5503873343135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.49926561460539,
            "unit": "us/iter",
            "extra": "iterations: 10519\ncpu: 66.49276841905122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.28075480409838,
            "unit": "us/iter",
            "extra": "iterations: 14727\ncpu: 47.278599918516946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.62612871530376,
            "unit": "us/iter",
            "extra": "iterations: 16284\ncpu: 42.623778187177685 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.87793201150004,
            "unit": "us/iter",
            "extra": "iterations: 16694\ncpu: 41.87360153348513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.39212708427199,
            "unit": "us/iter",
            "extra": "iterations: 17752\ncpu: 39.39047983325822 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.444759349772454,
            "unit": "us/iter",
            "extra": "iterations: 18209\ncpu: 38.44155176011874 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1884.1192922252353,
            "unit": "us/iter",
            "extra": "iterations: 373\ncpu: 1884.073630026799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.36146304850456,
            "unit": "us/iter",
            "extra": "iterations: 1732\ncpu: 406.3258181293301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 275.66997747926666,
            "unit": "us/iter",
            "extra": "iterations: 2531\ncpu: 275.6607625444496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 232.16935881959,
            "unit": "us/iter",
            "extra": "iterations: 2982\ncpu: 232.14425620388946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.75805083088602,
            "unit": "us/iter",
            "extra": "iterations: 3069\ncpu: 226.75391039426526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.4880817144603,
            "unit": "us/iter",
            "extra": "iterations: 3243\ncpu: 216.464227258712 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.41843557382205,
            "unit": "us/iter",
            "extra": "iterations: 3407\ncpu: 206.40898150865777 us\nthreads: 1"
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
          "id": "558e524901c1dd654a8664bddf7ec1b9a345e689",
          "message": "Merge pull request #216 from genogrove/perf/zlib-compressed-serialization\n\nAdd streaming zlib compression to grove serialization",
          "timestamp": "2026-03-05T14:17:54-06:00",
          "tree_id": "093ca3f5cc9e09eac5988f03e8cab18c4a198835",
          "url": "https://github.com/genogrove/genogrove/commit/558e524901c1dd654a8664bddf7ec1b9a345e689"
        },
        "date": 1772742098345,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.39408788356307,
            "unit": "us/iter",
            "extra": "iterations: 21574\ncpu: 32.392226986187076 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.434684196214787,
            "unit": "us/iter",
            "extra": "iterations: 91940\ncpu: 7.434259451816404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.040261272390429,
            "unit": "us/iter",
            "extra": "iterations: 139234\ncpu: 5.0398890859991115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.259802164957204,
            "unit": "us/iter",
            "extra": "iterations: 163606\ncpu: 4.25966695597961 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9511229741418505,
            "unit": "us/iter",
            "extra": "iterations: 175728\ncpu: 3.950600507602659 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9336034541314526,
            "unit": "us/iter",
            "extra": "iterations: 179611\ncpu: 3.9332465105143872 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.603736292777879,
            "unit": "us/iter",
            "extra": "iterations: 194113\ncpu: 3.603592711461881 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.4965442020574,
            "unit": "us/iter",
            "extra": "iterations: 2613\ncpu: 269.4826502104864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.06788461538461,
            "unit": "us/iter",
            "extra": "iterations: 16328\ncpu: 43.06561385350318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.59014632598695,
            "unit": "us/iter",
            "extra": "iterations: 23639\ncpu: 29.589084182918032 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.942597285229873,
            "unit": "us/iter",
            "extra": "iterations: 27995\ncpu: 24.941525736738736 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.144261340336314,
            "unit": "us/iter",
            "extra": "iterations: 27799\ncpu: 25.143482823123144 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.778312636960546,
            "unit": "us/iter",
            "extra": "iterations: 28749\ncpu: 24.776227347038137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 23.964606556811788,
            "unit": "us/iter",
            "extra": "iterations: 29008\ncpu: 23.96428123276334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 622.5935377777761,
            "unit": "us/iter",
            "extra": "iterations: 1125\ncpu: 622.5375857777777 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 117.19871651971424,
            "unit": "us/iter",
            "extra": "iterations: 6011\ncpu: 117.19424338712358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.2145532331128,
            "unit": "us/iter",
            "extra": "iterations: 9712\ncpu: 70.21025545716658 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.06095753937259,
            "unit": "us/iter",
            "extra": "iterations: 11493\ncpu: 59.05786182893934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 60.231085643433225,
            "unit": "us/iter",
            "extra": "iterations: 11291\ncpu: 60.22977344787891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 57.070678494264975,
            "unit": "us/iter",
            "extra": "iterations: 12034\ncpu: 57.06477787934185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 59.50165739296337,
            "unit": "us/iter",
            "extra": "iterations: 11538\ncpu: 59.49805954238182 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3637.2186424870133,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3636.924787564773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 887.2785830165009,
            "unit": "us/iter",
            "extra": "iterations: 789\ncpu: 887.2201229404318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 609.9381496953973,
            "unit": "us/iter",
            "extra": "iterations: 1149\ncpu: 609.9123307223683 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 509.06018467153166,
            "unit": "us/iter",
            "extra": "iterations: 1370\ncpu: 509.01569489051104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 483.13154920854106,
            "unit": "us/iter",
            "extra": "iterations: 1453\ncpu: 483.1160433585689 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 450.19740090089067,
            "unit": "us/iter",
            "extra": "iterations: 1554\ncpu: 450.1789909909915 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 437.84121217826913,
            "unit": "us/iter",
            "extra": "iterations: 1593\ncpu: 437.801899560579 us\nthreads: 1"
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
            "value": 24.830291745341604,
            "unit": "us/iter",
            "extra": "iterations: 28069\ncpu: 24.829023584737634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.91146568341237,
            "unit": "us/iter",
            "extra": "iterations: 118179\ncpu: 5.911308227350035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.383853118636167,
            "unit": "us/iter",
            "extra": "iterations: 158611\ncpu: 4.383676649160512 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.8735299190212675,
            "unit": "us/iter",
            "extra": "iterations: 180788\ncpu: 3.873365853928358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7171275606451912,
            "unit": "us/iter",
            "extra": "iterations: 188185\ncpu: 3.716991885644458 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.677387720689887,
            "unit": "us/iter",
            "extra": "iterations: 190369\ncpu: 3.6770416296771056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5144366491040873,
            "unit": "us/iter",
            "extra": "iterations: 198908\ncpu: 3.5143743439178117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 146.05943955814973,
            "unit": "us/iter",
            "extra": "iterations: 4798\ncpu: 146.0486283868283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.849921656135393,
            "unit": "us/iter",
            "extra": "iterations: 22631\ncpu: 30.84921810790496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.7689005474749,
            "unit": "us/iter",
            "extra": "iterations: 30869\ncpu: 22.76686232142272 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.326298789472094,
            "unit": "us/iter",
            "extra": "iterations: 34613\ncpu: 20.325691185392824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.06613109305758,
            "unit": "us/iter",
            "extra": "iterations: 35204\ncpu: 20.064652738325158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.01212868473012,
            "unit": "us/iter",
            "extra": "iterations: 36943\ncpu: 19.011196627236632 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.443211478069408,
            "unit": "us/iter",
            "extra": "iterations: 38212\ncpu: 18.44240113053496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 334.25133812260924,
            "unit": "us/iter",
            "extra": "iterations: 2088\ncpu: 334.2412571839099 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 65.94157266240933,
            "unit": "us/iter",
            "extra": "iterations: 10652\ncpu: 65.9382831393164 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.815475433814726,
            "unit": "us/iter",
            "extra": "iterations: 15041\ncpu: 46.813455355362116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.27895477860958,
            "unit": "us/iter",
            "extra": "iterations: 16961\ncpu: 41.27680478745355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.04913169252345,
            "unit": "us/iter",
            "extra": "iterations: 17146\ncpu: 41.047351685524156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.159865188096944,
            "unit": "us/iter",
            "extra": "iterations: 17810\ncpu: 39.158354800673656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.63594710476688,
            "unit": "us/iter",
            "extra": "iterations: 18565\ncpu: 37.634795852410534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1828.6303151041257,
            "unit": "us/iter",
            "extra": "iterations: 384\ncpu: 1828.541744791671 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 411.9398075385588,
            "unit": "us/iter",
            "extra": "iterations: 1751\ncpu: 411.908890348372 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 263.1067349624093,
            "unit": "us/iter",
            "extra": "iterations: 2660\ncpu: 263.0956906015041 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 224.71582515239137,
            "unit": "us/iter",
            "extra": "iterations: 3117\ncpu: 224.70225569457818 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 216.7608337984439,
            "unit": "us/iter",
            "extra": "iterations: 3225\ncpu: 216.74253581395294 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 205.98254323196727,
            "unit": "us/iter",
            "extra": "iterations: 3354\ncpu: 205.97952504472312 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 199.74889521841297,
            "unit": "us/iter",
            "extra": "iterations: 3388\ncpu: 199.4705876623372 us\nthreads: 1"
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
          "id": "dabd6a63681a707e6475fe2b7f942743752dd6bc",
          "message": "Release v0.17.0\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-05T14:34:10-06:00",
          "tree_id": "a86838b6d686c95177a652d8d519e2d99078a585",
          "url": "https://github.com/genogrove/genogrove/commit/dabd6a63681a707e6475fe2b7f942743752dd6bc"
        },
        "date": 1772743103182,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.0258646123818,
            "unit": "us/iter",
            "extra": "iterations: 21516\ncpu: 33.02168200408998 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.448897646984093,
            "unit": "us/iter",
            "extra": "iterations: 94262\ncpu: 7.448326186586322 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.003848599567068,
            "unit": "us/iter",
            "extra": "iterations: 141849\ncpu: 5.002794943919237 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.2125815771296224,
            "unit": "us/iter",
            "extra": "iterations: 165034\ncpu: 4.212107414229795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9305856585088352,
            "unit": "us/iter",
            "extra": "iterations: 178517\ncpu: 3.9302287569251066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8156196564080656,
            "unit": "us/iter",
            "extra": "iterations: 182251\ncpu: 3.814964131884051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6172090969572213,
            "unit": "us/iter",
            "extra": "iterations: 192394\ncpu: 3.6166520941401537 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 268.92916775432417,
            "unit": "us/iter",
            "extra": "iterations: 2605\ncpu: 268.8921094049901 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.35446713244156,
            "unit": "us/iter",
            "extra": "iterations: 16460\ncpu: 42.3513896111786 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 29.74246534569254,
            "unit": "us/iter",
            "extra": "iterations: 23518\ncpu: 29.740687090738966 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 24.959388182630548,
            "unit": "us/iter",
            "extra": "iterations: 27925\ncpu: 24.958455684870156 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.45070657294029,
            "unit": "us/iter",
            "extra": "iterations: 27598\ncpu: 25.447512029857233 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.802930608162306,
            "unit": "us/iter",
            "extra": "iterations: 27986\ncpu: 24.801582291145536 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.44087749870152,
            "unit": "us/iter",
            "extra": "iterations: 28865\ncpu: 24.439690351636923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 655.9865651785251,
            "unit": "us/iter",
            "extra": "iterations: 1120\ncpu: 655.9294008928581 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 116.52149718729295,
            "unit": "us/iter",
            "extra": "iterations: 6044\ncpu: 116.50493481138335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.7091726426287,
            "unit": "us/iter",
            "extra": "iterations: 10096\ncpu: 69.70443462757532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.93346121138768,
            "unit": "us/iter",
            "extra": "iterations: 11524\ncpu: 59.93199392572027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.43588391128163,
            "unit": "us/iter",
            "extra": "iterations: 11362\ncpu: 61.43273384967416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.48634770384173,
            "unit": "us/iter",
            "extra": "iterations: 10670\ncpu: 58.481492596063745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.38423297213517,
            "unit": "us/iter",
            "extra": "iterations: 11628\ncpu: 61.38009683522515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3636.642466321066,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3636.345611398946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 886.8529113924582,
            "unit": "us/iter",
            "extra": "iterations: 790\ncpu: 886.8096455696192 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 627.49137814398,
            "unit": "us/iter",
            "extra": "iterations: 1153\ncpu: 627.4322523850819 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 506.79378509404495,
            "unit": "us/iter",
            "extra": "iterations: 1382\ncpu: 506.7277243125914 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 481.100920274901,
            "unit": "us/iter",
            "extra": "iterations: 1455\ncpu: 481.0452192439866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 451.39522258064943,
            "unit": "us/iter",
            "extra": "iterations: 1550\ncpu: 451.36046 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 440.7689397741393,
            "unit": "us/iter",
            "extra": "iterations: 1594\ncpu: 440.7272314931002 us\nthreads: 1"
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
            "value": 24.88321409791819,
            "unit": "us/iter",
            "extra": "iterations: 28146\ncpu: 24.882042812477764 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.8997009731168255,
            "unit": "us/iter",
            "extra": "iterations: 118588\ncpu: 5.89909995109117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.488064987127857,
            "unit": "us/iter",
            "extra": "iterations: 159647\ncpu: 4.487766910746836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.845315113571708,
            "unit": "us/iter",
            "extra": "iterations: 180811\ncpu: 3.844962187035096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.750444570376586,
            "unit": "us/iter",
            "extra": "iterations: 187932\ncpu: 3.7499896292275805 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.6715055572448048,
            "unit": "us/iter",
            "extra": "iterations: 190742\ncpu: 3.6711083453041518 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5354427305052414,
            "unit": "us/iter",
            "extra": "iterations: 199670\ncpu: 3.5350311213502414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.34794200759717,
            "unit": "us/iter",
            "extra": "iterations: 4742\ncpu: 147.33139308308776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.020566837877904,
            "unit": "us/iter",
            "extra": "iterations: 22779\ncpu: 30.960384828131303 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.43499326992894,
            "unit": "us/iter",
            "extra": "iterations: 31649\ncpu: 22.43159701728325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.152830796673864,
            "unit": "us/iter",
            "extra": "iterations: 34757\ncpu: 20.149609718905527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.28023962566483,
            "unit": "us/iter",
            "extra": "iterations: 34942\ncpu: 20.2792907675576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.851834548757257,
            "unit": "us/iter",
            "extra": "iterations: 36887\ncpu: 18.8498830753382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.540631303383027,
            "unit": "us/iter",
            "extra": "iterations: 37817\ncpu: 18.538892720205094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 338.9977620423887,
            "unit": "us/iter",
            "extra": "iterations: 2076\ncpu: 338.96503371868863 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 65.89448194692305,
            "unit": "us/iter",
            "extra": "iterations: 10663\ncpu: 65.89114236143676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 45.60699424488775,
            "unit": "us/iter",
            "extra": "iterations: 15117\ncpu: 45.60439227359902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 40.92676101664221,
            "unit": "us/iter",
            "extra": "iterations: 16407\ncpu: 40.92375498262917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.33639844286685,
            "unit": "us/iter",
            "extra": "iterations: 17468\ncpu: 40.332467769635784 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.65451923712872,
            "unit": "us/iter",
            "extra": "iterations: 18142\ncpu: 38.649731341638194 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.385753181350914,
            "unit": "us/iter",
            "extra": "iterations: 18467\ncpu: 37.383619970758765 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1839.3926419097907,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1839.265530503983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 400.1053070325749,
            "unit": "us/iter",
            "extra": "iterations: 1749\ncpu: 400.08846941109147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 264.7584119651746,
            "unit": "us/iter",
            "extra": "iterations: 2641\ncpu: 264.73812987504846 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 225.6629884799986,
            "unit": "us/iter",
            "extra": "iterations: 3125\ncpu: 225.63483904000122 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 217.16405048003813,
            "unit": "us/iter",
            "extra": "iterations: 3229\ncpu: 217.14659430164073 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 205.97415441611582,
            "unit": "us/iter",
            "extra": "iterations: 3374\ncpu: 205.94833995257903 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 200.05010371427747,
            "unit": "us/iter",
            "extra": "iterations: 3500\ncpu: 200.0102708571449 us\nthreads: 1"
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
          "id": "a5b6f3193023ff94c5d439ab1566675e344a4086",
          "message": "Merge pull request #217 from genogrove/fix/precondition-checks\n\nAdd precondition checks to public constructors and API boundaries",
          "timestamp": "2026-03-06T17:12:20-06:00",
          "tree_id": "e2d804f684d9645d982ed1248f3c13aaf2d0ba71",
          "url": "https://github.com/genogrove/genogrove/commit/a5b6f3193023ff94c5d439ab1566675e344a4086"
        },
        "date": 1772838982417,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 29.85349034377138,
            "unit": "us/iter",
            "extra": "iterations: 22835\ncpu: 29.84401405736807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.425395229026574,
            "unit": "us/iter",
            "extra": "iterations: 90841\ncpu: 7.423212316024703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.915407256298509,
            "unit": "us/iter",
            "extra": "iterations: 143875\ncpu: 4.91475358470895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.104751268525555,
            "unit": "us/iter",
            "extra": "iterations: 169291\ncpu: 4.104305698471861 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.84365197442917,
            "unit": "us/iter",
            "extra": "iterations: 182863\ncpu: 3.84359435205591 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.781817304515788,
            "unit": "us/iter",
            "extra": "iterations: 184657\ncpu: 3.781604694108536 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.5789725924603393,
            "unit": "us/iter",
            "extra": "iterations: 195895\ncpu: 3.5787360065341125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 268.79926584711825,
            "unit": "us/iter",
            "extra": "iterations: 2603\ncpu: 268.7780752977336 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 40.95421088230001,
            "unit": "us/iter",
            "extra": "iterations: 16559\ncpu: 40.94996630231299 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 28.031302055623318,
            "unit": "us/iter",
            "extra": "iterations: 24810\ncpu: 28.029140386940686 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 23.90609991445541,
            "unit": "us/iter",
            "extra": "iterations: 29225\ncpu: 23.90458237810096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 24.57755910419545,
            "unit": "us/iter",
            "extra": "iterations: 28399\ncpu: 24.575155498433027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 22.063350621268036,
            "unit": "us/iter",
            "extra": "iterations: 30985\ncpu: 22.06189998386315 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.265073291964587,
            "unit": "us/iter",
            "extra": "iterations: 32391\ncpu: 21.264544750084934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 599.8088755328282,
            "unit": "us/iter",
            "extra": "iterations: 1173\ncpu: 599.7893341858476 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 130.45725023359554,
            "unit": "us/iter",
            "extra": "iterations: 5351\ncpu: 130.4440562511678 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.711083696863,
            "unit": "us/iter",
            "extra": "iterations: 9857\ncpu: 69.70160799431864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 54.548994980991715,
            "unit": "us/iter",
            "extra": "iterations: 13150\ncpu: 54.54695741444854 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 57.8629786774865,
            "unit": "us/iter",
            "extra": "iterations: 11584\ncpu: 57.86112707182304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 51.366991417341254,
            "unit": "us/iter",
            "extra": "iterations: 12467\ncpu: 51.36504531964389 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 53.671823967978284,
            "unit": "us/iter",
            "extra": "iterations: 12742\ncpu: 53.66825584680593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4111.742135293806,
            "unit": "us/iter",
            "extra": "iterations: 170\ncpu: 4111.550817647051 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 883.83324559197,
            "unit": "us/iter",
            "extra": "iterations: 794\ncpu: 883.7106473551672 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 615.8888274648224,
            "unit": "us/iter",
            "extra": "iterations: 1136\ncpu: 615.8292984154923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 524.6195557228652,
            "unit": "us/iter",
            "extra": "iterations: 1328\ncpu: 524.6101204819287 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 500.0439178571371,
            "unit": "us/iter",
            "extra": "iterations: 1400\ncpu: 499.99713000000054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 469.7451287726319,
            "unit": "us/iter",
            "extra": "iterations: 1491\ncpu: 469.73624614352764 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 459.5531099407337,
            "unit": "us/iter",
            "extra": "iterations: 1519\ncpu: 459.5038406846606 us\nthreads: 1"
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
            "value": 22.97455448802334,
            "unit": "us/iter",
            "extra": "iterations: 30392\ncpu: 22.97402701368783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.518007968833094,
            "unit": "us/iter",
            "extra": "iterations: 124234\ncpu: 5.5176516251589725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.194442577367238,
            "unit": "us/iter",
            "extra": "iterations: 166511\ncpu: 4.19442568959409 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.6412213890479137,
            "unit": "us/iter",
            "extra": "iterations: 190303\ncpu: 3.6410206880606246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.4988109581824958,
            "unit": "us/iter",
            "extra": "iterations: 201183\ncpu: 3.49874500827605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.512439638958025,
            "unit": "us/iter",
            "extra": "iterations: 198315\ncpu: 3.5122767163351316 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.3214360025990812,
            "unit": "us/iter",
            "extra": "iterations: 212368\ncpu: 3.321312339900543 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 140.00716983017554,
            "unit": "us/iter",
            "extra": "iterations: 5005\ncpu: 140.0008135864137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 28.244967022625023,
            "unit": "us/iter",
            "extra": "iterations: 24441\ncpu: 28.244353545272382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 20.821320793233973,
            "unit": "us/iter",
            "extra": "iterations: 34290\ncpu: 20.82060370370374 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 18.44445035083889,
            "unit": "us/iter",
            "extra": "iterations: 37624\ncpu: 18.444139352540923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 18.390878572372806,
            "unit": "us/iter",
            "extra": "iterations: 37825\ncpu: 18.390202088565804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 17.93211939141813,
            "unit": "us/iter",
            "extra": "iterations: 38713\ncpu: 17.931519360421525 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 17.385893397335217,
            "unit": "us/iter",
            "extra": "iterations: 39999\ncpu: 17.358361059026425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 317.0074694154905,
            "unit": "us/iter",
            "extra": "iterations: 2207\ncpu: 316.99918260081483 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 61.83941023371019,
            "unit": "us/iter",
            "extra": "iterations: 11296\ncpu: 61.835438739376286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 42.910124245567395,
            "unit": "us/iter",
            "extra": "iterations: 16403\ncpu: 42.90831902700751 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 37.775592316015924,
            "unit": "us/iter",
            "extra": "iterations: 18480\ncpu: 37.77470665584427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 37.580830641689005,
            "unit": "us/iter",
            "extra": "iterations: 18576\ncpu: 37.58018900732121 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 36.46171687972883,
            "unit": "us/iter",
            "extra": "iterations: 19165\ncpu: 36.45829042525427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 35.34869261880521,
            "unit": "us/iter",
            "extra": "iterations: 19780\ncpu: 35.348175985844236 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1832.4355156248787,
            "unit": "us/iter",
            "extra": "iterations: 384\ncpu: 1832.3268437500094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 364.3535534787038,
            "unit": "us/iter",
            "extra": "iterations: 1926\ncpu: 364.32703322949084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 245.09310792873765,
            "unit": "us/iter",
            "extra": "iterations: 2863\ncpu: 245.08721865176577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 211.52061661631515,
            "unit": "us/iter",
            "extra": "iterations: 3310\ncpu: 211.51994259818724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 203.620906095069,
            "unit": "us/iter",
            "extra": "iterations: 3429\ncpu: 203.60423884514498 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 196.21086961419246,
            "unit": "us/iter",
            "extra": "iterations: 3551\ncpu: 196.20799971838812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 189.22899593496297,
            "unit": "us/iter",
            "extra": "iterations: 3690\ncpu: 189.22278590785822 us\nthreads: 1"
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
          "id": "6ce8fbcef16b2eb9e47c56cb60023a5cce9cbaae",
          "message": "Update CHANGELOG for full #132 scope\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-06T17:14:35-06:00",
          "tree_id": "53200df15950ebd0107091d7fac93ef09e33aefd",
          "url": "https://github.com/genogrove/genogrove/commit/6ce8fbcef16b2eb9e47c56cb60023a5cce9cbaae"
        },
        "date": 1772839120639,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.21845892946839,
            "unit": "us/iter",
            "extra": "iterations: 21877\ncpu: 32.21158220962655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.5916206056917,
            "unit": "us/iter",
            "extra": "iterations: 91994\ncpu: 7.590579005152511 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.231372289516907,
            "unit": "us/iter",
            "extra": "iterations: 133740\ncpu: 5.229735411993421 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.593067774592602,
            "unit": "us/iter",
            "extra": "iterations: 156268\ncpu: 4.585299402308855 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.118822526789116,
            "unit": "us/iter",
            "extra": "iterations: 168910\ncpu: 4.1180520336273725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.018381853171056,
            "unit": "us/iter",
            "extra": "iterations: 174080\ncpu: 4.017782565487132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.8738177743672404,
            "unit": "us/iter",
            "extra": "iterations: 179832\ncpu: 3.8733926386849933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 263.3288704256925,
            "unit": "us/iter",
            "extra": "iterations: 2678\ncpu: 263.31438797610195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.11765361371664,
            "unit": "us/iter",
            "extra": "iterations: 16216\ncpu: 43.113885175135664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.72058338051345,
            "unit": "us/iter",
            "extra": "iterations: 22961\ncpu: 30.719510474282497 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.220780591345,
            "unit": "us/iter",
            "extra": "iterations: 26854\ncpu: 26.218710322484505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.171044714846136,
            "unit": "us/iter",
            "extra": "iterations: 27038\ncpu: 26.169251386936907 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.615897881971375,
            "unit": "us/iter",
            "extra": "iterations: 28281\ncpu: 24.613423888829974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.111844043996623,
            "unit": "us/iter",
            "extra": "iterations: 28912\ncpu: 24.111036801328172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 620.5716067019218,
            "unit": "us/iter",
            "extra": "iterations: 1134\ncpu: 620.4663439153429 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 108.23667663379018,
            "unit": "us/iter",
            "extra": "iterations: 6488\ncpu: 108.22376448828585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 64.1431764978213,
            "unit": "us/iter",
            "extra": "iterations: 10799\ncpu: 64.1320659320307 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 55.03806003295938,
            "unit": "us/iter",
            "extra": "iterations: 12743\ncpu: 55.03199937220427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 55.5248421264956,
            "unit": "us/iter",
            "extra": "iterations: 12396\ncpu: 55.52095740561489 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 52.62910359550666,
            "unit": "us/iter",
            "extra": "iterations: 13350\ncpu: 52.62130756554308 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 53.11722567382426,
            "unit": "us/iter",
            "extra": "iterations: 13134\ncpu: 53.11299604080996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3917.8064500002088,
            "unit": "us/iter",
            "extra": "iterations: 180\ncpu: 3916.981366666662 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 913.7073550064785,
            "unit": "us/iter",
            "extra": "iterations: 769\ncpu: 913.6249934980488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 635.7545190217213,
            "unit": "us/iter",
            "extra": "iterations: 1104\ncpu: 635.7214193840593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 529.9946931217002,
            "unit": "us/iter",
            "extra": "iterations: 1323\ncpu: 529.9425721844311 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 509.89279752364087,
            "unit": "us/iter",
            "extra": "iterations: 1373\ncpu: 509.83728113619605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 481.8427871900731,
            "unit": "us/iter",
            "extra": "iterations: 1452\ncpu: 481.7814428374648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 471.40847070704234,
            "unit": "us/iter",
            "extra": "iterations: 1485\ncpu: 471.3766060606064 us\nthreads: 1"
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
            "value": 25.485533677814946,
            "unit": "us/iter",
            "extra": "iterations: 27481\ncpu: 25.4830982860885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.091437476738322,
            "unit": "us/iter",
            "extra": "iterations: 115533\ncpu: 6.09101534626469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.5620553535429815,
            "unit": "us/iter",
            "extra": "iterations: 154281\ncpu: 4.561611864066206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.8849975232986784,
            "unit": "us/iter",
            "extra": "iterations: 180482\ncpu: 3.884756734743644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.808521047846446,
            "unit": "us/iter",
            "extra": "iterations: 182584\ncpu: 3.8080273079787785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7530451279858146,
            "unit": "us/iter",
            "extra": "iterations: 186935\ncpu: 3.7525084708588463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6919591006130323,
            "unit": "us/iter",
            "extra": "iterations: 190174\ncpu: 3.691739033726998 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 151.1500939712519,
            "unit": "us/iter",
            "extra": "iterations: 4661\ncpu: 151.13628127011296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.870779599431554,
            "unit": "us/iter",
            "extra": "iterations: 22568\ncpu: 30.86807519496625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.105446329271683,
            "unit": "us/iter",
            "extra": "iterations: 32010\ncpu: 22.10204951577631 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 19.411459762130487,
            "unit": "us/iter",
            "extra": "iterations: 35986\ncpu: 19.410591674540026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.618272153131514,
            "unit": "us/iter",
            "extra": "iterations: 35943\ncpu: 19.61656439362325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.833046449259385,
            "unit": "us/iter",
            "extra": "iterations: 37288\ncpu: 18.831076405277805 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.564092660501547,
            "unit": "us/iter",
            "extra": "iterations: 37632\ncpu: 18.562924824617426 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 349.41126476475443,
            "unit": "us/iter",
            "extra": "iterations: 1998\ncpu: 349.350543543543 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.51351585318743,
            "unit": "us/iter",
            "extra": "iterations: 10408\ncpu: 67.51080034588767 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 45.14271921980128,
            "unit": "us/iter",
            "extra": "iterations: 15432\ncpu: 45.13740318818061 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 39.73155228386062,
            "unit": "us/iter",
            "extra": "iterations: 17558\ncpu: 39.72859915707947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 39.964276232223646,
            "unit": "us/iter",
            "extra": "iterations: 17793\ncpu: 39.960779463833774 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.67272330070123,
            "unit": "us/iter",
            "extra": "iterations: 18081\ncpu: 38.66733073391964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.38541188959611,
            "unit": "us/iter",
            "extra": "iterations: 18369\ncpu: 38.383991507431155 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1964.389335195425,
            "unit": "us/iter",
            "extra": "iterations: 358\ncpu: 1964.0796759776688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.31435231943715,
            "unit": "us/iter",
            "extra": "iterations: 1703\ncpu: 410.3000628302967 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 271.12846395349317,
            "unit": "us/iter",
            "extra": "iterations: 2580\ncpu: 271.09895271318004 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.44306442119392,
            "unit": "us/iter",
            "extra": "iterations: 3058\ncpu: 228.4248109875737 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.55277774273856,
            "unit": "us/iter",
            "extra": "iterations: 3172\ncpu: 220.51231431273578 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.3079507389174,
            "unit": "us/iter",
            "extra": "iterations: 3248\ncpu: 216.29691533251153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 209.67643037214967,
            "unit": "us/iter",
            "extra": "iterations: 3332\ncpu: 209.65272899159507 us\nthreads: 1"
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
          "id": "e4635fac52ec7e5bb9ad2a355d07b5749c5b82c7",
          "message": "Merge pull request #218 from genogrove/fix/gff-reader-parse-errors\n\nFix GFF reader silently swallowing parse errors",
          "timestamp": "2026-03-06T20:48:34-06:00",
          "tree_id": "061494e291f4d53af1e164e93bc3481506c217ca",
          "url": "https://github.com/genogrove/genogrove/commit/e4635fac52ec7e5bb9ad2a355d07b5749c5b82c7"
        },
        "date": 1772851943533,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 31.3071676912739,
            "unit": "us/iter",
            "extra": "iterations: 22285\ncpu: 31.304695041507745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.535420903740363,
            "unit": "us/iter",
            "extra": "iterations: 92261\ncpu: 7.533469960221546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.232142597524168,
            "unit": "us/iter",
            "extra": "iterations: 134813\ncpu: 5.231781052272408 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.482023993753666,
            "unit": "us/iter",
            "extra": "iterations: 156249\ncpu: 4.480809579581309 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.121468585273853,
            "unit": "us/iter",
            "extra": "iterations: 169220\ncpu: 4.1210006973171005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.0874673646328334,
            "unit": "us/iter",
            "extra": "iterations: 171164\ncpu: 4.086569506438273 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.8971493300304734,
            "unit": "us/iter",
            "extra": "iterations: 177620\ncpu: 3.896983278910036 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.84221349175954,
            "unit": "us/iter",
            "extra": "iterations: 2609\ncpu: 269.7989421234189 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.190471699300026,
            "unit": "us/iter",
            "extra": "iterations: 15883\ncpu: 44.18610986589436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.898128936395505,
            "unit": "us/iter",
            "extra": "iterations: 22546\ncpu: 30.892867825778392 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.303097656836286,
            "unit": "us/iter",
            "extra": "iterations: 26716\ncpu: 26.301096009881697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.72628356739916,
            "unit": "us/iter",
            "extra": "iterations: 26417\ncpu: 26.721387326342892 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.601855144500643,
            "unit": "us/iter",
            "extra": "iterations: 28166\ncpu: 24.600620570901096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.094742936701678,
            "unit": "us/iter",
            "extra": "iterations: 29448\ncpu: 24.060691591958676 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 618.7216055603606,
            "unit": "us/iter",
            "extra": "iterations: 1151\ncpu: 618.6700729800176 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 109.46250390625246,
            "unit": "us/iter",
            "extra": "iterations: 6400\ncpu: 109.43372265625028 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 64.69101820228938,
            "unit": "us/iter",
            "extra": "iterations: 10658\ncpu: 64.6851953462187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 55.033520273995265,
            "unit": "us/iter",
            "extra": "iterations: 12701\ncpu: 55.02625793244619 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 56.74739686151765,
            "unit": "us/iter",
            "extra": "iterations: 12745\ncpu: 56.73838870145158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 52.930058819116454,
            "unit": "us/iter",
            "extra": "iterations: 13329\ncpu: 52.92686870732978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 53.317954510583895,
            "unit": "us/iter",
            "extra": "iterations: 13036\ncpu: 53.310416308683486 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3841.0531049723145,
            "unit": "us/iter",
            "extra": "iterations: 181\ncpu: 3840.3486574585513 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 920.992739528791,
            "unit": "us/iter",
            "extra": "iterations: 764\ncpu: 920.91640314136 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 637.2185299999893,
            "unit": "us/iter",
            "extra": "iterations: 1100\ncpu: 637.1736809090901 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 532.7910577507441,
            "unit": "us/iter",
            "extra": "iterations: 1316\ncpu: 532.7066831306996 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 513.5091816849779,
            "unit": "us/iter",
            "extra": "iterations: 1365\ncpu: 513.4038542124548 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 484.850718339107,
            "unit": "us/iter",
            "extra": "iterations: 1445\ncpu: 484.79645328719613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 471.42183558862035,
            "unit": "us/iter",
            "extra": "iterations: 1478\ncpu: 471.34512584573787 us\nthreads: 1"
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
            "value": 24.499106215713866,
            "unit": "us/iter",
            "extra": "iterations: 28621\ncpu: 24.496292757066563 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.91203877799728,
            "unit": "us/iter",
            "extra": "iterations: 118985\ncpu: 5.911094675799488 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.6176420242225715,
            "unit": "us/iter",
            "extra": "iterations: 150932\ncpu: 4.617304209842834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.8936985916272,
            "unit": "us/iter",
            "extra": "iterations: 180705\ncpu: 3.8933580476467147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8270749125312773,
            "unit": "us/iter",
            "extra": "iterations: 183494\ncpu: 3.826843498969995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7583795494120635,
            "unit": "us/iter",
            "extra": "iterations: 186645\ncpu: 3.7579305365801448 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.642923916156773,
            "unit": "us/iter",
            "extra": "iterations: 192025\ncpu: 3.6422126025257153 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.73687298557945,
            "unit": "us/iter",
            "extra": "iterations: 4716\ncpu: 147.72519317217916 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.530351602760465,
            "unit": "us/iter",
            "extra": "iterations: 22898\ncpu: 30.52431714560216 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.35118246623305,
            "unit": "us/iter",
            "extra": "iterations: 31984\ncpu: 22.350369809904958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 19.797637499998977,
            "unit": "us/iter",
            "extra": "iterations: 36000\ncpu: 19.796325972222327 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.654055922980625,
            "unit": "us/iter",
            "extra": "iterations: 35835\ncpu: 19.653525017440945 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.718896888249503,
            "unit": "us/iter",
            "extra": "iterations: 37503\ncpu: 18.717780977521727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.698065564150287,
            "unit": "us/iter",
            "extra": "iterations: 37490\ncpu: 18.694034275807034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 338.9844498539472,
            "unit": "us/iter",
            "extra": "iterations: 2054\ncpu: 338.9618159688437 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.54493141885295,
            "unit": "us/iter",
            "extra": "iterations: 10586\ncpu: 66.53541073115449 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 45.21048257459017,
            "unit": "us/iter",
            "extra": "iterations: 15552\ncpu: 45.20823919753084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 39.701502655967666,
            "unit": "us/iter",
            "extra": "iterations: 17696\ncpu: 39.70005549276666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 39.577285802433174,
            "unit": "us/iter",
            "extra": "iterations: 17827\ncpu: 39.56919341448375 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.96106677001199,
            "unit": "us/iter",
            "extra": "iterations: 18062\ncpu: 38.95476586203083 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.882399046016644,
            "unit": "us/iter",
            "extra": "iterations: 18449\ncpu: 37.873299149005206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1899.780420485188,
            "unit": "us/iter",
            "extra": "iterations: 371\ncpu: 1899.6157520215688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 403.0138589669298,
            "unit": "us/iter",
            "extra": "iterations: 1723\ncpu: 402.9377939640148 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 271.23120240401863,
            "unit": "us/iter",
            "extra": "iterations: 2579\ncpu: 271.1868976347405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 231.67361795543573,
            "unit": "us/iter",
            "extra": "iterations: 3052\ncpu: 231.62620806028866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 225.32197529299106,
            "unit": "us/iter",
            "extra": "iterations: 3157\ncpu: 225.28796072220624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.33203755430753,
            "unit": "us/iter",
            "extra": "iterations: 3222\ncpu: 216.2907526381131 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 212.6055074985006,
            "unit": "us/iter",
            "extra": "iterations: 3334\ncpu: 212.58588842231654 us\nthreads: 1"
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