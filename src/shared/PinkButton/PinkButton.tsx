"use client"
import React from 'react';
import S_PinkButton from './PinkButton.module.css';

type TPinkButton = {
    buttonType ?: "primary"|"secondary",
    text?: string,
    href?: string
    handleClick?:() => void

}

const PinkButton = ({buttonType = "primary",text,handleClick}:TPinkButton) => {
    const handleLoadClass = () => {
        if(buttonType === 'primary') {
            return `${S_PinkButton.PinkButton} ${S_PinkButton.PinkButton__primary}`
        }
        if(buttonType === 'secondary') {
            return `${S_PinkButton.PinkButton} ${S_PinkButton.PinkButton__secondary}`
        }
    }

    return (
        <button className={handleLoadClass()} onClick={handleClick}>
            {text ? text : "Download Resume"}
        </button>
    );
};

export default PinkButton;