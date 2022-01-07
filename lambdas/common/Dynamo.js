const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    put: async (params) => await documentClient.put(params).promise()
};