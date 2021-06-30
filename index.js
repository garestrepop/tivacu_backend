const express = require('express');
const mongoconnection = require('./lib/mongooseConnection');

// expresss
// const cors = require('cors')

const app = express();

const { config } = require('./config');

const {
  logErrors,
  wrapErrors,
  errorHandler,
} = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const router = require('./network/routes');

mongoconnection();

// body parser
app.use(express.json());
// app.use(cors(config.cors))

// routes
router(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening http://${config.host}:${config.port}`);
});
