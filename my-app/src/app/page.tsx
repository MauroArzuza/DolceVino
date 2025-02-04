import Image from "next/image";
import Hero from "./components/Hero/Hero";
import CatalogBox from "./components/CatalogBox";

export default function Home() {
  return (
    <div>
      <Hero />
      <CatalogBox />
    </div>
  );
}
