// setando configuração padrão para criar um server com express
const http = require("http");
const port = process.env.PORT || 5000;

// Import express script and send into our server argument
const app = require("./app");
const server = http.createServer(app);

server.listen(port, () => console.log(`Server on at port: ${port}`));