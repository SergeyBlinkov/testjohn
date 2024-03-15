import React from 'react';
import RP_Style  from './RecentPosts.module.css';

export type TPostData = {
    title:string,
    date:string,
    about:string,
    text:string
}
const postData:TPostData[] = [
    {
        title:"Making a design system from scratch",
        date:"12 Feb 2020",
        about:"Design,Pattern",
        text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    },
    {
        title:"Creating pixel perfect icons in Figma",
        date:"12 Feb 2020",
        about:"Figma, Icon Design",
        text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
    }
]



export const Post = ({item,border,transparentAbout}:{item:TPostData,border?:boolean, transparentAbout?:boolean}) => {
    const isBorder = {
        borderBottom:'1px solid #E0E0E0'
    }
    const isTransparentAbout = {
        color: "#E0E0E0"
    }
    return (
        <table className={RP_Style.Post} style={border ? isBorder : {}}>
            <thead>
            <tr><th>{item.title}</th></tr>
            </thead>
            <tbody>
            <tr>
                <td>{item.date}</td>
                <td>|</td>
                <td style={transparentAbout ? isTransparentAbout : {}}>{item.about}</td>
            </tr>

            </tbody>
            <caption>{item.text}</caption>
        </table>)
}


const RecentPosts = () => {
    return (
        <div className={RP_Style.RP_Style}>
            <section className={RP_Style.RP_Style__head}>
            <h3>Recent Posts</h3>
                <a href={"/"}>View all</a>
            </section>
            <div className={RP_Style.RP_Style__body}>
            {postData.map((item) => (
                <Post item={item} key={item.title} />))}
            </div>
        </div>
    );
};

export default RecentPosts;