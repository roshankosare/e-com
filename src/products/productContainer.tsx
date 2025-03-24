import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./productCard";

const ProductContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data)
    setProducts(
      result.data.filter(
        (t: Product) =>
          t.category === "men's clothing" || t.category === "women's clothing"
      )
    );
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col gap-y-5 sm:px-2 justify-center ">
      <div className="font-bold text-2xl">Products</div>
      <div className="flex flex-row flex-wrap  gap-x-2 gap-y-2 sm:gap-x-5 sm:gap-y-5 justify-center">
        {products.map((p) => (
          <ProductCard
            title={p.title}
            image={p.image}
            price={p.price}
            key={p.id}
            rating={p.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductContainer;
