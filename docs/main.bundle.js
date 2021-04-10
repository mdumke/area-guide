(()=>{"use strict";var e={150:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,"body {\n  background-color: #444;\n  color: #fff;\n}\n\n.modal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 10;\n  background-color: rgb(0, 0, 0, 0.7);\n  display: none;\n  flex-direction: column;\n}\n\n.qr-scanner {\n  margin: auto;\n  width: calc(100vw - 40px);\n}\n",""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],l=n.base?c[0]+n.base:c[0],s=t[l]||0,d="".concat(l," ").concat(s);t[l]=s+1;var u=i(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:d,updater:m(f,n),references:1}),r.push(d)}return r}function l(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var s,d=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,v=0;function m(e,n){var t,r,o;if(n.singleton){var a=v++;t=p||(p=l(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=l(n),r=f.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var l=c(e,n),s=0;s<t.length;s++){var d=i(t[s]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}t=l}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),r=t(150);let o;n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,document.querySelector("#video-player"),document.querySelector("#qr-code-fallback"),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.bundle.js").then((()=>{console.log("sw ready")})),window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),o=e,console.log("'beforeinstallprompt' event was fired.")}));let a,i=document.querySelector("#button-install");i&&i.addEventListener("click",(async()=>{console.log("prompting..."),o.prompt();const{outcome:e}=await o.userChoice;console.log(`User response to the install prompt: ${e}`),o=null,console.log(function(){const e=window.matchMedia("(display-mode: standalone)").matches;return document.referrer.startsWith("android-app://")?"twa":navigator.standalone||e?"standalone":"browser"}())})),window.addEventListener("appinstalled",(()=>{o=null,console.log("PWA was installed")})),document.querySelector("#scan").addEventListener("click",(e=>{e.preventDefault(),document.querySelector("#modal").style.display="flex",s()})),document.querySelector("#close-modal").addEventListener("click",(e=>{e.preventDefault(),a.stop(),document.querySelector("#modal").style.display="none"})),a=new Html5Qrcode("reader");const c=e=>{window.location.href=`/${e}.html`},l=()=>{},s=()=>{a.start({facingMode:"environment"},{fps:10},c,l)}})()})();