import React from 'react';
import '../styles/managementTeam.css'; // Assuming we use a separate CSS file for styling

export default function ManagementTeam() {
  // Array of teachers
  const teachers = [
    {
      name: 'Mr. John Doe',
      post: 'Head of Science Department',
      image: 'https://www.listchallenges.com/f/items/4a49d146-da0e-4940-826c-cad7d1a4919c.jpg',
    },
    {
      name: 'Ms. Jane Smith',
      post: 'Head of Mathematics Department',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT519fFp6RYLFkNi_pWWapEISb-HbZx-TRL3A&s',
    },
    {
      name: 'Dr. Richard Miles',
      post: 'Head of Arts Department',
      image: 'https://www.listchallenges.com/f/items/6b5978c7-4467-4689-8358-945c88045798.jpg',
    },
    {
      name: 'Mrs. Angela White',
      post: 'Head of Physical Education',
      image: 'https://www.jetpunk.com/img/user-img/72/728c815558-450.webp',
    },
  ];

  return (
    <div className="management-team">
      <h1 className="section-title">Management Team</h1>
      
      {/* Display each teacher */}
      <div className="teachers-grid">
        {teachers.map((teacher, index) => (
          <div key={index} className="teacher-card">
            <img src={teacher.image} alt={teacher.name} className="teacher-image" />
            <h2 className="teacher-name">{teacher.name}</h2>
            <p className="teacher-post">{teacher.post}</p>
          </div>
        ))}
      </div>

      {/* Group Picture of All Teachers */}
      <div className="all-teachers">
        <img
          src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?cs=srgb&dl=pexels-fauxels-3184398.jpg&fm=jpg" // Replace with the group picture of all teachers
          alt="All Teachers"
          className="group-image"
        />
      </div>
    </div>
  );
}
