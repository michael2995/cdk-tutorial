import {APIGatewayProxyHandler} from "aws-lambda"

export const handler: APIGatewayProxyHandler = async function(event) {
    console.log("request:", JSON.stringify(event, undefined, 2));
    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `ARE YOUR LISTENING TO ME?`
    };
};