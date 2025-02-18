import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-[600px] bg-[#39342E] flex flex-col items-center justify-center p-6">
      <Image
        src="/logo-dolce-vino.png"
        alt="Dolce Vino Logo"
        width={80}
        height={80}
        className="mb-4"
      />
      <h1 className="text-white text-lg font-semibold mb-6">DOLCE VINO</h1>
      <div className="bg-[#61605B] h-[300px] p-6 rounded-lg w-full max-w-xs">
        <input
          type="text"
          placeholder="Nombre de usuario"
          className="w-full p-3 mb-4 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full p-3 mb-4 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <button className="w-32 bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-600 mx-auto block">
          Ingresar
        </button>
      </div>
    </div>
  );
}
