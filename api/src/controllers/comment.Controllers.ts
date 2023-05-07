
//import  { handleHttp } from "../utils/error.handle"
import { Request, Response } from 'express';
//import { getCommentsServices } from "../services/comment.Service";
//import  CommentModels  from "../db/models/Comment";

const getComments = async (_req: Request, _res: Response) => {
    /*try {
        const response =  await getCommentsServices();
        res.json(response);
        // return response ? res.status(200).json(response) : res.status(404).json({error: response}) 
    } catch (e) {
        handleHttp(res , "ERROR_GET_COMMENT", e)
    }*/
}
const getComment = async (_req: Request, _res: Response) => {
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
};

const postComment = async (_req: Request, _res: Response) => {
  /*try {
    const postComment = await CommentModels.create(req.body);
    res.status(201).json(postComment);
  
} catch (e) {
    handleHttp(res , "ERROR_POST_COMMENT", e)
}*/
};

const putComment = async (_req: Request, _res: Response) => {
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
};

const deleteComment = async (_req: Request, _res: Response) => {
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
};


export  { getComment, getComments, postComment, putComment, deleteComment }

