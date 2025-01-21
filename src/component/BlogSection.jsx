import React from "react";
import post1 from "../assets/post__1.webp";
import post2 from "../assets/post__2.webp";
import post3 from "../assets/post__3.webp";
import BlogCard from "./BlogCard.jsx";

const data = [
    {
        img: post1,
        title: "Healthy Food Healthy Life",
        date: "Jan 21 2023",
        comment: 6,
    },
    {
        img: post2,
        title: "Healthy Food Healthy Life",
        date: "Jan 22 2023",
        comment: 9,
    },
    {
        img: post3,
        title: "Healthy Food Healthy Life",
        date: "Jan 23 2023",
        comment: 11,
    },
];

export default function BlogSection() {
    return (
        <div className="container pt-16">
            <h2 className="font-bold text-2xl">Latest News</h2>
            <p className="text-gray-500">
                Present the posts in a best way to highlight interesting moments of your blog
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
                {data.map((el, index) => (
                    <BlogCard
                        img={el.img}
                        title={el.title}
                        date={el.date}
                        comment={el.comment}
                    />
                ))}
            </div>
        </div>
    );
}
