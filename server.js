const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // allow frontend to access API

// Sample product data
const products = [
  { id: 1, name: 'Laptop', price: 75000 },
  { id: 2, name: 'Headphones', price: 2500 },
  { id: 3, name: 'Keyboard', price: 1200 },
  { id: 4, name: 'Mouse', price: 800 },
];

// API route
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Express API running on http://localhost:${PORT}`));
