const AWS = require("aws-sdk");
const documentClient = new AWS.DynamoDB.DocumentClient();

module.exports = {
    put: async (params) => await documentClient.put(params).promise(),
    query: async (params) => await documentClient.query(params).promise()
};