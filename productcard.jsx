import { Link } from "react-router-dom";

export default function ProductCard({ p }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 10 }}>
      <Link to={`/product/${p._id}`}>
        <h3>{p.name}</h3>
      </Link>
      <p>${p.price}</p>
    </div>
  );
}
