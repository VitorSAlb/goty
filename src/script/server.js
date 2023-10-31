const http = require ('http')

const server = http.createServer();

server.on('connection', (socket) => {
    console.log('New connection...');
});

server.listen(8080);

console.log('Listening on port 8080....');