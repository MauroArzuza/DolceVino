import Login from "./components/Login/Login";
import Hero from "./components/Hero/Hero";
import CatalogBox from "./components/CatalogBox/CatalogBox";

export default function Home() {
  return (
    <div>
      <Login />
      <Hero />
      <CatalogBox />
    </div>
  );
}
