import { Link } from 'react-router-dom';
import './NotFound.css';
import * as Paths from "src/Paths";

export default function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to={Paths.ROOT} className="home-link">Go back to Home</Link>
    </div>
  );
}
