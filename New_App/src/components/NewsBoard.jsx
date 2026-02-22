import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import '../App.css'

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setArticles([]); // prevent crash
        }
      })
      .catch(err => {
        console.error("API Error:", err);
        setArticles([]);
      });
  }, [category]);

  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h2 className='text-center py-3'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>

      <div className='news-container'>
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))
        ) : (
          <p className="text-center">No news available</p>
        )}
      </div>
    </div>
  );
}

export default NewsBoard;