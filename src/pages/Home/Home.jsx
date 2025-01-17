// src/pages/Home/Home.jsx
import { Link } from 'react-router-dom';
import TestimonialSlider from 'components/Testimonials/TestimonialSlider.jsx';
import './Home.css';

import backgroundImage from 'assets/b2.jpg';
import workshopsImg from 'assets/workshops.jpg';
import speakerSessionsImg from 'assets/speaker_sessions.jpg';
import technicalBlogsImg from 'assets/technical_blogs.jpg';
import competitionsImg from 'assets/competitions.jpg';
import icebreakersImg from 'assets/icebreakers.jpg';
import btfAksiImg from 'assets/btf_aksi.jpg';
import typingContestImg from 'assets/typing_contest.jpg';
import signQuestImg from 'assets/sign_quest.jpg';
import ambassadorProgramImg from 'assets/ambassador_program.jpeg';
import matlabWorkshopImg from 'assets/matlab_workshop.jpg';
import vsCodeWorkshopImg from 'assets/vscode_workshop.jpg';
import thinkAIImg from 'assets/think_ai.jpg';
import researchTalkImg from 'assets/research_talk.jpg';
import mythMondayImg from 'assets/myth_monday.jpg';
import quizQuestImg from 'assets/quiz_quest.jpg';
import tipTuesdayImg from 'assets/tip_tuesday.jpg';
import techTribuneImg from 'assets/tech_tribune.jpg';

export default function Home() {
  return (
    <div>
      <div className="home-container">
        <img src={backgroundImage} alt="Background" className="background-image" />
        <h1>Microsoft Tech Club</h1>
        <p>Boot Up Your Ambition. Excel in Technology with Us!</p>
        <Link to="/membership"><button className="join-button">JOIN US</button></Link>
      </div>

      <div className="offer-section">
        <h2>What do we offer?</h2>
        <p>Microsoft Tech Club fosters collaboration through workshops, competitions, and events. Whether you’re into web development, programming, or data analysis, there’s something here for you.</p>
        <div className="offer-cards">
          <div className="card card-1">
            <img src={workshopsImg} alt="Workshops" />
            <div className="card-content"><h3>Workshops</h3></div>
          </div>
          <div className="card card-2">
            <img src={speakerSessionsImg} alt="Speaker Sessions" />
            <div className="card-content"><h3>Speaker Sessions</h3></div>
          </div>
          <div className="card card-3">
            <img src={technicalBlogsImg} alt="Technical Blogs" />
            <div className="card-content"><h3>Technical Blogs</h3></div>
          </div>
          <div className="card card-4">
            <img src={competitionsImg} alt="Competitions" />
            <div className="card-content"><h3>Competitions</h3></div>
          </div>
        </div>
      </div>

      <div className="ambassador-section">
        <h2>Student Ambassador Program</h2>
        <p>MTC Student Ambassador program provides an invaluable opportunity for first-year students to actively participate in MTC by assuming the role of a council member in your chosen domain.</p>
        <div className="ambassador-cards">
          <div className="ambassador-card">
            <img src={icebreakersImg} alt="Icebreakers 2023-2024" />
            <div className="ambassador-card-content"><h3>Icebreakers 2023-2024</h3></div>
          </div>
          <div className="ambassador-card">
            <img src={btfAksiImg} alt="BTF-AKSI-2023" />
            <div className="ambassador-card-content"><h3>BTF-AKSI-2023</h3></div>
          </div>
          <div className="ambassador-card poster">
            <img src={ambassadorProgramImg} alt="Ambassador Program" />
            <div className="ambassador-card-content"><h3>Ambassador Program</h3></div>
          </div>
          <div className="ambassador-card">
            <img src={typingContestImg} alt="Typing Contest" />
            <div className="ambassador-card-content"><h3>Typing Contest</h3></div>
          </div>
          <div className="ambassador-card">
            <img src={signQuestImg} alt="Sign-Quest" />
            <div className="ambassador-card-content"><h3>Sign-Quest</h3></div>
          </div>
        </div>
        <Link to="https://forms.gle/irvTUisXzDz18VB28"><button className="Join-Now-button">Join Now ➔</button></Link>
      </div>

      <TestimonialSlider />

      <div className="events-section">
        <h2>Recent Events</h2>
        <p>Some of our recently conducted events</p>
        <div className="events-cards">
          <div className="event-card">
            <img src={matlabWorkshopImg} alt="MATLAB Workshop" />
            <Link to="https://www.linkedin.com/posts/microsoft-tech-club_techeducation-techcommunity-studentcommunity-activity-7108388988855484416-VNIv"><button className="event-card-content">Read More</button></Link>
          </div>
          <div className="event-card">
            <img src={vsCodeWorkshopImg} alt="VS Code Workshop" />
            <Link to="https://www.instagram.com/p/Czv9N40NEYV/"><button className="event-card-content">Read More</button></Link>
          </div>
          <div className="event-card">
            <img src={thinkAIImg} alt="Think AI'23" />
            <Link to="https://www.instagram.com/p/C0rSVqlPBpe/"><button className="event-card-content">Read More</button></Link>
          </div>
          <div className="event-card">
            <img src={researchTalkImg} alt="Research Talk" />
            <Link to="https://www.linkedin.com/posts/microsoft-tech-club_microsofttechclub-computervision-techinnovation-activity-7143636619009466368-QdG9"><button className="event-card-content">Read More</button></Link>
          </div>
        </div>
        <Link to="/events"><button className="view-all-button">View All ➔</button></Link>
      </div>

      <div className="social-media-section">
        <h2>Stay ahead in the tech world with MTC’s dynamic social media lineup!</h2>
        <div className="social-media-cards">
          <div className="social-media-card">
            <img src={mythMondayImg} alt="Myth Monday" />
            
          </div>
          <div className="social-media-card">
            <img src={quizQuestImg} alt="Quiz Quest" />
            
          </div>
          <div className="social-media-card">
            <img src={tipTuesdayImg} alt="Tip Tuesday" />
            
          </div>
          <div className="social-media-card">
            <img src={techTribuneImg} alt="Tech Tribune" />
            
          </div>
        </div>
      </div>
    </div>
  );
};
