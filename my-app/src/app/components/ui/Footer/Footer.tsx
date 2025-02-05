import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-footer text-white text-center gap-6 p-4">
      {/* Horarios y Contacto */}
      <div className="text-xs flex flex-col gap-4">
        <div>
          <h3 className="font-bold">HORARIOS</h3>
          <p className="font-thin">DIAS DE SEMANA</p>
          <p>Lunes a viernes de 10hs a 21hs</p>
          <p className="font-thin">FIN DE SEMANA</p>
          <p>Sábados de 11hs a 17hs</p>
        </div>
        <div className="sm:hidden">
          <h3 className="font-bold">ENVÍOS A DOMICILIO</h3>
          <p>Todos los días de semana de 11hs a 19hs</p>
        </div>
        <div>
          <h3 className="font-bold">CONTACTO</h3>
          <p>VENTAS MAYORISTAS: +5492611234567</p>
          <p>EMAIL: horaciocarballido123@gmail.com</p>
        </div>
      </div>

      {/* Envios a domicilio y redes en desktop */}

      <div className="hidden sm:flex sm:flex-col">
        <div>
          <h3 className="font-bold">ENVÍOS A DOMICILIO</h3>
          <p>Todos los días de semana de 11hs a 19hs</p>
        </div>
        <div className="mt-2">
          <h3>@dolcevinomza</h3>
          <div className="flex justify-around m-2 ">
            <Image alt="WhatsApp" src="/whatsapp.svg" width={45} height={45} />
            <Image
              alt="Dolce Vino"
              src="/DolceVinoLogo.svg"
              width={45}
              height={45}
            />
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Instagram"
                src="/instagram.svg"
                width={45}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Ubicación y Redes(en mobile) */}
      <div className="flex flex-col gap-4">
        <div>
          <h3>NUESTRA UBICACIÓN</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4156.625823075865!2d-68.78499202345593!3d-32.905418769809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e0e998fed3b51%3A0x6a7b4fff2b60b7e2!2sAlmac%C3%A9n%20Dolce%20Vino!5e1!3m2!1ses!2sar!4v1737563620709!5m2!1ses!2sar"
            className="w-full sm:w-[300] sm:h-[200] w-40 h-32"
            loading="lazy"
          ></iframe>
        </div>

        <div className="sm:hidden">
          <h3>@dolcevinomza</h3>
          <div className="flex justify-between m-2 ">
            <Image alt="WhatsApp" src="/whatsapp.svg" width={45} height={45} />
            <Image
              alt="Dolce Vino"
              src="/DolceVinoLogo.svg"
              width={45}
              height={45}
            />
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Instagram"
                src="/instagram.svg"
                width={45}
                height={45}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
