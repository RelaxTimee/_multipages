import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Home from "./pages/Home/Home";
import Calculator from "./layout/Calculator/Calculator";
import Todo from "./pages/Todo/Todo";
import Product from "./Products/Products";
import Cart from "./pages/Carts/Cart";
import Layout from "./layout/Layout/Layout";

import "./App.css";
import Component from "./layout/Components/Component";
import Animation from "./layout/Animation/Animation";

import { fetchProducts } from "./data/products";
import Login from "./pages/Login/Login";

// const intTab = 'home'

function App() {
  const [token, setToken] = useState("x");
  const [role, setRole] = useState("");

  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useEffect(() => console.log(products), [products]);
  useEffect(() => {
    setProducts(fetchProducts());
  }, []);

  if (token === '') {
    return <Login setToken={setToken} setRole={setRole} />
  } else {
  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route
            element={
              <Layout products={products} carts={carts} setToken={setToken} />
            }
          >
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/todo"} element={<Todo />} />
            <Route path={"/calculator"} element={<Calculator />} />
            <Route
              path={"/products"}
              element={
                <Product
                  products={products}
                  carts={carts}
                  setCarts={setCarts}
                />
              }
            />
            <Route
              path={"/carts"}
              element={<Cart carts={carts} setCarts={setCarts} />}
            />
            <Route path={"/component"} element={<Component />} />
            <Route path={"/animation"} element={<Animation />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
}


export default App;
