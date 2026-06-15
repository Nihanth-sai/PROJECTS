import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await API.post("auth/login", {
        username,
        password
      });

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br />

      <button onClick={login}>Login</button>

      <br />

      <Link to="/register">Register</Link>
    </div>
  );
}

export default Login;
