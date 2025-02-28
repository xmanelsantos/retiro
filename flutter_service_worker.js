'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "67a09230424df9db2ba673bb4d30d5e5",
".git/config": "e05fb9ba5db61bc06f513938c318a78d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "df1b41a14282687b9108a347e886b6a0",
".git/HEAD": "4f12c100f136c618952f345a25beafc8",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bd7a503e6345ba47c85bf00fa3dcf8d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9a0545ff123e6bd291b918ce08d324bb",
".git/logs/refs/heads/master": "11756aa0ed5d5d50ab735ac2793409cb",
".git/logs/refs/heads/v1.0.2": "30e4caf4839bb62aa66371c84fa36e37",
".git/logs/refs/heads/v1.0.3": "96b08116d87e1d8cf90bb0702b39d863",
".git/logs/refs/heads/v1.0.4": "737cb2ccfc288cd4c3c478875c1c4a8b",
".git/logs/refs/heads/v1.0.5": "13f0e3a14a1c985d9dd2c9e35a5dd075",
".git/logs/refs/remotes/origin/master": "faf4a39cb5ca6bcad6deb2c8b5b73d97",
".git/logs/refs/remotes/origin/v1.0.1": "2ccd56b56b8df9803d06d49aa6ba8a2a",
".git/logs/refs/remotes/origin/v1.0.2": "c24887dc084d793a36ae60f089fefbd0",
".git/logs/refs/remotes/origin/v1.0.3": "024885c446bd211e0cf2436d8d8d09e4",
".git/logs/refs/remotes/origin/v1.0.4": "df7ea9e1fc432c0f21e822ebbf96d60f",
".git/logs/refs/remotes/origin/v1.0.5": "d15bd10529abb808101f6576f64de812",
".git/objects/01/36551d5d007edec7e081bef38858c86712cded": "f5055973fb2831b4cb2aec4061395b0f",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/03/5f088cd0f261adb5fae55d374e6463382ed099": "e146cf8c8f73287c38933c0e3357d8fa",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/83e7c54f842cc0eaf169ecb5d612a4cbb5262b": "69050b6c5e2fe28af9eb57ad88fbf0e2",
".git/objects/07/306916351efe387e9553d12af61bcca5b9aceb": "fbcac765c29778f512361760f07a8c18",
".git/objects/09/fe3e5f22edfa40d0143900017d67cb5645c813": "9b92e0df97a6bff3d6707662ff05bbd9",
".git/objects/13/1b1ca0ab07f5acf62ac32e7cc4e7847a2514e8": "a89a5eee2a3ee89eb9fb1950a5355b72",
".git/objects/13/dd5155d6f7c82053eb3b1aabede0ddb8e57d8e": "05e868c43b624b12f922117e6173ed20",
".git/objects/1d/90d5df15addd343fca125b4bf0dcf269745543": "2ef59161d202fd2e5843f0f50d7d8cb8",
".git/objects/23/79e3ed7e7ef978a437f215b05f804942ce21b5": "da57aa61c64e805a68a6d3a1a2e70fe9",
".git/objects/24/477f77e81c8402e77b7a788f44023f356a1a8d": "33d153d9a7ef617c2d210447ff1d814a",
".git/objects/25/bec177614edfb851e911f7588de09919f9df06": "dfac519758835eb230c4244eb4503ea4",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/2a4dcf995d15937a6f9b574ff640edf30a36a8": "b1e9fe760d865d0368530d916e2115c6",
".git/objects/2c/5127eea4589f07ff6a2606723caa67f7298010": "a8e29b56f90b48e8af4d2f6370a7f802",
".git/objects/2c/7a7cd10a3f0d14465ec80a8c594e46c37c9911": "952f05cf9e6e3fcfbd8d96e519a85e4a",
".git/objects/2e/a7395eef0cd4c2278329e5f46ae0b81fd3c35a": "069504af79542b72e896a091c07e9195",
".git/objects/2e/e8efa0bf4ce0302ca1b6943fbc0a8323c67e96": "e57328a04fa1595c5da381d0d0a38710",
".git/objects/32/fa82e49a69d785b8b72ab4b429d9b9566ba82c": "c0894a456eacb47d59a461ebfdde00e6",
".git/objects/38/179e4d8b21465163638be3ba2760b4b1440213": "9c3d062dd31db5d40e8a288c6fe3f3fe",
".git/objects/3b/c29f4026afbf350952428ff3e22445579851a7": "f9e6ab5cb377e3807c3311d5adf937ca",
".git/objects/3d/c69ff0fdf6a7743c30e3a149cf0302d442b84b": "3bd65dafd97d28f124baac160b9119e6",
".git/objects/41/359a9b28ee8c60b0d06fd9ca7e1dd4a726cccb": "c18b17cab691f9d2e3ba5c87c3ff7576",
".git/objects/42/2c8924ac75d6566a4046f397a4cfd8d3d4ce78": "11da84f0c6d66e819f0ded3dfd88b629",
".git/objects/47/e79e78dc130c186a57a28d97caed273b5c583c": "ac04c01b5f614b95fd5ee5d09803d203",
".git/objects/4d/21dbcbabea7625f4b09f79f3bf010fabb6661f": "43983aef64d8ade62bb02546376977b3",
".git/objects/4e/96c4d3da48b0057688bbbf73477e4e1411faeb": "1cca58c86212de210925cfcd20eaf941",
".git/objects/4f/e8ebe2fc090388832fc248367e8a5117e68782": "37b98fc712c22dc089d8ec600e0a127e",
".git/objects/54/ca22af9f4a5288be1cea417ed6ad17d1069f99": "28727f9cc909a42fd583951040c097bf",
".git/objects/56/feddb0c5675f3d696a17a14d6caf12d198d34f": "3c0f4f5cecd6ce9fe2a30edd378e5f10",
".git/objects/5e/e5c00cc864d29cfd4d95806fe8186b1f807014": "b2be9180b6417fcc416affa4f0b92709",
".git/objects/60/86717eae65b7295d845420dc5a9405fdb3feb2": "bea6f5619b171c2da334f23586c7372e",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/67/0ecf6c0fbc524fb136ae4f350b034ef86e5554": "8adb00795dae634a9236e909d665cd9d",
".git/objects/69/a52f69549a7342f1db5ca3616249f29df472b2": "8377d506edc7f56cf490f53881da64e2",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/577085929ebab8624e99fc7a902a2e513abc48": "16479b7466d516631745d9c7cb6777d2",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/76/42078b515f2a226344fc1ad958d25cf9b2a13f": "60564d16cd7502dc412436d67a50ad7d",
".git/objects/7c/77708ed7a994930d5880772f91bd1f9817da17": "3fe6b5edcfa6fbdc69d886a634f18099",
".git/objects/85/8834f7996d749b07574ef49d98682ebfea814d": "04d41b7dfdb0045582245ec63cd95082",
".git/objects/8b/8d33581bf556939b55d8d53848a19af42178e0": "bff9eda1531078b4c5d3afbfe189bb33",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/10deee5ebe36c1bd425f85000e954213a29b4e": "a952fd5e447bb83cdfca996b9bbcd606",
".git/objects/90/7956a2c4b05d5079fc2d255d19bf70226321f0": "43860bfdafb9ef50ae78424c9da9661a",
".git/objects/97/5154a737aa486cef77bb8767bc6403327e2aec": "c57e31276775df8b1ae60f77a6f49b1d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/4c41f9bf6ca2c46d93b3e383583603355d17b2": "78dedbd45c0358766d94cab43fe45764",
".git/objects/a0/df0126a78e87bc105e93109134b9f7530d943e": "64f0af74103437bb0d159ba1ee3f7ce9",
".git/objects/a2/d129b50298953f1c2e69a417cfc37c7ea8714d": "7120aa9ebaf01cacfaff9bade08b88ea",
".git/objects/a3/5ee16bfc155f0d6392d761599a866551bd4abd": "b29fa4101fa4e0cc5241c4f2367cd56e",
".git/objects/a4/5e70a73518625de516a43355f4ad6dfa2791fb": "81e05dc58d82448922a69ba575a961c6",
".git/objects/a5/36797ba8b8713c627ce6bf65100348bcba2ed9": "de7ac5464aa5c7413e4aa233ec4ee625",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/2e2b21fce12c6b0d7a51647b8cb1a053567c7e": "437e3921a730ec5afe60174482a744cf",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/96e9887c04eb86f6df83356c0c8d632a72a2c9": "e68e7e4949c8d3ad1eea556b8d20fb65",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b4/0d07433a1c1a835a895ecc5f1f3af2897533ba": "6a7013d1b18d96b60ec10e5112691767",
".git/objects/b5/e7be3a23aff831d6c62ec16b00ffcf2dd82849": "25822a2be2396840efa183c022097fe1",
".git/objects/bc/1c20f7e097e7f20408c9f355b6dbd4e46c05cd": "c5a7f30d1f111246a4c84dabf955d1da",
".git/objects/bf/3f5ca61771dfbf32fdc7b375ff0c49defb54ef": "266f80d9a2512e932e0263cd80bad593",
".git/objects/c3/063ddaff63d6b11e7eeab0caf88585378b53a7": "ff407a6d7cdd3ee4ff5901765be90fb1",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/d1dc8d944182dfec973d11934ead04959b9b14": "5d8f0e432bb04dc20979ef2718b6f5f8",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cb/190e1b65f2a259d288610262024be8876d2dd1": "d967e4078cfd2a7d2be2403ce4dc12d2",
".git/objects/d0/00d7463e6267a71962c5ce01a7fe6f203af345": "0668b95498d78d87e4d9c4dbb2b0f7fe",
".git/objects/d0/d346a9e58f2c99d8b43d0de2563674d0782130": "9c575c98902530cf5cdfc99a5f62c824",
".git/objects/d1/767c7d09f2500a16cccb19aeca63ea8e701f29": "00f1cbfbd0b102f7f9630248c2319afa",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bba09be5c91de024a5a7081596cd3e14325443": "a2ddfb178cad0ebf0d10abd175ab4b92",
".git/objects/d6/35209b099826c5529159a581b0dcce3a1aee55": "ea7cf40a3dc4a3374ac0ddcd94ffcb76",
".git/objects/d8/210e660493c71e16631a560816a008cc0f35c6": "5ba7ef2bc9513f49d30b4d8e738a44ce",
".git/objects/dd/9266eb813a4eb6a05c052e272bf80584639fb7": "90c4c4a73d1f8b5f759f2a9e12b5e17a",
".git/objects/de/88afacbe7e8c6bde43f57e5ef449acf6ca79be": "f1247961e55ceb490d0b812fcc3a73f7",
".git/objects/e1/5c7f57ad2078a427bd983cb8d542832ed7d3ba": "bfb2120a5a843df14ac27f0a31732d04",
".git/objects/ea/483f376733465513056c8b6b726d13e4e3faf6": "c9036a779a82517304693602a2caed19",
".git/objects/eb/b85f9ca37630302fdc521125ccd804f3968d35": "83ffc145d03d8da7e940882c962c74b5",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ec/4902c4b09eb9456159e4422e262e22e35e76c7": "ecd5bfb5d4d27c1ae254ad08c0bf2e5f",
".git/objects/ef/2af21386e9b2febcd32ffdc317ace1a97428f4": "91c7efd90f5a2bc332dc32414376bd24",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/0a19c15422e915eb81490a2dc30ceb200b2f1b": "b5879696f3446766204677beadfdc13f",
".git/ORIG_HEAD": "38c83da10cc73b1c85f8fd15db340c48",
".git/refs/heads/master": "6231172397d9f17d79cde401e0531379",
".git/refs/heads/v1.0.2": "05f99016fbf29c27ba75cee113d6729e",
".git/refs/heads/v1.0.3": "8d1a400f795160bd35129db5c41b26f5",
".git/refs/heads/v1.0.4": "c25760c975ff92d20c1e06be6cbe7d68",
".git/refs/heads/v1.0.5": "32a2a26ab732cd3ee57e06c44133c2ca",
".git/refs/remotes/origin/master": "d04c939387a6cb026806c6c18eaf41cd",
".git/refs/remotes/origin/v1.0.1": "3ec2268f7bde59382d34ae04b2cbd4b2",
".git/refs/remotes/origin/v1.0.2": "05f99016fbf29c27ba75cee113d6729e",
".git/refs/remotes/origin/v1.0.3": "8d1a400f795160bd35129db5c41b26f5",
".git/refs/remotes/origin/v1.0.4": "c25760c975ff92d20c1e06be6cbe7d68",
".git/refs/remotes/origin/v1.0.5": "32a2a26ab732cd3ee57e06c44133c2ca",
"assets/AssetManifest.bin": "2e6df5785074de1eeed410d91c598a93",
"assets/AssetManifest.bin.json": "99dfcb055b32c460bdc771b76019b874",
"assets/AssetManifest.json": "eb65f6a009673774865c62fb637f2b1f",
"assets/assets/image/icon.png": "127b07f6e173136b47069b327615958b",
"assets/assets/image/icon_transparent.png": "99f2c5f2d27898a1c3893aac6f117bd6",
"assets/assets/svg/icon.svg": "4268d9d28e83da38ecb2d31bfb27c8d0",
"assets/assets/svg/icon_transparent.svg": "cd05a70ae77d1e748ff39195eadc9e70",
"assets/FontManifest.json": "de3db47790d78d56ee9a8cf060546cac",
"assets/fonts/MaterialIcons-Regular.otf": "4e6d8ab4a0d568e8f279863670430b58",
"assets/NOTICES": "3b41e5df01e704ba868242816851af2d",
"assets/packages/hugeicons/lib/fonts/hgi-stroke-rounded.ttf": "7b7e29353cabc1555d2720eb496b805e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "4ea7fb863a56a1765e7799eae506116b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b0c23f6fdf9eef5d7a2ec53fe32219fc",
"icons/Icon-192.png": "aa70aa12bd1450516b099d6dd668db87",
"icons/Icon-512.png": "7d1def4df6ecc4aa119045e4f96ab221",
"icons/Icon-maskable-192.png": "aa70aa12bd1450516b099d6dd668db87",
"icons/Icon-maskable-512.png": "7d1def4df6ecc4aa119045e4f96ab221",
"index.html": "7463aea6520338a5428351349c4d7622",
"/": "7463aea6520338a5428351349c4d7622",
"main.dart.js": "f71907f2627168a8e7187756d44d3dae",
"manifest.json": "527dcd40028997d8ad830810eba61ee8",
"version.json": "39d6df7e3485fbfa1c3125c09d708314"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
