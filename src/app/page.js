import React from 'react';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const url =
      'https://newsapi.org/v2/top-headlines?country=br&apiKey=YOUR_API_KEY';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
      });
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <a href={article.url}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
