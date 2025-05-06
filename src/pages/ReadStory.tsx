
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { stories } from "../data/stories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";

const ReadStory = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const [story, setStory] = useState(stories.find(s => s.id === storyId));
  const [fontSize, setFontSize] = useState(18);
  
  useEffect(() => {
    // Set the story based on the ID from the URL
    const foundStory = stories.find(s => s.id === storyId);
    setStory(foundStory);
    
    // Scroll to top when story changes
    window.scrollTo(0, 0);
  }, [storyId]);
  
  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Story not found</h2>
            <p className="mb-6">The story you're looking for doesn't exist or has been removed.</p>
            <Link to="/" className="text-comic-purple hover:text-comic-darkPurple">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Split the content into paragraphs
  const paragraphs = story.content.split('\n\n').filter(p => p.trim() !== '');
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/" className="text-comic-purple hover:text-comic-darkPurple flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          <div className="bg-white dark:bg-comic-darkBg rounded-lg shadow-xl overflow-hidden">
            {/* Story Content */}
            <div className="p-6 md:p-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">{story.title}</h1>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                <span>By {story.author}</span>
                <span className="mx-2">•</span>
                <span>{story.published}</span>
              </div>
              
              {/* Reading Controls */}
              <div className="flex items-center justify-end mb-6 space-x-4 text-sm">
                <span className="text-gray-700 dark:text-gray-300">Font Size:</span>
                <button 
                  onClick={() => setFontSize(prev => Math.max(14, prev - 2))}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  aria-label="Decrease font size"
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize(prev => Math.min(24, prev + 2))}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                  aria-label="Increase font size"
                >
                  A+
                </button>
              </div>
              
              {/* Story Summary */}
              <div className="mb-8 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border-l-4 border-comic-purple">
                <p className="italic text-gray-700 dark:text-gray-300">{story.summary}</p>
              </div>
              
              {/* Story Text */}
              <div className="story-text text-gray-800 dark:text-gray-200 space-y-6" style={{ fontSize: `${fontSize}px` }}>
                {paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              {/* Story Footer */}
              <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">End of "{story.title}" by {story.author}</p>
                <Link 
                  to="/characters" 
                  className="inline-block bg-comic-purple hover:bg-comic-darkPurple text-white font-bold py-2 px-6 rounded-lg transition-colors"
                >
                  Meet the Characters
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReadStory;
