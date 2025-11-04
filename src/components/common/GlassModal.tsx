import React, {useState} from 'react';
import GlobalConstants from "../../constants/GlobalConstants.tsx";

const defaultStyle = {
    color: '#000000',
    textDecoration: 'none',
    fontSize: '1.1rem'
};

const hoverStyle = {
    ...defaultStyle,
    color: '#492079',
    fontWeight: 'bold',
};

const COMPANY_DETAILS = {
    name: GlobalConstants.COMPANY_NAME,
    address: GlobalConstants.COMPANY_ADDRESS,
    phone: GlobalConstants.COMPANY_CONTACT_NO,
    email: GlobalConstants.COMPANY_MAIL_ID,
};

const GlassModal = ({isOpen, onClose}) => {
    if (!isOpen) return null;

    const [isHovered, setIsHovered] = useState<boolean>(false);
    const companyDetails = COMPANY_DETAILS;

    const detailItems = [
        ...(companyDetails.name ? [{label: 'Company Name', value: companyDetails.name, type: 'text'}] : []),
        ...(companyDetails.address ? [{label: 'Address', value: companyDetails.address, type: 'text'}] : []),
        ...(companyDetails.email ? [{label: 'Contact Email', value: companyDetails.email, type: 'email'}] : []),
        ...(companyDetails.phone ? [{label: 'Contact No', value: companyDetails.phone, type: 'phone'}] : [])
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
        }}>
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(2px)',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                color: '#000000',
                maxWidth: '400px',
                width: '90%',
                position: 'relative',
                textAlign: 'left'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        background: 'transparent',
                        border: 'none',
                        fontSize: '1.5rem',
                        color: '#fff',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    &times;
                </button>

                <h2 style={{
                    textAlign: 'center',
                    borderBottom: '2px solid rgba(255, 255, 255, 0.5)',
                    paddingBottom: '10px',
                    marginBottom: '20px'
                }}>
                    Contact Details
                </h2>

                {detailItems.map((item) => (
                    React.createElement('div',
                        {
                            key: item.label,
                            style: {
                                padding: '10px 0',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                textAlign: 'left',
                                gap: '4px'
                            }
                        },
                        React.createElement('strong', null, item.label + ':'),

                        item.type === 'email' ? (
                            React.createElement('a',
                                {
                                    href: `mailto:${item.value}`,
                                    style: isHovered ? hoverStyle : defaultStyle,
                                    onMouseEnter: () => setIsHovered(true),
                                    onMouseLeave: () => setIsHovered(false)
                                },
                                item.value
                            )
                        ) : item.type === 'phone' ? (
                            React.createElement('a',
                                {
                                    href: `tel:${item.value.replace(/\s/g, '')}`,
                                    style: isHovered ? hoverStyle : defaultStyle,
                                    onMouseEnter: () => setIsHovered(true),
                                    onMouseLeave: () => setIsHovered(false)
                                },
                                item.value
                            )
                        ) : (
                            React.createElement('span', {style: {fontSize: '1.1rem'}}, item.value)
                        )
                    )
                ))}
            </div>
        </div>
    );
}

export default GlassModal;