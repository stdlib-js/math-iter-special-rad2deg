// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function u(e){return"string"==typeof e}var s=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,p=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,b=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function m(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,w,"$1e"),n=p.call(n,v,"e"),n=p.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,g,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,b,"$1."),n=p.call(n,y,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):l.call(n)}function j(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function _(e,r,t){var n=r-e.length;return n<0?e:e=t?e+j(n):j(n)+e}var E=String.fromCharCode,S=isNaN,x=Array.isArray;function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,o,a,s,l,f,p;if(!x(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,f=0;f<e.length;f++)if(u(n=e[f]))s+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,S(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!S(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(a)?String(n.arg):E(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=_(n.arg,n.width,n.padRight)),s+=n.arg||"",l+=1}return s}var O=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function V(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=O.exec(e);n;)(r=e.slice(i,O.lastIndex-n[0].length)).length&&t.push(r),t.push(V(n)),i=O.lastIndex,n=O.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function F(e){return"string"==typeof e}function P(e){var r,t;if(!F(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var $,C=Object.prototype,I=C.toString,R=C.__defineGetter__,B=C.__defineSetter__,L=C.__lookupGetter__,G=C.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===I.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(L.call(e,r)||G.call(e,r)?(n=e.__proto__,e.__proto__=C,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(e,r,t.get),a&&B&&B.call(e,r,t.set),e};var N=$;function Z(e,r,t){N(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function M(e){return"boolean"==typeof e}function U(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X=U();function z(){return X&&"symbol"==typeof Symbol.toStringTag}var q=Object.prototype.toString,D=Object.prototype.hasOwnProperty;function H(e,r){return null!=e&&D.call(e,r)}var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"",Q=z()?function(e){var r,t,n;if(null==e)return q.call(e);t=e[K],r=H(e,K);try{e[K]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[K]=t:delete e[K],n}:function(e){return q.call(e)},Y=Boolean,ee=Boolean.prototype.toString,re=z();function te(e){return"object"==typeof e&&(e instanceof Y||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ne(e){return M(e)||te(e)}function ie(){return new Function("return this;")()}Z(ne,"isPrimitive",M),Z(ne,"isObject",te);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof globalThis?globalThis:null,ue=function(e){if(arguments.length){if(!M(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ie()}if(ce)return ce;if(oe)return oe;if(ae)return ae;throw new Error("unexpected error. Unable to resolve global object.")}(),se=ue.document&&ue.document.childNodes,le=Int8Array;function fe(){return/^\s*function\s*([^(]*)/i}var pe=/^\s*function\s*([^(]*)/i;Z(fe,"REGEXP",pe);var ge=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function de(e){return null!==e&&"object"==typeof e}function be(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=pe.exec(n.toString()))return r[1]}return de(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}Z(de,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!ge(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(de));var ye="function"==typeof W||"object"==typeof le||"function"==typeof se?function(e){return be(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?be(e).toLowerCase():r};function he(e){return"function"===ye(e)}var ve=/./,we="function"==typeof Object.defineProperty?Object.defineProperty:null,me=Object.defineProperty;function je(e){return"number"==typeof e}function _e(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Ee(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+_e(i):_e(i)+e,n&&(e="-"+e)),e}var Se=String.prototype.toLowerCase,xe=String.prototype.toUpperCase;function ke(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!je(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=Ee(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=Ee(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===xe.call(e.specifier)?xe.call(t):Se.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Te(e){return"string"==typeof e}var Oe=Math.abs,Ve=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase,Fe=String.prototype.replace,Pe=/e\+(\d)$/,$e=/e-(\d)$/,Ce=/^(\d+)$/,Ie=/^(\d+)e/,Re=/\.0$/,Be=/\.0*e/,Le=/(\..*[^0])0*e/;function Ge(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!je(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":Oe(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=Fe.call(t,Le,"$1e"),t=Fe.call(t,Be,"e"),t=Fe.call(t,Re,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Fe.call(t,Pe,"e+0$1"),t=Fe.call(t,$e,"e-0$1"),e.alternate&&(t=Fe.call(t,Ce,"$1."),t=Fe.call(t,Ie,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Ae.call(e.specifier)?Ae.call(t):Ve.call(t)}function Ne(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Ze(e,r,t){var n=r-e.length;return n<0?e:e=t?e+Ne(n):Ne(n)+e}var We=String.fromCharCode,Me=isNaN,Ue=Array.isArray;function Xe(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function ze(e){var r,t,n,i,o,a,c,u,s;if(!Ue(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(Te(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=Xe(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Me(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Me(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=ke(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!Me(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Me(o)?String(n.arg):We(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=Ge(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ee(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ze(n.arg,n.width,n.padRight)),a+=n.arg||"",c+=1}return a}var qe=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function De(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function He(e){var r,t,n,i;for(t=[],i=0,n=qe.exec(e);n;)(r=e.slice(i,qe.lastIndex-n[0].length)).length&&t.push(r),t.push(De(n)),i=qe.lastIndex,n=qe.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function Je(e){return"string"==typeof e}function Ke(e){var r,t;if(!Je(e))throw new TypeError(Ke("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[He(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return ze.apply(null,r)}var Qe,Ye=Object.prototype,er=Ye.toString,rr=Ye.__defineGetter__,tr=Ye.__defineSetter__,nr=Ye.__lookupGetter__,ir=Ye.__lookupSetter__;Qe=function(){try{return we({},"x",{}),!0}catch(e){return!1}}()?me:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===er.call(e))throw new TypeError(Ke("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(Ke("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(nr.call(e,r)||ir.call(e,r)?(n=e.__proto__,e.__proto__=Ye,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&rr&&rr.call(e,r,t.get),a&&tr&&tr.call(e,r,t.set),e};var or=Qe;function ar(e,r,t){or(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function cr(e){return"boolean"==typeof e}var ur=U();function sr(){return ur&&"symbol"==typeof Symbol.toStringTag}var lr=Object.prototype.toString,fr="function"==typeof Symbol?Symbol:void 0,pr="function"==typeof fr?fr.toStringTag:"",gr=sr()?function(e){var r,t,n;if(null==e)return lr.call(e);t=e[pr],r=H(e,pr);try{e[pr]=void 0}catch(r){return lr.call(e)}return n=lr.call(e),r?e[pr]=t:delete e[pr],n}:function(e){return lr.call(e)},dr=Boolean,br=Boolean.prototype.toString,yr=sr();function hr(e){return"object"==typeof e&&(e instanceof dr||(yr?function(e){try{return br.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===gr(e)))}function vr(e){return cr(e)||hr(e)}function wr(){return new Function("return this;")()}ar(vr,"isPrimitive",cr),ar(vr,"isObject",hr);var mr="object"==typeof self?self:null,jr="object"==typeof window?window:null,_r="object"==typeof globalThis?globalThis:null,Er=function(e){if(arguments.length){if(!cr(e))throw new TypeError(Ke("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return wr()}if(_r)return _r;if(mr)return mr;if(jr)return jr;throw new Error("unexpected error. Unable to resolve global object.")}(),Sr=Er.document&&Er.document.childNodes,xr=Int8Array;function kr(){return/^\s*function\s*([^(]*)/i}var Tr=/^\s*function\s*([^(]*)/i;ar(kr,"REGEXP",Tr);var Or=Array.isArray?Array.isArray:function(e){return"[object Array]"===gr(e)};function Vr(e){return null!==e&&"object"==typeof e}function Ar(e){var r,t,n,i;if(("Object"===(t=gr(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=Tr.exec(n.toString()))return r[1]}return Vr(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}ar(Vr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Ke("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!Or(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Vr));var Fr="function"==typeof ve||"object"==typeof xr||"function"==typeof Sr?function(e){return Ar(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Ar(e).toLowerCase():r};function Pr(e){var r=typeof e;return null!==e&&("object"===r||"function"===r)&&function(e){return"function"===Fr(e)}(e.next)}function $r(e){return"number"==typeof e}var Cr=Number,Ir=Cr.prototype.toString,Rr=z();function Br(e){return"object"==typeof e&&(e instanceof Cr||(Rr?function(e){try{return Ir.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Q(e)))}function Lr(e){return $r(e)||Br(e)}Z(Lr,"isPrimitive",$r),Z(Lr,"isObject",Br);var Gr,Nr="function"==typeof J&&"symbol"==typeof J("foo")&&H(J,"iterator")&&"symbol"==typeof J.iterator?Symbol.iterator:null,Zr=Object,Wr=Object.getPrototypeOf;Gr=he(Object.getPrototypeOf)?Wr:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===Q(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Mr=Gr,Ur=Object.prototype;function Xr(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!ge(e)}(e)&&(r=function(e){return null==e?null:(e=Zr(e),Mr(e))}(e),!r||!H(e,"constructor")&&H(r,"constructor")&&he(r.constructor)&&"[object Function]"===Q(r.constructor)&&H(r,"isPrototypeOf")&&he(r.isPrototypeOf)&&(r===Ur||function(e){var r;for(r in e)if(!H(e,r))return!1;return!0}(e)))}function zr(e,r){return Xr(r)?(H(r,"invalid")&&(e.invalid=r.invalid),null):new TypeError(P("invalid argument. Options argument must be an object. Value: `%s`.",r))}function qr(e,r,t){var n,i,o,a;if(!Pr(e))throw new TypeError(P("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!he(r))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",r));if(n={invalid:NaN},arguments.length>2&&(o=zr(n,t)))throw o;return Z(i={},"next",c),Z(i,"return",u),Nr&&he(e[Nr])&&Z(i,Nr,s),i;function c(){var t;return a?{done:!0}:(t=e.next()).done?(a=!0,t):{value:$r(t.value)?r(t.value):n.invalid,done:!1}}function u(e){return a=!0,arguments.length?{value:e,done:!0}:{done:!0}}function s(){return qr(e[Nr](),r,n)}}function Dr(e){return 57.29577951308232*e}return function(e){return qr(e,Dr)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).iterRad2deg=r();
//# sourceMappingURL=browser.js.map
