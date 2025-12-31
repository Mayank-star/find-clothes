"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from 'lucide-react';


const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    verified: true,
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    rating: 5,
    verified: true,
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    id: 3,
    name: "James L.",
    rating: 5,
    verified: true,
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse and on-point.",
  },
  {
    id: 4,
    name: "Moon R.",
    rating: 5,
    verified: true,
    review:
      "Absolutely love the experience. Premium quality, fast delivery, and stylish collections every season.",
  },
];

const HappyCustomer = () => {
  return (
    <div className="px-2 lg:px-20 py-4 lg:py-10">
      <div className="flex flex-col lg:flex-row  items-start lg:items-center gap-2 justify-between mb-4 lg:mb-10">
        <h2 className="text-[20px] lg:text-[40px] text-center font-extrabold">OUR HAPPY CUSTOMERS</h2>
        <div className="flex gap-4">
          <button className="swiper-prev text-xl cursor-pointer">
            <ArrowLeft />
          </button>
          <button className="swiper-next text-xl cursor-pointer">
            <ArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border border-(--black-shade1) rounded-xl p-6 h-full min-h-[200px] lg:min-h-[260px] xl:min-h-[210px] bg-white">
              <div className="flex text-yellow-400 text-lg mb-1 lg:mb-3">
                {"★".repeat(item.rating)}
              </div>

              <div className="flex items-center gap-2 mb-1 lg:mb-2">
                <h3 className="font-bold text-black">{item.name}</h3>
                {item?.verified && (
                  <span className="text-green-500 text-sm">✔</span>
                )}
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                “{item?.review}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HappyCustomer