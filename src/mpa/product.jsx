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
        <a href="/mpa-cart.html">Cart</a>
      </div>
    </nav>
  );
}

function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

function addToCart(product) {
  const cart = getCart();
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
}

function ProductPage() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((p) => p.id === id);
        setProduct(foundProduct);
      })
      .catch((error) => console.error("Fel vid hämtning av produkt:", error));
  }, []);

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="page-content">
          <p>Loading...</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="page-content">
        <h1>{product.name}</h1>

        <img
          className="buy-image"
          src={product.image}
          alt={product.name}
        />

        <p>{product.price} kr</p>

       <button id="button-product" onClick={() => addToCart(product)}>
  Add to cart </button>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<ProductPage />);