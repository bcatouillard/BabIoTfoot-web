const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });
const Status = require('../utils/Status');

exports.handler = async(event) => {
  
  const params = {
    TableName: process.env.BABYFOOT_TABLE,
    ExpressionAttributeValues: {
      ":status": Status.inprogress
    },
    FilterExpression: "statut = :status",
  }

  try {
    const inProgressMatches = await dynamoDBClient.scan(params).promise();

    return { statusCode: 200, body: JSON.stringify(inProgressMatches.Items) };
  } catch (error) {
    return { statusCode: 500, body: `Failed to fetch data : ${error.message}}` };
  }
};