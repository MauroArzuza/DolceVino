"use client";

import Image from "next/image";

export const WineCellars = () => {
  return (
    <div className="bg-white w-full flex justify-center items-center p-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10">
        <div className="bg-white w-28 h-28 sm:w-44 sm:h-44 rounded-md flex justify-center items-center">
          <Image
            src="/ImagenSantaJulia.jpg"
            alt="Imagen de bodega Santa Julia"
            width={160}
            height={160}
            priority
          />
        </div>
        <div className="bg-white w-28 h-28 sm:w-44 sm:h-44 rounded-md flex justify-center items-center">
          <Image
            src="/ImagenSeptima.jpg"
            alt="Imagen de bodega Septima"
            width={160}
            height={160}
            priority
          />
        </div>
        <div className="bg-white w-28 h-28 sm:w-44 sm:h-44 rounded-md flex justify-center items-center">
          <Image
            src="/ImagenZuccardi.jpg"
            alt="Imagen de bodega Zuccardi"
            width={160}
            height={160}
            priority
          />
        </div>
        <div className="bg-white w-28 h-28 sm:w-44 sm:h-44 rounded-md flex justify-center items-center">
          <Image
            src="/ImagenBdgaVistalba.jpg"
            alt="Imagen Bodega Vistalba"
            width={160}
            height={160}
            priority
          />
        </div>
      </div>
    </div>
  );
};
