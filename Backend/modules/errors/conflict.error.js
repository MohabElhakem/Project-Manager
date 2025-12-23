/**
 * ConflictError
 * 
 * Purpose:
 *  - Represents a 409 Conflict error in the application.
 *  - Used when a request cannot be completed because it would create a conflict,
 *    such as attempting to create a resource that already exists (e.g., duplicate email or project).
 *  - Extends the base AppError class to maintain consistent error handling.
 * 
 * Usage:
 *  - Throw this error in your services or controllers when a conflict occurs.
 *  - Example:
 *      throw new ConflictError("Email already exists");
 * 
 * Behavior:
 *  - Sets HTTP status code to 409
 *  - isOperational = true (safe to send message to client)
 *  - Works seamlessly with global error middleware
 */


const AppError = require('./app.errors');

class ConflictError extends AppError{
    constructor(message = "Duplicated Email"){
        super (message , 409);
    }
}
module.exports = ConflictError;