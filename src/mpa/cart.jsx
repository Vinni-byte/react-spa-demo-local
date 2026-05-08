import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">AHAMKARA</h1>
      </div>

      <div className="navbar-links">
        <a href="/mpa-home.html">Home</a>
        <a href="/mpa-products.html">Products</a>
        <a className="active" href="/mpa-cart.html">Cart</a>
      </div>
    </nav>
  );
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  return (
    <>
      <Navbar />

      <main className="page-content">
        <div>
          <h1>CART</h1>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img
                  src={product.image}
                  alt={product.name}
                  width="120"
                />

                <h2>{product.name}</h2>
                <p>{product.price} kr</p>
              </div>
            ))
          )}
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<CartPage />);