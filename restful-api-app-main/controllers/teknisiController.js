const teknisi = require('../models/teknisiModel');

exports.create = async (req, res) => {
  try {
    const data = await teknisi.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await teknisi.find());
};