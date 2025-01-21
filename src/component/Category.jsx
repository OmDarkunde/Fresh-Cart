import React from "react";
import CategoryCards from "./CategortCards";

import img1 from "../assets/category__1.webp";
import img2 from "../assets/category__2.webp";
import img3 from "../assets/category__3.webp";
import img4 from "../assets/category__4.webp";
import img5 from "../assets/category__5.webp";
import img6 from "../assets/category__6.webp";
import img7 from "../assets/category__7.webp";

const data = [
  {
    id: 0,
    name: "Fresh Fruits 1",
    count: "9 products",
    img: img1
  },
  {
    id: 1,
    name: "Fresh Veges 1",
    count: "6 Products",
    img: img2
  },
  {
    id: 2,
    name: "Fresh Meat",
    count: "15 KG ",
    img: img3
  },
  {
    id: 3,
    name: "Fresh Breads",
    count: "50 Products",
    img: img4
  },
  {
    id: 4,
    name: "Fresh Fish",
    count: "40 KG",
    img: img5
  },
  {
    id: 5,
    name: "Fresh Raw Eggs",
    count: "120 Products",
    img: img6
  },
  {
    id: 6,
    name: "Soda Cans",
    count: "50 Products",
    img: img7
  },
  {
    id: 0,
    name: "Fresh Fruits 2",
    count: "9 products",
    img: img1
  },
];

export default function Category() {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grp-4">
        {data.map((el) => (
          <CategoryCards
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
}
