"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.signin = exports.signup = void 0;
const dto_1 = require("./dto");
const class_validator_1 = require("class-validator");
const users_1 = require("../services/users");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { name, password, email, avatar } = req.body;
        const dto = new dto_1.userDto();
        dto.email = email;
        dto.name = name;
        dto.password = password;
        dto.avatar = avatar;
        const validator = yield (0, class_validator_1.validate)(dto);
        if (validator.length > 0)
            throw new Array(validator);
        const signIn = yield (0, users_1.signupService)(dto.name, dto.password, dto.email, dto.avatar);
        res.json(signIn).status(201);
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, password } = req.body;
    try {
        const dto = new dto_1.userDto();
        dto.email = email;
        dto.password = password;
        const validator = yield (0, class_validator_1.validate)(dto);
        if (validator.length > 0)
            throw new Array(validator);
        const login = yield (0, users_1.signInService)(dto.email, dto.password);
        res.json(login).status(200);
    }
    catch (error) {
        if (error instanceof Array)
            res.json(error).status(403);
    }
});
exports.signin = signin;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        const result = yield (0, users_1.removeUser)(Number(id));
        res.json(result).status(200);
    }
    catch (error) {
        res.json(error).status(503);
    }
});
exports.deleteUser = deleteUser;
