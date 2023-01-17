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
    
    const [street, setStreet] = useState('Lita Co, Ltd 999 Conway Blvd.');
    const [phoneNumber, setPhoneNumber] = useState('(233) 1223 000');
    const [state, setState] = useState('California 90999, United States');
    const [email, setEmail] = useState('example@email.com');

   

    return (

        
        <div className="templatethreeaddress">
            <div className="templatethreeintroduction-title">
                <h1>Details</h1>
            </div>
            {editStatus? 
            <>
            <img src={save} className="templatethreemenu" alt="addresssave" onClick={() => {
                setEditStatus(false);
            }} />
            <div className="templatethreeaddressEditContainer">
            <div>
                    <img src={homeIcon} alt="homeIcon" />
                    <input value={street} onChange={event=>setStreet(event.target.value)}/>
                </div>
                <div>
                    <img src={locationIcon} alt="locationIcon" />
                    <input value={state} onChange={event=>setState(event.target.value)}/>
                </div>
              <div>
                    <img src={phoneIcon} alt="phoneIcon" />
                    <input value={phoneNumber} onChange={event=>setPhoneNumber(event.target.value)}/>
                </div>
                <div>
                    <img src={emailImage} alt="emailImage" />
                    <input value={email} onChange={event=>setEmail(event.target.value)}/>
                </div>
                
            </div>
            </>
            :
            <>
            <img className="templatethreemenu" onClick={()=>{
            setEditStatus(true);
            setPhoneNumber(document.getElementById("phoneId").innerHTML);
            setEmail(document.getElementById("emailId").innerHTML);
            setStreet(document.getElementById("streetId").innerHTML);
            setState(document.getElementById("stateId").innerHTML);
        }}src={edit} alt="edit" />
            <div className="templatethreeaddressContainer">
                <div>
                    <img src={homeIcon} alt="homeIcon" />
                    <h4 id="streetId">{street}</h4>
                </div>
                <div>
                    <img src={locationIcon} alt="locationIcon" />
                    <h4 id="stateId">{state}</h4>
                </div>
                <div>
                    <img src={phoneIcon} alt="phoneIcon" />
                    <h4 id="phoneId">{phoneNumber}</h4>
                </div>
                <div>
                    <img src={emailImage} alt="emailImage" />
                    <h4 id="emailId">{email}</h4>
                </div>
                
            </div>
            </>
            }
        </div>
    )
}

export default Address;
