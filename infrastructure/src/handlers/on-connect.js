const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });

exports.handler = async(event) => {
  console.log('event :>>', event);
  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    isBase64Encoded: false
  };

  const insertParams = {
    TableName: process.env.TABLE_NAME,
    Item: {
      connectionId: event.requestContext.connectionId,
      ttl: parseInt((Date.now() / 1000) + 3600)
    }
  }

  try {
    await dynamoDBClient.put(insertParams).promise();

    response.body = 'Connected'
    return response;

  } catch (error) {
    
    response.body = `Failed to connect : ${error.message}`;
    response.statusCode = 500;
    return response;
  }
};

const toLowerCaseProperties = (obj) => {
  const wrapper = {};
  for (const key in obj) {
      wrapper[key.toLowerCase()] = obj[key];
  }
  return wrapper;
}