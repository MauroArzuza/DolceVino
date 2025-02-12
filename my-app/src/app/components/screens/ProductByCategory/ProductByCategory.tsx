"use client";
import Image from "next/image";
import { Header } from "../../ui/Header/Header";
import ProductSearch from "../../ui/ProductSearch/ProductSearch";
import { useState } from "react";

const ProductByCategory = () => {
  const [categoria, setCategoria] = useState("");
  const [subcategoria, setSubcategoria] = useState("");
  const [marca, setMarca] = useState("");

  return (
    <div>
      <Header showLogo={true} icon="home" />
      <ProductSearch />

      <div className="flex flex-col mt-4 gap-3 items-center">
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="border rounded border-customText-yellow1 p-2 text-customText-yellow1 w-[250px] text-center"
        >
          <option value="" disabled>
            Categoria
          </option>
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>

        <select
          value={subcategoria}
          onChange={(e) => setSubcategoria(e.target.value)}
          name="Subcategorias"
          className="border rounded border-customText-yellow1 p-2 text-customText-yellow1 w-[250px] text-center"
        >
          <option value="" disabled>
            Subcategoria
          </option>
          <option value="1">Subcategoria 1</option>
          <option value="2">Subcategoria 2</option>
          <option value="3">Subcategoria 3</option>
        </select>

        <select
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          name="marca"
          className="border rounded border-customText-yellow1 p-2 text-customText-yellow1 w-[250px] text-center"
        >
          <option value="" disabled>
            Marca
          </option>
          <option value="1">Marca 1</option>
          <option value="2">Marca 2</option>
          <option value="3">Marca 3</option>
        </select>
      </div>
      <div className="flex relative flex-col mx-auto mt-4 items-center border rounded shadow-xl w-[200]">
        <Image
          alt="Imagen vino"
          src={"/Bianchi.webp"}
          width={200}
          height={200}
        />
        <p className="text-center">$54000</p>
        <a>
          <Image
            alt="Whatsapp icon"
            src="/Whatsapp-Logo.svg"
            width={30}
            height={30}
            className="absolute right-1 bottom-1"
          />
        </a>
      </div>
    </div>
  );
};

export default ProductByCategory;
