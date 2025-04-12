"use client";
import Nav from "@/app/components/Nav";
import ButtonHome from "@/app/components/ButtonHome";
import Header from "@/app/components/Header";
import MainContent from "@/app/components/MainContent";
import Footer from "@/app/components/Footer";
import { getBlogById } from "@/app/api/api";
import { useEffect, useState } from "react";
import Preloader from "../components/Preloader";

export default function LiteraturePage() {
const [listPosts, setListPosts] = useState([]);

  useEffect(() => {
    getBlogById()
      .then((data) => {
        setListPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }
  , []);
  
  return (
    <Preloader><div className="font-[merienda] flex flex-col min-h-screen bg-[#E07A5F]">
      <Nav logo={"/images/VAgifVerde.gif"} buttonColor= "bg-[#002c22] hover:bg-[#E07A5F] ring-[#1B4D3E]/70" />
      <ButtonHome color="bg-[#E3927C] hover:bg-[#E07A5F] ring-[#1B4D3E]/70"  />
      <Header textColor={"text-[#002c22]"} title="LITERATURA" subtitle="No hay dos lecturas iguales, como no hay dos lectores iguales. Cada lector es un mundo y cada mundo lee e interpreta de forma diferente. Cuando leo solo interpreto desde mi vivencia; el lector es uno con la lectura y no pueden ser separados." bgImage="/images/libritos.jpg"/>
      <MainContent 
      sectionArticles={{
        title: "RESEÑAS",
      }}
      posts={listPosts}
      sectionLanzamientos={
        {
          bgColor: "bg-[#002c22]",
          imgSrc: "/images/clubImagen.png",
          title: "Club de Lectura",
          subtitle: "Tomate un café y conectate con nosotros a esta tertulia literaria.",
          text: "Jueves 19:30hs - 21:30hs (hora Colombia)",
          link: "Conexión por zoom, haz click --->",
          icon: "/images/icons8-zoom-100.png",
        }
      }
      sectionRecomendation={{
        textColor: "text-[#002c22]",
        title: "Recomendaciones",
        imgOne: "/images/cienSoledad.jpeg",
        imgTwo: "/images/beloved.png",
        imgThree: "/images/elInfinitoEnUnJunco.webp",
      }}
      />
      <Footer bgColor={"bg-[#002c22]"} />
    </div></Preloader>
  );
}
