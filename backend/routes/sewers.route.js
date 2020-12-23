const express = require("express");

const router = express.Router();
const sewersRoute = require('./routes/sewers.route.js');

router.get('/sewers', (req, res) => {
    console.log("wait");
})