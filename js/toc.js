!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/wp-content/themes/mdx/js",n(n.s=119)}([function(t,e,n){"use strict";n(60);e.a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"single";if("object"==typeof t)return t;if("string"!=typeof t)return document.createElement("div");let r=null,o=!1;return t.match(/[ <>:~+^=]/)?r=document.querySelectorAll(t):"#"===t[0]?(r=document.getElementById(t.slice(1)),o=!0):r="."===t[0]?document.getElementsByClassName(t.slice(1)):t.match(/[ .<>:~+^=#]/)?document.querySelectorAll(t):document.getElementsByTagName(t),null===r||0===r.length?document.createElement("div"):(null!==e&&(o?e(r):Array.prototype.map.call(r,t=>(e(t),t))),"single"==n?o?r:r[0]:o?[r]:r)}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(47))},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(1),o=n(30),i=n(5),c=n(35),a=n(36),u=n(49),l=o("wks"),s=r.Symbol,f=u?s:s&&s.withoutSetter||c;t.exports=function(t){return i(l,t)||(a&&i(s,t)?l[t]=s[t]:l[t]=f("Symbol."+t)),l[t]}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(8),o=n(9),i=n(20);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(8),o=n(32),i=n(2),c=n(34),a=Object.defineProperty;e.f=r?a:function(t,e,n){if(i(t),e=c(e,!0),i(n),o)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(1),o=n(6),i=n(5),c=n(17),a=n(23),u=n(26),l=u.get,s=u.enforce,f=String(String).split("String");(t.exports=function(t,e,n,a){var u=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),s(n).source=f.join("string"==typeof e?e:"")),t!==r?(u?!d&&t[e]&&(l=!0):delete t[e],l?t[e]=n:o(t,e,n)):l?t[e]=n:c(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||a(this)}))},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(48),o=n(10);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(52),o=n(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r=n(13),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(1),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e,n){"use strict";var r,o,i=n(46),c=n(58),a=RegExp.prototype.exec,u=String.prototype.replace,l=a,s=(r=/a/,o=/b*/g,a.call(r,"a"),a.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),f=c.UNSUPPORTED_Y||c.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(s||d||f)&&(l=function(t){var e,n,r,o,c=this,l=f&&c.sticky,p=i.call(c),m=c.source,v=0,x=t;return l&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),x=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(m="(?: "+m+")",x=" "+x,v++),n=new RegExp("^(?:"+m+")",p)),d&&(n=new RegExp("^"+m+"$(?!\\s)",p)),s&&(e=c.lastIndex),r=a.call(l?n:c,x),l?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),d&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=l},function(t,e){t.exports=!1},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports={}},function(t,e){t.exports={}},function(t,e,n){var r=n(31),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(8),o=n(54),i=n(20),c=n(14),a=n(34),u=n(5),l=n(32),s=Object.getOwnPropertyDescriptor;e.f=r?s:function(t,e){if(t=c(t),e=a(e,!0),l)try{return s(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},,function(t,e,n){var r,o,i,c=n(53),a=n(1),u=n(7),l=n(6),s=n(5),f=n(29),d=n(21),p=a.WeakMap;if(c){var m=new p,v=m.get,x=m.has,g=m.set;r=function(t,e){return g.call(m,t,e),e},o=function(t){return v.call(m,t)||{}},i=function(t){return x.call(m,t)}}else{var y=f("state");d[y]=!0,r=function(t,e){return l(t,y,e),e},o=function(t){return s(t,y)?t[y]:{}},i=function(t){return s(t,y)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(1),o=n(24).f,i=n(6),c=n(12),a=n(17),u=n(44),l=n(39);t.exports=function(t,e){var n,s,f,d,p,m=t.target,v=t.global,x=t.stat;if(n=v?r:x?r[m]||a(m,{}):(r[m]||{}).prototype)for(s in e){if(d=e[s],f=t.noTargetGet?(p=o(n,s))&&p.value:n[s],!l(v?s:m+(x?".":"#")+s,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;u(d,f)}(t.sham||f&&f.sham)&&i(d,"sham",!0),c(n,s,d,t)}}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(30),o=n(35),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e,n){var r=n(19),o=n(31);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(1),o=n(17),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(8),o=n(3),i=n(33);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(1),o=n(7),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){"use strict";n(61);var r=n(12),o=n(3),i=n(4),c=n(18),a=n(6),u=i("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),f=i("replace"),d=!!/./[f]&&""===/./[f]("a","$0"),p=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,f){var m=i(t),v=!o((function(){var e={};return e[m]=function(){return 7},7!=""[t](e)})),x=v&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[m]=/./[m]),n.exec=function(){return e=!0,null},n[m](""),!e}));if(!v||!x||"replace"===t&&(!l||!s||d)||"split"===t&&!p){var g=/./[m],y=n(m,""[t],(function(t,e,n,r,o){return e.exec===c?v&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),h=y[0],b=y[1];r(String.prototype,t,h),r(RegExp.prototype,m,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}f&&a(RegExp.prototype[m],"sham",!0)}},function(t,e,n){var r=n(11),o=n(18);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,n){var r=n(3),o=/#|\.prototype\./,i=function(t,e){var n=a[c(t)];return n==l||n!=u&&("function"==typeof e?r(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},function(t,e,n){"use strict";var r=n(62).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(5),o=n(14),i=n(50).indexOf,c=n(21);t.exports=function(t,e){var n,a=o(t),u=0,l=[];for(n in a)!r(c,n)&&r(a,n)&&l.push(n);for(;e.length>u;)r(a,n=e[u++])&&(~i(l,n)||l.push(n));return l}},function(t,e,n){var r=n(9).f,o=n(5),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),o=n(55),i=n(24),c=n(9);t.exports=function(t,e){for(var n=o(e),a=c.f,u=i.f,l=0;l<n.length;l++){var s=n[l];r(t,s)||a(t,s,u(e,s))}}},function(t,e,n){var r=n(42),o=n(28).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(2);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(3),o=n(11),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(36);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,n){var r=n(14),o=n(16),i=n(51),c=function(t){return function(e,n,c){var a,u=r(e),l=o(u.length),s=i(c,l);if(t&&n!=n){for(;l>s;)if((a=u[s++])!=a)return!0}else for(;l>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,n){var r=n(13),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(1);t.exports=r},function(t,e,n){var r=n(1),o=n(23),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(15),o=n(45),i=n(56),c=n(2);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(c(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(10);t.exports=function(t){return Object(r(t))}},function(t,e,n){"use strict";var r=n(3);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){var r=n(15);t.exports=r("document","documentElement")},function(t,e,n){"use strict";var r=n(37),o=n(2),i=n(16),c=n(10),a=n(40),u=n(38);r("match",1,(function(t,e,n){return[function(e){var n=c(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var c=o(t),l=String(this);if(!c.global)return u(c,l);var s=c.unicode;c.lastIndex=0;for(var f,d=[],p=0;null!==(f=u(c,l));){var m=String(f[0]);d[p]=m,""===m&&(c.lastIndex=a(l,i(c.lastIndex),s)),p++}return 0===p?null:d}]}))},function(t,e,n){"use strict";var r=n(27),o=n(18);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){var r=n(13),o=n(10),i=function(t){return function(e,n){var i,c,a=String(o(e)),u=r(n),l=a.length;return u<0||u>=l?t?"":void 0:(i=a.charCodeAt(u))<55296||i>56319||u+1===l||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):i:t?a.slice(u,u+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){var r,o=n(2),i=n(79),c=n(28),a=n(21),u=n(59),l=n(33),s=n(29),f=s("IE_PROTO"),d=function(){},p=function(t){return"<script>"+t+"<\/script>"},m=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;m=r?function(t){t.write(p("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=l("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(p("document.F=Object")),t.close(),t.F);for(var n=c.length;n--;)delete m.prototype[c[n]];return m()};a[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(d.prototype=o(t),n=new d,d.prototype=null,n[f]=t):n=m(),void 0===e?n:i(n,e)}},function(t,e,n){"use strict";var r,o,i,c=n(65),a=n(6),u=n(5),l=n(4),s=n(19),f=l("iterator"),d=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(r=o):d=!0),null==r&&(r={}),s||u(r,f)||a(r,f,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:d}},function(t,e,n){var r=n(5),o=n(57),i=n(29),c=n(83),a=i("IE_PROTO"),u=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},,function(t,e,n){var r=n(2),o=n(41),i=n(4)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r=n(2),o=n(84);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},,,,,,,function(t,e,n){var r=n(1),o=n(76),i=n(77),c=n(6),a=n(4),u=a("iterator"),l=a("toStringTag"),s=i.values;for(var f in o){var d=r[f],p=d&&d.prototype;if(p){if(p[u]!==s)try{c(p,u,s)}catch(t){p[u]=s}if(p[l]||c(p,l,f),o[f])for(var m in i)if(p[m]!==i[m])try{c(p,m,i[m])}catch(t){p[m]=i[m]}}}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){"use strict";var r=n(14),o=n(78),i=n(22),c=n(26),a=n(81),u=c.set,l=c.getterFor("Array Iterator");t.exports=a(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=l(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,n){var r=n(4),o=n(63),i=n(9),c=r("unscopables"),a=Array.prototype;null==a[c]&&i.f(a,c,{configurable:!0,value:o(null)}),t.exports=function(t){a[c][t]=!0}},function(t,e,n){var r=n(8),o=n(9),i=n(2),c=n(80);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=c(e),a=r.length,u=0;a>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(42),o=n(28);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){"use strict";var r=n(27),o=n(82),i=n(65),c=n(68),a=n(43),u=n(6),l=n(12),s=n(4),f=n(19),d=n(22),p=n(64),m=p.IteratorPrototype,v=p.BUGGY_SAFARI_ITERATORS,x=s("iterator"),g=function(){return this};t.exports=function(t,e,n,s,p,y,h){o(n,e,s);var b,w,O,j=function(t){if(t===p&&T)return T;if(!v&&t in _)return _[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},E=e+" Iterator",S=!1,_=t.prototype,L=_[x]||_["@@iterator"]||p&&_[p],T=!v&&L||j(p),I="Array"==e&&_.entries||L;if(I&&(b=i(I.call(new t)),m!==Object.prototype&&b.next&&(f||i(b)===m||(c?c(b,m):"function"!=typeof b[x]&&u(b,x,g)),a(b,E,!0,!0),f&&(d[E]=g))),"values"==p&&L&&"values"!==L.name&&(S=!0,T=function(){return L.call(this)}),f&&!h||_[x]===T||u(_,x,T),d[e]=T,p)if(w={values:j("values"),keys:y?T:j("keys"),entries:j("entries")},h)for(O in w)(v||S||!(O in _))&&l(_,O,w[O]);else r({target:e,proto:!0,forced:v||S},w);return w}},function(t,e,n){"use strict";var r=n(64).IteratorPrototype,o=n(63),i=n(20),c=n(43),a=n(22),u=function(){return this};t.exports=function(t,e,n){var l=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),c(t,l,!1,!0),a[l]=u,t}},function(t,e,n){var r=n(3);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(7);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},,function(t,e,n){var r=n(7),o=n(11),i=n(4)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(37),o=n(86),i=n(2),c=n(10),a=n(67),u=n(40),l=n(16),s=n(38),f=n(18),d=n(3),p=[].push,m=Math.min,v=!d((function(){return!RegExp(4294967295,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(c(this)),i=void 0===n?4294967295:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!o(t))return e.call(r,t,i);for(var a,u,l,s=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,v=new RegExp(t.source,d+"g");(a=f.call(v,r))&&!((u=v.lastIndex)>m&&(s.push(r.slice(m,a.index)),a.length>1&&a.index<r.length&&p.apply(s,a.slice(1)),l=a[0].length,m=u,s.length>=i));)v.lastIndex===a.index&&v.lastIndex++;return m===r.length?!l&&v.test("")||s.push(""):s.push(r.slice(m)),s.length>i?s.slice(0,i):s}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var o=c(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,n):r.call(String(o),e,n)},function(t,o){var c=n(r,t,this,o,r!==e);if(c.done)return c.value;var f=i(t),d=String(this),p=a(f,RegExp),x=f.unicode,g=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(v?"y":"g"),y=new p(v?f:"^(?:"+f.source+")",g),h=void 0===o?4294967295:o>>>0;if(0===h)return[];if(0===d.length)return null===s(y,d)?[d]:[];for(var b=0,w=0,O=[];w<d.length;){y.lastIndex=v?w:0;var j,E=s(y,v?d:d.slice(w));if(null===E||(j=m(l(y.lastIndex+(v?0:w)),d.length))===b)w=u(d,w,x);else{if(O.push(d.slice(b,w)),O.length===h)return O;for(var S=1;S<=E.length-1;S++)if(O.push(E[S]),O.length===h)return O;w=b=j}}return O.push(d.slice(b)),O}]}),!v)},,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);n(103),n(75);var r=n(0);let o="true"===mdx_show_preview.preview,i=!1,c=[],a=!0,u=!1,l=void 0,s=!1;window.addEventListener("DOMContentLoaded",()=>{let t=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;const n=document.querySelectorAll([...Array(e).keys()].map(t=>"article > h".concat(t+1)).join(","));if(n.length<=1)return a=!1,!1;const o=document.createElement("div");o.classList.add("mdui-list"),o.id="mdx-toc",o.style.transform="translateX(0)";let i="",u=0,l=[...Array(e)].map(()=>0);for(const e of n){e.dataset.mdxtoc="mdx-toc-"+u,c.push("mdx-toc-"+u);const n=Number(Object(r.a)(e).tagName[1]);l[n-1]++,l.forEach((t,e)=>e>=n?l[e]=0:0===l[e]&&(l[e]=1));const a=document.createElement("a");a.id="mdx-toc-".concat(u,"-item"),a.title=e.textContent,a.classList.add("mdui-list-item","mdui-ripple","mdx-toc-item"),n>1&&a.classList.add("mdx-toc-item-h".concat(n));const s=document.createElement("span");s.textContent=l.filter((e,r)=>r+1>=t&&r<n).join(".");const f=document.createElement("div");f.textContent=e.textContent,a.appendChild(s),a.appendChild(f),o.appendChild(a),i+='<div class="mdx-toc-preview-h'.concat(n,' mdx-toc-preview-item mdui-color-theme" id="mdx-toc-').concat(u,'-preview"></div>'),u++}return[o,i]}();if(function(t){if(!t)return;const e=document.querySelector("#mdx_menu");e.parentNode.append(t),Object(r.a)("#left-drawer nav").insertAdjacentHTML("beforebegin",'<div class="mdui-tab mdui-tab-full-width" id="mdx-toc-select"><a href="#" id="mdx-toc-menu" class="mdui-ripple"><i class="mdui-icon material-icons">&#xe241;</i><label>'.concat(mdx_toc_i18n_1,'</label></a><a href="#" id="mdx-toc-toc" class="mdui-ripple"><i class="mdui-icon material-icons">&#xe86d;</i><label>').concat(mdx_toc_i18n_2,"</label></a></div>")),l=new mdui.Tab("#mdx-toc-select",{}),l.next(),e.style.transform="translateX(-".concat(e.clientWidth,"px)")}(t[0]),a){if(o){const e=document.createElement("div");e.id="mdx-toc-preview",e.setAttribute("mdui-drawer",document.getElementById("menu").getAttribute("mdui-drawer")),e.innerHTML=t[1],Object(r.a)(".PostMain").appendChild(e),mdui.mutation()}s=!0,d()}}),Object(r.a)(".PostMain").addEventListener("click",(function(t){"mdx-toc-preview"===t.target.id&&"translateX(0px)"!==Object(r.a)("#mdx-toc").style.transform&&o&&(l.next(),Object(r.a)("#mdx-toc").style.transform="translateX(0)",Object(r.a)("#mdx_menu").style.transform="translateX(-".concat(Object(r.a)("#mdx_menu").getBoundingClientRect().width,"px)"),i=!0,d())})),Object(r.a)("#left-drawer").addEventListener("click",(function(t){return"mdx-toc-menu"===t.target.id||null!==t.target.closest("#mdx-toc-menu")?(t.preventDefault(),Object(r.a)("#mdx_menu").style.transform="translateX(0)",Object(r.a)("#mdx-toc").style.transform="translateX(".concat(Object(r.a)("#mdx-toc").getBoundingClientRect().width,"px)"),void(i=!1)):"mdx-toc-toc"===t.target.id||null!==t.target.closest("#mdx-toc-toc")?(t.preventDefault(),i=!0,d(),Object(r.a)("#mdx-toc").style.transform="translateX(0)",void(Object(r.a)("#mdx_menu").style.transform="translateX(-".concat(Object(r.a)("#mdx_menu").getBoundingClientRect().width,"px)"))):t.target.classList.contains("mdx-toc-item")?(t.preventDefault(),void Velocity(Object(r.a)("html"),{scrollTop:Object(r.a)('article *[data-mdxtoc="mdx-toc-'.concat(t.target.getAttribute("id").split("-")[2],'"]')).getBoundingClientRect().top+window.pageYOffset-75+"px"},{duration:500,queue:!1})):null!==t.target.closest(".mdx-toc-item")?(t.preventDefault(),void Velocity(Object(r.a)("html"),{scrollTop:Object(r.a)('article *[data-mdxtoc="mdx-toc-'.concat(t.target.closest(".mdx-toc-item").getAttribute("id").split("-")[2],'"]')).getBoundingClientRect().top+window.pageYOffset-75+"px"},{duration:500,queue:!1})):void 0})),window.addEventListener("resize",(function(){a&&("translateX(0px)"===Object(r.a)("#mdx-toc").style.transform?(Object(r.a)("#mdx-toc").style.transform="translateX(0)",Object(r.a)("#mdx_menu").style.transform="translateX(-".concat(Object(r.a)("#mdx_menu").getBoundingClientRect().width,"px)")):(Object(r.a)("#mdx_menu").style.transform="translateX(0)",Object(r.a)("#mdx-toc").style.transform="translateX(".concat(Object(r.a)("#mdx-toc").getBoundingClientRect().width,"px)")),d())})),document.getElementById("left-drawer").addEventListener("open.mdui.drawer",(function(){i="translateX(0px)"===Object(r.a)("#mdx-toc").style.transform,d()})),document.getElementById("left-drawer").addEventListener("close.mdui.drawer",(function(){i=!1}));let f=!1;function d(){if(s){if(i||o){let t=document.documentElement.scrollTop||document.body.scrollTop;Object(r.a)(".mdx-toc-item",t=>{t.classList.remove("mdx-toc-read","mdui-list-item-active")}),Object(r.a)("#mdx-toc-preview > *",t=>{t.classList.remove("mdx-toc-preview-item-active")});let e=0;if(t>=Object(r.a)("article").getBoundingClientRect().top+window.pageYOffset+Object(r.a)("article").clientHeight-80)Object(r.a)(".mdx-toc-item",t=>{t.classList.add("mdx-toc-read")}),u&&o&&(document.getElementById("mdx-toc-preview").classList.remove("mdx-toc-preview-show"),u=!1);else{for(let n=1;n<c.length&&t>=Object(r.a)('article *[data-mdxtoc="'.concat(c[n],'"]')).getBoundingClientRect().top+window.pageYOffset-80;n++)document.getElementById("".concat(c[n-1],"-item")).classList.add("mdx-toc-read"),e++;if(t>Object(r.a)("article").getBoundingClientRect().top+window.pageYOffset-140){!u&&o&&(document.getElementById("mdx-toc-preview").classList.add("mdx-toc-preview-show"),u=!0);let t=Object(r.a)("#".concat(c[e],"-item"));if(t.classList.add("mdui-list-item-active"),Object(r.a)("#".concat(c[e],"-preview")).classList.add("mdx-toc-preview-item-active"),o&&(Object(r.a)("#mdx-toc-preview").style.transform="translateY(-".concat(20*(e+1)-4,"px)")),null!==t&&i){let e=t.getBoundingClientRect().top;e+48>window.innerHeight?Velocity(Object(r.a)("#left-drawer"),{scrollTop:document.getElementById("left-drawer").scrollTop+(e+48-window.innerHeight)+8+"px"},{duration:200,queue:!1}):e<8&&Velocity(Object(r.a)("#left-drawer"),{scrollTop:document.getElementById("left-drawer").scrollTop+e-8+"px"},{duration:200,queue:!1})}}else u&&o&&(document.getElementById("mdx-toc-preview").classList.remove("mdx-toc-preview-show"),u=!1)}}f=!1}}window.addEventListener("scroll",(function(){a&&s&&(f||(requestAnimationFrame((function(){d()})),f=!0))}))}]);
//# sourceMappingURL=toc.js.map