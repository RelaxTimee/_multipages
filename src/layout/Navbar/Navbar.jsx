/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

const initPage = "home";

// eslint-disable-next-line no-unused-vars
function Navbar({ products, carts, setToken }) {
  const [tab, setTab] = useState(initPage);

  useEffect(() => {
    setTab(initPage);
  }, []);

  const buttonRefs = {
    home: useRef(),
    calculator: useRef(),
    animation: useRef(),
    components: useRef(),
    todo: useRef(),
    products: useRef(),
    carts: useRef(),
  };

  useEffect(() => {
    const ref = buttonRefs[tab] || buttonRefs.home;
    ref.current.click();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  return (
    <div className="navbar-container">
      <Link to={"/home"}>
        <button
          className={`btn ${tab === "home" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setTab("home")}
          ref={buttonRefs.home}
        >
          Home
        </button>
      </Link>

      {/* ปุ่มที่ 2  Calculator*/}
      <Link to={"/calculator"}>
        <button
          className={`btn ${
            tab === "calculator" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setTab("calculator")}
          ref={buttonRefs.calculator}
        >
          Calculator
        </button>
      </Link>

      {/* ปุ่มที่ 3 Todo*/}
      <Link to={"/todo"}>
        <button
          className={`btn ${tab === "todo" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setTab("todo")}
          ref={buttonRefs.todo}
        >
          Todo
        </button>
      </Link>

      {/* ปุ่มที่ 4 Product*/}
      <Link to={"/products"}>
        <button
          className={`btn ${
            tab === "products" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setTab("products")}
          ref={buttonRefs.products}
        >
          Products ({products.length})
        </button>
      </Link>

      {/* ปุ่มที่ 5  Cart*/}
      <Link to={"/carts"}>
        <button
          className={`position-relative btn ${
            tab === "carts" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setTab("carts")}
          ref={buttonRefs.carts}
        >
          Cart
          {carts.length > 0 && (
            
            <span class="position-absolute top-0 start-100 
            translate-middle badge rounded-pill bg-danger">
            {carts.length < 10 ? carts.length : "9+"}
            <span class="visually-hidden">unread messages</span>
          </span>
          )}
        </button>
      </Link>

      {/* ปุ่มที่ 6  component*/}
      <Link to={"/component"}>
        <button
          className={`btn ${
            tab === "component" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setTab("components")}
          ref={buttonRefs.components}
        >
          component
        </button>
      </Link>

      {/* ปุ่มที่ 7  animation*/}
      <Link to={"/animation"}>
        <button
          className={`btn ${
            tab === "animation" ? "btn-dark" : "btn-outline-dark"
          }`}
          onClick={() => setTab("animation")}
          ref={buttonRefs.animation}
        >
          Animation
        </button>
      </Link>

       <button className="btn btn-outline-danger" style={{marginLeft: '1rem'}}
       onClick={() => {setToken("")}}>
        Login
       </button>
    </div>
  );
}

export default Navbar;
