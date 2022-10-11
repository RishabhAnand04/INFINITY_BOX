
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








