"use client"
import { X } from 'lucide-react';
import { useState } from 'react';

export default function DiscountBar() {
 const [open ,setOpen] = useState(true);
  
 if(!open) return null;

  return (
    <div className={`bg-(--black) text-(--white) text-[11px] md:text-[12px] lg:text-[14px] font-normal py-2 px-1 lg:px-16 flex items-center`}>
      
   
      <div className="flex justify-center items-center gap-1 w-full">
        <span>
          Sign up and get 20% off to your first order.
        </span>
        <span className="font-medium underline cursor-pointer">
          Sign Up Now
        </span>
      </div>

     
      <X size={18} className="ml-auto cursor-pointer" onClick={()=>setOpen(false)}/>
    </div>
  );
}
