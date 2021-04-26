# Rest Api Node.js, Express.js and MongoDB

REST API Development with Node.js, Express.js, and MongoDB to customer management.

## Features

- Routing with Express.js
- Mongoose ORM database
- Basic Authentication (Register/Login with hashed password)
- JWT Authentication Tokens
- Included CORS.

## How to install

### Clone the project from github

Open a terminal and type:

```sh
$ git clone https://github.com/neduardoaguirre/node-mongodb-rest-api.git
```

### Install npm dependencies after installing

```sh
$ cd node-mongodb-rest-api
$ npm install
```

### Setting up environments

1.  You will find a file named `.env.example` on root directory of project.
2.  Create a new file by copying and pasting the file and then renaming it to just `.env`
    ```sh
    $ cp .env.example .env
    ```
3.  The file `.env` is already ignored, so you never commit your credentials.
4.  Change the values of the file to your environment.
    ```sh
    PORT=yourPort
    MONGODB_URL=YourConnectionStringToMONGODB
    JWT_SECRET=yourSecret
    ```

## How to run

### Running API server locally

```sh
$ npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```sh
The server is running on port 4000
DB connected
```

Press CTRL + C to stop the process.

### Routes

- http://localhost:4000
  - /api/users
  - /api/auth
  - /api/customers

#### Requests with Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API

- User registration:

  - URL: http://localhost:4000/api/users
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "name": "usertest", "email":"usertest@usertest.com", "password": "123456"}`
  - Body Response: `{ "token": "token_value" }`

- User login:

  - URL: http://localhost:4000/api/auth
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "email":"usertest@usertest.com", "password": "123456"}`
  - Body Response: `{ "token": "token_value" }`

- Get logged user:

  - URL: http://localhost:4000/api/auth
  - Method: GET
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"user": {"_id": "id-user", "name": "usertest", "email": "usertest@usertest.com","__v": 0}}`

- Create a customer:

  - URL: http://localhost:4000/api/customers
  - Method: POST
  - Body: raw + JSON (application/json)
  - Body Content: `{ "firstName": "value", "lastName": "value","email": "value", "document": "value", "address": "value"}`
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"_id": "id-customer", "firstName": "value", "lastName": "value", "email": "value", "dni": "value", "address": "value", "created": "date", "createdBy": "id-user", "__v": 0}`

- Get customers:

  - URL: http://localhost:4000/api/customers
  - Method: GET
  - Body: raw + JSON (application/json)
  - Body Content: `{ "firstName": "value", "lastName": "value","email": "value", "document": "value", "address": "value"}`
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"customers": [{"_id": "id-customer", "firstName": "value", "lastName": "value", "email": "value", "document": "value", "address": "value", "created": "date", "createdBy": "id-user", "__v": 0},{...other customer},{...other customer}]}`

- Get a customer:

  - URL: http://localhost:4000/api/customers/id-customer
  - Method: GET
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"customers": [{"_id": "id-customer", "firstName": "value", "lastName": "value", "email": "value", "document": "value", "address": "value", "created": "date", "createdBy": "id-user", "__v": 0}]}`

- Edit a customer:

  - URL: http://localhost:4000/api/customers/id-customer
  - Method: PUT
  - Body: raw + JSON (application/json)
  - Body Content: `{ "firstName": "new-value", "lastName": "new-value","email": "new-value", "document": "new-value", "address": "new-value"}`
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"_id": "id-customer", "firstName": "new-value", "lastName": "new-value", "email": "new-value", "document": "new-value", "address": "new-value", "created": "date", "createdBy": "id-user", "__v": 0}`

- Delete a customer:
  - URL: http://localhost:4000/api/customers/id-customer
  - Method: DELETE
  - Headers: `KEY: x-auth-token` - `VALUE: token_value`
  - Body Response: `{"msg": "Customer deleted"}`
