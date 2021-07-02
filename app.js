const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = require('./routes/api.js');

// This will be our application entry. We'll setup our server here.

// Set up the express app

const app = express();

require('./database'); // Me traigo la base de datos que uso

app.use(logger('dev')); // Log requests to the console.

// Parse incoming requests data (https://github.com/expressjs/body-parser)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter) // Todo lo que entre con url '/api' lo gestiona apiRouter

// Pongo a escuchar al servidor en el puerto 8000


app.listen(8000, () => {
    console.log('Servidor arrancado!');
});


module.exports = app;


// Setup a default catch-all route that sends back a welcome message in JSON format.

// app.get('*', (req, res) => res.status(200).send({ // '/' en vez de '*'
//     message: 'Welcome to the beginning of nothingness.',
// }));

// otra opcion:

// const port = parseInt(process.env.PORT, 10) || 8000;
// app.set('port', port);
// const server = http.createServer(app);
// server.listen(port);