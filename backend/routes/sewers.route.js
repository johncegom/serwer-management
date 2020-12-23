const express = require("express");
const sewerModel = require("../models/sewer.model");

const router = express.Router();

// Import model
const SewerModel = require('../models/sewer.model');


router.get('/', async (req, res) => {
    try {
        const sewers = await sewerModel.find();
        res.json(sewers);
    } catch(err) {
        res.json({message: err});
    }
});

router.post('/', async (req, res) => {
    try {
        const sewer = new SewerModel( {
            name: req.body.name,
            description: req.body.description
        });

        const savedSewer = await sewer.save();
        res.json(savedSewer);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;