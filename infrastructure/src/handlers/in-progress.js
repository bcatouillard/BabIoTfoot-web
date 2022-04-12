const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });
const Status = require('../utils/Status');

exports.handler = async(event) => {
  console.log('event :>> ', event);

  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    isBase64Encoded: false
  };
  
  const params = {
    TableName: process.env.BABYFOOT_TABLE,
    ExpressionAttributeValues: {
      ":status": Status.inprogress
    },
    FilterExpression: "statut = :status",
  }

  try {
    const inProgressMatches = await dynamoDBClient.scan(params).promise();

    response.body = JSON.stringify(inProgressMatches.Items);
    return response;
  } catch (error) {
    return { statusCode: 500, body: `Failed to fetch data : ${error.message}}` };
  }
};