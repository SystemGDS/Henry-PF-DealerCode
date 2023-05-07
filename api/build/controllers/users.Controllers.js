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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = exports.signup = void 0;
const dto_1 = require("./dto");
const class_validator_1 = require("class-validator");
const argon2_1 = __importDefault(require("argon2"));
const models_1 = require("../db/models");
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = models_1.models;
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
        const uniqueEmail = yield user.findOne({
            where: {
                email: dto.email,
            },
        });
        if (uniqueEmail)
            throw new Error("Credentials Taken");
        const hashPass = yield argon2_1.default.hash(dto.password);
        const newUser = yield user.create({
            name,
            password: hashPass,
            email,
            avatar: !avatar
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71xOBIcQUs2yi94FYFxVPd5llqJ_b7eN4rZC59SwW&s"
                : avatar,
        });
        res.json(newUser).status(201);
    }
    catch (error) {
        if (error instanceof Array)
            res.status(403).json(error);
        if (error instanceof Error)
            res.status(403).json({ message: error.message });
    }
});
exports.signup = signup;
const signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = models_1.models;
    let { email, password } = req.body;
    try {
        const dto = new dto_1.userDto();
        dto.email = email;
        dto.password = password;
        const verifyUser = yield user.findOne({
            where: {
                email: dto.email,
            },
        });
        if (!verifyUser)
            throw new Error("Credentials invalid");
        const db = verifyUser;
        const pwMatches = argon2_1.default.verify(db.password, dto.password);
        if (!pwMatches)
            throw new Error("Credentials invalid");
        res.json(verifyUser).status(200);
    }
    catch (error) {
        if (error instanceof Error)
            res.status(403).json(error.message);
        // Posible error del servidor
        res.status(503).json(error.message);
    }
});
exports.signin = signin;
