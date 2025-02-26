"use client";
import Image from "next/image";
import { Header } from "../../ui/Header/Header";
import ProductSearch from "../../ui/ProductSearch/ProductSearch";
import { useEffect, useState } from "react";

interface categoria {
  id: number;
  name: string;
}

interface subcategoria {
  id: number;
  name: string;
  idCategoriaPadre: number;
}

interface marca {
  id: number;
  name: string;
}

interface product {
  id: number;
  name: string;
  idCategory: string;
  idSubcategory: number;
  price: number;
  image: string;
  description: string;
  idBrand: number;
  prominent: boolean;
}

const ProductByCategory = () => {
  const [selectCategoria, setSelectCategoria] = useState<number>();
  const [categoria, setCategoria] = useState<categoria[]>([]);
  const [selectSubcategoria, setSelectSubcategoria] = useState<number>();
  const [subcategoria, setSubcategoria] = useState<subcategoria[]>([]);
  const [selectMarca, setSelectMarca] = useState<number>();
  const [marca, setMarca] = useState<marca[]>();
  const [products, setProducts] = useState<product[]>();

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategoria(data))
      .catch((err) => console.error("Error al cargar categorias: " + err));
  }, []);

  useEffect(() => {
    fetch("/subcategory.json")
      .then((res) => res.json())
      .then((data) => setSubcategoria(data))
      .catch((err) => console.error("Error al cargar subcategorias: " + err));
  }, []);

  useEffect(() => {
    fetch("/brand.json")
      .then((res) => res.json())
      .then((data) => setMarca(data))
      .catch((err) => console.error("Error al cargar marcas: " + err));
  }, []);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error al cargar productos: " + err));
  });

  return (
    <div>
      <Header showLogo={true} icon="home" />
      <ProductSearch />

      <div className="flex flex-col mt-4 gap-3 items-center">
        <select
          value={selectCategoria}
          onChange={(e) => setSelectCategoria(Number(e.target.value))}
          className="border rounded border-customText-yellow1 p-2 text-customText-yellow1 w-[250px] text-center"
        >
          <option value="">Categoria</option>
          {categoria.map((c) => (
            <option value={c.id}>{c.name}</option>
          ))}
        </select>

        <select
          value={selectSubcategoria}
          onChange={(e) => setSelectSubcategoria(Number(e.target.value))}
          name="Subcategorias"
          className="border rounded border-customText-yellow1 p-2 text-customText-yellow1 w-[250px] text-center"
        >
          <option value="">Subcategoria</option>
          {subcategoria.map((sc) => (
            <option value={sc.id}>{sc.name}</option>
          ))}
        </select>

        <select
          value={selectMarca}
          onChange={(e) => setSelectMarca(Number(e.target.value))}
          name="marca"
          className="border rounded border-customText-yellow1 p-2 text-customText-yellow1 w-[250px] text-center"
        >
          <option value="">Marca</option>
          {marca?.map((m) => (
            <option value={m.id}>{m.name}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1200px] mx-auto mt-4">
        {products?.map((p, index) => (
          <div
            key={index}
            className="flex relative flex-col mx-auto mt-4 items-center border rounded shadow-xl w-[200px]"
          >
            <Image
              alt={`Imagen ${p.name}`}
              src={`${p.image}`}
              width={200}
              height={200}
            />
            <p className="text-center">{p.price}</p>
            <a href="https://wa.me/xxxxxxxxxx">
              <Image
                alt="Whatsapp icon"
                src="/Whatsapp-Logo.svg"
                width={30}
                height={30}
                className="absolute right-1 bottom-1"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductByCategory;
