import React, { useEffect, useState } from "react";
import "./Product.css";
import Spinner from "../Quotes/Spinner";

function Product() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [popupTimer, setPopupTimer] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then((data) => {
                setTimeout(() => {
                    setProducts(data.products);
                    setLoading(false);
                }, 5000);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    const handleProductClick = (product) => {
        setSelectedProduct(product);


        if (popupTimer) {
            clearTimeout(popupTimer);
        }

   
        const timer = setTimeout(() => {
            setSelectedProduct(null);
        }, 50000);
        setPopupTimer(timer);
    };

    const handleClosePopup = (e) => {
        if (e.target.classList.contains("popup-overlay")) {
            setSelectedProduct(null);
            if (popupTimer) clearTimeout(popupTimer);
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <Spinner />
            </div>
        );
    }

    return (
        <div className="product-container">
            <h1>Product List</h1>
            <ul className="product-list">
                {products.map((product) => (
                    <li 
                        key={product.id} 
                        onClick={() => handleProductClick(product)} 
                        className="product-item"
                    >
                        {product.title}
                    </li>
                ))}
            </ul>

            {/* Popup Overlay */}
            {selectedProduct && (
                <div className="popup-overlay" onClick={handleClosePopup}>
                    <div className="popup-content">
                        <div className="popup-body">
                            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
                            <div className="product-details">
                                <h2>{selectedProduct.title}</h2>
                                <p><strong>Brand:</strong> {selectedProduct.brand}</p>
                                <p><strong>Category:</strong> {selectedProduct.category}</p>
                                <p><strong>Price:</strong> ${selectedProduct.price}</p>
                                <p><strong>Tags:</strong> {selectedProduct.tags.join(", ")}</p>
                                <p><strong>Rating:</strong> {selectedProduct.rating} ⭐</p>

                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
