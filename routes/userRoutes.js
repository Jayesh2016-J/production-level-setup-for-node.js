const express = require("express");
const router = express.Router();
const { register } = require("../controllers/registerCon");
const { login } = require("../controllers/login");
const validate = require('express-joi-validation').createValidator();
const { registerValidation, loginValidation } = require("../validations/userdata");
router.post("/register", validate.body(registerValidation), register);
router.post("/login", validate.body(loginValidation), login);


module.exports = router;    