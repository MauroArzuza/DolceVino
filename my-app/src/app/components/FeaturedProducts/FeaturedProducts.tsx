"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

interface Product {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  destacado: boolean;
}

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const featured = data.filter(
          (product: Product) => product.destacado === true
        );
        setFeaturedProducts(featured);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div>
      <h4 className="text-center font-bold text-lg">Productos destacados</h4>
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full max-w-[1100] mt-4"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id} className="max-w-[250]">
            <Image
              className="shadow rounded mx-auto"
              src={product.imagen}
              height={200}
              width={200}
              alt={`Imagen de ${product.nombre}`}
            />
            <p className="text-center max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
              {product.nombre}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Navigation]}
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full max-w-[1100] mt-4"
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id} className="max-w-[250]">
            <Image
              className="shadow rounded mx-auto"
              src={product.imagen}
              height={200}
              width={200}
              alt={`Imagen de ${product.nombre}`}
            />
            <p className="text-center max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
              {product.nombre}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
