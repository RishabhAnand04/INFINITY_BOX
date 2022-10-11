
# Infinity Box

An expressJS application, which is a REST API

● User logins using a username and password

● Create a user account using username / password

● Discard the JWT Token used for logging in to the system

● Upload a new task to fetch latest tweets for the hashtag - #Bangalore

● List out all the tasks which were executed successfully/scheduled to be queued, and
provide the metadata, such as how much time did it take to execute, status code, number of tweets
fetched. Ignore for tasks, which are not completed

● List out the tasks which are completed. Same as /tasks/listTask but shows only
completed tasks.
## Prerequisites

● Twitter API Essential Access [(sign up here)](https://t.co/signup)

● A Project and an App created in the [dashboard](https://developer.twitter.com/en/portal/dashboard)

## JavaScript (Node.js) environment set up
```bash
  npm install bcrypt
```
```bash
  npm install express
```
```bash
  npm install passport
```
```bash
  npm install passport-jwt
```
```bash
  npm install jsonwebtoken
```
```bash
  npm install mongoose
```

```bash
  npm install needle
```


## API Reference

#### Get all items


| Key | Value     | Description                |
| :-------- | :------- | :------------------------- |
| `query` | `#Bangalore` | each query to submit to the recent search endpoint |





## Running the Project
● Start the server
```bash
  npm app.js
```
or
```bash
  npm start
```
● You can use Postman to test my API authentication
 
● First we will register the user with a post request with the URL 
```bash
  http://localhost:3000/user/register
```
in the body add two key value pairs
| Key | Value                        |
| :-------- | :-------               | 
| `email` | `emailid@email.com`      | 
| `password` | `password`      | 


● We will login with the registered user

Post request with the following URL
```bash
  http://localhost:3000/user/login
```
in the body add two key value pairs
| Key | Value                        |
| :-------- | :-------               | 
| `email` | `emailid@email.com`      | 
| `password` | `password`      | 

● Once Authenticated , a JWT token is sent back as a response to the POST request this JWT token is mandatory for further authorisation to create tasks

● We will GET request with the following URL
```bash
  http://localhost:3000/tasks/createTask
```
in the params section add two key value pairs
| Key | Value                        |
| :-------- | :-------               | 
| `secret_token` | `your JWT token`      | 
| `hashtag` | `keyword that you want to search`      | 

Result will be displayed in the Terminal








