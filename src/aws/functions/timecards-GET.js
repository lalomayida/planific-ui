'use strict';

var AWS = require('aws-sdk');

var dynamo = new AWS.DynamoDB();
exports.handler = function (event, context, callback) {
    dynamo.query({
        TableName: 'timecards',
        Select: 'ALL_ATTRIBUTES',
        KeyConditionExpression: 'id = :id',
        ExpressionAttributeValues: { ':id': { S: event.id } }
    }, function (err, data) {
        if(err){
            callback(null,err);
        }
        else{
            formatTimecard(data,callback)
        }
    });
}

function formatTimecard(data,callback){

    var timecard = {};
    var headers = [];
    var timecardData = [];
    
    timecard.id = data.Items[0].id.S;
    timecard.date = data.Items[0].date.S;
    timecard.title = data.Items[0].title.S;
    timecard.details = {
    "headers":[],
    "data":{}
    };
    
    data.Items[0].details.M.headers.L.forEach(function(header){
        headers.push(header.S);
    });
    
    data.Items[0].details.M.data.L.forEach(function(detail){
        var availability = [];
        
         detail.M.availability.L.forEach(function(available){
                availability.push(available.BOOL);
            });
        
        timecardData.push({
            "time":{
              "hour":detail.M.time.M.hour.S,
              "meridian":detail.M.time.M.meridian.S
            },
            "availability":availability
        });
    });
    
    timecard.details.headers = headers;
    timecard.details.data = timecardData;
    
    callback(null,timecard);
}