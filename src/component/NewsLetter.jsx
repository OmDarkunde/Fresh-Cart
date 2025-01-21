import React from "react";
import { LuMailOpen } from "react-icons/lu";

export default function NewsLetter() {
  return (
    <div className="bg-accentDark mt-16">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-centre gap-4 text-white">
        <div className="flex flex-shrink-0 item-center gap-4">
          <LuMailOpen className="text-[60px]" />
          <div>
            <h3 className="text-xl sm:text-2xl fint-semibold">
              Sign up To Our Newssletter
            </h3>
            <p>... and reveice ₹200 coupen for first shopping</p>
          </div>
        </div>

        <div className="w-full max-w-[500px] relative">
          <input
            className="py-4 px-6 w-full rounded-full"
            type="text"
            placeholder="Your Email Adress"
          />

          <button className="bg-accentDark absolute top-[20%] right-2 traslate-y-[-50%] py-2 px-10 rounded-full hover:bg-accent"> Subscribe</button>
        </div>
      </div>
    </div>
  );
}
