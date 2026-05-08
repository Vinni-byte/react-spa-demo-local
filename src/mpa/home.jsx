import React from "react";
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
        <a className="active" href="/mpa-home.html">Home</a>
        <a href="/mpa-products.html">Products</a>
        <a href="/mpa-cart.html">Cart</a>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <div>
          <div className="hero-image">
            <div className="hero-text">
              <h1>AHAMKARA WHERE DREAMS CEASE TO EXIST</h1>
              <p>The Sport store for you</p>

              <a href="/mpa-products.html">
                <button id="home-shop-button">Shop</button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Home />);