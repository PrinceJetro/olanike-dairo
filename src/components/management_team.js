import React from 'react';
import '../styles/managementTeam.css'; // Assuming we use a separate CSS file for styling
import mrsBimpe from "../images/enhanced/mrsBimpe.jpg"
import mrsewumi from "../images/enhanced/management/6.jpg"
import Animashaun from "../images/enhanced/management/5.jpg"
import sanusi from "../images/enhanced/management/3.jpg"
import principal from "../images/enhanced/management/principal.jpg"







export default function ManagementTeam() {
  // Array of teachers
  const teachers = [
    {
      name: 'MS BIMPE ADEJUNMOBI',
      post: 'Administrator',
      image: mrsBimpe,
    },
    {
      name: 'MRS F.I Animashaun',
      image: Animashaun,
      post: "Asst. Headmistress Primary Section"
    },
    {
      name: 'MRS F. EWUMI',
      post: 'Secondary School and Accountant',
      image: mrsewumi,
    },
    {
      name: 'Mrs R. A. Sanusi',
      image: sanusi,
      post: "Headmistress Primary Section"
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
          src={principal} // Replace with the group picture of all teachers
          alt="Olanike dairo"
          className="group-image"
        />
      </div>
    </div>
  );
}
