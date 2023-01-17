import React, {useState} from "react";

import "./profile.css";

import edit from "./assets/edit.svg";
import save from "./assets/save.svg";
import profile from "./assets/profile.svg";

const Profile = () => {
    const [imageValue, setImageValue] = useState(profile);
    
    const [editStatus, setEditStatus] = useState(false);
    const [userName, setUserName] = useState('Mutangana Edgar');
    const [jobTitle, setJobTitle] = useState('DESIGN FRONT DEVELOPER');
    

    function handleClick() {
        let fileInput = document.createElement('input');
        fileInput.setAttribute('id', 'fileId');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('accept', 'image/png, image/jpeg');
        fileInput.addEventListener('change',handleChange);
        document.getElementById("templatetwoprofileImage").appendChild(fileInput);
        fileInput.click();
    }

    function handleChange() {
        console.log("handling change");
        let input = document.getElementById('fileId');
        input.file = input.files[0];
        console.log("value of file ",input.value);
        var fReader = new FileReader();
        fReader.readAsDataURL(input.files[0]);
        // document.getElementById("fileId").value = input.files[0].name;
        // console.log(input.files[0].name);
        fReader.onloadend = function(event) {
                setImageValue(event.target.result);
            }
            console.log(input.files[0]);
            document.getElementById("templatetwoprofileImage").removeChild(document.getElementById('fileId'));
    }

    function getNames() {
        let firstname = userName.split(" ")[0];
        let restOfName = "";

        for(let i=1;i<=userName.split(" ").length-1;i++) {
            restOfName += userName.split(" ")[i];
        }
        console.log([firstname,restOfName]);
        return [firstname,restOfName];
}

    return(
        <div className="templatetwoProfile">
            <div id="templatetwoprofileImage" className="templatetwoprofileContainer">
                <img src={imageValue} alt="Profile"/>
                <button onClick={handleClick}>Change profile image</button>
            </div>
            <div>
            {editStatus? 
            <>
            <img src={save} className="menu" alt="addresssave" onClick={() => {
                setEditStatus(false);
            }} />
            <div className="templatetwoprofileEditContainer">
                <div>
                    <input className="form-control" value={userName} onChange={event=>setUserName(event.target.value)}/>
                </div>
                <div>
                    <input value={jobTitle} onChange={event=>setJobTitle(event.target.value)}/>
                </div>
            </div>
            </>
            :
            <>
            <img className="menu" onClick={()=>{
            setEditStatus(true);
            setUserName(document.querySelector(".firstName").innerHTML+" "+document.querySelector(".LastName").innerHTML);
            setJobTitle(document.getElementById("jobId").innerHTML);
            }}src={edit} alt="edit" />
            <div className="templatetwoprofileContainerInfo">
                <div>
                    <h4><span className="firstName">{getNames()[0]}</span> <span className="LastName">{getNames()[1]}</span></h4>
                </div>
                <div>
                    <p id="jobId">{jobTitle}</p>
                </div>
            </div>
            </>
            }
            </div>
        </div>
    )
}

export default Profile;