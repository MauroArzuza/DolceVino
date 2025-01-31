"use client";

export const WineDetailsPage = () => {
  return (
    <div
      className="wine-details-page relative w-full h-80 bg-cover bg-center bg-no-repeat top-18"
      style={{
        backgroundImage: "url('/fondo-viejominero2.jpg')",
        height: "360px",
      }}
    >
      {/* <div className="image-container relative w-full h-60 overflow-hidden"></div> */}
      <div className="wine-details-page__data relative z-10 text-center p-20 text-white">
        <h2 className="w-full max-w-lg text-2xl md:text-4xl mb-4 mr-40">
          Viejo Minero
        </h2>
        <p className="absolute text-base w-120 text-center pr-6">
          Viejo Minero es un vino emblemático que refleja la riqueza de su
          terroir y la tradición vitivinícola de su región de origen. Este vino
          es producido con uvas seleccionadas, lo que aporta una expresión única
          y compleja a cada botella.
        </p>
      </div>
    </div>
  );
};
