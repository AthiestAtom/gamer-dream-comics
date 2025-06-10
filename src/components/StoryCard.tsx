
import { useState } from "react";
import { Link } from "react-router-dom";
import { Story } from "../data/stories";
import { ChevronDown, ChevronUp, Book, ExternalLink, Sparkles, Zap, Eye, Atom } from "lucide-react";

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
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-cyan-600/20 to-pink-600/20 opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"></div>
      
      <div className={`relative z-10 p-8 ${featured ? 'md:w-full' : ''}`}>
        {featured && (
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-3 text-sm font-bold rounded-full mb-6 neon-glow transform hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 mr-2 animate-spin" />
            Featured Story
            <Zap className="w-4 h-4 ml-2" />
          </div>
        )}
        
        <h3 className={`${featured ? 'text-4xl' : 'text-2xl'} font-bold mb-4 cyberpunk-text flex items-center`}>
          <Atom className="w-6 h-6 mr-3 text-cyan-400" />
          {story.title}
        </h3>
        
        <p className="text-cyan-300 mb-6 text-sm flex items-center">
          <span className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mr-3 pulse-intense"></span>
          By {story.author} • Published {story.published}
        </p>
        
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-lg border border-cyan-500/30 mb-6">
          <p className={`text-gray-300 leading-relaxed ${featured ? 'text-lg' : ''}`}>
            {story.summary}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/read/${story.id}`}
            className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradientShift 3s ease infinite'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Book className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform relative z-10" />
            <span className="relative z-10">Read Full Story</span>
            <ExternalLink className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
          </Link>
          
          <button
            onClick={toggleExpanded}
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600/80 via-indigo-600/80 to-cyan-600/80 text-white font-bold py-4 px-8 rounded-xl border border-purple-500/50 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <Eye className="w-5 h-5 mr-3 group-hover:text-yellow-400 transition-colors relative z-10" />
            <span className="relative z-10">{isExpanded ? 'Hide Preview' : 'Show Preview'}</span>
            {isExpanded ? 
              <ChevronUp className="w-5 h-5 ml-3 group-hover:-translate-y-1 transition-transform relative z-10" /> : 
              <ChevronDown className="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform relative z-10" />
            }
          </button>
        </div>

        {isExpanded && (
          <div className="mt-8 glass-card rounded-xl border border-cyan-500/30 slide-in-up overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
              <h4 className="text-2xl font-bold mb-6 cyberpunk-text flex items-center">
                <Book className="w-6 h-6 mr-3 text-cyan-400" />
                Story Preview
                <div className="ml-3 w-2 h-2 bg-cyan-400 rounded-full pulse-intense"></div>
              </h4>
              <div className="space-y-6">
                {story.content.split('\n\n').slice(0, 3).map((paragraph, index) => (
                  <div key={index} className="p-4 glass-card rounded-lg border border-purple-500/30">
                    <p className="text-gray-300 leading-relaxed">{paragraph}</p>
                  </div>
                ))}
                <div className="pt-6 border-t border-cyan-500/30 text-center">
                  <p className="text-cyan-400 font-bold text-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                    Continue reading the full story...
                    <Zap className="w-5 h-5 ml-2 text-yellow-400" />
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
