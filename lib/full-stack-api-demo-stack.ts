import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from "aws-cdk-lib/aws-lambda";
import { S3ToLambdaProps, S3ToLambda } from '@aws-solutions-constructs/aws-s3-lambda';
import { CloudFrontToS3 } from '@aws-solutions-constructs/aws-cloudfront-s3';

/*
// AWS Solution construct to deploy to S3
*/

export class FullStackApiDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new S3ToLambda(this, 'test-s3-lambda', {
      lambdaFunctionProps: {
        code: lambda.Code.fromAsset(`${__dirname}/LAMBDA3.zip`),
        runtime: lambda.Runtime.NODEJS_14_X,
        handler: 'index.handler'
      },
    });

    new CloudFrontToS3(this, 'test-cloudfront-s3', {
      // code to deploy S3 to cloudfront goes here

    });

  }
}
