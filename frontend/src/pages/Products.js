import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import '../assets/styles/pages.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    page: 1
  });

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await getProducts(filters);
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setFilters({ ...filters, search: e.target.value, page: 1 });
  };

  if (loading) return <Loading />;

  return (
    <div className="products-page">
      <div className="container">
        <h1>Products</h1>

        <div className="products-filters">
          <input
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="products-grid">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
