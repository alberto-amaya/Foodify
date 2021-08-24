import React from 'react';
import "./Icon.css";
import "external-svg-loader";

const path = process.env.PUBLIC_URL.concat("/assets/icons/");

 const Icon = ({name,width,height,color}) => {
    return (
        <div className="icon">
            
        <svg
        data-src={`${path}${name}.svg`}
        fill="currentColor"
        width={width}
        height={height}
        style={{
          color
        }}
        >
        </svg>
        </div>
    )
};


Icon.defaultProps={
    width:"2.3em",
    height:"2.3em",
    color:"#666"
}

export default Icon;
