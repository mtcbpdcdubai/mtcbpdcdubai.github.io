import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


/** LinkButton component renders a button wrapped in a Link.
 * @param {Object} props The properties object.
 * @param {import("react-router-dom").To} props.to The path to link to.
 * @param {string} [props.className] Optional CSS class for the <button>.
 * @param {string} [props.classNameLink] Optional CSS class for the <a> link.
 * @param {import("react").CSSProperties} [props.style] Optional CSS styles for the <button>.
 * @param {boolean} [props.newTab] Whether to open the link in a new tab.
 */
export default function LinkButton({ children, to, className, classNameLink, style, newTab }) {
  // https://stackoverflow.com/a/41031849/3425496
  return <Link to={to} {...(newTab && {target: "_blank", rel: "noopener noreferrer"})} className={classNameLink}>
    <button className={className} style={style}>{children}</button>
  </Link>
}

LinkButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  className: PropTypes.string,
  classNameLink: PropTypes.string,
  style: PropTypes.object,
  newTab: PropTypes.bool,
};
