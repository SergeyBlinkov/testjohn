"use client"
import React, {ChangeEvent, useState} from 'react';
import styles from './LoginPanel.module.css';
import PinkButton from "@/shared/PinkButton/PinkButton";
import CustomInput from "@/shared/CustomInput/CustomInput";
import {createNewUser, loginUserThunk} from "@/app/redux/userRedux/ApiThunk";
import {useAppDispatch, useAppSelector} from "@/app/redux/ReduxStore";

import ModalWindow from "@/features/ModalWindow/ModalWindow";
import Loader from "@/shared/Loader/Loader";


const LoginPanel = () => {
    const [errors,setErrors] = useState<{ error: boolean, text: string }>({error:false,text:""})
    const PersonalData = useAppSelector(state =>state.userReducer)
    const [inputData,setInputData] = useState({email:"",password:""})
    const dispatch = useAppDispatch()

    const errorsHandler = ():boolean => {
        if(inputData.email.length === 0) {
            setErrors(() => ({
                error:true,
                text:"You should fill email field above"
            }))
            return false
        }
        if(inputData.password.length === 0) {
            setErrors(() => ({
                error:true,
                text:"You should fill password field above"
            }))
            return false
        }
        else {
            setErrors(() => ({
                error:false,
                text:""
            }))
            return true
        }
    }

    const handleClick = () => {

        return {
            login: () => {
                if(!errorsHandler()) {
                    return
                }
                if(PersonalData.user?.user) {
                    if(PersonalData.user.user.email !== inputData.email) {
                        return setErrors(() => ({
                            error:true,
                            text:"can't find current email address"
                        }))
                    }
                    if(PersonalData.user.user.password) {
                        setErrors(() => ({
                            error:false,
                            text:""
                        }))
                        return dispatch(loginUserThunk({...inputData,passwordCode:PersonalData.user?.user?.password}))
                    }
                }
                else {
                    setErrors(() => ({
                        error:true,
                        text:"You should Sign up"
                    }))
                }

            },
            registration: () => {
                if(!errorsHandler()) {
                    return
                }
                return dispatch(createNewUser(inputData))
            }
        }
    }
   const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setInputData(prev => ({...prev,[name]:value}))
    }
    return (
        <div className={styles.LoginPanel} >
            <ModalWindow />
            <CustomInput label={'Email'} onChange={handleChange} type={'email'} name={'email'}/>
            <CustomInput label={'Password'} onChange={handleChange} type={'password'} name={'password'}/>
            <div className={styles.LoginPanel_buttonGroup}>
                <div className={styles.LoginPanel_buttonGroup__buttons}>
            <PinkButton text={"Sign in"} handleClick={handleClick().login} />
            <PinkButton buttonType={"secondary"} text={"Sign up"} handleClick={handleClick().registration} />
                </div>
                <div className={styles.LoginPanel_buttonGroup__errorsBlock}>

                </div>
                {PersonalData.loading && <Loader/>}
                {errors.error && !PersonalData.errs && <span>{errors.text}</span>}
                {PersonalData.errs && <span>{PersonalData.errs}</span>}
            </div>
        </div>
    );
};

export default LoginPanel;