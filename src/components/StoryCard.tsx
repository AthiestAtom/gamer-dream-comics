
import { useState } from "react";
import { Link } from "react-router-dom";
import { Story } from "../data/stories";
import { ChevronDown, ChevronUp, Book, ExternalLink, Sparkles, Zap } from "lucide-react";

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
    <div className={`glass-card card-hover relative overflow-hidden ${featured ? 'md:flex col-span-full' : ''} rounded-xl shadow-2xl fade-in-stagger`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-pink-600/20 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      
      <div className={`relative z-10 p-8 ${featured ? 'md:w-full' : ''}`}>
        {featured && (
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 text-sm font-bold rounded-full mb-4 neon-glow">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Story
          </div>
        )}
        
        <h3 className={`${featured ? 'text-4xl' : 'text-2xl'} font-bold mb-3 cyberpunk-text`}>
          {story.title}
        </h3>
        
        <p className="text-cyan-300 mb-4 text-sm flex items-center">
          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 pulse-intense"></span>
          By {story.author} • Published {story.published}
        </p>
        
        <p className={`text-gray-300 mb-6 leading-relaxed ${featured ? 'text-lg' : ''}`}>
          {story.summary}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/read/${story.id}`}
            className="btn-futuristic flex items-center justify-center group"
          >
            <Book className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            Read Full Story
            <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button
            onClick={toggleExpanded}
            className="relative px-6 py-3 bg-gradient-to-r from-purple-600/80 to-cyan-600/80 text-white font-semibold rounded-lg border border-purple-500/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group backdrop-blur-sm"
          >
            <Zap className="w-4 h-4 mr-2 group-hover:text-yellow-400 transition-colors" />
            {isExpanded ? 'Hide Preview' : 'Show Preview'}
            {isExpanded ? 
              <ChevronUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" /> : 
              <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            }
          </button>
        </div>

        {isExpanded && (
          <div className="mt-8 glass-card rounded-lg border border-cyan-500/30 slide-in-up">
            <div className="p-6 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
              <h4 className="text-xl font-semibold mb-4 text-cyan-400 flex items-center">
                <Book className="w-5 h-5 mr-2" />
                Story Preview
              </h4>
              <div className="space-y-4">
                {story.content.split('\n\n').slice(0, 3).map((paragraph, index) => (
                  <p key={index} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="pt-4 border-t border-cyan-500/30">
                  <p className="text-cyan-400 font-semibold italic flex items-center">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Continue reading the full story...
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StoryCard;
