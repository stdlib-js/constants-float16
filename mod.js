// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function a(e){return"number"==typeof e}function i(e){var r,a="";for(r=0;r<e;r++)a+="0";return a}function t(e,r,a){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=a?e+i(n):i(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!a(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=t(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=t(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,E=/\.0$/,_=/\.0*e/,b=/(\..*[^0])0*e/;function v(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":p(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=f.call(i,b,"$1e"),i=f.call(i,_,"e"),i=f.call(i,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,g,"e+0$1"),i=f.call(i,d,"e-0$1"),e.alternate&&(i=f.call(i,h,"$1."),i=f.call(i,w,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===u.call(e.specifier)?u.call(i):l.call(i)}function S(e){var r,a="";for(r=0;r<e;r++)a+=" ";return a}function y(e,r,a){var i=r-e.length;return i<0?e:e=a?e+S(i):S(i)+e}var m=String.fromCharCode,I=isNaN,N=Array.isArray;function T(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function A(e){var r,a,i,n,o,p,l,u,f;if(!N(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(i=e[u]))p+=i;else{if(r=void 0!==i.precision,!(i=T(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),a=i.flags,f=0;f<a.length;f++)switch(n=a.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=a.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,I(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,I(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!I(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=I(o)?String(i.arg):m(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=t(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=y(i.arg,i.width,i.padRight)),p+=i.arg||"",l+=1}return p}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,a,i,t;for(a=[],t=0,i=R.exec(e);i;)(r=e.slice(t,R.lastIndex-i[0].length)).length&&a.push(r),a.push(F(i)),t=R.lastIndex,i=R.exec(e);return(r=e.slice(t)).length&&a.push(r),a}function x(e){return"string"==typeof e}function P(e){var r,a,i;if(!x(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=k(e),(a=new Array(arguments.length))[0]=r,i=1;i<a.length;i++)a[i]=arguments[i];return A.apply(null,a)}var M=Object.prototype,L=M.toString,O=M.__defineGetter__,V=M.__defineSetter__,C=M.__lookupGetter__,j=M.__lookupSetter__;var $=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,a){var i,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===L.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof a||null===a||"[object Array]"===L.call(a))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",a));if((t="value"in a)&&(C.call(e,r)||j.call(e,r)?(i=e.__proto__,e.__proto__=M,delete e[r],e[r]=a.value,e.__proto__=i):e[r]=a.value),n="get"in a,o="set"in a,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(e,r,a.get),o&&V&&V.call(e,r,a.set),e};function G(e,r,a){$(e,r,{configurable:!1,enumerable:!0,writable:!1,value:a})}var B=.09921256574801247,X=.0009765625,U=15,Z=65504,W=2047,Y=-2047,Q=Number,z=Q.NEGATIVE_INFINITY,q=2,D=Q.POSITIVE_INFINITY,H=11,J=6103515625e-14,K=5.960464477539063e-8,ee=.03125,re={};G(re,"CBRT_EPS",.09921256574801247),G(re,"EPS",.0009765625),G(re,"EXPONENT_BIAS",15),G(re,"MAX",65504),G(re,"MAX_SAFE_INTEGER",2047),G(re,"MIN_SAFE_INTEGER",-2047),G(re,"NINF",z),G(re,"NUM_BYTES",2),G(re,"PINF",D),G(re,"PRECISION",11),G(re,"SMALLEST_NORMAL",6103515625e-14),G(re,"SMALLEST_SUBNORMAL",5.960464477539063e-8),G(re,"SQRT_EPS",.03125);export{B as CBRT_EPS,X as EPS,U as EXPONENT_BIAS,Z as MAX,W as MAX_SAFE_INTEGER,Y as MIN_SAFE_INTEGER,z as NINF,q as NUM_BYTES,D as PINF,H as PRECISION,J as SMALLEST_NORMAL,K as SMALLEST_SUBNORMAL,ee as SQRT_EPS,re as default};
//# sourceMappingURL=mod.js.map