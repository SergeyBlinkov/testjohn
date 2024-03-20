"use client"
import React, {useState} from 'react';
import header_style from './Header.module.css';
import {usePathname, useRouter} from "next/navigation";
import menu_logo from './sources/menu.png';
import x_cross from './sources/close.png';
import LoginPanel from "@/features/LoginPanel/LoginPanel";
import PinkButton from "@/shared/PinkButton/PinkButton";



const Header = () => {
    const [openMenu,setOpenMenu] = useState<boolean>(false)
    const loc = usePathname()
    const pathname = loc?.split("/")[1]

    const router = useRouter()
    const changeState = () => setOpenMenu(prev => !prev)
    const activeColor = {color:"#FF6464"}
    return (
        <div className={header_style.Header}>
            <div className={header_style.Header_loginPanel}><PinkButton text={"Login"} handleClick={() => router.push('/login')}/></div>
            <div className={header_style.Header_mobile}>
                <img src={menu_logo.src} alt={'menu'} onClick={changeState}/>
                <section className={header_style.Header_mobile__links} style={openMenu ? {marginLeft:0}: {}}>
                    <a href="/works" style={pathname === 'works' ? activeColor : {}}>Works</a>
                    <a href="/blog" style={pathname === 'blog' ? activeColor : {}}>Blog</a>
                    <a href="/" style={pathname === 'contact' ? activeColor : {}}>Contact</a>
                    <img src={x_cross.src} alt={'close'} onClick={changeState}/>
                    <div className={header_style.Header_mobile__loginPanel}><LoginPanel /></div>
                </section>
            </div>
            <div className={header_style.Header__links}>
            <a href="/works" style={pathname === 'works' ? activeColor : {}}>Works</a>
            <a href="/blog" style={pathname === 'blog' ? activeColor : {}}>Blog</a>
            <a href="/" style={pathname === 'contact' ? activeColor : {}}>Contact</a>
            </div>
        </div>
    );
};


export default Header;