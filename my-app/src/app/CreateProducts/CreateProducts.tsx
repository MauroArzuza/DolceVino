import Image from "next/image";

export default function CreateProducts() {
  return (
    <div className="w-full h-[850px] bg-[#39342E] flex flex-col items-center justify-center p-6">
      <Image
        src="/DolceVinoLogo.svg"
        alt="Dolce Vino Logo"
        width={80}
        height={80}
        className="mb-4"
      />
      <h1 className="text-white text-lg font-semibold mb-6">DOLCE VINO</h1>
      <div className="bg-[#61605B] p-6 rounded-lg w-full max-w-xs relative">
        <h2 className="text-white text-center text-lg font-semibold mb-4">
          Crear producto
        </h2>
        <button className="absolute top-4 right-4 text-white"></button>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <input
          type="text"
          name="precio"
          placeholder="Precio"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <input
          type="text"
          name="categoria"
          placeholder="Categoría"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <input
          type="text"
          name="imagen"
          placeholder="Imagen"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <textarea
          name="descripcion"
          placeholder="Descripción"
          className="w-full p-3 mb-3 h-24 rounded bg-gray-300 text-black placeholder-gray-600 resize-none"
        />
        <div className="flex justify-center mt-4">
          <button className="w-28 bg-[#BBC620] text-black font-semibold py-2 rounded hover:bg-yellow-400 ">
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}
