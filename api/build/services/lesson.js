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
exports.getCourseLesson = exports.insertLesson = void 0;
const models_1 = require("../db/models");
const insertLesson = (courseId, title, content, videoUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const { lesson } = models_1.models;
    try {
        const newLesson = yield lesson.create({
            courseId,
            title,
            content,
            videoUrl,
        });
        return newLesson;
    }
    catch (error) {
        throw new Error(`algo salio mal ${error.message}`);
    }
});
exports.insertLesson = insertLesson;
const getCourseLesson = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { lesson } = models_1.models;
    try {
        const data = yield lesson.findAll({
            where: {
                courseId: id
            }
        });
        return data;
    }
    catch (error) {
    }
});
exports.getCourseLesson = getCourseLesson;
