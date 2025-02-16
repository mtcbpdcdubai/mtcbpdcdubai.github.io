// import { SiGooglemeet } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaVideo } from "react-icons/fa6";
import { SiGoogledocs, SiGoogleforms } from "react-icons/si";

import img20250212_cybersecurityWorkshop           from "./2025-02-12_cybersecurity_workshop.jpg"
import img20250205_membershipStall                 from "./2025-02-05_membership_stall.jpg"
import img20241212_researchTalk                    from "./2024-12-12_research_talk.jpg"
import img20241121_typingContest                   from "./2024-11-21_typing_contest.jpg"
import img20241107_thinkAi24                       from "./2024-11-07_think_ai24.jpg"
import img20241013_midsemPrep                      from "./2024-10-13_midsem_prep.jpg";
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
    title: "ACM-W x MTC: Hack-A-Bot",
    description: "Participants are challenged to build a chatbot coupled with an interactive landing webpage around the themes of Education & Career, Health & Wellness, Entertainment, E-Commerce and Personal Assistance.\nThe Judging Criteria will based on Bot Logic, Pitching & Presentation, Creative Visuals and Theme Relevance.\nRegistration is free for all ACMW and MTC Members, and is only AED 5 for non-members!",
    dateTimeStart: new Date(2025, 2-1, 17, 0, 0), // 17/Feb/2025
    dateTimeEnd: new Date(2025, 2-1, 26, 23, 59), // 26/Feb/2025
    image: null,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DGIFBalTUo8"},
      {icon: <SiGoogleforms />, text: "Register", url: "https://docs.google.com/forms/d/e/1FAIpQLSd4bu4Ber8YIDqA8qF56hqKsXLYtuXy1iEUMo7AJ4jtlyOE-w/viewform"},
      {icon: <SiGoogledocs />, text: "Rules", url: "https://instagram.com/p/DGIFBalTUo8"},
    ]
  },

  {
    title: "Cybersecurity Workshop",
    description: "Cybersecurity Workshop - Foundations of Penetration Testing\nSpeaker: Ashwin Ragav, Founder of Speclar, Co-founder of Nodeshield, Cybersecurity Researcher",
    dateTimeStart: new Date(2025, 2-1, 12, 18, 30), // 12/Feb/2025, 06:30 PM
    dateTimeEnd: new Date(2025, 2-1, 12, 20, 0), // 12/Feb/2025, 08:00 PM
    image: img20250212_cybersecurityWorkshop,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DF2spf2zokv"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_cybersecurity-penetrationtesting-mtc-activity-7296857567966724096-Y9zM"},
      {icon: <FaVideo />, text: "Watch recording", url: "https://drive.google.com/file/d/1ymnObDaAAaHF-s3qDqRG1A-WZR-tPDzn/view"},
    ]
  },

  {
    title: "Membership Stall",
    description: "MTC hosted a creative and engaging Squid Games-themed Membership Stall next to the vending machine providing an interactive experience where participants tested their skills and knowledge through a thrilling challenge inspired by the popular series.\nParticipants were required to flip a Ddakji and successfully turn it over to qualify for answering questions. Questions ranged from easy, medium, or hard—to earn points and prizes. The competitive element, combined with the fun and strategy, kept participants hooked throughout the event.",
    dateTimeStart: new Date(2025, 2-1, 5, 9, 0), // 5/Feb/2025, 09:00 AM
    dateTimeEnd: new Date(2025, 2-1, 5, 14, 45), // 5/Feb/2025, 02:45 PM
    image: img20250205_membershipStall,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DFnU6fcSHPF"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_squidgames-membership-mtc-activity-7292207034890866689-UI3p"},
    ]
  },

  {
    title: "Research Talk",
    description: "MTC hosted Dr. R. Balasubramanian, Head of CSE at IIT Roorkee, for a Research Talk on “Bridging Modalities: Advances in AI for Engagement, Seismic Prediction, and Specialized Challenges”. Dr. Balasubramanian introduced the audience to multi-modal AI, its use in seismic early warning systems, and domain-specific applications like privacy-preserving neural networks and hyperspectral imaging. He showed frame by frame pictures of real life applications of hyperspectral imaging and how it has been used in tech such as Google Glass. He also demonstrated zero shot learning being used in identifying tone of a text and the sentiment analysis system  using a positive, negative and neutral scoring system which can be used for companies to understand brand reputation and conduct data analysis from data collected in a Generative Adversarial Network.",
    dateTimeStart: new Date(2024, 12-1, 12, 14, 0), // 12/Dec/2024, 02:00 PM
    dateTimeEnd: new Date(2024, 12-1, 12, 23, 59), // 12/Dec/2024, 11:59 PM
    image: img20241212_researchTalk,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DDUJ_Lvz5ao"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_ai-researchtalks-bitspilani-activity-7273069141136195586-kYbj"},
    ]
  },

  {
    title: "Typing Contest 2024",
    description: "Microsoft Tech Club’s flagship event, the Typing Contest, kicked it up a notch this year. Held for three hours, it hosted three different challenges; the DVORAK keyboard layout, memory typing, and the T9 layout. This increased the difficulty levels greatly, and proved to be an interesting challenge for participants. To accommodate the nuances of each of the three challenges, the technical team developed a platform to specifically cater to the DVORAK and T9 keyboard layouts, as well as to time the strings to disappear to make memory typing feasible. Each of the sessions themselves had three levels, easy, medium, and hard, and participants could try each difficulty level any number of times. The Typing Contest had 15 participants for the first session, 27 for the second session, and 49 for the third session; overall, there were 92 submissions, 55 unique participants, 8 players who completed all three challenges, and 5 winners. The winners for each session were:\n▶️ DVORAK\n- Maheshwar Rathakrishnan\n- Yashwanth Karuparthi\n▶️ Memory Typing\n- Aaditya Bhatnagar\n- Shoukath Siddiqui\n▶️ T9\n- Sreenikethan Iyer\n- Maheshwar Rathakrishnan",
    dateTimeStart: new Date(2024, 11-1, 21, 11, 10), // 21/Nov/2024, 11:10 AM
    dateTimeEnd: new Date(2024, 11-1, 21, 13, 50), // 21/Nov/2024, 01:50 PM
    image: img20241121_typingContest,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DC_RN_3TnSZ"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_mtc-typingcontest-winners-activity-7268247366242062338-7-tq"},
    ]
  },

  {
    title: "ThinkAI’24",
    description: "Microsoft’s Imagine Cup 2025 is a global student startup competition for founders using AI technologies on the Microsoft cloud. To empower and encourage students to participate in the same, Microsoft Tech Club conducted ThinkAI’24. The event was a success, with 30 teams (76 teams) registering, and 22 teams (58 participants) presenting their pitches to a set of 12 judges, including the Director. The pitches covered a wide array of fields, from the healthcare sector to art and technology. Students came up with promising ideas, and the judges provided valuable feedback to guide them. The winners were promised a prize pool of 450 AED, as well as mentoring from the professors to hone their idea for the Imagine Cup 2025. The winners were Team Noor (Pradyun Kumar Sinha, Vrushank Vijay Tipnis, Abhishekh Verma, Shaikh Mohammed Rehan Mairajuddin), Team Vada Visionaries (Mohammed Ruknuddin, Nishal Ahmed Poovatham Kandiyil, Kalyani Baiju Sindhu, Muhammad Fawaz Imran), and Team RoboIntellects (Radhika Khatri).",
    dateTimeStart: new Date(2024, 11-1, 7, 0, 0), // 7/Nov/2024, 12:00 AM
    dateTimeEnd: new Date(2024, 11-1, 8, 23, 59), // 8/Nov/2024, 11:59 PM
    image: img20241107_thinkAi24,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DCRh3DzzBSh"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_ai-microsoft-microsoftimaginecup-activity-7262510426683228160-ISZ-"},
    ]
  },

  {
    title: "Midsem Preparation Workshops",
    description: "As the mid-semester examinations approached, the Microsoft Tech Club held a weeklong series of preparatory workshops for different subjects as per popular demand. Sri Hari Sai held the Mathematics 1 workshop for first-years on October 13, with 90 participants. Siddharath Nagesh held the Object-oriented programming revision session for second-years on October 14, with a turnout of 29 students. Laya Elango, Joel Joseph, and Shaik Anas held the Operating Systems, Theory of Computation, and Computer Architecture workshops on October 17, 18, and 19 respectively, with the participation averaging 50 students per session. Resources and notes curated by the association were shared to the participants post the sessions to help them further with their preparation.",
    dateTimeStart: new Date(2024, 10-1, 13, 0, 0), // 13/Oct/2024, 12:00 AM
    dateTimeEnd: new Date(2024, 10-1, 19, 23, 59), // 19/Oct/2024, 11:59 PM
    image: img20241013_midsemPrep,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DBBD-zAzkge"},
    ]
  },

  {
    title: "Cybersecurity Talk",
    description: "The Microsoft Tech Club hosted Mathew Medayil, seasoned Security Consultant at First Abu Dhabi Bank, for their very first talk for the semester. The talk was moderated by Reuben Thomas and Joel Joseph. Topics covered include an introduction to cybersecurity and what constitutes it, types of hackers, what goes on in a day in the life of an ethical hacker and how the work is delegated in the company specifically in the banking sector. He also provided several resources to learn about cybersecurity and information on certification available. Joel Joseph gathered topics of interest for Mr. Medayil to provide additional details on cybersecurity. The session ended with a helpful doubts clearing segment.",
    dateTimeStart: new Date(2024, 10-1, 11, 18, 30), // 11/Oct/2024, 6:30 PM
    dateTimeEnd: new Date(2024, 10-1, 11, 19, 30), // 11/Oct/2024, 7:30 PM
    image: img20241011_cybersecurityTalk,
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DA0-9r2zKuk"},
      {icon: <FaLinkedin />, url: "https://linkedin.com/posts/microsoft-tech-club_innovation-bitspilani-mtc-activity-7249115986182762497-RFaw"},
      // {icon: <SiGooglemeet />, text: "Join Meeting", url: "https://meet.google.com/fgc-uzoc-pzq"},
    ],
  },

  {
    title: "Excel Championship",
    description: "MTC’s Excel Championship was a 3-hour Microsoft Excel-based time trial covering themes such as data analysis, financial modeling, and data cleaning, with questions split into easy, medium, and hard levels, each with different weightage for a total of 100 points. The competition was divided into three themed sessions: Harry Potter, Marvel, and Uncharted, where participants solved questions related to each theme, with team support available to clear doubts. The winners for each session were Aaryan Sinha (Session 1), Aakar Mathur (Session 2), and Sreenikethan Iyer (Session 3).",
    dateTimeStart: new Date(2024, 10-1, 2, 11, 10), // 2/Oct/2024, 11:10 AM
    dateTimeEnd: new Date(2024, 10-1, 2, 13, 50), // 2/Oct/2024, 1:50 PM
    links: [
      {icon: <FaInstagram />, url: "https://instagram.com/p/DA3yH9NyGWn"},
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
      {icon: <FaInstagram />, url: "https://instagram.com/p/C_8LuonTSfU"},
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
      {icon: <FaInstagram />, url: "https://instagram.com/p/C_x1j0czPJJ"},
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
      {icon: <FaInstagram />, url: "https://instagram.com/p/C_vWz7RTZmb"},
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
      {icon: <FaInstagram />, url: "https://instagram.com/p/C_27dYWTlZX"},
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
      {icon: <FaInstagram />, url: "https://instagram.com/reel/C_QyP3TyOmJ"},
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
    title: "Typing Contest 2023",
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
