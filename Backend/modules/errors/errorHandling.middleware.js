/**
 * Global Error Handling Middleware
 * 
 * Purpose:
 *  - Catches all errors thrown in the application (both operational and unexpected).
 *  - Sends a consistent JSON response to the client with the correct HTTP status code.
 *  - Logs unexpected errors for debugging without exposing sensitive details to the client.
 * 
 * How it works:
 *  1. Checks if the error is an instance of `AppError`:
 *      - If yes → uses its defined status code and message (operational error)
 *      - If no → treats it as an unexpected error, logs it, and converts it to a 500 Internal Server Error
 *  2. Logs the error details for debugging purposes
 *  3. Sends a structured JSON response:
 *      - `status`: "fail" for client errors (4xx), "error" for server errors (5xx)
 *      - `message`: user-friendly error message
 * 
 * Usage:
 *  - Place at the **end of all route definitions** in Express (`app.use(globalErrorHandler);`)
 *  - All errors thrown with `throw new AppError(...)` or its subclasses are automatically handled
 *  - Works seamlessly with `asyncHandler` for async routes
 * 
 * Example response for a 404 Not Found:
 *  {
 *    "status": "fail",
 *    "message": "Project not found"
 *  }
 * 
 * Example response for a 500 Internal Server Error:
 *  {
 *    "status": "error",
 *    "message": "Internal Server Error"
 *  }
 */


const Err = require('./index');

const globalErrorHandler = (err, req, res, next) => {
    // Check if the error is an instance of AppError
    if (!(err instanceof Err.AppError)) {
        console.log("\nUnexpected Error:\n", err);
        err = new Err.AppError('Internal Server Error', 500);
    }

    // Log the error code or details
    console.log("\nCode Error:\n", err);

    // Send structured JSON response
    res.status(err.statusCode).json({
        status: err.statusCode >= 500 ? 'error' : 'fail',
        message: err.message
    });
};

module.exports = globalErrorHandler;