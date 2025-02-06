import { ReactTyped } from 'react-typed';
import TestimonialSlider from './TestimonialSlider.jsx';
import LinkButton from 'src/components/LinkButton/LinkButton.jsx';
import './Home.css';

import backgroundImage from 'assets/home/background.jpg';
import imgOffer_workshops from 'assets/home/offer_workshops.jpg';
import imgOffer_speakerSessions from 'assets/home/offer_speaker_sessions.jpg';
import imgOffer_technicalBlogs from 'assets/home/offer_technical_blogs.jpg';
import imgOffer_competitions from 'assets/home/offer_competitions.jpg';
import imgAmbassador_icebreakers20232024 from 'assets/home/ambassador_icebreakers_2023_2024.jpg';
import imgAmbassador_btfAksi2023 from 'assets/home/ambassador_btf_aksi_2023.jpg';
import imgAmbassador_ambassadorProgram from 'assets/home/ambassador_ambassador_program.jpg';
import imgAmbassador_typingContest from 'assets/home/ambassador_typing_contest.jpg';
import imgAmbassador_signQuest from 'assets/home/ambassador_sign_quest.jpg';
import imgEvents_matlabWorkshop from 'assets/home/events_matlab_workshop.jpg';
import imgEvents_vsCodeWorkshop from 'assets/home/events_vs_code_workshop.jpg';
import imgEvents_thinkAi23 from 'assets/home/events_think_ai23.jpg';
import imgEvents_researchTalk from 'assets/home/events_research_talk.jpg';
import imgSocial_mythMonday from 'assets/home/social_myth_monday.jpg';
import imgSocial_quizQuest from 'assets/home/social_quiz_quest.jpg';
import imgSocial_tipTuesday from 'assets/home/social_tip_tuesday.jpg';
import imgSocial_techTribune from 'assets/home/social_tech_tribune.jpg';


export default function Home() {
  return (
    <div>
      <div className="home-banner">
        <img src={backgroundImage} className="home-background" alt="Background" />
        <ReactTyped
          strings={["Microsoft Tech Club"]}
          typeSpeed={100}
          startDelay={100}
          className="h1"
        />
        <p>Boot Up Your Ambition. Excel in Technology with Us!</p>
        <LinkButton to="/membership">JOIN US</LinkButton>
      </div>

      <div className="home-offer">
        <h2>What do we offer?</h2>
        <p>Microsoft Tech Club fosters collaboration through workshops, competitions, and events. Whether you’re into web development, programming, or data analysis, there’s something here for you.</p>
        <div className="home-offer-cards">
          <div className="home-offer-card card-1">
            <img src={imgOffer_workshops} alt="Workshops" />
            <h3>Workshops</h3>
          </div>
          <div className="home-offer-card card-2">
            <img src={imgOffer_speakerSessions} alt="Speaker Sessions" />
            <h3>Speaker Sessions</h3>
          </div>
          <div className="home-offer-card card-3">
            <img src={imgOffer_technicalBlogs} alt="Technical Blogs" />
            <h3>Technical Blogs</h3>
          </div>
          <div className="home-offer-card card-4">
            <img src={imgOffer_competitions} alt="Competitions" />
            <h3>Competitions</h3>
          </div>
        </div>
      </div>

      <div className="home-ambassador">
        <h2>Student Ambassador Program</h2>
        <p>MTC Student Ambassador program provides an invaluable opportunity for first-year students to actively participate in MTC by assuming the role of a council member in your chosen domain.</p>
        <div className="home-ambassador-cards">
          <div className="home-ambassador-card">
            <img src={imgAmbassador_icebreakers20232024} alt="Icebreakers 2023-2024" />
            <h3>Icebreakers 2023-2024</h3>
          </div>
          <div className="home-ambassador-card">
            <img src={imgAmbassador_btfAksi2023} alt="BTF-AKSI-2023" />
            <h3>BTF-AKSI-2023</h3>
          </div>
          <div className="home-ambassador-card poster">
            <img src={imgAmbassador_ambassadorProgram} alt="Ambassador Program" />
            <h3>Ambassador Program</h3>
          </div>
          <div className="home-ambassador-card">
            <img src={imgAmbassador_typingContest} alt="Typing Contest" />
            <h3>Typing Contest</h3>
          </div>
          <div className="home-ambassador-card">
            <img src={imgAmbassador_signQuest} alt="Sign-Quest" />
            <h3>Sign-Quest</h3>
          </div>
        </div>
        <LinkButton to="https://forms.gle/irvTUisXzDz18VB28" newTab>Join Now ➔</LinkButton>
      </div>

      <TestimonialSlider />

      <div className="home-events">
        <h2>Recent Events</h2>
        <p>Some of our recently conducted events</p>
        <div className="home-event-cards">
          <div className="home-event-card">
            <img src={imgEvents_matlabWorkshop} alt="MATLAB Workshop" />
            <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_techeducation-techcommunity-studentcommunity-activity-7108388988855484416-VNIv" newTab>Read More</LinkButton>
          </div>
          <div className="home-event-card">
            <img src={imgEvents_vsCodeWorkshop} alt="VS Code Workshop" />
            <LinkButton to="https://instagram.com/p/Czv9N40NEYV" newTab>Read More</LinkButton>
          </div>
          <div className="home-event-card">
            <img src={imgEvents_thinkAi23} alt="Think AI'23" />
            <LinkButton to="https://instagram.com/p/C0rSVqlPBpe" newTab>Read More</LinkButton>
          </div>
          <div className="home-event-card">
            <img src={imgEvents_researchTalk} alt="Research Talk" />
            <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_microsofttechclub-computervision-techinnovation-activity-7143636619009466368-QdG9" newTab>Read More</LinkButton>
          </div>
        </div>
        <LinkButton to="/events" className="view-all-button">View All ➔</LinkButton>
      </div>

      <div className="home-social-media">
        <h2>Follow Us</h2>
        <p>Stay ahead in the tech world with MTC’s dynamic social media lineup!</p>
        <div className="home-social-media-cards">
          <div className="home-social-media-card">
            <img src={imgSocial_mythMonday} alt="Myth Monday" />
            
          </div>
          <div className="home-social-media-card">
            <img src={imgSocial_quizQuest} alt="Quiz Quest" />
            
          </div>
          <div className="home-social-media-card">
            <img src={imgSocial_tipTuesday} alt="Tip Tuesday" />
            
          </div>
          <div className="home-social-media-card">
            <img src={imgSocial_techTribune} alt="Tech Tribune" />
            
          </div>
        </div>
      </div>
    </div>
  );
};
