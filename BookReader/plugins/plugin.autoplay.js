!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=27)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(30))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(15),i=e(9);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(10),o=e(12);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(3),o=e(31),i=e(9),u=e(6),c=e(13),f=e(2),a=e(14),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=c(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(3),o=e(1),i=e(32);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),o=e(14),i=e(16),u=e(13),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(18),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(7),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(37),o=e(18);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(40),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(24),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(0),o=e(19),i=e(2),u=e(20),c=e(26),f=e(54),a=o("wks"),s=r.Symbol,p=f?s:s&&s.withoutSetter||u;t.exports=function(t){return i(a,t)||(c&&i(s,t)?a[t]=s[t]:a[t]=p("Symbol."+t)),a[t]}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";e.r(n);var r;e(28);jQuery.extend(BookReader.defaultOptions,{enableAutoPlayPlugin:!0}),BookReader.prototype.setup=(r=BookReader.prototype.setup,function(t){r.call(this,t),this.auto=!1,this.autoTimer=null,this.flipDelay=5e3}),BookReader.prototype.init=function(t){return function(n){var e=this;t.call(this,n),this.options.enableAutoPlayPlugin&&this.bind(BookReader.eventNames.stop,(function(){return e.autoStop()}))}}(BookReader.prototype.init),BookReader.prototype.bindNavigationHandlers=function(t){return function(){var n=this;if(t.call(this),this.options.enableAutoPlayPlugin){var e=this.$(".BRicon").add(".BRmobileMenu .BRicon");e.filter(".play").click((function(){return n.autoToggle(),!1})),e.filter(".pause").click((function(){return n.autoToggle(),!1}))}}}(BookReader.prototype.bindNavigationHandlers),BookReader.prototype.autoToggle=function(t){var n=this;if(this.options.enableAutoPlayPlugin){var e=$.extend({flipSpeed:this.flipSpeed,flipDelay:this.flipDelay},t);this.flipSpeed="number"==typeof e.flipSpeed?e.flipSpeed:this.flipSpeed,this.flipDelay="number"==typeof e.flipDelay?e.flipDelay:this.flipDelay,this.trigger(BookReader.eventNames.stop);var r=!1;this.constMode2up!=this.mode&&(r=!0,this.switchMode(this.constMode2up)),this.reduce<this.twoPageGetAutofitReduce()&&this.zoom2up("auto"),null==this.autoTimer?("rl"==this.pageProgression&&r||this.flipFwdToIndex(),this.$(".play").hide(),this.$(".pause").show(),this.autoTimer=setInterval((function(){n.animating||(Math.max(n.twoPage.currentIndexL,n.twoPage.currentIndexR)>=n.lastDisplayableIndex()?n.flipBackToIndex(1):n.flipFwdToIndex())}),this.flipDelay)):this.autoStop()}},BookReader.prototype.autoStop=function(){this.options.enableAutoPlayPlugin&&null!=this.autoTimer&&(clearInterval(this.autoTimer),this.flipSpeed="fast",this.$(".pause").hide(),this.$(".play").show(),this.autoTimer=null)}},function(t,n,e){"use strict";var r=e(29),o=e(48).filter,i=e(55),u=e(58),c=i("filter"),f=u("filter");r({target:"Array",proto:!0,forced:!c||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(0),o=e(8).f,i=e(5),u=e(33),c=e(7),f=e(38),a=e(47);t.exports=function(t,n){var e,s,p,l,v,y=t.target,h=t.global,d=t.stat;if(e=h?r:d?r[y]||c(y,{}):(r[y]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(h?s:y+(d?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;f(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(e,s,l,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(5),i=e(2),u=e(7),c=e(17),f=e(34),a=f.get,s=f.enforce,p=String(String).split("String");(t.exports=function(t,n,e,c){var f=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=p.join("string"==typeof n?n:"")),t!==r?(f?!l&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||c(this)}))},function(t,n,e){var r,o,i,u=e(35),c=e(0),f=e(4),a=e(5),s=e(2),p=e(36),l=e(21),v=c.WeakMap;if(u){var y=new v,h=y.get,d=y.has,g=y.set;r=function(t,n){return g.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return d.call(y,t)}}else{var x=p("state");l[x]=!0,r=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(17),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(19),o=e(20),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(39),i=e(8),u=e(15);t.exports=function(t,n){for(var e=o(n),c=u.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||c(t,s,f(n,s))}}},function(t,n,e){var r=e(22),o=e(41),i=e(46),u=e(16);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(42),o=e(45).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(6),i=e(43).indexOf,u=e(21);t.exports=function(t,n){var e,c=o(t),f=0,a=[];for(e in c)!r(u,e)&&r(c,e)&&a.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(6),o=e(23),i=e(44),u=function(t){return function(n,e,u){var c,f=r(n),a=o(f.length),s=i(u,a);if(t&&e!=e){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(24),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(49),o=e(10),i=e(51),u=e(23),c=e(52),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,p=6==t,l=5==t||p;return function(v,y,h,d){for(var g,x,b=i(v),m=o(b),S=r(y,h,3),w=u(m.length),O=0,P=d||c,j=n?P(v,w):e?P(v,0):void 0;w>O;O++)if((l||O in m)&&(x=S(g=m[O],O,b),t))if(n)j[O]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return O;case 2:f.call(j,g)}else if(s)return!1;return p?-1:a||s?s:j}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,e){var r=e(50);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(12);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4),o=e(53),i=e(25)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(11);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(26);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(1),o=e(25),i=e(56),u=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(0),u=e(57),c=i.process,f=c&&c.versions,a=f&&f.v8;a?o=(r=a.split("."))[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(22);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(3),o=e(1),i=e(2),u=Object.defineProperty,c={},f=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,p=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?u(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,s,p)}))}}]);
//# sourceMappingURL=plugin.autoplay.js.map