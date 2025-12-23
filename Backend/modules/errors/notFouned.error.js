/**
 * NotFoundError
 * 
 * Purpose:
 *  - Represents a 404 Not Found error in the application.
 *  - Used when a requested resource (project, task, user, or route) does not exist.
 *  - Extends the base AppError class to maintain consistent error handling.
 * 
 * Usage:
 *  - Throw this error in your services or controllers when a resource cannot be found.
 *  - Example:
 *      throw new NotFoundError("Project not found");
 * 
 * Behavior:
 *  - Sets HTTP status code to 404
 *  - isOperational = true (safe to send message to client)
 *  - Works seamlessly with global error middleware
 */

const AppError = require('./app.errors');

class NotFounedError extends AppError{
    constructor(message = "URL not found"){
        super (message , 404);
    }
}
module.exports = NotFounedError;