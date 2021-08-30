import React from 'react';
import "./Icon.css";
import "external-svg-loader";

const path = process.env.PUBLIC_URL.concat("/assets/icons/");

 const Icon = ({name, width, height, stroke, fill, onClick}) => {
    return (
        <div className="icon" onClick={onClick}>
            <svg
            data-src={`${path}${name}.svg`}
            fill="currentColor"
            width={width}
            height={height}
            style={{
               color:fill,
               stroke
            }}
            >
            </svg>
        </div>
    )
};


Icon.defaultProps={
    width:"1.6em",
    height:"1.6em",
    stroke:"#fff",
    fill:"transparent"
}

export default Icon;
