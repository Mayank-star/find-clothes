import { Mail, Twitter, Facebook, Instagram, Github } from "lucide-react";
import Image from "next/image";

const payMode = [
  {
    id: 1,
    images: "visa.svg",
    alt: "visa",
  },
  {
    id: 2,
    images: "mastercard.svg",
    alt: "mastercard",
  },
  {
    id: 3,
    images: "paypal.svg",
    alt: "paypal",
  },
  {
    id: 4,
    images: "gpay.svg",
    alt: "gpay",
  },
  {
    id: 5,
    images: "applepay.svg",
    alt: "applepay",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-16 ">
      {/* ===== NEWSLETTER ===== */}
      <div className="mx-4 lg:mx-20 bg-(--black) rounded-2xl p-6 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 -mt-40">
        <h2 className="text-(--white) text-2xl lg:text-4xl font-extrabold max-w-xl  ">
          STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
        </h2>

        <div className="flex flex-col gap-3 w-full lg:w-2/6">
          <div className="flex items-center bg-(--white) rounded-full px-4 py-3">
            <Mail size={20} className="text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="outline-none text-sm w-full"
            />
          </div>
          <button className="bg-(--white) rounded-full py-3 font-medium text-sm hover:opacity-30 cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
        <div className="mx-4 lg:mx-20 mt-8 lg:mt-16  text-sm lg:hidden">
          <Image
            src="/images/shop.svg"
            alt="shop-logo"
            width={140}
            height={20}
            className="cursor-pointer mb-4"
          />
          <p className="text-gray-600 mb-4">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3">
            <Twitter size={18} />
            <Facebook size={18} />
            <Instagram size={18} />
            <Github size={18} />
          </div>
        </div>

      {/* ===== FOOTER LINKS ===== */}
      <div className="mx-4 lg:mx-20 mt-8 lg:mt-16 grid  grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-10 text-sm">
        {/* Brand */}
        <div className="hidden lg:block">
          <Image
            src="/images/shop.svg"
            alt="shop-logo"
            width={140}
            height={20}
            className="cursor-pointer mb-4"
          />
          <p className="text-gray-600 mb-4">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3">
            <Twitter size={18} />
            <Facebook size={18} />
            <Instagram size={18} />
            <Github size={18} />
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-4 tracking-widest">COMPANY</h4>
          <ul className="space-y-3 text-gray-600">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h4 className="font-semibold mb-4 tracking-widest">HELP</h4>
          <ul className="space-y-3 text-gray-600">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="font-semibold mb-4 tracking-widest">FAQ</h4>
          <ul className="space-y-3 text-gray-600">
            <li>Account</li>
            <li>Manage Deliveries</li>
            <li>Orders</li>
            <li>Payments</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-4 tracking-widest">RESOURCES</h4>
          <ul className="space-y-3 text-gray-600">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t py-6 px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <span>Shop.co © 2000-2023, All Rights Reserved</span>

        <div className="flex gap-3">
          {payMode?.map((pd) => {
            return (
              <div
                key={pd?.id}
                className="py-2 px-1.5 rounded-sm shadow-sm bg-(--white) flex items-center justify-center"
              >
                <Image
                  src={`/images/${pd?.images}`}
                  alt={pd?.alt}
                  width={40}
                  height={24}
                />
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
