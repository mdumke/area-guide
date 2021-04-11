/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./sw.js":
/*!***************!*\
  !*** ./sw.js ***!
  \***************/
/***/ (() => {

eval("// bump the version cached *assets* change\nconst STATIC_CACHE = 'static-v1'\nconst DYNAMIC_CACHE = 'dynamic-v1'\n\nself.addEventListener('install', event => {\n  // cache selected requests\n  event.waitUntil(\n    caches.open(STATIC_CACHE).then(cache => {\n      cache.addAll([\n        '/area-guide/',\n        '/area-guide/' + 'index.html',\n        '/area-guide/' + 'main.bundle.js',\n        '/area-guide/' + 'manifest.json',\n        '/area-guide/' + 'page1.html',\n        '/area-guide/' + 'page2.html',\n        '/area-guide/' + 'tomate.jpeg',\n      ])\n    })\n  )\n})\n\nself.addEventListener('activate', event => {\n  // clear unused caches\n  event.waitUntil(\n    caches.keys().then(keys => Promise.all(keys.map(key => {\n      if (![STATIC_CACHE, DYNAMIC_CACHE].includes(key)) {\n        return caches.delete(key)\n      }\n    })))\n  )\n\n  return self.clients.claim()\n})\n\nself.addEventListener('fetch', event => {\n  event.respondWith(\n    caches.match(event.request).then(response => {\n      // return cached response if possible\n      if (response != null) {\n        return response\n      }\n\n      // cache newly fetched response\n      return fetch(event.request).then(res =>\n          caches.open(DYNAMIC_CACHE).then(cache => {\n            cache.put(event.request.url, res.clone())\n            return res\n          })\n        )\n    })\n  )\n})\n\n\n//# sourceURL=webpack://guide/./sw.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./sw.js"]();
/******/ 	
/******/ })()
;