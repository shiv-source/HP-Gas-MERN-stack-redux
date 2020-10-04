const express = require("express");
const router = express.Router();
const userAuth = require('../middlewares/userAuth');
const { createCostomer ,  getAllCostomer } = require('../controllers/costomer');


router.post("/add-costomer" , userAuth ,  createCostomer );
router.get("/get-all-costomer" , userAuth ,  getAllCostomer );

module.exports = router;

