const asyncHandler =  require('../../helpers/asyncHandler');
const invitationService = require('./invitation.service');
const err = require('../errors/index');
const mailing = require('../../helpers/mailing')


// the logic behind making an invitation
const sendInvetation = asyncHandler(async(req, res)=>{
    const{from , to , projectid} = req.body;
    if (!from || !to ||!projectid){
        console.log("the api doesnt have the credentials to send invitation");
        throw new err.BadRequestError
    }

    //future step get the infos of the mailer to put it in the email using .populate

    //make the invetaion
    const invitation = await invitationService.create_invite(from , to , projectid)
    if (!invitation) throw new err.BadRequestError("the invitation wasnt made 1.16.1");
    // send the email
    // in developing 

})