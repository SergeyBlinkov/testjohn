import React from 'react';
import MyselfResume_head_styles from './MyselfResume_head.module.css';
import PinkButton from "@/shared/PinkButton/PinkButton";
import MyLogo from "@/shared/MyLogo/MyLogo";


const MyselfResumeHead = () => {
    return (
        <div className={MyselfResume_head_styles.MyselfResume_head}>
            <div className={MyselfResume_head_styles.MyLogo}><MyLogo /></div>
            <h2>Hi, I am John,<br/> Creative Technologist</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <PinkButton />
        </div>
    );
};

export default MyselfResumeHead;