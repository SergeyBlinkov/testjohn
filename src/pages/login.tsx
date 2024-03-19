import React, {ChangeEvent, useState} from 'react';
import styles from './styles/login.module.css';
import CustomInput from "@/shared/CustomInput/CustomInput";
import MyLogo from "@/shared/MyLogo/MyLogo";
import LoginPanel from "@/features/LoginPanel/LoginPanel";
const Login = () => {
    const [inputData,setInputData] = useState({email:"",password:""})
    console.log(inputData)
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setInputData(prev => ({...prev,[name]:value}))
    }
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
            <CustomInput label={'Email'} onChange={handleChange} type={'email'} name={'email'}/>
            <CustomInput label={'Password'} onChange={handleChange} type={'password'} name={'password'}/>
            <LoginPanel />
        </div>
    );
};

export default Login;