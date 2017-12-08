"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","03f4c33920741dfc78764a452d6c8e20"],["/static/css/main.e047631d.css","6a83460ba7b54f6d50a2302f572a7df4"],["/static/js/main.217396d4.js","34d81b56be3b2db62f5d7e0942513bfb"],["/static/media/Apple_Vector_SVG.7615f290.png","7615f29068b0dcb9a136fb8abfd88bae"],["/static/media/Avocado_Vector_SVG.c56da601.svg","c56da60199a4495125469f9554cd63eb"],["/static/media/Banana_Vector_SVG.bef344f3.png","bef344f3b5a77a0d609c40537727ecf4"],["/static/media/Calendula_Vector_SVG.cb3d9568.svg","cb3d956834f1126e38f96ae68251d423"],["/static/media/Carrot_Vector_SVG.986a4953.svg","986a49537757a71f264a20499ea0d963"],["/static/media/Chamomile_Vector_SVG.4ec44c68.svg","4ec44c68ff45092cc3773d33f77c09fb"],["/static/media/Cherry_Vector_SVG.02a9b165.png","02a9b1656518748eec83cf7604aa27df"],["/static/media/Chickweed_Vector_SVG.6589bbf5.svg","6589bbf50217af8eaf95c93d5c79adab"],["/static/media/Cinnamon_Vector_SVG.f5c18378.svg","f5c183780b6d990b66c33252d79ceb00"],["/static/media/Cocoa_Vector_SVG.74bb20c7.svg","74bb20c74cf8fbc7b82d99e87bb82822"],["/static/media/Coconut_Vector_SVG.0d2bce7d.png","0d2bce7d3c79c260ec35c54ff1a11430"],["/static/media/Dandelion_Vector_SVG.ecfb82e7.svg","ecfb82e78a6674ab6e74c90ef2808517"],["/static/media/Eucalyptus_Vector_SVG.38fd3e8e.svg","38fd3e8e3185255697e7b80a842de285"],["/static/media/Frankincense_Vector_SVG.9086e1ee.svg","9086e1ee8891f2aac72092abde48d9af"],["/static/media/Grapefruit_Vector_SVG.e2c907cb.svg","e2c907cb461302aaa4bd2f6a5451eb07"],["/static/media/Jojoba_Vector_SVG.f8528485.svg","f852848501445b599d549009b84093e9"],["/static/media/Kokum_Vector_SVG.906be4e0.svg","906be4e0654d2a75bb0421e5aec09fac"],["/static/media/Lavender_Vector_SVG.a1beb642.svg","a1beb642d3a7f4dd5cbf490900a34f62"],["/static/media/Lemon_Vector_SVG.77b147dd.svg","77b147dd1734e3ed7727ed039c875861"],["/static/media/Lemongrass_Vector_SVG.755a22a0.svg","755a22a073898da17a7cb979161b19eb"],["/static/media/Lime_Vector_SVG.28f033b4.svg","28f033b493f80fa67a384bd03a22defc"],["/static/media/Mango_Vector_SVG.70d491b8.png","70d491b8dfd4829618aa8c6e14a6d3af"],["/static/media/Mango_Vector_SVG.75c82ac4.svg","75c82ac4e703d97cdec26d9b27684cf5"],["/static/media/Marjoram_Vector_SVG.252b6033.svg","252b6033de8241d8e4ce3c66949f6813"],["/static/media/Myrrh_Vector_SVG.d189e2dc.svg","d189e2dc109cc44ae4d1eb680a794a58"],["/static/media/None_Vector_SVG.8af11f6e.svg","8af11f6e08b5a70a6f66afa2879b3279"],["/static/media/Olive_Vector_SVG.71d1dbe1.svg","71d1dbe17813239c307903bd53712c0e"],["/static/media/Orange_Vector_SVG.ac53a97a.svg","ac53a97aa83370944cff78ab9d9c0a6e"],["/static/media/Peach_Vector_SVG.ba803572.png","ba803572dfaf6052cd4dc3da2b8a97e2"],["/static/media/Pear_Vector_SVG.c151fc14.png","c151fc14ce884e774cf49ce843ca103b"],["/static/media/Peppermint_Vector_SVG.f9ee9583.svg","f9ee9583670cf7a28ad90cc42a1cdae8"],["/static/media/Pina_Vector_SVG.30a26401.png","30a264013eaba7d90dddbdb700b9eeb2"],["/static/media/Raspberry_Vector_SVG.0460c3bb.svg","0460c3bb607113fe4ef80e59f470285f"],["/static/media/Raspberry_Vector_SVG.8a7dd3a2.png","8a7dd3a26eb04e6a975059e0c4f3e2f3"],["/static/media/Rose_Vector_SVG.ab548c3a.svg","ab548c3ab65076829b980def6b1df0d7"],["/static/media/Sea_Vector_SVG.f8833aee.svg","f8833aee4128012d832c44825b897558"],["/static/media/Shea_Vector_SVG.d7310957.svg","d731095789f23de3294b9ce58769dbaf"],["/static/media/Spearmint_Vector_SVG.365c1d99.svg","365c1d9961b81c7d43efd35a89189d19"],["/static/media/Strawberry_Vector_SVG.acdf76b3.png","acdf76b32af576292e490376e0d752f4"],["/static/media/Unscented_Vector_SVG.8af11f6e.svg","8af11f6e08b5a70a6f66afa2879b3279"],["/static/media/Valerian_Vector_SVG.327e59db.svg","327e59db8a3ac69dbce5a1d083668432"],["/static/media/Vanilla_Vector_SVG.d9a98df5.svg","d9a98df5aa60df13e10c7a029d9d1888"],["/static/media/Vetiver_Vector_SVG.71e5515e.svg","71e5515e447b639e148f7fa2aabe0741"],["/static/media/Wintergreen_Vector_SVG.1bde663e.svg","1bde663e1249bdeaa7a412440aec144e"],["/static/media/Ylang_Vector_SVG.733af850.svg","733af850ef5bbe2c687213ba83235158"],["/static/media/bathbomb.8365f0cc.jpg","8365f0ccd8bb16da5ee09ac7dcc7dcd9"],["/static/media/booster.db07a7c0.png","db07a7c0cb44b2e7dac24821143f1f8c"],["/static/media/boosters.cdc054cc.svg","cdc054ccc0b8b6f2215b1d161ae87d64"],["/static/media/butters.17a03aac.svg","17a03aac47cc757dffa79988a36a90db"],["/static/media/butters.41c525fc.png","41c525fc322b75a1caba716df60059b6"],["/static/media/focusArea.d47edd0c.png","d47edd0cc0ea20e87174f243f2ec9159"],["/static/media/focusArea.db11ba43.svg","db11ba43969e8fdc1c85e0ae7947d112"],["/static/media/logo.d0fdea0d.svg","d0fdea0de64e197dab2431b2cfa8f803"],["/static/media/oils.13b8ca51.svg","13b8ca51cf4e8c65134114701f99baaa"],["/static/media/oils.e2624abe.png","e2624abe4499548aea8245db558dc632"],["/static/media/product.1795d00e.svg","1795d00e145d5f4d126ee1aa77dab967"],["/static/media/product.84569e19.png","84569e1932b0e9802ddd3e65b8c17bba"],["/static/media/recipient.b187a690.png","b187a690598295bc0fd6f97d1294e029"],["/static/media/recipient.e786b296.svg","e786b29691f54f93db7c64169e15f34d"],["/static/media/scents.6727bf3c.png","6727bf3cca91d7dd3e5583478923afc0"],["/static/media/scents.c4350650.svg","c435065083c95099ddd61daea3a2b494"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),a=urlsToCacheKeys.has(c));var d="/index.html";!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL(d,self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});