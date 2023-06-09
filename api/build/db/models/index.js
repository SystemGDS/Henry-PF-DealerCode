"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.models = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
//import dotenv from 'dotenv'
//dotenv.config()
const { production } = config_1.default;
const basename = path_1.default.basename(__filename);
/*let SqlConn = new Sequelize(development.database,development.username,development.password, {
  host : development.host,
  dialect : 'postgres'
})*/
let SqlConn = new sequelize_typescript_1.Sequelize(`${production.connString}`);
const db = {};
//let SqlConn = new Sequelize(connString)
fs
    .readdirSync(__dirname)
    .filter(file => {
    return (file.indexOf('.') !== 0 &&
        file !== basename &&
        (file.slice(-3) === '.ts' || file.slice(-3) === '.js') &&
        file.indexOf('.test.js') === -1);
})
    .forEach(file => {
    const model = require(path_1.default.join(__dirname, file));
    model.default(SqlConn, sequelize_1.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = SqlConn;
db.Sequelize = sequelize_typescript_1.Sequelize;
exports.models = db.sequelize.models;
