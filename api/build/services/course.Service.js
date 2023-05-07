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
exports.getCourseServices = exports.getCoursesServices = exports.insertCourseServices = void 0;
const Course_1 = __importDefault(require("../db/models/Course"));
const insertCourseServices = (_course) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(Course_1.default);
    //const responseInsert = await CourseModels.create({course})
    //return responseInsert
});
exports.insertCourseServices = insertCourseServices;
const getCoursesServices = () => __awaiter(void 0, void 0, void 0, function* () {
    //const responseGetCourse = await CourseModels.findAll()
    //return responseGetCourse
});
exports.getCoursesServices = getCoursesServices;
const getCourseServices = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    //const responseGetCourse = await CourseModels.findByPk(id)
    //return responseGetCourse
});
exports.getCourseServices = getCourseServices;
