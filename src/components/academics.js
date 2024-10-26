import React from 'react';
import '../styles/academicPage.css'; // Optional: add specific styles here;
import Footer from './footer';
import Navbar from "./nav"

export default function AcademicPage() {
  // Sample data for the table
  const tableData = [
    {
      week: "PRE RESUMPTION",
      date: "1st to 4th September, 2022",
      activities: [
        "1. Lorem ipsum dolor sit amet.",
        "2. Consectetur adipiscing elit.",
        "3. Sed do eiusmod tempor incididunt ut labore et dolore.",
        "4. Ut enim ad minim veniam.",
        "5. Quis nostrud exercitation ullamco laboris.",
        "6. Nisi ut aliquip ex ea commodo consequat.",
        "7. Duis aute irure dolor in reprehenderit.",
        "8. In voluptate velit esse cillum dolore.",
      ],
      theme: "Lorem Ipsum Dolor",
    },
    {
      week: "1",
      date: "5th to 9th September, 2022",
      activities: [
        "1. Excepteur sint occaecat cupidatat non proident.",
        "2. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "3. Ut enim ad minim veniam.",
        "4. Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
        "5. Duis aute irure dolor in reprehenderit in voluptate.",
        "6. Velit esse cillum dolore eu fugiat nulla pariatur.",
        "7. In voluptate velit esse cillum dolore.",
        "8. Excepteur sint occaecat cupidatat non proident.",
      ],
      theme: "Random Ipsum Theme",
    },
    {
      week: "2",
      date: "12th to 16th September, 2022",
      activities: [
        "1. Nulla pariatur excepteur sint occaecat cupidatat.",
        "2. Sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "3. Lorem ipsum dolor sit amet consectetur.",
        "4. Adipiscing elit, sed do eiusmod tempor incididunt.",
        "5. Ut labore et dolore magna aliqua.",
        "6. Ut enim ad minim veniam quis nostrud exercitation.",
        "7. Ullamco laboris nisi ut aliquip ex ea commodo.",
        "8. Duis aute irure dolor in reprehenderit.",
      ],
      theme: "Dolor Sit Amet",
    },
    // Add more rows here as needed
  ];
  

  return (
    <div className="academic-page">
      <Navbar/>
          <div className='about_us_intro'>
            <h1>Academics</h1>
        </div>
      
      <div className='table_div'>
      <table className="academic-table">
        <thead>
          <tr>
            <th>WEEK</th>
            <th>DATE</th>
            <th>ACTIVITIES</th>
            <th>THEME</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.week}</td>
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


      {/* Special Events/Activities Section */}
<div className="special-events">
  <h2 className="section-title">Special Events/Activities for the Term</h2>
  <ul>
    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit – Every Monday</li>
    <li>Phasellus euismod orci ac ex facilisis, eget ultrices metus malesuada – Every Tuesday</li>
    <li>Nulla facilisi. Fusce interdum, elit sit amet venenatis sollicitudin – Every 1st Wednesday of every month</li>
    <li>Curabitur nec justo vitae mauris viverra bibendum – Friday 7th September</li>
    <li>Suspendisse potenti. Etiam convallis, quam a tempus venenatis – Thursday 12th September, 2022</li>
    <li>Morbi laoreet nisi in orci vulputate, quis tempor risus tincidunt – Saturday 15th September, 2022</li>
  </ul>
</div>
          <Footer/>
    </div>
  );
}
