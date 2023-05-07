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
exports.deleteComment = exports.putComment = exports.postComment = exports.getComments = exports.getComment = void 0;
//import { getCommentsServices } from "../services/comment.Service";
//import  CommentModels  from "../db/models/Comment";
const getComments = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /*try {
        const response =  await getCommentsServices();
        res.json(response);
        // return response ? res.status(200).json(response) : res.status(404).json({error: response})
    } catch (e) {
        handleHttp(res , "ERROR_GET_COMMENT", e)
    }*/
});
exports.getComments = getComments;
const getComment = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /*try {
      const { id } = req.params;
      const comment = await CommentModels.findOne({ where: { id } });
      if (!comment) {
        res.status(404).json({ message: 'Comment not found' });
        return;
      }
      res.json(comment);
  } catch (e) {
      handleHttp(res , "ERROR_GET_COMMENT", e)
  }*/
});
exports.getComment = getComment;
const postComment = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /*try {
      const postComment = await CommentModels.create(req.body);
      res.status(201).json(postComment);
    
  } catch (e) {
      handleHttp(res , "ERROR_POST_COMMENT", e)
  }*/
});
exports.postComment = postComment;
const putComment = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /*try {
      const { id } = req.params;
      const { userId, courseId, rating, comment } = req.body;
      const commentToUpdate = await CommentModels.findOne({ where: { id } });
      if (!commentToUpdate) {
        res.status(404).json({ message: 'Comment not found' });
        return;
      }
      await CommentModels.update(
        { userId, courseId, rating, comment },
        { where: { id } }
      );
      res.json({ message: 'Comment updated successfully' });
      } catch (e) {
          handleHttp(res , "ERROR_PUT_COMMENT", e)
      }*/
});
exports.putComment = putComment;
const deleteComment = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    /*try {
      const { id } = req.params;
      const commentToDelete = await CommentModels.findOne({ where: { id } });
      if (!commentToDelete) {
        res.status(404).json({ message: 'Comment not found' });
        return;
      }
      await CommentModels.destroy({ where: { id } });
      res.json({ message: 'Comment deleted successfully' });
  } catch (e) {
      handleHttp(res , "ERROR_DELETE_COMMENT", e)
  }*/
});
exports.deleteComment = deleteComment;
