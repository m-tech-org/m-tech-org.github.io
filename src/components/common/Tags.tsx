import React from 'react';

class Tags extends React.Component<{ tags: any }> {
    render() {
        let {tags} = this.props;
        // 1. Check if tags prop is provided and is a string
        if (!tags || typeof tags !== 'string') {
            return null;
        }

        // 2. Split the string by comma, trim whitespace from each tag, and filter out any empty entries
        const tagArray = tags
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag.length > 0);

        // 3. Define the style object for an individual tag
        const tagStyle = {
            padding: '6px 10px',
            borderRadius: 20,
            background: 'rgba(73,32,121,0.1)',
            fontSize: 12,
            color: '#492079',
            fontWeight: 600,
            // Ensure no flex-shrink so long tags don't shrink too much
            flexShrink: 0,
        };

        // 4. Define the style object for the container (the original 'div' wrapper)
        const containerStyle = {
            display: 'flex',
            flexDirection: 'row', // Default for desktop
            gap: 8,
            justifyContent: 'center',
            marginTop: 16,
            // Added overflow for mobile scrolling if tags exceed screen width
            overflowX: 'auto',
            paddingBottom: '4px', // Space for shadow/scroll indicator
        };

        // 5. Map the array to React elements
        return React.createElement('div', {style: containerStyle},
            tagArray.map((tag, index) => (
                React.createElement('div', {key: index, style: tagStyle}, tag)
            ))
        );
    }
}

export default Tags;