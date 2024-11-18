import React from 'react';
import '../styles/testimonial.css'; // Import CSS for styling

export default function Testimonial() {
  const testimonials = [
    {
      name: "Bilikisu Olabimpe",
      image: "https://images.pexels.com/photos/3189024/pexels-photo-3189024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Amazing school, I would recommend to any parent looking for a school with high educational standards"
    },
    {
      name: "Wura Ola",
      image: "https://images.pexels.com/photos/2764976/pexels-photo-2764976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Quality education, this is the place to be. Committed and dedicated teachers. Hardworking non teaching staff"
    },
    {
      name: "Kenny Dosunmu",
      image: "https://images.pexels.com/photos/2379429/pexels-photo-2379429.jpeg?cs=srgb&dl=pexels-george-ikwegbu-596824-2379429.jpg&fm=jpg",
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
