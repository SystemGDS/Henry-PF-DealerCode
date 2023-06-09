"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users_1 = require("../controllers/users");
router.post('/signup', users_1.signup);
router.post('/signin', users_1.signin);
router.put('/:id', users_1.deleteUser);
exports.default = router;
