# This is a demo project to run esri-rest-apis.
## Folder Structure and Rationale
The folder is structured such that the parent project is a CDK project while the LAMBDA folders contain code to run LAMBDA. There are 3 LAMBDA folders. LAMBDA and LAMBDA2 only showcases the dependency used to run the API. LAMBDA3 showcases the full demo to retrieve coordinates and run the point geometry.

1. LAMBDA - small demo using the esri-rest-request dependency.
2. LAMBDA2- small demos using node-fetch
3. LAMBDA3 - full demo using axios with the Jest test framework:
    a. In LAMBDA3 - index.ts is a quick and dirty implementation to return values. 
    b. index_refactor.ts would be the start of a commercial grade implementation with test cases for each API call.

## Instructions
Here are the instructions to run the program:

1. git clone the repo into a directory using https://github.com/ramayas/esri-rest-api-demo.git or download the zip file.
2. in the parent directory run :
                                npm install
                                npm install @aws-solutions-constructs/aws-cloudfront-s3
                                npm install @aws-solutions-constructs/aws-s3-lambda
The aws solution constructs are required to run the CDK to install the code to S3 and consequently setup with a cloudfront distribution.
3. CD into each LAMBDA directory and run npm install. This will install your node modules for each LAMBDA. 
4. In the LAMBDA folder run "npm run start". 
5. In the LAMBDA2 folder run "npx tsc", followed by "npm run start". Remember not include the double quotes.
6. In the LAMBDA3 folder, after running npm install as described in step 3, run "npm install @type/js-yaml"     to install the dependency required for reading yaml files via typescript.
7. While in the LAMBDA3 folder, run "npm run start". This will default to running the refactored index_refactor.ts file. Change the start instructions in the package file to index.ts to run the alternative.
8. To test, run npm run test to run the test scripts.

## CDK
On the parent directory - CDK list, synth and deploy will list, synthesize and deploy a lambda function with the lambda folder zipped to an S3 bucket to the specified AWS environment. The environment is not specified here for privacy reasons. The zipped lambda folder will contain the index file and the dependencies required.

