import assert from '@quentinadam/assert';

/**
 * Decodes a hex encoded string into a Uint8Array buffer.
 *
 * @param string The hex encoded string.
 * @returns The decoded buffer.
 */
export function decode(hex: string): Uint8Array {
  assert(/^[0-9a-fA-F]*$/.test(hex), 'Hex string must only contain hex characters');
  assert(hex.length % 2 === 0, 'Hex string length must be even');
  const buffer = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    buffer[i / 2] = parseInt(hex.slice(i, i + 2), 16);
  }
  return buffer;
}

/**
 * Encodes a Uint8Array buffer into a hex string.
 *
 * @param buffer The buffer to encode.
 * @returns The hex encoded string.
 */
export function encode(buffer: Uint8Array): string {
  return Array.from(buffer).map((byte) => byte.toString(16).padStart(2, '0')).join('');
}
