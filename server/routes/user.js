const express = require("express");
const router = express.Router();
const userAuth = require('../middlewares/userAuth');


const { userRegister , userLogin } = require("../controllers/user");

router.post("/signup", async (req, res) => {
  await userRegister(req, res);
});

router.post("/login", async (req, res) => {
  await userLogin(req, res);
});

module.exports = router;
