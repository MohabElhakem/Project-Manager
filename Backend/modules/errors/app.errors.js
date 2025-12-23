/**
 * AppError
 * 
 * This is a custom error class for the backend application.
 * 
 * Purpose:
 *  - Standardize error handling across the app
 *  - Distinguish between operational errors (expected errors like validation failures)
 *    and programming/server errors (bugs, crashes)
 *  - Provide meaningful HTTP status codes for client responses
 * 
 * Usage:
 *  - Throw this error in your services or controllers when you encounter a known/expected problem
 *  - Example:
 *      throw new AppError("Project not found", 404);
 *  - A global error handling middleware will catch this and send the proper response
 * 
 * Properties:
 *  - message: The error message (string)
 *  - statusCode: HTTP status code to be sent in the response (number)
 *  - isOperational: Marks this error as an expected operational error (boolean)
 */

class AppError extends Error {

    constructor (message, statusCode){
        super(message); // call the parent error
        this.statusCode = statusCode; // Assign HTTP status code
        this.isOpertaional = true; //operational Error can be saiftly send
    }

}

module.exports = AppError;
