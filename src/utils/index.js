const QRITTER_VERSION = 'OG';

const QRITTER_TYPES = {
    ORDLIN: { id: 1, name: 'Ordlin' },
    GEARLING: { id: 2, name: 'Gearling' },
};

const QRITTER_VERSIONS = {
    OG: {
        id: 1,
        name: 'Original',
        date: '2024-09-23',
        qritters: {
            1: {
                id: 4,
                name: 'Mandiblis',
                type: QRITTER_TYPES.ORDLIN,
                img: 'mandiblis.png',
                description: 'Mandiblis, the diligent ant QRitter, exemplifies unmatched resilience and teamwork. Its strong mandibles can carry objects many times its own weight, making it a powerhouse of the QRitter world.'
            },
            2: {
                id: 5,
                name: 'Tinktin',
                type: QRITTER_TYPES.GEARLING,
                img: 'tinktin.png',
                description: 'Tinktin thrives in the realm of gears and steam, a clockwork ant whose precision and mechanical prowess are unrivaled. This Gearling ant is a true marvel of miniature engineering, turning the cogs of innovation.'
            }
        },
    },
};

// Combine all qritters into a single object
export const QRITTERS = Object.values(QRITTER_VERSIONS).reduce((acc, version) => ({
    ...acc,
    ...version.qritters,
}), {});

// Function to get a qritter by its key (O(1) lookup)
export const getQritterByKey = (key) => {
    return QRITTERS[key] || null;
};

// Generate a hash using btoa and version as a salt
export const generateHash = (qrData) => {
    const salt = `version-${QRITTER_VERSION}`;
    return btoa(qrData + salt);
};

// Map QR code data to a qritter based on the generated hash
export const mapQrToQritter = (qrData) => {
    const hash = generateHash(qrData);

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
