"use client"
import React from 'react';
import S_PinkButton from './PinkButton.module.css';
import {useRouter} from "next/navigation";

type TPinkButton = {
    buttonType ?: "primary"|"secondary",
    text?: string,
    href?: string
    handleNavigate?:() => void
}

const PinkButton = ({buttonType = "primary",text}:TPinkButton) => {
    const route = useRouter()
    const handleLoadClass = () => {
        if(buttonType === 'primary') {
            return `${S_PinkButton.PinkButton} ${S_PinkButton.PinkButton__primary}`
        }
        if(buttonType === 'secondary') {
            return `${S_PinkButton.PinkButton} ${S_PinkButton.PinkButton__secondary}`
        }
    }

    return (
        <button className={handleLoadClass()} onClick={() =>route.push("/login")}>
            {text ? text : "Download Resume"}
        </button>
    );
};

export default PinkButton;