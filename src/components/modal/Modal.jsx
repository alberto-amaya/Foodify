import React from 'react';
import './Modal.css';

import Portal from '../portal/Portal';

/*
    Documentation about this component.
    In the component where you are going to use the Modal component, copy and paste this code:
    
    const [ active, setActive ] = useState(false);

    const toggle = () => {
        setActive(!active);
    }

    And add to the button that activates the Modal, this event:

    onClick={toggle}

    Good, and finally you add these properties to the Modal component: 

    <Modal active={active} toggle={toggle} title="Here is the title of your modal" height="Here is the height of your modal">
        <p>Here is the content of your modal.</p>
    </Modal>
*/

class Modal extends React.Component {
    render() {
        const { children, toggle, active, title, height } = this.props;

        return (
            <Portal>
                {active && (
                    <div className="wrapper">
                        <div className="window" style={{
                            height: height + 'px',
                        }}>
                            <div className="window-header">
                                <button className="closeBtn" onClick={toggle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#282828" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </button>
                                <h1>{title}</h1>
                                <hr />
                            </div>
                            <div>{children}</div>
                        </div>
                    </div>
                )}
            </Portal>
        )
    }
}

export default Modal;