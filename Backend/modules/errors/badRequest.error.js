/**
 * BadRequestError
 * 
 * Purpose:
 *  - Represents a 400 Bad Request error in the application
 *  - Used when the client sends invalid data or the request cannot be processed
 *  - Extends the base AppError class to maintain consistent error handling
 * 
 * Usage:
 *  - Throw this error in your services or controllers when validation fails or
 *    required data is missing/invalid.
 *  - Example:
 *      throw new BadRequestError("Project name is required");
 * 
 * Behavior:
 *  - Sets HTTP status code to 400
 *  - isOperational = true (safe to send message to client)
 *  - Works seamlessly with global error middleware
 */

const AppError = require('./app.errors');

class BadRequestError extends AppError {
    constructor (message = "Bad Request"){
        super(message , 400);
    }
}

module.exports = BadRequestError;