import React from "react";
import bann1 from "../assets/banner__1.webp";
import bann2 from "../assets/banner__2.webp";

export default function Banner() {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-150 transition-transform"
            src={bann1}
            alt="banner"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            className="hover:scale-150 transition-transform"
            src={bann2}
            alt="banner"
          />
        </div>
      </div>
    </div>
  );
}
