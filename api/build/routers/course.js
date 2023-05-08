"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const course_1 = require("../controllers/course");
const router = (0, express_1.Router)();
/**
 * https://localhost:3000/[GET]
 */
router.get("/", course_1.getAll);
router.get("/:id", course_1.getOneCourse);
router.post("/", course_1.createCourse);
router.put("/:id", course_1.modifyCourse);
router.put("remove/:id", course_1.deleteCourse);
exports.default = router;
