import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactTyped } from 'react-typed';

import "./About.css";
import sections from "content/members_2024_25/MembersAndSections";
import aboutImage from "assets/about_us2.jpg";


const About = () => {
  return (
    <div className="about-page">
      <img src={aboutImage} alt="About Us" className="about-image" />
      <div className="about-content">
        <ReactTyped
          strings={["About Us"]}
          typeSpeed={100}
          startDelay={100}
          className="h1"
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

          {/* data-num-cols attribute is used by CSS to set max-width */}
          <div className="members-container" data-num-cols={section.numCols}>
            {/* Each member */}
            {section.members.map((member) =>
              <div className="member" key={member.name}>
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.position}</p>
                <div className="social-icons">
                  {member.linkInstagram ? <a href={member.linkInstagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a> : <></>}
                  {member.linkLinkedIn ? <a href={member.linkLinkedIn} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a> : <></>}
                  {member.linkGitHub ? <a href={member.linkGitHub} target="_blank" rel="noopener noreferrer"><FaGithub /></a> : <></>}
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
