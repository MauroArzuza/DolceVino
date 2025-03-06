"use client";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

interface IPropsFeaturedProducts {
  id: string;
}

interface Product {
  id: number;
  name: string;
  idCategory: string;
  idSubcategory: string;
  price: 12000;
  image: string;
  description: string;
  idBrand: string;
  prominent: boolean;
}

const FeaturedProducts: FC<IPropsFeaturedProducts> = ({ id }) => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => {
        const featured = data.filter(
          (product: Product) => product.prominent === true
        );
        setFeaturedProducts(featured);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);

  return (
    <div className="my-4" id={id}>
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
              className="shadow-lg rounded mx-auto"
              src={product.image}
              height={200}
              width={150}
              alt={`Imagen de ${product.name}`}
            />
            <p className="text-center mt-2 max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
              {product.name}
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
          <SwiperSlide key={product.id} className="max-w-[250px]">
            <Image
              className="shadow-lg rounded mx-auto"
              src={product.image}
              height={200}
              width={150}
              alt={`Imagen de ${product.name}`}
            />
            <p className="text-center mt-2 max-w-[250px] overflow-hidden text-ellipsis whitespace-nowrap">
              {product.name}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
