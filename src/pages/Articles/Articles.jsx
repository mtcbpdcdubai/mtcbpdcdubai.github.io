import './Articles.css';
import article1Img from 'assets/article1.jpg';
import article2Img from 'assets/article2.jpg';
import article3Img from 'assets/article3.jpg';
import article4Img from 'assets/article4.jpg';
import article5Img from 'assets/article5.jpg';
import article6Img from 'assets/article6.jpg';
import article7Img from 'assets/article7.jpg';
import article8Img from 'assets/article8.jpg';
import article9Img from 'assets/article9.jpg';
import article10Img from 'assets/article10.jpg';
import article11Img from 'assets/article11.jpg';
const Articles = () => {
  return (
    <div className="articles-page">
      <h2>Explore Our Articles</h2>
      <div className="articles-cards">
      <div className="article-card card-5">
          <img src={article11Img} alt="Article 11" />
          <div className="article-content">
            <h3>I’m not a robot ✅</h3>
            <p>Cyborgs. The first thing that comes to mind, 
              is either the DC comics character of the same name
              you pick which teen titans version, or a nightmare of uncanny 
              humanoids taking over. Regardless, the idea of such beings living 
              among us sounds either dystopian or too........</p>
            <button
              className="read-more-button purple-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/im-not-a-robot-ce570c87f711"}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="article-card card-1">
          <img src={article10Img} alt="Article 1" />
          <div className="article-content">
            <h3>Out-Smart Your Home</h3>
            <p>Enormous sibling is viewing you.I’m one of those weird people who read books.And I mean books. Actual, paper books; not e-books. Never got the appeal.And so there I was, reading Frankenstein by Mary Shelley (because of course I was, because it’s an untouchable classic).What you need to know here, reader, is.......</p>
            <button
              className="read-more-button blue-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/out-smart-your-home-610f39d26065"}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="article-card card-2">
          <img src={article9Img} alt="Article 2" />
          <div className="article-content">
            <h3>Y2K, Reimagined</h3>
            <p>A long time ago, in the age of Spice Girls and Furbies and VHS tapes, there was a word. A word whispered in the shadows, lurking around the corners, for people were too afraid to say out loud. A word that spelled out the fear of impending digital doom.....</p>
            <button
              className="read-more-button green-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/y2k-reimagined-9ce48e54bf2e"}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="article-card card-3">
          <img src={article3Img} alt="Article 3" />
          <div className="article-content">
            <h3>Are You Asking ChatGPT The Right Questions?</h3>
            <p>Or are you stuck asking it to write your essays for you? The most popular ways of using this potent AI tool include article writing, idea generation, problem solving, and more use cases that essentially make...</p>
            <button
              className="read-more-button orange-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/are-you-asking-chatgpt-the-right-questions-688c922225ef"}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Add the next three articles below */}
        <div className="article-card card-4">
          <img src={article4Img} alt="Article 4" />
          <div className="article-content">
            <h3>Become A UX Designer With These 5 Easy Steps!</h3>
            <p>And in these 240 hours of hard work. But you may be wondering exactly what UX Design is, and if it is even different from our traditional graphic designers. UX design is the development of...</p>
            <button
              className="read-more-button yellow-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/become-a-ux-designer-with-these-5-easy-steps-74611c583abf"}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="article-card card-5">
          <img src={article5Img} alt="Article 5" />
          <div className="article-content">
            <h3>Of Text Dumps and Coding Ambassadors</h3>
            <p>The Microsoft Tech Club at BITS Pilani, Dubai Campus had the opportunity to interview Adam Ahsan, a young software developer, tech enthusiast, and bookworm, who also happens to be one of the 15...</p>
            <button
              className="read-more-button purple-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/of-text-dumps-and-coding-ambassadors-fc054a374eaa"}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="article-card card-6">
          <img src={article6Img} alt="Article 6" />
          <div className="article-content">
            <h3>Hard Facts vs. Deceptive Knacks</h3>
            <p>Life’s always better if the source is not “trust me bro”. Of course, the advice “follow your heart” is not misleading; it’s just that the path you pick can either make or break you depending on the decisions you...</p>
            <button
              className="read-more-button lightblue-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/hard-facts-vs-deceptive-knacks-cb35b12ebe88"}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Add the last two articles below */}
        <div className="article-card card-7">
          <img src={article7Img} alt="Article 7" />
          <div className="article-content">
            <h3>Should You Create Your Own (Coding) Language?</h3>
            <p>Because sometimes, even Mandarin Chinese seems easier. But if you are learning a language like that, then chances are that you are learning it for a reason that might not be just intellectual fulfilment...</p>
            <button
              className="read-more-button green-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/should-you-create-your-own-coding-language-4caa02507346"}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="article-card card-8">
          <img src={article8Img} alt="Article 8" />
          <div className="article-content">
            <h3>Does Data Know That It Is Data?</h3>
            <p>Here’s your answer: It does not. However, there are (hypothetical (for now)) systems that know exactly what they are, and how they came to be...</p>
            <button
              className="read-more-button orange-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/does-data-know-that-it-is-data-e913a54714f6"}
            >
              Read More
            </button>
          </div>
        </div>
        <div className="article-card card-1">
          <img src={article1Img} alt="Article 1" />
          <div className="article-content">
            <h3>This Blog Was Written By ChatGPT</h3>
            <p>Well, even if it wasn’t, you couldn’t tell. The advent of ChatGPT has left people questioning their job stability yet again, and while it is indeed true that the rise of such a capable intelligence system has made load...</p>
            <button
              className="read-more-button blue-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/this-blog-was-written-by-chatgpt-7ad92703e6c1"}
            >
              Read More
            </button>
          </div>
        </div>

        <div className="article-card card-2">
          <img src={article2Img} alt="Article 2" />
          <div className="article-content">
            <h3>Make Your Life Easier With These Quick Skills</h3>
            <p>As an undergraduate student in STEM, you may feel very out of place and overwhelmed with just the number of things that you are already expected to know. You may be thinking, “Didn’t I come to uni precisely...</p>
            <button
              className="read-more-button green-button"
              onClick={() => window.location.href = "https://medium.com/@microsofttechclub/make-your-life-easier-with-these-quick-skills-a60b2eb8479f"}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;

