import React from 'react';
import styles from '@/styles/Project.module.css';
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import {TWorksData, WorkComponent} from "@/features/FeaturedWorks/FeaturedWorks";
import firstProject from '@/features/FeaturedWorks/sources/5.png';
import secondProject from '@/features/FeaturedWorks/sources/6.png';
import secondProject2 from '@/features/FeaturedWorks/sources/7.png';


const WorkData:TWorksData[] = [{
    title:"Designing Dashboards with usability in mind",
    date:"2020",
    about:"Dashboard, User Experience Design",
    text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    img:firstProject.src
},
    {
        title:"Heading 1",
        second_title:"Heading 2",
        date:"2020",
        about:"Dashboard",
        text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img:secondProject.src
    }]

const Project = () => {
    return (
        <div className={styles.Project}>
            <Header />
            <main className={styles.Project_main}>
                <WorkComponent item={WorkData[0]} big_picture={true}  pinkMark={true}/>
                <WorkComponent item={WorkData[1]} big_picture={true} withMark={false} secondHeader={WorkData[1].second_title} severalImages={[secondProject2.src]}/>
            </main>
            <Footer />
        </div>
    );
};

export default Project;