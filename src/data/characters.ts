
export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  abilities: string[];
  image: string;
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
    image: "/character-kid.jpg",
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
    image: "/character-variant.jpg",
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
    image: "/character-drone.jpg",
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
    image: "/character-archaeologist.jpg",
    relatedStory: "videogamer-1"
  }
];
