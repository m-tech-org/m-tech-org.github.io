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
            {
                threshold: 0.1,
                rootMargin: '0px 0px -100px 0px'
            }
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
        <section id="process" className="py-12 md:py-20 bg-white" ref={sectionRef}>
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
                        Our Development Process
                    </h2>
                    <p className="text-lg md:text-xl text-purple-600 max-w-2xl mx-auto px-4">
                        Transparent, agile methodology ensuring quality and timely delivery
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    {/* Process Steps Grid - Responsive */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`
                  bg-gradient-to-br from-purple-50 to-white p-4 md:p-6 rounded-xl shadow-lg border border-purple-100 text-center 
                  hover:shadow-xl transition-all duration-500 cursor-pointer
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                                style={{
                                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
                                }}
                            >
                                <div className="relative mb-3 md:mb-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto shadow-lg">
                                        {step.number}
                                    </div>
                                    <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-accent-400 rounded-full flex items-center justify-center text-white text-xs md:text-sm">
                                        {step.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg md:text-xl font-semibold text-purple-900 mb-2 md:mb-3">{step.title}</h3>
                                <p className="text-purple-600 text-sm md:text-base">{step.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Animated Process Flow */}
                    <div className={`
            bg-gradient-to-r from-purple-50 to-accent-50 p-6 md:p-8 rounded-xl border border-purple-100 
            transition-all duration-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
                        <h3 className="text-xl md:text-2xl font-semibold text-purple-900 mb-6 md:mb-8 text-center">
                            Agile Methodology Flow
                        </h3>

                        {/* Desktop Process Flow */}
                        <div className="hidden lg:flex justify-center items-center space-x-2 xl:space-x-4 mb-6 md:mb-8 overflow-x-auto">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <div className="text-center flex flex-col items-center flex-shrink-0">
                                        <div className={`
                      bg-gradient-to-r from-purple-600 to-purple-800 text-white px-3 md:px-4 py-2 md:py-3 rounded-lg font-semibold 
                      min-w-[120px] md:min-w-[140px] shadow-lg transition-all duration-500
                      ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                    `}
                                             style={{
                                                 transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                                             }}
                                        >
                                            <div className="text-xs opacity-80 mb-1">Step {step.number}</div>
                                            <div className="text-sm">{step.title.split(' ')[0]}</div>
                                        </div>
                                        <div className={`w-2 h-2 md:w-3 md:h-3 bg-accent-400 rounded-full mt-2 md:mt-4 ${isVisible ? 'animate-bounce' : 'opacity-0'}`}></div>
                                    </div>

                                    {index < steps.length - 1 && (
                                        <div className={`
                      flex items-center text-purple-600 font-bold text-lg md:text-xl
                      transition-opacity duration-500 flex-shrink-0
                      ${isVisible ? 'opacity-100' : 'opacity-0'}
                    `}
                                             style={{
                                                 transitionDelay: isVisible ? `${index * 150 + 75}ms` : '0ms'
                                             }}
                                        >
                                            <svg
                                                className="w-5 h-5 md:w-6 md:h-6"
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

                        {/* Mobile Process Flow - FIXED */}
                        <div className="lg:hidden">
                            <div className="space-y-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="text-center">
                                        <div className={`
          bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-3 rounded-lg font-semibold 
          mx-auto max-w-xs shadow-lg transition-all duration-500
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
        `}
                                             style={{
                                                 transitionDelay: isVisible ? `${index * 200}ms` : '0ms'
                                             }}
                                        >
                                            <div className="text-xs opacity-80">Step {step.number}</div>
                                            <div className="text-sm">{step.title}</div>
                                        </div>
                                        {index < steps.length - 1 && (
                                            <div className="text-purple-600 py-2">
                                                ↓
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-6 md:mt-8">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-sm text-purple-600 font-medium">Process Flow</span>
                                <span className="text-sm text-purple-600 font-medium">
                  {isVisible ? '100% Complete' : '0% Complete'}
                </span>
                            </div>
                            <div className="w-full bg-purple-200 rounded-full h-2">
                                <div
                                    className={`
                    bg-gradient-to-r from-accent-400 to-purple-600 h-2 rounded-full transition-all duration-2000 ease-out
                    ${isVisible ? 'w-full' : 'w-0'}
                  `}
                                    style={{
                                        transitionDelay: isVisible ? '500ms' : '0ms'
                                    }}
                                ></div>
                            </div>
                        </div>

                        {/* Animated Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mt-6 md:mt-8">
                            {[
                                { icon: "⚡", text: "Rapid Iterations" },
                                { icon: "🔄", text: "Continuous Feedback" },
                                { icon: "🎯", text: "Quality Focused" }
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className={`
                    flex items-center justify-center space-x-2 p-3 bg-white rounded-lg shadow-sm border border-purple-100
                    transition-all duration-500 hover:scale-105
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                  `}
                                    style={{
                                        transitionDelay: isVisible ? `${index * 200 + 800}ms` : '0ms'
                                    }}
                                >
                                    <span className="text-lg md:text-xl">{feature.icon}</span>
                                    <span className="text-purple-700 font-medium text-xs md:text-sm text-center">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className={`
            text-center mt-8 md:mt-12
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
                         style={{
                             transitionDelay: isVisible ? '1000ms' : '0ms'
                         }}
                    >
                        <p className="text-base md:text-lg text-purple-600 mb-3 md:mb-4">
                            Ready to start your agile development journey?
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
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