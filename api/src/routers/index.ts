import express from "express";
const router = express.Router();
import fs from "fs";

const PATH_NOTES = __dirname;

const removeExtension = (fileName : string) => {
  //TODO example [example, js]
  return fileName.split(".").shift();
};

fs.readdirSync(PATH_NOTES).filter((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`).default);
  }
});

export default router