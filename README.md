# JS-server

## Description
Basic server using HTTP module in js

## Usage
- To use the server

  `const server =  require('server');`

- To start the server

  ```
  const CALLBACK = () => true;
  server(CALLBACK);
  ```

- To start the server with port

  ```
  const PORT = 1234
  const CALLBACK = () => true;
  server(CALLBACK, PORT);
  ```
  > ## NOTE
  > Default port is 8000


