
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { User, Mail, Linkedin, MessageSquare } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <section className="py-12 text-center">
            <div className="flex justify-center mb-6">
              <User className="h-16 w-16 text-comic-purple" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-comic-darkPurple dark:text-comic-purple">
              About the Author
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Meet Jashan Bansal, the creative mind behind Life Could Be A Dream
            </p>
          </section>

          {/* Author Bio */}
          <section className="bg-white dark:bg-comic-darkBg rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Jashan Bansal</h2>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Jashan Bansal is a storyteller who explores the intersection of human nature, power, and society through compelling narratives. 
                His work in "Life Could Be A Dream" delves into complex themes of manipulation, decentralization, and the various forms of expertise 
                that shape our world.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Through his stories, Jashan examines how different types of warriors and experts navigate a world where traditional power 
                structures are challenged. His characters represent various forms of manipulation and expertise, from technological prowess 
                to psychological insight, all working toward themes of decentralization and individual empowerment.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Each story in the collection offers a unique perspective on how specialized knowledge and skills can be used to overcome 
                systemic challenges and create meaningful change in society.
              </p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white dark:bg-comic-darkBg rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/jashan-bansal-02309b317?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BibA3z7p7SXSHMiLSicKQ5A%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <Linkedin className="h-12 w-12 text-comic-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Connect professionally and follow my journey
                </p>
              </a>

              {/* Tellonym */}
              <a 
                href="https://tellonym.me/hail_athiesm_atom"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <MessageSquare className="h-12 w-12 text-comic-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Tellonym</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  Send anonymous messages and feedback
                </p>
              </a>

              {/* Email */}
              <a 
                href="mailto:cec235008.aids.cec@cgc.edu.in"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <Mail className="h-12 w-12 text-comic-purple mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                  cec235008.aids.cec@cgc.edu.in
                </p>
              </a>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
