"use client";

import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="tarjetas bg-customBackground-customGray1 text-customText-yellow1 text-center">
        <p>Aceptamos todas las tarjetas.</p>
      </div>
      <div className="main-header bg-customBackground-customGray2 flex items-center justify-between">
        <div className="logo-empresa">
          <Image
            className="ml-2"
            src="/LogoHeader.svg"
            alt="Logo de la empresa"
            width={120}
            height={120}
            priority
          />
        </div>
        <div className="menu relative">
          <button
            onClick={toggleMenu}
            className="flex items-center focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 w-8 h-8 size-6 relative cursor-pointer mr-4 text-customText-yellow1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <>
              {/* Fondo borroso */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
                onClick={toggleMenu}
              ></div>
              {/* Menú lateral */}
              <div
                className={`fixed top-0 right-0 h-full w-72 bg-customBackground-customGray1 shadow-lg z-50 transform transition-transform duration-100 ease-in-out ${
                  isMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className={`absolute text-customText-yellow1 right-6 top-6 focus:outline-none transform transition-transform duration-100 ease-in-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="opciones absolute top-20">
                  <ul className="divide-y divide-customText-yellow1">
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 mb-6 text-sm text-white hover:bg-customBackground-customGray2 text-3xl pt-4 pb-0"
                      >
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 mb-6 text-sm text-white hover:bg-customBackground-customGray2 text-3xl pt-4 pb-0"
                      >
                        Contacto
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 text-sm mb-6 text-white hover:bg-customBackground-customGray2 text-3xl pt-4 pb-0"
                      >
                        Nuestros productos
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 mb-6 text-sm text-white hover:bg-customBackground-customGray2 text-3xl pt-4 pb-0"
                      >
                        Destacado
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
