// this file is responsible for manipulation of the data in the data base

const User = require('./user.db.js');
const bcrypt = require ('bcrypt')
const err = require('../errors/index.js');

exports.create_user_in_db = async(username , email , password , role )=>{

    try {
            // check the in takes
            if (!username || !email || !password || !role) {
                throw new err.BadRequestError ("Missing required user fields");
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


