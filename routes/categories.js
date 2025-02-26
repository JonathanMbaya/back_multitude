const express = require("express");
const Category  = require("../models/Category");
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.findAll();
  res.status(201).json(categories);
});


module.exports = router;