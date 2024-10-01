// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function a(e){return"number"==typeof e}function i(e){var r,a="";for(r=0;r<e;r++)a+="0";return a}function t(e,r,a){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=a?e+i(n):i(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,i,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,s=parseInt(i,10),!isFinite(s)){if(!a(i))throw new Error("invalid integer. Value: "+i);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(i=(-s).toString(r),e.precision&&(i=t(i,e.precision,e.padRight)),i="-"+i):(i=s.toString(r),s||e.precision?e.precision&&(i=t(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):n.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var c=Math.abs,p=String.prototype.toLowerCase,l=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,f=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,E=/\.0$/,w=/\.0*e/,_=/(\..*[^0])0*e/;function b(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!a(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":c(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=u.call(i,_,"$1e"),i=u.call(i,w,"e"),i=u.call(i,E,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=u.call(i,g,"e+0$1"),i=u.call(i,f,"e-0$1"),e.alternate&&(i=u.call(i,d,"$1."),i=u.call(i,h,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):p.call(i)}function v(e){var r,a="";for(r=0;r<e;r++)a+=" ";return a}var S=String.fromCharCode,m=Array.isArray;function y(e){return e!=e}function I(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function N(e){var r,a,i,n,o,c,p,l,u,g,f,d,h;if(!m(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(c="",p=1,l=0;l<e.length;l++)if(i=e[l],"string"==typeof i)c+=i;else{if(r=void 0!==i.precision,!(i=I(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),a=i.flags,u=0;u<a.length;u++)switch(n=a.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=a.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,y(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,y(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=s(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!y(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=y(o)?String(i.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=b(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=t(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(g=i.arg,f=i.width,d=i.padRight,h=void 0,(h=f-g.length)<0?g:g=d?g+v(h):v(h)+g)),c+=i.arg||"",p+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function R(e){var r,a,i,t;for(a=[],t=0,i=T.exec(e);i;)(r=e.slice(t,T.lastIndex-i[0].length)).length&&a.push(r),a.push(A(i)),t=T.lastIndex,i=T.exec(e);return(r=e.slice(t)).length&&a.push(r),a}function F(e){var r,a;if("string"!=typeof e)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[R(e)],a=1;a<arguments.length;a++)r.push(arguments[a]);return N.apply(null,r)}var k=Object.prototype,x=k.toString,P=k.__defineGetter__,M=k.__defineSetter__,L=k.__lookupGetter__,O=k.__lookupSetter__;var V=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,a){var i,t,n,o;if("object"!=typeof e||null===e||"[object Array]"===x.call(e))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof a||null===a||"[object Array]"===x.call(a))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",a));if((t="value"in a)&&(L.call(e,r)||O.call(e,r)?(i=e.__proto__,e.__proto__=k,delete e[r],e[r]=a.value,e.__proto__=i):e[r]=a.value),n="get"in a,o="set"in a,t&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&P&&P.call(e,r,a.get),o&&M&&M.call(e,r,a.set),e};function C(e,r,a){V(e,r,{configurable:!1,enumerable:!0,writable:!1,value:a})}var j=.09921256574801247,$=.0009765625,G=15,B=65504,X=2047,U=-2047,Z=Number,W=Z.NEGATIVE_INFINITY,Y=2,Q=Z.POSITIVE_INFINITY,z=11,q=6103515625e-14,D=5.960464477539063e-8,H=.03125,J={};C(J,"CBRT_EPS",j),C(J,"EPS",$),C(J,"EXPONENT_BIAS",15),C(J,"MAX",65504),C(J,"MAX_SAFE_INTEGER",2047),C(J,"MIN_SAFE_INTEGER",-2047),C(J,"NINF",W),C(J,"NUM_BYTES",2),C(J,"PINF",Q),C(J,"PRECISION",11),C(J,"SMALLEST_NORMAL",q),C(J,"SMALLEST_SUBNORMAL",D),C(J,"SQRT_EPS",H);export{j as CBRT_EPS,$ as EPS,G as EXPONENT_BIAS,B as MAX,X as MAX_SAFE_INTEGER,U as MIN_SAFE_INTEGER,W as NINF,Y as NUM_BYTES,Q as PINF,z as PRECISION,q as SMALLEST_NORMAL,D as SMALLEST_SUBNORMAL,H as SQRT_EPS,J as default};
//# sourceMappingURL=mod.js.map