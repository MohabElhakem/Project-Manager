const Invitation = require('./invitation.db');
const crypto = require('crypto')
const err = require('../errors/index');


// first thing is making the invetaion it will be a function with token 

const create_invite = async (from , to ,projectId) => {

    if(!from || !to ) {
        console.log("the invite function is messing a filed");
        throw new err.BadRequestError
    }
    // Generate a random token
    const token = crypto.randomBytes(32).toString('hex');

    const invite = await Invitation.create({
        from,
        to,
        projectId,
        token,
    })

    return {
        id : invite.id,
        token,
        projectId
    }
}








module.exports = {
    create_invite,
}