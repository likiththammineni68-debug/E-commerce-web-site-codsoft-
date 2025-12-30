import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div style={{ padding: 30 }}>
      <h2>Cart</h2>

      {cart.map(p => (
        <div key={p._id} style={row}>
          <strong>{p.name}</strong>
          <div>
            <button onClick={() => dispatch({ type: "DEC", id: p._id })}>-</button>
            <span style={{ margin: "0 10px" }}>{p.qty}</span>
            <button onClick={() => dispatch({ type: "INC", id: p._id })}>+</button>
          </div>
          <span>₹ {p.price * p.qty}</span>
          <button onClick={() => dispatch({ type: "REMOVE", id: p._id })}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹ {total}</h3>
      <button onClick={() => alert("Stripe payment integration next!")}>
        Pay Now
      </button>
    </div>
  );
}

const row = {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 10
};
