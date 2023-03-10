import React, {useState} from "react";
import "./introduction.css";

// import assets
import person from "./assets/profile.svg";
import edit from "./assets/edit.svg";
import save from "./assets/save.svg";

const Introduction = () => {
    const [editStatus, setEditStatus] = useState(true);
    const [introduction, setIntroduction] = useState("The 2022 FIFA World Cup is an international association football tournament contested by the men's national teams of FIFA's member associations. The 22nd FIFA World Cup, it is taking place in Qatar from 20 November to 18 December 2022.");
    const [editIntro, setEditIntro] = useState('');
    const [remaining, setRemaining] = useState('');
    
   

    return (

        
        <div className="fourTemplateintroduction">
            
            <div className="fourTemplateintroduction-title">
                <img className="fourTemplatequoteIcon" src={person} alt="edit intro" />
                <h1>Profile</h1>
            </div>
            {editStatus? 
            
            <div>
                <img className="fourTemplatemenu" onClick={()=>{
                setEditStatus(false)
                setEditIntro(document.getElementById("introductionId").innerHTML);
            }} src={edit} alt="edit" />
                <p id="introductionId">
                    {introduction}
                </p>
            </div>
            :
            <div>
            <img className="fourTemplatemenu" onClick={()=>{
                setEditStatus(true);
            }} src={edit} alt="edit" />
            <img src={save}  onClick={() => {
                    
                    if(!editIntro || (editIntro.length<252 || editIntro.length>262)) {
                        document.getElementById("introTextArea").style.border = "2px solid red";                            
                        
                        return;
                    }
                    document.getElementById("introTextArea").style.border = "2px solid green";
                    setIntroduction(editIntro);
                    setEditIntro('');
                    setRemaining(`252 characters left`);
            setEditStatus(true);
        }} className="fourTemplatemenu" alt="introsave" />
                <textarea placeholder="Write about yourself" id="introTextArea" defaultValue={editIntro} className="fourTemplate" onChange={e => {
                    setEditIntro(e.target.value);
                    setRemaining(`${252-editIntro.length} characters left`);
                }}></textarea>
                <p style={{marginTop: '-10px', marginLeft: '20px'}}>{remaining}</p>
            </div>
            }
        </div>
    )
}

export default Introduction;