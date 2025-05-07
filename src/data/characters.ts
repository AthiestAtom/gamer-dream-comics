
export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  abilities: string[];
  relatedStory: string;
}

export const characters: Character[] = [
  {
    id: "the-kid",
    name: "The Kid",
    role: "Protagonist",
    description: "A college student with extraordinary guts but little physical potential. Despite being isolated and having few friends, he possesses a peculiar gaming-related superpower that allows him to change reality through video games.",
    abilities: [
      "Reality manipulation through video games",
      "Quick-save/quick-load in real situations",
      "Game mechanic utilization in real world",
      "Remarkable persistence"
    ],
    relatedStory: "videogamer-1"
  },
  {
    id: "the-variant",
    name: "The Variant",
    role: "Antagonist",
    description: "An alternate timeline version of the Kid who has discovered and mastered his powers. He rules over a dimensional city where he keeps people as slaves.",
    abilities: [
      "Advanced gaming powers",
      "Reality manipulation",
      "Dimensional travel",
      "Power enhancement through serums"
    ],
    relatedStory: "videogamer-1"
  },
  {
    id: "ai-drone",
    name: "AI Drone",
    role: "Supporting Character",
    description: "Created by an archaeologist to find and help the Kid. It contains all the research about the ancient powers and seeks to prevent the Variant from stealing the Kid's abilities.",
    abilities: [
      "Advanced AI capabilities",
      "Research database storage",
      "Flight and tracking",
      "Communication"
    ],
    relatedStory: "videogamer-1"
  },
  {
    id: "archaeologist",
    name: "The Archaeologist",
    role: "Supporting Character",
    description: "A researcher who discovered the ancient texts about the powers bestowed by the saint. He created the AI drone as a backup when he was captured by the Variant.",
    abilities: [
      "Historical research expertise",
      "Advanced technology creation",
      "Pattern recognition"
    ],
    relatedStory: "videogamer-1"
  },
  {
    id: "infatuator",
    name: "The Infatuator",
    role: "Antagonist",
    description: "Originally a girl who bullied someone with powers, she was cursed to become a ghost that absorbs powers from apprentices. Her castle appears normal from the outside but contains a realm as large as a city inside.",
    abilities: [
      "Infatuation induction",
      "Reality manipulation",
      "Power absorption",
      "Dimensional space control"
    ],
    relatedStory: "videogamer-2"
  },
  {
    id: "the-creator",
    name: "The Creator",
    role: "Mysterious Entity",
    description: "The powerful being who granted powers to the first saint. He has the ability to bestow and revoke powers, and occasionally intervenes when the powers are being misused.",
    abilities: [
      "Power bestowal",
      "Power removal",
      "Timeline manipulation",
      "Resurrection"
    ],
    relatedStory: "videogamer-3"
  },
  {
    id: "aryansh",
    name: "Aryansh",
    role: "Gifted Individual",
    description: "A famous awarded writer who possesses unique powers. His abilities allow him to program and alter the timeline's simulation, effectively changing reality through code.",
    abilities: [
      "Timeline programming",
      "Reality code manipulation",
      "Simulation control",
      "World alteration"
    ],
    relatedStory: "videogamer-3"
  },
  {
    id: "bully-girl",
    name: "Bully Senior Girl",
    role: "Supporting Character",
    description: "The daughter of a minister who made a vlog of the Kid's fight against zombies. Her unofficial documentation of the events angered the Creator, leading him to temporarily revoke the Kid's powers. Despite initially being a bully, her life was saved by the Kid's selfless sacrifice.",
    abilities: [
      "Vlogging and documentation",
      "Political connections",
      "Resourcefulness",
      "Survival instinct"
    ],
    relatedStory: "videogamer-3"
  }
]
