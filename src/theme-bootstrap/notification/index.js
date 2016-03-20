import { PropTypes } from 'react';
import { BEM } from 'rebem';

export default function Notification({ children, ...props }) {
    return BEM({
        ...props,
        block: 'notification',
        mods: {
            ...props.mods,
            type: props.type || false
        }
    }, children);
}

Notification.propTypes = {
    type: PropTypes.oneOf([
        'success',
        'info',
        'warning',
        'error'
    ])
};
