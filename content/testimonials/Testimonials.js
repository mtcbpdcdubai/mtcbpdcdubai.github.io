import imgAmeiya from "./Ameiya.jpg";
import imgSiddhi from "./Siddhi.jpg";
import imgVania from "./Vania.jpg";

/** A type declaration for a single Testimonial entry.
 * @typedef {Object} Testimonial
 * @property {str} name
 * @property {str} year
 * @property {str} quote
 * @property {} image
 */

/** @type {Testimonial[]} */
const testimonials = [
  {
    name: "Ameiya Wankhede",
    year: "2nd Year",
    quote: "This past semester, being the Creative Ambassador at MTC has been an incredibly rewarding experience. It has offered various opportunities for personal growth and skill development. I was able to understand the functioning of the club and collaborate with an amazing team. All the council members were always so supportive and motivating, that working on all the assigned tasks was genuinely enjoyable. Overall, this program has broadened my horizons and bolstered my confidence and I'd highly recommend this program for anyone looking to elevate themselves personally and professionally.",
    image: imgAmeiya,
  },
  {
    name: "Siddhi Mishra",
    year: "2rd Year",
    quote: "I am thrilled to share my experience as a proud member of the Ambassadorship Program of MTC. This opportunity has been an incredible journey filled with many valuable learning experiences, growth and fun moments with the council. I can positively say that the members of the council guided me throughout my shortcomings and profoundly impacted my personal and professional development. I would definitely recommend freshers to join the Ambassadorship Program.",
    image: imgSiddhi,
  },
  {
    name: "Vania Roy",
    year: "2rd Year",
    quote: "The MTC ambassadorship programme helped me improve my technical skills & gain practical experience and the confidence I needed by being involved in various events of the club. I got to learn & assist in the development of coding questions & programming puzzles for many different tasks & competitions too.",
    image: imgVania,
  },
];

export default testimonials;
