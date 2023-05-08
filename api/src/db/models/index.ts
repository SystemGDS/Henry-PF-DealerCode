import * as fs from 'fs'
import path from 'path'
import { Sequelize } from 'sequelize-typescript'
import { DataTypes } from 'sequelize'
import config from '../config/config'

const { development } = config;
const basename = path.basename(__filename )


interface dbI {
    [key : string] : any
}

const db : dbI = {}

let SqlConn = new Sequelize(development.deploy , {//development.database,development.username,development.password
    host : development.host,
    dialect : 'postgres'
})

fs
  .readdirSync(__dirname)
  .filter(file  => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      (file.slice(-3) === '.ts' || file.slice(-3) === '.js') &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {

     const model = require(path.join(__dirname, file));
     model.default(SqlConn, DataTypes)    
     db[model.name] = model;
  })

  Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  db.sequelize = SqlConn;
  db.Sequelize = Sequelize;

  export const models = db.sequelize.models
