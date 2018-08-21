const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const expressJwt = require('express-jwt');
const app = express();

// API file for interacting with OrientDB
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// 
// app.use(expressJwt({secret: 'marcw-secret'}).unless({path: ['/api/auth', '']}));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '7000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on port ${port}`));