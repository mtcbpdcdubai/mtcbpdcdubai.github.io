import LinkButton from "components/LinkButton/LinkButton";
import "./Events.css";

import excelChampionship     from "assets/excelChampionship.jpg";
import introProgrammingImage from "assets/intro_programming.jpg";
import matlabWorkshopImage   from "assets/matlab_workshop.jpg";
import vsCodeWorkshopImage   from "assets/vscode_workshop.jpg";
import typingContestImage    from "assets/typing_contest.jpg";
import signQuestImage        from "assets/signquest.jpg";
import thinkAIImage          from "assets/thinkai.jpg";
import speakerSessionImage   from "assets/speaker_session.jpg";
import GameWeek              from "assets/GW-1_new.jpg";
import IceBreakers           from "assets/Icebreakers-1_new.jpg";
import Orientation           from "assets/Orientation-5_new2.jpg";
import Mediathon             from "assets/Mediathon.jpg";
import DataScience           from "assets/DataScience_new.jpg";
import PowerBI               from "assets/PowerBI.jpg";
import Timeseries            from "assets/Timeseries1_new2.jpg";
import Cybersecuritytalk     from "assets/cybersecuritytalk.jpg";


export default function EventCard() {
  return (
    <div className="event-container">

      {/* Upcoming Events Section */}
      <h1 className="section-title">Upcoming Events</h1>

      <div className="event-card upcoming">
        <div className="event-info">
          <h2>Cybersecurity Talk</h2>
          <p className="event-description">Introduction to Cybersecurity and how to get started in UAE</p>
          <p className="event-datetime">6:30 PM on 11/Oct/2024 (Friday)</p>
          <LinkButton to="https://meet.google.com/fgc-uzoc-pzq">Join Meeting</LinkButton>
        </div>
        <div className="event-image">
          <img src={Cybersecuritytalk} alt="Cybersecuritytalk" />
        </div>
      </div>

      {/* Past Events Section */}
      <h1 className="section-title">Past Events</h1>

      <div className="event-card">
        <div className="event-info">
          <h2>Excel Championship</h2>
          <p className="event-description">
            MTC’s Excel Championship was a 3-hour Microsoft Excel-based time trial covering themes such
            as data analysis, financial modeling, and data cleaning, with questions split into easy, medium,
            and hard levels, each with different weightage for a total of 100 points. The competition was divided
            into three themed sessions: Harry Potter, Marvel, and Uncharted, where participants solved questions related
            to each theme, with team support available to clear doubts. The winners for each session were Aaryan Sinha (Session 1),
            Aakar Mathur (Session 2), and Sreenikethan Iyer (Session 3).
          </p>
          <LinkButton to="">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={excelChampionship} alt="excelChampionship" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>Time Series Analysis</h2>
          <p className="event-description">
            The Microsoft Tech Club hosted the final session of their Data Science Bootcamp,
            a Time Series EDA workshop, conducted by Events Head Bhavya Kothari and Treasurer Keane Coutinho.
            Keane introduced the topic, explaining the types of time series data analysis, its practical
            applications, and the components of a time series. Bhavya then demonstrated a matplotlib program
            using an electric production dataset, showcasing how to model trends, seasonality, and forecast
            patterns. The session ended with a quiz, where Adindy Sharma and Chethan Suresh Devadiga won
            LinkedIn Premium as prizes. Participants were encouraged to explore further and start their
            own projects.
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_dubai-bitsdubai-datascience-activity-7241436266892840960-AnPx">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={Timeseries} alt="Timeseries" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>Introduction to Power BI</h2>
          <p className="event-description">
            The Microsoft Tech Club hosted the second session of its Data
            Science bootcamp, a brief introduction to Power BI by MTC Outreach
            Head Joel Joseph. Power BI is a business analytics tool created by
            Microsoft that enables users to visualize data, create reports, and
            share insights across their organization. It integrates with various
            data sources and provides interactive dashboards to help make
            data-driven decisions. In the workshop, a sample dataset was
            provided, and participants learned how to create dashboards,
            reports, how to visualize the data as per their requirements, and
            how to share them.
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_mtc-webdevelopment-workshops-activity-7240037659786592257-7PZ2">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={PowerBI} alt="Power BI" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>Introduction to Data Science</h2>
          <p className="event-description">
            The Microsoft Tech Club hosted the first session of its Data Science
            bootcamp; it was an introduction to the world of Data Science by MTC
            Tech Manager Laya Shree Elango. After a brief talk on the
            significance of data science on daily life, participants were taken
            on a step by step tutorial of making an algorithm analyzing the
            chances of employees quitting a company, taking various factors in
            consideration, on the programming language Python incorporating
            python libraries such as Pandas, NumPy, Matplotlib and Seaborn.
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_mtc-datascience-microsofttechclub-activity-7239307200475602945-MXF-">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={DataScience} alt="DataScience" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>MTC x Reflexions Mediathon</h2>
          <p className="event-description">
            The MTC x Reflexions Mediathon was a week-long event where
            participants formed teams of 1-4 to create a portfolio website for
            BPDC. They could use only HTML, CSS, and optionally, JavaScript, and
            had to use pictures captured around campus during the eligibility
            period. The website was required to reflect any of the given four
            themes—Academia, Student Life, Sports, and Nature.
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_bitsdubai-reflexions-mtc-activity-7237496629564497920-3ZJG">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={Mediathon} alt="Mediathon" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>MTC Orientation</h2>
          <p className="event-description">
            The Microsoft Tech Club hosted an exciting orientation for new
            members to the club, giving them a valuable insight to how the rest
            of the year would look like. The session started off with an
            introduction to all the members of the council and a brief look into
            Microsoft’s student ambassadorship program which allows first years
            to get a direct entry to the council, giving them representation and
            experience in leadership roles. The next segment of the orientation
            was a thrilling Social Media Hunt where new members had to find
            clues from the club’s instagram page which led them to the final
            destination.
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_fyp-microsofttechclub-bitsdubai-activity-7236759779837128704-T3Wn">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={Orientation} alt="Orientation" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>Icebreakers Day</h2>
          <p className="event-description">
            The Microsoft Tech Club opened their membership registrations on 29
            August, in the Sports Complex. Registrations were available for
            freshmen, all seniors, and renewals were available for existing
            members who were interested in retaining their subscription to the
            club. Council members actively participated in marketing the merits
            of MTC and the perks that the club had to offer to members, but the
            MTC stall had its own attractive features which incentivised future
            members to join with a discounted price .
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_fyp-microsofttechclub-bitsdubai-activity-7235164364851314688-Nt8r">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={IceBreakers} alt="IceBreakers" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>GameWeek Series</h2>
          <p className="event-description">
            The Microsoft Tech Club (MTC) hosted its highly anticipated GameWeek
            Series online throughout August, engaging members in a thrilling
            competition across three diverse games. The series drew considerable
            attention and participation, with members eagerly vying for the top
            spots in a display of wit, observation, and technical acumen.
          </p>
          <LinkButton to="https://instagram.com/p/C-xa_5KSoB5">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={GameWeek} alt="Game Week" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>How To Start Programming</h2>
          <p className="event-description">
            The “How To Start Programming” workshop began with the MTC core
            council outlining the club’s goals and upcoming events. The speakers
            then covered programming basics, highlighted BITS Pilani’s
            offerings, and provided an introduction to competitive programming
            and open-source projects. Participants also received a curated list
            of resources to start learning their preferred languages.
          </p>
          <LinkButton to="https://instagram.com/reel/CwxdLidvP2h">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={introProgrammingImage} alt="How To Start Programming" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>MATLAB Workshop</h2>
          <p className="event-description">
            The “MATLAB Workshop” began with the two speakers introducing the UI
            of MATLAB and its basic syntax and functionalities. They moved on to
            talking about the data types, comments, arrays, linspace, matrix
            element-wise operations, and indexing. Next, they solved two sample
            problems that aimed to demonstrate problem-solving and plotting
            graphs in MATLAB.
          </p>
          <LinkButton to="https://instagram.com/p/CxDTqwDv-l0">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={matlabWorkshopImage} alt="MATLAB Workshop" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>VS Code Workshop</h2>
          <p className="event-description">
            The “VS Code” workshop kicked off with MTC’s Heramb and Akash
            introducing the agenda and providing a brief overview of VS Code.
            They discussed programming, VS Code’s features, customization tips,
            API integration, built-in AI tools, and shared resources to help
            participants get familiar with the VS Code environment.
          </p>
          <LinkButton to="https://instagram.com/p/Czv9N40NEYV">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={vsCodeWorkshopImage} alt="VS Code Workshop" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>Typing Contest</h2>
          <p className="event-description">
            The Typing Contest, Microsoft Tech Club’s flagship event, tested
            participants’ auditory comprehension and typing speed in a Computer
            Lab. Participants had two hours to attempt the challenge, with the
            opportunity for two retries. Each hour featured four unique audio
            clips, and participants were evaluated on speed and accuracy. The
            competition had a total of 9 winners, with 3 winners from each hour.
          </p>
          <LinkButton to="https://instagram.com/p/Cxa9BRFvVWh">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={typingContestImage} alt="Typing Contest" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>SignQuest</h2>
          <p className="event-description">
            The MTC SignQuest is a promotional event for the ESL Global Summit
            Generative AI Competition, organized by MTC during the CINS 2023
            conference at BITS Pilani Dubai Campus in hybrid mode. Held in the
            vending machine area, pairs of participants took part, with one
            answering quiz questions while the other used search skills to
            assist. The competition aimed to raise awareness of Emirati Sign
            Language and the Generative AI competition.
          </p>
          <LinkButton to="https://instagram.com/p/CyQ5r_ivx8Q">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={signQuestImage} alt="SignQuest" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>ThinkAI’23</h2>
          <p className="event-description">
            ThinkAI’23 sought to find students with AI-driven solutions to
            global challenges, providing mentorship for the 2024 Microsoft
            Imagine Cup. Fourteen out of 16 registered teams presented ideas in
            areas like sustainability, healthcare, and education to 8 judges.
            The winners were Team Tech Titans (Sanober Sarfaraz Ahmed and Harsh
            Garg) and Team IntelliTrack (Anurag Kumar Jha, Mohammed Husamuddin,
            Sstuti D Mehra, Abdul Rahmaan Ansari).
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%BF%F0%9D%97%BC%F0%9D%98%80%F0%9D%97%BC%F0%9D%97%B3%F0%9D%98%81-%F0%9D%97%A7%F0%9D%97%B2%F0%9D%97%B0%F0%9D%97%B5-%F0%9D%97%96%F0%9D%97%B9%F0%9D%98%82%F0%9D%97%AF%F0%9D%98%80-%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B8%F0%9D%97%94%F0%9D%97%9C-activity-7140743739425153024-at_b">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={thinkAIImage} alt="ThinkAI'23" />
        </div>
      </div>

      <div className="event-card">
        <div className="event-info">
          <h2>Speaker Session with Professor Nick Pears</h2>
          <p className="event-description">
            The Microsoft Tech Club hosted a speaker session with Professor Nick
            Pears, a Computer Vision expert from the University of York.
            Attended by BITS Pilani Dubai Campus director Dr. Srinivasan
            Madapusi and Computer Science HoD Dr. Vijaykumar, the event covered
            AI, Cyber Security, and Professor Pears’ work in craniofacial shape
            modeling, sparking discussions on the future of Computer Vision.
          </p>
          <LinkButton to="https://linkedin.com/posts/microsoft-tech-club_microsofttechclub-computervision-techinnovation-activity-7143636619009466368-QdG9">Read More</LinkButton>
        </div>
        <div className="event-image">
          <img src={speakerSessionImage} alt="Speaker Session with Professor Nick Pears" />
        </div>
      </div>
    </div>
  );
}
