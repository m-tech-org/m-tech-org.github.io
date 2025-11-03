import React from "react";

class AnimatedLogo extends React.Component<{ logoSrc: any, logoName: any }> {
    render() {
        let {logoSrc, logoName} = this.props;

        return React.createElement(React.Fragment, null,
            React.createElement('a', { /*onClick: handleOpenModal,*/ href: '#contact'},
                React.createElement('img', {
                    src: logoSrc,
                    alt: logoName,
                    style: {
                        height: 120,
                        width: 120,
                        display: 'block',
                        margin: '0 auto',
                        objectFit: 'contain',
                        cursor: 'pointer',
                        animation: 'pulse-shine',
                    }
                }))
        );
    }
}


export default AnimatedLogo;