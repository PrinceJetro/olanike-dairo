import React from 'react';
import '../styles/managementTeam.css'; // Assuming we use a separate CSS file for styling
import mrsBimpe from "../images/enhanced/mrsBimpe.jpg"
import mrsewumi from "../images/enhanced/mrsewumi.jpg"
import mrsyeouna from "../images/enhanced/mrsyeouna.jpg"
import msawotoruvbe from "../images/enhanced/msawotoruvbe.jpg"







export default function ManagementTeam() {
  // Array of teachers
  const teachers = [
    {
      name: 'MS BIMPE ADEJUNMOBI',
      post: 'ADMINISTRATOR',
      image: mrsBimpe,
    },
    {
      name: 'MRS S.O YEOUNA',
      image: mrsyeouna,
    },
    {
      name: 'MRS F. EWUMI',
      post: 'SECONDARY AND ACCOUNT',
      image: mrsewumi,
    },
    {
      name: 'MS M.M AWOTORUVBE',
      image: msawotoruvbe,
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
    </div>
  );
}
