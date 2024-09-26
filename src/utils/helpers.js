/**
 * Utility function to convert a string to a slug (kebab case).
 * @param {string} str - The string to convert.
 * @returns {string} The slugified string.
 */
export const slugify = (str) => {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

/**
* Utility function to convert a buffer to a hex string.
* @param {ArrayBuffer} buffer - The buffer to convert.
* @returns {string} The hex string representation of the buffer.
*/
export const bufferToHex = (buffer) => {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

/**
* Generate a hash using SHA-256 and version as a salt.
* @param {string} qrData - The QR code data.
* @returns {Promise<string>} The generated hash as a hex string.
*/
export const generateHash = async (qrData, version) => {
  const salt = `version-${version}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(qrData + salt);

  const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Generate hash
  return bufferToHex(hashBuffer); // Convert buffer to hex string
};
