import React, {useState} from "react";
import "./address.css";

// import assets
import edit from "./assets/edit.svg";
import save from "./assets/save.svg";
import emailImage from "./assets/email.svg";
import homeIcon from "./assets/home.svg";
import locationIcon from "./assets/location.svg";
import phoneIcon from "./assets/phone.svg";


const Address = () => {
    const [editStatus, setEditStatus] = useState(false);
    const [userName, setUserName] = useState('JUSTIN NGUYEN');
    const [jobTitle, setJobTitle] = useState('DESIGN & FRONT DEVELOPER');
    const [phoneNumber, setPhoneNumber] = useState('84 - 969877097');
    const [email, setEmail] = useState('toannd.figmateam@gmail.com');
    const [street, setStreet] = useState('Lita Co, Ltd 999 Conway Blvd.');
    const [state, setState] = useState('California 90999, United States');

    function getNames() {
            let firstname = userName.split(" ")[0];
            let restOfName = "";

            for(let i=1;i<=userName.split(" ").length-1;i++) {
                restOfName += userName.split(" ")[i];
            }
            console.log([firstname,restOfName]);
            return [firstname,restOfName];
    }

    return (

        
        <div className="address">
            {editStatus? 
            <>
            <img src={save} className="menu" alt="addresssave" onClick={() => {
                setEditStatus(false);
            }} />
            <div className="addressEditContainer">
                <div>
                    <input className="form-control" value={userName} onChange={event=>setUserName(event.target.value)}/>
                </div>
                <div>
                    <input value={jobTitle} onChange={event=>setJobTitle(event.target.value)}/>
                </div>
                <div>
                    <img src={phoneIcon} alt="phoneIcon" />
                    <input value={phoneNumber} onChange={event=>setPhoneNumber(event.target.value)}/>
                </div>
                <div>
                    <img src={emailImage} alt="emailImage" />
                    <input value={email} onChange={event=>setEmail(event.target.value)}/>
                </div>
                <div>
                    <img src={homeIcon} alt="homeIcon" />
                    <input value={street} onChange={event=>setStreet(event.target.value)}/>
                </div>
                <div>
                    <img src={locationIcon} alt="locationIcon" />
                    <input value={state} onChange={event=>setState(event.target.value)}/>
                </div>
            </div>
            </>
            :
            <>
            <img className="menu" onClick={()=>{
            setEditStatus(true);
            setUserName(document.querySelector(".firstName").innerHTML+" "+document.querySelector(".LastName").innerHTML);
            setJobTitle(document.getElementById("jobId").innerHTML);
            setPhoneNumber(document.getElementById("phoneId").innerHTML);
            setEmail(document.getElementById("emailId").innerHTML);
            setStreet(document.getElementById("streetId").innerHTML);
            setState(document.getElementById("stateId").innerHTML);
        }}src={edit} alt="edit" />
            <div className="addressContainer">
                <div>
                    <h4><span className="firstName">{getNames()[0]}</span> <span className="LastName">{getNames()[1]}</span></h4>
                </div>
                <div>
                    <h4 id="jobId">{jobTitle}</h4>
                </div>
                <div>
                    <img src={phoneIcon} alt="phoneIcon" />
                    <h4 id="phoneId">{phoneNumber}</h4>
                </div>
                <div>
                    <img src={emailImage} alt="emailImage" />
                    <h4 id="emailId">{email}</h4>
                </div>
                <div>
                    <img src={homeIcon} alt="homeIcon" />
                    <h4 id="streetId">{street}</h4>
                </div>
                <div>
                    <img src={locationIcon} alt="locationIcon" />
                    <h4 id="stateId">{state}</h4>
                </div>
            </div>
            </>
            }
        </div>
    )
}

export default Address;