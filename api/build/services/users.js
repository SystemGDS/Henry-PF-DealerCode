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
exports.removeUser = exports.signInService = exports.signupService = void 0;
const models_1 = require("../db/models");
const argon2 = __importStar(require("argon2"));
const jwt = __importStar(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const getTokens = (userId, email) => __awaiter(void 0, void 0, void 0, function* () {
    const secret = String(process.env.RT_TOKEN);
    const JwtPayload = {
        sub: userId,
        email,
    };
    const [rt] = yield Promise.all([
        jwt.sign({
            exp: 60 * 15,
            data: JwtPayload,
        }, secret),
    ]);
    return { rt: rt };
});
const updateRt = (userId, rt) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = models_1.models;
    const hash = yield argon2.hash(rt);
    const subject = yield user.findOne({
        where: {
            id: userId,
        },
    });
    yield subject.update({
        rtHash: hash,
    });
});
const signupService = (name, password, email, avatar) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = models_1.models;
    try {
        const uniqueEmail = yield user.findOne({
            where: {
                email: email,
            },
        });
        if (uniqueEmail)
            throw new Error("Credentials Taken");
        const hashPass = yield argon2.hash(password);
        const newUser = yield user.create({
            name,
            password: hashPass,
            email,
            avatar: !avatar
                ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71xOBIcQUs2yi94FYFxVPd5llqJ_b7eN4rZC59SwW&s"
                : avatar,
        });
        const tokens = yield getTokens(newUser.id, newUser.email);
        yield updateRt(newUser.id, tokens.rt);
        return {
            name: newUser.name,
            email: newUser.email,
            token: tokens.rt,
        };
    }
    catch (error) {
        console.log(error);
        if (error instanceof Error)
            return { message: error.message };
    }
});
exports.signupService = signupService;
const signInService = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user } = models_1.models;
        const verifyUser = yield user.findOne({
            where: {
                email: email,
                isDeleted: false
            },
        });
        if (!verifyUser)
            throw new Error("Credentials invalid");
        const db = verifyUser;
        const pwMatches = argon2.verify(db.password, password);
        if (!pwMatches)
            throw new Error("Credentials invalid");
        const token = yield getTokens(db.id, db.email);
        console.log(token);
        return db;
    }
    catch (error) {
        return { error: error.message };
    }
});
exports.signInService = signInService;
const removeUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const { user } = models_1.models;
    try {
        yield user.update({ isDelete: true }, {
            where: {
                id: userId
            }
        });
        return 'El usuario fue borrado correctamente';
    }
    catch (error) {
        throw new Error(`Algo salio mal ${error.message}`);
    }
});
exports.removeUser = removeUser;
