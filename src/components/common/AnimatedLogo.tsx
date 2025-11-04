import React, {useState} from "react";
import GlassModal from "./GlassModal.tsx";

const AnimatedLogo = ({logoSrc, logoName}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return React.createElement(React.Fragment, null,
        React.createElement('a', {onClick: handleOpenModal, href: '#contact'},
            React.createElement('img', {
                src: logoSrc,
                alt: logoName,
                className: "logo react animate-pulse-shine",
                style: {
                    background: 'transparent',
                    height: 120,
                    width: 120,
                    display: 'block',
                    margin: '0 auto',
                    objectFit: 'contain',
                    cursor: 'pointer'
                }
            })),

        <GlassModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
        />
    );
}


export default AnimatedLogo;