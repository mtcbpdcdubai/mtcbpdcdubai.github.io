import article_2025_04_17 from "./article_2025-04-17.jpg";
import article_2025_03_03 from "./article_2025-03-03.png";
import article_2025_02_07 from "./article_2025-02-07.png";
import article_2024_11_25 from "./article_2024-11-25.jpg";
import article_2024_10_06 from "./article_2024-10-06.png";
import article_2024_09_07 from "./article_2024-09-07.png";
import article_2024_08_20 from "./article_2024-08-20.png";
import article_2024_04_11 from "./article_2024-04-11.jpg";
import article_2024_03_20 from "./article_2024-03-20.png";
import article_2024_02_08 from "./article_2024-02-08.png";
import article_2023_12_15 from "./article_2023-12-15.png";
import article_2023_11_30 from "./article_2023-11-30.png";
import article_2023_09_28 from "./article_2023-09-28.jpg";
import article_2023_09_07 from "./article_2023-09-07.jpg";
import article_2023_09_04 from "./article_2023-09-04.webp";
import article_2023_08_24 from "./article_2023-08-24.jpg";
import article_2023_08_18 from "./article_2023-08-18.png";
import article_2023_08_10 from "./article_2023-08-10.jpg";



/**
 * Type definition for an Article.
 * @typedef Article
 * @property {string} title The title of the article.
 * @property {string} preview A brief preview of the article.
 * @property {Date} dateTime The date and time.
 * @property {string} image Image associated with the article to be displayed.
 * @property {string} link URL to show in the post.
 */



/** An array of articles. @type {Article[]} */
export const articles = [
  {
    title: "Maybe Our Phones Should Be Dumber",
    preview: "Maybe your mom was right; it is all because of that phone.",
    dateTime: new Date(2025, 4-1, 17),
    image: article_2025_04_17,
    link: "https://medium.com/@microsofttechclub/maybe-our-phones-should-be-dumber-511ad2da46dc",
  },

  {
    title: "And I Am Become Death, Destroyer Of Phones…",
    preview: "Planned Obsolescence. Your smartphone will die in 2 years.",
    dateTime: new Date(2025, 3-1, 3),
    image: article_2025_03_03,
    link: "https://medium.com/@microsofttechclub/and-i-am-become-death-destroyer-of-phones-ca7eb40ed4c9",
  },

  {
    title: "ChatGPT’s White Whale is China’s Golden Goose",
    preview: "The Deepseek story. On January 18, 2025, America tried to ban Tiktok, over concerns of Chinese actors accessing users’ private data through the app.",
    dateTime: new Date(2025, 2-1, 7),
    image: article_2025_02_07,
    link: "https://medium.com/@microsofttechclub/chatgpts-white-whale-is-china-s-golden-goose-a79619c545f2",
  },

  {
    title: "Do Employers Dream of AI Sheep?",
    preview: "Are programmers going to be obsolete?",
    dateTime: new Date(2024, 11-1, 25),
    image: article_2024_11_25, // "https://miro.medium.com/v2/1*GVl9NlwgPaUvJCGKsmQkrA.jpeg",
    link: "https://medium.com/@microsofttechclub/do-employers-dream-of-ai-sheep-0744c066bf69",
  },

  {
    title: "I’m not a robot ✅",
    preview: "Cyborgs. The first thing that comes to mind, is either the DC comics character of the same name(you pick which teen titans version, or a…",
    dateTime: new Date(2024, 10-1, 6),
    image: article_2024_10_06, // "https://miro.medium.com/v2/0*0QApbtEs9pVxDcAN",
    link: "https://medium.com/@microsofttechclub/im-not-a-robot-ce570c87f711",
  },

  {
    title: "Out-Smart Your Home",
    preview: "Enormous sibling is viewing you.",
    dateTime: new Date(2024, 9-1, 7),
    image: article_2024_09_07, // "https://miro.medium.com/v2/0*v5pNOaPKl74fGyVx",
    link: "https://medium.com/@microsofttechclub/out-smart-your-home-610f39d26065",
  },

  {
    title: "Y2K, Reimagined",
    preview: "A long time ago, in the age of Spice Girls and Furbies and VHS tapes, there was a word. A word whispered in the shadows, lurking around the…",
    dateTime: new Date(2024, 8-1, 20),
    image: article_2024_08_20, // "https://miro.medium.com/v2/0*n81jtFIBqyb8quqf",
    link: "https://medium.com/@microsofttechclub/y2k-reimagined-9ce48e54bf2e",
  },

  {
    title: "Is This Blog About Computers?",
    preview: "When most people hear the phrase “quantum computer”, their right hemispheres tend to get activated, and they start visualising a sort of…",
    dateTime: new Date(2024, 4-1, 11),
    image: article_2024_04_11, // "https://miro.medium.com/v2/1*v6feZSKJNEUcKfijqRw7MA.jpeg",
    link: "https://medium.com/@microsofttechclub/is-this-blog-about-computers-a64ad88a5622",
  },

  {
    title: "‘B’ for Blockchain, ‘C’ for Cryptobros",
    preview: "Imagine working on data entry into a database where you cannot make any mistakes, because once you enter a value, you can’t take it back…",
    dateTime: new Date(2024, 3-1, 20),
    image: article_2024_03_20, // "https://miro.medium.com/v2/1*k4NFnCTb20Rf02c9_SEJBQ.png",
    link: "https://medium.com/@microsofttechclub/b-for-blockhain-c-for-cryptobros-11f0224c6e12",
  },

  {
    title: "Git-ting With The Times",
    preview: "Let’s face it, code that solves real-world problems is nothing at all like running a loop to print a simple pattern. It should be robust…",
    dateTime: new Date(2024, 2-1, 8),
    image: article_2024_02_08, // "https://miro.medium.com/v2/1*rDa3nwhyX88RCROVyvwiTQ.png",
    link: "https://medium.com/@microsofttechclub/git-ting-with-the-times-7dffb3ef665f",
  },

  {
    title: "This Blog Was Written By ChatGPT.",
    preview: "Well, even if it wasn’t, you couldn’t tell.",
    dateTime: new Date(2023, 12-1, 15),
    image: article_2023_12_15, // "https://miro.medium.com/v2/1*fHekntHEjA4X-VxF-kNMEg.png",
    link: "https://medium.com/@microsofttechclub/this-blog-was-written-by-chatgpt-7ad92703e6c1",
  },

  {
    title: "Make Your Life Easier With These Quick Skills",
    preview: "As an undergraduate student in STEM, you may feel very out of place and overwhelmed with just the number of things that you are already…",
    dateTime: new Date(2023, 11-1, 30),
    image: article_2023_11_30, // "https://miro.medium.com/v2/1*2Brh5CDuSZowrB5y5Ef03g.png",
    link: "https://medium.com/@microsofttechclub/make-your-life-easier-with-these-quick-skills-a60b2eb8479f",
  },

  {
    title: "Are You Asking ChatGPT The Right Questions?",
    preview: "Or are you stuck asking it to write your essays for you?",
    dateTime: new Date(2023, 9-1, 28),
    image: article_2023_09_28, // "https://miro.medium.com/v2/1*m31F8UO8MBeuQTLBE5En0A.jpeg",
    link: "https://medium.com/@microsofttechclub/are-you-asking-chatgpt-the-right-questions-688c922225ef",
  },

  {
    title: "Become A UX Designer With These 5 Easy Steps!",
    preview: "And in these 240 hours of hard work.",
    dateTime: new Date(2023, 9-1, 7),
    image: article_2023_09_07, // "https://miro.medium.com/v2/1*SvrMI1T-6JVYXgR5EzPEAQ.jpeg",
    link: "https://medium.com/@microsofttechclub/become-a-ux-designer-with-these-5-easy-steps-74611c583abf",
  },

  {
    title: "Of Text Dumps and Coding Ambassadors",
    preview: "The Microsoft Tech Club at BITS Pilani, Dubai Campus had the opportunity to interview Adam Ahsan, a young software developer, tech…",
    dateTime: new Date(2023, 9-1, 4),
    image: article_2023_09_04, // "https://miro.medium.com/v2/1*xnvIXeS5SidMSdc2bq-ANQ.gif",
    link: "https://medium.com/@microsofttechclub/of-text-dumps-and-coding-ambassadors-fc054a374eaa",
  },

  {
    title: "Hard Facts vs. Deceptive Knacks",
    preview: "Life’s always better if the source is not “trust me bro”.",
    dateTime: new Date(2023, 8-1, 24),
    image: article_2023_08_24, // "https://miro.medium.com/v2/0*kWkumP-qbwmU2z7k",
    link: "https://medium.com/@microsofttechclub/hard-facts-vs-deceptive-knacks-cb35b12ebe88",
  },

  {
    title: "Should You Create Your Own (Coding) Language?",
    preview: "Because sometimes, even Mandarin Chinese seems easier.",
    dateTime: new Date(2023, 8-1, 18),
    image: article_2023_08_18, // "https://miro.medium.com/v2/1*IphquRkYzBeNyX-o2XJA1w.png",
    link: "https://medium.com/@microsofttechclub/should-you-create-your-own-coding-language-4caa02507346",
  },

  {
    title: "Does Data Know That It Is Data?",
    preview: "Here’s your answer: It does not.",
    dateTime: new Date(2023, 8-1, 10),
    image: article_2023_08_10, // "https://miro.medium.com/v2/1*QmTulI9jNpxdVna9RAdsIg.jpeg",
    link: "https://medium.com/@microsofttechclub/does-data-know-that-it-is-data-e913a54714f6",
  },
];

articles.sort((a, b) => a.dateTime.getTime() - b.dateTime.getTime());
articles.reverse();
