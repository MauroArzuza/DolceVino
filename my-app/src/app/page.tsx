import CreateProducts from "./components/screens/CreateProducts/CreateProducts";
import EditProducts from "./components/screens/EditProducts/EditProducts";
import HomeApp from "./components/screens/HomeApp/HomeApp";
import Login from "./components/screens/Login/Login";

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
