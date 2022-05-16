const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  username: Joi.string(),
});

module.exports = schema;
