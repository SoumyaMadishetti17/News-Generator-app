import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import NewsItem from './NewsItem';
import '../App.css'

const NewsBoard = ({category}) => {
    const [articles,setArticles]=useState([]);
    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`

        fetch(url).then(res=>res.json()).then(data=>setArticles(data.articles))
    },[category])
  return (
    <div style={{backgroundColor:'gray'}}>
        <h2 className='text-center py-3 '>Latest <span className='badge bg-danger'>News</span></h2>
        <div className='news-container'>
            {articles.map((news,index)=>{
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
            })}
        </div>
        
    </div>
  )
}

export default NewsBoard