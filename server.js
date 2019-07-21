const http = require('http');
const router = require('./router.js');

// Setup global variables
const PORT = process.env.PORT || 3000;

// GET - Hello World
router.register('/', (_, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!')
  res.end();
});

// Server configuration
const server = http.createServer((req, res) => {
  handler = router.route(req);
  handler.process(req, res);
});

// Start server
server.listen(PORT);

// Log status
console.log('Server running');
