//import model
const Post = require ("../models/postModel");
const Comment = require ("../models/commentModel");

//business logic
exports.createComment = async(req,res) =>{
    try{
        //fetch data from request body
        const {post,user,body} = req.body;

        //create a comment comject
        const comment = new Comment ({
            post, user, body
        });

        //save the new comment in database
        const savedComment = await comment.save();

        //find the post by ID , add the new comment to its comments array
        const updatePost = await Post.findByIdAndUpdate(post , {$push : {comments:savedComment, _id}} , {new:true})
                          .populate("comments") //update the comments array with comment documents
                          .exec();
        res.json({
            post:updatePost,

        });
    }
    catch(error){
      return res.status(500).json({
        error:"Error while creating comments",
      });
    }
}