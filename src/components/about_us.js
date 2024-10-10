import React from "react";
import "../styles/about_us.css";
import about_us_data from "../data/about_us_data";

export default function About(){

    const myList = about_us_data.map((item) =>
         <div>
            <img src={item.img}/>
            <h3>{item.head}</h3>
            <p>{item.text}</p>
         </div>
)

    return(
        <div class="flex-container about_us p-3">
            {myList}
        </div>


    )
}