import React from "react";
import Rating from "./rating";
import { Button } from "@/components/ui/button";
import { ShoppingBasketIcon, ShoppingCartIcon } from "lucide-react";
import Sizes from "./sizes";

type ProductInfoProps = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row  h-[300px] sm:h-[500px] sm:max-[600px] gap-y-4">
      <div className="sm:w-1/2 h-full">
        <img src={product.image} className="h-full w-auto mx-auto" />
      </div>
      <div className="flex flex-col px-2 sm:px-4 gap-y-4 sm:gap-y-5 sm:w-1/2 ">
        <p className="text-lg font-bold">{product.title}</p>
        <p className=" tex-xs sm:text-md">{product.description}</p>
        <Rating
          rating={product.rating.rate}
          ratingCount={product.rating.count}
        />
        <Sizes />
        <div className="flex  sm:flex-row flex-col gap-y-4 sm:gap-x-4">
          <Button className="w-full sm:w-1/2 px-2 flex items-center justify-center py-2 h-12 gap-2 ">
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
