import React, { PropTypes } from 'react';

export default function Heading({ children, type, ...props }) {
    const HeadingTag = type;

    return (
        <HeadingTag block="heading" mods={{ ...props.mods, type }}>
            {children}
        </HeadingTag>
    );
}

Heading.defaultProps = {
    type: 'h1'
};

Heading.propTypes = {
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6'
    ])
};
