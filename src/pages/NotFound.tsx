
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-comic-darkPurple dark:text-comic-purple">
            404
          </h1>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          <Link 
            to="/" 
            className="bg-comic-purple hover:bg-comic-darkPurple text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg"
          >
            Return Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
