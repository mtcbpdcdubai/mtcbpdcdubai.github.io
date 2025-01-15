import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

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

export default Member;
