import "./About.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import aboutImage from "../../assets/about_us.jpg";
import sections from "content/members/MembersAndSections";

const About = () => {
  return (
    <div className="about-page">
      <img src={aboutImage} alt="About Us" className="about-image" />
      <div className="about-content">
        <h1>About Us</h1>
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

      {sections.map((section) =>
        <div className="section">
          <h2>{section.sectionTitle}</h2>

          {section.members.map((member) =>
            <div className="member">
              <img src={member.image} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.position}</p>
              <div className="social-icons">
                {member.linkInstagram ? <a href={member.linkInstagram}><FaInstagram /></a> : <></>}
                {member.linkLinkedIn ? <a href={member.linkLinkedIn}><FaLinkedin /></a> : <></>}
                {member.linkGitHub ? <a href={member.linkGitHub}><FaGithub /></a> : <></>}
              </div>
            </div>
          )}
        </div>
      )}

      {/* <div className="core-members-section">
        <h2>Core Members</h2>

        <div className="core-members">
          <div className="member">
            <img src={coreMember1} alt="Aryan Satwani" />
            <h4>Aryan Satwani</h4>
            <p>Chair</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/aryan_satwani/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/aryan-satwani-43a46a211/"><FaLinkedin /></a>
              <a href="https://github.com/aryansatwani"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={coreMember2} alt="Mrudhula Rahate" />
            <h4>Mrudula Rahate</h4>
            <p>Co-Chair</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/mrudula12503/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/mrudula-rahate/"><FaLinkedin /></a>
              <a href="https://github.com/Mrudula1205"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={coreMember3} alt="Vennela Vallabhaneni" />
            <h4>Vennela Vallabhaneni</h4>
            <p>Vice Chair</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/venn.by/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/venn-v/"><FaLinkedin /></a>
              <a href="https://github.com/vennby"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={coreMember4} alt="Aditya Gopinath" />
            <h4>Aditya Gopinath</h4>
            <p>Ex-Officio</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/aditya_gopinath/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/aditya-gopinath-a907091ab/"><FaLinkedin /></a>
              <a href="https://github.com/adi14023"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={coreMember5} alt="Keane Coutinho" />
            <h4>Keane Coutinho</h4>
            <p>Treasurer & DevOps Head</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/keane_2703/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/keane-coutinho/"><FaLinkedin /></a>
              <a href="https://github.com/keanec27"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={coreMember6} alt="Lasya Sai" />
            <h4>Lasya Sai</h4>
            <p>General Secretary</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/lasyaasai_/"><FaInstagram /></a>
              <a href="http://www.linkedin.com/in/lasya-sai-dabbakuti-533625249"><FaLinkedin /></a>
              <a href="https://github.com/LasyaSai"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="tech-team-section">
        <h2>Tech Team</h2>

        <div className="tech-team">
          <div className="member">
            <img src={techMember1} alt="Shaik Mohammed Anas" />
            <h4>Shaik Mohammed Anas</h4>
            <p>Technical Head</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/armaan_0510/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/anas-shaik/"><FaLinkedin /></a>
              <a href="https://github.com/Brightlord5"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={techMember2} alt="Laya Shree Elango" />
            <h4>Laya Shree Elango</h4>
            <p>Technical Manager</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/layashreeelango/"><FaInstagram /></a>
              <a href="http://www.linkedin.com/in/laya-shree-elango"><FaLinkedin /></a>
              <a href="https://github.com/Laya-Shree"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={techMember3} alt="Stellin John George" />
            <h4>Stellin John George</h4>
            <p>Technical Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/Stellin_15/"><FaInstagram /></a>
              <a href="http://www.linkedin.com/in/stellin-john-george-1bb757163"><FaLinkedin /></a>
              <a href="https://github.com/Stellin-15"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={techMember4} alt="Srihari Sai" />
            <h4>Srihari Sai</h4>
            <p>Technical Executive</p>
            <div className="social-icons">
              <a href="http://instagram.com/ft.hyper"><FaInstagram /></a>
              <a href="http://www.linkedin.com/in/sri-hari-sai-subramanian-737279322"><FaLinkedin /></a>
              <a href="http://github.com/HyperPlexG"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="events-team-section">
        <h2>Events Team</h2>

        <div className="events-team">
          <div className="member">
            <img src={eventsMember1} alt="Bhavya Kothari" />
            <h4>Bhavya Kothari</h4>
            <p>Events Head</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/bruhvya/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/bhavya-manish-kothari/"><FaLinkedin /></a>
              <a href="https://github.com/bruhvya"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={eventsMember2} alt="Karthik Vishal" />
            <h4>Karthik Vishal</h4>
            <p>Events Manager</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/karthik_vishal03/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/karthik-vishal-sr-1a7995245/"><FaLinkedin /></a>
              <a href="https://github.com/Karthik-Vishal03"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={eventsMember3} alt="Narda Zaria" />
            <h4>Narda Zaria</h4>
            <p>Strategy Officer</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/nardazaria/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/narda-zaria-60254823b/"><FaLinkedin /></a>
              <a href="https://github.com/aina282"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={eventsMember4} alt="Mahin Poptani" />
            <h4>Mahin Poptani</h4>
            <p>Events Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/mahin_sp20/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/mahin-poptani-b22166118/"><FaLinkedin /></a>
              <a href="https://github.com/Mahin200405"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={eventsMember5} alt="Mysha Iqbal" />
            <h4>Mysha Iqbal</h4>
            <p>Events Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/myshaa.i/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/mysha-i-baaa87318/"><FaLinkedin /></a>
              <a href="https://github.com/Mysha-BITS"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={eventsMember6} alt="Reuben Thomas" />
            <h4>Reuben Thomas</h4>
            <p>Events Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/reuben_thooo/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/reuben-thomas-689893263/"><FaLinkedin /></a>
              <a href="https://github.com/reuben-tho"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="marketing-team-section">
        <h2>Marketing & Creative Team</h2>

        <div className="marketing-team">
          <div className="member">
            <img src={marketingMember1} alt="Sathvik Sreeram" />
            <h4>Sathvik Sreeram</h4>
            <p>Marketing Head</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/sathvikboseman/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/sathvik-sreeram-06b350280/"><FaLinkedin /></a>
              <a href="https://github.com/sathvikboseman"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={marketingMember2} alt="Eshan Tiwari" />
            <h4>Eshan Tiwari</h4>
            <p>Creative Head</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/eshan.tiw_/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/eshan-tiwari-354728274/"><FaLinkedin /></a>
              <a href="https://github.com/Eshan-BlipTweak"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={marketingMember3} alt="K Ankita Menon" />
            <h4>K Ankita Menon</h4>
            <p>Marketing Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/ankita_menon_04/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/k-ankita-menon-4513b8232/"><FaLinkedin /></a>

            </div>
          </div>
          <div className="member">
            <img src={marketingMember4} alt="Khyati Jetly" />
            <h4>Khyati Jetly</h4>
            <p>Marketing Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/_kxyati_/"><FaInstagram /></a>
              <a href="http://www.linkedin.com/in/khyati-jetly-085792306"><FaLinkedin /></a>
              <a href="https://github.com/khyati2107"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={marketingMember5} alt="Srinjita Roy Chowdhury" />
            <h4>Srinjita Roy Chowdhury</h4>
            <p>Marketing Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/srinxie/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/srinjita-roy-chowdhury-99707531a/"><FaLinkedin /></a>
              <a href="https://github.com/Srinjita-RC"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={marketingMember7} alt="Ameyia Wankhede" />
            <h4>Ameyia Wankhede</h4>
            <p>Creative Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/ameiya.w/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/ameiya-wankhede-7600912b1"><FaLinkedin /></a>
              <a href="https://github.com/aw2106"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="outreach-team-section">
        <h2>Outreach & DevOps Team</h2>

        <div className="outreach-team">
          <div className="member">
            <img src={outreachMember1} alt="Joel Joseph" />
            <h4>Joel Joseph</h4>
            <p>Outreach Head</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/joelj.05/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/joel-joseph-30a289215/"><FaLinkedin /></a>
              <a href="https://github.com/JJ512-ishere"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={outreachMember2} alt="Utkarsh Tripathi" />
            <h4>Utkarsh Tripathi</h4>
            <p>Outreach Manager</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/Wtffut/"><FaInstagram /></a>
              <a href="http://www.linkedin.com/in/wtffut"><FaLinkedin /></a>
              <a href="https://github.com/btwitsutkarsh"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={outreachMember3} alt="Prasannah Raman" />
            <h4>Prasannah Raman</h4>
            <p>Outreach Manager</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/_prasannargh/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/prasannah-raman-0a7a6926b/"><FaLinkedin /></a>
              <a href="https://github.com/codeyko-blip"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={outreachMember4} alt="Siddharath Nagesh" />
            <h4>Siddharath Nagesh</h4>
            <p>DevOps Manager</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/siddharath_nagesh?igsh=eG11d2JwNmhscGEx"><FaInstagram /></a>
              <a href="http://linkedin.com/in/siddharath-malavalli-nagesh-270b571ba"><FaLinkedin /></a>
              <a href="https://github.com/SiddharathMN"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={outreachMember5} alt="Akash Rajasekar" />
            <h4>Akash Rajasekar</h4>
            <p>DevOps Manager</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/akash_r3/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/akash-rajasekar/"><FaLinkedin /></a>
              <a href="https://github.com/Akashrajasekar"><FaGithub /></a>
            </div>
          </div>
          <div className="member">
            <img src={outreachMember6} alt="Diya Freddy" />
            <h4>Diya Freddy</h4>
            <p>Content Executive</p>
            <div className="social-icons">
              <a href="https://www.instagram.com/diya.freddy/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/diya-freddy-1592012b4/"><FaLinkedin /></a>
              <a href="https://github.com/diyastudio1"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="faculty-section">
        <h2>Faculty In-Charge</h2>

        <div className="faculty">
          <div className="faculty-member">
            <img src={facultyInCharge} alt="Dr. Elakkiya R." />
            <h4>Dr. Elakkiya R.</h4>
            <p>Assistant Professor</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/dr-elakkiya-r-581884b1/"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default About;
