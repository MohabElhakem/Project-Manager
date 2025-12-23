/**
 * UnauthorizedError
 * 
 * Purpose:
 *  - Represents a 401 Unauthorized error in the application.
 *  - Used when a client tries to access a resource without valid authentication 
 *    (e.g., missing or invalid JWT token).
 *  - Extends the base AppError class to maintain consistent error handling.
 * 
 * Usage:
 *  - Throw this error in your services or controllers when a user is not logged in
 *    or authentication fails.
 *  - Example:
 *      throw new UnauthorizedError("You must be logged in to access this route");
 * 
 * Behavior:
 *  - Sets HTTP status code to 401
 *  - isOperational = true (safe to send message to client)
 *  - Works seamlessly with global error middleware
 */

const AppError = require('./app.errors');

class UnauthorizedError extends AppError{
    constructor(message = 'Unauthorized Error'){
        super ( message , 401)
    }
}
module.exports= UnauthorizedError;