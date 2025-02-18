import Image from "next/image";

export default function CatalogBox() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center text-white">
      <Image
        src="/FrenteDolceVino.png"
        alt="Fondo de tienda"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10 flex flex-col items-center justify-center text-center px-6 sm:px-12">
        <div className="bg-black bg-opacity-10 backdrop-blur-md p-4 rounded-lg w-full max-w-2xl">
          <p className="text-sm sm:text-lg">
            Dolce Vinos es una tienda especializada en bebidas ubicada en el
            corazón de Mendoza, la tierra del buen vino. Nuestro objetivo es
            ofrecer una experiencia única a los amantes de las bebidas, con una
            selección cuidadosamente curada de vinos, espumantes, licores y
            otras bebidas premium.
          </p>
        </div>
        <button className="mt-4 bg-[#BBC620] hover:bg-[#8D960B] text-white font-semibold py-2 px-2 rounded-lg">
          VER CATALOGO COMPLETO
        </button>
      </div>
    </div>
  );
}
