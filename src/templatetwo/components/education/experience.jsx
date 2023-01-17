import React, {useState} from "react";

import edit from "./assets/edit.svg";
import save from "./assets/save.svg";

import "./experience.css";

function Experience() {

    const [jobTitleStatus, setJobTitleStatus] = useState(true);
    const [jobTitle, setJobTitle] = useState(`Bachelor's of Finance, Villarona University`);


    const [jobTitleStatus2, setJobTitleStatus2] = useState(true);
    const [jobTitle2, setJobTitle2] = useState(`Highschool Diploma`);

    const [jobDurationStatus, setJobDurationStatus] = useState(true);
    const [jobDuration, setJobDuration] = useState('October 2021 - September 2022');

    const [jobDurationStatus2, setJobDurationStatus2] = useState(true);
    const [jobDuration2, setJobDuration2] = useState('October 2019 - September 2021');

    /*
        description
    */

    const [descriptionStatus1, setDescriptionStatus1] = useState(true);
    const [description1, setDescription1] = useState('Graduated Suma cum Laude');
    


    const [descriptionStatus12, setDescriptionStatus12] = useState(true);
    const [description12, setDescription12] = useState('Graduated Suma cum Laude');
    
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
            <div className="templatetwocontrol" style={{marginTop: '-1em'}}>
            {jobDurationStatus?
            <>
            <p className="templatetwoexperienceYear">{jobDuration}</p>
            <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                setJobDurationStatus(!jobDurationStatus);
            }} /></>
            :
            <>
            <input value={jobDuration} onChange={e=>setJobDuration(e.target.value)}/>
            <img className="templatetwoimgLi templatetwoicon" src={save} alt="edit" aria-hidden="true" onClick={e=> {
                setJobDurationStatus(!jobDurationStatus);
            }} />
            </>
            }
                
            </div>


            <ul>
            <div className="templatetwocontrol">
            {descriptionStatus1?<li>{description1}</li>:<textarea value={description1} onChange={e=>setDescription1(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus1(!descriptionStatus1);
                }} />
            </div>


            </ul>



            <div className="templatetwocontrol">
                {jobTitleStatus2?<p className="templatetwoexperienceTitle">{jobTitle2}</p>:<input value={jobTitle2} onChange={e=>setJobTitle2(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setJobTitleStatus2(!jobTitleStatus2);
                }} />
            </div>
            <div className="templatetwocontrol" style={{marginTop: '-1em'}}>
            {jobDurationStatus2?<p className="templatetwoexperienceYear">{jobDuration2}</p>:<input value={jobDuration2} onChange={e=>setJobDuration2(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setJobDurationStatus2(!jobDurationStatus2);
                }} />
            </div>

            <ul>
            <div className="templatetwocontrol">
            {descriptionStatus12?<li>{description12}</li>:<textarea value={description12} onChange={e=>setDescription12(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus12(!descriptionStatus12);
                }} />
            </div>

           
            </ul>
            
        </div>
    )
}
export default Experience;