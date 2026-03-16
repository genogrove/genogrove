window.BENCHMARK_DATA = {
  "lastUpdate": 1773697984583,
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
          "id": "0c50910156379461c4fd756676b8e3f5f48e0807",
          "message": "Add PR references to CHANGELOG entries\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-06T20:51:30-06:00",
          "tree_id": "27907d354a021862c19ea71b559c8de478d139ef",
          "url": "https://github.com/genogrove/genogrove/commit/0c50910156379461c4fd756676b8e3f5f48e0807"
        },
        "date": 1772852148217,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.236083994422486,
            "unit": "us/iter",
            "extra": "iterations: 20799\ncpu: 33.23206341651041 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.755316539829317,
            "unit": "us/iter",
            "extra": "iterations: 90273\ncpu: 7.754447597842104 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.073091889775771,
            "unit": "us/iter",
            "extra": "iterations: 137937\ncpu: 5.061568933643619 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.367229930544757,
            "unit": "us/iter",
            "extra": "iterations: 161975\ncpu: 4.3668476246334285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9979950831641653,
            "unit": "us/iter",
            "extra": "iterations: 175316\ncpu: 3.9976604645326197 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8577401425203592,
            "unit": "us/iter",
            "extra": "iterations: 181588\ncpu: 3.8575501795272813 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.6885185387964428,
            "unit": "us/iter",
            "extra": "iterations: 189953\ncpu: 3.6883868904413206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 273.7655636930226,
            "unit": "us/iter",
            "extra": "iterations: 2567\ncpu: 273.75270744059225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.702806203019875,
            "unit": "us/iter",
            "extra": "iterations: 15831\ncpu: 43.697375592192515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.711142651985565,
            "unit": "us/iter",
            "extra": "iterations: 22979\ncpu: 30.710108185734757 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.575271965455116,
            "unit": "us/iter",
            "extra": "iterations: 27327\ncpu: 25.574160281040758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.020582488548897,
            "unit": "us/iter",
            "extra": "iterations: 26634\ncpu: 26.019227678906635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.957796801434554,
            "unit": "us/iter",
            "extra": "iterations: 26762\ncpu: 24.957184664823274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.443720599197967,
            "unit": "us/iter",
            "extra": "iterations: 28171\ncpu: 24.44285140747576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 633.1251162161816,
            "unit": "us/iter",
            "extra": "iterations: 1110\ncpu: 633.0860963963963 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 121.99079121266034,
            "unit": "us/iter",
            "extra": "iterations: 5690\ncpu: 121.97651177504409 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.3481493728598,
            "unit": "us/iter",
            "extra": "iterations: 9647\ncpu: 71.34382367575397 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.991487854977166,
            "unit": "us/iter",
            "extra": "iterations: 11198\ncpu: 61.98864288265753 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.935381272116345,
            "unit": "us/iter",
            "extra": "iterations: 11021\ncpu: 62.933572361854665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.93946404079491,
            "unit": "us/iter",
            "extra": "iterations: 11374\ncpu: 59.93232943555461 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.05122046684526,
            "unit": "us/iter",
            "extra": "iterations: 11267\ncpu: 61.04625232981274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3637.210567708197,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3637.033557291669 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 902.8829419354488,
            "unit": "us/iter",
            "extra": "iterations: 775\ncpu: 902.8330567741933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 624.5193718861609,
            "unit": "us/iter",
            "extra": "iterations: 1124\ncpu: 624.4894590747318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.8520214655688,
            "unit": "us/iter",
            "extra": "iterations: 1351\ncpu: 515.831834196889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.01846072930505,
            "unit": "us/iter",
            "extra": "iterations: 1426\ncpu: 490.9844074333801 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 462.91732389729145,
            "unit": "us/iter",
            "extra": "iterations: 1519\ncpu: 462.8674904542463 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.3079256410336,
            "unit": "us/iter",
            "extra": "iterations: 1560\ncpu: 449.28274423076834 us\nthreads: 1"
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
            "value": 25.23169952983597,
            "unit": "us/iter",
            "extra": "iterations: 27650\ncpu: 25.229864918625633 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.962964320763267,
            "unit": "us/iter",
            "extra": "iterations: 117183\ncpu: 5.962551283035914 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.552550284030628,
            "unit": "us/iter",
            "extra": "iterations: 155089\ncpu: 4.552045593175517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.980282318986081,
            "unit": "us/iter",
            "extra": "iterations: 175663\ncpu: 3.980011106493685 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8535544541941094,
            "unit": "us/iter",
            "extra": "iterations: 181997\ncpu: 3.853293746600203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8095671756390774,
            "unit": "us/iter",
            "extra": "iterations: 183638\ncpu: 3.8094757239786845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6539825232770937,
            "unit": "us/iter",
            "extra": "iterations: 191283\ncpu: 3.653885823622585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.44249043216595,
            "unit": "us/iter",
            "extra": "iterations: 4651\ncpu: 149.43562868200377 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.078903396933228,
            "unit": "us/iter",
            "extra": "iterations: 22432\ncpu: 31.07721460413702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.09934323284127,
            "unit": "us/iter",
            "extra": "iterations: 31180\ncpu: 23.097389512507984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.7398026494374,
            "unit": "us/iter",
            "extra": "iterations: 33894\ncpu: 20.73903921047975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.63898211386845,
            "unit": "us/iter",
            "extra": "iterations: 33881\ncpu: 20.63755683126224 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.235123232602053,
            "unit": "us/iter",
            "extra": "iterations: 36070\ncpu: 19.2329440809538 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.919735930151226,
            "unit": "us/iter",
            "extra": "iterations: 36994\ncpu: 18.918129967021624 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.2160166830131,
            "unit": "us/iter",
            "extra": "iterations: 2038\ncpu: 342.19327968596554 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.58839886451386,
            "unit": "us/iter",
            "extra": "iterations: 10392\ncpu: 66.58374499615108 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.352819703106476,
            "unit": "us/iter",
            "extra": "iterations: 14820\ncpu: 47.34817894736866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.67015107095862,
            "unit": "us/iter",
            "extra": "iterations: 16714\ncpu: 41.66719714012223 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.975725655768144,
            "unit": "us/iter",
            "extra": "iterations: 16698\ncpu: 41.97328548329135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.59708087774299,
            "unit": "us/iter",
            "extra": "iterations: 17545\ncpu: 39.59411803932715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.570972349722865,
            "unit": "us/iter",
            "extra": "iterations: 18083\ncpu: 38.568417961621435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1876.7915483871614,
            "unit": "us/iter",
            "extra": "iterations: 372\ncpu: 1876.701588709681 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.7029417249553,
            "unit": "us/iter",
            "extra": "iterations: 1716\ncpu: 408.6756357808822 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.4389662058424,
            "unit": "us/iter",
            "extra": "iterations: 2604\ncpu: 269.4142043010754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.43677516338994,
            "unit": "us/iter",
            "extra": "iterations: 3060\ncpu: 228.42146797385575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 221.27925229502807,
            "unit": "us/iter",
            "extra": "iterations: 3159\ncpu: 221.27094365305467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 214.0451614457757,
            "unit": "us/iter",
            "extra": "iterations: 3320\ncpu: 214.03646656626478 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 207.3371053097315,
            "unit": "us/iter",
            "extra": "iterations: 3390\ncpu: 207.3168640118005 us\nthreads: 1"
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
          "id": "2ccc13faea07ae275b14cc9ea62ce06f0c54ff10",
          "message": "Merge pull request #220 from genogrove/fix/kstring-raii-guard\n\nAdd RAII guard for htslib kstring_t allocations",
          "timestamp": "2026-03-06T23:00:40-06:00",
          "tree_id": "b51c52170f8c98ee45e5a30dde8ad8a1894d8032",
          "url": "https://github.com/genogrove/genogrove/commit/2ccc13faea07ae275b14cc9ea62ce06f0c54ff10"
        },
        "date": 1772859881900,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.30852440462235,
            "unit": "us/iter",
            "extra": "iterations: 21205\ncpu: 33.305160481018625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.553764638902013,
            "unit": "us/iter",
            "extra": "iterations: 93091\ncpu: 7.552458647989601 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.082228716747092,
            "unit": "us/iter",
            "extra": "iterations: 137432\ncpu: 5.08097876768147 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.3434663411538015,
            "unit": "us/iter",
            "extra": "iterations: 157700\ncpu: 4.342673164235889 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.962307439676531,
            "unit": "us/iter",
            "extra": "iterations: 177212\ncpu: 3.9620215391734206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9184418694263057,
            "unit": "us/iter",
            "extra": "iterations: 179071\ncpu: 3.9183421715408953 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.72361694197409,
            "unit": "us/iter",
            "extra": "iterations: 187003\ncpu: 3.7232105153393267 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 271.0317135678463,
            "unit": "us/iter",
            "extra": "iterations: 2587\ncpu: 271.0152528024741 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.15544885448912,
            "unit": "us/iter",
            "extra": "iterations: 16150\ncpu: 43.150750340557295 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.54489772280376,
            "unit": "us/iter",
            "extra": "iterations: 22879\ncpu: 30.543375540889038 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.502427674571948,
            "unit": "us/iter",
            "extra": "iterations: 27238\ncpu: 25.499922204273442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.776759328704603,
            "unit": "us/iter",
            "extra": "iterations: 26933\ncpu: 25.775438606913436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.905143635321416,
            "unit": "us/iter",
            "extra": "iterations: 27904\ncpu: 24.902001827694917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 25.139487447407014,
            "unit": "us/iter",
            "extra": "iterations: 28520\ncpu: 25.137504943898982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 626.9729250669093,
            "unit": "us/iter",
            "extra": "iterations: 1121\ncpu: 626.8837190008923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.62303251317988,
            "unit": "us/iter",
            "extra": "iterations: 5690\ncpu: 123.6138318101933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.45797093376663,
            "unit": "us/iter",
            "extra": "iterations: 9874\ncpu: 71.45527283775567 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.76701178571672,
            "unit": "us/iter",
            "extra": "iterations: 11200\ncpu: 61.759154196428604 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.30265066789893,
            "unit": "us/iter",
            "extra": "iterations: 10855\ncpu: 63.29878912943372 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.39361603233261,
            "unit": "us/iter",
            "extra": "iterations: 11876\ncpu: 60.38826785112825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.45529735430938,
            "unit": "us/iter",
            "extra": "iterations: 11377\ncpu: 61.452997978377276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3630.223421875023,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3629.9793593749982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 899.4245807692836,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 899.3652679487187 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 618.2621603188531,
            "unit": "us/iter",
            "extra": "iterations: 1129\ncpu: 618.2534712134644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 514.9034722222307,
            "unit": "us/iter",
            "extra": "iterations: 1368\ncpu: 514.866125000001 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 492.67939494025956,
            "unit": "us/iter",
            "extra": "iterations: 1423\ncpu: 492.6620210822212 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 460.3183035479544,
            "unit": "us/iter",
            "extra": "iterations: 1522\ncpu: 460.2922306176085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 448.51735714286264,
            "unit": "us/iter",
            "extra": "iterations: 1568\ncpu: 448.5032244897967 us\nthreads: 1"
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
            "value": 25.207349486947244,
            "unit": "us/iter",
            "extra": "iterations: 27775\ncpu: 25.20645684968487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.932089885923767,
            "unit": "us/iter",
            "extra": "iterations: 117816\ncpu: 5.9316287601004705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.482055428494508,
            "unit": "us/iter",
            "extra": "iterations: 156093\ncpu: 4.481889264733205 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.012192203638513,
            "unit": "us/iter",
            "extra": "iterations: 174466\ncpu: 4.011997472286861 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.782089718341925,
            "unit": "us/iter",
            "extra": "iterations: 184834\ncpu: 3.78189098326065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7195232507908034,
            "unit": "us/iter",
            "extra": "iterations: 187499\ncpu: 3.7192498306657447 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.566632792149825,
            "unit": "us/iter",
            "extra": "iterations: 196175\ncpu: 3.5664545584299447 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.17451111581929,
            "unit": "us/iter",
            "extra": "iterations: 4723\ncpu: 148.16160067753543 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.08644912124426,
            "unit": "us/iter",
            "extra": "iterations: 22475\ncpu: 31.086022291434876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.88724119718216,
            "unit": "us/iter",
            "extra": "iterations: 31240\ncpu: 22.885848687580097 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.067406144720927,
            "unit": "us/iter",
            "extra": "iterations: 34729\ncpu: 20.066619107950142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.134606363427505,
            "unit": "us/iter",
            "extra": "iterations: 34824\ncpu: 20.132216632207644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.482152759912562,
            "unit": "us/iter",
            "extra": "iterations: 36541\ncpu: 19.48134287512666 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.039430392449308,
            "unit": "us/iter",
            "extra": "iterations: 36871\ncpu: 19.03758647717711 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.09223779296804,
            "unit": "us/iter",
            "extra": "iterations: 2048\ncpu: 342.05999316406013 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.55234318570429,
            "unit": "us/iter",
            "extra": "iterations: 10522\ncpu: 66.5507320851548 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.286078325818494,
            "unit": "us/iter",
            "extra": "iterations: 14861\ncpu: 47.28051389543097 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.099446245272716,
            "unit": "us/iter",
            "extra": "iterations: 16659\ncpu: 42.08969235848474 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.55962947490375,
            "unit": "us/iter",
            "extra": "iterations: 17235\ncpu: 40.55809590948649 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.295781794742474,
            "unit": "us/iter",
            "extra": "iterations: 17841\ncpu: 39.29209679950656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.11716949152666,
            "unit": "us/iter",
            "extra": "iterations: 18526\ncpu: 38.11627205009162 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1856.1558465608884,
            "unit": "us/iter",
            "extra": "iterations: 378\ncpu: 1855.9727407407456 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.0466564487849,
            "unit": "us/iter",
            "extra": "iterations: 1729\ncpu: 406.0360323886617 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.67733989198325,
            "unit": "us/iter",
            "extra": "iterations: 2592\ncpu: 269.6578746141958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 233.37032661966697,
            "unit": "us/iter",
            "extra": "iterations: 2979\ncpu: 233.36741691842983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 227.3665246535622,
            "unit": "us/iter",
            "extra": "iterations: 3103\ncpu: 227.35167708669033 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 210.99801086955387,
            "unit": "us/iter",
            "extra": "iterations: 3312\ncpu: 210.98105283816466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 203.4288490127748,
            "unit": "us/iter",
            "extra": "iterations: 3444\ncpu: 203.41290301974448 us\nthreads: 1"
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
          "id": "375c1cb2b4341a797e5fe4cbdfa636c38a232cf9",
          "message": "Merge pull request #221 from genogrove/fix/numeric-default-docstring\n\nFix numeric default constructor docstring",
          "timestamp": "2026-03-06T23:26:06-06:00",
          "tree_id": "679198c47c9817a89d2d6921b42a880c3e47a37a",
          "url": "https://github.com/genogrove/genogrove/commit/375c1cb2b4341a797e5fe4cbdfa636c38a232cf9"
        },
        "date": 1772861414381,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 35.68056113315025,
            "unit": "us/iter",
            "extra": "iterations: 19662\ncpu: 35.67483348591191 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.7260129809612925,
            "unit": "us/iter",
            "extra": "iterations: 90132\ncpu: 7.7249123951537735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.098950977805661,
            "unit": "us/iter",
            "extra": "iterations: 136428\ncpu: 5.097594020289091 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.303879407356538,
            "unit": "us/iter",
            "extra": "iterations: 162796\ncpu: 4.303220619671245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9973140502454894,
            "unit": "us/iter",
            "extra": "iterations: 175577\ncpu: 3.9964246285105713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9005383853863616,
            "unit": "us/iter",
            "extra": "iterations: 178792\ncpu: 3.9004603337956967 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7130377966736403,
            "unit": "us/iter",
            "extra": "iterations: 189223\ncpu: 3.7123887370985553 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 286.26478203592114,
            "unit": "us/iter",
            "extra": "iterations: 2505\ncpu: 286.25145029940086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.32681124371925,
            "unit": "us/iter",
            "extra": "iterations: 15920\ncpu: 43.324142776381926 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.259730489075725,
            "unit": "us/iter",
            "extra": "iterations: 23064\ncpu: 30.25876383107877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.5527250599295,
            "unit": "us/iter",
            "extra": "iterations: 27115\ncpu: 25.551971639314026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.86922350162221,
            "unit": "us/iter",
            "extra": "iterations: 27096\ncpu: 25.86880307056394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.994582472198168,
            "unit": "us/iter",
            "extra": "iterations: 27967\ncpu: 24.992820645761068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.641152340456717,
            "unit": "us/iter",
            "extra": "iterations: 28456\ncpu: 24.640533666010647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 635.8532085610793,
            "unit": "us/iter",
            "extra": "iterations: 1098\ncpu: 635.7967431693986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.11776854969132,
            "unit": "us/iter",
            "extra": "iterations: 5647\ncpu: 124.114799893749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.21353736218876,
            "unit": "us/iter",
            "extra": "iterations: 9796\ncpu: 71.20570467537783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.78328862508599,
            "unit": "us/iter",
            "extra": "iterations: 11288\ncpu: 60.77982432671864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.40636934558352,
            "unit": "us/iter",
            "extra": "iterations: 10987\ncpu: 62.40491344315999 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.60578420250129,
            "unit": "us/iter",
            "extra": "iterations: 11812\ncpu: 59.60029740941421 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.18240760821163,
            "unit": "us/iter",
            "extra": "iterations: 11251\ncpu: 61.178190649720335 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3683.172347368662,
            "unit": "us/iter",
            "extra": "iterations: 190\ncpu: 3682.6028999999835 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 942.9359650537342,
            "unit": "us/iter",
            "extra": "iterations: 744\ncpu: 942.9040860215077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.2749866666248,
            "unit": "us/iter",
            "extra": "iterations: 1125\ncpu: 621.2557884444436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.5889792438971,
            "unit": "us/iter",
            "extra": "iterations: 1349\ncpu: 516.5122994810993 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 493.53787825474376,
            "unit": "us/iter",
            "extra": "iterations: 1421\ncpu: 493.49541590429317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 463.02255718089214,
            "unit": "us/iter",
            "extra": "iterations: 1504\ncpu: 463.00861436170214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 451.5277944941948,
            "unit": "us/iter",
            "extra": "iterations: 1562\ncpu: 451.47841485275427 us\nthreads: 1"
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
            "value": 24.880391722569307,
            "unit": "us/iter",
            "extra": "iterations: 28173\ncpu: 24.877914528094298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.907019622462954,
            "unit": "us/iter",
            "extra": "iterations: 118028\ncpu: 5.906638585759305 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.472671232785883,
            "unit": "us/iter",
            "extra": "iterations: 150602\ncpu: 4.472098590988168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.117048662825354,
            "unit": "us/iter",
            "extra": "iterations: 178062\ncpu: 4.116510737832881 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.851383967608603,
            "unit": "us/iter",
            "extra": "iterations: 176343\ncpu: 3.8511024877653224 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.739848557155207,
            "unit": "us/iter",
            "extra": "iterations: 183561\ncpu: 3.739202853547328 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5848771983814647,
            "unit": "us/iter",
            "extra": "iterations: 194973\ncpu: 3.584604534986898 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 146.94915883340684,
            "unit": "us/iter",
            "extra": "iterations: 4766\ncpu: 146.9295423835512 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.891184315465424,
            "unit": "us/iter",
            "extra": "iterations: 22570\ncpu: 30.88874944616756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.414853081518068,
            "unit": "us/iter",
            "extra": "iterations: 29969\ncpu: 23.41208932563652 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.67241046491261,
            "unit": "us/iter",
            "extra": "iterations: 33942\ncpu: 20.67094867715519 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.158336262209456,
            "unit": "us/iter",
            "extra": "iterations: 34598\ncpu: 20.155214954621677 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.09659585774427,
            "unit": "us/iter",
            "extra": "iterations: 36695\ncpu: 19.0953837580053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.713776506668484,
            "unit": "us/iter",
            "extra": "iterations: 37500\ncpu: 18.71091842666677 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 341.5136102439203,
            "unit": "us/iter",
            "extra": "iterations: 2050\ncpu: 341.5001131707333 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.46297699952912,
            "unit": "us/iter",
            "extra": "iterations: 10565\ncpu: 66.45869370563184 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.47889212491506,
            "unit": "us/iter",
            "extra": "iterations: 14730\ncpu: 47.476586625933656 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.39708212996047,
            "unit": "us/iter",
            "extra": "iterations: 16620\ncpu: 41.388019735258545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 43.0220231948059,
            "unit": "us/iter",
            "extra": "iterations: 16771\ncpu: 43.01912843599082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.98434702807472,
            "unit": "us/iter",
            "extra": "iterations: 17598\ncpu: 40.98146135924535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 39.79838980716367,
            "unit": "us/iter",
            "extra": "iterations: 18150\ncpu: 39.79436754820968 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1867.5748853335485,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1867.3377786666756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.59197034884545,
            "unit": "us/iter",
            "extra": "iterations: 1720\ncpu: 408.55224941860644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 269.49886682517,
            "unit": "us/iter",
            "extra": "iterations: 2523\ncpu: 269.4898042013468 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.66056875615428,
            "unit": "us/iter",
            "extra": "iterations: 3047\ncpu: 228.64074926156894 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 221.80198224477067,
            "unit": "us/iter",
            "extra": "iterations: 3154\ncpu: 221.7806566265065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 212.11578326310777,
            "unit": "us/iter",
            "extra": "iterations: 3322\ncpu: 212.09705930162423 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 210.85514681035414,
            "unit": "us/iter",
            "extra": "iterations: 3433\ncpu: 210.8440276725893 us\nthreads: 1"
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
          "id": "22503c7c6a94b0cdc23708400ef02ab3b2ad91f1",
          "message": "Merge pull request #222 from genogrove/test/error-path-coverage-137\n\nAdd error-path tests for serialization, constructors, and edge cases",
          "timestamp": "2026-03-10T11:30:44-04:00",
          "tree_id": "d5da028c397e39629603411a2d78c8287b05b4e5",
          "url": "https://github.com/genogrove/genogrove/commit/22503c7c6a94b0cdc23708400ef02ab3b2ad91f1"
        },
        "date": 1773156924675,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.57511020139274,
            "unit": "us/iter",
            "extra": "iterations: 21252\ncpu: 33.569255928853764 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.641847903773891,
            "unit": "us/iter",
            "extra": "iterations: 91784\ncpu: 7.640635110694675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.050830310653495,
            "unit": "us/iter",
            "extra": "iterations: 136744\ncpu: 5.050299596325983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.332896291997633,
            "unit": "us/iter",
            "extra": "iterations: 161974\ncpu: 4.3324423240767045 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9633644939256323,
            "unit": "us/iter",
            "extra": "iterations: 169402\ncpu: 3.9631082513783777 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8727220086857335,
            "unit": "us/iter",
            "extra": "iterations: 180297\ncpu: 3.8724241556986545 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.8468138024214644,
            "unit": "us/iter",
            "extra": "iterations: 188735\ncpu: 3.8466379791771517 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.75958106555225,
            "unit": "us/iter",
            "extra": "iterations: 2609\ncpu: 269.7385868148718 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.7838080607034,
            "unit": "us/iter",
            "extra": "iterations: 16078\ncpu: 43.77976041796241 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.407522304751552,
            "unit": "us/iter",
            "extra": "iterations: 22753\ncpu: 30.40326515184811 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.002489965575847,
            "unit": "us/iter",
            "extra": "iterations: 27306\ncpu: 26.000490990990958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.12259559422382,
            "unit": "us/iter",
            "extra": "iterations: 27010\ncpu: 26.119400000000027 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.18338008465453,
            "unit": "us/iter",
            "extra": "iterations: 27878\ncpu: 25.18165463806585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.71481879483534,
            "unit": "us/iter",
            "extra": "iterations: 27880\ncpu: 24.71339687948355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 628.3155465116236,
            "unit": "us/iter",
            "extra": "iterations: 1118\ncpu: 628.2426127012526 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.26037561489527,
            "unit": "us/iter",
            "extra": "iterations: 5692\ncpu: 124.25143271257905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.90058574518375,
            "unit": "us/iter",
            "extra": "iterations: 9709\ncpu: 70.89534071480068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.523694336282446,
            "unit": "us/iter",
            "extra": "iterations: 11300\ncpu: 60.519545840707934 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.83462295684182,
            "unit": "us/iter",
            "extra": "iterations: 10890\ncpu: 63.83004444444441 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 61.513901324330874,
            "unit": "us/iter",
            "extra": "iterations: 11553\ncpu: 61.50816013156748 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.82131800731362,
            "unit": "us/iter",
            "extra": "iterations: 10940\ncpu: 62.817480164533904 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3644.857927461242,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3644.4446165803074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 895.3507404092152,
            "unit": "us/iter",
            "extra": "iterations: 782\ncpu: 895.2848222506404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 617.4590502645635,
            "unit": "us/iter",
            "extra": "iterations: 1134\ncpu: 617.4248571428576 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 520.1771001472605,
            "unit": "us/iter",
            "extra": "iterations: 1358\ncpu: 520.095054491901 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.618085614036,
            "unit": "us/iter",
            "extra": "iterations: 1425\ncpu: 491.57681964912246 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.8959080761667,
            "unit": "us/iter",
            "extra": "iterations: 1523\ncpu: 459.86269927774043 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 448.38821433141413,
            "unit": "us/iter",
            "extra": "iterations: 1563\ncpu: 448.33475559820886 us\nthreads: 1"
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
            "value": 25.55727999412251,
            "unit": "us/iter",
            "extra": "iterations: 27222\ncpu: 25.55527341855848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.032224661255811,
            "unit": "us/iter",
            "extra": "iterations: 115574\ncpu: 6.031844766123887 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.681826805524106,
            "unit": "us/iter",
            "extra": "iterations: 150178\ncpu: 4.681473051978307 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9800001702890264,
            "unit": "us/iter",
            "extra": "iterations: 176171\ncpu: 3.979458049281651 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8584228761896404,
            "unit": "us/iter",
            "extra": "iterations: 182408\ncpu: 3.8578862495066066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.788650461478759,
            "unit": "us/iter",
            "extra": "iterations: 185599\ncpu: 3.7883656377459074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.625292053107199,
            "unit": "us/iter",
            "extra": "iterations: 192893\ncpu: 3.6250501262357724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.23610563380595,
            "unit": "us/iter",
            "extra": "iterations: 4686\ncpu: 149.22651280409826 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.251212831640697,
            "unit": "us/iter",
            "extra": "iterations: 22351\ncpu: 31.248699431792918 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.565005962549034,
            "unit": "us/iter",
            "extra": "iterations: 29853\ncpu: 23.563852577630318 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.676728878014025,
            "unit": "us/iter",
            "extra": "iterations: 33922\ncpu: 20.675518748894483 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.514557440336905,
            "unit": "us/iter",
            "extra": "iterations: 34192\ncpu: 20.5125422613477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.999711967094083,
            "unit": "us/iter",
            "extra": "iterations: 35982\ncpu: 19.998663859707516 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.587795289805793,
            "unit": "us/iter",
            "extra": "iterations: 37111\ncpu: 19.585052383390416 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 339.16322340425603,
            "unit": "us/iter",
            "extra": "iterations: 2068\ncpu: 339.1237069632516 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 67.4878004977999,
            "unit": "us/iter",
            "extra": "iterations: 10446\ncpu: 67.4790895079459 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.38565853658572,
            "unit": "us/iter",
            "extra": "iterations: 14678\ncpu: 48.37965131489303 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 45.11980708975897,
            "unit": "us/iter",
            "extra": "iterations: 16277\ncpu: 45.11597554831959 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 42.897046299062204,
            "unit": "us/iter",
            "extra": "iterations: 16739\ncpu: 42.89369633789348 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 41.02458979335542,
            "unit": "us/iter",
            "extra": "iterations: 17518\ncpu: 41.020227537390184 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 39.6716406207156,
            "unit": "us/iter",
            "extra": "iterations: 18237\ncpu: 39.66807841201959 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1852.3315973684057,
            "unit": "us/iter",
            "extra": "iterations: 380\ncpu: 1852.230392105251 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 405.6243398844051,
            "unit": "us/iter",
            "extra": "iterations: 1730\ncpu: 405.5803028901767 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 276.959638709684,
            "unit": "us/iter",
            "extra": "iterations: 2480\ncpu: 276.93330161290527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 239.9949603760942,
            "unit": "us/iter",
            "extra": "iterations: 2978\ncpu: 239.97222934855475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 230.92768875701358,
            "unit": "us/iter",
            "extra": "iterations: 3033\ncpu: 230.91191031981504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.30063540373078,
            "unit": "us/iter",
            "extra": "iterations: 3220\ncpu: 216.28324968944088 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 212.30280327380905,
            "unit": "us/iter",
            "extra": "iterations: 3360\ncpu: 212.2354017857124 us\nthreads: 1"
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
          "id": "dbb90f3eae9b32ed6ff92fb1372c7a32027a88b4",
          "message": "Merge pull request #223 from genogrove/fix/rule-of-five-138\n\nEnforce Rule of Five on node and grove to prevent double-free",
          "timestamp": "2026-03-10T20:22:35-04:00",
          "tree_id": "92710f9bc5ae24f529e781b607b2c73a6b855862",
          "url": "https://github.com/genogrove/genogrove/commit/dbb90f3eae9b32ed6ff92fb1372c7a32027a88b4"
        },
        "date": 1773188800698,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.11717607695597,
            "unit": "us/iter",
            "extra": "iterations: 21519\ncpu: 33.11350006970584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.645990034436482,
            "unit": "us/iter",
            "extra": "iterations: 90311\ncpu: 7.645175272115245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.0621315601479635,
            "unit": "us/iter",
            "extra": "iterations: 138583\ncpu: 5.061539820901552 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.351420596279926,
            "unit": "us/iter",
            "extra": "iterations: 161233\ncpu: 4.350832497069459 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.027524384424808,
            "unit": "us/iter",
            "extra": "iterations: 173943\ncpu: 4.027206320461301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.915112806415594,
            "unit": "us/iter",
            "extra": "iterations: 180433\ncpu: 3.914927485548652 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.693488033337042,
            "unit": "us/iter",
            "extra": "iterations: 189819\ncpu: 3.693211712210054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.41592923077013,
            "unit": "us/iter",
            "extra": "iterations: 2600\ncpu: 269.40149230769225 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.8388724259171,
            "unit": "us/iter",
            "extra": "iterations: 15928\ncpu: 42.83415312656957 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.152201223162756,
            "unit": "us/iter",
            "extra": "iterations: 23382\ncpu: 30.15140445641943 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.513240332503752,
            "unit": "us/iter",
            "extra": "iterations: 27308\ncpu: 25.51112974220011 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.37510651828289,
            "unit": "us/iter",
            "extra": "iterations: 27047\ncpu: 26.37448567308755 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.232485918029194,
            "unit": "us/iter",
            "extra": "iterations: 27766\ncpu: 25.230080169992068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.42903032113043,
            "unit": "us/iter",
            "extra": "iterations: 28462\ncpu: 24.42917275665799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 625.8347589285863,
            "unit": "us/iter",
            "extra": "iterations: 1120\ncpu: 625.7763321428562 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.8630230414731,
            "unit": "us/iter",
            "extra": "iterations: 5859\ncpu: 120.84531353473284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.97047827881555,
            "unit": "us/iter",
            "extra": "iterations: 9691\ncpu: 71.96446950779082 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.6235228990653,
            "unit": "us/iter",
            "extra": "iterations: 11245\ncpu: 60.612710182303324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.47461336996422,
            "unit": "us/iter",
            "extra": "iterations: 10920\ncpu: 63.47274267399262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.8679062849289,
            "unit": "us/iter",
            "extra": "iterations: 11631\ncpu: 59.86227048405114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 63.54476034937785,
            "unit": "us/iter",
            "extra": "iterations: 10991\ncpu: 63.53818260394857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3651.4856230366604,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3651.0353612565395 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.7283672680591,
            "unit": "us/iter",
            "extra": "iterations: 776\ncpu: 903.6006198453616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 629.2178137869239,
            "unit": "us/iter",
            "extra": "iterations: 1117\ncpu: 629.1875631154891 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 519.6231291512885,
            "unit": "us/iter",
            "extra": "iterations: 1355\ncpu: 519.5567527675255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 494.18805363444943,
            "unit": "us/iter",
            "extra": "iterations: 1417\ncpu: 494.1550479887084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 461.9727155115415,
            "unit": "us/iter",
            "extra": "iterations: 1515\ncpu: 461.9043372937299 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.6999244074324,
            "unit": "us/iter",
            "extra": "iterations: 1561\ncpu: 446.6594849455486 us\nthreads: 1"
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
            "value": 25.045508966603148,
            "unit": "us/iter",
            "extra": "iterations: 27937\ncpu: 25.04459140208323 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.969001110658948,
            "unit": "us/iter",
            "extra": "iterations: 117948\ncpu: 5.968856173907125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.667781598101985,
            "unit": "us/iter",
            "extra": "iterations: 149202\ncpu: 4.6674635192557785 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.988778027585529,
            "unit": "us/iter",
            "extra": "iterations: 174801\ncpu: 3.988578412022798 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8543411692165197,
            "unit": "us/iter",
            "extra": "iterations: 181643\ncpu: 3.854248415848662 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7884113692364365,
            "unit": "us/iter",
            "extra": "iterations: 183847\ncpu: 3.787939716177032 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.656336305798888,
            "unit": "us/iter",
            "extra": "iterations: 191760\ncpu: 3.6563567688777625 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.81571497788212,
            "unit": "us/iter",
            "extra": "iterations: 4747\ncpu: 147.79765451864347 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.129745900908787,
            "unit": "us/iter",
            "extra": "iterations: 22444\ncpu: 31.128297495990022 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.520565571015513,
            "unit": "us/iter",
            "extra": "iterations: 29754\ncpu: 23.51837685689308 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.63091999292439,
            "unit": "us/iter",
            "extra": "iterations: 33922\ncpu: 20.62959218206491 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.554145208529075,
            "unit": "us/iter",
            "extra": "iterations: 34144\ncpu: 20.55302220009369 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.503812595663813,
            "unit": "us/iter",
            "extra": "iterations: 35933\ncpu: 19.50194164138812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.067229755590443,
            "unit": "us/iter",
            "extra": "iterations: 36578\ncpu: 19.065749384876185 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 340.603422535206,
            "unit": "us/iter",
            "extra": "iterations: 2059\ncpu: 340.58178096163044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.28177861003128,
            "unit": "us/iter",
            "extra": "iterations: 10547\ncpu: 66.27790641888717 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.04737758410937,
            "unit": "us/iter",
            "extra": "iterations: 14802\ncpu: 47.040502094311364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.46191486966952,
            "unit": "us/iter",
            "extra": "iterations: 16880\ncpu: 41.45877517772507 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.293141026394146,
            "unit": "us/iter",
            "extra": "iterations: 17011\ncpu: 41.29257586267699 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.647200938541545,
            "unit": "us/iter",
            "extra": "iterations: 17687\ncpu: 39.64272069881836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.50023130892305,
            "unit": "us/iter",
            "extra": "iterations: 18244\ncpu: 38.498298563911334 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1868.274063660428,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1868.068029177707 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.4283109292792,
            "unit": "us/iter",
            "extra": "iterations: 1711\ncpu: 410.42419053185455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.5769661893372,
            "unit": "us/iter",
            "extra": "iterations: 2514\ncpu: 278.55334128878286 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 235.14283294117993,
            "unit": "us/iter",
            "extra": "iterations: 2975\ncpu: 235.14038991596595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.69839020434972,
            "unit": "us/iter",
            "extra": "iterations: 3083\ncpu: 226.66672072656505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 214.5162432598111,
            "unit": "us/iter",
            "extra": "iterations: 3264\ncpu: 214.51773560048915 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.38432987859514,
            "unit": "us/iter",
            "extra": "iterations: 3377\ncpu: 206.3601036422872 us\nthreads: 1"
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
          "id": "a2c64d3cc7c0818158a2159fa834e647d011a4f7",
          "message": "Merge pull request #224 from genogrove/fix/set-root-nodes-dangling-140\n\nClear key storage and graph overlay in set_root_nodes()",
          "timestamp": "2026-03-10T22:17:56-04:00",
          "tree_id": "307d1821f5fbb1cdda7938c6200814db6949b226",
          "url": "https://github.com/genogrove/genogrove/commit/a2c64d3cc7c0818158a2159fa834e647d011a4f7"
        },
        "date": 1773195717223,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.99735927684288,
            "unit": "us/iter",
            "extra": "iterations: 20853\ncpu: 32.99386817244522 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.695130884624218,
            "unit": "us/iter",
            "extra": "iterations: 92593\ncpu: 7.694461427969715 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.054232511134659,
            "unit": "us/iter",
            "extra": "iterations: 138531\ncpu: 5.053590149497224 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.291377033960637,
            "unit": "us/iter",
            "extra": "iterations: 161569\ncpu: 4.290911827145061 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9797127876773444,
            "unit": "us/iter",
            "extra": "iterations: 176326\ncpu: 3.979368295089778 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.908756834710098,
            "unit": "us/iter",
            "extra": "iterations: 178208\ncpu: 3.9084027765307927 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7276954044594794,
            "unit": "us/iter",
            "extra": "iterations: 188857\ncpu: 3.727213023610455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 268.23712332439675,
            "unit": "us/iter",
            "extra": "iterations: 2611\ncpu: 268.2293761011109 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.03071473392888,
            "unit": "us/iter",
            "extra": "iterations: 16255\ncpu: 43.0271619194094 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.405702607348633,
            "unit": "us/iter",
            "extra": "iterations: 23242\ncpu: 30.40371594527146 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.47009233519309,
            "unit": "us/iter",
            "extra": "iterations: 27411\ncpu: 25.468647696180366 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.82647038006468,
            "unit": "us/iter",
            "extra": "iterations: 27127\ncpu: 25.826350757547832 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.33152438673405,
            "unit": "us/iter",
            "extra": "iterations: 27802\ncpu: 25.328870620818662 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.683626227085142,
            "unit": "us/iter",
            "extra": "iterations: 28421\ncpu: 24.683177650328968 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 625.1008535714269,
            "unit": "us/iter",
            "extra": "iterations: 1120\ncpu: 624.9796812499994 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 119.16324218616357,
            "unit": "us/iter",
            "extra": "iterations: 5855\ncpu: 119.14784508966696 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.8783987075606,
            "unit": "us/iter",
            "extra": "iterations: 9749\ncpu: 71.87146722740779 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.88696036801016,
            "unit": "us/iter",
            "extra": "iterations: 11304\ncpu: 60.87603733191781 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.305238976201146,
            "unit": "us/iter",
            "extra": "iterations: 11135\ncpu: 63.30429357880581 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.30179277067714,
            "unit": "us/iter",
            "extra": "iterations: 11813\ncpu: 59.29622720731409 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.429968930826945,
            "unit": "us/iter",
            "extra": "iterations: 11233\ncpu: 61.42764079052792 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3635.4370880828715,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3635.258461139905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.2271182519091,
            "unit": "us/iter",
            "extra": "iterations: 778\ncpu: 900.1342185090001 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 624.4859714795027,
            "unit": "us/iter",
            "extra": "iterations: 1122\ncpu: 624.4482165775402 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 516.6749512194964,
            "unit": "us/iter",
            "extra": "iterations: 1353\ncpu: 516.6298048780499 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.7966130617892,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 490.7883967696631 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.5435988181157,
            "unit": "us/iter",
            "extra": "iterations: 1523\ncpu: 459.51148850952137 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.02361798468894,
            "unit": "us/iter",
            "extra": "iterations: 1568\ncpu: 446.00970982142843 us\nthreads: 1"
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
            "value": 25.440781924917655,
            "unit": "us/iter",
            "extra": "iterations: 27596\ncpu: 25.439356863313638 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.100665559398608,
            "unit": "us/iter",
            "extra": "iterations: 116804\ncpu: 6.100520564364239 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.838659225321582,
            "unit": "us/iter",
            "extra": "iterations: 145583\ncpu: 4.838521606231499 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.063139939050858,
            "unit": "us/iter",
            "extra": "iterations: 172275\ncpu: 4.062945923668549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.993806112718774,
            "unit": "us/iter",
            "extra": "iterations: 180378\ncpu: 3.9936941367572536 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.857675286818904,
            "unit": "us/iter",
            "extra": "iterations: 181822\ncpu: 3.857421714644022 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6958349751621724,
            "unit": "us/iter",
            "extra": "iterations: 190032\ncpu: 3.6958027911088775 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.83433624547067,
            "unit": "us/iter",
            "extra": "iterations: 4693\ncpu: 148.82205987641132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.45165144801019,
            "unit": "us/iter",
            "extra": "iterations: 22341\ncpu: 31.450821225549564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.573000365777133,
            "unit": "us/iter",
            "extra": "iterations: 30073\ncpu: 23.571328001862152 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.652528190701915,
            "unit": "us/iter",
            "extra": "iterations: 33770\ncpu: 20.651879419603176 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.640928202250553,
            "unit": "us/iter",
            "extra": "iterations: 33859\ncpu: 20.640100209693188 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.47478443743437,
            "unit": "us/iter",
            "extra": "iterations: 36138\ncpu: 19.474136947257634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.090324325059964,
            "unit": "us/iter",
            "extra": "iterations: 36744\ncpu: 19.089513498802532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.05219794218726,
            "unit": "us/iter",
            "extra": "iterations: 2041\ncpu: 343.0357942185229 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.34396239105733,
            "unit": "us/iter",
            "extra": "iterations: 10556\ncpu: 66.34280409245946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.3260589108565,
            "unit": "us/iter",
            "extra": "iterations: 14819\ncpu: 47.324981915108836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.836621863264476,
            "unit": "us/iter",
            "extra": "iterations: 16777\ncpu: 41.834185015199274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.22808627312004,
            "unit": "us/iter",
            "extra": "iterations: 16923\ncpu: 41.22687555397995 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.941064182665414,
            "unit": "us/iter",
            "extra": "iterations: 17606\ncpu: 39.9373122799045 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.45492081324041,
            "unit": "us/iter",
            "extra": "iterations: 18248\ncpu: 38.45350893248597 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1867.447692513362,
            "unit": "us/iter",
            "extra": "iterations: 374\ncpu: 1867.2991390374364 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 407.13839115250295,
            "unit": "us/iter",
            "extra": "iterations: 1718\ncpu: 407.11784342258215 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 268.210122315952,
            "unit": "us/iter",
            "extra": "iterations: 2608\ncpu: 268.19369401840487 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 229.93456876838025,
            "unit": "us/iter",
            "extra": "iterations: 3061\ncpu: 229.928605031037 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.17835885012485,
            "unit": "us/iter",
            "extra": "iterations: 3096\ncpu: 226.14163113694974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.58583821263065,
            "unit": "us/iter",
            "extra": "iterations: 3245\ncpu: 215.57511402157132 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.35736360937983,
            "unit": "us/iter",
            "extra": "iterations: 3369\ncpu: 206.33254942119345 us\nthreads: 1"
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
          "id": "fc3cf005bb8fdc519a457d4bdb5b0e92ab26bb3b",
          "message": "Merge pull request #225 from genogrove/fix/reader-move-ctor-base-148\n\nForward base class in IO reader move operations",
          "timestamp": "2026-03-11T22:30:21-04:00",
          "tree_id": "c58b4300e8084a25708d75c93ae0a369de6dce77",
          "url": "https://github.com/genogrove/genogrove/commit/fc3cf005bb8fdc519a457d4bdb5b0e92ab26bb3b"
        },
        "date": 1773282851983,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.62442552386473,
            "unit": "us/iter",
            "extra": "iterations: 21141\ncpu: 32.61724951516012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.534602311653093,
            "unit": "us/iter",
            "extra": "iterations: 92834\ncpu: 7.5332394273649745 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.053389960022281,
            "unit": "us/iter",
            "extra": "iterations: 138327\ncpu: 5.053042985100521 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.298178894650526,
            "unit": "us/iter",
            "extra": "iterations: 163532\ncpu: 4.297644344837709 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.940114820897544,
            "unit": "us/iter",
            "extra": "iterations: 177189\ncpu: 3.939551597446793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.854889549889771,
            "unit": "us/iter",
            "extra": "iterations: 181711\ncpu: 3.8546386239688304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.698125315467062,
            "unit": "us/iter",
            "extra": "iterations: 188213\ncpu: 3.6972182049061466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 276.6055475915204,
            "unit": "us/iter",
            "extra": "iterations: 2595\ncpu: 276.5606851637761 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.855827775598385,
            "unit": "us/iter",
            "extra": "iterations: 15294\ncpu: 42.851394599189206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.370236138828375,
            "unit": "us/iter",
            "extra": "iterations: 23050\ncpu: 30.367967939262424 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.756983661330402,
            "unit": "us/iter",
            "extra": "iterations: 27236\ncpu: 25.754440373035667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.808863247862824,
            "unit": "us/iter",
            "extra": "iterations: 26559\ncpu: 25.806604390225555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.349164831498356,
            "unit": "us/iter",
            "extra": "iterations: 26973\ncpu: 25.3459109109109 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.557814873641203,
            "unit": "us/iter",
            "extra": "iterations: 28332\ncpu: 24.556430255541382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 624.7319412288498,
            "unit": "us/iter",
            "extra": "iterations: 1123\ncpu: 624.5886046304548 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 118.92498025973939,
            "unit": "us/iter",
            "extra": "iterations: 5775\ncpu: 118.91498857142871 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.5363923068972,
            "unit": "us/iter",
            "extra": "iterations: 9671\ncpu: 71.5285840140627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.92168934575988,
            "unit": "us/iter",
            "extra": "iterations: 11479\ncpu: 60.91489162819043 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 64.55575809008708,
            "unit": "us/iter",
            "extra": "iterations: 10723\ncpu: 64.55063368460297 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.504297752312915,
            "unit": "us/iter",
            "extra": "iterations: 11345\ncpu: 59.493916615249105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.42404798112374,
            "unit": "us/iter",
            "extra": "iterations: 11442\ncpu: 61.42088000349583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3663.0113697917463,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3662.6545468749955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 899.7159487179464,
            "unit": "us/iter",
            "extra": "iterations: 780\ncpu: 899.652426923075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 620.0663955752361,
            "unit": "us/iter",
            "extra": "iterations: 1130\ncpu: 620.0108469026544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.569176513478,
            "unit": "us/iter",
            "extra": "iterations: 1371\ncpu: 513.4659139314389 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.4819096638699,
            "unit": "us/iter",
            "extra": "iterations: 1428\ncpu: 490.43872689075783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 457.598889691387,
            "unit": "us/iter",
            "extra": "iterations: 1523\ncpu: 457.5716671043979 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 447.34389514064884,
            "unit": "us/iter",
            "extra": "iterations: 1564\ncpu: 447.2857135549888 us\nthreads: 1"
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
            "value": 25.121228945274936,
            "unit": "us/iter",
            "extra": "iterations: 27666\ncpu: 25.119565170245114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.954636779085439,
            "unit": "us/iter",
            "extra": "iterations: 117507\ncpu: 5.954166934735806 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.521649244636969,
            "unit": "us/iter",
            "extra": "iterations: 155091\ncpu: 4.5215503220689675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9413158544039337,
            "unit": "us/iter",
            "extra": "iterations: 178329\ncpu: 3.9406973066635222 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8289059897786197,
            "unit": "us/iter",
            "extra": "iterations: 185299\ncpu: 3.828704742065532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.6972362355447266,
            "unit": "us/iter",
            "extra": "iterations: 189637\ncpu: 3.6966813754699794 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.5608280391737686,
            "unit": "us/iter",
            "extra": "iterations: 196254\ncpu: 3.560614963261888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 146.46410822147703,
            "unit": "us/iter",
            "extra": "iterations: 4768\ncpu: 146.4470230704694 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.749180159080385,
            "unit": "us/iter",
            "extra": "iterations: 22630\ncpu: 30.747086124613237 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.243601280384688,
            "unit": "us/iter",
            "extra": "iterations: 29991\ncpu: 23.24004974825783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.502063252481395,
            "unit": "us/iter",
            "extra": "iterations: 34054\ncpu: 20.500787367122758 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.706214917863395,
            "unit": "us/iter",
            "extra": "iterations: 33785\ncpu: 20.702883321000524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.329564000776998,
            "unit": "us/iter",
            "extra": "iterations: 36023\ncpu: 19.328815978680243 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.85016383801484,
            "unit": "us/iter",
            "extra": "iterations: 37238\ncpu: 18.849129894194135 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.38633609351973,
            "unit": "us/iter",
            "extra": "iterations: 2053\ncpu: 343.3753843156378 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.56143688223642,
            "unit": "us/iter",
            "extra": "iterations: 10623\ncpu: 66.55360039536905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.138954398273754,
            "unit": "us/iter",
            "extra": "iterations: 14824\ncpu: 47.138336886130524 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.342765407200226,
            "unit": "us/iter",
            "extra": "iterations: 16859\ncpu: 41.33258259683227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.36584402089923,
            "unit": "us/iter",
            "extra": "iterations: 16842\ncpu: 41.36231368008571 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.556769902471515,
            "unit": "us/iter",
            "extra": "iterations: 17636\ncpu: 39.55117583352232 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.744098789427944,
            "unit": "us/iter",
            "extra": "iterations: 18008\ncpu: 38.7417938138606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1869.6318388889051,
            "unit": "us/iter",
            "extra": "iterations: 360\ncpu: 1869.3374194444464 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.623071842409,
            "unit": "us/iter",
            "extra": "iterations: 1726\ncpu: 406.59190150637403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 267.00261268143413,
            "unit": "us/iter",
            "extra": "iterations: 2618\ncpu: 266.98121466768504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 226.49411031797473,
            "unit": "us/iter",
            "extra": "iterations: 3082\ncpu: 226.47943867618244 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.3540075590522,
            "unit": "us/iter",
            "extra": "iterations: 3175\ncpu: 220.33115181102178 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 208.79647099282042,
            "unit": "us/iter",
            "extra": "iterations: 3344\ncpu: 208.78518092105085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 203.1673272251308,
            "unit": "us/iter",
            "extra": "iterations: 3438\ncpu: 203.15383100639835 us\nthreads: 1"
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
          "id": "518e93bfb3a0f89ec35b6afda0a84d9826366f3b",
          "message": "Merge pull request #226 from genogrove/fix/data-registry-pointer-stability-143\n\nFix data_registry::get() pointer invalidation hazard",
          "timestamp": "2026-03-13T23:09:06-04:00",
          "tree_id": "76ac18fb1a17173b511499229a49e9ad27a9be22",
          "url": "https://github.com/genogrove/genogrove/commit/518e93bfb3a0f89ec35b6afda0a84d9826366f3b"
        },
        "date": 1773457996001,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.422463665233856,
            "unit": "us/iter",
            "extra": "iterations: 21412\ncpu: 32.421074864561916 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.635043401307345,
            "unit": "us/iter",
            "extra": "iterations: 92094\ncpu: 7.6338907855017695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.185227096612924,
            "unit": "us/iter",
            "extra": "iterations: 136017\ncpu: 5.184275612607247 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.392775409612668,
            "unit": "us/iter",
            "extra": "iterations: 161494\ncpu: 4.392161287725858 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9992999748395524,
            "unit": "us/iter",
            "extra": "iterations: 174878\ncpu: 3.9985271732293386 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9330789816352354,
            "unit": "us/iter",
            "extra": "iterations: 178168\ncpu: 3.9329214224776607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.708324994309468,
            "unit": "us/iter",
            "extra": "iterations: 188911\ncpu: 3.708175807655461 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.9221144067784,
            "unit": "us/iter",
            "extra": "iterations: 2596\ncpu: 269.91368682588575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.95255676239538,
            "unit": "us/iter",
            "extra": "iterations: 16296\ncpu: 42.9508892979873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.18487972330296,
            "unit": "us/iter",
            "extra": "iterations: 23130\ncpu: 30.183268612191945 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.56193929303379,
            "unit": "us/iter",
            "extra": "iterations: 27328\ncpu: 25.560909653103035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.78156493843619,
            "unit": "us/iter",
            "extra": "iterations: 26964\ncpu: 25.7796209390298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.271263577300296,
            "unit": "us/iter",
            "extra": "iterations: 27859\ncpu: 25.269167988800728 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.56262187521863,
            "unit": "us/iter",
            "extra": "iterations: 28562\ncpu: 24.560830684125754 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 624.0370418149579,
            "unit": "us/iter",
            "extra": "iterations: 1124\ncpu: 623.9899777580074 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.6470170384722,
            "unit": "us/iter",
            "extra": "iterations: 5693\ncpu: 122.64237677849992 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 69.83985065600588,
            "unit": "us/iter",
            "extra": "iterations: 9756\ncpu: 69.83623544485435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 59.961959955025584,
            "unit": "us/iter",
            "extra": "iterations: 11562\ncpu: 59.95826050856237 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.311256575463474,
            "unit": "us/iter",
            "extra": "iterations: 11330\ncpu: 62.309192850838414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.62919162180296,
            "unit": "us/iter",
            "extra": "iterations: 11888\ncpu: 58.625964417900605 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.21332023224474,
            "unit": "us/iter",
            "extra": "iterations: 11195\ncpu: 61.211253863332026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3676.8598010470396,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3676.5212094240933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.5213088803306,
            "unit": "us/iter",
            "extra": "iterations: 777\ncpu: 900.4685611325577 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.621647424504,
            "unit": "us/iter",
            "extra": "iterations: 1126\ncpu: 621.5567415630536 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.7165763837652,
            "unit": "us/iter",
            "extra": "iterations: 1355\ncpu: 515.6821269372704 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 493.23941126759485,
            "unit": "us/iter",
            "extra": "iterations: 1420\ncpu: 493.17990281690317 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.141822950828,
            "unit": "us/iter",
            "extra": "iterations: 1525\ncpu: 459.09347475409936 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 449.3421182519239,
            "unit": "us/iter",
            "extra": "iterations: 1556\ncpu: 449.28062724935705 us\nthreads: 1"
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
            "value": 25.36803348482154,
            "unit": "us/iter",
            "extra": "iterations: 27505\ncpu: 25.366552554081075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.114694478377824,
            "unit": "us/iter",
            "extra": "iterations: 114604\ncpu: 6.114113538794484 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.741890330108668,
            "unit": "us/iter",
            "extra": "iterations: 147406\ncpu: 4.741624275809649 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.200656026897173,
            "unit": "us/iter",
            "extra": "iterations: 166263\ncpu: 4.200319680265601 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 4.196144798692653,
            "unit": "us/iter",
            "extra": "iterations: 168275\ncpu: 4.196034936859291 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 4.004354855030609,
            "unit": "us/iter",
            "extra": "iterations: 168001\ncpu: 4.0040449521133965 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.911853501859947,
            "unit": "us/iter",
            "extra": "iterations: 168282\ncpu: 3.9115047658097724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 146.8515689655134,
            "unit": "us/iter",
            "extra": "iterations: 4756\ncpu: 146.84329184188394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.22323286642151,
            "unit": "us/iter",
            "extra": "iterations: 22631\ncpu: 31.220410012814284 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.550157483366345,
            "unit": "us/iter",
            "extra": "iterations: 30962\ncpu: 22.54925353659313 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.377499868200896,
            "unit": "us/iter",
            "extra": "iterations: 34143\ncpu: 20.376909820461012 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 21.19958025922278,
            "unit": "us/iter",
            "extra": "iterations: 33099\ncpu: 21.19848599655575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.357332759434414,
            "unit": "us/iter",
            "extra": "iterations: 36011\ncpu: 19.356623698314333 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.696591656779333,
            "unit": "us/iter",
            "extra": "iterations: 37084\ncpu: 18.695229371157357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 340.43597425934803,
            "unit": "us/iter",
            "extra": "iterations: 2059\ncpu: 340.4207280233127 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.61539373687071,
            "unit": "us/iter",
            "extra": "iterations: 10474\ncpu: 66.60843612755403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.53673978479878,
            "unit": "us/iter",
            "extra": "iterations: 14684\ncpu: 47.535069599564075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.91530616765799,
            "unit": "us/iter",
            "extra": "iterations: 17154\ncpu: 41.91291354786026 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.94961446913176,
            "unit": "us/iter",
            "extra": "iterations: 17057\ncpu: 40.945679134666165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.78336930603984,
            "unit": "us/iter",
            "extra": "iterations: 17782\ncpu: 39.780517545833085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 39.26890964936196,
            "unit": "us/iter",
            "extra": "iterations: 18395\ncpu: 39.26578564827387 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1869.6722719999646,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1869.554477333319 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.402298663565,
            "unit": "us/iter",
            "extra": "iterations: 1721\ncpu: 406.36877454968044 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.4920988372156,
            "unit": "us/iter",
            "extra": "iterations: 2580\ncpu: 278.48334806201797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 230.6147580433357,
            "unit": "us/iter",
            "extra": "iterations: 3046\ncpu: 230.59861063690047 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 234.946025917208,
            "unit": "us/iter",
            "extra": "iterations: 2971\ncpu: 234.93507202961857 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 212.31181856667035,
            "unit": "us/iter",
            "extra": "iterations: 3307\ncpu: 212.2893568188681 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 207.83357531010006,
            "unit": "us/iter",
            "extra": "iterations: 3386\ncpu: 207.82496337861838 us\nthreads: 1"
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
          "id": "3be86422e49dd1388d1a207ad3fba08c4e7a9a88",
          "message": "Merge pull request #227 from genogrove/refactor/encapsulate-internal-methods-155\n\nEncapsulate grove/node internal methods",
          "timestamp": "2026-03-14T00:08:13-04:00",
          "tree_id": "47bd72470df29c090f1337607a1b7c0672bc0703",
          "url": "https://github.com/genogrove/genogrove/commit/3be86422e49dd1388d1a207ad3fba08c4e7a9a88"
        },
        "date": 1773461542929,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.479847421609655,
            "unit": "us/iter",
            "extra": "iterations: 21176\ncpu: 33.47791263694749 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.786035216881069,
            "unit": "us/iter",
            "extra": "iterations: 90326\ncpu: 7.785044937227376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.049632631390103,
            "unit": "us/iter",
            "extra": "iterations: 139375\ncpu: 5.0492035443946195 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.27581247823494,
            "unit": "us/iter",
            "extra": "iterations: 160808\ncpu: 4.275423386896175 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.958288829847303,
            "unit": "us/iter",
            "extra": "iterations: 176900\ncpu: 3.958159140757491 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8703330890659116,
            "unit": "us/iter",
            "extra": "iterations: 181495\ncpu: 3.8699205597950352 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.69915946808738,
            "unit": "us/iter",
            "extra": "iterations: 189204\ncpu: 3.6991099976744692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.887167506789,
            "unit": "us/iter",
            "extra": "iterations: 2579\ncpu: 272.87177975959673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.31878316310672,
            "unit": "us/iter",
            "extra": "iterations: 16155\ncpu: 43.31733655215107 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.45389284768218,
            "unit": "us/iter",
            "extra": "iterations: 22650\ncpu: 30.453278454746105 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.23042798158378,
            "unit": "us/iter",
            "extra": "iterations: 27368\ncpu: 26.229550350774613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.561457567548015,
            "unit": "us/iter",
            "extra": "iterations: 27314\ncpu: 25.559153547631276 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.76422390850899,
            "unit": "us/iter",
            "extra": "iterations: 27806\ncpu: 25.763461734877392 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.617796216962024,
            "unit": "us/iter",
            "extra": "iterations: 27544\ncpu: 24.617112801336066 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 631.0793010849806,
            "unit": "us/iter",
            "extra": "iterations: 1106\ncpu: 631.0759159132009 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.85747535460976,
            "unit": "us/iter",
            "extra": "iterations: 5640\ncpu: 123.84801560283668 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.30939957090443,
            "unit": "us/iter",
            "extra": "iterations: 9788\ncpu: 71.30744166326123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 60.569992627697445,
            "unit": "us/iter",
            "extra": "iterations: 11394\ncpu: 60.567361944883466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.12167783036117,
            "unit": "us/iter",
            "extra": "iterations: 10988\ncpu: 63.11870331270452 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 58.58849055484906,
            "unit": "us/iter",
            "extra": "iterations: 11805\ncpu: 58.58670131300301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.23245982420305,
            "unit": "us/iter",
            "extra": "iterations: 11263\ncpu: 62.228535647696106 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3645.2273489582985,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3645.101291666675 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 899.2601456185558,
            "unit": "us/iter",
            "extra": "iterations: 776\ncpu: 899.1616804123679 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 619.2584916151732,
            "unit": "us/iter",
            "extra": "iterations: 1133\ncpu: 619.2068217122687 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.7592320117508,
            "unit": "us/iter",
            "extra": "iterations: 1362\ncpu: 513.7400212922172 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.65389418360803,
            "unit": "us/iter",
            "extra": "iterations: 1427\ncpu: 490.6397091800982 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 457.58611430480363,
            "unit": "us/iter",
            "extra": "iterations: 1496\ncpu: 457.54752272727166 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.4147639155494,
            "unit": "us/iter",
            "extra": "iterations: 1563\ncpu: 446.38815802943185 us\nthreads: 1"
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
            "value": 25.224088058203666,
            "unit": "us/iter",
            "extra": "iterations: 27902\ncpu: 25.22033714429076 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.014755016272371,
            "unit": "us/iter",
            "extra": "iterations: 117069\ncpu: 6.014449931237117 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.657442909310185,
            "unit": "us/iter",
            "extra": "iterations: 149245\ncpu: 4.657127099735331 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9534355088291306,
            "unit": "us/iter",
            "extra": "iterations: 179009\ncpu: 3.9532953482785964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8323635728293692,
            "unit": "us/iter",
            "extra": "iterations: 184582\ncpu: 3.831945119242406 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.805334597202736,
            "unit": "us/iter",
            "extra": "iterations: 183827\ncpu: 3.8051800932398585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.6679406784981667,
            "unit": "us/iter",
            "extra": "iterations: 191128\ncpu: 3.6677423663723037 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.94846718882667,
            "unit": "us/iter",
            "extra": "iterations: 4724\ncpu: 147.94292294665527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.166024344651994,
            "unit": "us/iter",
            "extra": "iterations: 22469\ncpu: 31.162260180693277 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.90944374379821,
            "unit": "us/iter",
            "extra": "iterations: 31241\ncpu: 22.908216766428644 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.234407135664046,
            "unit": "us/iter",
            "extra": "iterations: 34755\ncpu: 20.232143432599607 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.122207138322803,
            "unit": "us/iter",
            "extra": "iterations: 34658\ncpu: 20.121259564891204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.510814720255116,
            "unit": "us/iter",
            "extra": "iterations: 36426\ncpu: 19.508618212265986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.727279400368253,
            "unit": "us/iter",
            "extra": "iterations: 37423\ncpu: 18.726391523929124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 338.41180165288716,
            "unit": "us/iter",
            "extra": "iterations: 2057\ncpu: 338.38419834710834 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.3961691022965,
            "unit": "us/iter",
            "extra": "iterations: 10538\ncpu: 66.39125128107771 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.28844595962934,
            "unit": "us/iter",
            "extra": "iterations: 14813\ncpu: 47.283029501113504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.38091957358593,
            "unit": "us/iter",
            "extra": "iterations: 16885\ncpu: 41.37938116671572 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.5835779352228,
            "unit": "us/iter",
            "extra": "iterations: 16796\ncpu: 41.581261252679504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.3386256754452,
            "unit": "us/iter",
            "extra": "iterations: 17581\ncpu: 39.33771634150489 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.3884918372914,
            "unit": "us/iter",
            "extra": "iterations: 18315\ncpu: 38.387338629538796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1860.8488859416173,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1860.760400530496 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 405.09648428405353,
            "unit": "us/iter",
            "extra": "iterations: 1718\ncpu: 405.0710203725288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 266.53929305715303,
            "unit": "us/iter",
            "extra": "iterations: 2607\ncpu: 266.51946336785505 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 226.6444360252461,
            "unit": "us/iter",
            "extra": "iterations: 3009\ncpu: 226.6378032568954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 220.0224731890942,
            "unit": "us/iter",
            "extra": "iterations: 3189\ncpu: 220.01758921291975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 208.83366217834788,
            "unit": "us/iter",
            "extra": "iterations: 3342\ncpu: 208.82699910233418 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 202.66518438491164,
            "unit": "us/iter",
            "extra": "iterations: 3471\ncpu: 202.65733419763896 us\nthreads: 1"
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
          "id": "27b96fee2a3cc71a8988265f59a4643e6536e0ff",
          "message": "Merge pull request #228 from genogrove/fix/index-registry-singleton-147\n\nComplete index_registry singleton pattern",
          "timestamp": "2026-03-14T16:58:18-04:00",
          "tree_id": "050fc53b2c186b6a9ed86e01264595bfbbcd6c3a",
          "url": "https://github.com/genogrove/genogrove/commit/27b96fee2a3cc71a8988265f59a4643e6536e0ff"
        },
        "date": 1773522142878,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.668269292832974,
            "unit": "us/iter",
            "extra": "iterations: 21070\ncpu: 32.662936877076405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.566897699176152,
            "unit": "us/iter",
            "extra": "iterations: 92619\ncpu: 7.565926591736037 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.042024191957805,
            "unit": "us/iter",
            "extra": "iterations: 136905\ncpu: 5.041839552974691 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.2962076200552755,
            "unit": "us/iter",
            "extra": "iterations: 162571\ncpu: 4.295701121356206 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9692030672380905,
            "unit": "us/iter",
            "extra": "iterations: 176641\ncpu: 3.968945646820387 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.8973583260147024,
            "unit": "us/iter",
            "extra": "iterations: 179906\ncpu: 3.8969384122819672 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.689264259405068,
            "unit": "us/iter",
            "extra": "iterations: 187876\ncpu: 3.6887466041431622 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.46386666667723,
            "unit": "us/iter",
            "extra": "iterations: 2610\ncpu: 269.44233256704956 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 42.78442917328055,
            "unit": "us/iter",
            "extra": "iterations: 16378\ncpu: 42.77792801318844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.692871395740525,
            "unit": "us/iter",
            "extra": "iterations: 23063\ncpu: 30.69095438581279 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.475512023976474,
            "unit": "us/iter",
            "extra": "iterations: 27362\ncpu: 25.472188948176285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.488786480049,
            "unit": "us/iter",
            "extra": "iterations: 26864\ncpu: 25.487275052114367 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.27695328122057,
            "unit": "us/iter",
            "extra": "iterations: 27505\ncpu: 25.273349790947073 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.26974925610518,
            "unit": "us/iter",
            "extra": "iterations: 28902\ncpu: 24.268359075496466 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 628.5328105451288,
            "unit": "us/iter",
            "extra": "iterations: 1119\ncpu: 628.4322144772123 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 122.32693369489505,
            "unit": "us/iter",
            "extra": "iterations: 5716\ncpu: 122.31323233030103 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.09804808080729,
            "unit": "us/iter",
            "extra": "iterations: 9900\ncpu: 70.09295393939404 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.474015104124135,
            "unit": "us/iter",
            "extra": "iterations: 11189\ncpu: 61.46315148806888 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.63687832907583,
            "unit": "us/iter",
            "extra": "iterations: 10964\ncpu: 63.627282561109155 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.33698604410975,
            "unit": "us/iter",
            "extra": "iterations: 11608\ncpu: 59.33263258097845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 60.9131368579237,
            "unit": "us/iter",
            "extra": "iterations: 11311\ncpu: 60.772836265582235 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3645.8394816754685,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3645.4913769633436 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 900.7860591259428,
            "unit": "us/iter",
            "extra": "iterations: 778\ncpu: 900.715600257068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.7464204444493,
            "unit": "us/iter",
            "extra": "iterations: 1125\ncpu: 621.7019715555555 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 514.9981173431736,
            "unit": "us/iter",
            "extra": "iterations: 1355\ncpu: 514.9100738007371 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 491.61605960730196,
            "unit": "us/iter",
            "extra": "iterations: 1426\ncpu: 491.58116760168247 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 459.72913845145996,
            "unit": "us/iter",
            "extra": "iterations: 1524\ncpu: 459.6486771653549 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 448.37162747600854,
            "unit": "us/iter",
            "extra": "iterations: 1565\ncpu: 448.3276785942493 us\nthreads: 1"
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
            "value": 25.16777967684086,
            "unit": "us/iter",
            "extra": "iterations: 27850\ncpu: 25.166043985637376 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.961707462254818,
            "unit": "us/iter",
            "extra": "iterations: 117431\ncpu: 5.961368335448061 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.531131958628666,
            "unit": "us/iter",
            "extra": "iterations: 153730\ncpu: 4.530844831848061 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9394340007415423,
            "unit": "us/iter",
            "extra": "iterations: 178002\ncpu: 3.939206345996115 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.788223139054434,
            "unit": "us/iter",
            "extra": "iterations: 183482\ncpu: 3.7880530624257465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7920164383412645,
            "unit": "us/iter",
            "extra": "iterations: 185846\ncpu: 3.7914956361718564 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.632825129077087,
            "unit": "us/iter",
            "extra": "iterations: 195813\ncpu: 3.63247278781283 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.41854643996172,
            "unit": "us/iter",
            "extra": "iterations: 4705\ncpu: 148.39719086078756 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.947297350906197,
            "unit": "us/iter",
            "extra": "iterations: 22687\ncpu: 30.944666725437408 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.3280327604176,
            "unit": "us/iter",
            "extra": "iterations: 29731\ncpu: 23.32431610103952 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.57057626622234,
            "unit": "us/iter",
            "extra": "iterations: 34137\ncpu: 20.5687123648828 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.546198127604494,
            "unit": "us/iter",
            "extra": "iterations: 34074\ncpu: 20.54486467687979 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.025318746112486,
            "unit": "us/iter",
            "extra": "iterations: 36973\ncpu: 19.02453263192068 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.60266276346543,
            "unit": "us/iter",
            "extra": "iterations: 37576\ncpu: 18.601487279114405 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 342.6339549681876,
            "unit": "us/iter",
            "extra": "iterations: 2043\ncpu: 342.6042887909946 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.28416481759884,
            "unit": "us/iter",
            "extra": "iterations: 10636\ncpu: 66.28008988341493 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.376099184056564,
            "unit": "us/iter",
            "extra": "iterations: 14952\ncpu: 47.373064138577014 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 40.77877227722612,
            "unit": "us/iter",
            "extra": "iterations: 17271\ncpu: 40.772618898732006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.58676631846312,
            "unit": "us/iter",
            "extra": "iterations: 17327\ncpu: 40.583624343510145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.045911656442364,
            "unit": "us/iter",
            "extra": "iterations: 17930\ncpu: 39.0395085331845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.83602660034443,
            "unit": "us/iter",
            "extra": "iterations: 18496\ncpu: 37.83412489186861 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1867.5190875331941,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1867.1232387267848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.4605081775716,
            "unit": "us/iter",
            "extra": "iterations: 1712\ncpu: 408.43178037383035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 274.777742295829,
            "unit": "us/iter",
            "extra": "iterations: 2596\ncpu: 274.72647265023176 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 228.26130646214432,
            "unit": "us/iter",
            "extra": "iterations: 3064\ncpu: 228.25144419059947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 221.06498705808934,
            "unit": "us/iter",
            "extra": "iterations: 3168\ncpu: 221.03584753787845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 210.08425934788823,
            "unit": "us/iter",
            "extra": "iterations: 3343\ncpu: 210.0802126832189 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 202.42760104681838,
            "unit": "us/iter",
            "extra": "iterations: 3439\ncpu: 202.39573538819442 us\nthreads: 1"
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
          "id": "1ae6dd9478ac3815557372c6acd1cbbb01540133",
          "message": "Merge pull request #229 from genogrove/refactor/remove-index-registry-rename-registry\n\nRemove index/index_registry and rename data_registry to registry",
          "timestamp": "2026-03-14T22:03:37-04:00",
          "tree_id": "0523e08e4dbf32d7ba74b608c7b0cdb9890c5164",
          "url": "https://github.com/genogrove/genogrove/commit/1ae6dd9478ac3815557372c6acd1cbbb01540133"
        },
        "date": 1773540463531,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.67475667099619,
            "unit": "us/iter",
            "extra": "iterations: 20799\ncpu: 33.67276676763306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.716564352733324,
            "unit": "us/iter",
            "extra": "iterations: 90913\ncpu: 7.71617796134766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.076670939429308,
            "unit": "us/iter",
            "extra": "iterations: 138318\ncpu: 5.076394243699303 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.397047890649719,
            "unit": "us/iter",
            "extra": "iterations: 160073\ncpu: 4.396774890206344 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9567098450616127,
            "unit": "us/iter",
            "extra": "iterations: 175489\ncpu: 3.9564772264928263 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 4.0590160452913855,
            "unit": "us/iter",
            "extra": "iterations: 178931\ncpu: 4.058779160682053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.842423856981012,
            "unit": "us/iter",
            "extra": "iterations: 188842\ncpu: 3.842312033340037 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 274.4032303459086,
            "unit": "us/iter",
            "extra": "iterations: 2544\ncpu: 274.3909555817608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.80810590157718,
            "unit": "us/iter",
            "extra": "iterations: 15911\ncpu: 43.80643630192954 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.47637491778241,
            "unit": "us/iter",
            "extra": "iterations: 22805\ncpu: 30.47564876123652 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.537368360575996,
            "unit": "us/iter",
            "extra": "iterations: 26979\ncpu: 25.53657618888766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.59865326577428,
            "unit": "us/iter",
            "extra": "iterations: 27038\ncpu: 25.598471780457086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 24.809651723031614,
            "unit": "us/iter",
            "extra": "iterations: 28061\ncpu: 24.808654502690565 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.617467229550893,
            "unit": "us/iter",
            "extra": "iterations: 28425\ncpu: 24.616805734388695 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 632.742989748374,
            "unit": "us/iter",
            "extra": "iterations: 1073\ncpu: 632.7095023299166 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.33294074074101,
            "unit": "us/iter",
            "extra": "iterations: 5670\ncpu: 123.32559171075836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 71.41739654274936,
            "unit": "us/iter",
            "extra": "iterations: 9603\ncpu: 71.41213599916682 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.750885809410285,
            "unit": "us/iter",
            "extra": "iterations: 11113\ncpu: 61.74932601457743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 60.94679411764703,
            "unit": "us/iter",
            "extra": "iterations: 11084\ncpu: 60.94361782749909 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 61.105764096857484,
            "unit": "us/iter",
            "extra": "iterations: 11687\ncpu: 61.10276777616154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.915052824778755,
            "unit": "us/iter",
            "extra": "iterations: 11169\ncpu: 61.90886525203673 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3654.256864583575,
            "unit": "us/iter",
            "extra": "iterations: 192\ncpu: 3653.9457447916648 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 903.8604723295075,
            "unit": "us/iter",
            "extra": "iterations: 777\ncpu: 903.8246010296035 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 627.109880503123,
            "unit": "us/iter",
            "extra": "iterations: 1113\ncpu: 627.0912309074567 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 520.7847185405685,
            "unit": "us/iter",
            "extra": "iterations: 1343\ncpu: 520.7681653015627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 504.8751169999832,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 504.8446110000029 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 462.13207839263583,
            "unit": "us/iter",
            "extra": "iterations: 1518\ncpu: 462.0997852437425 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 448.16244579859386,
            "unit": "us/iter",
            "extra": "iterations: 1559\ncpu: 448.1507787042967 us\nthreads: 1"
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
            "value": 25.301237205935045,
            "unit": "us/iter",
            "extra": "iterations: 27630\ncpu: 25.30016963445529 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.00109614987043,
            "unit": "us/iter",
            "extra": "iterations: 116100\ncpu: 6.000562988802734 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.75269737449765,
            "unit": "us/iter",
            "extra": "iterations: 147248\ncpu: 4.752539959795709 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.159443590460638,
            "unit": "us/iter",
            "extra": "iterations: 168101\ncpu: 4.159289914991583 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8759822236639176,
            "unit": "us/iter",
            "extra": "iterations: 178777\ncpu: 3.8758566314458793 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.8380762729063753,
            "unit": "us/iter",
            "extra": "iterations: 182319\ncpu: 3.8379383223909773 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.67920452245228,
            "unit": "us/iter",
            "extra": "iterations: 190693\ncpu: 3.6790255698950705 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 153.58773197902437,
            "unit": "us/iter",
            "extra": "iterations: 4578\ncpu: 153.57766950633442 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.809952947514613,
            "unit": "us/iter",
            "extra": "iterations: 22273\ncpu: 31.791555560544133 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.30155821317833,
            "unit": "us/iter",
            "extra": "iterations: 29684\ncpu: 23.300515665004735 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.690941305184243,
            "unit": "us/iter",
            "extra": "iterations: 33819\ncpu: 20.690482894230975 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.58872923103977,
            "unit": "us/iter",
            "extra": "iterations: 33981\ncpu: 20.58794070215713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.10396823664146,
            "unit": "us/iter",
            "extra": "iterations: 36646\ncpu: 19.103404982808478 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.58702018967673,
            "unit": "us/iter",
            "extra": "iterations: 37643\ncpu: 18.58578824748296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 346.59552350001377,
            "unit": "us/iter",
            "extra": "iterations: 2000\ncpu: 346.59434150000124 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.1484399127371,
            "unit": "us/iter",
            "extra": "iterations: 10543\ncpu: 66.14567466565475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 46.818810008081876,
            "unit": "us/iter",
            "extra": "iterations: 14848\ncpu: 46.8166417699349 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.53483911934118,
            "unit": "us/iter",
            "extra": "iterations: 16851\ncpu: 41.533191442644245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 42.037918826700064,
            "unit": "us/iter",
            "extra": "iterations: 16705\ncpu: 42.03566435199059 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 40.73277755055764,
            "unit": "us/iter",
            "extra": "iterations: 17604\ncpu: 40.72935480572627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.674044952508225,
            "unit": "us/iter",
            "extra": "iterations: 18108\ncpu: 38.66979489728316 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1869.8920106952328,
            "unit": "us/iter",
            "extra": "iterations: 374\ncpu: 1869.6585053475928 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 408.93221495329243,
            "unit": "us/iter",
            "extra": "iterations: 1712\ncpu: 408.87941179906534 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 273.6337512670416,
            "unit": "us/iter",
            "extra": "iterations: 2565\ncpu: 273.5987387914239 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 236.60262975097686,
            "unit": "us/iter",
            "extra": "iterations: 3052\ncpu: 236.57292595019825 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 228.34263793666062,
            "unit": "us/iter",
            "extra": "iterations: 3063\ncpu: 228.31513744694726 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 215.81888140827803,
            "unit": "us/iter",
            "extra": "iterations: 3238\ncpu: 215.79013434218692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 208.24317594523018,
            "unit": "us/iter",
            "extra": "iterations: 3359\ncpu: 208.21623816612154 us\nthreads: 1"
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
          "id": "2c77d7477ce82b08e3514cd847e5f2925665e294",
          "message": "Merge pull request #230 from genogrove/fix/bam-reader-bounds-checks-144\n\nFix bounds-check gaps in bam_reader parsing",
          "timestamp": "2026-03-14T22:24:48-04:00",
          "tree_id": "3c9c35a4b5c6693c73a259b96f8d9f633c2dea83",
          "url": "https://github.com/genogrove/genogrove/commit/2c77d7477ce82b08e3514cd847e5f2925665e294"
        },
        "date": 1773541728689,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.949544551603935,
            "unit": "us/iter",
            "extra": "iterations: 20841\ncpu: 33.947336164291535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.761135433053134,
            "unit": "us/iter",
            "extra": "iterations: 90266\ncpu: 7.760358363060289 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.135101371361746,
            "unit": "us/iter",
            "extra": "iterations: 137090\ncpu: 5.134829921949084 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.331477704776809,
            "unit": "us/iter",
            "extra": "iterations: 159967\ncpu: 4.331034307075836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.9891264711943415,
            "unit": "us/iter",
            "extra": "iterations: 174688\ncpu: 3.9883776905110797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9347259699803225,
            "unit": "us/iter",
            "extra": "iterations: 176550\ncpu: 3.9339705749079594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.8281008723927585,
            "unit": "us/iter",
            "extra": "iterations: 188218\ncpu: 3.827768773443559 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 280.7950508474773,
            "unit": "us/iter",
            "extra": "iterations: 2537\ncpu: 280.764561687032 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 44.963895110769876,
            "unit": "us/iter",
            "extra": "iterations: 15483\ncpu: 44.959807918362024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 31.227143177334675,
            "unit": "us/iter",
            "extra": "iterations: 22308\ncpu: 31.226783620225866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.98260868107114,
            "unit": "us/iter",
            "extra": "iterations: 26840\ncpu: 25.979582190760052 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.028923421697794,
            "unit": "us/iter",
            "extra": "iterations: 26104\ncpu: 26.028481803555053 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.064605842893616,
            "unit": "us/iter",
            "extra": "iterations: 27281\ncpu: 25.062851105164725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.929881765670203,
            "unit": "us/iter",
            "extra": "iterations: 28046\ncpu: 24.92861944662343 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 628.4885513413442,
            "unit": "us/iter",
            "extra": "iterations: 1081\ncpu: 628.4295716928776 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 124.19081193457912,
            "unit": "us/iter",
            "extra": "iterations: 5748\ncpu: 124.17602331245635 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.85701830854019,
            "unit": "us/iter",
            "extra": "iterations: 9613\ncpu: 70.85283043794844 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.038271802327756,
            "unit": "us/iter",
            "extra": "iterations: 11008\ncpu: 61.03105586845923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 63.38327411122167,
            "unit": "us/iter",
            "extra": "iterations: 11167\ncpu: 63.37803393928529 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 57.763947064241705,
            "unit": "us/iter",
            "extra": "iterations: 11939\ncpu: 57.76313535471958 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.1701669269509,
            "unit": "us/iter",
            "extra": "iterations: 11526\ncpu: 61.16232300884942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3647.48675661384,
            "unit": "us/iter",
            "extra": "iterations: 189\ncpu: 3647.381650793647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 897.8814002556945,
            "unit": "us/iter",
            "extra": "iterations: 782\ncpu: 897.7944028132964 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 618.1345326278558,
            "unit": "us/iter",
            "extra": "iterations: 1134\ncpu: 617.9250828924168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 513.4272076302192,
            "unit": "us/iter",
            "extra": "iterations: 1363\ncpu: 513.3953778429919 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 501.1784619999844,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 501.1061790000006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 456.73030045722453,
            "unit": "us/iter",
            "extra": "iterations: 1531\ncpu: 456.7007668190725 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 446.63559504132473,
            "unit": "us/iter",
            "extra": "iterations: 1573\ncpu: 446.605415130323 us\nthreads: 1"
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
            "value": 25.488239766292367,
            "unit": "us/iter",
            "extra": "iterations: 27727\ncpu: 25.48599044252885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.091584165229123,
            "unit": "us/iter",
            "extra": "iterations: 114798\ncpu: 6.090648669837462 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.559341208917409,
            "unit": "us/iter",
            "extra": "iterations: 152285\ncpu: 4.559132928390841 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.009435800130049,
            "unit": "us/iter",
            "extra": "iterations: 175234\ncpu: 4.009206894780708 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.8522077697032437,
            "unit": "us/iter",
            "extra": "iterations: 181783\ncpu: 3.851949126155913 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7921624309031876,
            "unit": "us/iter",
            "extra": "iterations: 183438\ncpu: 3.7920831725160298 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.634536383619945,
            "unit": "us/iter",
            "extra": "iterations: 193796\ncpu: 3.6341652149683323 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.07728220989983,
            "unit": "us/iter",
            "extra": "iterations: 4688\ncpu: 149.06936497440162 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.298737799982014,
            "unit": "us/iter",
            "extra": "iterations: 22418\ncpu: 31.295780444286006 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.392402227041284,
            "unit": "us/iter",
            "extra": "iterations: 30893\ncpu: 22.39147910529893 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.158152447834667,
            "unit": "us/iter",
            "extra": "iterations: 34602\ncpu: 20.155246835442988 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.399555974662675,
            "unit": "us/iter",
            "extra": "iterations: 34730\ncpu: 20.39721765044614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.178709355033696,
            "unit": "us/iter",
            "extra": "iterations: 36622\ncpu: 19.176313691223772 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.81581901191647,
            "unit": "us/iter",
            "extra": "iterations: 37345\ncpu: 18.81361984201357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 339.47520821257694,
            "unit": "us/iter",
            "extra": "iterations: 2070\ncpu: 339.4272961352654 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.58574180173063,
            "unit": "us/iter",
            "extra": "iterations: 10612\ncpu: 66.55373332076877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 45.965027099386745,
            "unit": "us/iter",
            "extra": "iterations: 15314\ncpu: 45.963197401070886 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.379084711840044,
            "unit": "us/iter",
            "extra": "iterations: 16987\ncpu: 41.37799217048338 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 40.2444784877668,
            "unit": "us/iter",
            "extra": "iterations: 17246\ncpu: 40.24055897019621 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 38.90773929723279,
            "unit": "us/iter",
            "extra": "iterations: 17986\ncpu: 38.906277048815674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 37.673573021543525,
            "unit": "us/iter",
            "extra": "iterations: 18474\ncpu: 37.66965345891528 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1870.7060506665887,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1870.5224693333282 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.66963042219527,
            "unit": "us/iter",
            "extra": "iterations: 1729\ncpu: 406.63020069404575 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 277.54129083038794,
            "unit": "us/iter",
            "extra": "iterations: 2541\ncpu: 277.53187012986865 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 233.117904031985,
            "unit": "us/iter",
            "extra": "iterations: 3001\ncpu: 233.1016291236253 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 225.0305534072946,
            "unit": "us/iter",
            "extra": "iterations: 3155\ncpu: 225.02233787638713 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 214.91238594890834,
            "unit": "us/iter",
            "extra": "iterations: 3288\ncpu: 214.88382725060728 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.22659648608405,
            "unit": "us/iter",
            "extra": "iterations: 3415\ncpu: 206.21745300146551 us\nthreads: 1"
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
          "id": "87e33f91236a5f1c7becca66ee0a1e74f6343e79",
          "message": "Merge pull request #231 from genogrove/fix/cli-exit-to-exceptions-160\n\nReplace exit(1) with exceptions in CLI handlers",
          "timestamp": "2026-03-14T22:42:22-04:00",
          "tree_id": "05f736848e377d3dcf79c0d9ba894ca4488e33d2",
          "url": "https://github.com/genogrove/genogrove/commit/87e33f91236a5f1c7becca66ee0a1e74f6343e79"
        },
        "date": 1773542771747,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 33.462399961727364,
            "unit": "us/iter",
            "extra": "iterations: 20902\ncpu: 33.455931107071095 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 8.102348824992008,
            "unit": "us/iter",
            "extra": "iterations: 85659\ncpu: 8.101873626822634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.400657795896688,
            "unit": "us/iter",
            "extra": "iterations: 127798\ncpu: 5.399793353573608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.543267172874343,
            "unit": "us/iter",
            "extra": "iterations: 152770\ncpu: 4.542807933494797 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.157841394021285,
            "unit": "us/iter",
            "extra": "iterations: 165019\ncpu: 4.15769179912616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9050448944908847,
            "unit": "us/iter",
            "extra": "iterations: 176525\ncpu: 3.9046508426568467 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.743068601118195,
            "unit": "us/iter",
            "extra": "iterations: 187271\ncpu: 3.742585744722885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 269.4035078937233,
            "unit": "us/iter",
            "extra": "iterations: 2597\ncpu: 269.35763496341974 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.258260171109995,
            "unit": "us/iter",
            "extra": "iterations: 16247\ncpu: 43.25361395950016 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 31.555255487725223,
            "unit": "us/iter",
            "extra": "iterations: 23097\ncpu: 31.552385158245663 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.509941566725853,
            "unit": "us/iter",
            "extra": "iterations: 27433\ncpu: 25.50739765975285 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 26.789238561727352,
            "unit": "us/iter",
            "extra": "iterations: 26949\ncpu: 26.786348584363054 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 26.072411638713955,
            "unit": "us/iter",
            "extra": "iterations: 27546\ncpu: 26.06928261816595 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 26.087096695664165,
            "unit": "us/iter",
            "extra": "iterations: 27933\ncpu: 26.084433286793427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 628.3973661593523,
            "unit": "us/iter",
            "extra": "iterations: 1117\ncpu: 628.3198290062667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.05972205220267,
            "unit": "us/iter",
            "extra": "iterations: 5555\ncpu: 123.04916921692154 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.94859527493999,
            "unit": "us/iter",
            "extra": "iterations: 9693\ncpu: 70.94491024450608 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.6498634959855,
            "unit": "us/iter",
            "extra": "iterations: 11333\ncpu: 61.642681372981365 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.765478356427785,
            "unit": "us/iter",
            "extra": "iterations: 10465\ncpu: 62.756777066411864 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.725781556344955,
            "unit": "us/iter",
            "extra": "iterations: 11527\ncpu: 60.72078710852809 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 64.66379761366758,
            "unit": "us/iter",
            "extra": "iterations: 11063\ncpu: 64.65906833589435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3625.4191658030054,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3625.284549222804 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 899.4315275994757,
            "unit": "us/iter",
            "extra": "iterations: 779\ncpu: 899.3482336328649 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 621.1521622340248,
            "unit": "us/iter",
            "extra": "iterations: 1128\ncpu: 621.0112517730515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 514.925430361098,
            "unit": "us/iter",
            "extra": "iterations: 1357\ncpu: 514.7912446573325 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 490.820145365166,
            "unit": "us/iter",
            "extra": "iterations: 1424\ncpu: 490.7917345505613 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 461.86936441235423,
            "unit": "us/iter",
            "extra": "iterations: 1523\ncpu: 461.83657321076885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 445.45711054636894,
            "unit": "us/iter",
            "extra": "iterations: 1574\ncpu: 445.4237007623888 us\nthreads: 1"
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
            "value": 25.247284912987848,
            "unit": "us/iter",
            "extra": "iterations: 27812\ncpu: 25.244848123112288 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.996883834843507,
            "unit": "us/iter",
            "extra": "iterations: 116980\ncpu: 5.996520225679588 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.645016349341798,
            "unit": "us/iter",
            "extra": "iterations: 148691\ncpu: 4.6446156122428395 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 4.059385789700746,
            "unit": "us/iter",
            "extra": "iterations: 171622\ncpu: 4.059090122478454 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.877300210635506,
            "unit": "us/iter",
            "extra": "iterations: 181356\ncpu: 3.877006980745056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.9583055361335022,
            "unit": "us/iter",
            "extra": "iterations: 175917\ncpu: 3.957995526299358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.681681115603596,
            "unit": "us/iter",
            "extra": "iterations: 191179\ncpu: 3.681414172058642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 148.5367628191619,
            "unit": "us/iter",
            "extra": "iterations: 4739\ncpu: 148.5276760920021 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.03612554802809,
            "unit": "us/iter",
            "extra": "iterations: 22581\ncpu: 31.034041096496914 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.29812590536869,
            "unit": "us/iter",
            "extra": "iterations: 29546\ncpu: 23.29635449807076 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.86217124536778,
            "unit": "us/iter",
            "extra": "iterations: 33998\ncpu: 20.859365550914795 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.60328102651638,
            "unit": "us/iter",
            "extra": "iterations: 33979\ncpu: 20.60148120898199 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 20.0597674505632,
            "unit": "us/iter",
            "extra": "iterations: 34741\ncpu: 20.057396361647633 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.03161235755475,
            "unit": "us/iter",
            "extra": "iterations: 36593\ncpu: 19.030217363976753 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 341.6914221571513,
            "unit": "us/iter",
            "extra": "iterations: 2049\ncpu: 341.6607340165942 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.26033068031239,
            "unit": "us/iter",
            "extra": "iterations: 10554\ncpu: 66.2572864316845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.17725232755682,
            "unit": "us/iter",
            "extra": "iterations: 14715\ncpu: 47.17250784913321 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 41.450684774154944,
            "unit": "us/iter",
            "extra": "iterations: 16715\ncpu: 41.44723637451382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.16117848280997,
            "unit": "us/iter",
            "extra": "iterations: 16926\ncpu: 41.15857266926632 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.6339870159474,
            "unit": "us/iter",
            "extra": "iterations: 17560\ncpu: 39.63009851936218 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 38.18360379746925,
            "unit": "us/iter",
            "extra": "iterations: 18170\ncpu: 38.181057732525986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1867.2637333334023,
            "unit": "us/iter",
            "extra": "iterations: 375\ncpu: 1867.095858666668 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.3054147760208,
            "unit": "us/iter",
            "extra": "iterations: 1719\ncpu: 406.2906015125099 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 266.1395637480718,
            "unit": "us/iter",
            "extra": "iterations: 2604\ncpu: 266.11990130568444 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 232.34486026771623,
            "unit": "us/iter",
            "extra": "iterations: 3063\ncpu: 232.3338612471428 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 225.27726786863298,
            "unit": "us/iter",
            "extra": "iterations: 3106\ncpu: 224.7172456535732 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 213.11965606848923,
            "unit": "us/iter",
            "extra": "iterations: 3271\ncpu: 213.0996634056852 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 206.9069543311635,
            "unit": "us/iter",
            "extra": "iterations: 3394\ncpu: 206.88596317030053 us\nthreads: 1"
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
          "id": "e987cd794b8f1ff39d18bbce4241a6ce1bfed9cc",
          "message": "Merge pull request #232 from genogrove/fix/search-iter-bounds-check-142\n\nUse bounds-checked get_child() in search_iter()",
          "timestamp": "2026-03-14T22:53:42-04:00",
          "tree_id": "10d2208caeec5144c95316a9063832fb83fcd946",
          "url": "https://github.com/genogrove/genogrove/commit/e987cd794b8f1ff39d18bbce4241a6ce1bfed9cc"
        },
        "date": 1773543459554,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 29.684619337942266,
            "unit": "us/iter",
            "extra": "iterations: 23291\ncpu: 29.683675582843158 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.231623680497598,
            "unit": "us/iter",
            "extra": "iterations: 97101\ncpu: 7.231024737129382 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.8556705857129945,
            "unit": "us/iter",
            "extra": "iterations: 144593\ncpu: 4.855463985116845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.13137080143415,
            "unit": "us/iter",
            "extra": "iterations: 170981\ncpu: 4.131229680490815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.819006336233975,
            "unit": "us/iter",
            "extra": "iterations: 181338\ncpu: 3.8187858143356594 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.7483744708249573,
            "unit": "us/iter",
            "extra": "iterations: 186375\ncpu: 3.748302545942319 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.5737963786594276,
            "unit": "us/iter",
            "extra": "iterations: 199208\ncpu: 3.573682040881896 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 268.5714219830975,
            "unit": "us/iter",
            "extra": "iterations: 2602\ncpu: 268.5521210607227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 40.75195957186846,
            "unit": "us/iter",
            "extra": "iterations: 17191\ncpu: 40.74897754639055 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 27.800721727019663,
            "unit": "us/iter",
            "extra": "iterations: 25130\ncpu: 27.800279029048955 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 23.678329560132813,
            "unit": "us/iter",
            "extra": "iterations: 29418\ncpu: 23.67809371813173 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 23.39803750294264,
            "unit": "us/iter",
            "extra": "iterations: 29731\ncpu: 23.397112878813395 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 22.195579564276116,
            "unit": "us/iter",
            "extra": "iterations: 31396\ncpu: 22.194338323353296 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 21.11818508966226,
            "unit": "us/iter",
            "extra": "iterations: 32957\ncpu: 21.11752328792065 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 594.0723455008701,
            "unit": "us/iter",
            "extra": "iterations: 1178\ncpu: 594.030474533108 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 127.59509773474927,
            "unit": "us/iter",
            "extra": "iterations: 5474\ncpu: 127.59101516258674 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 67.65269890438327,
            "unit": "us/iter",
            "extra": "iterations: 10040\ncpu: 67.65028655378492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 50.46352610200053,
            "unit": "us/iter",
            "extra": "iterations: 13294\ncpu: 50.45999052204 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 54.62847872991527,
            "unit": "us/iter",
            "extra": "iterations: 13070\ncpu: 54.62591637337414 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 49.40587812863859,
            "unit": "us/iter",
            "extra": "iterations: 13744\ncpu: 49.40010673748548 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 54.68281915059059,
            "unit": "us/iter",
            "extra": "iterations: 12856\ncpu: 54.683102286870145 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4181.360964496999,
            "unit": "us/iter",
            "extra": "iterations: 169\ncpu: 4181.065757396452 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 882.4839495586135,
            "unit": "us/iter",
            "extra": "iterations: 793\ncpu: 882.4249331651935 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 614.4099111697378,
            "unit": "us/iter",
            "extra": "iterations: 1137\ncpu: 614.3862726473197 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 525.2919699699688,
            "unit": "us/iter",
            "extra": "iterations: 1332\ncpu: 525.2696959459449 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 500.2631159999851,
            "unit": "us/iter",
            "extra": "iterations: 1000\ncpu: 500.2226609999987 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 470.00802213279,
            "unit": "us/iter",
            "extra": "iterations: 1491\ncpu: 469.9628068410465 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 460.54370477472196,
            "unit": "us/iter",
            "extra": "iterations: 1487\ncpu: 460.5098533960994 us\nthreads: 1"
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
            "value": 23.694436895154695,
            "unit": "us/iter",
            "extra": "iterations: 29863\ncpu: 23.692899206375767 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.614063155397373,
            "unit": "us/iter",
            "extra": "iterations: 126450\ncpu: 5.613652550415189 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.267079068688154,
            "unit": "us/iter",
            "extra": "iterations: 163769\ncpu: 4.266577691748743 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.6427279768068224,
            "unit": "us/iter",
            "extra": "iterations: 193160\ncpu: 3.6426642161938254 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.55041905009571,
            "unit": "us/iter",
            "extra": "iterations: 199957\ncpu: 3.5502848362397836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.5217880426332835,
            "unit": "us/iter",
            "extra": "iterations: 199375\ncpu: 3.5217698959247614 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.305056403756076,
            "unit": "us/iter",
            "extra": "iterations: 210642\ncpu: 3.304869479970747 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 141.9076548963246,
            "unit": "us/iter",
            "extra": "iterations: 4871\ncpu: 141.9027598029151 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 28.981273770560705,
            "unit": "us/iter",
            "extra": "iterations: 23527\ncpu: 28.979057253368527 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 20.912917322114787,
            "unit": "us/iter",
            "extra": "iterations: 32802\ncpu: 20.91159106152058 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 18.808715065938678,
            "unit": "us/iter",
            "extra": "iterations: 37535\ncpu: 18.80784081523902 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 18.578486464904344,
            "unit": "us/iter",
            "extra": "iterations: 37569\ncpu: 18.577527429529706 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 18.183617867673775,
            "unit": "us/iter",
            "extra": "iterations: 38662\ncpu: 18.181728260307235 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 17.438213668813873,
            "unit": "us/iter",
            "extra": "iterations: 40062\ncpu: 17.437301732314836 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 318.8224305936056,
            "unit": "us/iter",
            "extra": "iterations: 2190\ncpu: 318.8043155251125 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 62.45345568942425,
            "unit": "us/iter",
            "extra": "iterations: 11205\ncpu: 62.44745015618042 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 43.07285925557565,
            "unit": "us/iter",
            "extra": "iterations: 16093\ncpu: 43.06797986702278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 38.12837362931284,
            "unit": "us/iter",
            "extra": "iterations: 18695\ncpu: 38.12659807435142 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 37.26707404056001,
            "unit": "us/iter",
            "extra": "iterations: 18787\ncpu: 37.26566077606873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 36.574028454015135,
            "unit": "us/iter",
            "extra": "iterations: 19224\ncpu: 36.574934196837255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 35.330303839397835,
            "unit": "us/iter",
            "extra": "iterations: 19925\ncpu: 35.32804547051417 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1833.8089265091849,
            "unit": "us/iter",
            "extra": "iterations: 381\ncpu: 1833.6508031496041 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 365.69906753926244,
            "unit": "us/iter",
            "extra": "iterations: 1910\ncpu: 365.65906335078546 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 247.3763496801673,
            "unit": "us/iter",
            "extra": "iterations: 2814\ncpu: 247.3689388770455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 215.82974054877775,
            "unit": "us/iter",
            "extra": "iterations: 3280\ncpu: 215.8099283536586 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 205.36955264706128,
            "unit": "us/iter",
            "extra": "iterations: 3400\ncpu: 205.3596747058815 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 198.63256688440387,
            "unit": "us/iter",
            "extra": "iterations: 3521\ncpu: 198.62195058222252 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 190.97897782037404,
            "unit": "us/iter",
            "extra": "iterations: 3652\ncpu: 190.96934693318786 us\nthreads: 1"
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
          "id": "ba779294cba61f67e9ed0a470eca3ff1ddee9fca",
          "message": "Merge pull request #233 from genogrove/fix/reader-error-message-semantics-158\n\nClear error_message at start of each read_next() across all readers",
          "timestamp": "2026-03-14T23:23:53-04:00",
          "tree_id": "e76be602314ec188015b6f4344327986fddf8678",
          "url": "https://github.com/genogrove/genogrove/commit/ba779294cba61f67e9ed0a470eca3ff1ddee9fca"
        },
        "date": 1773545264383,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 32.92268008288116,
            "unit": "us/iter",
            "extra": "iterations: 19305\ncpu: 32.91434768194769 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.558307196539009,
            "unit": "us/iter",
            "extra": "iterations: 91544\ncpu: 7.55801183037665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.092743548824279,
            "unit": "us/iter",
            "extra": "iterations: 136603\ncpu: 5.0917175171848355 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.3399008433699615,
            "unit": "us/iter",
            "extra": "iterations: 160665\ncpu: 4.339597871347214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.925851655888637,
            "unit": "us/iter",
            "extra": "iterations: 178605\ncpu: 3.9255730746619664 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.9039866216798185,
            "unit": "us/iter",
            "extra": "iterations: 178423\ncpu: 3.9038815231220165 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.761362387407806,
            "unit": "us/iter",
            "extra": "iterations: 186847\ncpu: 3.7607116410753214 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 274.52970700389403,
            "unit": "us/iter",
            "extra": "iterations: 2570\ncpu: 274.50612529182905 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.011153949951854,
            "unit": "us/iter",
            "extra": "iterations: 16304\ncpu: 43.00684328999017 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 30.03583153872644,
            "unit": "us/iter",
            "extra": "iterations: 23032\ncpu: 30.034227987148324 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 25.558251987455076,
            "unit": "us/iter",
            "extra": "iterations: 27422\ncpu: 25.5559620377799 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.8613956602372,
            "unit": "us/iter",
            "extra": "iterations: 26960\ncpu: 25.859156231454005 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.08684581450031,
            "unit": "us/iter",
            "extra": "iterations: 27655\ncpu: 25.084075754836388 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.708049493774357,
            "unit": "us/iter",
            "extra": "iterations: 28347\ncpu: 24.706827001093593 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 630.3249891989278,
            "unit": "us/iter",
            "extra": "iterations: 1111\ncpu: 630.2678505850587 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 120.72776506442928,
            "unit": "us/iter",
            "extra": "iterations: 5742\ncpu: 120.72011024033412 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 72.64051998766529,
            "unit": "us/iter",
            "extra": "iterations: 9731\ncpu: 72.63446048710291 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 62.56765834845577,
            "unit": "us/iter",
            "extra": "iterations: 11020\ncpu: 62.56418856624306 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 62.770560328318965,
            "unit": "us/iter",
            "extra": "iterations: 10965\ncpu: 62.767864569083606 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 59.658747332519,
            "unit": "us/iter",
            "extra": "iterations: 11434\ncpu: 59.65398128388988 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 61.344808388443056,
            "unit": "us/iter",
            "extra": "iterations: 11492\ncpu: 61.34134363035161 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3640.061538860169,
            "unit": "us/iter",
            "extra": "iterations: 193\ncpu: 3639.8407927461203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 898.6168847631671,
            "unit": "us/iter",
            "extra": "iterations: 781\ncpu: 898.5655928297077 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 623.9120828138787,
            "unit": "us/iter",
            "extra": "iterations: 1123\ncpu: 623.897154051646 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 518.6790436390801,
            "unit": "us/iter",
            "extra": "iterations: 1352\ncpu: 518.6350480769228 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 496.33508067940033,
            "unit": "us/iter",
            "extra": "iterations: 1413\ncpu: 496.3193793347469 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 462.8776882430981,
            "unit": "us/iter",
            "extra": "iterations: 1514\ncpu: 462.83426684280096 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 450.4984344472849,
            "unit": "us/iter",
            "extra": "iterations: 1556\ncpu: 450.4411561696667 us\nthreads: 1"
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
            "value": 25.48037404027261,
            "unit": "us/iter",
            "extra": "iterations: 27612\ncpu: 25.479171700709824 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.084701355476354,
            "unit": "us/iter",
            "extra": "iterations: 115974\ncpu: 6.084398184075719 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.723251025216317,
            "unit": "us/iter",
            "extra": "iterations: 157040\ncpu: 4.722971968925116 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.968691844430062,
            "unit": "us/iter",
            "extra": "iterations: 167873\ncpu: 3.9684857183704203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.9744543054791377,
            "unit": "us/iter",
            "extra": "iterations: 183731\ncpu: 3.97432951434435 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.7988563783835536,
            "unit": "us/iter",
            "extra": "iterations: 172481\ncpu: 3.7986110296206346 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.859262188601564,
            "unit": "us/iter",
            "extra": "iterations: 188906\ncpu: 3.859250240860556 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 149.14061491079423,
            "unit": "us/iter",
            "extra": "iterations: 4708\ncpu: 149.1292306711981 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 31.016764632237976,
            "unit": "us/iter",
            "extra": "iterations: 22365\ncpu: 31.01637245696391 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 23.717324882726185,
            "unit": "us/iter",
            "extra": "iterations: 28992\ncpu: 23.715026179635665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.830757395532782,
            "unit": "us/iter",
            "extra": "iterations: 32283\ncpu: 20.82824458693446 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 20.84377269589649,
            "unit": "us/iter",
            "extra": "iterations: 33321\ncpu: 20.842359112871947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.663061442590482,
            "unit": "us/iter",
            "extra": "iterations: 35464\ncpu: 19.662469743965655 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 19.236837157913044,
            "unit": "us/iter",
            "extra": "iterations: 35298\ncpu: 19.235361720210697 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 343.8203843503704,
            "unit": "us/iter",
            "extra": "iterations: 2032\ncpu: 343.81450049212634 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.7190109890132,
            "unit": "us/iter",
            "extra": "iterations: 10465\ncpu: 66.71349173435273 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 48.904881479975415,
            "unit": "us/iter",
            "extra": "iterations: 14757\ncpu: 48.90405909060121 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 43.685086713872685,
            "unit": "us/iter",
            "extra": "iterations: 16664\ncpu: 43.68073133701403 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 43.375731186049585,
            "unit": "us/iter",
            "extra": "iterations: 16517\ncpu: 43.373564509293494 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 41.29473917537546,
            "unit": "us/iter",
            "extra": "iterations: 17414\ncpu: 41.29046560238878 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 40.231791580593146,
            "unit": "us/iter",
            "extra": "iterations: 17911\ncpu: 40.228345765172186 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1853.952148148134,
            "unit": "us/iter",
            "extra": "iterations: 378\ncpu: 1853.817756613751 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 410.7099435390004,
            "unit": "us/iter",
            "extra": "iterations: 1718\ncpu: 410.6764179278238 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 278.907294573626,
            "unit": "us/iter",
            "extra": "iterations: 2451\ncpu: 278.8824259485916 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 243.18942144554023,
            "unit": "us/iter",
            "extra": "iterations: 2947\ncpu: 243.17201085850024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 227.7463473013816,
            "unit": "us/iter",
            "extra": "iterations: 2983\ncpu: 227.72229098223357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 224.41583240049866,
            "unit": "us/iter",
            "extra": "iterations: 3216\ncpu: 224.40306187810782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 211.22864071671702,
            "unit": "us/iter",
            "extra": "iterations: 3237\ncpu: 211.21074544331123 us\nthreads: 1"
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
          "id": "dd12e880117069616c223728ae081531a62fe690",
          "message": "Merge pull request #234 from genogrove/cleanup/api-design-minor-162\n\nAdd iterator docstring and extract CLI subcommand constants",
          "timestamp": "2026-03-15T22:28:51-04:00",
          "tree_id": "e0df2e95123d77981ae0124a391d8e9e99105796",
          "url": "https://github.com/genogrove/genogrove/commit/dd12e880117069616c223728ae081531a62fe690"
        },
        "date": 1773628365623,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 34.20787321113469,
            "unit": "us/iter",
            "extra": "iterations: 20404\ncpu: 34.20449147226034 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.649466147230001,
            "unit": "us/iter",
            "extra": "iterations: 91381\ncpu: 7.648540998675873 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 5.135502298348652,
            "unit": "us/iter",
            "extra": "iterations: 135097\ncpu: 5.134776967660274 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.347321786846988,
            "unit": "us/iter",
            "extra": "iterations: 163282\ncpu: 4.346895989760049 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 4.0073079611714455,
            "unit": "us/iter",
            "extra": "iterations: 175954\ncpu: 4.007192698091547 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.890588394161607,
            "unit": "us/iter",
            "extra": "iterations: 176618\ncpu: 3.890067320431665 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.7294375595102127,
            "unit": "us/iter",
            "extra": "iterations: 190093\ncpu: 3.7292090660887056 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 272.7003637426793,
            "unit": "us/iter",
            "extra": "iterations: 2565\ncpu: 272.68053528265114 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 43.40117218255193,
            "unit": "us/iter",
            "extra": "iterations: 16105\ncpu: 43.39841241850358 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 31.10345254415942,
            "unit": "us/iter",
            "extra": "iterations: 22758\ncpu: 31.101502328851357 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 26.070021857921898,
            "unit": "us/iter",
            "extra": "iterations: 26901\ncpu: 26.068041262406602 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 25.820511076246166,
            "unit": "us/iter",
            "extra": "iterations: 26769\ncpu: 25.81816586349881 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 25.04109306974059,
            "unit": "us/iter",
            "extra": "iterations: 27517\ncpu: 25.039128138968685 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 24.714029041449855,
            "unit": "us/iter",
            "extra": "iterations: 27719\ncpu: 24.71161254013493 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 635.4791900452466,
            "unit": "us/iter",
            "extra": "iterations: 1105\ncpu: 635.4526126696826 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 123.95020067844669,
            "unit": "us/iter",
            "extra": "iterations: 5601\ncpu: 123.9359528655596 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 70.92461122037412,
            "unit": "us/iter",
            "extra": "iterations: 9661\ncpu: 70.92004657902895 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 61.02912290103701,
            "unit": "us/iter",
            "extra": "iterations: 11196\ncpu: 61.02372007859923 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 61.6479633225416,
            "unit": "us/iter",
            "extra": "iterations: 11124\ncpu: 61.64168230852227 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 60.709418753193596,
            "unit": "us/iter",
            "extra": "iterations: 11742\ncpu: 60.708397291773245 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 62.87626351291567,
            "unit": "us/iter",
            "extra": "iterations: 11267\ncpu: 62.87112052897823 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 3666.368502617831,
            "unit": "us/iter",
            "extra": "iterations: 191\ncpu: 3666.368162303667 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 902.49752774188,
            "unit": "us/iter",
            "extra": "iterations: 775\ncpu: 902.3371896774191 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 624.608655447278,
            "unit": "us/iter",
            "extra": "iterations: 1129\ncpu: 624.54156864482 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 515.1022010347504,
            "unit": "us/iter",
            "extra": "iterations: 1353\ncpu: 515.0492394678492 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 493.19214174893517,
            "unit": "us/iter",
            "extra": "iterations: 1418\ncpu: 493.12282157969213 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 462.3434525691717,
            "unit": "us/iter",
            "extra": "iterations: 1518\ncpu: 462.28491831357127 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 447.2692373962859,
            "unit": "us/iter",
            "extra": "iterations: 1567\ncpu: 447.2404435226537 us\nthreads: 1"
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
            "value": 25.186288221809505,
            "unit": "us/iter",
            "extra": "iterations: 27916\ncpu: 25.184899878206043 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 6.020013926552409,
            "unit": "us/iter",
            "extra": "iterations: 116899\ncpu: 6.0193077699552475 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.520120238355439,
            "unit": "us/iter",
            "extra": "iterations: 155566\ncpu: 4.519703347775203 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.9041602694423316,
            "unit": "us/iter",
            "extra": "iterations: 180521\ncpu: 3.903939724464181 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.7845164397461444,
            "unit": "us/iter",
            "extra": "iterations: 184279\ncpu: 3.7840437868666688 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.707993805062504,
            "unit": "us/iter",
            "extra": "iterations: 189671\ncpu: 3.7078128127125085 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.692915429592759,
            "unit": "us/iter",
            "extra": "iterations: 193602\ncpu: 3.6927019039059354 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 147.0408199958003,
            "unit": "us/iter",
            "extra": "iterations: 4761\ncpu: 147.03206301197264 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 30.853686784413547,
            "unit": "us/iter",
            "extra": "iterations: 22534\ncpu: 30.851697124345392 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 22.58752066747298,
            "unit": "us/iter",
            "extra": "iterations: 31402\ncpu: 22.58628246608504 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 20.174795202476073,
            "unit": "us/iter",
            "extra": "iterations: 34893\ncpu: 20.17258776832024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 19.885462563778518,
            "unit": "us/iter",
            "extra": "iterations: 34886\ncpu: 19.88440231038241 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 19.231262685433883,
            "unit": "us/iter",
            "extra": "iterations: 36873\ncpu: 19.22929566349379 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 18.606082975603503,
            "unit": "us/iter",
            "extra": "iterations: 37505\ncpu: 18.604895773896782 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 339.5443525145059,
            "unit": "us/iter",
            "extra": "iterations: 2068\ncpu: 339.5098815280452 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 66.4326950246851,
            "unit": "us/iter",
            "extra": "iterations: 10532\ncpu: 66.42748889099933 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 47.08315028241125,
            "unit": "us/iter",
            "extra": "iterations: 14872\ncpu: 47.07944345077994 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 42.747607251491445,
            "unit": "us/iter",
            "extra": "iterations: 16438\ncpu: 42.74658723688994 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 41.57783930683947,
            "unit": "us/iter",
            "extra": "iterations: 16908\ncpu: 41.57459687721788 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 39.411037743278726,
            "unit": "us/iter",
            "extra": "iterations: 17778\ncpu: 39.40882618967262 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 39.47666460639312,
            "unit": "us/iter",
            "extra": "iterations: 17797\ncpu: 39.47467410237678 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1856.2120984042813,
            "unit": "us/iter",
            "extra": "iterations: 376\ncpu: 1856.1040638297845 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 406.96641661823713,
            "unit": "us/iter",
            "extra": "iterations: 1721\ncpu: 406.9478442765848 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 277.39032014248096,
            "unit": "us/iter",
            "extra": "iterations: 2527\ncpu: 277.3675571824301 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 234.76093340025378,
            "unit": "us/iter",
            "extra": "iterations: 2988\ncpu: 234.74109738955812 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 226.11612087911558,
            "unit": "us/iter",
            "extra": "iterations: 3094\ncpu: 226.1038374272801 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 216.1158335901485,
            "unit": "us/iter",
            "extra": "iterations: 3245\ncpu: 216.10424375963032 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 207.7065428233843,
            "unit": "us/iter",
            "extra": "iterations: 3386\ncpu: 207.69283284111148 us\nthreads: 1"
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
          "id": "db562bd7f6806e5a551b25130405f6606ae2c4a6",
          "message": "Merge pull request #235 from genogrove/fix/misc-cleanup-182-188-146\n\nMisc cleanup: test quality, dead code, null checks",
          "timestamp": "2026-03-15T23:01:47-04:00",
          "tree_id": "8ef3d160ebb2e800e62601720c9c2fcec95081de",
          "url": "https://github.com/genogrove/genogrove/commit/db562bd7f6806e5a551b25130405f6606ae2c4a6"
        },
        "date": 1773630346081,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "BM_grove_creation_unsorted/100/2",
            "value": 29.75103209220488,
            "unit": "us/iter",
            "extra": "iterations: 23339\ncpu: 29.746542996700796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/5",
            "value": 7.241722471110472,
            "unit": "us/iter",
            "extra": "iterations: 95536\ncpu: 7.241201002763356 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/10",
            "value": 4.908968762666361,
            "unit": "us/iter",
            "extra": "iterations: 143098\ncpu: 4.908695432500805 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/15",
            "value": 4.101948736344167,
            "unit": "us/iter",
            "extra": "iterations: 171447\ncpu: 4.101503951658532 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/20",
            "value": 3.7897243844319113,
            "unit": "us/iter",
            "extra": "iterations: 182555\ncpu: 3.7895224124236515 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/25",
            "value": 3.7516666166822104,
            "unit": "us/iter",
            "extra": "iterations: 186725\ncpu: 3.751306879100278 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/100/30",
            "value": 3.5824498633296717,
            "unit": "us/iter",
            "extra": "iterations: 199385\ncpu: 3.5822492263710917 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/2",
            "value": 267.79219288173,
            "unit": "us/iter",
            "extra": "iterations: 2613\ncpu: 267.7731515499427 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/5",
            "value": 40.811486543168634,
            "unit": "us/iter",
            "extra": "iterations: 17166\ncpu: 40.80833327507866 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/10",
            "value": 28.32324588116892,
            "unit": "us/iter",
            "extra": "iterations: 24825\ncpu: 28.320566525679702 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/15",
            "value": 23.98293901733173,
            "unit": "us/iter",
            "extra": "iterations: 29369\ncpu: 23.981044502706947 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/20",
            "value": 23.504385762664953,
            "unit": "us/iter",
            "extra": "iterations: 29233\ncpu: 23.502678616631876 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/25",
            "value": 23.197167247611304,
            "unit": "us/iter",
            "extra": "iterations: 31271\ncpu: 23.195566499312477 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/500/30",
            "value": 22.238922606423078,
            "unit": "us/iter",
            "extra": "iterations: 32535\ncpu: 22.237527770093692 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/2",
            "value": 593.1982554991248,
            "unit": "us/iter",
            "extra": "iterations: 1182\ncpu: 593.1683164128585 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/5",
            "value": 128.08665141811306,
            "unit": "us/iter",
            "extra": "iterations: 5465\ncpu: 128.0718140896616 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/10",
            "value": 68.99161280610208,
            "unit": "us/iter",
            "extra": "iterations: 9964\ncpu: 68.98758490566024 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/15",
            "value": 56.46321137113606,
            "unit": "us/iter",
            "extra": "iterations: 13332\ncpu: 56.459871812181255 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/20",
            "value": 58.2823427791977,
            "unit": "us/iter",
            "extra": "iterations: 11363\ncpu: 58.27719431488168 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/25",
            "value": 50.21009340356879,
            "unit": "us/iter",
            "extra": "iterations: 12719\ncpu: 50.20499882066186 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/1000/30",
            "value": 52.82862108863268,
            "unit": "us/iter",
            "extra": "iterations: 13742\ncpu: 52.82150458448544 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/2",
            "value": 4225.642698795226,
            "unit": "us/iter",
            "extra": "iterations: 166\ncpu: 4225.068801204807 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/5",
            "value": 885.743670037921,
            "unit": "us/iter",
            "extra": "iterations: 791\ncpu: 885.6211112515801 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/10",
            "value": 614.7932094055143,
            "unit": "us/iter",
            "extra": "iterations: 1127\ncpu: 614.754603371783 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/15",
            "value": 527.0470384036385,
            "unit": "us/iter",
            "extra": "iterations: 1328\ncpu: 526.9652665662647 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/20",
            "value": 501.6361127167578,
            "unit": "us/iter",
            "extra": "iterations: 1384\ncpu: 501.5744147398851 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/25",
            "value": 473.24850710898073,
            "unit": "us/iter",
            "extra": "iterations: 1477\ncpu: 473.1992376438709 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_unsorted/5000/30",
            "value": 462.85236863004604,
            "unit": "us/iter",
            "extra": "iterations: 1511\ncpu: 462.8066168100592 us\nthreads: 1"
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
            "value": 22.953546497067567,
            "unit": "us/iter",
            "extra": "iterations: 30346\ncpu: 22.951677189744984 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/5",
            "value": 5.5046119430225975,
            "unit": "us/iter",
            "extra": "iterations: 126015\ncpu: 5.504022275125959 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/10",
            "value": 4.281225602855123,
            "unit": "us/iter",
            "extra": "iterations: 166997\ncpu: 4.280936304244986 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/15",
            "value": 3.6209400628303454,
            "unit": "us/iter",
            "extra": "iterations: 193219\ncpu: 3.620521253085877 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/20",
            "value": 3.4723569460636443,
            "unit": "us/iter",
            "extra": "iterations: 191281\ncpu: 3.4720502820457835 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/25",
            "value": 3.5024646493396943,
            "unit": "us/iter",
            "extra": "iterations: 200265\ncpu: 3.5022099068733885 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/100/30",
            "value": 3.2746000056401474,
            "unit": "us/iter",
            "extra": "iterations: 212758\ncpu: 3.274410048035796 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/2",
            "value": 139.10608759999832,
            "unit": "us/iter",
            "extra": "iterations: 5000\ncpu: 139.09392799999978 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/5",
            "value": 28.166429979315293,
            "unit": "us/iter",
            "extra": "iterations: 24657\ncpu: 28.16417435211086 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/10",
            "value": 20.746248643096873,
            "unit": "us/iter",
            "extra": "iterations: 34085\ncpu: 20.745052193046703 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/15",
            "value": 18.42367048859859,
            "unit": "us/iter",
            "extra": "iterations: 38375\ncpu: 18.422553224755724 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/20",
            "value": 18.304433794723934,
            "unit": "us/iter",
            "extra": "iterations: 38290\ncpu: 18.303073570122766 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/25",
            "value": 17.66483745150014,
            "unit": "us/iter",
            "extra": "iterations: 39176\ncpu: 17.66377282009394 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/500/30",
            "value": 17.31346950358147,
            "unit": "us/iter",
            "extra": "iterations: 40349\ncpu: 17.311127413318843 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/2",
            "value": 327.4917065759569,
            "unit": "us/iter",
            "extra": "iterations: 2205\ncpu: 327.4838480725627 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/5",
            "value": 61.74138767062527,
            "unit": "us/iter",
            "extra": "iterations: 11355\ncpu: 61.7370177014535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/10",
            "value": 42.247561243035214,
            "unit": "us/iter",
            "extra": "iterations: 16508\ncpu: 42.245853828446535 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/15",
            "value": 37.61124213192366,
            "unit": "us/iter",
            "extra": "iterations: 18556\ncpu: 37.60955804052584 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/20",
            "value": 37.39978983214667,
            "unit": "us/iter",
            "extra": "iterations: 18647\ncpu: 37.39816705099983 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/25",
            "value": 36.657733990657455,
            "unit": "us/iter",
            "extra": "iterations: 19270\ncpu: 36.655740373638075 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/1000/30",
            "value": 35.68745810226412,
            "unit": "us/iter",
            "extra": "iterations: 19655\ncpu: 35.683970033070764 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/2",
            "value": 1860.9472625995907,
            "unit": "us/iter",
            "extra": "iterations: 377\ncpu: 1860.7547400530455 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/5",
            "value": 364.98667072522875,
            "unit": "us/iter",
            "extra": "iterations: 1889\ncpu: 364.9539518263642 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/10",
            "value": 246.40711542534166,
            "unit": "us/iter",
            "extra": "iterations: 2833\ncpu: 246.39243134486304 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/15",
            "value": 211.40242079659313,
            "unit": "us/iter",
            "extra": "iterations: 3289\ncpu: 211.3822955305553 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/20",
            "value": 204.05958999708565,
            "unit": "us/iter",
            "extra": "iterations: 3439\ncpu: 204.04342250654136 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/25",
            "value": 197.33529212530658,
            "unit": "us/iter",
            "extra": "iterations: 3543\ncpu: 197.33033813152727 us\nthreads: 1"
          },
          {
            "name": "BM_grove_creation_sorted/5000/30",
            "value": 189.5140568797357,
            "unit": "us/iter",
            "extra": "iterations: 3692\ncpu: 189.49864788732455 us\nthreads: 1"
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
      }
    ]
  }
}