"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const skills = [
    { name: "JavaScript / Typescript", level: 90 },
    { name: "React", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "MySQL / MongoDB", level: 75 },
    { name: "Next.js", level: 60 },
    { name: "Node.js", level: 60 }
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center px-6 py-12">
      {/* About Text */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" data-aos="fade-up">
        Technical Skills
      </h2>
      <p
        className="max-w-2xl text-white text-center mb-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Below is a selection of my technical skills — not a complete list, but a solid representation of the tools, technologies. These showcase my ability to build efficient web applications.
      </p>

      {/* Resume Download Button */}
      <a
        href="/Resume.pdf"
        download
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Download Resume
      </a>

      {/* Skills Section */}
      <div className="w-full max-w-2xl space-y-6">
        {skills.map((skill, index) => (
          <div key={index} data-aos="fade-right" data-aos-delay={index * 100}>
            <div className="flex justify-between mb-1 text-white">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
