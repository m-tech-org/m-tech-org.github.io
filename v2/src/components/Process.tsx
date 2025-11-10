import React, { useState, useEffect, useRef } from 'react';

const Process: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const steps = [
        { number: "1", title: "Discovery & Planning", description: "Understanding your needs and planning the solution", icon: "🔍" },
        { number: "2", title: "Design & Prototyping", description: "Creating wireframes and prototypes for validation", icon: "🎨" },
        { number: "3", title: "Development", description: "Agile development with regular progress updates", icon: "💻" },
        { number: "4", title: "Testing", description: "Comprehensive quality assurance and testing", icon: "🧪" },
        { number: "5", title: "Deployment", description: "Smooth deployment and launch management", icon: "🚀" },
        { number: "6", title: "Support & Maintenance", description: "Ongoing support and continuous improvement", icon: "🔧" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section id="process" className="py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-6">
                {/* ... header same as above ... */}

                {/* Simplified Process Flow */}
                <div className={`
          bg-gradient-to-r from-purple-50 to-accent-50 p-8 rounded-xl border border-purple-100 
          transition-all duration-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
                    <h3 className="text-2xl font-semibold text-purple-900 mb-8 text-center">
                        Agile Methodology Flow
                    </h3>

                    {/* Simple Desktop Flow */}
                    <div className="hidden md:flex justify-center items-center space-x-4 mb-8">
                        {steps.map((step, index) => (
                            <React.Fragment key={index}>
                                <div className={`
                  bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 rounded-lg font-semibold 
                  min-w-[140px] text-center shadow-lg transition-all duration-500
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                `}
                                     style={{
                                         transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                                     }}
                                >
                                    <div className="text-xs opacity-80 mb-1">Step {step.number}</div>
                                    <div className="text-sm">{step.title.split(' ')[0]}</div>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className={`
                    text-purple-600 font-bold text-xl transition-opacity duration-500
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                  `}
                                         style={{
                                             transitionDelay: isVisible ? `${index * 200 + 100}ms` : '0ms'
                                         }}
                                    >
                                        →
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Rest of the component remains similar but simplified */}
                </div>
            </div>
        </section>
    );
};

export default Process;