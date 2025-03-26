import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCartStore } from "@/store/cartStore";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMobileView, setIsMobilView] = useState<boolean>(false);
  const { itemCount } = useCartStore();
  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobilView(window.innerWidth < 700);
    };
    if (window.innerWidth < 700) {
      setIsMobilView(true);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="flex flex-col sm:px-4 px-2 py-5 gap-y-5 shadow-md sticky top-0  bg-white z-20">
      <div className="flex flex-row justify-between gap-x-5">
        <Link to={"/"}>
          <div className="font-bold sm:text-4xl text-4xl">SHOP</div>
        </Link>
        {!isMobileView && <SearchBar />}

        <div className="hover:rounded-xl hover:bg-white hover:text-blue-950 px-2 py-2 mx-5 cursor-pointer">
          <Link to={"/cart"}>
            <div className="relative w-8 h-8">
              <ShoppingCartIcon className="w-8 h-8"/>
              {itemCount > 0 && (
                <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </div>
              )}
            </div>
          </Link>
        </div>
      </div>
      {isMobileView && <SearchBar />}
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="w-full flex flex-row gap-x-2 sm:max-w-[800px] ">
      <div className="flex flex-row gap-x-2 bg-transparent px-2 border rounded-md w-full">
        <SearchIcon className="my-auto" />
        <Input
          className="w-full px-0 py-0 border-none focus:outline-none focus:ring-0 focus-visible:ring-0 shadow-none"
          placeholder="search for product"
        />
      </div>
      <Button variant={"outline"} className=" bg-transparent my-auto">
        Search
      </Button>
    </div>
  );
};

export default Nav;
