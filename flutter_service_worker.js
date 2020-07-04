'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1245c6589db50c4b38ca9a5bd0dcf902",
".git/config": "eb95197bec2239105043945d181599ba",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "970fa14b2fc5460f9009d8307737c813",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "43e518f89a7a2ddc5314b6a50c2dc986",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d110f6e2913c140fbb87a2d1f24ae3c9",
".git/logs/refs/heads/master": "d110f6e2913c140fbb87a2d1f24ae3c9",
".git/logs/refs/remotes/origin/master": "8d4a9c6159e5c52f19f39fabd153f6a4",
".git/objects/08/2c131e1a58c52853e58457bc5cb004a2a5e613": "317f1444b8ec1517716b451f98042ec9",
".git/objects/0e/6d88f4e5224d47396fe6da79c00b57df55cced": "b670dc9b0900baf30db94826df5fbae0",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/82a4c29c70e696f7453635f957d16cfe4d63b0": "9a414867e798b620ecd1ef474bca0b85",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/17/28b69da5a422e343e1d3a287e4287da6e9a254": "b506513d2399154a20c6ec25fe74bd6e",
".git/objects/20/365f1b30bc94b89441e79f5df828f576a49083": "f7bc53661a27124c4b8549b69938a307",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/25/9a24e4d2e66db04470a6b8362a89452328583e": "75f1f45d1ee5168ec257dd78db6b156e",
".git/objects/2b/adba462ae0341a5b4ded0c8c0cab1cf3bd3b30": "2ff8f6b4158c17e0e048af924fbe6293",
".git/objects/2d/c905df4db074be90fe7cc01a38d7003e91b7a9": "5548e60a7e062e3bb9a8fcff2cb64242",
".git/objects/2e/78ba1c2ff175bbf61ecca7dbb1ae0f687ce81d": "cd825ed17b9524aacc7f13ed8aefebcf",
".git/objects/33/3012eaa3e4ba3452a70f0dc25b272da2eabc83": "18f44a1bc953a1d7282f11025d3dd2d1",
".git/objects/4c/4f5622bdc934efccf7bbc03a53fb688fc67f0b": "5f1e21f7ed217f26adad72111a27a3ec",
".git/objects/59/44e1356e33344acee2f9d753b7464be0b23de7": "6759223fb6ffed7ec1e27d3f4ff98d9b",
".git/objects/5d/ce3ac478166c200385ee40ab04822028e25b60": "c3d5bc0aac49c82952f3b578907e9229",
".git/objects/62/584a6f8153fbb0d31af579da8aace4623ed7c9": "291df0e3c50d9e6e4a49b10fbb775980",
".git/objects/62/d4a91f8520d8b25bed93541caa4a04ebc56bd3": "edbe9657f62f2bb96ec143026b944a35",
".git/objects/6a/4c71c0366de9a0d0d1961d9127b8898b4033da": "43404e4e2e1599b50cd18d1d6ae81ccb",
".git/objects/71/bb2a7a24aa0481863aaf48acabbed5f6f915ba": "1a067fdaf803666c77f59f2d19340a61",
".git/objects/73/47b7310118f2710322bc75e3cf26744f7c798d": "f1f8ad00e3c6f06fca759d0bf7456395",
".git/objects/77/2a379acb99b450c1a0bacb7f907e13a793acf0": "b9e7dc9f12b6e01f938e1948fb98a917",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/85/f37113a9ba01e0f8e3e1a913c517819c35972f": "bc4aa033a8758ff4199f3304d06680b2",
".git/objects/88/9a1f70dd79ee2f0ad6c4b03502f334aeb9add9": "65aa21132b1210edc3bfa17495d74a4d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/b054eee2b2f2bf5ee5a5b65ad62e96d37149ec": "bf0d999c5ea11637b555f238916b9023",
".git/objects/90/f4b265869a4b4424045dc3b859bdb57c8fffe7": "d408e8c9d9968e335447d63cb79e9072",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/98/24df0c87e558c8342d3ab6f6cd49898b92606d": "272484e279b8398c2a25f52c43916162",
".git/objects/9a/1418d62d2f6d82c6d906a84db514b7c7cd9bd4": "91ed6c563a35b38398742a26b027000b",
".git/objects/a6/f894072cbc22e2b766ccee55801df390b5da92": "e980eb12c907fe1317af6cd2f84fb375",
".git/objects/af/5e3957fb950e8619b9b328d28621037cf80525": "b2562c11db7615bded1c1f617473e74e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bf/7ed3ce15c218fc64059e08f187a31bf38f027a": "cfdc7abe77c5cd2c2f2d08a4e8889f49",
".git/objects/cc/ce329586445c1898db8f7af7f36c2c348ec0b9": "f2b9ceb47d7da7d89ef63036c2e30b61",
".git/objects/d0/c4c73da389e05ec8aa2f275ed57b1584bbfca2": "5dc8f650cec7460135b010a002535cf0",
".git/objects/d2/b38c16a2c6243bf802c08fa02a12a5091a5e09": "88bc683bf581cf3f1dceaced41a1b24a",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e6/ede314c2a4bec1b589403632c63aae925c8578": "cd640c9f8768d3c87e9348d15829376c",
".git/objects/e8/da77bc85cdd085bc160df2ce588d70532a8be6": "0e2769314dd36c9bf548c2e6309fe87d",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/f2/e4bb1c8363f1cd572b5a3ae5cd5c2d840be5a0": "bb4ab80c40f5b2e45037a8088d5757ac",
".git/objects/f5/128fbbfa4275599790e0ff382e78025844fd21": "bc3685c2d9e270be56939436a12d2063",
".git/objects/fa/ef6a857330879b521460bcdf38b70662aeb6fc": "90d394ad6ecc333e5f43f736e2decb6d",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "1d72288548cc1407336cc2599e7baca7",
".git/refs/remotes/origin/master": "1d72288548cc1407336cc2599e7baca7",
"assets/AssetManifest.json": "394a3545c78d990e4e0309bbe7989345",
"assets/assets/fonts/Raleway-Black.ttf": "3469d4a9bf3b8f9db8f3e5c69e3fce8e",
"assets/assets/fonts/Raleway-Bold.ttf": "2f99a85426a45e0c7f8707aae53af803",
"assets/assets/fonts/Raleway-Regular.ttf": "84abe14c9756256a4b91300ba3e4ec62",
"assets/assets/fonts/RobotoCondensed-Bold.ttf": "141d6bca9dd80c70f193e15e44e196e9",
"assets/assets/fonts/RobotoCondensed-Italic.ttf": "198e3f07ee8b96ece655b7c4b4b3ce24",
"assets/assets/fonts/RobotoCondensed-Light.ttf": "a60a2f5cb89d9def151ac47b377a1f09",
"assets/assets/fonts/RobotoCondensed-Regular.ttf": "9c6aac5ea7419fbe344b1e8f6cc10dac",
"assets/FontManifest.json": "306b4451fb0d9b462854de1ab655fd98",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "0a2c263d899a385422ed9b9571d395d9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5f8b3597e4eb1388169729e82fb5ce3a",
"/": "5f8b3597e4eb1388169729e82fb5ce3a",
"main.dart.js": "c89da164836a9ee4e916ab3bbc959c8b",
"manifest.json": "c4fae25666fc20432b3ecc0843e3cb06",
"README.md": "e9f7abca206db9a41c1bb902e092f1f3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
