// eslint-disable-next-line no-unused-vars
import { FaInstagram, FaLinkedin, FaVideo } from "react-icons/fa";

import img20241011_cybersecurityTalk               from "./2024-10-11_cybersecurity_talk.jpg";
import img20241002_excelChampionship               from "./2024-10-02_excel_championship.jpg";
import img20240917_timeSeriesAnalysis              from "./2024-09-17_time_series_analysis.jpg";
import img20240912_introductionToPowerBi           from "./2024-09-12_introduction_to_power_bi.jpg";
import img20240910_introductionToDataScience       from "./2024-09-10_introduction_to_data_science.jpg";
import img20240902_mtcXReflexionsMediathon         from "./2024-09-02_mtc_x_reflexions_mediathon.jpg";
import img20240902_mtcOrientation                  from "./2024-09-02_mtc_orientation.jpg";
import img20240829_icebreakersDay                  from "./2024-08-29_icebreakers_day.jpg";
import img20240805_gameWeekSeries                  from "./2024-08-05_game_week_series.jpg";
import img20230906_howToStartProgramming           from "./2023-09-06_how_to_start_programming.jpg";
import img20230913_matlabWorkshop                  from "./2023-09-13_matlab_workshop.jpg";
import img20231120_vsCodeWorkshop                  from "./2023-11-20_vs_code_workshop.jpg";
import img20230920_typingContest                   from "./2023-09-20_typing_contest.jpg";
import img20231005_signQuest                       from "./2023-10-05_sign_quest.jpg";
import img20231128_thinkAi23                       from "./2023-11-28_think_ai23.jpg";
import img20231219_speakerSessionWithProfNickPears from "./2023-12-19_speaker_session_with_prof_nick_pears.jpg";


/*
GUIDELINES FOR EDITING: To add an event to the list, edit the `events` array.

Keep the following points in mind:
👉 MONTH starts at 0 not 1. So January = 0, February = 1, ... December = 11.
👉 If you don't know the *start-time* of the event, just mention as 12:00 AM.
👉 Similarly, if you don't know the *end-time* of the event, just mention as 11:59 PM.
👉 `links` is an array of objects. Each link is displayed as a button on the event card. Each object contains the following:
  ➡️ url: a string containing the url
  ➡️ text: default is "Read More", but you can change it to something else
  ➡️ icon: a React element such as <FaInstagram />, <FaLinkedin />, <FaVideo />, etc.

COPY this template, PASTE it where required, and edit as required.

  {
    title: "Title goes here",
    description: "Description paragraph goes here",
    dateTimeStart: new Date(YEAR, MONTH-1, DAY, 24HOUR, MINUTE),
    dateTimeEnd: new Date(YEAR, MONTH-1, DAY, 24HOUR, MINUTE),
    image: imageImport, // import the image at the start of the file
    links: [
      {icon: ICON_ELEMENT_GOES_HERE, text: "optional text", url: "url here"},
      {icon: ICON_ELEMENT_GOES_HERE, text: "optional text", url: "url here"},
      {icon: ICON_ELEMENT_GOES_HERE, text: "optional text", url: "url here"},
      // ...
    ],
  },

*/


/**
 * Type definition for a Link. This object stores both the link and the text to
 * display with the link.
 * @typedef EventEntryLink
 * @property {string} url The URL that the link points to.
 * @property {string} [text] The text to display with the link. If not given, a
 * default text "Read More" will be displayed instead.
 * @property {import("react-icons").IconType} [icon] The icon to display with
 * the button.
 */

/**
 * Type definition for an Event. Note that `dateTimeStart` and `dateTimeEnd`
 * will be used to figure out whether the event is a past event or an upcoming
 * event.
 * @typedef EventEntry
 * @property {string} title The title of the event.
 * @property {string} description A description of the event.
 * @property {Date} dateTimeStart The START date and time.
 * @property {Date} dateTimeEnd The END date and time.
 * @property {string} image Image associated with the event to be displayed.
 * @property {EventEntryLink[]} links An array of URLs to show in the post.
 */



/** An array of events. @type {EventEntry[]} */
const events = [
  {
    title: "Cybersecurity Talk",
    description: "Introduction to Cybersecurity and how to get started in UAE",
    dateTimeStart: new Date(2024, 10-1, 11, 18, 30), // 11/Oct/2024, 6:30 PM
    dateTimeEnd: new Date(2024, 10-1, 11, 19, 30), // 11/Oct/2024, 7:30 PM
    image: img20241011_cybersecurityTalk,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DA0-9r2zKuk"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_innovation-bitspilani-mtc-activity-7249115986182762497-RFaw"},
      // {icon: <FaVideo />, text: "Join Meeting", url: "https://meet.google.com/fgc-uzoc-pzq"},
    ],
  },

  {
    title: "Excel Championship",
    description: "MTC’s Excel Championship was a 3-hour Microsoft Excel-based time trial covering themes such as data analysis, financial modeling, and data cleaning, with questions split into easy, medium, and hard levels, each with different weightage for a total of 100 points. The competition was divided into three themed sessions: Harry Potter, Marvel, and Uncharted, where participants solved questions related to each theme, with team support available to clear doubts. The winners for each session were Aaryan Sinha (Session 1), Aakar Mathur (Session 2), and Sreenikethan Iyer (Session 3).",
    dateTimeStart: new Date(2024, 10-1, 2, 11, 10), // 2/Oct/2024, 11:10 AM
    dateTimeEnd: new Date(2024, 10-1, 2, 13, 50), // 2/Oct/2024, 1:50 PM
    links: [
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_bitspilani-microsofttechclub-mtc-activity-7250052492594466816-7ccm"},
    ],
    image: img20241002_excelChampionship,
  },

  {
    title: "Time Series Analysis",
    description: "The Microsoft Tech Club hosted the final session of their Data Science Bootcamp, a Time Series EDA workshop, conducted by Events Head Bhavya Kothari and Treasurer Keane Coutinho. Keane introduced the topic, explaining the types of time series data analysis, its practical applications, and the components of a time series. Bhavya then demonstrated a matplotlib program using an electric production dataset, showcasing how to model trends, seasonality, and forecast patterns. The session ended with a quiz, where Adindy Sharma and Chethan Suresh Devadiga won LinkedIn Premium as prizes. Participants were encouraged to explore further and start their own projects.",
    dateTimeStart: new Date(2024, 9-1, 17, 18, 30), // 17/Sep/2024, 6:30 PM
    dateTimeEnd: new Date(2024, 9-1, 17, 23, 59), // 17/Sep/2024, 11:59 PM
    links: [
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_dubai-bitsdubai-datascience-activity-7241436266892840960-AnPx"},
    ],
    image: img20240917_timeSeriesAnalysis,
  },

  {
    title: "Introduction to Power BI",
    description: "The Microsoft Tech Club hosted the second session of its Data Science bootcamp, a brief introduction to Power BI by MTC Outreach Head Joel Joseph. Power BI is a business analytics tool created by Microsoft that enables users to visualize data, create reports, and share insights across their organization. It integrates with various data sources and provides interactive dashboards to help make data-driven decisions. In the workshop, a sample dataset was provided, and participants learned how to create dashboards, reports, how to visualize the data as per their requirements, and how to share them.",
    dateTimeStart: new Date(2024, 9-1, 12, 18, 30), // 12/Sep/2024, 6:30 PM
    dateTimeEnd: new Date(2024, 9-1, 12, 19, 30), // 12/Sep/2024, 7:30 PM
    links: [
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_mtc-webdevelopment-workshops-activity-7240037659786592257-7PZ2"},
    ],
    image: img20240912_introductionToPowerBi,
  },

  {
    title: "Introduction to Data Science",
    description: "The Microsoft Tech Club hosted the first session of its Data Science bootcamp; it was an introduction to the world of Data Science by MTC Tech Manager Laya Shree Elango. After a brief talk on the significance of data science on daily life, participants were taken on a step by step tutorial of making an algorithm analyzing the chances of employees quitting a company, taking various factors in consideration, on the programming language Python incorporating python libraries such as Pandas, NumPy, Matplotlib and Seaborn.",
    dateTimeStart: new Date(2024, 9-1, 10, 13, 0), // 10/Sep/2024, 1:00 PM
    dateTimeEnd: new Date(2024, 9-1, 10, 13, 50), // 10/Sep/2024, 1:50 PM
    links: [
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_mtc-datascience-microsofttechclub-activity-7239307200475602945-MXF-"},
    ],
    image: img20240910_introductionToDataScience,
  },

  {
    title: "MTC x Reflexions Mediathon",
    description: "The MTC x Reflexions Mediathon was a week-long event where participants formed teams of 1-4 to create a portfolio website for BPDC. They could use only HTML, CSS, and optionally, JavaScript, and had to use pictures captured around campus during the eligibility period. The website was required to reflect any of the given four themes—Academia, Student Life, Sports, and Nature.",
    dateTimeStart: new Date(2024, 9-1, 2, 21, 0), // 2/Sep/2024, 9:00 PM
    dateTimeEnd: new Date(2024, 9-1, 6, 18, 0), // 6/Sep/2024, 6:00 PM
    links: [
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_bitsdubai-reflexions-mtc-activity-7237496629564497920-3ZJG"},
    ],
    image: img20240902_mtcXReflexionsMediathon,
  },

  {
    title: "MTC Orientation",
    description: "The Microsoft Tech Club hosted an exciting orientation for new members to the club, giving them a valuable insight to how the rest of the year would look like. The session started off with an introduction to all the members of the council and a brief look into Microsoft’s student ambassadorship program which allows first years to get a direct entry to the council, giving them representation and experience in leadership roles. The next segment of the orientation was a thrilling Social Media Hunt where new members had to find clues from the club’s instagram page which led them to the final destination.",
    dateTimeStart: new Date(2024, 9-1, 2, 13, 0), // 2/Sep/2024, 1:00 PM
    dateTimeEnd: new Date(2024, 9-1, 2, 13, 45), // 2/Sep/2024, 1:45 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/reel/C_dSOYbym3l"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_fyp-microsofttechclub-bitsdubai-activity-7236759779837128704-T3Wn"},
    ],
    image: img20240902_mtcOrientation,
  },

  {
    title: "Icebreakers Day",
    description: "The Microsoft Tech Club opened their membership registrations on 29 August, in the Sports Complex. Registrations were available for freshmen, all seniors, and renewals were available for existing members who were interested in retaining their subscription to the club. Council members actively participated in marketing the merits of MTC and the perks that the club had to offer to members, but the MTC stall had its own attractive features which incentivised future members to join with a discounted price.",
    dateTimeStart: new Date(2024, 8-1, 29, 13, 0), // 29/Aug/2024, 1:00 PM
    dateTimeEnd: new Date(2024, 8-1, 29, 23, 59), // 29/Aug/2024, 11:59 PM
    links: [
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_fyp-microsofttechclub-bitsdubai-activity-7235164364851314688-Nt8r"},
    ],
    image: img20240829_icebreakersDay,
  },

  {
    title: "GameWeek Series",
    description: "The Microsoft Tech Club (MTC) hosted its highly anticipated GameWeek Series online throughout August, engaging members in a thrilling competition across three diverse games. The series drew considerable attention and participation, with members eagerly vying for the top spots in a display of wit, observation, and technical acumen.",
    dateTimeStart: new Date(2024, 8-1, 5, 0, 0), // 5/Aug/2024, 12:00 AM
    dateTimeEnd: new Date(2024, 8-1, 9, 23, 59), // 9/Aug/2024, 11:59 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/C-xa_5KSoB5"},
    ],
    image: img20240805_gameWeekSeries,
  },

  {
    title: "How To Start Programming",
    description: "The “How To Start Programming” workshop began with the MTC core council outlining the club’s goals and upcoming events. The speakers then covered programming basics, highlighted BITS Pilani’s offerings, and provided an introduction to competitive programming and open-source projects. Participants also received a curated list of resources to start learning their preferred languages.",
    dateTimeStart: new Date(2023, 9-1, 6, 18, 30), // 6/Sep/2023, 6:30 PM
    dateTimeEnd: new Date(2023, 9-1, 6, 19, 30), // 6/Sep/2023, 7:30 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/reel/CwxdLidvP2h"},
    ],
    image: img20230906_howToStartProgramming,
  },

  {
    title: "MATLAB Workshop",
    description: "The “MATLAB Workshop” began with the two speakers introducing the UI of MATLAB and its basic syntax and functionalities. They moved on to talking about the data types, comments, arrays, linspace, matrix element-wise operations, and indexing. Next, they solved two sample problems that aimed to demonstrate problem-solving and plotting graphs in MATLAB.",
    dateTimeStart: new Date(2023, 9-1, 13, 18, 30), // 13/Sep/2023, 6:30 PM
    dateTimeEnd: new Date(2023, 9-1, 13, 19, 45), // 13/Sep/2023, 7:45 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/CxDTqwDv-l0"},
    ],
    image: img20230913_matlabWorkshop,
  },

  {
    title: "VS Code Workshop",
    description: "The “VS Code” workshop kicked off with MTC’s Heramb and Akash introducing the agenda and providing a brief overview of VS Code. They discussed programming, VS Code’s features, customization tips, API integration, built-in AI tools, and shared resources to help participants get familiar with the VS Code environment.",
    dateTimeStart: new Date(2023, 11-1, 20, 18, 30), // 20/Nov/2023, 6:30 PM
    dateTimeEnd: new Date(2023, 11-1, 20, 19, 45), // 20/Nov/2023, 7:45 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/Czv9N40NEYV"},
    ],
    image: img20231120_vsCodeWorkshop,
  },

  {
    title: "Typing Contest",
    description: "The Typing Contest, Microsoft Tech Club’s flagship event, tested participants’ auditory comprehension and typing speed in a Computer Lab. Participants had two hours to attempt the challenge, with the opportunity for two retries. Each hour featured four unique audio clips, and participants were evaluated on speed and accuracy. The competition had a total of 9 winners, with 3 winners from each hour.",
    dateTimeStart: new Date(2023, 9-1, 20, 10, 0), // 20/Sep/2023, 10:00 AM
    dateTimeEnd: new Date(2023, 9-1, 20, 13, 30), // 20/Sep/2023, 1:30 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/Cxa9BRFvVWh"},
    ],
    image: img20230920_typingContest,
  },

  {
    title: "SignQuest",
    description: "The MTC SignQuest is a promotional event for the ESL Global Summit Generative AI Competition, organized by MTC during the CINS 2023 conference at BITS Pilani Dubai Campus in hybrid mode. Held in the vending machine area, pairs of participants took part, with one answering quiz questions while the other used search skills to assist. The competition aimed to raise awareness of Emirati Sign Language and the Generative AI competition.",
    dateTimeStart: new Date(2023, 10-1, 5, 11, 0), // 5/Oct/2023, 11:00 AM
    dateTimeEnd: new Date(2023, 10-1, 5, 15, 0), // 5/Oct/2023, 3:00 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/CyQ5r_ivx8Q"},
    ],
    image: img20231005_signQuest,
  },

  {
    title: "ThinkAI’23",
    description: "ThinkAI’23 sought to find students with AI-driven solutions to global challenges, providing mentorship for the 2024 Microsoft Imagine Cup. Fourteen out of 16 registered teams presented ideas in areas like sustainability, healthcare, and education to 8 judges. The winners were Team Tech Titans (Sanober Sarfaraz Ahmed and Harsh Garg) and Team IntelliTrack (Anurag Kumar Jha, Mohammed Husamuddin, Sstuti D Mehra, Abdul Rahmaan Ansari).",
    dateTimeStart: new Date(2023, 11-1, 28, 0, 0), // 28/Nov/2023, 12:00 AM
    dateTimeEnd: new Date(2023, 11-1, 30, 23, 59), // 30/Nov/2023, 11:59 PM
    links: [
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%BF%F0%9D%97%BC%F0%9D%98%80%F0%9D%97%BC%F0%9D%97%B3%F0%9D%98%81-%F0%9D%97%A7%F0%9D%97%B2%F0%9D%97%B0%F0%9D%97%B5-%F0%9D%97%96%F0%9D%97%B9%F0%9D%98%82%F0%9D%97%AF%F0%9D%98%80-%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B8%F0%9D%97%94%F0%9D%97%9C-activity-7140743739425153024-at_b"},
    ],
    image: img20231128_thinkAi23,
  },

  {
    title: "Speaker Session with Professor Nick Pears",
    description: "The Microsoft Tech Club hosted a speaker session with Professor Nick Pears, a Computer Vision expert from the University of York. Attended by BITS Pilani Dubai Campus director Dr. Srinivasan Madapusi and Computer Science HoD Dr. Vijaykumar, the event covered AI, Cyber Security, and Professor Pears’ work in craniofacial shape modeling, sparking discussions on the future of Computer Vision.",
    dateTimeStart: new Date(2023, 12-1, 19, 14, 0), // 19/Dec/2023, 2:00 PM
    dateTimeEnd: new Date(2023, 12-1, 19, 15, 0), // 19/Dec/2023, 3:00 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/C1FHpybPBnz"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_microsofttechclub-computervision-techinnovation-activity-7143636619009466368-QdG9"},
    ],
    image: img20231219_speakerSessionWithProfNickPears,
  },
];

// Sort entire events array with latest first.
events.sort((a, b) => Math.min(a.dateTimeStart, a.dateTimeEnd) - Math.min(b.dateTimeStart, b.dateTimeEnd));
events.reverse();

/** @param {EventEntry} eventDetails */
function isUpcoming(eventDetails) {
  const {dateTimeStart, dateTimeEnd} = eventDetails;
  return Math.max(dateTimeStart, dateTimeEnd) > Date.now();
}
/** Array of events which are upcoming. */
export const eventsUpcoming = events.filter(isUpcoming);

/** Array of events which are completed already. */
export const eventsPast = events.filter(eventDetails => !isUpcoming(eventDetails));
