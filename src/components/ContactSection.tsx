import { FaLinkedin, FaGithub  } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function ContactSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-white bg-black">
      <div className="max-w-md w-full text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Contact Me
        </h2>
        
        <p className="text-gray-300 mb-8 text-base sm:text-lg leading-relaxed">
          Feel free to reach out via email or social media!
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://linkedin.com/in/anil---sharma" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transform hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-blue-400/10"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </a>
          
          <a 
            href="https://github.com/studentsharma" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-gray-400/10"
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </a>

          <a 
            href="https://leetcode.com/u/Anil_SHARMA_2003/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-gray-400/10"
            aria-label="GitHub Profile"
          >
            <SiLeetcode  size={32} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          </a>
        </div>  
        
        <a
          href="mailto:anilsharma.rns2003@gmail.com"
          className="inline-block w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 font-semibold text-sm sm:text-base"
        >
          Send Email
        </a>
      </div>
    </div>
  );
}