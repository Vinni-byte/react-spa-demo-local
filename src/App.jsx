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
          <p>The Sport store for you</p>
          
<NavLink to="/products">
  <button>Shop</button>
</NavLink>
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
     <div className="balls"> 
      {products.map((product, index) => {
        const isFeatured = (index + 1) % 9 === 0;

        return (
          <div
            key={product.id}
            className={`product-card ${isFeatured ? "featured" : ""}`}
          >
            <img
              className="ball-image"
              src={product.image}
              alt={product.name}
            />
            <h2>{product.name}</h2>
            <p>{product.price} kr</p>
          </div>
        );
      })}
    </div>

  </div>
);
}

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