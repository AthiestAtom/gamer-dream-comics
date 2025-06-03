
import { stories } from "../data/stories";
import StoryCard from "../components/StoryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  console.log("Index component rendering");
  console.log("Stories loaded:", stories);
  // Get the featured story
  const featuredStory = stories.find(story => story.featured);
  console.log("Featured story:", featuredStory);
  
  // Get other stories
  const otherStories = stories.filter(story => !story.featured);
  console.log("Other stories count:", otherStories.length);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-comic-darkPurple dark:text-comic-purple animate-fade-in">
            Welcome to Life Could Be A Dream
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Original stories where warriors with expertise in different kinds of manipulation focus on decentralisation
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/stories" 
              className="bg-comic-purple hover:bg-comic-darkPurple text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
            >
              Browse Stories
            </Link>
            <Link 
              to="/characters" 
              className="bg-transparent border-2 border-comic-purple text-comic-purple hover:bg-comic-purple hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Meet Characters
            </Link>
          </div>
        </section>
        
        {/* Featured Story Section */}
        {featuredStory && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Featured Story</h2>
            <StoryCard story={featuredStory} featured={true} />
          </section>
        )}
        
        {/* Latest Stories Section */}
        {otherStories.length > 0 && (
          <section className="py-12">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">Latest Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherStories.map(story => (
                <StoryCard key={story.id} story={story} />
              ))}
              {otherStories.length === 0 && (
                <div className="col-span-full text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">More stories coming soon!</p>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* About Section */}
        <section className="py-12 bg-white dark:bg-comic-darkBg rounded-lg shadow-lg p-8 my-12">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">About Life Could Be A Dream</h2>
          <div className="prose prose-lg max-w-4xl mx-auto dark:prose-invert">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Life Could Be A Dream is a collection of original stories that blend gaming mechanics, politics, science fiction, drama and comedy with real-world scenarios. Written by Jashan Bansal, these stories explore what happens when different manipulation abilities manifest in reality.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Follow our characters as they navigate worlds where the line between virtual and real becomes increasingly blurred. Each story offers a unique perspective on how gaming skills and persistence can overcome seemingly impossible challenges.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
