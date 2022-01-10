const Joi = require('joi');

const schema = Joi.object().keys({
  id: Joi.string().guid({ version: 'uuidv4' }).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstname: Joi.string().alphanum().min(2).max(24).required(),
  lastname: Joi.string().alphanum().min(2).max(24).required(),
  phone: Joi.string()
    .length(10)
    .pattern(/^[0-9]+$/)
    .required(),
  address: Joi.string(),
});

module.exports = schema;
