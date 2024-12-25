# hex

[![JSR](https://jsr.io/badges/@quentinadam/hex)](https://jsr.io/@quentinadam/hex)
[![CI](https://github.com/quentinadam/deno-hex/actions/workflows/ci.yml/badge.svg)](https://github.com/quentinadam/deno-hex/actions/workflows/ci.yml)

A simple library to encode and decode hex strings.

## Usage

```ts
import * as hex from '@quentinadam/hex';

hex.decode('000102'); // returns Uint8Array([0, 1, 2])

hex.encode(new Uint8Array([0, 1, 2])); // returns '000102'
```
