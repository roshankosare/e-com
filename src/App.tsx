import "./App.css";
import Banner from "./banner/banner";
import Categories from "./categories/categories";
import Nav from "./nav/nav";
import ProductContainer from "./products/productContainer";

function App() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col gap-y-10 px-2 bg-gray-50 ">
      <Nav />
      <div className="w-full sm:max-w-[1200px] h-auto mx-auto flex flex-col gap-y-10">
        <Banner/>
        <Categories />
        <ProductContainer />
      </div>
    </div>
  );
}

export default App;
