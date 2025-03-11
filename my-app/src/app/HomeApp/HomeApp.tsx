"use client";
import React from "react";
import { Header } from "../components/ui/Header/Header";
import { useRouter } from "next/navigation";
import FeaturedProducts from "../components/ui/FeaturedProducts/FeaturedProducts";
import { WineDetailsPage } from "../components/ui/WineDetailsPage/WineDetailsPage";
import { WineCellars } from "../components/ui/WineCellars/WineCellars";
import Reviews from "../components/ui/Reviews/Reviews";
import Footer from "../components/ui/Footer/Footer";
import Hero from "../components/ui/Hero/Hero";
import CatalogBox from "../components/ui/CatalogBox/CatalogBox";

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
      <FeaturedProducts id="featured" />
      <WineDetailsPage />
      <WineCellars />
      <CatalogBox id="aboutUs" />
      <Reviews />
      <Footer id="contact" />
    </div>
  );
};

export default HomeApp;
