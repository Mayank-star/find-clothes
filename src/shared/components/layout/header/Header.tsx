"use client";

import Image from "next/image";
import { ChevronDown, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import DiscountBar from "./DiscountBar";
import { useState } from "react";

export default function Header() {
  const [search ,setSearch] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [shopOpen ,setShopOpen] = useState<boolean>(false)
  
  const handleSearch = (e:any) => {
    const val = e.target.value;
    setSearch(val);
    console.log("search :", val);
  };
  return (
    <>
      <DiscountBar />


       {searchOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex items-center gap-3 px-4 py-4 border-b">
            <Search className="text-gray-400" />
            <input
              autoFocus
              type="text"
              placeholder="Search for products..."
              value={search}
              onChange={handleSearch}
              className="w-full outline-none text-sm"
            />
            <X
              className="cursor-pointer"
              onClick={() => {setSearchOpen(false);setSearch("")}}
            />
          </div>
        </div>
      )}

      
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
  className={`fixed top-0 left-0 z-50 h-full w-72 bg-white transform transition-transform duration-300 ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
> 
  <div className="flex items-center justify-between px-4 py-4 border-b">
    <Image src="/images/shop.svg" alt="logo" width={120} height={18} />
    <X className="cursor-pointer" onClick={() => setMenuOpen(false)} />
  </div>

 
  <nav className="flex flex-col text-sm">

     
    <div>
      <button
        onClick={() => setShopOpen(!shopOpen)}
        className="flex w-full items-center justify-between px-4 py-3 cursor-pointer"
      >
        <span>Shop</span>
        <ChevronDown
          size={16}
          className={`transition-transform ${
            shopOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          shopOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex flex-col bg-gray-50">
          <span className="px-6 py-2 cursor-pointer hover:bg-gray-100">
            Men
          </span>
          <span className="px-6 py-2 cursor-pointer hover:bg-gray-100">
            Women
          </span>
          <span className="px-6 py-2 cursor-pointer hover:bg-gray-100">
            Accessories
          </span>
        </div>
      </div>
    </div>
 
    <span className="px-4 py-3 cursor-pointer">On Sale</span>
    <span className="px-4 py-3 cursor-pointer">New Arrivals</span>
    <span className="px-4 py-3 cursor-pointer">Brands</span>
  </nav>
</aside>

    

      <header className="w-full border-b">
        <div className="flex items-center justify-between gap-1  lg:gap-10 px-4 py-4 lg:px-16 lg:py-5">

      
          <div className="flex items-center gap-4">
           
            <Menu className="block lg:hidden cursor-pointer" size={18} onClick={() => setMenuOpen(true)}/>

           
            <Image
              src="/images/shop.svg"
              alt="shop-logo"
              width={140}
              height={20}
              className="cursor-pointer"
            />
          </div>

         
          <nav className="hidden lg:flex items-center gap-8 text-sm font-light text-(--black)">
            <div className="relative group">
              <div className="flex items-center gap-1 cursor-pointer">
                <span>Shop</span>
                <ChevronDown
                  size={16}
                  className="transition-transform group-hover:rotate-180"
                />
              </div>

              
              <div className="absolute left-0 top-full w-full h-3"></div>

              
              <div className="absolute left-0 top-full mt-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white shadow-md rounded-md w-44 transition-opacity dropdown-arrow">
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Men</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Women</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Accessories</li>
                </ul>
              </div>
            </div>

            <span className="cursor-pointer hover:opacity-70">On Sale</span>
            <span className="cursor-pointer hover:opacity-70">New Arrivals</span>
            <span className="cursor-pointer hover:opacity-70">Brands</span>
          </nav>

           
          <div className="hidden md:flex flex-1 justify-center ">
            <div className="flex items-center w-full   bg-gray-100 rounded-full px-4 py-3 lg:py-4">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search for products..."  
                className="w-full bg-transparent outline-none text-sm mr-"
              />
              { search && <X
              className="cursor-pointer"
              size={16}
              onClick={() => {setSearch("")}}
            />}
            </div>
          </div>

         
          <div className="flex items-center gap-4">
           
            <Search className="block md:hidden cursor-pointer" onClick={() => setSearchOpen(true)}/>

            <ShoppingCart className="cursor-pointer" />
            <User className="cursor-pointer" />
          </div>
        </div>
      </header>
    </>
  );
}
