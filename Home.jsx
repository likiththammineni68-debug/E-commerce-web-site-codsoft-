import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
      route: "/products?category=ELECTRONICS",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=800&q=80",
      route: "/products?category=FASHION",
    },
    {
      name: "Footwear",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
      route: "/products?category=FOOTWEAR",
    },
    {
      name: "Accessories",
      image:
        "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80",
      route: "/products?category=ACCESSORIES",
    },
  ];

  return (
    <div style={container}>
      <h1 style={title}>Welcome to ShopHub</h1>
      <p style={subtitle}>Choose a category to explore products</p>

      <div style={grid}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={card}
            onClick={() => navigate(cat.route)}
          >
            <img
              src={cat.image}
              alt={cat.name}
              style={image}
            />
            <div style={overlay}>
              <h2 style={cardTitle}>{cat.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const container = {
  padding: "40px",
  minHeight: "100vh",
  background: "#f5f7fb",
};

const title = {
  textAlign: "center",
  fontSize: "36px",
  marginBottom: "10px",
};

const subtitle = {
  textAlign: "center",
  color: "#555",
  marginBottom: "40px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "25px",
};

const card = {
  position: "relative",
  borderRadius: "16px",
  overflow: "hidden",
  cursor: "pointer",
  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
};

const image = {
  width: "100%",
  height: "220px",
  objectFit: "cover",
  display: "block",
};

const overlay = {
  position: "absolute",
  bottom: 0,
  width: "100%",
  background: "rgba(0,0,0,0.6)",
  padding: "15px",
  textAlign: "center",
};

const cardTitle = {
  color: "#fff",
  margin: 0,
  fontSize: "22px",
};
