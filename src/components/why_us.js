import React from "react";
import "../styles/why_us.css";
import why_us_data from "../data/why_us_data";

export default function Why_us(){

    const myList = why_us_data.map((item) =>
         <div>
            <i className={item.icon}></i>
            <h3>{item.head}</h3>
            <p>{item.text}</p>
         </div>
)

    return(
        <div class="flex-container why_us p-3">
            {myList}
        </div>


    )
}