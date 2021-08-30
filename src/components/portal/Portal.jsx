import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.querySelector('#portal');

const Portal = (props) => {
    const el = document.createElement('div');

    useEffect(() => {
        portalRoot.appendChild(el);
        return () => {
            portalRoot.removeChild(el);
        };
    }, []);

    return (
        ReactDOM.createPortal(props.children, el)
    );
}

export default Portal;