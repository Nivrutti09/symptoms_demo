'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "24da65393a7eda12651c7d44caa0bdb8",
"index.html": "ff5ff26d3ac6ae39dcdd649bb643ee3f",
"/": "ff5ff26d3ac6ae39dcdd649bb643ee3f",
"main.dart.js": "118018a69c05d179129a0eb609896af4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "12997338e3c64269438eb3b45e09e4c9",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/0c/5aee10d73d5016d5fe354cdbb5c2ff27b23ec4": "cfe95d4110639f5873d654c28d0541fe",
".git/objects/50/eecb3bea4beece9f17f5e2612b3dc06cf508a2": "87a57583d01631ed825204a620a968bd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/d0/1498a75a432378e441d7945de6cbc6ba2c26ba": "fa2bf0b7b02b528d0a9543e5053fe299",
".git/objects/a2/b67cae1bea50c4145c7fddbe68a8fbf391a1b9": "bdea5064dab3b650e303cbd37ce16995",
".git/objects/a5/85af59e18ccbfe311d7a24d8642f3a82a4afe3": "78037771fa85dca2514440a249e5fc4a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/cf/6993616106ae68c7ac297a17edf0622131bff2": "092a02a59b563954218cf9f5ab888ca7",
".git/objects/e4/0643b1d20a5a19839026db345288e2ee784e6e": "b9e4bb6bf995f63715146839d684eb35",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/42/d076dfe5bac849d96cfbf0475fed8f4cbd8f1e": "43100ab86d3a434a959c2067e59cb125",
".git/objects/1a/04063e82f4917db0aadf6e299bc35541702f4a": "61d6de2bc09368fc1509eee7465a94ce",
".git/objects/28/db0219c7a877504f2504a215b0641e9b9a3e4e": "b6df1121248e54fc2e42e8af8f813c81",
".git/objects/8a/6576c8707db489df27c785d8766c47775776d1": "e2993a6373d1fe9dcd882233e0f7298e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/88a409e3a42eb70c6079d458a9aefa0fea709f": "01cb1465d7bca22a52049594edd17dac",
".git/objects/65/a9a787dda3a97b8ef9df230e69cfcc925937ea": "d3b63768d07b332632182af96f924545",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/63/ee0d178dcd06ba0ff23ecc829dce63aebd2dd1": "dc36085673c675e0ad727e5cf9b65445",
".git/objects/ba/f2b71bb5f88c5c9c54374138ed3bdd7eb3a6c2": "c94f9c6a7410784cd33cdbe225197f75",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/de/664e320b1914ce55e805933a4337c8642abb15": "06344a8300b58e4485cd8c19765daa6c",
".git/objects/a6/fb8c9b7b04e994e987f0cc379566200f5181c6": "9adf7e0599250b7d504b8dc7c03596b0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/d599baa266df431d3db6a7854b277a445e87a8": "0bf75faee7985dedcfae75f69cc48676",
".git/objects/c3/7b3d77324d5952cb7355dbcf11bd4a59ef5745": "dbebb2569f6c75e90eb132608b0ad334",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/47/0fabe119e3af6a6a4c644ee5476a40d03ae2eb": "3a727850e9653c9345761f69c5d678a2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0bf72ffbf173f5b93e64bb1682a98cd0",
".git/logs/refs/heads/main": "ff1fb4d3982b86140c98f2097ab2eab1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "45c0b5bc02538394e404d517649ef35d",
".git/index": "b640b90a3e6e01e56cced62c9f3711e3",
".git/COMMIT_EDITMSG": "55a98d2f133bb742c384632fefda4f24",
"assets/AssetManifest.json": "f95b1d940af9d306c344a447213293a9",
"assets/NOTICES": "3be479c9045eda18ca4be2f3e3d55d42",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/user_profile.png": "498d600c434a3808564afa34f09b3d93",
"assets/assets/profile_image.png": "91d6dbf769e432d85edccc5672318c4a",
"assets/assets/images/covid-19.jpeg": "ddf0427733d52982efd6491d6e0f0e43",
"assets/assets/images/water_vector.jpeg": "7defac8a08127c604a3c280e191e9694",
"assets/assets/images/zika_symptoms.jpeg": "2d4e479bf61173ee7aeba61f2575f6f6",
"assets/assets/images/maleria.jpeg": "ea85aff1080e46aa627860ea124b9f0a",
"assets/assets/images/zika_virus.jpeg": "639f827aee8f16b6c451daa4e0585ca7",
"assets/assets/images/air_credit.jpeg": "ba3ead9587ba101feaacf0f8b8693f7b",
"assets/assets/company_logo.jpeg": "25473edb143f3a33b985806f9aa61273"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
