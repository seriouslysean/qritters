/**
 * The current version of qritters.
 * @constant {string}
 */
const QRITTER_VERSION = 'OG';

/**
 * Types of qritters.
 * @constant {Object}
 */
const QRITTER_TYPES = {
    ORDLIN: { id: 1, singular: 'Ordlin', plural: 'Ordlins' },
    GEARLING: { id: 2, singular: 'Gearling', plural: 'Gearlings' },
    FOODLE: { id: 3, singular: 'Foodle', plural: 'Foodles' },
    FLORET: { id: 3, singular: 'Floret', plural: 'Florets' },
};

/**
 * Versions of qritters.
 * @constant {Object}
 */
const QRITTER_VERSIONS = {
    OG: {
        id: 1,
        name: 'Original',
        date: '2024-09-23',
        qritters: {
            1: {
                id: 1,
                name: 'Mandiblis',
                type: QRITTER_TYPES.ORDLIN,
                img: 'mandiblis.png',
                description: `The Mandiblis moves methodically, never seeming to tire. I've seen it carry objects several times its size, with its mandibles gripping tightly as it navigates through the smallest spaces. There's a quiet intensity in its work, always part of something larger, though it rarely draws attention to itself.`,
            },
            2: {
                id: 2,
                name: 'Tinktin',
                type: QRITTER_TYPES.GEARLING,
                img: 'tinktin.png',
                description: 'Tinktin clicks and whirs, almost blending into the machinery it inhabits. Its tiny limbs fit perfectly within the intricate gears, as if it was born from the very mechanisms it tends to. If you listen closely, you can hear a faint ticking as it scurries along, always in motion, always precise.',
            },
            3: {
                id: 3,
                name: 'Wigglin',
                type: QRITTER_TYPES.FOODLE,
                img: 'wigglin.png',
                description: 'Wigglin twists and turns with a playful energy, its gummy body constantly shifting in a swirl of vibrant colors. From deep purples to bright greens, Wigglin never stays the same shade for long. It wiggles through its surroundings with an almost rhythmic motion, leaving a subtle, sweet scent in its wake, as if inviting you to follow along its colorful journey.',
            },
            4: {
                id: 4,
                name: 'Budlin',
                type: QRITTER_TYPES.FLORET,
                img: 'budlin.png',
                description: 'Budlin walk by wobbling from side to side, as they rustle softly in the gentle breeze. Its sprout-like body, vibrant green at the core, stands in dappled sunlight. Tiny roots skim the surface, absorbing nutrients. With each sway, Budlin releases a subtle, earthy fragrance, reminiscent of rain-soaked foliage.',
            },
        },
    },
};

/**
 * Utility function to convert a buffer to a hex string.
 * @param {ArrayBuffer} buffer - The buffer to convert.
 * @returns {string} The hex string representation of the buffer.
 */
const bufferToHex = (buffer) => {
    return Array.from(new Uint8Array(buffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
};

/**
 * All qritters combined into a single object.
 * @constant {Object}
 */
export const QRITTERS = Object.values(QRITTER_VERSIONS).reduce((acc, version) => ({
    ...acc,
    ...version.qritters,
}), {});

/**
 * Function to get a qritter by its key.
 * @param {number} key - The key of the qritter.
 * @returns {Object|null} The qritter object or null if not found.
 */
export const getQritterByKey = (key) => {
    return QRITTERS[key] || null;
};

/**
 * Generate a hash using SHA-256 and version as a salt.
 * @param {string} qrData - The QR code data.
 * @returns {Promise<string>} The generated hash as a hex string.
 */
export const generateHash = async (qrData) => {
    const salt = `version-${QRITTER_VERSION}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(qrData + salt);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data); // Generate hash
    return bufferToHex(hashBuffer); // Convert buffer to hex string
};

/**
 * Map QR code data to a qritter based on the generated hash.
 * @param {string} qrData - The QR code data.
 * @returns {Promise<Object|null>} The mapped qritter object or null if not found.
 */
export const mapQrToQritter = async (qrData) => {
    const hash = await generateHash(qrData);

    // Use the first few characters of the hash for the key (convert to integer)
    const key = parseInt(hash.substring(0, 8), 16) % Object.keys(QRITTERS).length + 1;

    // Get the qritter based on the computed key
    const qritter = getQritterByKey(key);

    if (qritter) {
        return qritter;
    } else {
        console.error('No matching qritter found for the QR code.');
        return null;
    }
};
