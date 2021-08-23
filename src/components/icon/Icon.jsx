import React from 'react';
import "./Icon.css";

const path = process.env.PUBLIC_URL.concat("/assets/icons/");

 const Icon = ({name, alt}) => {
    return (
        <img className="icon" src={`${path}${name}.svg`} alt={alt}/>
    )
};


export default Icon;