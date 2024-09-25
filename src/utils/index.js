/**
 * The current version of qritters.
 * @constant {string}
 */
const QRITTER_VERSION = 'OG';

/**
 * Aspects of qritters.
 * @constant {Object}
 */
const QRITTER_ASPECTS = {
    ORDLIN: {
        id: 1,
        singular: 'Ordlin',
        plural: 'Ordlins',
        description: `Ordlins are elusive creatures that closely resemble familiar animals and insects, making them easy to overlook. I've noticed they possess subtle behaviors that set them apart, hinting at a hidden depth beneath their ordinary appearances.`,
    },
    GEARLING: {
        id: 2,
        singular: 'Gearling',
        plural: 'Gearlings',
        description: `Gearlings are tiny, mechanical qritters I've discovered within the inner workings of various devices. Their bodies combine organic forms with gears and circuits, and they seem irresistibly drawn to all things technological.`,
    },
    FOODLE: {
        id: 3,
        singular: 'Foodle',
        plural: 'Foodles',
        description: `Foodles are whimsical beings that resemble animated treats and dishes. I've spotted them in places rich with culinary activity, where they add a touch of enchantment to the aromas and flavors around them.`,
    },
    FLORET: {
        id: 4,
        singular: 'Floret',
        plural: 'Florets',
        description: `Florets emerge from natural environments, embodying elements like plants, fungi, and stones. They inhabit forests, meadows, and gardens, seamlessly blending into the flora while exuding a gentle, earthy presence.`,
    },
    ENDEW: {
        id: 5,
        singular: 'Endew',
        plural: 'Endews',
        description: `Endews are qritters that embody the essence of water, dew, and moisture in all its forms. I've encountered them near mist-covered meadows, foggy shorelines, and early morning dewdrops. A single Dewin can blend into its environment, almost disappearing into the water-laden air.`,
    },
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
                name: 'Lug',
                aspects: [QRITTER_ASPECTS.ORDLIN],
                img: 'lug.png',
                description: `The tiny, dark-colored Lug cracked open small seeds with its dull, oversized mandibles, bundling them neatly in leaves. I watched as more and more appeared, each carrying its bundle with surprising ease before vanishing into the cracks, leaving the area bare.`,
            },
            2: {
                id: 2,
                name: 'Tinktin',
                aspects: [QRITTER_ASPECTS.GEARLING],
                img: 'tinktin.png',
                description: 'Tinktin clicks and whirs, almost blending into the machinery it inhabits. Its tiny limbs fit perfectly within the intricate gears, as if it was born from the very mechanisms it tends to. If you listen closely, you can hear a faint ticking as it scurries along, always in motion, always precise.',
            },
            3: {
                id: 3,
                name: 'Wigglin',
                aspects: [QRITTER_ASPECTS.FOODLE],
                img: 'wigglin.png',
                description: 'Wigglin twists and turns with a playful energy, its gummy body constantly shifting in a swirl of vibrant colors. From deep purples to bright greens, Wigglin never stays the same shade for long. It wiggles through its surroundings with an almost rhythmic motion, leaving a subtle, sweet scent in its wake, as if inviting you to follow along its colorful journey.',
            },
            4: {
                id: 4,
                name: 'Bulbi',
                aspects: [QRITTER_ASPECTS.FLORET],
                img: 'bulbi.png',
                description: 'Bulbi walk by wobbling from side to side, as they rustle softly in the gentle breeze. Its sprout-like body, vibrant green at the core, stands in dappled sunlight. Tiny roots skim the surface, absorbing nutrients. With each sway, Budlin releases a subtle, earthy fragrance, reminiscent of rain-soaked foliage.',
            },
            5: {
                id: 5,
                name: 'Lep',
                aspects: [QRITTER_ASPECTS.ENDEW],
                img: 'lep.png',
                description: 'Tiny and almost invisible among the roots, the Lep waits. It emerges only when the water is still, its small body barely disturbing the surface. Its wide mouth opens, and the throat pouch swells, catching the water in a delicate net. I watched as it sifted through the water, filtering out the smallest qritters while letting the water drain back out. Then, with a quiet gulp, it vanished, leaving behind only faint ripples as the pouch deflated.',
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
