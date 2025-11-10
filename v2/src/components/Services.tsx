import React from 'react';

const Services: React.FC = () => {
    const services = [
        {
            icon: "🖥️",
            title: "Full-Stack Development",
            description: "Responsive web solutions and cross-platform desktop applications built with cutting-edge technologies.",
            features: ["Web Applications", "Desktop Apps", "Progressive Web Apps"]
        },
        {
            icon: "🔄",
            title: "Advanced Sync Solutions",
            description: "Seamless online/offline functionality with real-time data synchronization and conflict resolution.",
            features: ["Online/Offline Apps", "Real-time Sync", "Hybrid Cloud"]
        },
        {
            icon: "📱",
            title: "Specialized Solutions",
            description: "Tailored business management tools and scalable e-commerce platforms for your unique needs.",
            features: ["CRM & ERP Systems", "E-commerce", "API Integration"]
        }
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-purple-900 mb-4">Our Core Services</h2>
                    <p className="text-xl text-purple-600 max-w-2xl mx-auto">
                        Comprehensive software solutions tailored to drive your business forward
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-purple-100 hover:border-purple-200"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold text-purple-900 mb-4">{service.title}</h3>
                            <p className="text-purple-600 mb-6">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-purple-700">
                                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;