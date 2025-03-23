import { WikiCategory } from '../types/wiki';

export const wikiData: WikiCategory[] = [
  {
    name: 'The story',
    icon: 'users',
    subcategories: [
      {
        name: 'Chapters',
        path: '/the-story/chapters',
        pages: [
          {
            title: 'Chapter 1',
            path: '/the-story/chapters/chapter-1',
            content: ''
          }
          
        ]
      }
    ]
  },
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
            content: 'Born in [Latma](/places/towns/latma)'
          },
          {
            title: 'Meridia',
            path: '/characters/players/meridia',
            content: 'Born in [Latma](/places/towns/latma)'
          },
          {
            title: 'Idi Rein',
            path: '/characters/players/idi',
            content:''
            },
          {
            title: 'Haop Droker',
            path: '/characters/players/haop',
            content: 'Born in [Latma](/places/towns/latma)'
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
          },
          {
            title: 'Oberon',
            path: '/characters/npcs/oberon',
            content: 'Oberon the priest'
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
            title: 'Silverhaven',
            path: '/places/towns/silverhaven',
            content: 'A prosperous town nestled in the heart of the Silver Vale. Under the guidance of [Elder Moira](/characters/npcs/moira), Silverhaven has become a beacon of knowledge and culture in the region. The town is known for its impressive library and the annual Festival of Lights, where magical illuminations transform the streets into rivers of dancing colors.'
          },
          {
            title: 'Latma',
            path: '/places/towns/latma',
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
  },
  {
    name: 'Creatures',
    icon: 'map',
    subcategories: [
      
    ]
  }
];