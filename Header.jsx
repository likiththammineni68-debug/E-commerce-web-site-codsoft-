import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={header}>
      <h2 style={logo}>ShopHub</h2>

      <nav style={nav}>
        <Link to="/" style={link}>Home</Link>
        <Link to="/products" style={link}>Products</Link>
        <Link to="/login" style={link}>Login</Link>
        <Link to="/register" style={link}>Register</Link>
      </nav>
    </header>
  );
}

/* ================= STYLES ================= */

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "#111827",
  color: "#fff",
};

const logo = {
  fontSize: 24,
  fontWeight: "bold",
};

const nav = {
  display: "flex",
  gap: 20,
};

const link = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
};

