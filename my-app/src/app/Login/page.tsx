"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

interface IPropsUser {
  id: number;
  name: string;
  isLogged: boolean;
  password: string;
}

export default function Login() {
  const [users, setUsers] = useState<IPropsUser[]>();

  const [name, setName] = useState<string>();

  const [password, setPassword] = useState<string>();

  useEffect(() => {
    fetch("./user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error: " + err));
  }, []);

  const verifyUser = (name: string, password: string) => {
    const findUser = users?.find(
      (u: IPropsUser) => u.name === name && u.password === password
    );
    if (findUser) {
      redirect("/Admin");
    }
  };

  return (
    <div className="w-full h-[100vh] bg-[#39342E] flex flex-col items-center justify-center p-6">
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre de usuario"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-3 mb-3 rounded bg-gray-300 text-black placeholder-gray-600"
        />
        <button
          onClick={() =>
            name && password
              ? verifyUser(name, password)
              : console.log("No ingreso usuario y/o contraseña")
          }
          className="w-28 bg-[#BBC620] text-black font-semibold py-2 rounded hover:bg-yellow-400 mx-auto block mt-4"
        >
          Ingresar
        </button>
      </div>
    </div>
  );
}
