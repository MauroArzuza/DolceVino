"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface HeaderProps {
  showLogo: boolean;
  icon: "menu" | "home";
  onIconClick?: () => void;
  onNavigateToProducts?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  showLogo,
  icon,
  onIconClick,
  onNavigateToProducts,
}) => {
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
          {showLogo && (
            <Image
              className="ml-2"
              src="/LogoHeader.svg"
              alt="Logo de la empresa"
              width={120}
              height={120}
              priority
            />
          )}
        </div>
        <div className="menu relative">
          <button
            onClick={onIconClick}
            className="flex items-center focus:outline-none"
          >
            {icon === "menu" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 size-6 relative cursor-pointer mr-4 text-customText-yellow1"
                onClick={toggleMenu}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className=" w-8 h-8 relative cursor-pointer mr-4 size-6 text-customText-yellow1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            )}
          </button>
          {isMenuOpen && icon === "menu" && (
            <>
              {/* Fondo borroso */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30"
                onClick={toggleMenu}
              ></div>
              {/* Menú lateral */}
              <div
                className={`fixed top-0 right-0 h-full w-72 bg-customBackground-customGray1 shadow-lg z-40`}
              >
                <button
                  onClick={toggleMenu}
                  className={`absolute text-customText-yellow1 right-6 top-6 focus:outline-none`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className="opciones relative top-20">
                  <ul className="divide-y divide-customText-yellow1">
                    <li>
                      <Link
                        href="../../screens/Products/Products.tsx"
                        className="block px-4 py-2 mb-6 text-white hover:bg-customBackground-customGray2 text-2xl pt-4 pb-0"
                      >
                        Nuestros productos
                      </Link>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 mb-6 text-white hover:bg-customBackground-customGray2 text-2xl pt-4 pb-0"
                      >
                        Sobre nosotros
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 mb-6 text-white hover:bg-customBackground-customGray2 text-2xl pt-4 pb-0"
                      >
                        Contacto
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 mb-6 text-white hover:bg-customBackground-customGray2 text-2xl pt-4 pb-0"
                      >
                        Destacado
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <button className="wsp-button">
                <Image
                  className="fixed z-50 right-1 scale-50 bottom-1.5 ml-2"
                  src="/Whatsapp-Logo.svg"
                  alt="Logo de WhatsApp"
                  width={120}
                  height={120}
                  priority
                />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
