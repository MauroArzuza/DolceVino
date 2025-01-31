"use client";

import { useRouter } from "next/navigation";
import { Header } from "../../Header/Header";
import Image from "next/image";

export const DetailProduct = () => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/"); // Navega a la pantalla de home
  };

  return (
    <div className="detail-product-container relative">
      <div className="detail-product-header">
        <Header
          showLogo={true}
          icon="home"
          onIconClick={handleHomeClick}
          onNavigateToProducts={() => {}}
        />
      </div>
      <div className="body flex flex-col items-center justify-center">
        <div className="wine-item flex-shrink-0 w-64 h-3/6 bg-white rounded-md text-center mt-4">
          <Image
            src={"/example-wine-1.svg"}
            alt="Imagen del vino"
            width={300}
            height={180}
            className="shadow-lg rounded-xl"
          />
        </div>

        <div className="product-data w-64 mt-12">
          <div className="product-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis ipsam quam quasi, nobis sed facilis commodi vel soluta
              suscipit dolorem magnam provident qui aut eligendi consequuntur,
              blanditiis consectetur, reprehenderit sit! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Pariatur beatae adipisci
              laudantium iusto modi facilis ab fugiat magnam porro nemo, maiores
              enim accusamus suscipit molestiae tempora fuga reprehenderit
              cumque quam.
            </p>
            <div className="space-y-4 mt-4">
              <p className="font-bold text-xl">Malbec</p>
              <p className="font-bold text-xl">Mendoza Argentina</p>
              <p className="font-bold text-xl">Bodega Bianchi</p>
              <p className="font-bold text-xl">STOCK: SI/NO</p>
              <p className="font-bold text-2xl">$54.000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="target-links mt-8 mb-8 flex gap-0 justify-center">
        <Image
          alt="mp-logo"
          src="/mp-logo.png"
          width={96}
          height={96}
          style={{ transform: "scale(0.6)" }}
          className="w-auto h-auto -mr-4"
        />
        <Image
          alt="visa-logo"
          src="/visa-logo.png"
          width={96}
          height={96}
          style={{ transform: "scale(0.6)" }}
          className="w-auto h-auto -mr-4"
        />
        <Image
          alt="mastercard-logo"
          src="/mastercard-logo.png"
          width={96}
          height={96}
          style={{ transform: "scale(0.6)" }}
          className="w-auto h-auto -mr-4"
        />
      </div>
      <button className="wsp-button absolute right-0 bottom-0">
        <Image
          className="relative z-50 scale-50 ml-2"
          src="/Whatsapp-Logo.svg"
          alt="Logo de WhatsApp"
          width={120}
          height={120}
          priority
        />
      </button>
    </div>
  );
};
