const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  replies: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      email: {
        type: String,
      },
      comment: {
        type: String,
      },
      likes: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
