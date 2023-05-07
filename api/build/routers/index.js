"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const fs_1 = __importDefault(require("fs"));
const PATH_NOTES = __dirname;
const removeExtension = (fileName) => {
    //TODO example [example, js]
    return fileName.split(".").shift();
};
fs_1.default.readdirSync(PATH_NOTES).filter((file) => {
    const name = removeExtension(file);
    if (name !== "index") {
        router.use(`/${name}`, require(`./${file}`).default);
    }
});
exports.default = router;
