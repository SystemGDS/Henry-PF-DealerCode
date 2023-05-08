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
exports.removeCourse = exports.updateCourse = exports.getCourseById = exports.getAllCourses = exports.insertCourse = void 0;
const models_1 = require("../db/models");
const insertCourse = (title, description, instructor, thumbnail, price) => __awaiter(void 0, void 0, void 0, function* () {
    const { course } = models_1.models;
    try {
        const newCourse = yield course.create({
            title,
            description,
            instructor,
            thumbnail,
            price,
        });
        return newCourse;
    }
    catch (error) {
        throw new Error(`Algo salio mal ==> ${error.message}`);
    }
});
exports.insertCourse = insertCourse;
const getAllCourses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course } = models_1.models;
        const data = yield course.findAll();
        return data;
    }
    catch (error) {
        throw new Error(`Algo salio mal ==> ${error.message}`);
    }
});
exports.getAllCourses = getAllCourses;
const getCourseById = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course } = models_1.models;
        const item = yield course.findByPk(courseId);
        if (!item)
            return 'Ese curso no existe';
        return item;
    }
    catch (error) {
        throw new Error(`Algo salio mal ==> ${error.message}`);
    }
});
exports.getCourseById = getCourseById;
const updateCourse = (body, courseId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course } = models_1.models;
        yield course.update(body, {
            where: {
                id: courseId,
            },
        });
        return "mensaje de todo ok";
    }
    catch (error) {
        throw new Error(`Algo salio mal ==> ${error.message}`);
    }
});
exports.updateCourse = updateCourse;
const removeCourse = (courseId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { course } = models_1.models;
        yield course.update({ isDeleted: true }, {
            where: {
                id: courseId
            }
        });
        return "tu curso fue eliminado exitosamente";
    }
    catch (error) {
        throw new Error(`Algo salio mal ==> ${error.message}`);
    }
});
exports.removeCourse = removeCourse;
