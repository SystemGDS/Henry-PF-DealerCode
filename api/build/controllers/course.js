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
exports.deleteCourse = exports.modifyCourse = exports.createCourse = exports.getOneCourse = exports.getAll = void 0;
const course_1 = require("../services/course");
const dto_1 = require("./dto");
const class_validator_1 = require("class-validator");
const getAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, course_1.getAllCourses)();
        res.json(result).status(200);
    }
    catch (error) {
        res.json(error).status(503);
    }
});
exports.getAll = getAll;
const getOneCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield (0, course_1.getCourseById)(Number(id));
        res.json(result);
    }
    catch (error) {
        res.json(error).status(503);
    }
});
exports.getOneCourse = getOneCourse;
const createCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { title, description, instructor, price, thumbnail } = req.body;
        const dto = new dto_1.CourseDto();
        dto.title = title;
        dto.description = description;
        dto.instructor = instructor;
        dto.price = price;
        dto.thumbnail = thumbnail;
        const validator = yield (0, class_validator_1.validate)(dto);
        if (validator.length > 0)
            throw new Array(validator);
        const result = yield (0, course_1.insertCourse)(dto.title, dto.description, dto.instructor, dto.thumbnail, dto.price);
        console.log(result);
        res.json(result).status(201);
    }
    catch (error) {
        res.json(error).status(503);
    }
});
exports.createCourse = createCourse;
const modifyCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    let { title, description, instructor, price, thumbnail } = req.body;
    const dto = new dto_1.CourseDto();
    dto.title = title;
    dto.description = description;
    dto.instructor = instructor;
    dto.price = price;
    dto.thumbnail = thumbnail;
    const validator = yield (0, class_validator_1.validate)(dto);
    if (validator.length > 0)
        throw new Array(validator);
    try {
        const result = yield (0, course_1.updateCourse)(dto, Number(id));
        res.json(result).status(200);
    }
    catch (error) {
        res.json(error).status(503);
    }
});
exports.modifyCourse = modifyCourse;
const deleteCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { id } = req.params;
    try {
        const result = yield (0, course_1.removeCourse)(Number(id));
        res.json(result).status(200);
    }
    catch (error) {
        res.json(error).status(503);
    }
});
exports.deleteCourse = deleteCourse;
