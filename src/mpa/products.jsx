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
        <a className="active" href="/mpa-products.html">Products</a>
        <a href="/mpa-cart.html">Cart</a>
      </div>
    </nav>
  );
}

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Fel vid hämtning av produkter:", error));
  }, []);

  return (
    <>
      <Navbar />

      <main className="page-content">
        <div>
          <h1>PRODUCTS</h1>

          <div className="balls">
            {products.map((product, index) => {
              const isFeatured = (index + 1) % 9 === 0;

              return (
                <div
                  key={product.id}
                  className={`product-card ${isFeatured ? "featured" : ""}`}
                >
                  <a href={`/mpa-product.html?id=${product.id}`}>
                    <img
                      className="ball-image"
                      src={product.image}
                      alt={product.name}
                    />
                  </a>

                  <h2>
                    <a href={`/mpa-product.html?id=${product.id}`}>
                      {product.name}
                    </a>
                  </h2>

                  <p>{product.price} kr</p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

createRoot(document.getElementById("root")).render(<Products />);