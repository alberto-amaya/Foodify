import React from 'react';
import "./Icon.css";
import "external-svg-loader";

const path = process.env.PUBLIC_URL.concat("/assets/icons/");

 const Icon = ({name, active}) => {
    return (
        <div className="icon">
            
        <svg
        data-src={`${path}${name}.svg`}
        fill="currentColor"
        width="2.3em"
        height="2.3em"
        style={{
          color: active ? "var(--bg-secundary)":"#666"
        }}
        >
        </svg>
        </div>
    )
};


export default Icon;
