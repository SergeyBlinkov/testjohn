import React from 'react';
import FW_S from './FeaturedWorks.module.css'
import firstProject from './sources/1.png';
import secondProject from './sources/2.png';
import thirdProject from './sources/3.png';

type TWorksData = {
    title:string,
    date:string,
    about:string,
    text:string,
    img:string
}

const WorksData:TWorksData[] = [
    {
        title:"Designing Dashboards",
        date:"2020",
        about:"Dashboard",
        text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img:firstProject.src
    },
    {
        title:"Vibrant Portraits of 2020",
        date:"2018",
        about:"Illustration",
        text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img:secondProject.src
    },
    {
        title:"36 Days of Malayalam type",
        date:"2018",
        about:"Typography",
        text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img:thirdProject.src
    }]

const WorkComponent = ({item} : { item:TWorksData }) => {
    const {title,about,img,text,date} = item
    return <section className={FW_S.WorkComponent}>
        <img src={img} alt={"work"}/>
        <section className={FW_S.WorkComponent_info}>
            <h3>{title}</h3>
            <div>
                <span>{date}</span>
                <span>{about}</span>
            </div>
            <p>{text}</p>
        </section>
    </section>
}


const FeaturedWorks = (limit?:number) => {
    return (
        <div className={FW_S.FeaturedWorks}>
            <h3>Featured works</h3>
            <div className={FW_S.FeaturedWorks_body}>
                {WorksData.map((item,index) => <WorkComponent key={index} item={item}/>)}
            </div>
        </div>
    );
};

export default FeaturedWorks;