import { useState } from "react";

const Sizes = () => {
  const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-y-2">
      <p className="font-bold">Sizes</p>
      <div className=" w-full flex flex-row gap-x-4 overflow-x-scroll scrollbar-hide">
        {sizes.map((s) => (
          <div
            className="sm:w-12 sm:h-12 min-w-12 min-h-12 border-2 rounded-lg flex justify-center px-2 py-2 cursor-pointer"
            key={s}
            style={{
              borderColor: selectedSize === s ? "#358cde" : "gray",
            }}
            onClick={() => {
              setSelectedSize(s);
            }}
          >
            <p
              className=" font-bold my-auto  sm:text-lg text-sm"
              style={{
                color: selectedSize === s ? "#358cde" : "gray",
              }}
            >
              {s}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;
