function errorHttp(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

function notFoundHandler(req, res) {
  res.status(404).json({ message: `Rute ${req.method} ${req.originalUrl} tidak ditemukan` });
}

function errorHandler(err, req, res, next) {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Format JSON tidak valid' });
  }

  if (err.name === 'ValidationError') {
    const detail = Object.values(err.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));
    return res.status(400).json({ message: 'Validasi gagal', detail });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ message: `Nilai tidak valid untuk ${err.path}` });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {}).join(', ');
    return res.status(409).json({ message: `Nilai ${field} sudah dipakai` });
  }

  const status = err.status || 500;

  if (status === 500) {
    console.error(err.stack);
    return res.status(500).json({ message: 'Terjadi kesalahan pada server' });
  }

  res.status(status).json({ message: err.message });
}

module.exports = { errorHttp, notFoundHandler, errorHandler };