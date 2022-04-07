const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });

exports.handler = async(event) => {
  console.log('event :>>', event);

  const insertParams = {
    TableName: process.env.TABLE_NAME,
    Item: {
      connectionId: event.requestContext.connectionId,
      ttl: parseInt((Date.now() / 1000) + 3600)
    }
  }

  try {
    await dynamoDBClient.put(insertParams).promise();
  } catch (error) {
    return { statusCode: 500, body: `Failed to connect : ${error.message}` };
  }
};