export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "oddjobsclient": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "storage": {
        "s3oddjobsclientstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "api": {
        "oddjobsclient": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    }
}