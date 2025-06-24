import React from "react";
import { ArrowRight } from "lucide-react"; 
import logo from "../assets/frivo-logo.png";


export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-2 py-1 shadow-sm bg-white/30 backdrop-blur-md transition duration-300 mb-2">


      {/* Logo */}
      <div className="flex items-center gap-2">
      <img src={logo} alt="Frivo Logo" className="w-22 h-fit" />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-10 text-gray-500 font-medium text-sm">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Employment Program</a>
      </div>

      {/* Get Started Button */}
      <button className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#E63946] text-black font-medium text-sm transition-all duration-300 hover:bg-[#123B61] hover:text-white">
  Login
  <div className="bg-black text-white p-2 rounded-full transition-all duration-300 hover:bg-white hover:text-black">
    <ArrowRight size={16} />
  </div>
</button>

    </nav>
  );
}

