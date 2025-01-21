import React from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from 'react-icons/ai';

export default function ProductCard({ img, name, price }) {
  return (
    <div className=" border-gray-200  hover:scale-105 border-2 hover:border-green-500 transition-transform rounded-lg relative">
      {/* Product Image */}
      <img src={img} alt={name} className="rounded-t-lg w-full object-cover" />

      {/* Product Details */}
      <div className="space-y-2 relative p-4">
        {/* Rating */}
        <div className="text-yellow-400 flex gap-1 text-[20px]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>

        {/* Name and Price */}
        <h3 className="font-medium text-lg">{name}</h3>
        <h3 className="text-2xl font-medium text-red-600">{price}</h3>

        {/* Add to Cart Button */}
        <div className="absolute -top-4 right-2 bg-blue-500 text-white text-[24px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
}
