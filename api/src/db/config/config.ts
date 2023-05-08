const dotenv = require('dotenv') 
dotenv.config()

export = {
  "development": {
    "username": String(process.env.DB_USERNAME),
    "password": String(process.env.DB_PASSWORD),
    "database": String(process.env.DB_NAME),
    "host": String(process.env.DB_HOST),
    "dialect": String(process.env.DB_DIALECT),
    "deploy": String(process.env.DB_DEPLOY)
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": String(process.env.DB_USERNAME),
    "password": String(process.env.DB_PASSWORD),
    "database": String(process.env.DB_NAME),
    "host": String(process.env.DB_HOST),
    "dialect": String(process.env.DB_DIALECT),
    "deploy" : process.env.DB_DEPLOY
  }
}