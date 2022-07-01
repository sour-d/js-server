const http = require('http');

const server = (onRequest, PORT = 8000) => {
  const server = http.createServer(onRequest);
  server.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
};

module.exports = { server };
