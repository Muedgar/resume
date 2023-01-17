import React from "react";

import "./education.css";

import briefcase from "./assets/briefcase.svg";
import Experience from "./experience";

function Education () {
    
    return(
        <div className="templatetwoworkexperienceContainer">
            
            <div className="templatetwoexperienceTitle">
                <div className="templatetwoexperienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    Education
                </h1>
            </div>
            
            <Experience />
            
        </div>
    );
}

export default Education;