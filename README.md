
# Wiki-API

Wiki-API is an Application Programming Interface which you can receive json output when you send get,post,put,patch,delete requests.


## Tech Stack


**Server:** Node.js, Express, MongoDB, Mongoose


## Installation

Clone the project

```bash
  git clone https://github.com/atayiilmaz/Wiki-API
```

Go to the project directory

```bash
  cd wiki-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  nodemon app.js
```

Also make sure that you have started the mongoDB server on localhost.
## Usage/Examples

GET http://localhost:3000/articles --> get all articles

POST http://localhost:3000/articles --> post an article

DELETE http://localhost:3000/articles --> delete all articles

GET http://localhost:3000/articles/{articleTitle} --> get an article by title

PUT http://localhost:3000/articles/{articleTitle} --> update an article by title

PATCH http://localhost:3000/articles/{articleTitle} --> update an article by title

DELETE http://localhost:3000/articles/{articleTitle} --> delete an article by title


