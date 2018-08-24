const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'bin')));

// Send all other requests to the Angular app
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'index.html'));
// });

//Set Port
const port = process.env.PORT || '7000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on port ${port}`));