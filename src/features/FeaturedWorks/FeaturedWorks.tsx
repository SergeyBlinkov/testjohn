"use client"
import React from 'react';
import FW_S from './FeaturedWorks.module.css'
import firstProject from './sources/1.png';
import secondProject from './sources/2.png';
import thirdProject from './sources/3.png';
import fourthProject from './sources/4.png';
import Date_Mark from "@/shared/Date_Mark/Date_Mark";
import {useRouter} from "next/navigation";

export type TWorksData = {
    title:string,
    second_title?:string
    date:string,
    about:string,
    text:string,
    img:string,
}
type TWorksComponent = {
    item:TWorksData,
    big_picture?:boolean,
    secondHeader?:string,
    withMark?:boolean,
    pinkMark?:boolean,
    severalImages?:string[]
}
type TFeaturedWorks = {
    limit?:number
    title?:boolean
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
    },
    {
        title:"Components",
        date:"2018",
        about:"Components, Design",
        text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
        img:fourthProject.src
    }]

export const WorkComponent = ({item,big_picture,secondHeader,withMark = true,pinkMark,severalImages} : TWorksComponent) => {
    const {title,about,img,text,date} = item
    const router = useRouter()
    const handleClick = () => {
        if(big_picture) {
            return
        }
        else router.push('works/project')
    }
    const WorkClass = big_picture ? `${FW_S.WorkComponent} ${FW_S.WorkComponent_bigpicture} ` : FW_S.WorkComponent
    return <section className={WorkClass} onClick={handleClick}>
        <img src={img} alt={"work"}/>
        <section className={FW_S.WorkComponent_info}>
            <h4>{title}</h4>
            {secondHeader && <h5>{secondHeader}</h5>}
            {withMark && <Date_Mark date={date} about={about} pink={pinkMark}/>}
            <p>{text}</p>
        </section>
        <div className={FW_S.WorkComponent_bigpicture__imgBlock}>
            {severalImages?.map((pic,index) =>
                <img src={pic} alt={'ProjectPictures'} key={index}/>)}
        </div>
    </section>
}

const FeaturedWorks = ({limit,title}:TFeaturedWorks) => {
    return (
        <div className={FW_S.FeaturedWorks}>
            {title && <h3>Featured works</h3>}
            <div className={FW_S.FeaturedWorks_body}>
                {WorksData.map((item,index) => limit ? (index < limit) && <WorkComponent key={index} item={item}/> : <WorkComponent item={item} key={index} />)}
            </div>
        </div>
    );
};

export default FeaturedWorks;