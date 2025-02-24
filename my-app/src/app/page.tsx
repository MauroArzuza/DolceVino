import Login from "./components/Login/Login";
import HomeApp from "./components/screens/HomeApp/HomeApp";
import EditProducts from "./components/EditProducts/EditProducts";
import CreateProducts from "./components/CreateProducts/CreateProducts";

export default function Home() {
  return (
    <div>
      <CreateProducts />
      <EditProducts />
      <Login />
      <HomeApp />
    </div>
  );
}
