export const QRITTER_VERSION = 'OG';

export const QRITTER_ASPECTS = {
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
    plural: 'Endui',
    description: `Endui embody the essence of water, dew, and moisture in all its forms. I've encountered them near mist-covered meadows, foggy shorelines, and early morning dewdrops. A single Dewin can blend into its environment, almost disappearing into the water-laden air.`,
  },
  IGNOLITH: {
    id: 6,
    singular: 'Ignolith',
    plural: 'Ignoliths',
    description: `Ignoliths carry the essence of fire, constantly radiating warmth and energy. Their presence is unmistakable, with heat lingering in the air long after they've passed. Whether softly glowing like embers or flaring with sudden intensity, Ignoliths are deeply primal, embodying a raw and unpredictable nature.`,
  },
  AETHERIS: {
    id: 7,
    singular: 'Aetheris',
    plural: 'Aetherii',
    description: `Aetherii often catch my eye as they move through the skies with a quiet grace. Some are familiar, while others shift in ways that feel different, following paths I can't quite understand. Their connection to the air is undeniable, yet still a mystery.`,
  },
  SKARN: {
    id: 8,
    singular: 'Skarn',
    plural: 'Skarn',
    description: `Skarn are creatures of earth and stone, their forms often indistinguishable from the terrain around them. I've noticed their slow, deliberate movements mirror the steady, unyielding power of the ground itself, a quiet reminder of the ancient forces beneath our feet.`,
  },
};

export const QRITTER_VERSIONS = {
  OG: {
    id: 1,
    name: 'Original',
    date: '2024-09-23',
    qritters: [
      {
        id: 1,
        name: 'Lug',
        aspects: [QRITTER_ASPECTS.ORDLIN],
        img: 'lug.png',
        description: `The tiny, dark-colored Lug cracked open small seeds with its dull, oversized mandibles, bundling them neatly in leaves. I watched as more and more appeared, each carrying its bundle with surprising ease before vanishing into the cracks, leaving the area bare.`,
      },
      {
        id: 2,
        name: 'Tinktin',
        aspects: [QRITTER_ASPECTS.GEARLING],
        img: 'tinktin.png',
        description: 'Tinktin clicks and whirs, almost blending into the machinery it inhabits. Its tiny limbs fit perfectly within the intricate gears, as if it was born from the very mechanisms it tends to. If you listen closely, you can hear a faint ticking as it scurries along, always in motion, always precise.',
      },
      {
        id: 3,
        name: 'Wigglin',
        aspects: [QRITTER_ASPECTS.FOODLE],
        img: 'wigglin.png',
        description: 'Wigglin twists and turns with a playful energy, its gummy body constantly shifting in a swirl of vibrant colors. From deep purples to bright greens, Wigglin never stays the same shade for long. It wiggles through its surroundings with an almost rhythmic motion, leaving a subtle, sweet scent in its wake, as if inviting you to follow along its colorful journey.',
      },
      {
        id: 4,
        name: 'Bulbi',
        aspects: [QRITTER_ASPECTS.FLORET],
        img: 'bulbi.png',
        description: 'Bulbi walk by wobbling from side to side, as they rustle softly in the gentle breeze. Its sprout-like body, vibrant green at the core, stands in dappled sunlight. Tiny roots skim the surface, absorbing nutrients. With each sway, Budlin releases a subtle, earthy fragrance, reminiscent of rain-soaked foliage.',
      },
      {
        id: 5,
        name: 'Lep',
        aspects: [QRITTER_ASPECTS.ENDEW],
        img: 'lep.png',
        description: 'Tiny and almost invisible among the roots, the Lep waits. It emerges only when the water is still, its small body barely disturbing the surface. Its wide mouth opens, and the throat pouch swells, catching the water in a delicate net. I watched as it sifted through the water, filtering out the smallest qritters while letting the water drain back out. Then, with a quiet gulp, it vanished, leaving behind only faint ripples as the pouch deflated.',
      },
      {
        id: 6,
        name: 'Drispur',
        aspects: [QRITTER_ASPECTS.ENDEW],
        img: 'drispur.png',
        description: 'Adrift in the calm night, the Drispur shimmered under the moonlight, its body suddenly ballooning with sharp, red scales as a larger shadow approached. It floated silently, the reflected light flickering off its scales like warning beacons before it slowly deflated and blended back into the dark waters.',
      },
      {
        id: 6,
        name: 'Bumblenog',
        aspects: [QRITTER_ASPECTS.FLORET],
        img: 'bumblenog.png',
        description: 'The Bumblenog resembles a fallen log, its body a vibrant mix of autumn colors covered with green moss and various types of fungi. Its earthy, sweet scent, reminiscent of honeysuckle, drew in several curious creatures, but none came out again. As it ambled through the underbrush, it deposited a damp trail that loosened the soil beneath, giving it a freshly turned appearance.',
      },
      {
        id: 7,
        name: 'Scarmorid',
        aspects: [QRITTER_ASPECTS.IGNOLITH],
        img: 'scarmorid.png',
        description: `Scarmorid's heavy, rock-like plates clink as it moves, hardened by repeated dives into bubbling lava. With each step, its body pulses faintly with heat, glowing through the cracks in its armor. I saw it slip back into the lava, only to emerge moments later, its armor thicker and more jagged.`,
      },
      {
        id: 8,
        name: 'Bonfi',
        aspects: [QRITTER_ASPECTS.IGNOLITH],
        img: 'bonfi.png',
        description: `Drifting in unison, the Bonfi fed on vines and moss, swelling in size with each bite. As a light rain began, they swiftly shrank and vanished into the cliffside, leaving behind tiny holes scattered across the stone, like constellations etched into the rock.`,
      },
    ],
  },
};
