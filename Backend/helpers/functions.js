const bcrypt = require('bcrypt');

exports.password_validation = async(password , HashedPassword) => {
    return await bcrypt.compare(password , HashedPassword)
}
// password_validation
// simple true or false return 
