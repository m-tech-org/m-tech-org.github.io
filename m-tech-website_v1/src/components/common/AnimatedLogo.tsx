import React, { useState } from "react";
import ContactGlassModal from "./ContactGlassModal.tsx";

const AnimatedLogo = ({ logoSrc, logoName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <button
                onClick={handleOpenModal}
                className="block mx-auto cursor-pointer bg-transparent border-none p-0"
            >
                <img
                    src={logoSrc}
                    alt={logoName}
                    className="logo react animate-pulse-shine h-32 w-32 object-contain"
                />
            </button>

            <ContactGlassModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
};

export default AnimatedLogo;