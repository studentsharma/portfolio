import Image from 'next/image';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const projects = [
    {
      title: "E-Commerce Platform ( Anime3fits )",
      description: "Built an anime-themed e-commerce platform using the MERN stack with TypeScript, featuring secure authentication, a responsive product catalog, and a seamless cart experience. Optimized performance through efficient rendering and API calls.",
      techStack: ["React", "Node.js", "MongoDB", "TypeScrip", "Expres.js"],
      liveUrl: "https://anime3fits-tm59.vercel.app/",
      githubUrl: "https://github.com/studentsharma/anime3fits",
      img : "/curr.png"
    },
    {
      title: "Chat-app ( Chatty )",
      description: "Built a real-time messaging platform using the MERN stack and Socket.IO with instant communication, private chat rooms, and a mobile-friendly UI. Optimized server performance for smooth handling of concurrent users.",
      techStack: ["React.js", "JavaScript", "MongoDB", "Socket.io", "Expres.js"],
      liveUrl: "https://chatty-d3yn.onrender.com/",
      githubUrl: "https://github.com/studentsharma/chatty",
      img : "/chatty.png"
    },
    {
      title: "Disaster Management Platform",
      description: "Developed a disaster relief platform using the MERN stack with real-time location tracking, hospital mapping, and automated volunteer alerts. Designed a responsive, accessible UI to improve emergency response efficiency and coordination.",
      techStack: ["React.js", "Tailwind CSS", "OpenStreet API", "NodeMailer", "Express", "MongoDB"],
      liveUrl: "https://rescueus.onrender.com/",
      githubUrl: "https://github.com/studentsharma/Disaster-management",
      img : "/diaster.png"
    },
    {
      title: "Todo",
      description: "Developed a To-Do list app using React.js, allowing users to create, edit, and delete tasks. Implemented localStorage to persist data across sessions.",
      techStack: ["React.js"],
      liveUrl: "https://todo-g0ie.onrender.com/",
      githubUrl: "https://github.com/studentsharma/Todo",
      img : "/todo.png"
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my latest work showcasing modern web development techniques and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                data-aos={isEven ? "fade-left":"fade-right"}
                data-aos-delay="100"
                key={index}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer">
                    <div
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="block"
                    >
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex gap-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white">
                              View Live
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.githubUrl, '_blank');
                              }}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                            >
                              GitHub
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <div className="max-w-lg mx-auto lg:mx-0">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium rounded-full shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        View Live Demo
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-300 font-semibold rounded-lg hover:border-gray-400 hover:text-white transition-all duration-300 hover:shadow-md"
                      >
                        View Code
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}