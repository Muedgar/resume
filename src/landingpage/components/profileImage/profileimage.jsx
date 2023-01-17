import React, {useState} from "react";

import "./profileimage.css";

import profile from "./assets/profile.svg";

const ProfileImage = () => {
    const [imageValue, setImageValue] = useState(profile);
    
   

    function handleClick() {
        let fileInput = document.createElement('input');
        fileInput.setAttribute('id', 'fileId');
        fileInput.setAttribute('type', 'file');
        fileInput.setAttribute('accept', 'image/png, image/jpeg');
        fileInput.addEventListener('change',handleChange);
        document.getElementById("profileImage").appendChild(fileInput);
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
            document.getElementById("profileImage").removeChild(document.getElementById('fileId'));
    }
    return(
        <div id="profileImage" className="profileContainer">
            <img src={imageValue} alt="Profile"/>
            <button onClick={handleClick}>Change profile image</button>
        </div>
    )
}

export default ProfileImage;