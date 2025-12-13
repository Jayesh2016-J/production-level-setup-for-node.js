const express = require("express");
const router = express.Router();
const { createPost,getPost } = require("../controllers/postCon");
const validate = require('express-joi-validation').createValidator({ passError: true });
const { postValidation } = require("../validations/postdata");
router.post("/create", validate.body(postValidation), createPost);
router.get("/getpost", getPost);

module.exports = router;    