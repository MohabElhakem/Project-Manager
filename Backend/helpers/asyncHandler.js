/**
 * asyncHandler
 * 
 * Purpose:
 *  - A higher-order function that wraps async route handlers in Express.
 *  - Automatically catches errors thrown in async functions and passes them to the global error middleware.
 *  - Eliminates the need for try/catch blocks in every async route, keeping routes clean and readable.
 * 
 * How it works:
 *  1. Takes a route handler function `fn` as input.
 *  2. Returns a new function that receives `req`, `res`, and `next`.
 *  3. Executes the original `fn` and wraps it in `Promise.resolve()` to handle both async and sync functions.
 *  4. If `fn` throws an error or rejects, `.catch(next)` passes the error to Express’s next middleware.
 * 
 * Usage:
 *  - Wrap all async route handlers with `asyncHandler`.
 * 
 * Example:
 *  const asyncHandler = require('../utils/asyncHandler');
 *  const { NotFoundError } = require('../errors');
 *  
 *  const getProject = async (req, res) => {
 *      const project = await Project.findById(req.params.id);
 *      if (!project) throw new NotFoundError("Project not found");
 *      res.json(project);
 *  };
 *  
 *  router.get('/:id', asyncHandler(getProject));
 * 
 * Benefits:
 *  - Centralizes error handling for async routes
 *  - Prevents repetitive try/catch blocks
 *  - Works seamlessly with global error middleware
 */

const asyncHandler = fn => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;