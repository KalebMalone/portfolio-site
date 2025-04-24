import React from 'react';

const Projects = () => {
    const projectList = [
        {
            name: 'Restaurant App',
            link: 'https://github.com/KalebMalone/Resturant',
            description: 'A restaurant app for ordering and menu management built with Flask and React.'
        },
        {
            name: 'The Parts Connection',
            link: 'https://github.com/KalebMalone/The-parts-connection',
            description: 'A car parts marketplace inspired by performancebyie.com, built with full CRUD features. And email h'
        },
        {
            name: 'Core Flow',
            link: 'https://github.com/KalebMalone/Core-Flow',
            description: 'A fitness tracker and registration system built in React and Flask.'
        },
        {
            name: 'E-Commerce Store (Team Project)',
            link: 'https://github.com/CaseyRayson1995/eCommerce-project',
            description: 'A collaborative project building an e-commerce platform with jewelry and clothing categories.'
        },
    ];

    return (
        <section className="p-6 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
            <div className="space-y-6">
                {projectList.map((project, index) => (
                    <div key={index} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl font-semibold text-blue-600 hover:text-blue-800"
                        >
                            🔗 {project.name}
                        </a>
                        <p className="mt-2 text-gray-700">{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
