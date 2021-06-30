const { config } = require('../config');

exports.success = (req, res, message = '', status = 200, data) => {
  if (config.dev) {
    res.status(status).send({
      error: '',
      body: data,
      message,
    });
  } else {
    res.status(status).send({
      error: '',
      message,
    });
  }
};

exports.error = (req, res, message = '', status = 500, data) => {
  if (config.dev) {
    res.status(status).send({
      error: message,
      body: data,
    });
  } else {
    res.status(status).send({
      error: message,
    });
  }
};
