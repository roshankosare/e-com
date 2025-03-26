import { useState } from "react";

type SizesProps = {
  setSize: (s:string) => void;
};
const Sizes: React.FC<SizesProps> = ({ setSize }) => {
  const sizes = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-y-2">
      <p className="font-bold">Sizes</p>
      <div className=" w-full flex flex-row gap-x-4 overflow-x-scroll scrollbar-hide">
        {sizes.map((s) => (
          <div
            className="sm:w-10 sm:h-10 min-w-10 min-h-10 border-2 rounded-lg flex justify-center px-2 py-2 cursor-pointer"
            key={s}
            style={{
              borderColor: selectedSize === s ? "#358cde" : "gray",
            }}
            onClick={() => {
              setSelectedSize(s);
              setSize(s);
            }}
          >
            <p
              className=" font-bold my-auto  text-sm"
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
