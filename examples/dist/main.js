!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(8)),o=r(n(13)),u=r(n(14)),a=r(n(2));e.simulator=a.default;var s=new u.default,c=new i.default(s),f=new o.default(c),l={dispatch:function(t,e){return f.dispatch(t,e)},listen:function(t,e){return f.listen(t,e)}};e.default=l},function(t,e,n){"use strict";(function(t){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(5)),o=r(n(6)),u=r(n(7));e.default=function(){t.webkit=t.webkit||{},t.webkit.messageHandlers=t.webkit.messageHandlers||{},t.webkit.messageHandlers.nativeApp=t.webkit.messageHandlers.nativeApp||{},t.webkit.messageHandlers.nativeApp.postMessage=function(t){var e=t.id,n=t.payload,r=n.module,u=n.action;n.params;switch(r){case"base":i.default(e,u);break;case"answer":o.default(e,u)}},u.default()}}).call(this,n(0))},function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(10));e.generateId=function(){return i.default()},e.isFunction=function(t){return"function"==typeof t}},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),o=n(1),u=n.n(o);i()(),u.a.dispatch("answer/writeAnswer",{id:123456789}).then(console.log).catch(console.error),u.a.dispatch("base/openURL",{url:"www.twitter.com"}).then(console.log).catch(console.error);u.a.listen("base/networkChange",console.log);u.a.listen("base/networkChange",console.log)()},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){switch(n){case"openURL":setTimeout((function(){return t.webApp.callBack({id:e,payload:{status:"Success",params:"open success"}})}))}}}).call(this,n(0))},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(e,n){switch(n){case"writeAnswer":setTimeout((function(){return t.webApp.callBack({id:e,payload:{status:"Failure",params:"bad event"}})}))}}}).call(this,n(0))},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){setTimeout((function(){return t.webApp.dispatch("base/networkChange",{currentNetwork:"4G"})})),setTimeout((function(){return t.webApp.dispatch("base/networkChange",{currentNetwork:"3G"})}),2e3)}}).call(this,n(0))},function(t,e,n){"use strict";(function(t){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=r(n(9)),o=n(3),u=function(){function e(t){this.eventEmitter=t}return e.prototype.postMessage=function(e){t.webkit&&t.webkit.messageHandlers&&t.webkit.messageHandlers.nativeApp&&o.isFunction(t.webkit.messageHandlers.nativeApp.postMessage)?t.webkit.messageHandlers.nativeApp.postMessage(e):t.nativeApp&&o.isFunction(t.nativeApp.sendToNative)&&t.nativeApp.sendToNative(JSON.stringify(e))},e.prototype.connect=function(){t.webApp=new i.default(this.eventEmitter)},e.prototype.disconnect=function(){},e}();e.default=u}).call(this,n(0))},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){this.eventEmitter=t}return t.prototype.dispatch=function(t,e){void 0===e&&(e=void 0),this.eventEmitter.emit(t,e)},t.prototype.callBack=function(t){var e=t.id;this.eventEmitter.emit(e,t)},t}();e.default=r},function(t,e,n){var r=n(11),i=n(12);t.exports=function(t,e,n){var o=e&&n||0;"string"==typeof t&&(e="binary"===t?new Array(16):null,t=null);var u=(t=t||{}).random||(t.rng||r)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,e)for(var a=0;a<16;++a)e[o+a]=u[a];return e||i(u)}},function(t,e){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);t.exports=function(){return n(r),r}}else{var i=new Array(16);t.exports=function(){for(var t,e=0;e<16;e++)0==(3&e)&&(t=4294967296*Math.random()),i[e]=t>>>((3&e)<<3)&255;return i}}},function(t,e){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);t.exports=function(t,e){var r=e||0,i=n;return[i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],"-",i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]],i[t[r++]]].join("")}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),i=function(){function t(t){this.adapter=t,this.adapter.connect()}return t.prototype.dispatch=function(t,e){void 0===e&&(e=void 0);var n=r.generateId(),i=t.split("/"),o=i[0],u=i[1];return this.adapter.postMessage({id:n,payload:{action:u,module:o,params:e}}),this.onDispatch(n)},t.prototype.onDispatch=function(t){var e=this;return new Promise((function(n,r){return e.adapter.eventEmitter.on(t,(function(t){try{var e=t.payload;if("Failure"===t.payload.status)throw e;n(e)}catch(t){r(t)}}))}))},t.prototype.listen=function(t,e){var n=this,r=function(t){return e(t)};return this.adapter.eventEmitter.on(t,r),function(){return n.unListen(t,r)}},t.prototype.unListen=function(t,e){this.adapter.eventEmitter.remove(t,e)},t}();e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.listener={}}return t.prototype.on=function(t,e){this.listener[t]=this.listener[t]||[],this.listener[t].push(e)},t.prototype.emit=function(t,e){this.listener[t]&&this.listener[t].forEach((function(t){return t(e)}))},t.prototype.remove=function(t,e){this.listener[t]&&(this.listener[t]=this.listener[t].filter((function(t){return t!==e})))},t}();e.default=r}]);