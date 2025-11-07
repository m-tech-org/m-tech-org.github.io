import React from 'react';

const Technologies: React.FC = () => {
    const techCategories = [
        {
            title: "Backend Development",
            technologies: [
                { name: "Java", color: "bg-gradient-to-r from-red-500 to-red-600" },
                { name: "Spring", color: "bg-gradient-to-r from-green-500 to-green-600" },
                { name: "PHP", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
                { name: "Laravel", color: "bg-gradient-to-r from-red-600 to-red-700" },
                { name: "Python", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                { name: "Django", color: "bg-gradient-to-r from-green-600 to-green-700" },
                { name: "Flask", color: "bg-gradient-to-r from-gray-800 to-gray-900" },
                { name: "Go", color: "bg-gradient-to-r from-cyan-500 to-cyan-600" },
                { name: "Node.js", color: "bg-gradient-to-r from-green-500 to-green-600" }
            ]
        },
        {
            title: "Frontend Development",
            technologies: [
                { name: "React", color: "bg-gradient-to-r from-blue-400 to-blue-500" },
                { name: "TypeScript", color: "bg-gradient-to-r from-blue-600 to-blue-700" },
                { name: "JavaScript", color: "bg-gradient-to-r from-yellow-400 to-yellow-500" },
                { name: "HTML5", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
                { name: "CSS3", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                { name: "Tailwind CSS", color: "bg-gradient-to-r from-cyan-400 to-cyan-500" }
            ]
        },
        {
            title: "Databases & Storage",
            technologies: [
                { name: "PostgreSQL", color: "bg-gradient-to-r from-blue-600 to-blue-700" },
                { name: "MySQL", color: "bg-gradient-to-r from-orange-500 to-orange-600" },
                { name: "MongoDB", color: "bg-gradient-to-r from-green-500 to-green-600" },
                { name: "Redis", color: "bg-gradient-to-r from-red-500 to-red-600" },
                { name: "SQLite", color: "bg-gradient-to-r from-blue-400 to-blue-500" }
            ]
        },
        {
            title: "DevOps & Infrastructure",
            technologies: [
                { name: "Docker", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
                { name: "AWS", color: "bg-gradient-to-r from-orange-400 to-orange-500" },
                { name: "GitHub Actions", color: "bg-gradient-to-r from-gray-800 to-gray-900" },
                { name: "Linux", color: "bg-gradient-to-r from-yellow-500 to-yellow-600" }
            ]
        }
    ];

    return (
        <section id="technologies" className="py-20 bg-gradient-to-br from-purple-50 to-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-purple-900 mb-4">Technology Excellence</h2>
                    <p className="text-xl text-purple-600 max-w-2xl mx-auto">
                        Leveraging cutting-edge technologies to build robust, scalable solutions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {techCategories.map((category, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-purple-100">
                            <h3 className="text-2xl font-semibold text-purple-900 mb-6">{category.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {category.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className={`${tech.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow`}
                                    >
                    {tech.name}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Technologies;