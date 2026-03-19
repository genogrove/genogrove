window.BENCHMARK_DATA = {
  "lastUpdate": 1773939958958,
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
      }
    ]
  }
}