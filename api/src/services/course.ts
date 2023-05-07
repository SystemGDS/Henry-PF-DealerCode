import { models } from "../db/models";
import { courseData } from "./interfaces";

const insertCourse = async (
  title: string,
  description: string,
  instructor: string,
  thumbnail: string,
  price: number
) => {
  const { course } = models;

  try {

    const newCourse = await course.create({
      title,
      description,
      instructor,
      thumbnail,
      price,
    });

    return newCourse;
  } catch (error: any) {
    throw new Error(`Algo salio mal ==> ${error.message}`);
  }
};

const getAllCourses = async () => {
  try {
    const { course } = models;

    const data = await course.findAll();

    return data;
  } catch (error: any) {
    throw new Error(`Algo salio mal ==> ${error.message}`);
  }
};

const getCourseById = async (courseId: number) => {
  try {
    const { course } = models;

    const item = await course.findByPk(courseId);

    if(!item) return 'Ese curso no existe'

    return item;
  } catch (error: any) {
    throw new Error(`Algo salio mal ==> ${error.message}`);
  }
};

const updateCourse = async (body: courseData, courseId: number) => {
  try {
    const { course } = models;

    await course.update(body, {
      where: {
        id: courseId,
      },
    });
    return "mensaje de todo ok";
  } catch (error: any) {
    throw new Error(`Algo salio mal ==> ${error.message}`);
  }
};

const removeCourse = async (courseId: number) => {
  try {
    const { course } = models;

    await course.destroy({
      where: {
        id: courseId,
      },
    });
    return "tu curso fue eliminado exitosamente";
  } catch (error: any) {
    throw new Error(`Algo salio mal ==> ${error.message}`);
  }
};

export {
  insertCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  removeCourse,
};
