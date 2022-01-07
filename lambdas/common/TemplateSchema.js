const Joi = require('joi');

const TemplateSchema = Joi.object({
    user_id: Joi.string().required(),
    template_name: Joi.string().required(),
    template_message: Joi.string().required(),
})



module.exports = TemplateSchema