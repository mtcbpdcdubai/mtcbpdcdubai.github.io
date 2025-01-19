import "./About.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import aboutImage from "assets/about_us.jpg";
import sections from "content/members/MembersAndSections";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div className="about-page">
      <img src={aboutImage} alt="About Us" className="about-image" />
      <div className="about-content">
        <TypeAnimation
          sequence={[
            "About Us",
            1000,

          ]}
          wrapper="h1"
          repeat={Infinity}
          speed={300}
        />
        <p>
          The Microsoft Tech Club is a student-led organization that is
          dedicated to fostering a community of like-minded individuals who are
          passionate about technology and innovation.
        </p>
        <p>
          Our goal is to provide members with opportunities to learn, grow, and
          connect with each other. Join us today and become a part of this
          exciting community!
        </p>
      </div>

      <h2>MTC Council 2024-25</h2>

      {/* Section for each Team */}
      {sections.map((section) =>
        <div className="section" key={section.sectionTitle}>
          <h3>{section.sectionTitle}</h3>

          <div className="members-container" style={{maxWidth: `${section.numCols * (20 + 270) + 10}px`}}>
            {/* Each member */}
            {section.members.map((member) =>
              <div className="member" key={member.name}>
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.position}</p>
                <div className="social-icons">
                  {member.linkInstagram ? <a href={member.linkInstagram} target="_blank"><FaInstagram /></a> : <></>}
                  {member.linkLinkedIn ? <a href={member.linkLinkedIn} target="_blank"><FaLinkedin /></a> : <></>}
                  {member.linkGitHub ? <a href={member.linkGitHub} target="_blank"><FaGithub /></a> : <></>}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default About;
