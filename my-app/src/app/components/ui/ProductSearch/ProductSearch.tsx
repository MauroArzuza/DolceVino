import Image from "next/image";
import React from "react";

const ProductSearch = () => {
  return (
    <div className="sm:relative bg-footer sm:w-[800]  w-[200] h-[50] flex justify-center items-center gap-2 rounded mx-auto mt-4">
      <button>
        <Image
          className="sm:left-2 sm:top-3 sm:absolute"
          width={25}
          height={25}
          alt="Search"
          src="/Search.svg"
        />
      </button>
      <input
        className="sm:hidden w-[150] h-[25] placeholder-customText-yellow1 bg-footer text-white"
        type="text"
        placeholder="Buscar"
        id="buscador"
      />
      <input
        className="hidden sm:block w-[600] placeholder-white text-center bg-footer text-white"
        placeholder="¿Que estas buscando?"
      />
    </div>
  );
};

export default ProductSearch;
