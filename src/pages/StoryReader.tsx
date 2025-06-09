
import { useState, useParams, Link } from "react-router-dom";
import { stories } from "../data/stories";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, Book, Plus, Minus, Type } from "lucide-react";

const StoryReader = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const story = stories.find(s => s.id === storyId);
  const [fontSize, setFontSize] = useState(18); // Default font size in px

  const increaseFontSize = () => {
    if (fontSize < 24) setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) setFontSize(fontSize - 2);
  };

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-bold text-comic-purple mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
              Story Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              The story you're looking for doesn't exist or has been moved.
            </p>
            <Link 
              to="/stories" 
              className="bg-comic-purple hover:bg-comic-darkPurple text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg flex items-center justify-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            to="/stories" 
            className="inline-flex items-center text-comic-purple hover:text-comic-darkPurple transition-colors font-semibold mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stories
          </Link>

          {/* Story Header with Font Controls */}
          <div className="bg-white dark:bg-comic-darkBg rounded-lg shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Book className="h-8 w-8 text-comic-purple mr-3" />
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                  {story.title}
                </h1>
              </div>
              
              {/* Font Size Controls */}
              <div className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-2">
                <Type className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                <button
                  onClick={decreaseFontSize}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                  disabled={fontSize <= 12}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium px-2">{fontSize}px</span>
                <button
                  onClick={increaseFontSize}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                  disabled={fontSize >= 24}
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              By {story.author} • Published {story.published}
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Summary</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {story.summary}
              </p>
            </div>
          </div>

          {/* Story Content */}
          <div className="bg-white dark:bg-comic-darkBg rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Full Story</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p 
                  key={index} 
                  className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed"
                  style={{ fontSize: `${fontSize}px` }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoryReader;
