const express = require("express");

const router = express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const {
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employeeController");

router.get("/", authMiddleware, getEmployees);

router.post("/", authMiddleware, addEmployee);

router.put("/:id", authMiddleware, updateEmployee);

router.delete("/:id", authMiddleware, deleteEmployee);

module.exports = router;