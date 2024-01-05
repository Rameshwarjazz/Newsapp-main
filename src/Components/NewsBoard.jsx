import { useEffect } from "react";
import { useState } from "react"
import NewsItems from "./NewsItems";

const NewsBoard = ({category}) => {
    const[articles,setArticles]=useState([]);
    useEffect(() => {
        console.log("Fetching news data...");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        url = process.env.NODE_ENV === 'development' ? `http://localhost:3000/${url}` : url;

        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            console.log("News data received:", data);
            setArticles(data.articles);
          })
          .catch((error) => {
            console.error("Error fetching news data:", error);
          });
      }, [category]);
  return (
    <div>
        <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
        {articles.map((news,index)=>{
            return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}
    </div>
  )
}

export default NewsBoard
