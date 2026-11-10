const Teknisi = require('../models/teknisiModel');

exports.create = async (req, res) => {
  const data = await Teknisi.create(req.body);
  res.status(201).json(data);
};

exports.getAll = async (req, res) => {
  res.json(await Teknisi.find());
};