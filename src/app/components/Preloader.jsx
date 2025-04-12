"use client";

import { useState, useEffect } from "react";
import Image from "next/image";  

const Preloader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="z-60 relative min-h-screen">

      {loading && (
        <div className="fixed inset-0 flex items-center justify-center z-10 h-screen w-full bg-[radial-gradient(circle,_#E07A5F,_#690B22,_#1B4D3E)]">
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <Image 
              src="/images/gifLogoModal.gif" 
              alt="Modal Image" 
              width={200} 
              height={200} 
              className="rounded-lg drop-shadow-md"
              priority={true}
            />
          </div>
        </div>
      )}

      <div className={`${loading ? "hidden" : "block"}`}>
        {children}
      </div>
    </div>
  );
};

export default Preloader;







