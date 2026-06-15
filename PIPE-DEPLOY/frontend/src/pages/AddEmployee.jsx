import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function AddEmployee() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const navigate = useNavigate();

  const addEmployee = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/employees",
        {
          name,
          email,
          department,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/employees");
    } catch (err) {
      console.error(err);
      alert("Failed to add employee");
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br />

      <button onClick={addEmployee}>
        Save Employee
      </button>
    </div>
  );
}

export default AddEmployee;
