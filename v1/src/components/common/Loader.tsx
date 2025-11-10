import React from 'react';

const Loader = () => {

    const LogoPath = './images/logo.svg';

    return (
        <>
            <div
                className="fixed inset-0 flex flex-col justify-center items-center bg-gray-50/95 z-50 transition-opacity duration-300"
                aria-live="polite"
                aria-label="Content is loading"
            >
                <div className="w-20 h-20 mb-4 logo-loader">
                    <img
                        src={LogoPath}
                        alt="Loading Logo"
                        className="w-full h-full animate-pulse"
                    />
                </div>
                <p className="text-lg font-medium text-blue-700 tracking-wider animate-pulse">
                    Loading...
                </p>
            </div>
        </>
    );
};

export default Loader;
