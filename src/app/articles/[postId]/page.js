"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getPostById, getBlogById } from "../../api/api";
import DOMPurify from "dompurify";
import { use } from "react";
import Preloader from "@/app/components/Preloader";


export default function ArticlePage({ params }) {
  const { postId } = use(params);
  const [post, setPost] = useState(null);
  const [listPosts, setListPosts] = useState([]);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (postId) {
      getPostById(postId)
        .then((data) => setPost(data))
        .catch((error) => console.error("Error al obtener el post:", error));
    }
  }, [postId]);

  useEffect(() => {
    getBlogById()
      .then((data) => {
        setListPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  if (!post) {
    return <Preloader/>;
  }

  return (
    <Preloader><div className="font-[merienda] bg-[#FFC5B4] flex flex-col">
      <header className="w-full bg-emerald-950 p-4 flex justify-between place-items-center h-[90px]">
        <img
          src="/images/VAgifVerde.gif"
          alt="Logo"
          className="size-20 sm:size-24 pl-2"
        />
        <Link
          href="/literature"
          className="text-sm sm:text-lg rounded-full ring-2 ring-[#FFAF99] h-8 w-16 sm:h-12 sm:w-20 text-[#FFAF99] hover:bg-[#FFAF99] hover:text-emerald-950 flex items-center justify-center"
        >
          Volver
        </Link>
      </header>
      <div className="md:grid md:grid-cols-3 w-full text-emerald-950">
        <article className="bg-[#FFAF99] min-h-screen col-span-2 max-w-4xl my-10 mx-[40px] p-6 rounded-lg break-words">
          <h2 className="text-2xl font-bold">{post.title}</h2>
          <div
            className={`mt-4 transition-all duration-300 ${
              expanded ? "h-auto" : "max-h-[600px] overflow-hidden"
            }`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post.content),
            }}
          />
          <div className="flex justify-end mt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm text-emerald-950 font-bold underline hover:text-emerald-700"
            >
              {expanded ? "Ver menos" : "Ver más"}
            </button>
          </div>
        </article>
        <section className="flex flex-col bg-[#FBCFC2]">
          <h2 className="text-2xl text-emerald-950 p-6">Más Artículos</h2>
          <ul className="items-center justify-center">
            {listPosts.length > 0 ? (
              listPosts.slice(0).map((post) => (
                <li
                  key={post.id}
                  className="m-4 rounded-lg bg-[#FFAF99] hover:scale-105"
                >
                  <Link
                    href={`/articles/${post.id}`}
                    className="block p-3 text-center hover:underline"
                  >
                    <h3 className="text-xs sm:text-sm">{post.title}</h3>
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-center text-emerald-950">
                Aún no hay más artículos.
              </li>
            )}
          </ul>
        </section>
      </div>
      <footer className="text-[#FFEEC9] flex justify-between items-end bg-emerald-950 p-4">
        <p className="text-[8px] pt-10 sm:text-xs sm:pt-6">
          © 2025 Valentina Seguro Rodriguez
        </p>
        <div className="flex flex-row sm:gap-6">
          <a
            href="https://wa.me/1234567890"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              src="/images/icons8-whatsapp-100.png"
              alt="WhatsApp"
              width={30}
              height={30}
              className="sm:w-[50px] sm:h-[50px]"
            />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              src="/images/icons8-instagram-100.png"
              alt="Instagram"
              width={30}
              height={30}
              className="sm:w-[50px] sm:h-[50px]"
            />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            className="hover:scale-110 transition duration-300 ease-in-out"
          >
            <Image
              src="/images/icons8-gmail-nuevo-100.png"
              alt="Gmail"
              width={30}
              height={30}
              className="sm:w-[50px] sm:h-[50px]"
            />
          </a>
        </div>
      </footer>
    </div></Preloader>
  );
}
