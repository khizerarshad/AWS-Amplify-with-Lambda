We can use AWS Amplify to secure your S3 bucket and restrict the number of downloads for an object. Here are the steps to achieve this:

1. Create an AWS Amplify app and integrate it with your S3 bucket. (Already Done)

2. Set up AWS Identity and Access Management (IAM) roles to allow the Amplify app to access the S3 bucket. (Already Done)

3. Create an AWS Lambda function that tracks the number of downloads for an object and restricts the number of downloads based on your requirements. (TBD)

4. Use AWS Amplify Storage to interact with the S3 bucket and add the Lambda function to your app. (TBD)

5. Use Amplify's authentication and authorization features to restrict access to the object based on user roles and permissions. (TBD)
