import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BASE_URL } from "@/constants";
import { useCartStore } from "@/store/cartStore";
import { TrashIcon } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, addToCart } = useCartStore();
  return (
    <>
      {items.length > 0 ? (
        <div className="w-full flex flex-col gap-y-4">
          {items.map((item) => (
            <Card
              className="flex flex-row h-[200px]  w-full py-2  gap-x-2 px-5  rounded-sm"
              key={item.id}
            >
              <div className=" w-[150px] h-[150px]  sm:w-[200px] sm:h-[200px]">
                <img
                  src={item.product.image}
                  alt=""
                  className=" sm:max-h-[150px] w-auto"
                />
              </div>
              <div className="flex flex-col w-full px-2 sm:px-4 gap-y-2 ">
                <p className="sm:text-sm text-xs">{item.product.title}</p>
                <p className="text-xs sm:text:sm font-bold text-green-500">
                  ₹ {(item.product.price * 75).toFixed()}
                </p>
                <div className="flex flex-row gap-x-2">
                  <p className=" sm:text-sm text-xs font-bold text-gray-500">
                    size
                  </p>
                  <p className="sm:text-sm text-xs text-gray-500">
                    {item.size}
                  </p>
                </div>

                <div className="flex flex-row gap-x-2">
                  <Button
                    variant={"outline"}
                    disabled={item.quantity < 2 ? true : false}
                    onClick={() => {
                      addToCart(item.product, item.size, "sub");
                    }}
                  >
                    -
                  </Button>
                  <div className="px-4 py-1 outline ">{item.quantity}</div>
                  <Button
                    variant={"outline"}
                    onClick={() => {
                      addToCart(item.product, item.size, "add");
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant={"destructive"}
                  className=""
                  onClick={() => {
                    removeFromCart(item.product.id, item.size);
                  }}
                >
                  <TrashIcon className="" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="w-full mx-auto flex flex-col gap-y-2">
          <img
            src={`${BASE_URL}shoppingCart.png`}
            alt=""
            className="w-[80px] h-auto sm:w-[150px] mx-auto"
          />
          <p className="mx-auto text-gray-700 text-3xl font-bold">
            Your cart is empty
          </p>
        </div>
      )}
    </>
  );
};

export default Cart;
