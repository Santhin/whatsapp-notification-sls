# Project Title



## Versions
```
node --version
v16.11.1

npm --version
8.0.0

aws --version
aws-cli/1.22.17 Python/3.8.12 Linux/5.10.16.3-microsoft-standard-WSL2 botocore/1.23.17

sls --version
Framework Core: 2.63.0
Plugin: 5.5.0
SDK: 4.3.0
Components: 3.17.1
```

```
❯ sls invoke -f hello
{
    "statusCode": 200,
    "body": "{\n  \"message\": \"Go Serverless v1.0! Your function executed successfully!\",\n  \"input\": {}\n}"
}
```

## Project structure
```
.
├── README.md
├── handler.js
└── serverless.yml
```