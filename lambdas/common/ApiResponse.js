const status = require('http-status');


exports.successResponse = (statusCode, data) => {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ data })
    }
}

exports.failureResponse = (statusCode, message, ...rest) => {
    return {
        statusCode: statusCode,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: message, ...rest }),
    }
}

