import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/test")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to connect to backend");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      })
      .catch((err) => {
        console.error(err);
        setError("Backend connection failed");
      });
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Employee Management System</h1>

      {error ? (
        <h2 style={{ color: "red" }}>{error}</h2>
      ) : (
        <h2>{message}</h2>
      )}
    </div>
  );
}

export default App;
