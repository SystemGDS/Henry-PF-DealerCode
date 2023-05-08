"use strict";
const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    "development": {
        "username": String(process.env.DB_USERNAME),
        "password": String(process.env.DB_PASSWORD),
        "database": String(process.env.DB_NAME),
        "host": String(process.env.DB_HOST),
        "dialect": String(process.env.DB_DIALECT),
        "connString": process.env.POSTGRE_URL
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
        "host": String(process.env.DB_HOST),
        "dialect": String(process.env.DB_DIALECT),
        "connString": process.env.POSTGRE_URL
    }
};
