import React, {useState} from "react";

import edit from "./assets/edit.svg";
import save from "./assets/save.svg";

import "./experience.css";

function Experience() {

    const [jobTitleStatus, setJobTitleStatus] = useState(true);
    const [jobTitle, setJobTitle] = useState(`Devin Straza, CEO Corp.`);


    const [jobTitleStatus2, setJobTitleStatus2] = useState(true);
    const [jobTitle2, setJobTitle2] = useState(`Richard Straza, CEO Corp.`);

    
    
    return (
        <div className="templatetwoexperienceContainer">
            <div className="templatetwocontrol">
                {jobTitleStatus?
                <>
                <p className="templatetwoexperienceTitle">{jobTitle}</p>
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setJobTitleStatus(!jobTitleStatus);
                }} />
                </>
                :
                <>
                <input value={jobTitle} onChange={e=>setJobTitle(e.target.value)}/>
                <img className="templatetwoimgLi templatetwoicon" src={save} alt="edit" aria-hidden="true" onClick={e=> {
                    setJobTitleStatus(!jobTitleStatus);
                }} />
                </>
                }
                
            </div>
          


            



            <div className="templatetwocontrol">
                {jobTitleStatus2?<p className="templatetwoexperienceTitle">{jobTitle2}</p>:<input value={jobTitle2} onChange={e=>setJobTitle2(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setJobTitleStatus2(!jobTitleStatus2);
                }} />
            </div>
         

           
            
        </div>
    )
}
export default Experience;