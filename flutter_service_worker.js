'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"index.html": "f10c8cc80825d081624120af46681afc",
"/": "f10c8cc80825d081624120af46681afc",
"assets/NOTICES": "b8772be4ee2c657000321009722e79d9",
"assets/assets/images/tiers/sprout.svg": "0c954e4435064d49874de1edcdf5cf9f",
"assets/assets/images/tiers/21.svg": "40ab79326e5bbf534b675f10050b8e49",
"assets/assets/images/tiers/unlisted.svg": "78b785fc11ea1a2ae9df558dc559bfe0",
"assets/assets/images/tiers/23.svg": "f26545b4b6c336ed53546095d444b713",
"assets/assets/images/tiers/9.svg": "baa47182fe6186eb5184caa38cff7d90",
"assets/assets/images/tiers/mark-verified_.svg": "15376e819dd38349ce2ce6ce3355c9fc",
"assets/assets/images/tiers/20.svg": "080b7ba3e408de720df0ec8bbc67afb0",
"assets/assets/images/tiers/24.svg": "e43b6779d0c1924b805d4816aba15f5f",
"assets/assets/images/tiers/26.svg": "26e1eade5d6310a0aa6ac6d4cf9d22bc",
"assets/assets/images/tiers/17.svg": "911366b26c498b47b932856641683ecc",
"assets/assets/images/tiers/1.svg": "c6b59b1ee7f845a80f8cb177682a736a",
"assets/assets/images/tiers/10.svg": "23cfcc07584fd609ce892d09b5abb085",
"assets/assets/images/tiers/25.svg": "6c2f2ad04a342559d69ef3e98b461b12",
"assets/assets/images/tiers/0.svg": "8cae71d4c356e46ff64d6dc4bcd9e5df",
"assets/assets/images/tiers/18.svg": "1ede905d7333c1b4085f180904bfc05c",
"assets/assets/images/tiers/14.svg": "28fd906d187b95ca53505b9b5d160a2b",
"assets/assets/images/tiers/mark-verified.svg": "b72c82cdaf61800971b28c30bdecac49",
"assets/assets/images/tiers/30.svg": "396ed99609d024be27845245c931d9a2",
"assets/assets/images/tiers/5.svg": "2ce0fe35bfdfe7821df36863db10f1dd",
"assets/assets/images/tiers/unlisted_.svg": "508062e38834121509956a2cb72fdc8c",
"assets/assets/images/tiers/4.svg": "99b0f50fc104fa9ad9637fb7ff4b8d64",
"assets/assets/images/tiers/16.svg": "71971d90f647fffcf39f7f44fce0ecdb",
"assets/assets/images/tiers/2.svg": "3dadf27062e40adce5af8d538d5152b9",
"assets/assets/images/tiers/3.svg": "bd5d8d1920805c746284a323574d85c4",
"assets/assets/images/tiers/6.svg": "03a738a5b5be87b199c42c656eb2ff6a",
"assets/assets/images/tiers/31.svg": "39a8bb2ed3c66a1f0ae1456c8fd7d17a",
"assets/assets/images/tiers/nr_.svg": "19cab1351c16ef9c54af9bbe109054ff",
"assets/assets/images/tiers/27.svg": "5b8421bd929bf1faaf630d105b2cf228",
"assets/assets/images/tiers/13.svg": "4ea1a3664eb39630fb3e2f77fcc2c066",
"assets/assets/images/tiers/8.svg": "6e5635626320879c694963ae596cbc41",
"assets/assets/images/tiers/28.svg": "a708e9f185be4716ea7eff1ca33beda9",
"assets/assets/images/tiers/7.svg": "7c28740e98b847f581979eeac6b33e6a",
"assets/assets/images/tiers/22.svg": "8c7e8040a527ea332d8cfc10133a1ed6",
"assets/assets/images/tiers/12.svg": "ff8fd407db91dd852fbea61118694bc6",
"assets/assets/images/tiers/19.svg": "8a3f0c557c32ef9b23dd3bf05552aa48",
"assets/assets/images/tiers/15.svg": "889d9246ad3ed7540f1a4ddb9cd89ccd",
"assets/assets/images/tiers/nr.svg": "5b1ff8fa101940ec22356de343ca41ab",
"assets/assets/images/tiers/11.svg": "4b8269b21e9544beff901c801088bc70",
"assets/assets/images/tiers/29.svg": "94abf37181acc15d1eda77cac96a6962",
"assets/assets/images/logo.png": "6895295bd8de2d1c6bc5cf931d8e6d0e",
"assets/assets/images/icons/freeze.svg": "063b2e23e4a52fa613fbf8b0e752b498",
"assets/assets/images/icons/badge.svg": "ee8c4ae2e4a14cb6dd28e7ee7403ef60",
"assets/assets/images/icons/rating.svg": "1370d1cc3267235439e4aad77776823b",
"assets/assets/images/icons/company.svg": "4d5da551905dd2bbc93697199765ca5f",
"assets/assets/images/icons/tag.svg": "00b4a44e5349a82b53cbc6f172d5e409",
"assets/assets/images/icons/streak.svg": "5dc151f0564c027c93381cbebf9334c1",
"assets/assets/images/icons/school.svg": "8fa37fa4927f758c8aaede0bc43b8791",
"assets/assets/images/icons/community.svg": "4b92994b6b9d031225745607586ef98d",
"assets/assets/images/venues/topcoder.png": "a2bb213faa21598c10e92f217e70d79b",
"assets/assets/images/venues/solved%2520ac.png": "6e24a574ef03a7372c9a590e2fa79c2e",
"assets/assets/images/venues/codeforces.png": "bcaec2de9d1dd3f397f3551398d2bd77",
"assets/assets/images/venues/olympiad.png": "78714fd60d58cfec46da71aa3dae8d91",
"assets/assets/images/venues/programmers.png": "791de424857f9c05fecd3564f801b1b0",
"assets/assets/images/venues/ac%2520arena.png": "e70cc75f677b9de1f8536f6d8e5b2fdb",
"assets/assets/images/venues/icpc.png": "9212361659655dcf8521b35600845548",
"assets/assets/images/venues/google.png": "4c55b8d3625b8dfadd7eeb618a7137e0",
"assets/assets/images/venues/boj%2520open.png": "cb70942b2313aa5aad52597048668499",
"assets/assets/images/venues/facebook.png": "a32bf28af3da44ea54d850b17dc8f0e8",
"assets/assets/images/venues/codechef.png": "5c2ed8ca2c60e24f6edd556de8497dab",
"assets/assets/images/venues/scpc.png": "5a5de0117f114c2542dced5528cb7b46",
"assets/assets/images/venues/leetcode.png": "9b6b171cf960e7bf0935610d263e4496",
"assets/assets/images/venues/atcoder.png": "17230dcd6b806d589e271c6e455ef619",
"assets/assets/images/venues/usaco.png": "e5c75b704f5b4f1f532e89d50eab7ab0",
"assets/assets/images/classes/c9.svg": "e338ef990f53ff8b70c7d02087611282",
"assets/assets/images/classes/c3.svg": "475b8e0a2bab459e9ecb6fbece9832c7",
"assets/assets/images/classes/c8s.svg": "b7988f06d6770dd77f6d394f0b5ee635",
"assets/assets/images/classes/c1.svg": "7473d362956b924663f21a5be86c3778",
"assets/assets/images/classes/c8.svg": "693e24048ac4fbef294cbbce9d057f2b",
"assets/assets/images/classes/c0.svg": "ec6860f3e60e7a05dff8962163043935",
"assets/assets/images/classes/c1g.svg": "0cc4b9e476a4f9472ca034cb4877c437",
"assets/assets/images/classes/c4g.svg": "b75f31aa32f294db1a5a6db298f0615f",
"assets/assets/images/classes/c10g.svg": "8c92646f131fec524fc8e83c10e01323",
"assets/assets/images/classes/c2.svg": "dad6c27c6fbe80d99cc5932a33d806c9",
"assets/assets/images/classes/c8g.svg": "bce3a7fb6887152f6a465f977c112ac5",
"assets/assets/images/classes/c9s.svg": "45c064e15d6cb479a5fba8d9c639e0e1",
"assets/assets/images/classes/c10.svg": "d703e7d7e4fb9b294ed5f86f02bd364d",
"assets/assets/images/classes/c7g.svg": "3fe4f84191531ed1863ff9b73ef672b3",
"assets/assets/images/classes/c4s.svg": "5f11550dbdd5d7377dc2cb5d209a9862",
"assets/assets/images/classes/c5s.svg": "aa67704a61fdd7edad7085760e38835e",
"assets/assets/images/classes/c5g.svg": "c03d83a887cc3ab053ad207ce0eb7a67",
"assets/assets/images/classes/c3g.svg": "628ca35efcb985df77ab464e9e5cc4c2",
"assets/assets/images/classes/c6g.svg": "87859d9ffb3777a7c74df447b65368ff",
"assets/assets/images/classes/c1s.svg": "8f51bd622cf26c3bd89c1e4d12484a39",
"assets/assets/images/classes/c5.svg": "7effef77c6313f0343e130ca4700c792",
"assets/assets/images/classes/c9g.svg": "109809a096c6a8e9affdec867d482782",
"assets/assets/images/classes/c4.svg": "ffabdaa9fc9062538b2f6debbc87b18b",
"assets/assets/images/classes/c2g.svg": "1cc0935fb800b236b4e7b9576e5fbf67",
"assets/assets/images/classes/c6.svg": "70c30b6530ea5e8a5d8ed77d53fcd3f1",
"assets/assets/images/classes/c7.svg": "26f129fc49964f325467f174489598a0",
"assets/assets/images/classes/c6s.svg": "bfc2d089ef136d242cdba8fc0c718cd4",
"assets/assets/images/classes/c3s.svg": "8a7bc3b160cc47ef11389a16e84f0297",
"assets/assets/images/classes/c10s.svg": "2c2666572b32207e325bccf080e53ded",
"assets/assets/images/classes/c7s.svg": "82c68a8b973233b814c62d7ee602ff2f",
"assets/assets/images/classes/c2s.svg": "2af8f4bab721cba1b9dd34c3048825a3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3e3f34f0e70447b59b3afed0997a98e4",
"assets/fonts/MaterialIcons-Regular.otf": "2f459b52e54d0b64ee6f89dde2b9eac0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "ca9684903f32d99d2ba5bdd3bf965784",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/AssetManifest.json": "b2a275f367dc3dd90ac89d06b16bffde",
".git/config": "1cc64d6744f97cce931a387237bb0049",
".git/objects/pack/pack-2d8dd3ac513abdd7d9ea64cea0c8480110c6c786.rev": "234c13f9e2d1a3ce86a447fdcb805481",
".git/objects/pack/pack-2d8dd3ac513abdd7d9ea64cea0c8480110c6c786.pack": "192b3d01ede2b10f9b9dfbe2f611e3a3",
".git/objects/pack/pack-2d8dd3ac513abdd7d9ea64cea0c8480110c6c786.idx": "bb2265a4d196e9f3785d0507201be5ff",
".git/logs/refs/remotes/origin/main": "62d42dfc5d5961680c5743f4f5db096a",
".git/logs/refs/heads/master": "ab501bfaf515ff641ee23c1e25070c62",
".git/logs/refs/heads/main": "119bd4b10ffcd4d0b3137e424619ae22",
".git/logs/HEAD": "c1e8adea67f7325bcc121e1764dd682b",
".git/FETCH_HEAD": "2072b8af7e6666b7c6eecac106337aee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "f28e3eff659ecb79e14140cf6ea6f4a2",
".git/refs/heads/master": "f28e3eff659ecb79e14140cf6ea6f4a2",
".git/refs/heads/main": "f28e3eff659ecb79e14140cf6ea6f4a2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/index": "baa65ec1fb573a79e7648c062c701ec6",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"version.json": "f3695c295084cbd8e258818f89245005",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"main.dart.js": "8f478ef96d7a9b68582fb9139d4da42f",
"icons/Icon-maskable-512.png": "b85e554620b196b15f0022c7c54e45f8",
"icons/Icon-192.png": "ee6859d8be31a491ec83d3a6bbab2aea",
"icons/Icon-512.png": "b85e554620b196b15f0022c7c54e45f8",
"icons/Icon-maskable-192.png": "ee6859d8be31a491ec83d3a6bbab2aea",
"manifest.json": "89ab515d710dedf056bb676f21523747",
"favicon.png": "88b46eeec1303e07d5d8326a9a3a1c8f",
"flutter_bootstrap.js": "994463634dcc43bfdfd2067693be9c31"};
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
