"use client";
import Nav from "@/app/components/Nav";
import ButtonHome from "@/app/components/ButtonHome";
import Header from "@/app/components/Header";
import MainContent from "@/app/components/MainContent";
import VideosSection from "../components/VideosSection";
import Footer from "@/app/components/Footer";

export default function InspirationPage() {
  return (
    <div className="font-[Kdam_Thmor_Pro] flex flex-col min-h-screen bg-[#F1E3D3]">
      <Nav logo={"/images/VAgif.gif"} buttonColor= "bg-[#690B22] hover:bg-[#F1E3D3] hover:text-[#690B22] ring-[#690B22]/70" buttonAbout={"hidden"}/> 
      <ButtonHome color="bg-[#690B22] hover:bg-[#F1E3D3] hover:text-[#690B22] ring-[#1B4D3E]/70" />
      <Header textColor={"text-[#690B22]"} title="INSPIRACIÓN" subtitle="Un espacio para inspirarnos a transformar la manera de alimentarnos del mundo físico, mental y espiritual. Recorramos este camino juntos hacia una mayor conciencia en nuestros pensamientos, decisiones y acciones. Estar en armonía con la vida misma; fluir y estar presente." bgImage="/images/desert.jpg"/>
      <MainContent 
      sectionLanzamientos={
        {
          bgColor: "bg-[#690B22]",
          imgSrc: "/images/mozart.png",
          title: "Para ser maestro no necesitas ser superdotado",
          subtitle: "Basado en el libro de Robert Greene, te mostraré el paso a paso para lograr la maestria en cualquier area",
          text: "Proximamente",
          link: "Conexión por zoom, haz click --->",
          icon: "/images/icons8-zoom-100.png",
        }
      }
      />
<VideosSection />
      <Footer bgColor={"bg-[#690B22]"} />
    </div>
  );
}