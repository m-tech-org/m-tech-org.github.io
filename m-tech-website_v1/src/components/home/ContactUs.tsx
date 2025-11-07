import React, {useState} from 'react';
import ContactGlassModal from "../common/ContactGlassModal.tsx";

export default function ContactUsButton() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {React.createElement('div', {
                    className: 'animate-pulse-shine shadow-md react hover:animate-off',
                    style: {
                        display: 'flex', gap: 12
                    }
                },
                React.createElement('a',
                    {
                        onClick: handleOpenModal,
                        href: '#contact',
                        style: {
                            backgroundColor: '#1FB6FD',
                            color: '#fff',
                            borderRadius: 6,
                            padding: '8px 12px',
                            border: 'none',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            fontWeight: 600,
                            boxShadow: '0 4px 10px rgba(31, 182, 253, 0.3)'
                        }
                    },
                    'Contact Us'
                )
            )}

            <ContactGlassModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}