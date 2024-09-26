import { QRITTER_VERSION, QRITTER_VERSIONS } from '~utils/constants';
import { slugify, generateHash } from '~utils/helpers';

/**
 * Function to get all qritters combined into a single object.
 * @returns {Object} The combined qritters object.
 */
export const getQritters = () => {
  return QRITTER_VERSIONS.OG.qritters.reduce((acc, qritter) => ({
    ...acc,
    [qritter.id]: {
      ...qritter,
      slug: slugify(qritter.name),
    },
  }), {});
};

/**
 * Function to get a qritter by its key.
 * @param {number} key - The key of the qritter.
 * @returns {Object|null} The qritter object or null if not found.
 */
export const getQritterByKey = (key) => {
  const qritters = getQritters();
  return qritters[key] || null;
};

/**
 * Function to get a qritter by its slug.
 * @param {string} slug - The slug of the qritter.
 * @returns {Object|null} The qritter object or null if not found.
 */
export const getQritterBySlug = (slug) => {
  const qritters = getQritters();
  return Object.values(qritters).find(qritter => qritter.slug === slug) || null;
};

/**
 * Map QR code data to a qritter based on the generated hash.
 * @param {string} qrData - The QR code data.
 * @returns {Promise<Object|null>} The mapped qritter object or null if not found.
 */
export const mapQrToQritter = async (qrData) => {
  const hash = await generateHash(qrData, QRITTER_VERSION);

  // Use the first few characters of the hash for the key (convert to integer)
  const key = parseInt(hash.substring(0, 8), 16) % Object.keys(getQritters()).length + 1;

  // Get the qritter based on the computed key
  const qritter = getQritterByKey(key);

  if (qritter) {
    return qritter;
  } else {
    console.error('No matching qritter found for the QR code.');
    return null;
  }
};
