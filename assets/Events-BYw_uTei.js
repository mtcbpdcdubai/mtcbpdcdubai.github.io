import{j as e,c as p,F as s,a}from"./index-B4zkb0X4.js";import{L as u,P as i}from"./LinkButton-Dv5upz2U.js";function c({eventDetails:t}){const{dateTimeStart:o,dateTimeEnd:r}=t,l=Math.max(o,r)>Date.now();return e.jsxs("div",{className:"event-card"+(l?" upcoming":""),children:[e.jsxs("div",{className:"event-info",children:[e.jsx("h2",{children:t.title}),e.jsx("p",{className:"event-description",children:t.description}),e.jsx("div",{className:"event-buttons",children:t.links.map(n=>e.jsxs(u,{to:n.url,newTab:!0,children:[e.jsx("span",{children:n.icon||e.jsx(p,{})}),e.jsx("span",{children:n.text||"Read More"})]},n.url))})]}),e.jsx("div",{className:"event-image",children:e.jsx("img",{src:t.image,alt:t.title})})]})}c.propTypes={eventDetails:i.shape({title:i.string.isRequired,description:i.string.isRequired,dateTimeStart:i.instanceOf(Date),dateTimeEnd:i.instanceOf(Date),image:i.string.isRequired,links:i.arrayOf(i.shape({url:i.string.isRequired,text:i.string,icon:i.element})).isRequired}).isRequired};const g="/mtcbpdc/assets/2024-10-11_cybersecurity_talk-6qXI1njb.jpg",b="/mtcbpdc/assets/2024-10-02_excel_championship-D-SlX2AH.jpg",f="/mtcbpdc/assets/2024-09-17_time_series_analysis-Cqo1a2Hg.jpg",w="/mtcbpdc/assets/2024-09-12_introduction_to_power_bi-9E-T32EC.jpg",T="/mtcbpdc/assets/2024-09-10_introduction_to_data_science-CMvXNAs2.jpg",y="/mtcbpdc/assets/2024-09-02_mtc_x_reflexions_mediathon-D533bYcF.jpg",v="/mtcbpdc/assets/2024-09-02_mtc_orientation-NYBFHjRa.jpg",k="/mtcbpdc/assets/2024-08-29_icebreakers_day-h_Apz06i.jpg",_="/mtcbpdc/assets/2024-08-05_game_week_series-CL9JpSw5.jpg",D="/mtcbpdc/assets/2023-09-06_how_to_start_programming-0XZehHcs.jpg",S="/mtcbpdc/assets/events_matlab_workshop-lILTT9zg.jpg",x="/mtcbpdc/assets/events_vs_code_workshop-HFJEGCZr.jpg",C="/mtcbpdc/assets/2023-09-20_typing_contest-BRF_w0YE.jpg",j="/mtcbpdc/assets/2023-10-05_sign_quest-BLyZeByC.jpg",M="/mtcbpdc/assets/2023-11-28_think_ai23-CCZZbCFY.jpg",A="/mtcbpdc/assets/2023-12-19_speaker_session_with_prof_nick_pears-CsIL72zB.jpg",h=[{title:"Cybersecurity Talk",description:"Introduction to Cybersecurity and how to get started in UAE",dateTimeStart:new Date(2024,9,11,18,30),dateTimeEnd:new Date(2024,9,11,19,30),image:g,links:[{icon:e.jsx(s,{}),url:"https://instagram.com/p/DA0-9r2zKuk"},{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_innovation-bitspilani-mtc-activity-7249115986182762497-RFaw"}]},{title:"Excel Championship",description:"MTC’s Excel Championship was a 3-hour Microsoft Excel-based time trial covering themes such as data analysis, financial modeling, and data cleaning, with questions split into easy, medium, and hard levels, each with different weightage for a total of 100 points. The competition was divided into three themed sessions: Harry Potter, Marvel, and Uncharted, where participants solved questions related to each theme, with team support available to clear doubts. The winners for each session were Aaryan Sinha (Session 1), Aakar Mathur (Session 2), and Sreenikethan Iyer (Session 3).",dateTimeStart:new Date(2024,9,2,11,10),dateTimeEnd:new Date(2024,9,2,13,50),links:[{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_bitspilani-microsofttechclub-mtc-activity-7250052492594466816-7ccm"}],image:b},{title:"Time Series Analysis",description:"The Microsoft Tech Club hosted the final session of their Data Science Bootcamp, a Time Series EDA workshop, conducted by Events Head Bhavya Kothari and Treasurer Keane Coutinho. Keane introduced the topic, explaining the types of time series data analysis, its practical applications, and the components of a time series. Bhavya then demonstrated a matplotlib program using an electric production dataset, showcasing how to model trends, seasonality, and forecast patterns. The session ended with a quiz, where Adindy Sharma and Chethan Suresh Devadiga won LinkedIn Premium as prizes. Participants were encouraged to explore further and start their own projects.",dateTimeStart:new Date(2024,8,17,18,30),dateTimeEnd:new Date(2024,8,17,11,59),links:[{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_dubai-bitsdubai-datascience-activity-7241436266892840960-AnPx"}],image:f},{title:"Introduction to Power BI",description:"The Microsoft Tech Club hosted the second session of its Data Science bootcamp, a brief introduction to Power BI by MTC Outreach Head Joel Joseph. Power BI is a business analytics tool created by Microsoft that enables users to visualize data, create reports, and share insights across their organization. It integrates with various data sources and provides interactive dashboards to help make data-driven decisions. In the workshop, a sample dataset was provided, and participants learned how to create dashboards, reports, how to visualize the data as per their requirements, and how to share them.",dateTimeStart:new Date(2024,8,12,18,30),dateTimeEnd:new Date(2024,8,12,19,30),links:[{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_mtc-webdevelopment-workshops-activity-7240037659786592257-7PZ2"}],image:w},{title:"Introduction to Data Science",description:"The Microsoft Tech Club hosted the first session of its Data Science bootcamp; it was an introduction to the world of Data Science by MTC Tech Manager Laya Shree Elango. After a brief talk on the significance of data science on daily life, participants were taken on a step by step tutorial of making an algorithm analyzing the chances of employees quitting a company, taking various factors in consideration, on the programming language Python incorporating python libraries such as Pandas, NumPy, Matplotlib and Seaborn.",dateTimeStart:new Date(2024,8,10,13,0),dateTimeEnd:new Date(2024,8,10,13,50),links:[{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_mtc-datascience-microsofttechclub-activity-7239307200475602945-MXF-"}],image:T},{title:"MTC x Reflexions Mediathon",description:"The MTC x Reflexions Mediathon was a week-long event where participants formed teams of 1-4 to create a portfolio website for BPDC. They could use only HTML, CSS, and optionally, JavaScript, and had to use pictures captured around campus during the eligibility period. The website was required to reflect any of the given four themes—Academia, Student Life, Sports, and Nature.",dateTimeStart:new Date(2024,8,2,21,0),dateTimeEnd:new Date(2024,8,6,18,0),links:[{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_bitsdubai-reflexions-mtc-activity-7237496629564497920-3ZJG"}],image:y},{title:"MTC Orientation",description:"The Microsoft Tech Club hosted an exciting orientation for new members to the club, giving them a valuable insight to how the rest of the year would look like. The session started off with an introduction to all the members of the council and a brief look into Microsoft’s student ambassadorship program which allows first years to get a direct entry to the council, giving them representation and experience in leadership roles. The next segment of the orientation was a thrilling Social Media Hunt where new members had to find clues from the club’s instagram page which led them to the final destination.",dateTimeStart:new Date(2024,8,2,13,0),dateTimeEnd:new Date(2024,8,2,13,45),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/reel/C_dSOYbym3l"},{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_fyp-microsofttechclub-bitsdubai-activity-7236759779837128704-T3Wn"}],image:v},{title:"Icebreakers Day",description:"The Microsoft Tech Club opened their membership registrations on 29 August, in the Sports Complex. Registrations were available for freshmen, all seniors, and renewals were available for existing members who were interested in retaining their subscription to the club. Council members actively participated in marketing the merits of MTC and the perks that the club had to offer to members, but the MTC stall had its own attractive features which incentivised future members to join with a discounted price.",dateTimeStart:new Date(2024,7,29,13,0),dateTimeEnd:new Date(2024,7,29,23,59),links:[{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_fyp-microsofttechclub-bitsdubai-activity-7235164364851314688-Nt8r"}],image:k},{title:"GameWeek Series",description:"The Microsoft Tech Club (MTC) hosted its highly anticipated GameWeek Series online throughout August, engaging members in a thrilling competition across three diverse games. The series drew considerable attention and participation, with members eagerly vying for the top spots in a display of wit, observation, and technical acumen.",dateTimeStart:new Date(2024,7,5,0,0),dateTimeEnd:new Date(2024,7,9,23,59),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/p/C-xa_5KSoB5"}],image:_},{title:"How To Start Programming",description:"The “How To Start Programming” workshop began with the MTC core council outlining the club’s goals and upcoming events. The speakers then covered programming basics, highlighted BITS Pilani’s offerings, and provided an introduction to competitive programming and open-source projects. Participants also received a curated list of resources to start learning their preferred languages.",dateTimeStart:new Date(2023,8,6,18,30),dateTimeEnd:new Date(2023,8,6,19,30),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/reel/CwxdLidvP2h"}],image:D},{title:"MATLAB Workshop",description:"The “MATLAB Workshop” began with the two speakers introducing the UI of MATLAB and its basic syntax and functionalities. They moved on to talking about the data types, comments, arrays, linspace, matrix element-wise operations, and indexing. Next, they solved two sample problems that aimed to demonstrate problem-solving and plotting graphs in MATLAB.",dateTimeStart:new Date(2023,8,13,18,30),dateTimeEnd:new Date(2023,8,13,19,45),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/p/CxDTqwDv-l0"}],image:S},{title:"VS Code Workshop",description:"The “VS Code” workshop kicked off with MTC’s Heramb and Akash introducing the agenda and providing a brief overview of VS Code. They discussed programming, VS Code’s features, customization tips, API integration, built-in AI tools, and shared resources to help participants get familiar with the VS Code environment.",dateTimeStart:new Date(2023,10,20,18,30),dateTimeEnd:new Date(2023,10,20,19,45),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/p/Czv9N40NEYV"}],image:x},{title:"Typing Contest",description:"The Typing Contest, Microsoft Tech Club’s flagship event, tested participants’ auditory comprehension and typing speed in a Computer Lab. Participants had two hours to attempt the challenge, with the opportunity for two retries. Each hour featured four unique audio clips, and participants were evaluated on speed and accuracy. The competition had a total of 9 winners, with 3 winners from each hour.",dateTimeStart:new Date(2023,8,20,10,0),dateTimeEnd:new Date(2023,8,20,13,30),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/p/Cxa9BRFvVWh"}],image:C},{title:"SignQuest",description:"The MTC SignQuest is a promotional event for the ESL Global Summit Generative AI Competition, organized by MTC during the CINS 2023 conference at BITS Pilani Dubai Campus in hybrid mode. Held in the vending machine area, pairs of participants took part, with one answering quiz questions while the other used search skills to assist. The competition aimed to raise awareness of Emirati Sign Language and the Generative AI competition.",dateTimeStart:new Date(2023,9,5,11,0),dateTimeEnd:new Date(2023,9,5,15,0),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/p/CyQ5r_ivx8Q"}],image:j},{title:"ThinkAI’23",description:"ThinkAI’23 sought to find students with AI-driven solutions to global challenges, providing mentorship for the 2024 Microsoft Imagine Cup. Fourteen out of 16 registered teams presented ideas in areas like sustainability, healthcare, and education to 8 judges. The winners were Team Tech Titans (Sanober Sarfaraz Ahmed and Harsh Garg) and Team IntelliTrack (Anurag Kumar Jha, Mohammed Husamuddin, Sstuti D Mehra, Abdul Rahmaan Ansari).",dateTimeStart:new Date(2023,10,28,0,0),dateTimeEnd:new Date(2023,10,30,23,59),links:[{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_%F0%9D%97%A0%F0%9D%97%B6%F0%9D%97%B0%F0%9D%97%BF%F0%9D%97%BC%F0%9D%98%80%F0%9D%97%BC%F0%9D%97%B3%F0%9D%98%81-%F0%9D%97%A7%F0%9D%97%B2%F0%9D%97%B0%F0%9D%97%B5-%F0%9D%97%96%F0%9D%97%B9%F0%9D%98%82%F0%9D%97%AF%F0%9D%98%80-%F0%9D%97%A7%F0%9D%97%B5%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%B8%F0%9D%97%94%F0%9D%97%9C-activity-7140743739425153024-at_b"}],image:M},{title:"Speaker Session with Professor Nick Pears",description:"The Microsoft Tech Club hosted a speaker session with Professor Nick Pears, a Computer Vision expert from the University of York. Attended by BITS Pilani Dubai Campus director Dr. Srinivasan Madapusi and Computer Science HoD Dr. Vijaykumar, the event covered AI, Cyber Security, and Professor Pears’ work in craniofacial shape modeling, sparking discussions on the future of Computer Vision.",dateTimeStart:new Date(2023,11,19,14,0),dateTimeEnd:new Date(2023,11,19,15,0),links:[{icon:e.jsx(s,{}),url:"https://instagram.com/p/C1FHpybPBnz"},{icon:e.jsx(a,{}),url:"https://linkedin.com/posts/microsoft-tech-club_microsofttechclub-computervision-techinnovation-activity-7143636619009466368-QdG9"}],image:A}];function m(t){const{dateTimeStart:o,dateTimeEnd:r}=t;return Math.max(o,r)>Date.now()}const d=h.filter(m),F=h.filter(t=>!m(t));function P(){return e.jsxs("div",{className:"event-container",children:[e.jsx("h1",{className:"section-title",children:"Upcoming Events"}),d.length>0?d.map(t=>e.jsx(c,{eventDetails:t},t.title)):e.jsxs("p",{className:"event-empty-message",children:["You’re all caught up!",e.jsx("br",{}),"But keep an eye out on this page…"]}),e.jsx("h1",{className:"section-title",children:"Past Events"}),F.map(t=>e.jsx(c,{eventDetails:t},t.title))]})}export{P as default};
