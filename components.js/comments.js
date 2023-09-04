import React from 'react';

const Comments = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <strong>{comment.email}</strong>: {comment.comment}
          <ul>
            {comment.replies.map((reply) => (
              <li key={reply.id}>
                {reply.email}: {reply.comment}
                {reply.likes} curtidas
              </li>
            ))}
          </ul>
          <button onClick={() => comment.like()}>Curtir</button>
        </li>
      ))}
    </ul>
  );
};

export default Comments;
