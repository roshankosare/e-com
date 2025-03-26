import { Card } from "@/components/ui/card";
import React from "react";
import Rating from "./rating";
import { Skeleton } from "@/components/ui/skeleton";

type ProductCardProps = Pick<
  Product,
  "image" | "title" | "price" | "rating"
> & {};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  rating,
}) => {
  return (
    <Card className="flex flex-col py-0 w-[185px] min-w-[170px] h-[260px] sm:w-[230px] sm:h-[300px] rounded-xs">
      <div className="h-3/5 w-full bg-neutral-100">
        <img src={image} className="w-auto h-full mx-auto" alt="" />
      </div>
      <div className="px-2 py-2 flex flex-col gap-y-2">
        <p className="text-xs sm:text:sm w-full truncate">{title}</p>
        <p className="text-xs sm:text:sm font-bold">
          ₹ {(price * 75).toFixed()}
        </p>
        <Rating rating={rating.rate} ratingCount={rating.count} />
      </div>
    </Card>
  );
};

export default ProductCard;

export const ProductCardSkeleton = () => {
  return (
    <Skeleton className="w-[185px] h-[260px] sm:w-[230px] sm:h-[300px] rounded-xs bg-gray-200 animate-pulse" />
  );
};
