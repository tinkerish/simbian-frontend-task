"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 text-white w-full">
      <div className="flex w-full justify-end relative">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8 relative">
          {/* Slanted Left Edge */}
          <div className="absolute -left-3 top-0 bottom-0 w-10 bg-[#3052ec] skew-x-12 origin-left z-0 rounded-l-lg" />

          {/* Nav content */}
          <div className="flex items-center gap-8 bg-[#3052ec] p-4 pl-8 rounded-lg z-10 relative">
            <div className="text-xl font-bold flex items-center gap-1.5">
              <Image src={logo} alt="Simbian logo" className="w-8 h-8" />
              <span>Simbian</span>
            </div>
            <a href="#" className="font-medium">
              Products
            </a>
            <a href="#" className="font-medium">
              Company
            </a>
            <a href="#" className="font-medium">
              Resources
            </a>
            <a href="#" className="font-medium">
              Blog
            </a>
            <button className="ml-4 px-4 py-2 rounded-lg transition">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
      </div>
      <div
        className={`md:hidden ${
          isOpen && "bg-[#3052ec] w-full"
        } flex justify-end p-4`}
      >
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-2 bg-[#3052ec] text-white p-4 -mt-1">
          <div className="text-xl font-bold flex items-center gap-1.5">
            <Image src={logo} alt="Simbian logo" className="w-8 h-8" />
            <span>Simbian</span>
          </div>
          <a href="#" className="font-medium">
            Products
          </a>
          <a href="#" className="font-medium">
            Company
          </a>
          <a href="#" className="font-medium">
            Resources
          </a>
          <a href="#" className="font-medium">
            Blog
          </a>
          <button className="px-4 py-2 rounded-lg transition">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
}
