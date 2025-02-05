"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

interface IReviews {
  id: number;
  nombre: string;
  fecha: string;
  imagen: string;
  calificacion: number;
  descripcion: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<IReviews[]>([]);

  useEffect(() => {
    fetch("./reviews.json")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error al cargar reseñas: " + error));
  }, []);
  return (
    <div>
      <h4 className="text-center mt-4 text-lg font-bold">Nuestras reseñas</h4>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full mt-4"
      >
        {reviews.map((review: IReviews) => {
          const fechaActual = new Date();
          const fechaReview = new Date(review.fecha);

          const diferenciaAnios =
            fechaActual.getFullYear() - fechaReview.getFullYear();
          const diferenciaMeses =
            fechaActual.getMonth() - fechaReview.getMonth();
          const diferenciaDias = fechaActual.getDate() - fechaReview.getDate();

          let tiempoTranscurrido;

          if (diferenciaAnios > 0) {
            tiempoTranscurrido = `${diferenciaAnios} año${
              diferenciaAnios > 1 ? "s" : ""
            }`;
          } else if (diferenciaMeses > 0) {
            tiempoTranscurrido = `${diferenciaMeses} mes${
              diferenciaMeses > 1 ? "es" : ""
            }`;
          } else {
            tiempoTranscurrido = `${diferenciaDias} día${
              diferenciaDias > 1 ? "s" : ""
            }`;
          }

          return (
            <SwiperSlide
              key={review.id}
              className="flex justify-center items-center w-full my-2"
            >
              <div className="shadow-md p-4 max-w-[300px] w-full  flex flex-col justify-between mx-auto">
                <div className="flex mb-4 items-center">
                  <Image
                    alt="Foto-perfil"
                    src={review.imagen}
                    width={30}
                    height={30}
                    className="mr-2"
                  />
                  <p>{review.nombre}</p>
                </div>
                <div className="flex">
                  {Array.from({ length: review.calificacion }, (_, index) => (
                    <Image
                      key={index}
                      src={"/star.png"}
                      alt="imagen estrella"
                      width={10}
                      height={10}
                      className="w-5 h-5"
                    />
                  ))}
                  <p className="ml-2">hace {tiempoTranscurrido}</p>
                </div>
                <p className="mt-2">{review.descripcion}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Reviews;
