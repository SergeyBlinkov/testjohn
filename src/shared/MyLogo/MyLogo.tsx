import React from 'react';
import S_MyLogo from './MyLogo.module.css';
import JohnPic from './John.png';
const MyLogo = () => {
    return (
        <div className={S_MyLogo.MyLogo}>
            <img src={JohnPic.src} alt={'John'} width={243}/>
        </div>
    );
};

export default MyLogo;