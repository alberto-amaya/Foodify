import React from 'react';
import Portal from '../portal/Portal';

const Modal = (props) => {
    const { children, toggle, active } = props;

    return (
        <Portal>
            {active && (
                <div style={styles.wrapper}>
                    <div style={styles.window}>
                        <button style={styles.closeBtn}>X</button>
                    </div>
                    <div>{children}</div>
                </div>
            )}
        </Portal>
    );
}

const styles = {
    wrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    window: {
        position: 'relative',
        background: '#FFF',
        borderRadius: 5,
        padding: 15,
        boxShadow: '2px 2px 10px rgba(0,0,0,0.3)',
        zIndex: 10,
        minWidth: 320,
    },
    closeBtn: {
        position: 'absolute',
        top: 0,
        right: 0,
    }
};

export default Modal;