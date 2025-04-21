"use client";
import Image from "next/image";
import { useState } from "react";
import Popup from "./Popup";

export default function Nav({buttonColor={}, logo, buttonAbout}) {
  const [isOpen, setIsOpen] = useState(false);

    return (
    <nav className="w-full flex lg:flex-row">
      <a target="_blank" className="w-1/5">
      <img src={logo} alt="Logo" className="size-24 lg:size-32 lg:pl-2" />
    </a>
          <ul className="hidden lg:w-full lg:flex lg:justify-end lg:space-x-4 lg:items-center lg:pr-4">
            <li><a href="#reseñas" className={`flex lg:w-[180px] lg:justify-center lg:p-4 rounded-full ring-2 text-[#FFEEC9] ${buttonAbout} ${buttonColor}`}>Reseñas</a></li>
            <li><a href="#lanzamientos" className={`flex lg:w-[180px] lg:justify-center lg:p-4 rounded-full ring-2 text-[#FFEEC9] ${buttonColor}`}>Lanzamientos</a></li>
            <li><a href="#recomendaciones" className={`flex lg:w-[180px] lg:justify-center lg:p-4 rounded-full ring-2 text-[#FFEEC9] ${buttonColor}`}>Recomendaciones</a></li>
            <li><a href="#contacto" className={`flex lg:w-[180px] lg:justify-center lg:p-4 rounded-full ring-2 text-[#FFEEC9] ${buttonColor}`}>Contacto</a></li>
          </ul>
<div>
      <button
        className="w-[30px] h-[30px] absolute right-2 top-4 bg-transparent lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          src="/images/icons8-menu-24.png"
          alt="Menu"
          width={30}
          height={30}
          className="align-center"
        />
      </button>
      {isOpen && <Popup closePopup={() => setIsOpen(false)} />}
      </div>
    </nav>
  );
}
