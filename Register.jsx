import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    alert("Account created (demo)");
  };

  return (
    <div style={page}>
      <form style={card} onSubmit={submit}>
        <h2>Create ShopHub Account</h2>

        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={input}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={input}
          required
        />

        <button style={btn}>Register</button>
      </form>
    </div>
  );
}

const page = {
  minHeight: "100vh",
  backgroundImage:
    "url(https://picsum.photos/seed/register/1600/900)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "rgba(255,255,255,0.95)",
  padding: 30,
  borderRadius: 12,
  width: 340
};

const input = {
  width: "100%",
  padding: 10,
  margin: "10px 0",
  borderRadius: 6,
  border: "1px solid #ccc"
};

const btn = {
  width: "100%",
  padding: 10,
  background: "#16a34a",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  cursor: "pointer"
};
