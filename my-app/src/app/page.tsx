import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      {/* <FeaturedProducts /> */}
      <Reviews />
      <Footer />
    </>
  );
}
