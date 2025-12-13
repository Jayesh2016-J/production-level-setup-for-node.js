const Post  = require('../model/post')

exports.createPost = async (req, res) => {
    try {
        const {contain, image, user_id} = req.body
        const post = await Post.create({contain, image, user_id})
        const result = await Post.findById(post._id)
        res.status(201).json({message:"Post created successfully", data:result})

    } catch (error) {
        res.status(500).json({message:"Post created failed", error:error})
    }
}

exports.getPost = async (req, res) => {
   try {
    const {user_id}=req.body;
    const user = await Post.find({user_id});
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const allpost = await Post.find({user_id});
    res.status(200).json({message:"Post fetched successfully", data:allpost})
    
   } catch (error) {
    res.status(500).json({message:"Post fetched failed", error:error})
   }
}
