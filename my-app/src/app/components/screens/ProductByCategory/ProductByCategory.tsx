import { Header } from "../../ui/Header/Header";
import ProductSearch from "../../ui/ProductSearch/ProductSearch";

const ProductByCategory = () => {
  return (
    <div>
      <Header
        showLogo={true}
        icon="home"
        onIconClick={() => {}}
        onNavigateToProducts={() => {}}
      />
      <ProductSearch />
    </div>
  );
};

export default ProductByCategory;
