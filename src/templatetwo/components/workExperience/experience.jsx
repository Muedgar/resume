import React, {useState} from "react";

import edit from "./assets/edit.svg";
import save from "./assets/save.svg";

import "./experience.css";

function Experience() {

    const [jobTitleStatus, setJobTitleStatus] = useState(true);
    const [jobTitle, setJobTitle] = useState('Financial Analyst at GEO Group Corp, New York');


    const [jobTitleStatus2, setJobTitleStatus2] = useState(true);
    const [jobTitle2, setJobTitle2] = useState('Financial Analyst at GEO Group Corp, New York');

    const [jobDurationStatus, setJobDurationStatus] = useState(true);
    const [jobDuration, setJobDuration] = useState('October 2021 - September 2022');

    const [jobDurationStatus2, setJobDurationStatus2] = useState(true);
    const [jobDuration2, setJobDuration2] = useState('October 2021 - September 2022');

    /*
        description
    */

    const [descriptionStatus1, setDescriptionStatus1] = useState(true);
    const [description1, setDescription1] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus2, setDescriptionStatus2] = useState(true);
    const [description2, setDescription2] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus3, setDescriptionStatus3] = useState(true);
    const [description3, setDescription3] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus4, setDescriptionStatus4] = useState(true);
    const [description4, setDescription4] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus5, setDescriptionStatus5] = useState(true);
    const [description5, setDescription5] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');



    const [descriptionStatus12, setDescriptionStatus12] = useState(true);
    const [description12, setDescription12] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus22, setDescriptionStatus22] = useState(true);
    const [description22, setDescription22] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus32, setDescriptionStatus32] = useState(true);
    const [description32, setDescription32] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus42, setDescriptionStatus42] = useState(true);
    const [description42, setDescription42] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');
    const [descriptionStatus52, setDescriptionStatus52] = useState(true);
    const [description52, setDescription52] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet ante eu ligula feugiat imperdiet. Maecenas libero enim, gravida quis vehicula et, tincidunt id risus.');

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

            <div className="templatetwocontrol">
            {descriptionStatus2?<li>{description2}</li>:<textarea value={description2} onChange={e=>setDescription2(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus2(!descriptionStatus2);
                }} />
            </div>

            <div className="templatetwocontrol">
            {descriptionStatus3?<li>{description3}</li>:<textarea value={description3} onChange={e=>setDescription3(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus3(!descriptionStatus3);
                }} />
            </div>

            <div className="templatetwocontrol">
            {descriptionStatus4?<li>{description4}</li>:<textarea value={description4} onChange={e=>setDescription4(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus4(!descriptionStatus4);
                }} />
            </div>

            <div className="templatetwocontrol">
            {descriptionStatus5?<li>{description5}</li>:<textarea value={description5} onChange={e=>setDescription5(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus5(!descriptionStatus5);
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

            <div className="templatetwocontrol">
            {descriptionStatus22?<li>{description22}</li>:<textarea value={description22} onChange={e=>setDescription22(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus22(!descriptionStatus22);
                }} />
            </div>

            <div className="templatetwocontrol">
            {descriptionStatus32?<li>{description32}</li>:<textarea value={description32} onChange={e=>setDescription32(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus32(!descriptionStatus32);
                }} />
            </div>

            <div className="templatetwocontrol">
            {descriptionStatus42?<li>{description42}</li>:<textarea value={description42} onChange={e=>setDescription42(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus42(!descriptionStatus42);
                }} />
            </div>

            <div className="templatetwocontrol">
            {descriptionStatus52?<li>{description52}</li>:<textarea value={description52} onChange={e=>setDescription52(e.target.value)}/>}
                <img className="templatetwoimgLi templatetwoicon" src={edit} alt="edit" aria-hidden="true" onClick={e=> {
                    setDescriptionStatus52(!descriptionStatus52);
                }} />
            </div>

            </ul>
            
        </div>
    )
}
export default Experience;