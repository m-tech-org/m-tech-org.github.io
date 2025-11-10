import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b border-purple-100">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <img
                            src="/logo_mini.svg"
                            alt="M-Tech Logo"
                            className="w-10 h-10"
                        />
                        <span className="text-xl font-bold text-purple-800">M-Tech</span>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#services" className="text-purple-600 hover:text-purple-800 transition-colors font-medium">Services</a>
                        <a href="#technologies" className="text-purple-600 hover:text-purple-800 transition-colors font-medium">Technologies</a>
                        <a href="#process" className="text-purple-600 hover:text-purple-800 transition-colors font-medium">Process</a>
                        <a href="#contact" className="text-purple-600 hover:text-purple-800 transition-colors font-medium">Contact</a>
                    </nav>

                    <a
                        href="#contact"
                        className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-purple-900 transition-all shadow-lg font-medium"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;