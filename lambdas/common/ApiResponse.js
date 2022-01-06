const status = require('http-status');

const Response = {
    __200(data = {}) {
        return {
            statusCode: status.OK,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: status['200_NAME'],
                output: data
            }
            )
        }
    },
    __201(data = {}) {
        return {
            statusCode: status.CREATED,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: status['201_NAME'],
                output: data
            })
        }
    },
    __400(data = {}) {
        return {
            statusCode: status.BAD_REQUEST,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                message: status['400_NAME'],
                output: data
            })
        }
    },
}



module.exports = Response