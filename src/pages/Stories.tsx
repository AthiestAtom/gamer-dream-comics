
import { stories } from "../data/stories";
import StoryCard from "../components/StoryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Book } from "lucide-react";

const Stories = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {stories.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
