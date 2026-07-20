const express = require("express");
const router = express.Router();

// connect document routes

router.use("/documents",require("./documentRoutes"));

module.exports =  router;