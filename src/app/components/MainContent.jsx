"use client";
import Link from "next/link";

export default function MainContent({
  sectionArticles,
  posts,
  sectionLanzamientos,
  sectionRecomendation,
}) {
  
  return (
    <main>
      {sectionArticles && (
        <section
          id="reseñas"
          className="text-emerald-950 flex flex-col items-center mb-8 md:h-screen"
        >
          <h2 className="text-4xl md:text-7xl text-center m-18">
            {sectionArticles.title}
          </h2>
          <ul className="flex flex-col w-[300px] md:w-full md:grid md:grid-cols-3 gap-6 list-none md:p-5">
            {posts.length > 0 ? (
              posts.map((post) => (
                <li
                  key={post.id}
                  className="rounded-lg bg-[#E3927C] hover:scale-105 hover:opacity-[80%] cursor-pointer"
                >
                  <Link href={`/articles/${post.id}`}>
                    <div className="rounded-lg bg-[#E3927C] hover:scale-105 hover:opacity-[80%] cursor-pointer">
                      <img
                        src="/images/libritos.jpg"
                        alt={post.title}
                        className="rounded-t-lg mb-6"
                      />
                      <h3 className="text-xl md:text-2xl font-semibold p-3 pb-6 flex text-center items-center justify-center">
                        {post.title}
                      </h3>
                    </div>
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
      )}
      {sectionLanzamientos && (
        <section
          id="lanzamientos"
          className={`sm:grid sm:grid-cols-2 lg:h-screen ${sectionLanzamientos.bgColor}`}
        >
          <div className="flex flex-col justify-between items-center lg:p-8">
            <h2 className="text-xl md:text-4xl pt-6 pb-6 lg:text-6xl text-[#FFEEC9] text-center pt-8">
              {sectionLanzamientos.title}
            </h2>
            <p className="text-[#FFEEC9] pb-5 px-4 text-sm text-center max-w-[500px]">
              {sectionLanzamientos.subtitle}
            </p>
            <p className="text-[#FFEEC9] text-sm w-[200px] pb-4 lg:text-2xl text-center sm:w-[300px]">
              {sectionLanzamientos.text}
            </p>
            <div className="flex flex-col items-center justify-center w-full sm:text-start text-sm lg:text-2xl lg:pb-[80px]">
              <p className="lg:pt-[20px] pb-4 text-[10px] w-[150px] text-[#FFEEC9]">
                {sectionLanzamientos.link}
              </p>
              <button className="lg:w-[70px] lg:h-[70px]">
                <img
                  src={sectionLanzamientos.icon}
                  alt="Zoom"
                  className="mb-6 w-[50px] h-[50px] md:w-[80px] md:h-[80px] hover:bg-[#F1E3D3] hover:rounded-full hover:scale-105 hover:opacity-[80%]"
                />
              </button>
            </div>
          </div>
          <img
            src={sectionLanzamientos.imgSrc}
            alt="imagen club de lectura"
            className="hidden sm:block sm:w-full lg:h-screen"
          />
        </section>
      )}
      {sectionRecomendation && (
        <section
          id="recomendaciones"
          className={`min-h-3/4 sm:h-screen bg-[#E3927C] flex flex-col justify-center items-center ${sectionRecomendation.textColor}`}
        >
          <h2 className="text-xl p-6 sm:text-4xl lg:text-7xl text-center sm:p-8 font-bold">
            {sectionRecomendation.title}
          </h2>
          <ul className="grid grid-cols-3 gap-6 p-4 md:gap-12 list-none sm:p-8">
            <li className="flex justify-center items-center lg:w-[250px] lg:h-[420px]">
              <img
                src={sectionRecomendation.imgOne}
                alt="Portada de libro"
                className="w-[100%] h-[100%]"
              />
            </li>
            <li className="flex justify-center items-center lg:w-[250px] lg:h-[420px]">
              <img
                src={sectionRecomendation.imgTwo}
                alt="Portada de libro"
                className="w-[100%] h-[100%]"
              />
            </li>
            <li className="flex justify-center items-center lg:w-[250px] lg:h-[420px]">
              <img
                src={sectionRecomendation.imgThree}
                alt="Portada de libro"
                className="w-[100%] h-[100%]"
              />
            </li>
          </ul>
        </section>
      )}
    </main>
  );
}
