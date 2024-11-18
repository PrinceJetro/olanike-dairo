import React from 'react';
import '../styles/testimonial.css'; // Import CSS for styling

export default function Testimonial() {
  const testimonials = [
    {
      name: "Bilikisu Olabimpe",
      image: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
      text: "Amazing school, I would recommend to any parent looking for a school with high educational standards"
    },
    {
      name: "Wura Ola",
      image: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
      text: "Quality education  this the place to be. Committed and dedicated teachers. Hardworking non teaching staff"
    },
    {
      name: "Kenny Dosunmu",
      image: "https://i.pinimg.com/736x/0d/64/98/0d64989794b1a4c9d89bff571d3d5842.jpg",
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
