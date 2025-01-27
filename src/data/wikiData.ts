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
            content: '# The Kobold Raid'
            + '\n' 
            + 'The story starts in a small town called [Latma](/places/towns/latma), where we follow a small party of five adventurers: \n'
            +' - [Fiest Land](/characters/players/fiest) \n'
            +' - [Idi Rein](/characters/players/idi) \n'
            +' - [Haop Droker](/characters/players/haop) \n'
            +' - [Rela Peverell](/characters/players/rela) \n'
            +' - [Yolo Swaggins](/characters/players/yolo) \n'
            + '\n'
            + 'On their way back from a quest, they noticed smoke covering the sky. As they approached, they saw Latma in flames.'
            + '\n'
            + '#### The Battle Begins \n'
            + 'With great haste, they rushed to the town center, only to fall into an ambush. The party held their ground bravely while a cleric, caught in the chaos, pleaded for time to create an escape portal. \n'
            + 'Despite their limited combat experience, they managed to hold the line and eventually escaped with the cleric and a few villagers. \n'
            + ' #### A new ally \n'
            + 'The cleric introduced himself as [Oberon](/characters/npcs/oberon) the Priest. He provided crucial information and promised the adventurers a reward. Determined to rescue more villagers, the party embarked on a new journey back to Latma and into the forest south of it, where the kobolds were hiding.`'
          }
          ,
          {
            title: 'Chapter 2',
            path: '/the-story/chapters/chapter-2',
            content: '# The Rescue'
              + '\n'
              + 'With [Fiest Land](/characters/players/fiest) leading the way, the party ventured deep into the forest in search of the missing villagers. They soon encountered a scouting party of kobolds and, taking advantage of the element of surprise, swiftly defeated them—managing to capture one alive.'
              + '\n'
              + 'Through careful interrogation, the adventurers discovered two key locations where the kobolds had established bases: a tunnel and a fortified camp. Opting to investigate the tunnel first, Fiest attempted a stealthy reconnaissance but inadvertently kicked a rock, alerting the kobolds. [Haop Droker](/characters/players/haop) rushed in to assist, triggering a fierce battle.'
              + '\n'
              + 'Despite encountering a few traps, the party overcame their foes and successfully rescued several villagers. With renewed determination, they pressed on to the fortified camp. Using a similar tactic—sending Fiest in first—they skillfully infiltrated the fort and secured yet another victory.'
          },
          {
            title: 'Chapter 3',
            path: '/the-story/chapters/chapter-3',
            content: '# The Tribe'
              + '\n'
              + 'Following their victory at the fort, the party encountered a group of strangers who revealed themselves to be members of a tribe residing south of the forest. Seeking aid for their captured kin, they promised the adventurers a valuable reward in return for their help. Driven by both curiosity and a sense of duty, the party set off southward, only to face yet another formidable kobold force.'
              + '\n'
              + 'This encounter proved to be their most challenging battle to date. Despite their valiant efforts, all but [Idi Rein](/characters/players/idi), the wizard, succumbed to their injuries and fell unconscious. In the end, however, they emerged victorious, securing the safety of the tribe and their fellow villagers.'
              + '\n'
              + 'In gratitude, the tribe presented the party with a mysterious crystal of unknown origin. Little did they realize the true significance of this treasure, nor the adventure it would lead them on in the future.'
              + '\n'
              + '#### Additional Findings'
              + '\n'
              + '- The party learned that the kobolds serve a more powerful being, prompting further investigation in a library.'
              + '\n'
              + '- Reports suggested wolves were moving north toward the deeper woods, possibly to their den.'
              + '- An ancient legend of a five-headed dragon queen, imprisoned in the depths of hell by ancient magic, surfaced during their inquiries, hinting at deeper mysteries yet to be uncovered.'
              + '\n'
              + '- Rela has grand plans to sing an epic ballad about the team\'s exploits at the next tavern they visit, although opinions within the party remain divided.'
              + '\n'
              + '- [Fiest Land](/characters/players/fiest) has become a favorite among the group after slaying a particularly troublesome kobold.'
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
            content:
             '## Background'
            + '\n'
            + 'Idi Rein was born to a half-elf mother, Val Rein, and a half-elf father, Ace Rein. both of whom were once adventurers. Eventually, they decided to settle down in the town of Latma and became farmers. Growing up in Latma, Idi enjoyed a relatively carefree life, often amusing himself by playing pranks and engaging with the townsfolk without facing serious consequences.'
            + '\n'
            + 'Idi\'s parents maintained a close friendship with a dwarf, which allowed him to learn its language naturally over time. His parents were always supportive of him traveling the world, but Idi found comfort in the familiarity of Latma.'
            + '\n'
            + '#### Early Magical Influence'
            + '\n'
            + 'It was Trader Hank, a well-known figure in Latma, who first introduced Idi to the basics of magic. Acting as an early mentor, Hank encouraged Idi to explore magic, although Idi\'s primary interest was in learning "cool tricks" rather than deeply studying the arcane arts. Despite this, Idi has spent a significant portion of his life mastering magic to suit his own purposes.'
            + '\n'
            + '#### Adventuring Life'
            + '\n'
            + 'In his early 20s, Idi traveled to the city of Lunt, where he got involved in a bet with an intriguing character. The stakes of the bet included some arcane books that piqued Idi\'s curiosity. With a stroke of luck, Idi managed to win the bet, further fueling his magical pursuits.'
            + '\n'
            + '#### Current Goals'
            + '\n'
            + 'Having ventured beyond Latma, Idi has developed an increasing fascination with collecting spells.'
            + '\n'
            + '#### Allies & Organizations'
            + '\n'
            + '- Parents: Always supportive and encouraging of his travels.'
            + '\n'
            + '- Trader Hank: Early mentor in magic.'
            + '\n'
            + '- Berpo '
            + '\n'
            + '- Bones: A necromancer who previously attacked Idi\'s party but now communicates with him through mental messages.'
            + '\n'
            + '#### Personality Traits'
            + '\n'
            + '- Playful and mischievous, often seeking fun over responsibility.'
            + '\n'
            + '- Curious but pragmatic in his approach to magic.'
            + '\n'
            + '- Loyal to those he trusts but willing to take risks when opportunity strikes.'
            + '\n'
            + '## Notable Possessions'
            + '\n'
            + '- A pair of yellow boots gifted by Bones, which Idi finds particularly amusing and useful.'
            },
          {
            title: 'Haop Droker',
            path: '/characters/players/haop',
            content: 'Born in [Latma](/places/towns/latma)'
          },
          {
            title: 'Rela Peverell',
            path: '/characters/players/rela',
            content: 'Born in [Latma](/places/towns/latma)'
          },
          {
            title: 'Yolo Swaggins',
            path: '/characters/players/yolo',
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