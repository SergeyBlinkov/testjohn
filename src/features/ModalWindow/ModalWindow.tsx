"use client"
import React, {useRef} from 'react';
import styles from './ModalWindow.module.css';
import PinkButton from "@/shared/PinkButton/PinkButton";
import {useAppDispatch, useAppSelector} from "@/app/redux/ReduxStore";
import MyLogo from "@/shared/MyLogo/MyLogo";
import {closeLogin, closeRegistration} from "@/app/redux/userRedux/UserStore"



const ModalWindow = () => {
    const user = useAppSelector(state => state.userReducer)
    const dispatch = useAppDispatch()
    const modalRef= useRef<HTMLDivElement | null>(null)
    const isRegistered = user.isRegistered
    const isLogged = user.isLogged
    const handleClose = () => {
        if(isRegistered) {
            dispatch(closeRegistration())
        }
        if(isLogged) {
            dispatch(closeLogin())
        }
    }

    console.log(user)
    return (isRegistered || isLogged) && <div className={styles.background_modal} ref={modalRef}>
        <div className={styles.ModalWindow}>
            <MyLogo />
            {isRegistered ? <h4>You successfully registration on my website</h4> :
            <h4>Your successfully login to my website</h4>}
            <div className={styles.ModalWindow_button}>
                <PinkButton text={"Закрыть"} handleClick={handleClose}/></div>
        </div>
        </div>
};

export default ModalWindow;