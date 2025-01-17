import { useState } from "react";
import testimonials from "content/testimonials/Testimonials";
import "./TestimonialSlider.css";


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
    <div className="testimonial-slider">
      <h2>Past Ambassador Testimonials</h2>
      <h4>Don’t take our word for it. Take theirs:</h4>

      <div className="testimonial">
        <button onClick={prvSlide} className="slider-button left">‹</button>

        <div className="testimonial-content">
          <p>“{testimonials[currentSlide].quote}”</p>
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

        <button onClick={nextSlide} className="slider-button right">›</button>
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
