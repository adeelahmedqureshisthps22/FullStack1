import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/api';
import Loading from '../components/Loading';
import '../assets/styles/pages.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const response = await getProductById(id);
      setProduct(response.data);
    } catch (err) {
      setError('Failed to fetch product details');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <div className="error-message">{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="product-detail">
          <div className="product-images">
            {product.images && product.images.length > 0 ? (
              <img src={product.images[0]} alt={product.name} />
            ) : (
              <div className="no-image">No Image Available</div>
            )}
          </div>

          <div className="product-details">
            <h1>{product.name}</h1>
            <p className="product-category">{product.category}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            
            <div className="product-description">
              <h3>Description</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-stock">
              <p>Stock: {product.stock} units available</p>
            </div>

            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
