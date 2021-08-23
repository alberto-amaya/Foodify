import React from 'react';
import "./Icon.css";
import "external-svg-loader";

const path = process.env.PUBLIC_URL.concat("/assets/icons/");

 const Icon = ({name, alt}) => {
    return (
        <div className="icon">
            
        <svg
        data-src={`${path}${name}.svg`}
        fill="currentColor"
        width="2.3em"
        height="2.3em"
        style={{
          color: "var(--bg-secundary)"
        }}
        >
        </svg>
        </div>
    )
};


export default Icon;
