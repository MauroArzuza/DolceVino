"use client";

import "./globals.css";
import { Header } from "./components/Header/Header";
import { WineCellars } from "./components/WineCellars/WineCellars";
import { WineDetailsPage } from "./components/WineDetailsPage/WineDetailsPage";
import { useRouter } from "next/navigation";
// import Products from "./components/screens/Products/Products";
import { DetailProduct } from "./components/screens/DetailProduct/DetailProduct";

export default function Home() {
  const router = useRouter();

  const navigateToProducts = () => {
    router.push("/products"); // Navegar a la pantalla de productos
  };
  return (
    <div>
      <Header
        showLogo={true}
        icon="menu"
        onIconClick={() => {}}
        onNavigateToProducts={navigateToProducts}
      />
      {/* <Products /> */}
      <DetailProduct />
      <WineDetailsPage />
      <WineCellars />
    </div>
  );
}
