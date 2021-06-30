const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

const validate = (data, schema) => {
  const { error } = new joi.ValidationError(data, schema);
  return error;
};

function validationHandler(schema, check = 'body') {
  return (req, res, next) => {
    const error = validate(req[check], schema);
    if (error) next(boom.badRequest(error));
    else next();
  };
}

module.exports = validationHandler;
