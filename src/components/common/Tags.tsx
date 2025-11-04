import React from 'react';

const tagStyle = {
    padding: '6px 10px',
    borderRadius: 20,
    background: 'rgba(73,32,121,0.1)',
    fontSize: 12,
    color: '#492079',
    fontWeight: 600,
    flexShrink: 0,
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: 16,
    overflowX: 'auto',
    paddingBottom: '4px',
};

const Tags = ({tags}) => {
    if (!tags) {
        return null;
    }

    const tagArray = tags
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

    return React.createElement('div', {style: containerStyle},
        tagArray.map((tag, index) => (
            React.createElement('div', {key: index, style: tagStyle}, tag)
        ))
    );
}

export default Tags;