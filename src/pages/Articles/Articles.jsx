import { FaMedium } from "react-icons/fa";
import LinkButton from 'src/components/LinkButton/LinkButton';
import { articles } from 'content/articles/Articles';
import './Articles.css';


export default function Articles() {
  return (
    <div className="articles-page">
      <h2>Explore Our Articles</h2>
      <div className="articles-cards">
        {articles.map(article => (
          <div className="article-card card-1" key={article.link}>
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.preview}</p>
              <LinkButton className="read-more-button blue-button" newTab to={article.link}>
                <FaMedium />
                Read More
              </LinkButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
