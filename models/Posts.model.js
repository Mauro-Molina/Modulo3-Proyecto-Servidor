//Model Post
const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
      maxLength: 100,
    },

    imageUrl: String,
    
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;