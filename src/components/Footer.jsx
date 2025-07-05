// src/components/Footer.js
import { FiGrid } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    // Re-usable data for clarity
    const socialLinks = [
        { href: "https://www.linkedin.com/in/muhammad-rashid-0785a9244/", icon: <FaLinkedin size={22} /> },
        { href: "https://github.com/hope74899", icon: <FaGithub size={22} /> },
    ];

    return (
        // Card/Panel Background: bg-slate-900 with a top border
        <footer className="bg-slate-900 border-t border-gray-700">
            <div className="container mx-auto px-6 py-8">

                {/* Main Flex Container */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Left Side: Logo and Brand Name */}
                    <div className="flex items-center gap-2">
                        <FiGrid className="text-teal-300 text-3xl" />
                        <span className="font-bold text-xl text-white">Rashid</span>
                    </div>

                    {/* Right Side: Social Media Links */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => (
                            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer"
                                className="text-gray-400 hover:text-teal-300 transition-colors duration-300">
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="my-3 border-gray-700" />

                {/* Bottom Bar: Copyright and Credits */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-400 mb-2 md:mb-0">© {new Date().getFullYear()} Rashid. All Rights Reserved.</p>
                    <p className="text-gray-400">
                        Built with <span className="font-semibold text-teal-300">React</span> & <span className="font-semibold text-teal-300">Tailwind CSS</span>.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;