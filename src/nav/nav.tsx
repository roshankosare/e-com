import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Nav = () => {
  const [isMobileView, setIsMobilView] = useState<boolean>(false);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobilView(window.innerWidth < 700);
    };
    if(window.innerWidth < 700){
      setIsMobilView(true);
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className="flex flex-col sm:px-4 px-2 py-5 gap-y-5 shadow-md">
      <div className="flex flex-row justify-between gap-x-5">
        <div className="font-bold sm:text-4xl text-2xl">SHOP</div>
        {!isMobileView && <SearchBar />}

        <div className="hover:rounded-xl hover:bg-white hover:text-blue-950 px-2 py-2 mx-5">
          <ShoppingCartIcon />
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
