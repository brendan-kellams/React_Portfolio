"use strict";var precacheConfig=[["/React_Portfolio/index.html","cfe140de790fa39dcfc93869efa918af"],["/React_Portfolio/static/js/main.b145690f.js","d1d85e2a396adba520f4004a0949f2d5"],["/React_Portfolio/static/media/Arch.cb7699fc.JPG","cb7699fcb4a260bb6e7d6aee454c7f49"],["/React_Portfolio/static/media/BK-logo.31314b11.png","31314b11216af6d69c744e01597d37d3"],["/React_Portfolio/static/media/BoardingSlide.dc1ede3f.jpg","dc1ede3f5262f070cb2c1642930dcb48"],["/React_Portfolio/static/media/Bridge.3764069a.jpg","3764069a8169e7034223cfb191160843"],["/React_Portfolio/static/media/CSS3.38e206b2.png","38e206b20ed9210100a56f68ad0e14dd"],["/React_Portfolio/static/media/ColorFlowers.d2a25054.jpg","d2a25054b4be021f3a0bfa64e28bf5f9"],["/React_Portfolio/static/media/ColorShrine.246a101e.jpg","246a101ea6db6e84fdf11b3e491f987a"],["/React_Portfolio/static/media/FlowerMei.31801ef1.jpeg","31801ef11d30adafbe08cf4d0b5de1a8"],["/React_Portfolio/static/media/Haduken.a93cbe22.jpeg","a93cbe2232706bea98c57f7f01dca427"],["/React_Portfolio/static/media/Happy.a8aef509.JPG","a8aef509678a739e4a9290d33143d367"],["/React_Portfolio/static/media/JQuery.b14464d7.png","b14464d7ec2b2fcde2df6bc87cc1712d"],["/React_Portfolio/static/media/JoJo_BW.c316b244.jpg","c316b2444e0612d9e96f8fc1c2196409"],["/React_Portfolio/static/media/MySQL.e1375d5f.png","e1375d5f0bea0c044546ab4684862269"],["/React_Portfolio/static/media/NicoleUmbrella.ba0b194a.jpg","ba0b194acbc2363db1941ff5b63ea71a"],["/React_Portfolio/static/media/Node.6d1a37a5.png","6d1a37a59a163a8c66ae270644b36fe5"],["/React_Portfolio/static/media/PT-Link-new.afd8ddec.jpg","afd8ddecdfb7eddef9d729f7fdd5c996"],["/React_Portfolio/static/media/React.82b5075a.png","82b5075a1c400a70619f7ee395a4a979"],["/React_Portfolio/static/media/Walk_BW.de23523b.jpg","de23523b1bb57ab2ed63581d8bc82655"],["/React_Portfolio/static/media/WestLake.469cabd9.jpg","469cabd94b4ab48eaf116f0f7042c955"],["/React_Portfolio/static/media/WestLake3.ad793948.JPG","ad793948c108dbd85ea243ec3fabeaec"],["/React_Portfolio/static/media/bamazon_thumbnail.9dd85edc.jpg","9dd85edc2c2df73738bad7893f36ff6a"],["/React_Portfolio/static/media/beauty.9f70149f.jpg","9f70149f27d8df9139769bbb3d08218c"],["/React_Portfolio/static/media/brendan profile.0a9fe3b3.jpg","0a9fe3b3af3eb8b7d7e3a56f2349907e"],["/React_Portfolio/static/media/burger.d335bdd0.gif","d335bdd080ecb57de02c58ec3c871938"],["/React_Portfolio/static/media/javascript.8e29f631.png","8e29f63163262611465a5f68c9b9e5b8"],["/React_Portfolio/static/media/og_image-new2.85eacce3.jpg","85eacce36bfb6d1d1fdd81343df800f0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),r=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var r="/React_Portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});