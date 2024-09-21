import React from 'react'

const Button = ({
    fontSize = "text-base",  
    textColor = "text-black",  
    bgColor = "bg-white", 
    fontWeight = "font-normal",  
    border = "border-none", 
    borderRadius = "rounded-none",  
    text = "Button",
    width="1",
    onClick, 

}) => {
    return (
        <button
            className={`${fontSize} ${textColor} ${bgColor} ${fontWeight} ${border} ${borderRadius} ${width} py-2 px-4`}
            onClick={onClick}
        >
            {text}
        </button>
    );
};
export default Button;