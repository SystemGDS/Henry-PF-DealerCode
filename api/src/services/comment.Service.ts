import { Comment } from "../interface/comment.interface";
//import  CommentModels  from "../db/models/Comment";

const insertCommentServices = async ( _item: Comment) =>{
    //const responseInsert = await CommentModels.create()
    //return responseInsert
};

const getCommentsServices = async () => {
    //const responseGetComment = await CommentModels.findAll()
    //return responseGetComment
}

export { insertCommentServices,getCommentsServices };