import React from 'react';

export default function({ children, ...props }) {
    return (
        <form block="form" {...props}>{children}</form>
    );
}
