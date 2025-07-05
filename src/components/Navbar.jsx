// src/components/Navbar.js
import { FiGrid } from "react-icons/fi";

const Navbar = ({ refs, scrollToSection, activeSection }) => {

    // Updated and re-ordered nav links for better flow
    const navLinks = [
        { name: 'Home', ref: refs.Home },
        { name: 'Services', ref: refs.Services },
        { name: 'Projects', ref: refs.Projects },
        { name: 'About', ref: refs.About },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between bg-slate-900 border border-gray-700 rounded-full px-4 sm:px-6 py-2">

                    <div className="flex items-center">
                        <FiGrid className="text-teal-300 text-3xl" />
                    </div>

                    <ul className="hidden md:flex items-center space-x-2">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <button
                                    onClick={() => scrollToSection(link.ref)}
                                    // THE DYNAMIC UPDATE: Now compares against the activeSection state
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeSection === link.name
                                            ? 'bg-teal-300 text-black' // Active state
                                            : 'text-white hover:bg-white/10' // Default state
                                        }`}
                                >
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button
                        onClick={() => scrollToSection(refs.Contact)}
                        className="bg-teal-300 text-black font-bold text-sm py-2 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                    >
                        Contact Me
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;