import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Employee Management Portal</h1>

      <Link to="/employees">
        View Employees
      </Link>
    </div>
  );
}

export default Dashboard;