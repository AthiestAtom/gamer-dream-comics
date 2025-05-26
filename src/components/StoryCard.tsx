
import { useState } from "react";
import { Story } from "../data/stories";
import { ChevronDown, ChevronUp, Book } from "lucide-react";

interface StoryCardProps {
  story: Story;
  featured?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, featured = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`comic-card block ${featured ? 'md:flex' : ''} bg-white dark:bg-comic-darkBg rounded-lg overflow-hidden shadow-lg`}>      
      <div className={`p-6 ${featured ? 'md:w-full' : ''}`}>
        {featured && (
          <div className="inline-block bg-comic-purple text-white px-3 py-1 text-xs rounded-full mb-3">
            Featured Story
          </div>
        )}
        <h3 className={`${featured ? 'text-3xl' : 'text-xl'} font-bold mb-2 text-gray-800 dark:text-white`}>
          {story.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          By {story.author} • Published {story.published}
        </p>
        <p className={`text-gray-700 dark:text-gray-400 mb-4 ${featured ? '' : 'line-clamp-3'}`}>
          {story.summary}
        </p>
        
        <button
          onClick={toggleExpanded}
          className="inline-flex items-center text-comic-purple hover:text-comic-darkPurple transition-colors font-semibold mb-4"
        >
          <Book className="w-4 h-4 mr-2" />
          {isExpanded ? 'Hide Story' : 'Read Full Story'}
          {isExpanded ? 
            <ChevronUp className="w-4 h-4 ml-2" /> : 
            <ChevronDown className="w-4 h-4 ml-2" />
          }
        </button>

        {isExpanded && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">Full Story</h4>
            <div className="prose prose-sm max-w-none dark:prose-invert">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
