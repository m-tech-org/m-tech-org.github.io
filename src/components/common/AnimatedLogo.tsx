import React from "react";

const AnimatedLogo = ({logoSrc, logoName}) => {

    return React.createElement(React.Fragment, null,
        React.createElement('a', { /*onClick: handleOpenModal,*/ href: '/'},
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
            }))
    );
}


export default AnimatedLogo;