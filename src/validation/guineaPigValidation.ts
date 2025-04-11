import Joi from 'joi';

const createGuineaPigSchema = Joi.object({
  name: Joi.string().min(1).required(),
  breed: Joi.string().min(1).required(),
  dob: Joi.number().integer().min(0).required(),
  approxDob: Joi.number().integer().min(0).required(),
});

const updateGuineaPigSchema = Joi.object({
  name: Joi.string().min(1),
  breed: Joi.string().min(1),
  dob: Joi.number().integer().min(0),
  approxDob: Joi.number().integer().min(0).required(),
}).min(1);

export { createGuineaPigSchema, updateGuineaPigSchema };