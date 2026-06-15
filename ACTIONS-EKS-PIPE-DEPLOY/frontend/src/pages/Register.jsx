import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const register = async () => {
    try {
      await API.post("auth/register", {
        username,
        password
      });

      alert("Registration Successful");

      navigate("/");
    } catch {
      alert("Registration Failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>

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

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
