import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci"; // icon
import { CiShoppingCart } from "react-icons/ci"; // icon
import CartCountBadge from "./cartCountBadge.jsx"; // the pop up thingh wiich shows the item in the cart

const Navbar = () => {
  return (
    <div className="container hidden lg:block">
      <div className=" flex justify-between items-center pt-8">
        <h1 className="  text-5xl font-bold  "> FreshCart</h1>
        <div className="relative w-full max-w-[500px]">
          <input
            className="bg-[#f2f3f5] border-none outline-none px-5 py-3 rounded-[30px] w-full"
            type="text"
            placeholder="search product"
          />
          <CiSearch
            className="absolute top-0 right-0 mt-2.5 mr-5 text-grey-500"
            size={30}
          />
        </div>
        <div className="flex gap-4 items-center">
          <div className="icon__wrapper">
            <CiUser size={30} />
          </div>
          <div className="icon__wrapper relative">
            <CiShoppingCart size={30} />
            <CartCountBadge size="w-[25px] h-[25px]" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Navbar;
