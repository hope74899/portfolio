// src/components/Contact.js
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa'; // Importing new, relevant icons

// A data-driven approach makes this component easy to update
const contactInfo = [
    {
        icon: <FaPhoneAlt />,
        title: 'Phone',
        info: '+92 3076332768',
        href: 'tel:+923076332768' // `tel:` makes it clickable on mobile
    },
    {
        icon: <FaEnvelope />,
        title: 'Email',
        info: 'm.rashid2768@gmail.com',
        href: 'mailto:m.rashid2768@gmail.com' // `mailto:` opens the user's email client
    },
    {
        icon: <FaLinkedin />,
        title: 'LinkedIn',
        info: 'muhammadrashiddev',
        href: 'https://www.linkedin.com/in/muhammadrashiddev/'
    }
];

// Reusable ContactCard component
const ContactCard = ({ icon, title, info, href }) => (
    // Card uses the "Standard Card" style from your guide
    <a href={href} target="_blank" rel="noopener noreferrer"
        className="block bg-slate-900 border-2 border-gray-700 rounded-2xl p-6 
                  transition-all duration-300 hover:border-teal-300 hover:-translate-y-2">
        <div className="flex items-center gap-4">
            {/* Icon styled as "Primary Accent" */}
            <div className="text-teal-300 text-3xl">
                {icon}
            </div>
            <div>
                {/* Title styled as "Card & Component Title" */}
                <h4 className="text-white font-bold text-lg">{title}</h4>
                {/* Info styled as "Paragraphs & Descriptions" */}
                <p className="text-gray-300">{info}</p>
            </div>
        </div>
    </a>
);


const Contact = () => {
    return (
        // Main Background: bg-slate-800 with the signature glow
        <section
            className="bg-slate-800 py-20 md:py-28"
            style={{ background: `radial-gradient(circle at 15% 50%, rgba(94, 234, 212, 0.08) 0%, #1e293b 30%)` }}
        >
            <div className="container mx-auto px-6">
                <div className="flex justify-center mb-16">
                    <div className="bg-slate-900 rounded-full px-6 py-2">
                        <h2 className="text-2xl font-bold text-white">Contact</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h3 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                            Let's Create Something <span className="text-teal-300">Amazing</span> Together
                        </h3>
                        <p className="text-gray-400 mt-4">Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
                    </div>

                    {/* Right Column: NOW displays contact info cards instead of a form */}
                    <div className="w-full space-y-6">
                        {contactInfo.map((item, index) => (
                            <ContactCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                info={item.info}
                                href={item.href}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;