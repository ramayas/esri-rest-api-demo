# This is a demo project to run esri-rest-apis.
The folder is structured such that the parent project is a CDK project while the LAMBDA folders contain code to run LAMBDA. There are 3 LAMBDA folders. LAMBDA and LAMBDA2 only showcases the dependency used to run the API. LAMBDA3 showcases the full demo to retrieve coordinates and run the point geometry.

LAMBDA - small demo using the esri-rest-request dependency.
LAMBDA2- small demos using node-fetch
LAMBDA3 - full demo using axios with the Jest test framework:
    In LAMBDA3 - index.ts is a quick and dirty implementation to return values. index_refactor.ts would be the start of a commercial grade implementation with test cases for each API call.

    
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

