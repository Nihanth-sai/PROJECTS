import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

function EditEmployee() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const navigate = useNavigate();

  const updateEmployee = async () => {
    try {
      const token = localStorage.getItem("token");

      await API.put(
        `/employees/${id}`,
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
      alert("Update failed");
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />

      <input
        placeholder="Department"
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br />

      <button onClick={updateEmployee}>
        Update Employee
      </button>
    </div>
  );
}

export default EditEmployee;
