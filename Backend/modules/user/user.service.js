// this file is responsible for manipulation of the data in the data base

const User = require('./user.db.js');
const bcrypt = require ('bcrypt')
const err = require('../errors/index.js');

exports.create_user_in_db = async(username , email , password , role = 'member' )=>{

    try {
            // check the in takes
            if (!username || !email || !password) {
                throw new err.BadRequestError ("\nMissing required user fields for sign in\n");
            };
            
            // hash the password 
            const hashedPassword = await bcrypt.hash(password , 10);
            // create the user
            const U = await User.create({
                username,
                email,
                role,
                password : hashedPassword,
            })
            // return an object ti be used
            return {
                user_id : U._id,
                username,
                email,
                role,
            }
            
    } catch (error) {
        // see if the error is duplication of the email 
        if (error.code === 11000) throw new err.ConflictError("Email already exists") ;
        
        throw error ; // its not so throw the whole error to the globel handler
    }

}
/**
 * create_user_in_db: 
 *  - Creates a new user in the data base
 *  - Needs all the fields to work 
 *  - Hashes Password then store it 
 *  - Throws application error for invalied data or deuplicates
 * 
 * Return :
 *      |
 *      |--> object with the user data without the sensitive fields
 *      |
 */

exports.get_user_by_email = async(email) => {
    if(!email){
        throw new err.BadRequestError("\nMissing Required filed provied the email\n")
    }
    //get the infos from the DB
    const user = await User.findOne({email: email});
    if (!user){
        throw new err.NotFoundError("\nCouldn't find the user in the DB\nPlease sign in\n");
    }
    // return the user infos all of it 
    return user
}
/**
 * get_user_by_email:
 *  - to seacrh the user by email from the DB 
 *  - needs only the email
 *  
 * Returns : 
 *      |
 *      |-> the user object fromt the DB
 */

