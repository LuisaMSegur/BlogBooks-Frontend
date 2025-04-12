import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return <div className="text-[#F1E3D3] h-screen w-full bg-[radial-gradient(circle,_#E07A5F,_#690B22,_#1B4D3E)]">
<div className="grid grid-cols-1 grid-row-3 lg:grid-cols-6 h-screen">
  <div className="font-[merienda] flex justify-center items-end lg:items-center lg:col-span-3 ">
            <Link href="/literature" className="text-4xl lg:h-[150px] lg:flex lg:items-center sm:text-7xl lg:drop-shadow-md hover:text-[#F8CA95]">
              LITERATURA
            </Link>
            </div>
            <div className="flex justify-center items-center lg:col-span-1 lg:relative">
            <Image src="/images/gifLibroAbierto.gif" alt="Libro" width={80} height={80} className="sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]"/>
            </div>
          <Link href="/inspiration" className="flex justify-center items-start text-4xl lg:col-span-2 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:rotate-270 lg:pb-8 sm:text-8xl font-[Kdam_Thmor_Pro] lg:drop-shadow-md hover:text-[#F8CA95]">
            Inspiración
          </Link>
       
          </div>
  </div>;
}
