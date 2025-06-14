import React from 'react';
import '../styles/academicPage.css'; // Optional: add specific styles here;
import Footer from './footer';
import Navbar from "./nav"
import AnimateOnScroll from './animateOnScroll';


export default function AcademicPage() {
  // Sample data for the table
const tableData = [
  {
    date: "23rd April, 2025",
    activities: [
      "1. Management Staff Resume"
    ],
    theme: "Management Resumption"
  },
  {
    date: "24th April, 2025",
    activities: [
      "1. Staff Resume - Preparatory for 3rd Term 2024/2025"
    ],
    theme: "Staff Resumption"
  },
  {
    date: "28th April, 2025",
    activities: [
      "1. School Resumes for 3rd Term 2024/2025"
    ],
    theme: "School Resumption"
  },
  {
    date: "Every Thursday",
    activities: [
      "1. Society Day"
    ],
    theme: "Student Societies"
  },
  {
    date: "Fortnight Thursdays",
    activities: [
      "1. Gender Assembly/Moral Talks/Counseling"
    ],
    theme: "Student Guidance"
  },
  {
    date: "Fridays",
    activities: [
      "1. Weekly Assessment Test"
    ],
    theme: "Continuous Assessment"
  },
  {
    date: "9th May, 2025",
    activities: [
      "1. Submission of Test Questions to H/M"
    ],
    theme: "Test Preparation"
  },
  {
    date: "19th – 26th May, 2025",
    activities: [
      "1. Summative Test"
    ],
    theme: "Mid-Term Assessment"
  },
  {
    date: "27th May, 2025",
    activities: [
      "1. CHILDREN DAY"
    ],
    theme: "Children’s Celebration"
  },
  {
    date: "29th May, 2025",
    activities: [
      "1. 1st School Heads/Sectional Head Meeting"
    ],
    theme: "Leadership Coordination"
  },
  {
    date: "4th June, 2025",
    activities: [
      "1. Submission of Exam Questions to H/M"
    ],
    theme: "Exam Planning"
  },
  {
    date: "9th – 13th June, 2025",
    activities: [
      "1. Mid-Term Break"
    ],
    theme: "Mid-Term Rest"
  },
  {
    date: "25th – 26th June, 2025",
    activities: [
      "1. Open Day"
    ],
    theme: "Parent Engagement"
  },
  {
    date: "26th June, 2025",
    activities: [
      "1. 2nd School Heads/Sectional Head Meeting"
    ],
    theme: "Review & Planning"
  },
  {
    date: "30th June – 9th July, 2025",
    activities: [
      "1. End of Term Examination"
    ],
    theme: "Final Assessment"
  },
  {
    date: "22nd July, 2025",
    activities: [
      "1. GRADUATION"
    ],
    theme: "Celebrating Achievements"
  },
  {
    date: "24th July, 2025",
    activities: [
      "1. School Closes for Vacation"
    ],
    theme: "Term Closure"
  },
  {
    date: "25th July, 2025",
    activities: [
      "1. Luncheon/End of Term"
    ],
    theme: "Staff & Student Celebration"
  },
  {
    date: "4th – 29th August, 2025",
    activities: [
      "1. Holiday Coaching"
    ],
    theme: "Holiday Learning"
  },
  {
    date: "September, 2025",
    activities: [
      "1. Sales of Books"
    ],
    theme: "Academic Preparation"
  },
  {
    date: "September, 2025",
    activities: [
      "1. Resumption Date for 1st Term 2025/26"
    ],
    theme: "New Session Begins"
  }
];

  
  

  return (
    <div className="academic-page">
      <Navbar/>
          <div className='academic_intro'>
            <h1>Academics</h1>
        </div>
      
      <div className='table_div'>
      <table className="academic-table">
        <thead>
          <tr>
            <th>DATE</th>
            <th>ACTIVITIES</th>
            <th>THEME</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>
                <ul>
                  {row.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>
              </td>
              <td>{row.theme}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

<AnimateOnScroll>
{/* Special Events/Activities Section */}
<div className="special-events">
  <h2 className="section-title">Special Events/Activities for the Term</h2>
  <ul>
    <li>CHILDREN’S DAY – Tuesday, 27th May 2025</li>
    <li>OPEN DAY – Wednesday and Thursday, 25th & 26th June 2025</li>
    <li>GRADUATION – Tuesday, 22nd July 2025</li>
    <li>LUNCHEON/END OF TERM – Friday, 25th July 2025</li>
    <li>HOLIDAY COACHING – Monday, 4th to Friday, 29th August 2025</li>
    <li>RESUMPTION FOR NEW SESSION – September 2025</li>
  </ul>
</div>
</AnimateOnScroll>

<AnimateOnScroll><Footer/></AnimateOnScroll>


    </div>
  );
}
