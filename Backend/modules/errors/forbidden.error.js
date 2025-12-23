/**
 * ForbiddenError
 * 
 * Purpose:
 *  - Represents a 403 Forbidden error in the application.
 *  - Used when a client is authenticated but does not have permission 
 *    to perform a specific action or access a resource.
 *  - Extends the base AppError class to maintain consistent error handling.
 * 
 * Usage:
 *  - Throw this error in your services or controllers when a user lacks the 
 *    required role or permissions for an action.
 *  - Example:
 *      throw new ForbiddenError("You do not have permission to delete this project");
 * 
 * Behavior:
 *  - Sets HTTP status code to 403
 *  - isOperational = true (safe to send message to client)
 *  - Works seamlessly with global error middleware
 */


const AppError = require('./app.errors');

class ForbiddenError extends AppError{
    constructor(message = "Forbidden Access"){
        super (message , 403);
    }
}
module.exports = ForbiddenError;