const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    contain: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, 
{
    timestamps: true
});
const Post = mongoose.model("Post", postSchema);
module.exports = Post;