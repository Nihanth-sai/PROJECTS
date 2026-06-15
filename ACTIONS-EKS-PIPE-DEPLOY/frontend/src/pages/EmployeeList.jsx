import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/employees", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmployees(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchEmployees();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Employees</h2>

      <Link to="/addemployee">
        <button>Add Employee</button>
      </Link>

      <br />
      <br />

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>

              <td>
                <Link to={`/editemployee/${emp.id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => deleteEmployee(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
