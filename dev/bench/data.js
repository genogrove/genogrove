window.BENCHMARK_DATA = {
  "lastUpdate": 1774667316444,
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
      }
    ]
  }
}