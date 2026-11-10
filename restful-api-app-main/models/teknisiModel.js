const mongoose = require('mongoose');

const teknisiSchema = new mongoose.Schema({
  kode: { type: String, required: true, unique: true, trim: true },
  nama: { type: String, required: true, trim: true },
});

module.exports = mongoose.model('teknisi', teknisiSchema);