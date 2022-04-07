const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });
const { main , replacer} = require('../utils/formatData');
const Status = require('../utils/Status');

exports.handler = async() => {

  const params = {
    TableName: process.env.BABYFOOT_TABLE,
    ExpressionAttributeValues: {
      ":status1": Status.abandonned,
      ":status2": Status.finished
    },
    FilterExpression: "statut in (:status1, :status2)"
  };

  try {
    const matches = await dynamoDBClient.scan(params).promise();

    const playersMap = main(matches.Items);

    return { statusCode: 200, body: JSON.stringify(replacer(playersMap)) };
  } catch (error) {
    return { statusCode: 500, body: `Failed to fetch data : ${error.message}` };
  }
};