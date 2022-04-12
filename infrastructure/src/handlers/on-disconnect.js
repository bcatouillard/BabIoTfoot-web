const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });

exports.handler = async(event) => {
  console.log('event ::>', event);  

  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    isBase64Encoded: false
  };

  const deleteParams = {
    TableName: process.env.TABLE_NAME,
    Key: {
      connectionId: event.requestContext.connectionId
    }
  }

  try {
    await dynamoDBClient.delete(deleteParams).promise();

    response.body = 'Disconnected';
    return response;
  } catch (error) {
    response.body = `Failed to disconnect : ${error.message}`;
    response.statusCode = 500;
    return response;
  }
};