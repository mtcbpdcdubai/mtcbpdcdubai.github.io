import { FaMedium } from "react-icons/fa";

import './Articles.css';
import { articles } from 'content/articles/Articles';
import LinkButton from 'src/components/LinkButton/LinkButton';


export default function Articles() {
  return (
    <div className="articles-page">
      <h1>Explore our Articles</h1>
      <div className="articles-cards">

        {articles.map(article => (
          <div className="article-card" key={article.link}>
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <h2>{article.title}</h2>
              <p>{article.preview}</p>
              <LinkButton newTab to={article.link}>
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
