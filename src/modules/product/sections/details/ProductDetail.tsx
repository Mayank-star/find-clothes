"use client";
import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

const images = [
  "/images/tshirtNew.svg",
  "/images/tshirt-2.svg",
  "/images/tshirt-3.svg",
];

const colors = [
  { id: 1, name: "Olive", class: "bg-[#5B5A3D]" },
  { id: 2, name: "Green", class: "bg-[#0F3D2E]" },
  { id: 3, name: "Navy", class: "bg-[#1E2238]" },
];

const sizes = ["Small", "Medium", "Large", "X-Large"];

const ProductDetail = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();
  return (
    <div className="px-4 py-10">
      
      <p className="text-sm text-gray-400 mb-6">
        Home &gt; Shop &gt; Men &gt; T-shirts
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        <div className="flex gap-4">
          <div className="flex flex-col gap-3">
            {images?.map((img) => (
              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`border rounded-xl p-1 ${
                  selectedImage === img ? "border-black" : "border-gray-200"
                }`}
              >
                <Image src={img} alt="thumb" width={80} height={80} className="roundex-xl"/>
              </button>
            ))}
          </div>

          <div className="bg-(--grey-shade1) rounded-2xl flex items-center justify-center w-full">
            <Image
              src={selectedImage}
              alt="product"
              width={420}
              height={420}
              className="object-contain"
            />
          </div>
        </div>

      
        <div className="space-y-6">
          <h1 className="text-[20px] lg:text-3xl font-extrabold uppercase">
            One Life Graphic T-Shirt
          </h1>

          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-sm text-gray-500">4.5/5</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl lg:text-3xl font-bold">$260</span>
            <span className="line-through text-gray-400">$300</span>
            <span className="text-sm text-red-500 bg-red-100 px-3 py-1 rounded-full">
              -40%
            </span>
          </div>

          <p className="text-gray-600">
            This graphic t-shirt is perfect for any occasion. Crafted from a
            soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div>
            <p className="font-semibold mb-2">Select Colors</p>
            <div className="flex gap-3">
              {colors?.map((color) => (
                <button
                  key={color?.id}
                  onClick={() => setSelectedColor(color)}
                  className={`w-10 h-10 rounded-full ${
                    color?.class
                  } flex items-center justify-center ${
                    selectedColor.id === color.id ? "ring-2 ring-black" : ""
                  }`}
                >
                  {selectedColor.id === color.id && (
                    <span className="text-white text-sm">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>

          
          <div>
            <p className="font-semibold mb-2">Choose Size</p>
            <div className="flex flex-wrap gap-3">
              {sizes?.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-5 py-2 rounded-full text-sm ${
                    selectedSize === size
                      ? "bg-black text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="text-xl px-2 cursor-pointer"
              >
                −
              </button>
              <span className="px-4">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="text-xl px-2 cursor-pointer"
              >
                +
              </button>
            </div>

            <button className="flex-1 cursor-pointer bg-black text-white py-3 rounded-full font-semibold hover:bg-gray-900 transition" onClick={()=>router.push('/cart')}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
