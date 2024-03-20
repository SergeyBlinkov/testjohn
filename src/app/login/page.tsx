import React from 'react';
import styles from '@/styles/login.module.css';
import MyLogo from "@/shared/MyLogo/MyLogo";
import LoginPanel from "@/features/LoginPanel/LoginPanel";

const Login = () => {

    return (
        <div className={styles.Login}>
            <h4>Login page</h4>
            <section className={styles.Login_head}>
                <div className={styles.Login_head__me}>
                    <MyLogo />
                    <p>Hello, i'm John and down there you can login to my website</p>
                </div>
                <div className={styles.Login_head__tips}>
                    <p>If you want to register a new account you should write your personal data in form below and then click "Sign Up"  </p>
                    <p>Also you if want login to my website make the same thing and then click "Sign In"</p>
                </div>
            </section>
            <LoginPanel />
        </div>
    );
};

export default Login;