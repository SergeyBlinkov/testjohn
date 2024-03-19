import React from 'react';
import styles from './styles/works.module.css';
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import FeaturedWorks from "@/features/FeaturedWorks/FeaturedWorks";

const Works = () => {
    return (
        <div className={styles.WorksPage}>
            <Header />
            <main>
                <h2>Work</h2>
                <FeaturedWorks />
            </main>
            <Footer />
        </div>
    );
};

export default Works;