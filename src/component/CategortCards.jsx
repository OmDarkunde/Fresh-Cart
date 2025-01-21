import React from "react";

export default function CategoryCards({ img, name, count }) {
  return (
    <div className="category-card flex items-center p-4  rounded-lg hover:shadow-lg transform transition-all duration-300 hover:scale-105 border-3 hover:border-green-300 m-4">
      <img src={img} alt={name} className="w-20 h-20 mr-4 rounded-lg" />
      <div>
        <h3 className="font-semibold text-xl text-gray-800">{name}</h3>
        <p className="text-gray-600">{count}</p>
      </div>
    </div>
  );
}
