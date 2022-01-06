const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient();

const Dynamo = {

    async create(data, TableName) {
        const params = {
            TableName,
            Item: data
        }

        console.log(params);
        const res = await documentClient.put(params).promise()
        if (!res) {
            throw Error(`There was an error writing the DynamoDB ${data.ID} into ${TableName}`)
        }
        return data
        //     const response = documentClient.put(params).promise()
        //     if (!response || !response.Item) {
        //         throw Error(`Error occurred while creating ${template} in table ${tableName}`)
        //     }
        // },



        // async get(user_id, TableName) {
        //     const params = {
        //         TableName,
        //         Key: {
        //             user_id
        //         }
        //     }
    }
}


module.exports = Dynamo;