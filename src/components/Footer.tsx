
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-comic-darkBg text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold font-title">
              <span className="text-comic-purple">G</span>amer
              <span className="text-comic-softOrange">D</span>ream
              <span className="text-comic-softBlue">C</span>omics
            </Link>
            <p className="mt-2 text-gray-300 max-w-md">
              A collection of original comic stories about gaming, alternate realities, and extraordinary powers.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            <div>
              <h4 className="text-lg font-semibold mb-3">Navigation</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-comic-purple transition-colors">Home</Link></li>
                <li><Link to="/stories" className="text-gray-300 hover:text-comic-purple transition-colors">Stories</Link></li>
                <li><Link to="/characters" className="text-gray-300 hover:text-comic-purple transition-colors">Characters</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-comic-purple transition-colors">About the Author</a></li>
                <li><a href="#" className="text-gray-300 hover:text-comic-purple transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GamerDreamComics. All stories by Jashan Bansal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
