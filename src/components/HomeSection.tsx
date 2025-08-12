"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function HomeSection() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center text-center lg:text-left bg-black px-4 py-8 lg:py-0">
      {/* Profile Image Section */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={350}
          height={350}
          className="rounded-full shadow-lg w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[350px] lg:h-[350px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold mb-4">
          Hi, I&apos;m{" "}&nbsp;
          <span className="inline-block text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            <Typewriter
              options={{
                strings: [" Anil Sharma"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-white mb-4 font-semibold">
          Software Developer
        </p>


        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-3xl mx-auto lg:mx-0">
          I&apos;m a passionate MERN stack developer with a strong foundation in building modern, responsive web applications.
          I enjoy solving complex problems through Data Structures &amp; Algorithms, blending logic with creativity.
          My expertise spans frontend and backend development, ensuring seamless and efficient solutions.
          I thrive on learning new technologies and applying them to real-world projects.
          With a balance of web development skills and DSA problem-solving abilities, I aim to craft impactful digital experiences.
        </p>
      </div>
    </div>
  );
}