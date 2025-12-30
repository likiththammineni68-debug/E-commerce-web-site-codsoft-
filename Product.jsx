import { useState } from "react";

export default function Product() {
  const [category, setCategory] = useState("ALL");

  const products = [
    // ================= ELECTRONICS =================
    {
      id: 1,
      name: "iPhone 15 Pro",
      category: "ELECTRONICS",
      price: 79999,
      image:
        "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    },
    {
      id: 2,
      name: "Gaming Laptop",
      category: "ELECTRONICS",
      price: 65999,
      image:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      category: "ELECTRONICS",
      price: 4999,
      image:
        "https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg",
    },
    {
      id: 4,
      name: "Smart LED TV",
      category: "ELECTRONICS",
      price: 45999,
      image:
        "https://images.pexels.com/photos/271626/pexels-photo-271626.jpeg",
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      category: "ELECTRONICS",
      price: 2999,
      image:
        "https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg",
    },

    // ================= FASHION =================
    {
      id: 7,
      name: "Women Summer Dress",
      category: "FASHION",
      price: 1999,
      image:
        "https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg",
    },
    {
      id: 8,
      name: "Denim Jeans",
      category: "FASHION",
      price: 2499,
      image:
        "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg",
    },
    {
      id: 9,
      name: "Hooded Sweatshirt",
      category: "FASHION",
      price: 1799,
      image:
        "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    },
    {
      id: 10,
      name: "Formal Shirt",
      category: "FASHION",
      price: 1599,
      image:
        "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg",
    },

    // ================= FOOTWEAR =================
    {
      id: 11,
      name: "Running Shoes",
      category: "FOOTWEAR",
      price: 2999,
      image:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: 12,
      name: "Casual Sneakers",
      category: "FOOTWEAR",
      price: 3499,
      image:
        "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    },
    {
      id: 13,
      name: "Leather Formal Shoes",
      category: "FOOTWEAR",
      price: 3999,
      image:
        "https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg",
    },
    {
      id: 14,
      name: "Sports Trainers",
      category: "FOOTWEAR",
      price: 2799,
      image:
        "https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg",
    },
    {
      id: 15,
      name: "Canvas Shoes",
      category: "FOOTWEAR",
      price: 1999,
      image:
        "https://images.pexels.com/photos/19090/pexels-photo.jpg",
    },

    // ================= ACCESSORIES =================
    {
      id: 16,
      name: "Smart Watch",
      category: "ACCESSORIES",
      price: 4999,
      image:
        "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 19,
      name: "Sunglasses",
      category: "ACCESSORIES",
      price: 1299,
      image:
        "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg",
    },
    {
      id: 20,
      name: "Analog Wrist Watch",
      category: "ACCESSORIES",
      price: 3999,
      image:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg",
    },
  ];

  const filteredProducts =
    category === "ALL"
      ? products
      : products.filter((p) => p.category === category);

  return (
    <div style={{ padding: 30 }}>
      <h1 style={{ marginBottom: 20 }}>Products</h1>

      {/* CATEGORY FILTER */}
      <div style={filterBar}>
        {["ALL", "ELECTRONICS", "FASHION", "FOOTWEAR", "ACCESSORIES"].map((c) => (
          <button
            key={c}
            style={category === c ? activeBtn : btn}
            onClick={() => setCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div style={grid}>
        {filteredProducts.map((p) => (
          <div key={p.id} style={card}>
            <img
              src={p.image}
              alt={p.name}
              style={img}
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/400x300?text=No+Image";
              }}
            />
            <h3>{p.name}</h3>
            <p style={{ fontWeight: "bold" }}>{p.category}</p>
            <strong>₹ {p.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const filterBar = {
  display: "flex",
  gap: 10,
  marginBottom: 20,
  flexWrap: "wrap",
};

const btn = {
  padding: "8px 14px",
  border: "1px solid #ccc",
  borderRadius: 6,
  background: "#fff",
  cursor: "pointer",
};

const activeBtn = {
  ...btn,
  background: "#2563eb",
  color: "#fff",
  border: "none",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
  gap: 20,
};

const card = {
  padding: 15,
  borderRadius: 10,
  background: "#fff",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const img = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  marginBottom: 10,
};
