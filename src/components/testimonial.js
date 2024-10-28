import React from 'react';
import '../styles/testimonial.css'; // Import CSS for styling

export default function Testimonial() {
  const testimonials = [
    {
      name: "Lorem Ipsum",
      occupation: "Lorem Teacher",
      image: "https://picsum.photos/id/1011/100",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel gravida nulla. Aenean facilisis, nulla eget consectetur facilisis, neque tortor tristique nunc, nec egestas justo libero sed felis."
    },
    {
      name: "Dolor Sit",
      occupation: "Student",
      image: "https://picsum.photos/id/1012/100",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac tristique elit. Vivamus euismod, nisl sit amet pharetra bibendum, justo massa pellentesque ex, in convallis purus nulla vel odio."
    },
    {
      name: "Amet Consectetur",
      occupation: "Science Teacher",
      image: "https://picsum.photos/id/1013/100",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at purus a dui dapibus elementum in et neque. Sed posuere velit ut lacinia tincidunt."
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
