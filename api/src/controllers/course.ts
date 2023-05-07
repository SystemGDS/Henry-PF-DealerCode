// import { handleHttp } from "../utils/error.handle";
import { Request, Response } from "express";
import { insertCourse, removeCourse, getAllCourses, getCourseById, updateCourse } from "../services/course";
import { CourseDto } from "./dto";
import { validate } from "class-validator";

export const getAll = async (_req: Request, res: Response) => {
    try {
      const result = await getAllCourses()

      res.json(result).status(200)
    } catch (error) {
      res.json(error).status(503)
    }
};

export const getOneCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getCourseById(Number(id));
    res.json(result);
  } catch (error) {
    res.json(error).status(503)
  }
};

export const createCourse = async (req: Request, res: Response) => {
  try {

    let { title, description, instructor, price, thumbnail } = req.body;

    const dto = new CourseDto();
    dto.title = title;
    dto.description = description;
    dto.instructor = instructor;
    dto.price = price;
    dto.thumbnail = thumbnail;

    const validator = await validate(dto);

    if (validator.length > 0) throw new Array(validator);

    const result = await insertCourse(dto.title, dto.description, dto.instructor, dto.thumbnail, dto.price)
    console.log(result)
    res.json(result).status(201)

  } catch (error) {

    res.json(error).status(503)
  }
};

export const modifyCourse = async (req: Request, res: Response) => {

  let { id } = req.params;
  let { title, description, instructor, price, thumbnail } = req.body;

    const dto = new CourseDto();
    dto.title = title;
    dto.description = description;
    dto.instructor = instructor;
    dto.price = price;
    dto.thumbnail = thumbnail;

    const validator = await validate(dto);

    if (validator.length > 0) throw new Array(validator);

  try {
    const result = await updateCourse(dto,Number(id))

    res.json(result).status(200)
  } catch (error) {
    res.json(error).status(503)
  }
};

export const deleteCourse = async (req: Request, res: Response) => {
  
  let { id } = req.params
  
  try {
    const result = await removeCourse(Number(id))
    res.json(result).status(200)
  } catch (error) {
    res.json(error).status(503)
  }
};


