const express = require('express');
const router = express.Router();
const perbaikanController = require('../controllers/perbaikanController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', perbaikanController.getAll);
router.get('/:id', perbaikanController.getById);
router.post('/', cekApiKey, perbaikanController.create);
router.put('/:id', cekApiKey, perbaikanController.update);
router.delete('/:id', cekApiKey, perbaikanController.remove);

module.exports = router;