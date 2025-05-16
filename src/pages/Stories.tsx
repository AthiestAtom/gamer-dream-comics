
import { useState } from "react";
import { stories } from "../data/stories";
import StoryCard from "../components/StoryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Book, ChevronDown, ChevronUp } from "lucide-react";

// Helper function to group stories by series
const getSeriesFromStoryId = (id: string) => {
  if (id.startsWith("videogamer")) {
    return "Videogamer";
  } else if (id.startsWith("atom")) {
    return "Atom";
  } else if (id.startsWith("dictator")) {
    return "Dictator";
  } else if (id.startsWith("mreffort")) {
    return "Mr. Effort";
  } else if (id.startsWith("scientist")) {
    return "Scientist";
  }
  return "Other";
};

const Stories = () => {
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    Videogamer: false,
    Atom: true,
    Dictator: true,
    "Mr. Effort": true,
    Scientist: true
  });

  // Group stories by series
  const storiesByCategory = stories.reduce((acc, story) => {
    const series = getSeriesFromStoryId(story.id);
    if (!acc[series]) {
      acc[series] = [];
    }
    acc[series].push(story);
    return acc;
  }, {} as Record<string, typeof stories>);
  
  const toggleSection = (section: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Page Header */}
        <section className="py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-comic-darkPurple dark:text-comic-purple">
            Stories
          </h1>
          <div className="flex justify-center mb-8">
            <Book className="h-8 w-8 text-comic-purple" />
          </div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Dive into a world where gaming abilities merge with reality. Follow our characters as they navigate worlds 
            where the line between virtual and real becomes increasingly blurred.
          </p>
        </section>
        
        {/* Stories List */}
        <section className="py-8">
          {Object.entries(storiesByCategory).map(([category, categoryStories]) => (
            <div key={category} className="mb-12">
              <div 
                className="flex items-center justify-between cursor-pointer bg-white dark:bg-gray-800 rounded-lg p-4 mb-6 shadow-md hover:shadow-lg transition-shadow"
                onClick={() => toggleSection(category)}
              >
                <h2 className="text-2xl font-bold text-comic-darkPurple dark:text-comic-purple">
                  {category} Series
                </h2>
                {collapsedSections[category] ? 
                  <ChevronDown className="h-6 w-6 text-comic-purple" /> : 
                  <ChevronUp className="h-6 w-6 text-comic-purple" />
                }
              </div>
              
              {!collapsedSections[category] && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in">
                  {categoryStories.map(story => (
                    <StoryCard key={story.id} story={story} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
