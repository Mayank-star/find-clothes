"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import { Trash2, ArrowRight, Tag } from "lucide-react";

const DELIVERY_FEE = 15;
const DISCOUNT_RATE = 0.2;

const initialCart = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    size: "Large",
    color: "White",
    image: "/images/orangeShirt.svg",
    qty: 1,
  },
  {
    id: 2,
    name: "Checkered Shirt",
    price: 180,
    size: "Medium",
    color: "Red",
    image: "/images/Shirt.svg",
    qty: 1,
  },
  {
    id: 3,
    name: "Skinny Fit Jeans",
    price: 240,
    size: "Large",
    color: "Blue",
    image: "/images/jeans.svg",
    qty: 1,
  },
];

const AddPage = () => {
  const [cart, setCart] = useState(initialCart);

  const subtotal = useMemo(
    () => cart?.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const discount = Math.round(subtotal * DISCOUNT_RATE);
  const total = subtotal - discount + DELIVERY_FEE;

  const updateQty = (id:number, type:string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id:number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="px-4 py-6 lg:py-10">
      <p className="text-sm text-gray-400 mb-3">Home &gt; Cart</p>

      <h1 className="text-2xl lg:text-3xl font-extrabold mb-6">YOUR CART</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart?.map((item) => (
            <div
              key={item.id}
              className="border-[1.5px] border-gray-300 rounded-2xl p-4 flex flex-col sm:flex-row gap-4"
            >
              <div className="bg-gray-100 rounded-xl p-3 self-start">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="font-bold mt-2">${item.price}</p>

                <div className="flex sm:hidden items-center justify-between mt-4">
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <button
                      onClick={() => updateQty(item.id, "dec")}
                      className="px-2 cursor-pointer"
                    >
                      −
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() => updateQty(item.id, "inc")}
                      className="px-2 cursor-pointer"
                    >
                      +
                    </button>
                  </div>

                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 size={18} className="text-red-500 cursor-pointer" />
                  </button>
                </div>
              </div>

              <div className="hidden sm:flex flex-col items-end gap-3">
                <button onClick={() => removeItem(item.id)}>
                  <Trash2 size={18} className="text-red-500" />
                </button>

                <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                  <button
                    onClick={() => updateQty(item.id, "dec")}
                    className="px-2"
                  >
                    −
                  </button>
                  <span className="px-3">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, "inc")}
                    className="px-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-[1.5px] border-gray-300  rounded-2xl p-5 h-fit">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>${subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Discount (-20%)</span>
              <span className="text-red-500">-${discount}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              <span>${DELIVERY_FEE}</span>
            </div>

            <hr className="text-gray-300" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 flex-1">
              <Tag size={16} className="text-gray-400 mr-2" />
              <input
                placeholder="Add promo code"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
              Apply
            </button>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-full flex items-center justify-center gap-2 hover:bg-gray-900 transition cursor-pointer">
            Go to Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
