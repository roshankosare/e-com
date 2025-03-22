import { Card } from "@/components/ui/card";
import React from "react";

type ProductCardProps = Pick<Product, "image" | "title" | "price"> & {};

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price }) => {
  return (
    <Card className="flex flex-col py-0 w-[150px] h-[220px] sm:w-[230px] sm:h-[300px] rounded-xs justify-items-start">
      <div className="h-3/5 w-full bg-neutral-100">
        <img src={image} className="w-auto h-full mx-auto" alt="" />
      </div>
      <div className="px-2 py-2 flex flex-col gap-y-2">
        <p className="text-xs sm:text:sm w-full truncate">{title}</p>
        <p className="text-xs sm:text:sm font-bold">
          {" "}
          ₹ {(price * 75).toFixed()}
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;
