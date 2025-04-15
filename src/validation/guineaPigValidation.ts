import Joi from 'joi';

const createGuineaPigSchema = Joi.object({
  name: Joi.string().min(1).required(),
  breed: Joi.string().min(1).required(),
  dob: Joi.string().optional().allow(null),
  approxDob: Joi.boolean().optional().allow(null),
});

const updateGuineaPigSchema = Joi.object({
  name: Joi.string().min(1),
  breed: Joi.string().min(1),
  dob: Joi.string().optional().allow(null),
  approxDob: Joi.boolean().optional().allow(null),
}).min(1);

export { createGuineaPigSchema, updateGuineaPigSchema };