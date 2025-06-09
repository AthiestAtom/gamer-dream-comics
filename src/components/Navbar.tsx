
import { Link, useLocation } from "react-router-dom";
import { Book, Users, User } from "lucide-react";

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? "text-comic-purple" : "hover:text-comic-purple transition-colors";
  };
  
  return (
    <nav className="bg-comic-darkBg text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/" className="text-2xl font-bold font-title flex items-center">
            <span className="text-comic-purple mr-1">L</span>ife
            <span className="text-comic-softOrange mx-1">C</span>ould
            <span className="text-comic-softBlue mx-1">B</span>e
            <span className="text-comic-purple ml-1">A</span> 
            <span className="text-comic-softBlue ml-1">D</span>ream
          </Link>
        </div>
        
        <div className="flex space-x-6">
          <Link 
            to="/" 
            className={`flex items-center ${isActive('/')}`}
          >
            Home
          </Link>
          <Link 
            to="/stories" 
            className={`flex items-center ${isActive('/stories')}`}
          >
            <Book className="mr-1 h-4 w-4" />
            Stories
          </Link>
          <Link 
            to="/characters" 
            className={`flex items-center ${isActive('/characters')}`}
          >
            <Users className="mr-1 h-4 w-4" />
            Characters
          </Link>
          <Link 
            to="/about" 
            className={`flex items-center ${isActive('/about')}`}
          >
            <User className="mr-1 h-4 w-4" />
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
