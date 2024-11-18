import React from 'react';
import '../styles/academicPage.css'; // Optional: add specific styles here;
import Footer from './footer';
import Navbar from "./nav"
import AnimateOnScroll from './animateOnScroll';


export default function AcademicPage() {
  // Sample data for the table
  const tableData = [
    {
      date: "6th September, 2024",
      activities: [
        "1. Staff Resume: Preparatory for 1st Term 2024/25",
        "2. FOUNDER’S DAY"
      ],
      theme: "Preparation and Founder's Day",
    },
    {
      date: "9th to 13th September, 2024",
      activities: [
        "1. Sales of Books"
      ],
      theme: "Book Sales Week",
    },
    {
      date: "16th September, 2024",
      activities: [
        "1. School Resumption for 1st Term 2024/25 Academic Sessions",
        "2. SOCIETY DAY (Every Thursday)"
      ],
      theme: "School Resumption",
    },
    {
      date: "26th September, 2024",
      activities: [
        "1. Gender Assembly/Moral Talks/Counseling (Fortnight Thursday)"
      ],
      theme: "Gender Assembly and Moral Talks",
    },
    {
      date: "1st October, 2024",
      activities: [
        "1. INDEPENDENCE DAY"
      ],
      theme: "Celebration of Independence",
    },
    {
      date: "10th October, 2024",
      activities: [
        "1. School's 1st Heads/Sectional Head Meeting",
      ],
      theme: "Sectional Meeting and Planning",
    },
    {
      date: "11th to 18th October, 2024",
      activities: [
        "1. SUMMATIVE TEST"
      ],
      theme: "Assessment Week",
    },
    {
      date: "28th October to 1st November, 2024",
      activities: [
        "1. MID-TERM BREAK"
      ],
      theme: "Mid-Term Break",
    },
    {
      date: "6th to 7th November, 2024",
      activities: [
        "1. OPEN DAY",
        "2. 2nd School Heads/Sectional Head Meeting"
      ],
      theme: "Engagement with Parents",
    },
    {
      date: "18th to 26th November, 2024",
      activities: [
        "1. End of Term Examination"
      ],
      theme: "Examinations",
    },
    {
      date: "11th December, 2024",
      activities: [
        "1. END OF YEAR PARTY"
      ],
      theme: "Celebration and Festivities",
    },
    {
      date: "12th December, 2024",
      activities: [
        "1. School Closes for Vacation"
      ],
      theme: "Vacation",
    },
    {
      date: "13th December, 2024",
      activities: [
        "1. END OF TERM"
      ],
      theme: "End of Term",
    },
    {
      date: "9th to 10th January, 2025",
      activities: [
        "1. Staff Resume"
      ],
      theme: "Staff Preparation for New Term",
    },
    {
      date: "13th January, 2025",
      activities: [
        "1. Resumption date for 2nd Term 2024/2025"
      ],
      theme: "2nd Term Begins",
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
    <li>FOUNDER’S DAY – Friday, 6th September 2024</li>
    <li>INDEPENDENCE DAY – Tuesday, 1st October 2024</li>
    <li>SUMMATIVE TEST – Friday, 11th to Friday, 18th October 2024</li>
    <li>OPEN DAY – Wednesday and Thursday, 6th & 7th November 2024</li>
    <li>END OF YEAR PARTY – Wednesday, 11th December 2024</li>
    <li>School Closes for Vacation – Thursday, 12th December 2024</li>
  </ul>
</div>
</AnimateOnScroll>

<AnimateOnScroll><Footer/></AnimateOnScroll>


    </div>
  );
}
