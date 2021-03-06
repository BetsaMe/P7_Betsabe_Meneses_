const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.put('/:id', userCtrl.modifyProfile);
router.get('/:id', userCtrl.getOneUser);
router.delete('/:id', userCtrl.deleteUser);



module.exports = router;

