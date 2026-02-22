import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import '../App.css'

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY

    // Use GNews (works in production)
    const url = `https://gnews.io/api/v4/top-headlines?lang=en&category=${category}&apikey=${apiKey}`

    setLoading(true)

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.articles) {
          setArticles(data.articles)
        } else {
          setArticles([])
        }
        setLoading(false)
      })
      .catch(err => {
        console.error("API Error:", err)
        setArticles([])
        setLoading(false)
      })
  }, [category])

  return (
    <div style={{ backgroundColor: 'gray' }}>
      <h2 className='text-center py-3'>
        Latest <span className='badge bg-danger'>News</span>
      </h2>

      {loading ? (
        <p className="text-center">Loading news...</p>
      ) : (
        <div className='news-container'>
          {articles.length > 0 ? (
            articles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.image}
                url={news.url}
              />
            ))
          ) : (
            <p className="text-center">No news available</p>
          )}
        </div>
      )}
    </div>
  )
}

export default NewsBoard