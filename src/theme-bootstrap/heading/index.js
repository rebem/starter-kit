import { PropTypes } from 'react';
import { BEM } from 'rebem';

export default function Heading({ children, type, ...props }) {
    return BEM({
        ...props,
        tag: type,
        block: 'heading',
        mods: {
            ...props.mods,
            type
        }
    }, children);
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
