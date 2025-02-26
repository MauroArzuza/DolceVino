import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-[600px] bg-[#39342E] flex flex-col items-center justify-center p-6">
      <Image
        src="/DolceVinoLogo.svg"
        alt="Dolce Vino Logo"
        width={80}
        height={80}
        className="mb-4"
      />
      <h1 className="text-white text-lg font-semibold mb-6">DOLCE VINO</h1>
      <div className="bg-[#61605B] h-[280px] p-6 rounded-lg w-full max-w-xs">
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <button className="w-28 bg-[#BBC620] text-black font-semibold py-2 rounded hover:bg-yellow-400 mx-auto block mt-4">
          Ingresar
        </button>
      </div>
    </div>
  );
}
