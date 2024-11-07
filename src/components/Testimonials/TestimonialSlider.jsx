import React, { useState } from "react";
import "./TestimonialSlider.css";
import marketingMember7 from "../../assets/marketing_member7.jpg";
import Testimonial02 from "../../assets/Testimonial02.jpeg";
import Testimonial03 from "../../assets/Testimonial03.jpg";


const TestimonialSlider = () => {
  const[currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      quote: "This past semester, being the Creative Ambassador at MTC has been an incredibly rewarding experience. It has offered various opportunities for personal growth and skill development. I was able to understand the functioning of the club and collaborate with an amazing team. All the council members were always so supportive and motivating, that working on all the assigned tasks was genuinely enjoyable. Overall, this program has broadened my horizons and bolstered my confidence and I'd highly recommend this program for anyone looking to elevate themselves personally and professionally. ",
      name: "Ameiya Wankhede",
      year: "2nd Year",
      image: marketingMember7
    },
    {
      quote: "I am thrilled to share my experience as a proud member of the Ambassadorship Program of MTC. This opportunity has been an incredible journey filled with many valuable learning experiences, growth and fun moments with the council. I can positively say that the members of the council guided me throughout my shortcomings and profoundly impacted my personal and professional development. I would definitely recommend freshers to join the Ambassadorship Program. ",
      name: "Siddhi Mishra",
      year: "2rd Year",
      image:Testimonial02
    },
    {
      quote: "The MTC ambassadorship programme helped me improve my technical skills & gain practical experience and the confidence I needed by being involved in various events of the club. I got to learn & assist in the development of coding questions & programming puzzles for many different tasks & competitions too.",
      name: "Vania Roy",
      year: "2rd Year",
      image:Testimonial03
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  const prvSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="testimonial-slider">
      <h2>Past Ambassador Testimonials</h2>
      <h4>Don't take our word for it. Take theirs</h4>
      <div className="testimonial">
        <button onClick={prvSlide} class="slider-button left">‹</button>
        <div className="testimonial-content">
          <p>"{testimonials[currentSlide].quote}"</p>
          <img
            src={testimonials[currentSlide].image}
            alt={testimonials[currentSlide].name}
            className="testimonial-image"
          />
          <h4>{testimonials[currentSlide].name}</h4>
          <p className="testimonial-position">
            {testimonials[currentSlide].year}
          </p>
        </div>
        <button onClick={nextSlide} class="slider-button right">›</button>
      </div>

      <div className="ondots">
      {testimonials.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot active' : 'dot'}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
