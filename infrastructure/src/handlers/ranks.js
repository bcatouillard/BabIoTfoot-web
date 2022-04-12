const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({ apiVersion: '2012-08-10', region: 'eu-central-1' });
const { main , replacer} = require('../utils/formatData');
const Status = require('../utils/Status');

exports.handler = async(event) => {
  let playersMap;

  const params = {
    TableName: process.env.BABYFOOT_TABLE,
    ExpressionAttributeValues: {
      ":status1": Status.abandonned,
      ":status2": Status.finished
    },
    FilterExpression: "statut in (:status1, :status2)"
  };

  let response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    isBase64Encoded: false
  };

  try {
    const matches = await dynamoDBClient.scan(params).promise();

    playersMap = main(matches.Items);

    response.body = JSON.stringify(replacer(playersMap));
  } catch (error) {
    response.body = `Failed to fetch data : ${error.message}`
    return response;
  }
  
  console.log('response :>> ', response);
  return response
};