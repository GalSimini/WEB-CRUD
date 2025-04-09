const express = require('express');
const router = express.Router();
const usersController = require('../Controllers/usersController');

router.get('/', usersController.getAllUsers);
router.post('/', usersController.createUser);
router.put('/:cpf', usersController.updateUser);
router.delete('/:cpf', usersController.deleteUser);

module.exports = router;