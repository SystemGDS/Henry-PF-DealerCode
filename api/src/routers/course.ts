import { Router } from "express";
import {
  createCourse,
  modifyCourse,
  deleteCourse,
  getOneCourse,
  getAll,
} from "../controllers/course";

const router = Router();

/**
 * https://localhost:3000/[GET]
 */

router.get("/", getAll);

router.get("/:id", getOneCourse);

router.post("/", createCourse);

router.put("/:id", modifyCourse);

router.delete("/:id", deleteCourse);

export default router;
