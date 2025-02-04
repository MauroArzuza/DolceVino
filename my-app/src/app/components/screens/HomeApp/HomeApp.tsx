"use client";
import React from "react";
import { Header } from "../../ui/Header/Header";
import { useRouter } from "next/navigation";
import FeaturedProducts from "../../ui/FeaturedProducts/FeaturedProducts";
import { WineDetailsPage } from "../../ui/WineDetailsPage/WineDetailsPage";
import { WineCellars } from "../../ui/WineCellars/WineCellars";
import Reviews from "../../ui/Reviews/Reviews";
import Footer from "../../ui/Footer/Footer";
import Hero from "../../ui/Hero/Hero";
import CatalogBox from "../../ui/CatalogBox/CatalogBox";

const HomeApp = () => {
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
      <Hero />
      <FeaturedProducts />
      <WineDetailsPage />
      <WineCellars />
      <CatalogBox />
      <Reviews />
      <Footer />
    </div>
  );
};

export default HomeApp;
