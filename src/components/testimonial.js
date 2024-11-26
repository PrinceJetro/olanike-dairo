import React from 'react';
import '../styles/testimonial.css'; // Import CSS for styling
import test1 from "../images/test1.jpg"
import test2 from "../images/test2.jpg"
import test3 from "../images/test3.jpg"

export default function Testimonial() {
  const testimonials = [
    {
      name: "Bilikisu Olabimpe",
      image: test1,
      text: "Amazing school, I would recommend to any parent looking for a school with high educational standards"
    },
    {
      name: "Wura Ola",
      image: test2,
      text: "Quality education, this is the place to be. Committed and dedicated teachers. Hardworking non teaching staff"
    },
    {
      name: "Kenny Dosunmu",
      image: test3,
      text: "I Was Once An Old Student Of This Best And Great School🌎🙏 And I Am Proud To Say Your Child Would Definitely Get A Qualitative Education There🥇🏆📚"
    }
];
  return (
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <img src={testimonial.image} alt={`${testimonial.name}`} className="testimonial-image" />
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <p className="testimonial-occupation">{testimonial.occupation}</p>
          <p className="testimonial-text">"{testimonial.text}"</p>
        </div>
      ))}
    </div>
  );
}
