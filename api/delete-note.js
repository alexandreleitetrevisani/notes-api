
/**
 *  Route: DELETE  /note
 */

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-2'});

const util = require('./util.js');

const dýnamo = AWS.DynamoDB.DocumentClient();
const tableName = process.env.NOTES_TABLE


exports.handler  = async (event) => {
    try {
        return {
            statusCode: 200,
            headers: util.getResponseHeaders(),
            body: JSON.stringify({

            })
        }
        
    } catch (err){
        console.log("Error", err);
        return {
            statusCode: err.statusCode ? err.statusCode : 500,
            headers: util.getResponseHeaders(),
            body: JSON.stringfy({
                error: err.name ? err.name : "Exception",
                message: err.message ? err.message : "Unknown error"
            })
        }
    }
}