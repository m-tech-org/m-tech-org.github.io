import React, { useState, useEffect, useRef } from 'react';

const Process: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const steps = [
        { number: "1", title: "Discovery & Planning", description: "Understanding your needs and planning the solution", icon: "🔍" },
        { number: "2", title: "Design & Prototyping", description: "Creating wireframes and prototypes for validation", icon: "🎨" },
        { number: "3", title: "Development", description: "Agile development with regular progress updates", icon: "💻" },
        { number: "4", title: "Testing", description: "Comprehensive quality assurance and testing", icon: "🧪" },
        { number: "5", title: "Deployment", description: "Smooth deployment and launch management", icon: " 🚀" },
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="process" className="py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-purple-900 mb-4">
            <span className={`inline-block transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Our Development Process
            </span>
                    </h2>
                    <p className={`text-xl text-purple-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        Transparent, agile methodology ensuring quality and timely delivery
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Process Steps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`
                  bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-lg border border-purple-100 text-center 
                  hover:shadow-xl hover:scale-105 hover:border-purple-200 transition-all duration-500 cursor-pointer
                  transform-gpu
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                `}
                                style={{
                                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                                }}
                            >
                                <div className="relative mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto shadow-lg">
                                        {step.number}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center text-white text-sm animate-pulse">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-purple-900 mb-3">{step.title}</h3>
                                <p className="text-purple-600">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Animated Process Flow */}
                    <div className={`
            bg-gradient-to-r from-purple-50 to-accent-50 p-8 rounded-xl border border-purple-100 
            transition-all duration-1000
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}>
                        <h3 className="text-2xl font-semibold text-purple-900 mb-8 text-center">
                            Agile Methodology Flow
                        </h3>

                        {/* Desktop Process Flow */}
                        <div className="hidden md:flex justify-center items-center space-x-2 lg:space-x-4 mb-8">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <div className="text-center flex flex-col items-center">
                                        <div className={`
                      bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 rounded-lg font-semibold 
                      min-w-[140px] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300
                      transform-gpu
                      ${isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
                    `}
                                             style={{
                                                 transitionDelay: isVisible ? `${index * 150 + 600}ms` : '0ms'
                                             }}
                                        >
                                            <div className="text-xs opacity-80 mb-1">Step {step.number}</div>
                                            <div>{step.title.split(' ')[0]}</div>
                                        </div>
                                        <div className="w-3 h-3 bg-accent-400 rounded-full mt-4 animate-bounce"></div>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className={`
                      flex items-center text-purple-600 font-bold text-xl
                      transition-all duration-500
                      ${isVisible ? 'opacity-100' : 'opacity-0'}
                    `}
                                             style={{
                                                 transitionDelay: isVisible ? `${index * 150 + 675}ms` : '0ms'
                                             }}
                                        >
                                            <svg
                                                className="w-6 h-6 animate-pulse"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Mobile Process Flow */}
                        <div className="md:hidden space-y-4">
                            {steps.map((step, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className={`
                    bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 rounded-lg font-semibold 
                    min-w-[120px] text-center shadow-lg flex-shrink-0
                    transform-gpu transition-all duration-500
                    ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}
                  `}
                                         style={{
                                             transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                                         }}
                                    >
                                        <div className="text-xs opacity-80 mb-1">Step {step.number}</div>
                                        <div>{step.title.split(' ')[0]}</div>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className="flex-1 flex justify-center">
                                            <svg
                                                className="w-4 h-4 text-purple-600 animate-pulse"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-purple-600 font-medium">Process Flow</span>
                                <span className="text-sm text-purple-600 font-medium">100% Complete</span>
                            </div>
                            <div className="w-full bg-purple-200 rounded-full h-2">
                                <div
                                    className={`
                    bg-gradient-to-r from-accent-400 to-purple-600 h-2 rounded-full transition-all duration-2000 ease-out
                    ${isVisible ? 'w-full' : 'w-0'}
                  `}
                                    style={{
                                        transitionDelay: isVisible ? '1200ms' : '0ms'
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Animated Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                            {[
                                { icon: "⚡", text: "Rapid Iterations" },
                                { icon: "🔄", text: "Continuous Feedback" },
                                { icon: "🎯", text: "Quality Focused" }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className={`
                    flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-purple-100
                    transform-gpu transition-all duration-500 hover:scale-105
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}
                  `}
                                    style={{
                                        transitionDelay: isVisible ? `${index * 200 + 1400}ms` : '0ms'
                                    }}
                                >
                                    <span className="text-xl">{feature.icon}</span>
                                    <span className="text-purple-700 font-medium text-sm">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={`
            text-center mt-12
            transition-all duration-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
                         style={{
                             transitionDelay: isVisible ? '2000ms' : '0ms'
                         }}
                    >
                        <p className="text-lg text-purple-600 mb-4">
                            Ready to start your agile development journey?
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            Start Your Project
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;