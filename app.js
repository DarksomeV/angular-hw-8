const http = require('http');
const path =require('path');
const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/routing')));

app.get('*', (req, res) => {
  req.sendFile(path.join(__dirname, 'dist/routing/index.html'))
});

const port = process.env.POST || '3000';

app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
  console.log('Running');
});
