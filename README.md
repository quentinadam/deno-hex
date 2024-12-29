# @quentinadam/hex

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A simple library to encode and decode hex strings.

## Usage

```ts
import * as hex from '@quentinadam/hex';

hex.decode('000102'); // returns Uint8Array([0, 1, 2])

hex.encode(new Uint8Array([0, 1, 2])); // returns '000102'
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-hex/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-hex/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/hex.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/hex
[jsr-image]: https://jsr.io/badges/@quentinadam/hex?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/hex
