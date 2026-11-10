const mongoose = require('mongoose');

const perangkatSchema = new mongoose.Schema({
  merek: String,
  model: String,
}, { _id: false }
);

const perbaikanSchema = new mongoose.Schema({
  noTiket: { type: String, required: true, unique: true, trim: true },
  namaPelanggan: { type: String, required: true, trim: true },
  estimasiBiaya: { type: Number, required: true, min: 0 },
  status: { type: String, required: true, trim: true },
  perangkat: perangkatSchema,
  teknisiId: { type: mongoose.Schema.Types.ObjectId, ref: 'teknisi', required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('perbaikan', perbaikanSchema);