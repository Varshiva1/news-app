export default function NewsArticle({ data }) {
  return (
    <div className="news">
      <h2 className="news-title">{data.title}</h2>
      <p className="news-desc">{data.description}</p>
      <div className="news-author">{data.creator}</div>
      <span className="news-published">{data.pubDate}</span>
      <span className="news-source">{data.source_id}</span>
    </div>
  );
}
