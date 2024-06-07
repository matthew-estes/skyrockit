const express = require('express');
const router = express.Router();
const applicationCtrl = require('../controllers/applications');

router.get('/', applicationCtrl.index);
router.get('/new', applicationCtrl.new);
router.post('/', applicationCtrl.create);
router.get('/:applicationId', applicationCtrl.show);
router.delete('/:applicationId', applicationCtrl.delete);
router.get('/:applicationId/edit', applicationCtrl.edit);
router.put('/:applicationId', applicationCtrl.update);


module.exports = router;