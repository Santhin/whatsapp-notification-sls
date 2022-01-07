const { successResponse, failureResponse } = require('../common/ApiResponse')
const templateSchema = require('../common/TemplateSchema')
// const Response = require('../common/ApiResponse');
const Dynamo = require('../common/Dynamo');
const status = require('http-status');
const uuid = require('uuid');


exports.handler = async event => {
    try {


        console.log('event', event)
        const responseBody = JSON.parse(event.body)

        const { error, value } = templateSchema.validate(responseBody);
        console.log('error', error)
        console.log('value', value)
        if (!error) {

            const templateQueryResult = await Dynamo.query({
                TableName: process.env.tableName,
                Limit: 1,
                KeyConditionExpression: 'user_id = :user_id',
                FilterExpression: 'idempotent_key = :idempotent_key',
                ExpressionAttributeValues: {
                    ':user_id': value.user_id,
                    ':idempotent_key': value.idempotent_key,
                },
            });

            console.log('QueryResult', templateQueryResult)
            if (!!templateQueryResult && templateQueryResult.Items.length && templateQueryResult.Count) {
                return successResponse(status.OK, templateQueryResult.Items[0])
            }

            const params = {
                TableName: process.env.tableName,
                Item: {
                    user_id: value.user_id,
                    template_id: uuid.v1(),
                    template_name: value.template_name,
                    template_message: value.template_message,
                    idempotent_key: value.idempotent_key,
                    created_at: Date.now(),
                    update_at: Date.now()

                },
            };
            console.log('params', params);

            await Dynamo.put(params);
            return successResponse(status.CREATED, params.Item)
        }


        return failureResponse(status.BAD_REQUEST,
            `[Template:Create:Error]:${status[status.BAD_REQUEST]}: ${error}`)

    }
    catch (error) {
        return failureResponse(status.BAD_REQUEST,
            `[Template:Create:Error]:${status[status.BAD_REQUEST]}: ${error}`)
    }
};