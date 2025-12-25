// this will be a moak route for login because its not the main focus on this project 
// no token and not things provided that are all for the auth system to take care of

const asyncHandler =  require('../../helpers/asyncHandler');
const UserService = require('./user.service');
const fn = require('../../helpers/functions');
const err = require('../errors/index');

const sign = asyncHandler(async (req , res) => { 
    // take the infos 
    const {email ,username , password , role} = req.body;

    // make the user
    const user = await UserService.create_user_in_db(
        username,
        email,
        password,
        role
    )

    res.status(201).json({
        message: "you created an user you can test with it",
        Infos: user
    });
});

const login = asyncHandler(async (req , res) => {
    //take the infos
    const {email,password}= req.body;

    // get the user infos 
    const userDB = await UserService.get_user_by_email(email)

    // then confirm the password
    const isValid = await fn.password_validation(password , userDB.password) ;
    if(!isValid) throw new err.UnauthorizedError("error invalid password or email");

    // no error then log him in give back the user
    return res.status(200).json({
        message: `welcome back ${userDB.username}`,
        user: userDB
    })
})

module.exports = {
    sign,
    login,
}

