import { WikiCategory } from '../types/wiki';

export const wikiData: WikiCategory[] = [
  {
    name: 'Characters',
    icon: 'users',
    subcategories: [
      {
        name: 'Players',
        path: '/characters/players',
        pages: [
          {
            title: 'Fiest Land',
            path: '/characters/players/fiest',
            content: 'A mysterious elven rogue from the Shadowspire Mountains...'
          },
          {
            title: 'Meridia',
            path: '/characters/players/meridia',
            content: 'A mysterious elven rogue from the Shadowspire Mountains...'
          },
          {
            title: 'Haop Droker',
            path: '/characters/players/haop',
            content: 'A mysterious elven rogue from the Shadowspire Mountains...'
          },
          {
            title: 'Rela Peverell',
            path: '/characters/players/rela',
            content: 'A mysterious elven rogue from the Shadowspire Mountains...'
          }
          ,
          {
            title: 'Idi Rein',
            path: '/characters/players/idi',
            content: 'Half-elf wizard with a penchant for fire magic. Curiously attracted to gambling. His main goal is to obtain as many cool spells to his spellbook as possible.'
             + 'Born in [Latma](/places/towns/latma).'
          }
        ]
      },
      {
        name: 'NPCs',
        path: '/characters/npcs',
        pages: [
          {
            title: 'Elder Moira',
            path: '/characters/npcs/moira',
            content: 'The wise elder of [Silverhaven](/places/towns/silverhaven), keeper of ancient knowledge. Her guidance has helped the town prosper through countless generations. With her deep understanding of history and mystical arts, she serves as both leader and spiritual advisor to the townspeople. Many seek her counsel, from common folk to adventurers passing through the Silver Vale.'
          }
        ]
      },
      {
        name: 'Monsters',
        path: '/characters/monsters',
        pages: [
          {
            title: 'Crystalwing Drake',
            path: '/characters/monsters/crystalwing-drake',
            content: 'A rare species of drake found in the Crystal Caverns...'
          }
        ]
      }
    ]
  },
  {
    name: 'Places',
    icon: 'map',
    subcategories: [
      {
        name: 'Towns',
        path: '/places/towns',
        pages: [
          {
            title: 'Latma',
            path: '/places/towns/latma',
            content: 'A prosperous town nestled in the heart of the Silver Vale. Under the guidance of [Elder Moira](/characters/npcs/moira), Silverhaven has become a beacon of knowledge and culture in the region. The town is known for its impressive library and the annual Festival of Lights, where magical illuminations transform the streets into rivers of dancing colors.'
          },
          {
            title: 'Lunt',
            path: '/places/towns/lunt',
            content: 'A prosperous town nestled in the heart of the Silver Vale. Under the guidance of [Elder Moira](/characters/npcs/moira), Silverhaven has become a beacon of knowledge and culture in the region. The town is known for its impressive library and the annual Festival of Lights, where magical illuminations transform the streets into rivers of dancing colors.'
          }
        ]
      },
      {
        name: 'Mountains',
        path: '/places/mountains',
        pages: [
          {
            title: 'Shadowspire Mountains',
            path: '/places/mountains/shadowspire',
            content: 'A treacherous mountain range shrouded in eternal twilight...'
          }
        ]
      },
      {
        name: 'Landmarks',
        path: '/places/landmarks',
        pages: [
          {
            title: 'Crystal Caverns',
            path: '/places/landmarks/crystal-caverns',
            content: 'An extensive network of caves filled with luminescent crystals...'
          }
        ]
      }
    ]
  }
];