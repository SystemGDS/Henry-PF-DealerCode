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
exports.deleteCourse = exports.putCourse = exports.postCourse = exports.getCourses = exports.getCourse = void 0;
const error_handle_1 = require("../utils/error.handle");
const course_Service_1 = require("../services/course.Service");
const getCourses = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, course_Service_1.getCoursesServices)();
        res.json(response);
        // return response ? res.status(200).json(response) : res.status(404).json({error: response}) 
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_COURSE", e);
    }
});
exports.getCourses = getCourses;
const getCourse = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const response = yield (0, course_Service_1.getCourseServices)(Number(id));
        res.json(response);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_COURSES", e);
    }
});
exports.getCourse = getCourse;
const postCourse = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /*try {
      const { course } = req.body
      const response = await CourseModels.create({course});
      res.status(201).json(response);
    
  } catch (e) {
      handleHttp(res , "ERROR_POST_COURSE", e)
  }*/
});
exports.postCourse = postCourse;
const putCourse = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /*try {
      const curso = await CourseModels.findByPk(req.params.id);
      if (curso) {
        const updatedCurso = await curso.update(req.body);
        res.json(updatedCurso);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
      } catch (e) {
          handleHttp(res , "ERROR_GET_COURSE", e)
      }*/
});
exports.putCourse = putCourse;
const deleteCourse = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /* try {
       const [deleted] = await CourseModels.update(req.body, {
         where: { id: req.params.id },
       });
       if (deleted) {
         const updatedUser = await CourseModels.findByPk(req.params.id);
         res.json(updatedUser);
       } else {
         res.status(404).json({ message: 'User not found' });
       }
       } catch (e) {
           handleHttp(res , "ERROR_GET_COURSE", e)
       }*/
});
exports.deleteCourse = deleteCourse;
