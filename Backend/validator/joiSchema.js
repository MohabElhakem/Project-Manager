const joi = require('joi');
const constans = require('../config/constants')

exports.signIn = joi.object({
    username: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    role: joi.string().valid(...constans.userRoles).optional()
});

exports.logIn = joi.object({
    email:joi.string().email().required(),
    password: joi.string().min(6).required()
})
