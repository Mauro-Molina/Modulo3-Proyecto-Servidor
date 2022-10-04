//Model Post
const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;