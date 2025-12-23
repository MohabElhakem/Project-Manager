// Require all the errors in here 
const AppError = require('./app.errors');
const BadRequestError = require('./badRequest.error');
const UnauthorizedError = require('./unauthorized.error');
const ForbiddenError = require('./forbidden.error');
const NotFoundError = require('./notFouned.error');
const ConflictError = require('./conflict.error');

// Exports them all 
module.exports={
    AppError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ConflictError,
}