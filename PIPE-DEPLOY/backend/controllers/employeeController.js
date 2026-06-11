const pool = require("../db");

const getEmployees = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM employees ORDER BY id"
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error fetching employees",
    });
  }
};

const addEmployee = async (req, res) => {
  try {
    const { name, email, department } = req.body;

    const result = await pool.query(
      `
      INSERT INTO employees
      (name,email,department)
      VALUES ($1,$2,$3)
      RETURNING *
      `,
      [name, email, department]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error adding employee",
    });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, department } = req.body;

    const result = await pool.query(
      `
      UPDATE employees
      SET
      name=$1,
      email=$2,
      department=$3
      WHERE id=$4
      RETURNING *
      `,
      [name, email, department, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error updating employee",
    });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query(
      "DELETE FROM employees WHERE id=$1",
      [id]
    );

    res.json({
      message: "Employee deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error deleting employee",
    });
  }
};

module.exports = {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
