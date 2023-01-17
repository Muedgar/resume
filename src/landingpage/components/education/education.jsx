import React, {useState} from "react";

import "./education.css";

import edit from "./assets/edit.svg";
import briefcase from "./assets/briefcase.svg";
import save from "./assets/save.svg";

function Education () {
    const [editStatus,setEditStatus] = useState(true);

    const [education, setEducation] = useState([ {year: '2015', jobTitle: 'Hr Manager', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}]);
    const [remaining, setRemaining] = useState('');
    // add experience
    const [year, setYear] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [description, setDescription] = useState('');
    return(
        <div className="educationContainer">
           
            <div className="educationTitle">
                <div className="experienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    EDUCATION
                </h1>
            </div>
            {
                !editStatus?
                <>
                 <img className="menu" onClick={()=>{
                setEditStatus(true)
                setYear(document.getElementById("educationYearId0").innerHTML);
                    setJobTitle(document.getElementById("educationTitleId0").innerHTML);
                    setDescription(document.getElementById("educationDescriptionId0").innerHTML);
            }}src={edit} alt="edit" />

<img className="menu" onClick={()=> {
                        if(!description || (description.length<252 || description.length>262)) {
                            document.getElementById("textAreaId2").style.border = "2px solid red";                            
                            return;
                        }
                        document.getElementById("textAreaId2").style.border = "2px solid green";
                        let obj = {
                            year,
                            jobTitle,
                            description
                        };
                        
                        setEducation([obj]);
                            setYear('');
                            setJobTitle('');
                            setDescription('');
                        setEditStatus(true);
                    }} src={save} alt="save" />
                
                <div className="education">
                       <div className="experienceYearTitle">
                                       <input placeholder="Year" type="number" value={year} onChange={e => {
                                        setYear(e.target.value)
                                       }} />
                                       <div></div>
                                       <input placeholder="Degree" type="text" value={jobTitle} onChange={e => {
                                        setJobTitle(e.target.value)
                                       }} />
                                   </div>
                                   <div className="experienceDescription">
                                       <textarea id="textAreaId2" placeholder="Describe your education" value={description} onChange={e=> {
                                        setDescription(e.target.value);
                                        setRemaining(`${252-description.length} characters left`);
                                       }}></textarea>
                                   </div>
                                   <p style={{marginTop: '10px', marginLeft: '150px'}}>{remaining}</p>
                               </div>
                </>
                :
                <>
                {
                    education.length>0 ?
                    <>
                    <img className="menu" onClick={()=>{
                setEditStatus(false)
                setYear(document.getElementById("educationYearId0").innerHTML);
                setJobTitle(document.getElementById("educationTitleId0").innerHTML);
                setDescription(document.getElementById("educationDescriptionId0").innerHTML);
            }}src={edit} alt="edit" />
                    {
                       <div className="education">
                       <div className="experienceYearTitle">
                                       <h3 id="educationYearId0">{education[0].year}</h3>
                                       <div></div>
                                       <h2 id="educationTitleId0">{education[0].jobTitle}</h2>
                                   </div>
                                   <div className="experienceDescription">
                                       <p id="educationDescriptionId0">{education[0].description}</p>
                                   </div>
                               </div>
                    }
                    </>
                    :
                    <>
                    {
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Add at least one experience</div>
                    }</>
                
            }
                </>
            }
            
            
        </div>
    );
}

export default Education;