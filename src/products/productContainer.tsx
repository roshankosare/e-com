import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard, { ProductCardSkeleton } from "./productCard";
import { Link } from "react-router-dom";

const ProductContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const getProducts = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");

    setTimeout(() => {
      setProducts(
        result.data.filter(
          (t: Product) =>
            t.category === "men's clothing" || t.category === "women's clothing"
        )
      );
    }, 3000);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="w-full h-auto flex flex-col gap-y-5 sm:px-2 justify-center ">
      <div className="font-bold text-2xl">Products</div>
      <div className="flex flex-row flex-wrap  gap-x-2 gap-y-2 sm:gap-x-5 sm:gap-y-5 justify-center">
        {products.map((p) => (
          <Link to={`product/${p.id}`} key={p.id}>
            <ProductCard
              title={p.title}
              image={p.image}
              price={p.price}
              key={p.id}
              rating={p.rating}
            />
          </Link>
        ))}
        {products.length < 1 &&
          Array.from({ length: 12 }).map((__, i) => (
            <div
              className="flex flex-row flex-wrap  gap-x-2 gap-y-2 sm:gap-x-5 sm:gap-y-5 justify-center"
              key={i}
            >
              <ProductCardSkeleton />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductContainer;
