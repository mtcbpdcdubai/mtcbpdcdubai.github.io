import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import PropTypes from 'prop-types';


/** @param {import("content/members/MembersAndSections").Member} props */
function Member(props) {
  return <div className="member">
    <img src={props.image} alt={props.name} />
    <h4>{props.name}</h4>
    <p>{props.position}</p>
    <div className="social-icons">
      {props.linkInstagram ? <a href={props.linkInstagram}><FaInstagram /></a> : <></>}
      {props.linkLinkedIn ? <a href={props.linkLinkedIn}><FaLinkedin /></a> : <></>}
      {props.linkGitHub ? <a href={props.linkGitHub}><FaGithub /></a> : <></>}
    </div>
  </div>
}

Member.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  linkInstagram: PropTypes.string,
  linkLinkedIn: PropTypes.string,
  linkGitHub: PropTypes.string,
};

export default Member;
