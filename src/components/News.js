import { UseNewsData } from "../News-context";
import NewsArticle from "./NewsArticle";
export default function News() {
  const { newsData } = UseNewsData();
  return (
    <div>
      <h1 className="head-text">News App 📰</h1>
      <div className="news-list">
        {newsData
          ? newsData.results.map((news) => <NewsArticle data={news} />)
          : "Loading Data from server..."}
      </div>
    </div>
  );
}
