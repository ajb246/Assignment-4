const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());


const products = [
  {
    id: 1,
    name: "Wilson Basketball",
    price: 49.99,
    description: "Mens Professional Basketball",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 2,
    name: "Boxing Gloves",
    price: 29.99,
    description: "Professional Boxing gloves",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 3,
    name: "Baseball Bat",
    price: 69.99,
    description: "High end Professional Baseball Bat",
    image: "https://via.placeholder.com/200"
  },
  {
    id: 4,
    name: "Foldable Chair",
    price: 29.99,
    description: "Lightweight foldable chair",
    image: "https://via.placeholder.com/200"
  }
];


let selectedProduct = null;


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.post('/api/select-product', (req, res) => {
  selectedProduct = req.body;
  res.json({ message: "Product stored successfully" });
});


app.get('/api/selected-product', (req, res) => {
  res.json(selectedProduct);
});


app.post('/api/submit-order', (req, res) => {
  res.json({ message: "Your item will be delivered soon." });
});


app.listen(3000, () => console.log("Server running on http://localhost:3000"));
