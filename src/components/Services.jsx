// src/components/Services.js
import { FaCode, FaCogs, FaCube, FaShareAlt, FaArrowRight } from "react-icons/fa";

// The data array, updated to include a standard icon for each service
const servicesData = [
    {
        icon: <FaCode />,
        title: "Web Development",
        description: "Create modern, responsive, and dynamic websites. From front-end to back-end, I deliver robust solutions using the MERN stack."
    },
    {
        icon: <FaCogs />,
        title: "Process Automation",
        description: "Automate repetitive tasks with tools like Make.com to streamline your workflow, extract data, and manage processes effortlessly."
    },
    {
        icon: <FaCube />,
        title: "Software Development",
        description: "Design and develop custom software solutions for your business. From desktop apps to scalable cloud-based software, I provide end-to-end services."
    },
    {
        icon: <FaShareAlt />,
        title: "Social Media Automation",
        description: "Schedule posts, monitor engagement, and manage platforms seamlessly. Boost your social media efficiency to focus on growing your audience."
    }
];

// This is the updated, reusable card component.
// It uses only default Tailwind classes from your original palette.
const ServiceCard = ({ icon, title, description }) => (
    <div className="group bg-slate-900 p-8 rounded-2xl border-2 border-gray-700 transition-all duration-300 hover:border-teal-300 hover:-translate-y-2">

        {/* Icon - Uses your accent color */}
        <div className="text-4xl text-teal-300 mb-4">
            {icon}
        </div>

        {/* Title - Set to white for strong readability on the dark card */}
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 mb-6">{description}</p>

        {/* Interactive "Learn More" Link */}
        <a href="#contact" className="text-gray-400 font-semibold flex items-center gap-2 group-hover:text-teal-300 transition-colors duration-300">
            Learn More
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
    </div>
);


// The main Services component with refined headings.
const Services = () => {
    return (
        // The section background uses your main 'slate-800' color
        <section className="bg-slate-800 py-4 md:py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        What I <span className="text-teal-300">Offer</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        I provide a range of services to turn your ideas into high-quality, functional products.
                    </p>
                </div>

                {/* The grid layout for the cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;