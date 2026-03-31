import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="logo">AHAMKARA</h1>
      </div>

      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? "active" : "")}>
          Products
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? "active" : "")}>
          Cart
        </NavLink>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div>
      <h1>HOME - PLACEHOLDER-The PLACEHOLDER</h1>
      <div className="hero-image">
        <div className="hero-text">
          <h1>AHAMKARA WHERE DREAMS CEASE TO EXIST</h1>
          <p>And I'm a Photographer</p>
          <button>Hire me</button> 
        </div>
      </div>
    </div>
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
    <div>
      <h1>PRODUCTS</h1>
      <div className="balls">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              className="ball-image"
              src={product.image}
              width="300"
              height="250"
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.price} kr</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Cart() {
  return <h1>CART - PLACEHOLDER</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;