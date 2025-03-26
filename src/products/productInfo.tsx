import React, { useState } from "react";
import Rating from "./rating";
import { Button } from "@/components/ui/button";
import { ShoppingBasketIcon, ShoppingCartIcon } from "lucide-react";
import Sizes from "./sizes";
import { Skeleton } from "@/components/ui/skeleton";
import { useCartStore } from "@/store/cartStore";

type ProductInfoProps = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const { addToCart } = useCartStore();
  const [addToCartDiseble, setAddToCartDisable] = useState<boolean>(false);
  const [size, setSize] = useState<string | null>("md");
  return (
    <div className="w-full flex flex-col sm:flex-row  h-[300px] sm:h-[500px] gap-y-4">
      <div className="w-full sm:w-1/2 h-full">
        <img src={product.image} className="h-full w-auto mx-auto" />
      </div>
      <div className="flex flex-col px-2 sm:px-4 gap-y-4 sm:gap-y-5 sm:w-1/2 ">
        <p className="text-lg font-bold">{product.title}</p>
        <p className=" text-xs sm:text-sm">{product.description}</p>
        <p className="text-xs sm:text:sm font-bold">
          ₹ {(product.price * 75).toFixed()}
        </p>
        <Rating
          rating={product.rating.rate}
          ratingCount={product.rating.count}
        />
        <Sizes setSize={(s: string) => setSize(s)} />
        <div className="flex  sm:flex-row flex-col gap-y-4 sm:gap-x-4">
          <Button
            className="w-full sm:w-1/2 px-2 flex items-center justify-center py-2 h-12 gap-2 "
            onClick={() => {
              addToCart(product, size, "add");
              setAddToCartDisable(true);
              setTimeout(() => {
                setAddToCartDisable(false);
              }, 3000);
            }}
            disabled={addToCartDiseble}
          >
            <ShoppingCartIcon className="w-10 h-10" />
            <p className=""> ADD TO CART</p>
          </Button>
          <Button className="w-full sm:w-1/2 px-2 flex items-center justify-center py-2 h-12 gap-2">
            <ShoppingBasketIcon className="w-10 h-10" />
            <p className=""> BUY NOW</p>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

export const ProductInfoSkeleton = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row  h-[300px] sm:h-[500px] sm:max-[600px] gap-y-4">
      <div className="sm:w-1/2 w-full h-full">
        <Skeleton className=" h-[300px] sm:h-full  w-full mx-auto bg-gray-200 animate-pulse" />
      </div>
      <div className="flex flex-col sm:px-4 gap-y-4 sm:gap-y-5 sm:w-1/2 ">
        <Skeleton className="w-full h-8 bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-32 bg-gray-200 animate-pulse" />
        <Skeleton className="w-full h-12  bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
};
