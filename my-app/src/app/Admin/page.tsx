import React from "react";
import Footer from "../components/ui/Footer/Footer";
import { Header } from "../components/ui/Header/Header";
import Hero from "../components/ui/Hero/Hero";
import FeaturedProducts from "../components/ui/FeaturedProducts/FeaturedProducts";
import { WineDetailsPage } from "../components/ui/WineDetailsPage/WineDetailsPage";
import { WineCellars } from "../components/ui/WineCellars/WineCellars";
import CatalogBox from "../components/ui/CatalogBox/CatalogBox";
import Reviews from "../components/ui/Reviews/Reviews";

const Admin = () => {
  return (
    <div>
      <Header showLogo={true} icon="menu" isAdmin={true} />
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

export default Admin;
