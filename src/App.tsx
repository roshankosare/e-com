import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./nav/nav";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <div className="w-full min-h-screen h-auto flex flex-col gap-y-10 px-2 bg-gray-50 ">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path = "/product/:id" element= {<Product/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
