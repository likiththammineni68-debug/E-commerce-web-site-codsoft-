const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// GET PRODUCTS
router.get("/", async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const products = await Product.find(filter);
  res.json(products);
});

// SEED PRODUCTS (WITH SIMPLE IMAGE URLS)
router.post("/seed", async (req, res) => {
  await Product.deleteMany();

  const products = [
    // ELECTRONICS
    {
      name: "iPhone 15",
      brand: "Apple",
      price: 79999,
      description: "Apple smartphone with advanced camera",
      category: "electronics",
      image: "https://via.placeholder.com/400x300?text=Product"},
    {
      name: "Laptop",
      brand: "Dell",
      price: 59999,
      description: "Powerful laptop for work",
      category: "electronics",
      image: "https://picsum.photos/id/1/400/300"
    },

    // FASHION
    {
      name: "Men T-Shirt",
      brand: "H&M",
      price: 1299,
      description: "Comfortable cotton t-shirt",
      category: "fashion",
      image: "https://picsum.photos/id/64/400/300"
    },
    {
      name: "Women Dress",
      brand: "ZARA",
      price: 2999,
      description: "Stylish modern dress",
      category: "fashion",
      image: "https://picsum.photos/id/66/400/300"
    },

    // FOOTWEAR
    {
      name: "Running Shoes",
      brand: "Nike",
      price: 6999,
      description: "Comfortable running shoes",
      category: "footwear",
      image: "https://picsum.photos/id/21/400/300"
    },

    // ACCESSORIES
    {
      name: "Smart Watch",
      brand: "boAt",
      price: 2499,
      description: "Smart watch with fitness tracking",
      category: "accessories",
      image: "https://picsum.photos/id/1060/400/300"
    }
  ];

  // make ~50 products by repeating
  const finalProducts = [];
  for (let i = 0; i < 8; i++) {
    products.forEach((p, index) => {
      finalProducts.push({
        ...p,
        name: `${p.name} ${i + 1}`,
        image: `${p.image}?sig=${i}${index}`
      });
    });
  }

  await Product.insertMany(finalProducts);

  res.json({
    message: "Products added successfully",
    count: finalProducts.length
  });
});

module.exports = router;
