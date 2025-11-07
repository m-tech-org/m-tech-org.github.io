import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 to-white">
            <div className="container mx-auto px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <img
                        src="/logo_mini.svg"
                        alt="M-Tech Logo"
                        className="w-24 h-24 mx-auto mb-8"
                    />
                    <h1 className="text-5xl md:text-6xl font-bold text-purple-900 mb-6">
                        M-Tech
                    </h1>
                    <p className="text-2xl md:text-3xl text-purple-700 mb-8 font-semibold">
                        Engineering Tomorrow. Automating Today.
                    </p>
                    <p className="text-xl text-purple-600 mb-12 max-w-2xl mx-auto">
                        Your dedicated technology partner for robust, tailored software solutions that transform vision into reality across the digital landscape.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg"
                        >
                            Start Your Project
                        </a>
                        <a
                            href="#services"
                            className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
                        >
                            Our Services
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">50+</div>
                            <div className="text-purple-600">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">100%</div>
                            <div className="text-purple-600">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">24/7</div>
                            <div className="text-purple-600">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600">2021</div>
                            <div className="text-purple-600">Established</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;