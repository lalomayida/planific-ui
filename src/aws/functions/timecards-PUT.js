"use strict";

var AWS = require("aws-sdk");

var dynamo =  new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

  dynamo.put(
    {
      TableName: "timecards",
      Item: event 
      
    },
    function (err, data) {
      if (err !== null) {
        callback(err);
      } else {
        callback(null, data);
      }
    }
  );
};
