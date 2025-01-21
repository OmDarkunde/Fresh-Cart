import React from "react";
import feature1 from "../assets/feature__1.webp";
import ProductCard from "./ProductCart.jsx";

import Prod1 from "../assets/product__1.webp";
import Prod2 from "../assets/product__2.webp";
import Prod3 from "../assets/product__3.webp";
import Prod4 from "../assets/product__4.webp";


const data = [
  { id: 0, img: Prod1, name: "Kiwi", price: "₹70" },
  { id: 1, img: Prod2, name: "Dried mango", price: "₹256" },
  { id: 2, img: Prod3, name: "Musli", price: "₹100" },
  { id: 3, img: Prod4, name: "Dates", price: "₹120" },
 
];

export default function FeatureSectionFruit() {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-bold text-2xl">Fruits & Vegetables</h3>
          <p className="text-gray-500 mt-2">
            Buy Farm Fresh Fruits & Vegetables online at the lowest prices
          </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0 ml-auto">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">Vegetables</button>
          <button className="text-gray-600 hover:text-accent">
            Bread & Bakery
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-7">
        <div >
          <img
            className="w-full h-full object-cover rounded-lg"
            src={feature1}
            alt="Fruits and Vegetables Banner"
          />
        </div>
        {data.map((el) => (
          <ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />
        ))}
      </div>
    </div>
  );
}
