const http = require('http');
const { processRequest } = require('../requestProcessor.js');

const server = (PORT) => {
  const server = http.createServer(processRequest);
  server.listen(PORT, () => console.log(`Listening to http://localhost:${PORT}`));
};

module.exports = { server };
