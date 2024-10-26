import React, { useState, useEffect } from "react";
import "../styles/contact.css";
import Navbar from './nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import general from "../data/general";
import Footer from './footer';
import location_data from "../data/location_data"




export default function Contact(){

    let [complaints, setComplaints] = useState([]);


    let createStudent = async (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        document.getElementById("submit_btn").innerHTML="Loading"
        document.getElementById("submit_btn").disabled = true
        document.getElementById("submit_btn").style.backgroundColor ="White"

        const formData = new FormData(event.target); // Get form data
    
        fetch("https://prince-jetro-chat-app.vercel.app/student", {
            method: "POST",
            body: formData // Use FormData directly as the body
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Your Data Has Been Successfully Uploaded', data);
            // Update state or perform any other action if needed
            alert("Class Successfully Booked");
            document.getElementById("submit_btn").innerHTML="Submit"
            document.getElementById("submit_btn").disabled = false        
            document.getElementById("submit_btn").style.backgroundColor ="transparent"
        })
        .catch(error => {
            console.error('Error creating student:', error);
            if (error.message === 'Network response was not ok') {
                alert('Email already exists in the database. Please use a different email.');
                document.getElementById("submit_btn").innerHTML="Submit"
                document.getElementById("submit_btn").disabled = false        
                document.getElementById("submit_btn").style.backgroundColor ="transparent"
            } else {
                // Check if the error message contains information about the email already existing
                error.json().then(data => {
                    if (data && data.error && data.error.toLowerCase().includes('email already exists')) {
                        alert('Email already exists in the database. Please use a different email.');
                    } else {
                        alert('An unknown error occurred while creating the student');
                    }
                }).catch(() => {
                    alert('An unknown error occurred while creating the student');
                });
            }
        });    
    }
    



    const mylist = location_data.map(item =>(
        <div className="location">
        <img src={item.img} />
        <h1 className="location_header">{item.location}</h1>
        <p className="street"> <i className="fa fa-map-marker mr-3"></i>{item.str} </p>
        <p className="phone"> <i className="fa fa-phone mr-3"></i> <a href={`tel:${item.tel}`}>{item.tel}</a> </p>
        <p className="email"> <i className="fa fa-envelope mr-3"></i> <a href={`mailto:${item.mail}`}>{item.mail}</a> </p>
    </div>

    ))


    return(
        <div className="contact"id="register">
            <Navbar/>
            <div className="intro row p-0 m-0">
                <h1>CONTACT US</h1>
            </div>

            <div className="reach_us row reach_us_contact">
                    <div>
                        <h3>CALL US 24/7</h3>
                        <p>{general.school_phone}</p>
                    </div>
                    <div>
                        <h3>EMAIL ADDRESS</h3>
                        <p>{general.school_email}</p>
                    </div>
                    <div>
                        <h3>OPEN HOURS</h3>
                        <p>Daily 9:00-20:00</p>
                    </div>

                </div>

                <form onSubmit={createStudent} id="emailForm" className="row p-2">
                <div className="form_div">
                    <h1 className="text-center">Reach Us</h1>
                    <h4 className="text-center">Please complete the details below and then click on Submit and we’ll be in contact</h4>
                    <div className="row text-center">
                        <div className="col-sm-6 div1">
                            <input type="text" id="nameInput" placeholder="Full Name" name="full_name" required/>
                            <input type="tel" id="phoneInput" placeholder="Phone Number" name="phone" required/>
                            <input type="email" id="emailInput" placeholder="Email Address" name="email" required/>
                        </div>
                        <div className="col-sm-6 div2">
                            <textarea id="details" placeholder="Message" required  name="more"></textarea>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" id="submit_btn" className="btn">SUBMIT</button>
                    </div>
                </div>   
            </form>
            <div className="locations_div">
                    {mylist}
                </div>

            <Footer/>

        </div>
    )
}
