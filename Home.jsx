import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div style={hero}>
        <div style={overlay}>
          <h1 style={title}>Welcome to ShopHub</h1>
          <p style={subtitle}>
            One place for Electronics, Fashion, Footwear & Accessories
          </p>
        </div>
      </div>

      {/* CATEGORY SECTION */}
      <div style={section}>
        <h2 style={{ marginBottom: 20 }}>Shop by Category</h2>

        <div style={grid}>
          <Link to="/products?category=electronics" style={link}>
            <div style={card}>
              <img
                src="https://via.placeholder.com/400x300?text=Electronics"
                alt="Electronics"
                style={img}
              />
              <h3>Electronics</h3>
            </div>
          </Link>

          <Link to="/products?category=fashion" style={link}>
            <div style={card}>
              <img
                src="https://via.placeholder.com/400x300?text=Fashion"
                alt="Fashion"
                style={img}
              />
              <h3>Fashion</h3>
            </div>
          </Link>

          <Link to="/products?category=footwear" style={link}>
            <div style={card}>
              <img
                src="https://via.placeholder.com/400x300?text=Footwear"
                alt="Footwear"
                style={img}
              />
              <h3>Footwear</h3>
            </div>
          </Link>

          <Link to="/products?category=accessories" style={link}>
            <div style={card}>
              <img
                src="https://via.placeholder.com/400x300?text=Accessories"
                alt="Accessories"
                style={img}
              />
              <h3>Accessories</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const hero = {
  height: "70vh",
  backgroundImage:
    "url(https://via.placeholder.com/1600x900?text=ShopHub+Shopping)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const overlay = {
  background: "rgba(0,0,0,0.6)",
  padding: 40,
  borderRadius: 12,
  textAlign: "center",
  color: "#fff",
};

const title = {
  fontSize: 42,
  marginBottom: 10,
};

const subtitle = {
  fontSize: 18,
};

const section = {
  padding: 40,
  background: "#f9fafb",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 20,
};

const card = {
  background: "#fff",
  borderRadius: 12,
  overflow: "hidden",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  textAlign: "center",
  cursor: "pointer",
  transition: "transform 0.2s",
};

const img = {
  width: "100%",
  height: 200,
  objectFit: "cover",
};

const link = {
  textDecoration: "none",
  color: "inherit",
};
