import React from "react";

import "./education.css";

import briefcase from "./assets/briefcase.svg";
import Experience from "./experience";

function Education () {
    
    return(
        <div className="templatethreeworkexperienceContainer">
            
            <div className="templatethreeexperienceTitle">
                <div className="templatethreeexperienceLogo">
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