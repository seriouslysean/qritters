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
  THRYX: {
    id: 9,
    singular: 'Thryx',
    plural: 'Thryx',
    description: `Thryx are insectoid creatures with a strong sense of unity, operating in swarms or hives. Their exoskeletons click and buzz as they work in perfect synchronization, constructing nests, burrowing, or foraging with a singular focus. Their strength lies in their collective nature, each individual contributing to the whole.`,
  },
  THAUMYR: {
    id: 10,
    singular: 'Thaumyr',
    plural: 'Thaumyr',
    description: `Thaumyr are ordinary objects animated by residual magic. Whether by accident or intent, they now move as if alive. Each carries a faint echo of its original purpose, guided by a lingering enchantment that may have been left unchecked or forgotten altogether.`,
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
        aspects: [QRITTER_ASPECTS.THRYX],
        img: 'lug.png',
        description: `I watched the tiny Lug use its oversized mandibles to bundle seeds in leaves with surprising ease. They move so quickly, disappearing into cracks in the ground. By the time they're gone, only bare earth remains where they once foraged.`,
      },
      {
        id: 2,
        name: 'Tinktin',
        aspects: [QRITTER_ASPECTS.GEARLING],
        img: 'tinktin.png',
        description: `I found Tinktin nestled within the gears of an old machine, its tiny limbs clicking perfectly into place. The faint ticking sound it made blended with the rhythm of the machine. It moved constantly, always in sync with the turning cogs.`,
      },
      {
        id: 3,
        name: 'Wigglin',
        aspects: [QRITTER_ASPECTS.FOODLE],
        img: 'wigglin.png',
        description: `Wigglin's body caught the light, its surface reflecting a range of bright hues as it twisted and turned. The gummy texture of its body shifted with each movement, stretching and contracting as it wiggled through its path. A subtle, sweet scent followed behind it.`,
      },
      {
        id: 4,
        name: 'Bulbi',
        aspects: [QRITTER_ASPECTS.FLORET],
        img: 'bulbi.png',
        description: `I observed Bulbi swaying gently in the breeze, its sprout-like body shimmering in the sunlight. Its tiny roots skimmed the earth as it walked, leaving behind a faint, earthy smell. The soft rustle of its body blended with the natural sounds of the forest.`,
      },
      {
        id: 5,
        name: 'Lep',
        aspects: [QRITTER_ASPECTS.ENDEW],
        img: 'lep.png',
        description: `I spotted a Lep surface when the water was still, its pouch catching tiny creatures in the water. It hovered for a moment, filtering out its catch. Then, with a quick gulp, it vanished beneath the surface, leaving only a ripple behind.`,
      },
      {
        id: 6,
        name: 'Drispur',
        aspects: [QRITTER_ASPECTS.ENDEW],
        img: 'drispur.png',
        description: `I found a Drispur floating quietly across the water, its scales catching the moonlight in faint flashes. As danger approached, it swelled, its body reflecting more light as its size grew. In an instant, it deflated and disappeared into the water once more.`,
      },
      {
        id: 6,
        name: 'Bumblenog',
        aspects: [QRITTER_ASPECTS.FLORET],
        img: 'bumblenog.png',
        description: `Bumblenog ambled slowly through the underbrush, its body covered in moss and fungi. Wherever it walked, the soil turned soft, freshly loosened in its wake. The air around it smelled faintly of damp earth and greenery.`,
      },
      {
        id: 7,
        name: 'Scarmorid',
        aspects: [QRITTER_ASPECTS.IGNOLITH],
        img: 'scarmorid.png',
        description: `I watched as Scarmorid's jagged plates glowed faintly with heat, each step accompanied by a quiet clink. The heat radiating from its body was almost palpable, pulsing with each movement. Its armor seemed to harden with each dive into the molten lava.`,
      },
      {
        id: 8,
        name: 'Bonfi',
        aspects: [QRITTER_ASPECTS.IGNOLITH],
        img: 'bonfi.png',
        description: `Bonfi drifted along the cliffside, feeding on vines and moss, swelling slightly with each bite. When the rain began, they shrank quickly and disappeared into the stone. Only tiny holes remained, scattered like stars across the rock face.`,
      },
      {
        id: 9,
        name: 'Chirren',
        aspects: [QRITTER_ASPECTS.AETHERIS],
        img: 'chirren.png',
        description: `I watched Chirren glide on the breeze, their faint chirring sound just audible as they passed. They perched for only a moment before lifting off again, using the lightest gust to carry them onward. Their delicate wings seemed to shimmer in the sunlight before they disappeared into the sky.`,
      },
      {
        id: 10,
        name: 'Tremodrill',
        aspects: [QRITTER_ASPECTS.SKARN],
        img: 'tremodrill.png',
        description: `I found Tremodrill deep in a trembling valley, its massive form drilling into the earth. Once it settled, the tremors faded, replaced by a low, constant hum. The vibrations it absorbed kept the ground steady, giving the valley an eerie calm.`,
        draft: true,
      },
      {
        id: 11,
        name: 'Chipple',
        aspects: [QRITTER_ASPECTS.FOODLE],
        img: 'chipple.png',
        description: `Chipple darted across the ground on its pencil-thin legs, never pausing for more than a moment. It seemed endlessly in motion, its ruffled surface catching the light as it moved. The sound of its sprinting echoed faintly as it disappeared into the distance.`,
      },
      {
        id: 12,
        name: 'Cleftmite',
        aspects: [QRITTER_ASPECTS.SKARN],
        img: 'cleftmite.png',
        description: `I noticed the small Cleftmites clinging to Tremodrill's rocky surface, their spiny legs firmly anchoring them in place. They scraped away bits of moss and debris, almost blending in with the surrounding rock. Only when they moved did they become visible, scurrying quietly across the stone.`,
      },
      {
        id: 13,
        name: 'Mucktail',
        aspects: [QRITTER_ASPECTS.ORDLIN],
        img: 'mucktail.png',
        description: `I watched Mucktail dart through its burrows, its long tail sweeping dirt behind it like a practiced broom. Its movements were swift and efficient, disappearing into the earth in seconds. By the time it was gone, there was no trace of where it had been.`,
      },
      {
        id: 14,
        name: 'Scuffin',
        aspects: [QRITTER_ASPECTS.ORDLIN],
        img: 'scuffin.png',
        description: `The other day, I observed Scuffin pushing through the soil with its broad, shovel-like nose. Its sturdy legs carried it forward, leaving small furrows in the earth as it searched for roots and tubers. The quiet rhythm of its digging was almost soothing to watch.`,
        draft: true,
      },
      {
        id: 15,
        name: 'Druke',
        aspects: [QRITTER_ASPECTS.THAUMYR],
        img: 'druke.png',
        description: `The Druke floats alone among the reeds, its faded, rubbery form casting an eerie shadow on the water. It mimics other ducks, tipping forward as if to feed, though its hollow beak remains empty. Each time, it bobs back up, blankly staring ahead before trying again, bound by some forgotten instinct.`,
      }
    ]
  }
};

export const QRITTERS = Object.values(QRITTER_VERSIONS)
  .flatMap(version => version.qritters)
  .filter(qritter => !qritter.draft);
