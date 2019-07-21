exports = module.exports = {
  create,
  Handler
}
/**
 * Handler function creator
 * @param {string} method HTTP method
 * @return {Handler} New Handler object
 */
function create(method) {
  return new Handler(method);
}
/**
 * Handler object to process HTTP requests
 * @param {string} method HTTP method
 */
function Handler(method) {
  this.process = function(req, res) {
    params = null;
    return method.apply(this, [req, res, params]);
  };
}
