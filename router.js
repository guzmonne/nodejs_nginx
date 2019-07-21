const handler = require('./handler.js');
const parser = require('url');

// Module variables
const HANDLERS = {};

// Exports
exports = module.exports = {
  clear,
  register,
  route,
  missing
};

// Functions
/**
 * Cleans the currently registered handlers
 * @returns {undefined}
 */
function clear() {
  HANDLERS = {};
}
/**
 * Registers a new handler
 * @param {string} url URL path for the handler
 * @param {string} method HTTP method
 * @returns {undefined}
 */
function register(url, method) {
  HANDLERS[url] = handler.create(method);
}
/**
 * Selects the appropiate route given the curren request.
 * If a `handler` can't be found, a `missing handler`
 * function is returned.
 * @param {http.Request} req HTTP request object
 * @return {Handler} The handler for the route or the
 * `missing` handler.
 */
function route(req) {
  const url = parser.parse(req.url, true);
  let handler = HANDLERS[url.pathname];
  if (handler === undefined) {
    handler = missing(url.pathname);
  }
  return handler;
}
/**
 * Handles routes that don't have a `handler` configured.
 * @param {string} pathname The URL pathname that could not
 * be resolved
 * #returns {Handler} The missing Handler object
 */
function missing(pathname) {
  return handler.create((_, res) => {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('No route registered for: ' + pathname);
    res.end();
  });
} 



