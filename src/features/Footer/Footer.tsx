import React from 'react';
import styles from './Footer.module.css';
import fb from './sources/fb.png';
import twitter from './sources/twitter.png';
import inst from './sources/insta.png';
import linkedin from './sources/Linkedin.png';
const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <section className={styles.social}>
                <img src={fb.src} alt="fb"/>
                <img src={inst.src} alt="insta"/>
                <img src={twitter.src} alt="twitter"/>
                <img src={linkedin.src} alt="linkedin"/>
            </section>
            <p>Copyright ©2020 All rights reserved </p>
        </footer>
    );
};

export default Footer;