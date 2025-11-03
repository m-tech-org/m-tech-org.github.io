import React from 'react';


// A basic Glassmorphism style modal component
class GlassModal extends React.Component<{ isOpen: any, onClose: any, companyDetails: any }> {
    render() {
        let {isOpen, onClose, companyDetails} = this.props;
        if (!isOpen) return null;

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
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(4px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
            }}>
                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    borderRadius: '15px',
                    padding: '30px',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    color: '#fff',
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

                    {/* Mapped Details for Mobile Stacking */}
                    {detailItems.map((item) => (
                        React.createElement('div',
                            {
                                key: item.label,
                                style: {
                                    padding: '10px 0',
                                    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column', // Stack label and value
                                    textAlign: 'left',
                                    gap: '4px'
                                }
                            },
                            React.createElement('strong', null, item.label + ':'),

                            // Conditional rendering based on type for actionable links
                            item.type === 'email' ? (
                                React.createElement('a',
                                    {
                                        href: `mailto:${item.value}`,
                                        style: {color: '#fff', textDecoration: 'underline', fontSize: '1.1rem'}
                                    },
                                    item.value
                                )
                            ) : item.type === 'phone' ? (
                                React.createElement('a',
                                    {
                                        href: `tel:${item.value.replace(/\s/g, '')}`, // Use tel: for direct dialing
                                        style: {color: '#fff', textDecoration: 'underline', fontSize: '1.1rem'}
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
}

export default GlassModal;