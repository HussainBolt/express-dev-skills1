var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

// All actual paths start with "/skills"
router.get('/', skillsCtrl.index)
router.get('/new', skillsCtrl.new);
router.get('/:id', skillsCtrl.show)
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id/edit', skillsCtrl.edit);
router.put('/:id', skillsCtrl.update);


module.exports = router;
