const boom = require('@hapi/boom');
const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(err, req, res, next) {
  // eslint-disable-next-line no-console
  console.log(err);
  next(err);
}

function wrapErrors(err, req, res, next) {
  // res.send(err)
  if (!err.isBoom) {
    if (err.status === 401) {
      next(boom.unauthorized(err));
    } else if (err.status === 403) {
      next(boom.forbidden(err));
    } else if (err.status === 404) {
      next(boom.notFound(err));
    } else if (err.status === 405) {
      next(boom.methodNotAllowed(err));
    } else if (err.name === 'MongoError' || err.name === 'ValidationError') { // of mongoose
      next(boom.badData(err));
    } else {
      next(boom.badImplementation(err));
    }
  }

  next(err);
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  // res.send(err)
  const {
    output: { statusCode, payload },
  } = err;
  res.status(statusCode);
  res.json(withErrorStack(payload, err.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
