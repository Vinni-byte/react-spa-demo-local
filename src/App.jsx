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
      <div className="hero-image">
        <div className="hero-text">
          <h1>AHAMKARA WHERE DREAMS CEASE TO EXIST</h1>
          <p>The Sport store for you</p>
          
<NavLink to="/products">
  <button id="home-shop-button">Shop</button>
</NavLink>
        </div>
      </div>
    </div>
  );
}

function Products({ addToCart }) {
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
              <button id="button-product" onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        );
      })}
    </div>

  </div>
);
}

function Cart({cart}) {
  return (
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
  );
}




function App() {
   const [cart, setCart] = useState([]);
  const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
};
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart}/>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;