!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=14)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(6)),o=r(n(8)),s=r(n(13)),a=r(n(2));t.simulator=a.default;const u=new s.default,c=new i.default(u),l=new o.default(c),d={dispatch:(e,t)=>l.dispatch(e,t),listen:(e,t)=>l.listen(e,t)};t.default=d},function(e,t,n){"use strict";(function(e){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(3)),o=r(n(4)),s=r(n(5));t.default=function(){var t,n,r;e.webkit=null!==(t=e.webkit)&&void 0!==t?t:{},e.webkit.messageHandlers=null!==(n=e.webkit.messageHandlers)&&void 0!==n?n:{},e.webkit.messageHandlers.nativeApp=null!==(r=e.webkit.messageHandlers.nativeApp)&&void 0!==r?r:{},e.webkit.messageHandlers.nativeApp.postMessage=function({id:e,payload:{module:t,action:n,params:r}}){switch(t){case"base":i.default(e,n);break;case"answer":o.default(e,n)}},s.default()}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,n){switch(n){case"openURL":setTimeout(()=>e.webApp.callBack({id:t,payload:{status:"Success",params:"open success"}}))}}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(t,n){switch(n){case"writeAnswer":setTimeout(()=>e.webApp.callBack({id:t,payload:{status:"Failure",params:"bad event"}}))}}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){setTimeout(()=>e.webApp.dispatch("base/networkChange",{currentNetwork:"4G"})),setTimeout(()=>e.webApp.dispatch("base/networkChange","3G"),2e3)}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(7));t.default=class{constructor(e){this.eventEmitter=e}postMessage(t){var n,r,i,o;const s=null===(i=null===(r=null===(n=null==e?void 0:e.webkit)||void 0===n?void 0:n.messageHandlers)||void 0===r?void 0:r.nativeApp)||void 0===i?void 0:i.postMessage,a=null===(o=null==e?void 0:e.nativeApp)||void 0===o?void 0:o.sendToNative;if("function"==typeof s)e.webkit.messageHandlers.nativeApp.postMessage(t);else{if("function"!=typeof a)throw Error("Adapter postMessage error");e.nativeApp.sendToNative(JSON.stringify(t))}}connect(){e.webApp=new i.default(this.eventEmitter)}disconnect(){}}}).call(this,n(0))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.eventEmitter=e}dispatch(e,t){this.eventEmitter.emit(e,t)}callBack(e){const{id:t}=e;this.eventEmitter.emit(t,e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(9);t.default=class{constructor(e){this.adapter=e,this.adapter.connect()}dispatch(e,t){const n=r.generateId(),[i,o]=e.split("/");return this.adapter.postMessage({id:n,payload:{action:o,module:i,params:t}}),this.onDispatch(n)}onDispatch(e){return new Promise((t,n)=>this.adapter.eventEmitter.on(e,e=>{try{const{payload:{status:n,params:r}}=e;if("Failure"===n)throw r;t(r)}catch(e){n(e)}}))}listen(e,t){const n=e=>t(e);return this.adapter.eventEmitter.on(e,n),()=>this.unListen(e,n)}unListen(e,t){this.adapter.eventEmitter.remove(e,t)}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=r(n(10));t.generateId=function(){return i.default()}},function(e,t,n){var r=n(11),i=n(12);e.exports=function(e,t,n){var o=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var a=0;a<16;++a)t[o+a]=s[a];return t||i(s)}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var i=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),i[t]=e>>>((3&t)<<3)&255;return i}}},function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,i=n;return[i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],"-",i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]],i[e[r++]]].join("")}},function(e,t,n){"use strict";var r,i=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});r=new WeakMap,t.default=class{constructor(){r.set(this,{})}on(e,t){var n;i(this,r)[e]=null!==(n=i(this,r)[e])&&void 0!==n?n:[],i(this,r)[e].push(t)}emit(e,t){i(this,r)[e]&&i(this,r)[e].forEach(e=>e(t))}remove(e,t){i(this,r)[e]&&(i(this,r)[e]=i(this,r)[e].filter(e=>e!==t))}}},function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r);function o(e){console.log(`%c ${e}`,"font-size:15px;")}var s=n(1),a=n.n(s);o("native inject js into webview"),i()(),o("webviwe import hybrid js sdk"),o('web -> native: hybrid.dispatch("answer/writeAnswer", { id: 123456789 })'),a.a.dispatch("answer/writeAnswer",{id:123456789}).then(console.log).catch(console.error),o('hybrid.dispatch("base/openURL", { url: "www.twitter.com" });'),a.a.dispatch("base/openURL",{url:"www.twitter.com"}).then(console.log).catch(console.error),o('web -> native -> web: hybrid.listen("base/networkChange", console.log)');a.a.listen("base/networkChange",console.log);a.a.listen("base/networkChange",console.log)()}]);