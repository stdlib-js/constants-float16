// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,o=r.toString,n=r.__defineGetter__,a=r.__defineSetter__,i=r.__lookupGetter__,l=r.__lookupSetter__,_=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,_){var u,c,f,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof _||null===_||"[object Array]"===o.call(_))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+_+"`.");if((c="value"in _)&&(i.call(e,t)||l.call(e,t)?(u=e.__proto__,e.__proto__=r,delete e[t],e[t]=_.value,e.__proto__=u):e[t]=_.value),f="get"in _,p="set"in _,c&&(f||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return f&&n&&n.call(e,t,_.get),p&&a&&a.call(e,t,_.set),e};function u(e,t,r){_(e,t,{configurable:!1,enumerable:!0,writable:!1,value:r})}var c=Number,f=c.NEGATIVE_INFINITY,p=c.POSITIVE_INFINITY,d={};return u(d,"CBRT_EPS",.09921256574801247),u(d,"EPS",.0009765625),u(d,"EXPONENT_BIAS",15),u(d,"MAX",65504),u(d,"MAX_SAFE_INTEGER",2047),u(d,"MIN_SAFE_INTEGER",-2047),u(d,"NINF",f),u(d,"NUM_BYTES",2),u(d,"PINF",p),u(d,"PRECISION",11),u(d,"SMALLEST_NORMAL",6103515625e-14),u(d,"SMALLEST_SUBNORMAL",5.960464477539063e-8),u(d,"SQRT_EPS",.03125),d},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).constants=t();
//# sourceMappingURL=index.js.map