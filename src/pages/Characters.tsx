
import { useState } from "react";
import { Link } from "react-router-dom";
import { characters } from "../data/characters";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-comic-darkPurple dark:text-comic-purple">
            Characters
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the extraordinary individuals from our stories
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Character Selection */}
          <div className="col-span-1 bg-white dark:bg-comic-darkBg rounded-lg shadow-lg p-6 h-fit">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Select a Character</h2>
            <div className="space-y-2">
              {characters.map(character => (
                <button
                  key={character.id}
                  onClick={() => setSelectedCharacter(character)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedCharacter.id === character.id 
                      ? 'bg-comic-purple text-white' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-200'
                  }`}
                >
                  {character.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Character Details */}
          <div className="col-span-1 lg:col-span-2 bg-white dark:bg-comic-darkBg rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="mb-4">
                <span className="inline-block bg-comic-purple text-white px-3 py-1 text-xs rounded-full mb-2">
                  {selectedCharacter.role}
                </span>
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{selectedCharacter.name}</h3>
              </div>
              
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-gray-700 dark:text-gray-300">{selectedCharacter.description}</p>
                
                <h4 className="text-xl font-bold mt-6 mb-3 text-gray-800 dark:text-white">Abilities</h4>
                <ul className="space-y-2">
                  {selectedCharacter.abilities.map((ability, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <span className="mr-2 text-comic-purple">•</span>
                      {ability}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Link 
                    to={`/read/${selectedCharacter.relatedStory}`} 
                    className="text-comic-purple hover:text-comic-darkPurple flex items-center font-semibold"
                  >
                    Read story featuring {selectedCharacter.name}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Characters;
