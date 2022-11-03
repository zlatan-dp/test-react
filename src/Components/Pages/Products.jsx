import { useSearchParams } from "react-router-dom";
import { getProducts } from "../../Api";
import { ProductList } from "../ProductList/ProductList";
import { SearchBox } from "../SearchBox/SearchBox";

export const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get("name") ?? "";

  const visibleProducts = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(productName.toLowerCase())
  );

  const updateQuery = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };
  return (
    <main>
      <SearchBox value={productName} onChange={updateQuery} />
      <ProductList products={visibleProducts} />
    </main>
  );
};
