import React from 'react';
import Comments from '../components/comments';

const Article = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <Comments comments={article.comments} />
    </div>
  );
};

export default Article;
