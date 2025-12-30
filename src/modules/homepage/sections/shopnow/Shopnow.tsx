import Image from "next/image";
import React from "react";
import Brand from "./Brand";
const stats = [
  {
    id: 1,
    value: "200+",
    label: "International Brands",
  },
  {
    id: 2,
    value: "2,000+",
    label: "High-Quality Products",
  },
  {
    id: 3,
    value: "30,000+",
    label: "Happy Customers",
  },
];

const Shopnow = () => {
  return (
    <>
      <div className="bg-(--grey-light-shade) grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-0.5 lg:px-20">
        <div className="flex justify-center items-center px-2 pt-4 md:px-6 md:pt-6 lg:pt-0 lg:px-0">
          <div className="space-y-6">
            <h1 className="text-left font-extrabold text-3xl lg:text-5xl">
              FIND CLOTHES <br />
              THAT MATCHES <br />
              YOUR STYLE
            </h1>
            <p className="text-(--grey-light-shade2) font-normal text-[14px] lg:text-[16px]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="bg-(--black) font-light text-(--white) rounded-full py-3 px-10 text-[16px] cursor-pointer">
              Shop Now
            </button>

            <div className="flex items-start justify-start">
              {stats.map((item, index) => (
                <div
                  key={item.id}
                  className={` px-2 md:px-6 ${
                    index == 0 ? "pl-0" : ""
                  }  text-start   ${
                    index !== stats.length - 1 ? "border-r border-gray-300" : ""
                  }`}
                >
                  <p className="text-[16px] md:text-xl lg:text-3xl font-medium text-black leading-tight">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs md:text-sm text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cloth-bg"></div>
      </div>
      <Brand/>
    </>
  );
};

export default Shopnow;
