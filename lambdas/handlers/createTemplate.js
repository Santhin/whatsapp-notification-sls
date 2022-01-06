const templateSchema = require('../common/TemplateSchema')
const Response = require('../common/ApiResponse');
const { v4: uuidv4 } = require('uuid');


exports.handler = async event => {
    try {
        const template = JSON.parse(event.body)
        if (template === null || !template.user_id || !template.message) {
            return Response.__400(template)
        }
        template['template_id'] = uuidv4();
        const value = await templateSchema.validateAsync(template);
        console.log('result', value)
        return Response.__200(value)
    }
    catch (err) {
        console.log('error', err)
        return Response.__400(err)
    }
}