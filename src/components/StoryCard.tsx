
import { Link } from "react-router-dom";
import { Story } from "../data/stories";

interface StoryCardProps {
  story: Story;
  featured?: boolean;
}

const StoryCard: React.FC<StoryCardProps> = ({ story, featured = false }) => {
  return (
    <Link to={`/read/${story.id}`} className={`comic-card block ${featured ? 'md:flex' : ''} bg-white dark:bg-comic-darkBg rounded-lg overflow-hidden shadow-lg`}>      
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
        <div className="flex justify-start">
          <span className="inline-flex items-center text-comic-purple hover:text-comic-darkPurple transition-colors font-semibold">
            Read Now
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
