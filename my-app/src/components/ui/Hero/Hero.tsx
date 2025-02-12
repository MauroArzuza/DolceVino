"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Hero = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center"
      style={{ backgroundImage: "url('/imagesBGvinodolce.jpeg')" }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        spaceBetween={10}
        className="h-[80%] w-[80%]"
      >
        <SwiperSlide>
          <img
            alt="carrouselImg"
            src="/herodolcevino.png"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt="carrouselImg"
            src="/herodolcevino.png"
            className="w-full h-full object-contain"
          />
        </SwiperSlide>
      </Swiper>
      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full bg-[#BBC620] text-center py-1 flex items-center justify-center space-x-12 group">
        {/* Texto "¡PRECIO DE LISTA!" */}
        <p className="text-white font-bold text-sm ml-4">¡PRECIO DE LISTA!</p>

        {/* Botón "Servicio Personalizado" */}
        <button
          className="flex items-center justify-center space-x-2 bg-[#BBC620] font-bold text-sm px-4 py-2 rounded group-hover:bg-[#8D960B]"
          onClick={() => alert("Servicio personalizado")}
        >
          <img
            src="/icons8-whatsapp.svg"
            alt="WhatsApp Icon"
            className="w-8 h-8"
          />
          <span className="text-white">Servicio Personalizado</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
