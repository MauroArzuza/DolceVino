"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../ui/Header/Header";
import Image from "next/image";
import { useRef } from "react";

const wines = [
  {
    id: 1,
    name: "Vino Tinto Reserva",
    image: "/images/vino1.jpg",
    price: 120000,
  },
  {
    id: 2,
    name: "Vino Blanco Chardonnay",
    image: "/images/vino2.jpg",
    price: 95000,
  },
  { id: 3, name: "Vino Rosado", image: "/images/vino3.jpg", price: 145000 },
];

export default function Products() {
  const router = useRouter();
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth;
      carouselRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].clientWidth;
      const maxScrollLeft =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (carouselRef.current.scrollLeft < maxScrollLeft) {
        carouselRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
      }
    }
  };

  const handleHomeClick = () => {
    router.push("/"); // Navega a la pantalla de home
  };
  return (
    <>
      <div className="products-header">
        <Header
          showLogo={true}
          icon="home"
          onIconClick={handleHomeClick}
          onNavigateToProducts={() => {}}
        />
      </div>
      <div className="searcher-container flex justify-center items-center">
        <div className="bg-customBackground-customGray1 text-customText-yellow1 rounded-md flex items-center gap-2 pt-2 pb-2 pl-4 pr-4 mt-4 w-62">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Buscar..."
            className="bg-transparent outline-none text-customText-yellow1 flex-grow placeholder-customText-yellow1"
          />
        </div>
      </div>

      <div className="old-wine-products mt-8">
        <p className="title text-black font-semibold ml-4">Vinos Viejos</p>
        <div className="wine-carousel flex items-center">
          <button onClick={scrollLeft} className="prev-arrow p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <div
            ref={carouselRef}
            className="wine-list flex space-x-4 overflow-hidden mt-4"
          >
            {wines.map((wine) => (
              <div
                key={wine.id}
                className="wine-item flex-shrink-0 w-64 h-3/6 bg-white rounded-md text-center flex flex-col justify-between"
              >
                <Image
                  src={"/example-wine-1.svg"}
                  alt="Imagen del vino"
                  width={300}
                  height={180}
                  className="shadow-lg rounded-xl"
                />
                <div className="mt-4">
                  <p className="text-lg font-semibold">{wine.name}</p>
                  <p className="text-lg font-semibold">{wine.price}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#"
            className="absolute bottom-[-30px] right-4 mt-3 text-blue-600 hover:underline"
          >
            Ver Todo...
          </a>

          <button onClick={scrollRight} className="next-arrow p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
