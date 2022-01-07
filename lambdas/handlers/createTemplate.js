const templateSchema = require('../common/TemplateSchema')
const Response = require('../common/ApiResponse');
const Dynamo = require('../common/Dynamo');
const uuid = require('uuid');


exports.handler = async event => {
    try {


        console.log('event', event)
        const responseBody = JSON.parse(event.body)

        const { error, value } = templateSchema.validate(responseBody);
        console.log('error', error)
        console.log('value', value)
        if (!error) {
            const params = {
                TableName: process.env.tableName,
                Item: {
                    user_id: value.user_id,
                    template_id: uuid.v1(),
                    template_id: value.template_name,
                    template_message: value.template_message,
                    created_at: Date.now(),
                    update_at: Date.now()

                },
            };
            console.log('params', params);

            await Dynamo.put(params);
            return Response.__200(params.Item)
        }


        return Response.__400(error)

    }
    catch (error) {
        return Response.__400({ err: error })
    }
};