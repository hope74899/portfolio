// src/components/About.js
import { FaLightbulb } from "react-icons/fa"; // Using an icon to represent ideas/impact

// The list of skills from your resume
const skillsList = [
    "JavaScript", "React.js", "Node.js", "Express.js",
    "MongoDB", "Tailwind CSS", "HTML", "CSS",
    "Git & GitHub"
];

const About = () => {
    return (
        // Main Background: bg-slate-800
        <section className="bg-slate-800 py-4 md:py-20">
            <div className="container mx-auto px-6">

                {/* Main Heading styled consistently with other sections */}
                <div className="text-center mb-16">
                    {/* Major Heading: text-white with Primary Accent for the span */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        About <span className="text-teal-300">Me</span>
                    </h2>
                </div>

                {/* Content Block: Centered and with constrained width for readability */}
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    {/* Paragraphs & Descriptions: text-gray-300 */}
                    <p className="text-gray-300 text-lg leading-relaxed">
                        As a MERN stack developer, I have hands-on experience in building and deploying responsive web applications. I specialize in translating Figma designs into pixel-perfect, reusable components and developing secure RESTful APIs.
                    </p>

                    {/* Highlighted Paragraph, inspired by the design */}
                    <div className="flex items-center justify-center gap-4 pt-4">
                        {/* Primary Accent for the icon */}
                        <FaLightbulb className="text-teal-300 text-3xl" />
                        {/* Paragraph text with a slight emphasis */}
                        <p className="text-gray-300 text-lg italic">
                            I am eager to leverage strong problem-solving skills to contribute to a dynamic engineering team and build impactful software.
                        </p>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20">
                    {/* Card & Component Title: text-white */}
                    <h3 className="text-3xl font-bold text-white text-center mb-8">My Skills</h3>
                    {/* A flexible, wrapping grid for the skills tags */}
                    <div className="flex flex-wrap justify-center gap-3">
                        {skillsList.map((skill, index) => (
                            // Each skill tag is styled like a small "Card/Panel"
                            <div key={index} className="bg-slate-900 border border-gray-700 rounded-lg px-4 py-2 text-gray-300 font-semibold">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;