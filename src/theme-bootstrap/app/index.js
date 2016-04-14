import React from 'react';

export default function App({ children, ...props }) {
    return (
        <div block="app" {...props}>{children}</div>
    );
}
