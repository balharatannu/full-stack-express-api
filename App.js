import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch products');
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h3 style={{ color: 'red' }}>{error}</h3>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🛍️ Product List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              background: '#f2f2f2',
              margin: '10px 0',
              padding: '15px',
              borderRadius: '10px',
            }}
          >
            <h2>{product.name}</h2>
            <p>💰 Price: ₹{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
