const express = require('express');
const router = express.Router();
const userController = require("../user/user.controller.js");
const vm = require("../../validator/validation.mid");
const validateSchema = require('../../validator/joiSchema')

// Mount all the routers in here
router.post('/user/sign', vm.validate(validateSchema.signIn) , userController.sign );

router.post('/user/login', vm.validate(validateSchema.logIn) , userController.sign );


module.exports = router