import Banner from "@/banner/banner";
import Categories from "@/categories/categories";
import ProductContainer from "@/products/productContainer";

const Home = () => {
  return (
    <div className="w-full sm:max-w-[1200px] h-auto mx-auto flex flex-col gap-y-10">
      <Banner />
      <Categories />
      <ProductContainer />
    </div>
  );
};

export default Home;
