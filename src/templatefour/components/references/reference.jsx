import React from "react";

import "./reference.css";

import briefcase from "./assets/briefcase.svg";
import Experience from "./experience";

function Reference () {
    
    return(
        <div className="fourTemplateworkexperienceContainer">
            
            <div className="fourTemplateexperienceTitle">
                <div className="fourTemplateexperienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    References
                </h1>
            </div>
            
            <Experience />
            
        </div>
    );
}

export default Reference;