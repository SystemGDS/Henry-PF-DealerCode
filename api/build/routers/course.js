"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_Controllers_1 = require("../controllers/course.Controllers");
const router = (0, express_1.Router)();
/**
 * https://localhost:3000/[GET]
 */
router.get('/', course_Controllers_1.getCourses);
router.get('/:id', course_Controllers_1.getCourse);
router.post('/', course_Controllers_1.postCourse);
router.put('/:id', course_Controllers_1.putCourse);
router.delete('/:id', course_Controllers_1.deleteCourse);
exports.default = router;
