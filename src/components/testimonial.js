import React from 'react';
import '../styles/testimonial.css'; // Import CSS for styling

export default function Testimonial() {
  const testimonials = [
    {
      name: "John Doe",
      occupation: "Math Teacher",
      image: "https://picsum.photos/id/1011/100",
      text: "This school has an amazing environment for both teachers and students. I feel supported and valued as part of the team. The facilities are excellent!"
    },
    {
      name: "Jane Smith",
      occupation: "Student",
      image: "https://picsum.photos/id/1012/100",
      text: "I love my school! The teachers are very kind and always ready to help. The curriculum is challenging, and I've learned so much. Highly recommend!"
    },
    {
      name: "Michael Johnson",
      occupation: "Science Teacher",
      image: "https://picsum.photos/id/1013/100",
      text: "As a science teacher, I am thrilled by the opportunities we offer our students to explore and experiment in state-of-the-art laboratories. This school truly values innovation."
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
