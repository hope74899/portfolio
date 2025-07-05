// src/components/Hero.js
import { FaLinkedin, FaGithub, FaFileDownload, FaArrowDown } from "react-icons/fa";

// This component now perfectly adheres to the established style guide.
const Hero = ({ refs, scrollToSection }) => {
    return (
        // Main Background: bg-slate-800 - CORRECT
        <section
            className="relative min-h-screen flex items-center overflow-hidden bg-slate-800"
            style={{
                background: `radial-gradient(circle at 85% 50%, rgba(94, 234, 212, 0.08) 0%, #1e293b 40%)`,
            }}
        >
            <div className="container mx-auto px-6 z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="flex flex-col gap-y-2 text-center md:text-left">
                        {/* Subtitles & Helper Text: text-gray-400 - CORRECT */}
                        <p className="font-bold text-sm uppercase tracking-widest text-gray-400 flex items-center justify-center md:justify-start gap-2">
                            WELCOME TO MY WORLD
                            {/* Primary Accent: text-teal-300 - CORRECT */}
                            <span className="text-teal-300 text-lg">+</span>
                        </p>
                        {/* Major Headings: text-white - CORRECT */}
                        <h1 className="text-3xl md:text-4xl  font-bold text-white">
                            Hi, I'm <span className="text-2xl font-normal">Rashid</span>
                        </h1>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                            {/* Primary Accent: text-teal-300 - CORRECT */}
                            <span className="text-teal-300">MERN </span>Dev
                        </h2>
                        {/* Paragraphs & Descriptions: text-gray-300 - CORRECT */}
                        <p className="text-gray-300 max-w-lg mx-auto md:mx-0">
                            Passionate web developer. I create intuitive and visually appealing digital experiences that bring ideas to life with seamless functionality.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-4">
                            {/* Primary Button: Style guide rules followed - CORRECT */}
                            <button
                                onClick={() => scrollToSection(refs.Projects)}
                                className="w-full sm:w-auto bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-lg"
                            >
                                My Projects
                            </button>
                            {/* Secondary Button: Style guide rules followed - CORRECT */}
                            <a
                                href="/rashid_cv.pdf"
                                download
                                className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                            >
                                <FaFileDownload />
                                Download CV
                            </a>
                        </div>

                        {/* Social Media Icon / Circle: Style guide rules followed - CORRECT */}
                        <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
                            <a href="https://www.linkedin.com/in/muhammad-rashid-0785a9244/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-slate-900 border-2 border-gray-700 rounded-full text-white hover:border-teal-300 hover:text-teal-300 transition-all duration-300">
                                <FaLinkedin size={20} />
                            </a>
                            <a href="https://github.com/hope74899" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-slate-900 border-2 border-gray-700 rounded-full text-white hover:border-teal-300 hover:text-teal-300 transition-all duration-300">
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Right Image Content */}
                    <div className="hidden md:flex justify-center">
                        <img
                            src="/profile2.png"
                            alt="Rashid, Web Developer"
                            className="max-w-md w-full animate-levitate"
                        />
                    </div>
                </div>
            </div>

            {/* Scroll Down Arrow (Treated as a Social Media Icon / Circle) */}
            <button
                onClick={() => scrollToSection(refs.Services)}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
            >
                {/* THE ONLY CORRECTION IS IN THE LINE BELOW */}
                <div className="w-12 h-12 bg-slate-900 border-2 border-gray-700 rounded-full flex items-center justify-center text-gray-400 hover:border-teal-300 hover:text-teal-300 transition-all duration-300">
                    <FaArrowDown />
                </div>
            </button>
        </section>
    );
};

export default Hero;