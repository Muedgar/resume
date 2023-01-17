import React, {useState} from "react";

import "./hobbies.css";

import edit from "./assets/edit.svg";
import save from "./assets/save.svg";
import briefcase from "./assets/briefcase.svg";


function Hobbies () {
    const [editStatus,setEditStatus] = useState(true);

    const [hobbies, setHobbies] = useState([ {description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'}]);
/*

       
    */
    // add experience
    const [description, setDescription] = useState('');
    return(
        <div className="hobbiesContainer">
            <div className="hobbiesTitle">
                <div className="experienceLogo">
                    <img src={briefcase} alt="briefcase" />
                </div>
                <h1>
                    HOBBIES AND INTERESTS
                </h1>
            </div>
            {
                !editStatus?
                <>
                <img className="menu" onClick={()=>{
                setEditStatus(true);
                setDescription(document.getElementById("hobbyDescriptionId0").innerHTML);
            }}src={edit} alt="edithobbytwo" />
                <img src={save} className="menu" alt="hobbiessave" onClick={() => {
                    
                        if(!description || (description.length<252 || description.length>262)) {
                            document.getElementById("textAreaId").style.border = "2px solid red";                            
                            
                            return;
                        }
                        document.getElementById("textAreaId").style.border = "2px solid green";
                        let obj = {description};
                        setHobbies([obj]);
                        console.log("setting hobbies", hobbies);
                            setDescription('');
                setEditStatus(true);
            }} />
                <div className="addHobby">
                    <textarea id="textAreaId" type="text" value={description} onChange={e=>setDescription(e.target.value)} placeholder="describe hobby"></textarea>
                    <input type="button" value={`${252-description.length} characters left`} />
                </div>
                </>
                :
                <>
                {
                    hobbies.length>0 ?
                    <>
                    <img className="menu" onClick={()=>{
                setEditStatus(false)
                setDescription(document.getElementById("hobbyDescriptionId0").innerHTML);
            }}src={edit} alt="edit" />
                    {
                        hobbies.map((hobby,i)=> (
                            <div className="hobbies" id={`${i}`} key={i}>
                                
                                            <div className="experienceDescription">
                                                <p id="hobbyDescriptionId0">{hobby.description}</p>
                                            </div>
                                        </div>
                                            ))
                    }
                    </>
                    :
                    <>
                    
                        <img className="menu" onClick={()=>{
                            setEditStatus(false)
                        }}src={edit} alt="edit" />
                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>Add one hobby</div>
                    </>
                
            }
                </>
            }
            
            
        </div>
    );
}

export default Hobbies;