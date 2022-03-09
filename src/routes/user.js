const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//middlewares

//Registro usuario
router.get('/register', userController.register);

//Login usuario
router.get('/login', userController.login);

module.exports = router;
