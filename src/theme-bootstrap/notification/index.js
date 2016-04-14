import React, { PropTypes } from 'react';

export default function Notification({ children, ...props }) {
    return (
        <div block="notification" mods={{ ...props.mods, type: props.type || false }} {...props}>
            {children}
        </div>
    );
}

Notification.propTypes = {
    type: PropTypes.oneOf([
        'success',
        'info',
        'warning',
        'error'
    ])
};
