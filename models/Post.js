const { profile } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");

const PostSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    desc: {
        type: String,
        max: 500,
        },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
