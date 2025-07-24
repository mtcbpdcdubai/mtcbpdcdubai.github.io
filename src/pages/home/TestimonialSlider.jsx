import { useState } from "react";

import "./TestimonialSlider.css";
import testimonials from "content/testimonials/Testimonials";


const TestimonialSlider = () => {
  const[currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prvSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="home-testimonial-slider">
      <h2>Past Ambassador Testimonials</h2>
      <p>Don’t take our word for it. Take theirs:</p>

      <div className="home-testimonial">
        <button onClick={prvSlide} className="home-testimonial-slider-button">‹</button>

        <div className="home-testimonial-content">
          <p className="home-testimonial-quote">“{testimonials[currentSlide].quote}”</p>
          <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} />
          <p className="home-testimonial-name">{testimonials[currentSlide].name}</p>
          <p className="home-testimonial-position">{testimonials[currentSlide].year}</p>
        </div>

        <button onClick={nextSlide} className="home-testimonial-slider-button">›</button>
      </div>

      <div className="home-testimonial-dots">
      {testimonials.map((_, index) => (
          <span
            key={index}
            className={"home-testimonial-dot" + (index === currentSlide ? ' active' : '')}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
