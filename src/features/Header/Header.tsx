"use client"
import React from 'react';
import header_style from './Header.module.css';
import {usePathname} from "next/navigation";

const Header = () => {
    const loc = usePathname()
    const pathname = loc?.slice(1)

    const activeColor = {color:"#FF6464"}
    return (
        <div className={header_style.Header}>
            <a href="/works" style={pathname === 'works' ? activeColor : {}}>Works</a>
            <a href="/blog" style={pathname === 'blog' ? activeColor : {}}>Blog</a>
            <a href="/" style={pathname === 'contact' ? activeColor : {}}>Contact</a>
        </div>
    );
};

export default Header;