const Joi = require('joi');

const TemplateSchema = Joi.object({
    user_id: Joi.number().required(),
    message: Joi.string().max(500).required(), // text
    template_id: Joi.string().guid({ version: 'uuidv4' }).required(), // uuid

})

module.exports = TemplateSchema