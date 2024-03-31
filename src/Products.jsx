import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const url = "https://dummyjson.com/products";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    async function FetchProducts() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Response is not OK!!");
        }
        const data = await response.json();
        const productsList = data.products;
        console.log(productsList);
        setProducts(productsList);
      } catch (error) {
        console.error("There is an error:", error);
      }
    }
    FetchProducts();
  }, []);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <>
      <h1>Mobile Products</h1>
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

      {/* {selectedProduct && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setSelectedProduct(null)}>
              &times;
            </span>
            <h2>{selectedProduct.title}</h2>
            <h3>Description:</h3>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )} */}
    </>
  );
}

export default Products;
