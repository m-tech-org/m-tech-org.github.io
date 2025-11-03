import React, {useState} from 'react';
import GlobalConstants from "../../constants/GlobalConstants.tsx";
import GlassModal from "../common/GlassModal.tsx";

const COMPANY_DETAILS = {
    name: GlobalConstants.COMPANY_NAME,
    address: GlobalConstants.COMPANY_ADDRESS,
    phone: GlobalConstants.COMPANY_CONTACT_NO,
    email: GlobalConstants.COMPANY_MAIL_ID,
};

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
            {React.createElement('div', {style: {display: 'flex', gap: 12}},
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

            <GlassModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                companyDetails={COMPANY_DETAILS}
            />
        </>
    );
}