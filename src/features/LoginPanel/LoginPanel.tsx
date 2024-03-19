import React from 'react';
import styles from './LoginPanel.module.css';
import PinkButton from "@/shared/PinkButton/PinkButton";

const LoginPanel = () => {
    return (
        <div className={styles.LoginPanel}>
            <PinkButton text={"Sign in"}/>
            <PinkButton buttonType={"secondary"} text={"Sign up"} />
        </div>
    );
};

export default LoginPanel;