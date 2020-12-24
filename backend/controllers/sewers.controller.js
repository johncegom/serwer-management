// Import model
const sewerModel = require('../models/sewer.model');

module.exports.getAll = async (req, res) => {
    try {
        const sewers = await sewerModel.find();
        res.json(sewers);
    } catch (err) {
        res.json({
            message: err
        });
    }
};

module.exports.getOne = async (req, res) => {
    try {
        const sewer = await sewerModel.findById(req.params.sewerId);
        res.json(sewer);
    } catch (err) {
        res.json({message: err});
    };
};

module.exports.addSewer = async (req, res) => {
    const sewer = new sewerModel({
        _id: req.body.id,
        name: req.body.name,
        description: req.body.description
    });
    try {
        const savedSewer = await sewer.save();
        res.json(savedSewer);
    } catch (err) {
        res.json({
            message: err
        });
    }
};

module.exports.deleteSewer = async (req, res) => {
    try {
        const removedSewer = await sewerModel.remove({_id: req.params.sewerId});
        res.json(removedSewer);
    } catch (err) {
        res.json({message: err});
    }
};