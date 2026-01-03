import Image from "next/image";
import React, { FC } from "react";
import { Product } from "../../types/Common";

type ProductSectionProps = {
  title: string;
  products: Product[];
};

const ProductItem:FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <div className="space-y-4 py-10 mx-4 lg:mx-20">
      <h2 className="font-extrabold text-[20px] lg:text-[40px] text-center">
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div key={item.id} className="w-full">
            <div className="relative bg-(--grey-shade1) rounded-xl px-2 flex items-center justify-center">
              <Image
                src={`/images/${item.image}`}
                alt={item.title}
                width={180}
                height={200}
                className="object-contain h-[200px]"
              />
            </div>

            <div className="mt-2 space-y-[0.2px]">
              <h3 className="text-[16px] font-bold text-black">{item.title}</h3>

              <div className="flex items-center gap-2 text-sm">
                <div className="flex text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(item.rating))}
                  {"☆".repeat(5 - Math.floor(item.rating))}
                </div>
                <span className="text-gray-500">{item.rating}/5</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-bold text-black">${item.price}</span>

                {item.oldPrice && (
                  <span className="text-gray-400 line-through">
                    ${item.oldPrice}
                  </span>
                )}

                {item.discount && (
                  <span className="text-xs bg-red-100 text-red-500 px-2 py-0.5 rounded-full">
                    {item.discount}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductItem;
