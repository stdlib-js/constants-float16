<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Constants

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Half-precision floating-point mathematical constants.

<section class="installation">

## Installation

```bash
npm install @stdlib/constants-float16
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var constants = require( '@stdlib/constants-float16' );
```

#### constants

Half-precision floating-point mathematical constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`CBRT_EPS`][@stdlib/constants/float16/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of half-precision floating-point epsilon.</span>
-   <span class="signature">[`EPS`][@stdlib/constants/float16/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a half-precision floating-point number.</span>
-   <span class="signature">[`EXPONENT_BIAS`][@stdlib/constants/float16/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a half-precision floating-point number's exponent.</span>
-   <span class="signature">[`MAX_SAFE_INTEGER`][@stdlib/constants/float16/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe half-precision floating-point integer.</span>
-   <span class="signature">[`MAX`][@stdlib/constants/float16/max]</span><span class="delimiter">: </span><span class="description">maximum half-precision floating-point number.</span>
-   <span class="signature">[`MIN_SAFE_INTEGER`][@stdlib/constants/float16/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe half-precision floating-point integer.</span>
-   <span class="signature">[`NINF`][@stdlib/constants/float16/ninf]</span><span class="delimiter">: </span><span class="description">half-precision floating-point negative infinity.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/float16/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a half-precision floating-point number.</span>
-   <span class="signature">[`PINF`][@stdlib/constants/float16/pinf]</span><span class="delimiter">: </span><span class="description">half-precision floating-point positive infinity.</span>
-   <span class="signature">[`PRECISION`][@stdlib/constants/float16/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a half-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_NORMAL`][@stdlib/constants/float16/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive **normalized** half-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_SUBNORMAL`][@stdlib/constants/float16/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive **denormalized** half-precision floating-point number.</span>
-   <span class="signature">[`SQRT_EPS`][@stdlib/constants/float16/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of half-precision floating-point epsilon.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var constants = require( '@stdlib/constants-float16' );

console.log( objectKeys( constants ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-float16.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-float16

[test-image]: https://github.com/stdlib-js/constants-float16/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/constants-float16/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-float16/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-float16?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-float16.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-float16/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-float16/tree/deno
[deno-readme]: https://github.com/stdlib-js/constants-float16/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/constants-float16/tree/umd
[umd-readme]: https://github.com/stdlib-js/constants-float16/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/constants-float16/tree/esm
[esm-readme]: https://github.com/stdlib-js/constants-float16/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/constants-float16/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-float16/main/LICENSE

<!-- <toc-links> -->

[@stdlib/constants/float16/cbrt-eps]: https://github.com/stdlib-js/constants-float16-cbrt-eps

[@stdlib/constants/float16/eps]: https://github.com/stdlib-js/constants-float16-eps

[@stdlib/constants/float16/exponent-bias]: https://github.com/stdlib-js/constants-float16-exponent-bias

[@stdlib/constants/float16/max-safe-integer]: https://github.com/stdlib-js/constants-float16-max-safe-integer

[@stdlib/constants/float16/max]: https://github.com/stdlib-js/constants-float16-max

[@stdlib/constants/float16/min-safe-integer]: https://github.com/stdlib-js/constants-float16-min-safe-integer

[@stdlib/constants/float16/ninf]: https://github.com/stdlib-js/constants-float16-ninf

[@stdlib/constants/float16/num-bytes]: https://github.com/stdlib-js/constants-float16-num-bytes

[@stdlib/constants/float16/pinf]: https://github.com/stdlib-js/constants-float16-pinf

[@stdlib/constants/float16/precision]: https://github.com/stdlib-js/constants-float16-precision

[@stdlib/constants/float16/smallest-normal]: https://github.com/stdlib-js/constants-float16-smallest-normal

[@stdlib/constants/float16/smallest-subnormal]: https://github.com/stdlib-js/constants-float16-smallest-subnormal

[@stdlib/constants/float16/sqrt-eps]: https://github.com/stdlib-js/constants-float16-sqrt-eps

<!-- </toc-links> -->

</section>

<!-- /.links -->
