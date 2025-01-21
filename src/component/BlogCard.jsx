import React from "react";

// props section of the blogcard
export default function BlogCard({ img, title, comment, date }) {
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg hover:scale-105 transition-transform"
        src={img}
        alt="post"
      />
      <div className="text-accent font-medium">
        <span >{date}</span>
        <span>/ {comment} comment</span>
      </div>
      <h3 className="font-bold text-xl">{title}</h3>
    </div>
  );
}
