import React from "react";

import "./workexperience.css";

import briefcase from "./assets/briefcase.svg";
import Experience from "./experience";

function WorkExperience () {
    
    return(
        <div className="fourTemplateworkexperienceContainer">
            
            <div className="fourTemplateexperienceTitle">
                <div className="fourTemplateexperienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    Work Experience
                </h1>
            </div>
            
            <Experience />
            
        </div>
    );
}

export default WorkExperience;