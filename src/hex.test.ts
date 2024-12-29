import assert from '@quentinadam/assert';
import * as hex from '../src/hex.ts';

const encoded = '00010203112233';
const decoded = new Uint8Array([0, 1, 2, 3, 0x11, 0x22, 0x33]);

Deno.test('encode', () => {
  assert(hex.encode(decoded) === encoded);
});

Deno.test('decode', () => {
  const result = hex.decode(encoded);
  assert(result instanceof Uint8Array);
  assert(result.length === decoded.length);
  for (let i = 0; i < result.length; i++) {
    assert(result[i] === decoded[i]);
  }
});
