import * as cdk from '@aws-cdk/core';
import * as lambda from "@aws-cdk/aws-lambda"
import * as apigw from "@aws-cdk/aws-apigateway"
import { HitCounter } from './hit-counter';

export class CdkTutorialStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_10_X,
      code: lambda.Code.fromAsset("lambda"),
      handler: "hello.handler"
    })

    const helloWithCounter = new HitCounter(this, "HelloHitCounter", {
      downstrem: hello
    })

    new apigw.LambdaRestApi(this, "EndPoint", {
      handler: helloWithCounter.handler,
    })
  }

}
