"use strict";

var AWS = require("aws-sdk");

var dynamo = new AWS.DynamoDB();

exports.handler = function (event, context, callback) {
  dynamo.putItem(
    {
      TableName: "timecards",
      Item: {
        id:{ S: context.awsRequestId } ,
      },
    },
    function (err, data) {
      if (err !== null) {
        callback(err);
      } else {
        callback(null, {"id":context.awsRequestId});
      }
    }
  );
};
