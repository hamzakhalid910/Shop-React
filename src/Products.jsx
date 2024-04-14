import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'; 
import PropTypes from "prop-types";
import "./App.css";

const url = "https://dummyjson.com/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const currentUser = useSelector(state => state.currentUser); 

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Response is not OK!!");
        }
        const data = await response.json();
        const productsList = data.products;
        setProducts(productsList);
      } catch (error) {
        console.error("There is an error:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <div className="header">
        <h1>Welcome, {currentUser}!</h1> 
      </div>
      <h2>Mobile Products</h2>
      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div>ID: {product.id}</div>
            <div>Title: {product.title}</div>
            <img src={product.thumbnail} alt={product.title} />
            <button onClick={() => handleDetailsClick(product)}>Details</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedProduct(null)}>
              &times;
            </span>
            <h2>{selectedProduct.title}</h2>
            <h3>Description:</h3>
            <p>{selectedProduct.description}</p>
            <h3>Price:</h3>
            <p>${selectedProduct.price}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
