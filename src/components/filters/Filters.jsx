import React, { useState, Fragment, useRef } from 'react';
import './Filters.css';
import Icon from "../iconComponent/Icon";
import Modal from '../modal/Modal';

const Filters = () => {
    const [ active, setActive ] = useState(false);
    const filterButton = useRef();

    const toggle = () => {
        setActive(!active);
    }

    return (
        <Fragment>
            <button className="filters" ref={filterButton}>
                <Icon name="filter" ></Icon>
            </button>

            <Modal active={active} toggle={toggle}>
                <h1>Hello World</h1>
            </Modal>
        </Fragment>
    )
}

export default Filters;