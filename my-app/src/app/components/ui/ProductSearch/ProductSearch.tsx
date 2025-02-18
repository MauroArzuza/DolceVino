import Image from "next/image";
import React from "react";

const ProductSearch = () => {
  return (
    <div className="bg-footer w-[200] h-[50] flex justify-center items-center gap-2 rounded mx-auto mt-2">
      <button>
        <Image width={25} height={25} alt="Search" src="/Search.svg" />
      </button>
      <input
        className="w-[150] h-[25] placeholder-customText-yellow1 bg-footer text-white"
        type="text"
        placeholder="Buscar"
        id="buscador"
      />
    </div>
  );
};

export default ProductSearch;
