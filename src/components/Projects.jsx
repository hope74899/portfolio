// src/components/Projects.js

const projectsData = [
    {
        title: 'TrendHive E-Commerce',
        category: 'Full-Stack App',
        description: 'Tech: React, Node.js, Express, MongoDB, Stripe API, Tailwind CSS. A complete e-commerce platform with a persistent cart and admin dashboard.',
        imageUrl: '/project-trendhive.png',
        liveLink: 'https://trend-hive-two.vercel.app/',
    },
    {
        title: 'FreshFromTheField',
        category: 'Full-Stack App',
        description: 'Tech: React, Node.js, Express, MongoDB, JWT. An order management system with "Add to Cart" and a dedicated farmer dashboard.',
        imageUrl: '/project-fresh.png',
        liveLink: 'https://freshfromthefield.vercel.app/',
    },
    // {
    //     title: 'Future Project Title',
    //     category: 'Web App',
    //     // This project has a shorter description
    //     description: 'A concise description for a future amazing project.',
    //     imageUrl: '/project-placeholder.png', // Add a placeholder image
    //     liveLink: '#',
    // }
];

// Reusable ProjectCard component - Updated for uniform height
const ProjectCard = ({ title, category, description, imageUrl, liveLink }) => (
    <a href={liveLink} target="_blank" rel="noopener noreferrer" className="group block h-full">
        {/*
          THE FIX #1: Added `flex flex-col h-full`
          - `h-full` makes the card fill the entire height of its parent grid cell.
          - `flex flex-col` turns the card into a vertical flex container, allowing us to control how content grows.
        */}
        <div className="h-full flex flex-col bg-slate-900 border-2 border-gray-700 rounded-2xl
                        transition-all duration-300 hover:border-teal-300 hover:-translate-y-2 overflow-hidden">

            {/* Image Container (This part remains the same) */}
            <div className="overflow-hidden">
                <img src={imageUrl} alt={title} className="w-full h-56 object-cover object-top transform group-hover:scale-105 transition-transform duration-300" />
            </div>

            {/*
              THE FIX #2: Added `flex-grow`
              - This class tells the content area to "grow" and fill any available vertical space within the card.
            */}
            <div className="p-6 flex-grow">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">{title}</h3>
                    <span className="bg-teal-300 text-black text-xs font-bold px-3 py-1 rounded-full">{category}</span>
                </div>
                <p className="text-gray-300">{description}</p>
            </div>
        </div>
    </a>
);


// The main Projects component section
const Projects = () => {
    return (
        <section className="bg-slate-800 py-10 md:py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        My Recent <span className="text-teal-300">Projects</span>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Discover the projects that showcase my skills in development and problem-solving.
                    </p>
                </div>
                {/* The `grid` class by default will make items in a row equal height */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;