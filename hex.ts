import assert from '@quentinadam/assert';

export function decode(hex: string): Uint8Array {
  assert(/^[0-9a-fA-F]*$/.test(hex), 'Hex string must only contain hex characters');
  assert(hex.length % 2 === 0, 'Hex string length must be even');
  const buffer = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    buffer[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return buffer;
}

export function encode(buffer: Uint8Array): string {
  return Array.from(buffer).map((byte) => byte.toString(16).padStart(2, '0')).join('');
}
