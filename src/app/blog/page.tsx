import React from 'react';
import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";
import styles from '@/styles/blog.module.css';
import {Post, TPostData} from "@/features/RecentPosts/RecentPosts";

const blogData:TPostData = {
    title:"UI Interactions of the week",
    about: "Express, Handlebars",
    date: "12 Feb 2019",
    text:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
}
const Blog = () => {
    return (
        <div className={styles.Blog}>
            <Header />
            <main>
                <h2>Blog</h2>
                <div className={styles.Blog_body}>
                    {Array.from(Array(4)).map((_,index) => (
                        <Post key={index} item={blogData} border={true} transparentAbout={true}/>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blog;