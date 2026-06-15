import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/employees"
          element={<EmployeeList />}
        />

	<Route
	  path="/addemployee"
	  element={<AddEmployee />}
	/>

	<Route
          path="/editemployee/:id"
          element={<EditEmployee />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
