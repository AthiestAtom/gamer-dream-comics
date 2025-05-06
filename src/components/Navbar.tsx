
import { Link } from "react-router-dom";
import { Book, Users } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-comic-darkBg text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold font-title flex items-center">
            <span className="text-comic-purple mr-1">G</span>amer
            <span className="text-comic-softOrange mx-1">D</span>ream
            <span className="text-comic-softBlue ml-1">C</span>omics
          </Link>
        </div>
        
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className="flex items-center hover:text-comic-purple transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/stories" 
            className="flex items-center hover:text-comic-purple transition-colors"
          >
            <Book className="mr-1 h-4 w-4" />
            Stories
          </Link>
          <Link 
            to="/characters" 
            className="flex items-center hover:text-comic-purple transition-colors"
          >
            <Users className="mr-1 h-4 w-4" />
            Characters
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
