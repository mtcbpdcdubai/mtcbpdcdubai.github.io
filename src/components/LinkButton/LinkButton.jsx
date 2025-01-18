import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

/** LinkButton component renders a button wrapped in a Link.
 * @param {Object} props The properties object.
 * @param {import("react-router-dom").To} props.to The path to link to.
 * @param {string} [props.className] Optional CSS class.
 * @param {import("react").CSSProperties} [props.style] Optional CSS styles.
 */
export default function LinkButton({children, to, className, style}) {
    return <Link to={to}>
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
    style: PropTypes.object,
};
