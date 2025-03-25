import ProductInfo from "@/products/productInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
          const result = await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );
          setProduct(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, [id]);
  return (
    <div className="w-full sm:max-w-[1200px] h-auto mx-auto">
      {product && <ProductInfo product={product} />}
    </div>
  );
};

export default Product;
