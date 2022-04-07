const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });

exports.handler = async(event) => {
  console.log('event ::>', event);  

  const deleteParams = {
    TableName: process.env.TABLE_NAME,
    Key: {
      connectionId: event.requestContext.connectionId
    }
  }

  try {
    await dynamoDBClient.delete(deleteParams).promise();
  } catch (error) {
    return { statusCode: 500, body: `Failed to disconnect : ${JSON.stringify(error)}` };
  }
};