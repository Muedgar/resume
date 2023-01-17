/*
function handleClick() {
        var prtContent = document.getElementById("cvId");
        var WinPrint = window.open('', '', 'left=0,top=0,width=1000,height=1600,toolbar=0,scrollbars=0,status=0');
        
        var style1 = document.createElement('style');
        var style2 = document.createElement('style');
        var style3 = document.createElement('style');
        var style4 = document.createElement('style');
        var style5 = document.createElement('style');
        var style6 = document.createElement('style');
        
        style1.innerHTML = `
        .cv {
            width: 1000px;
            height: 1500px;
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.393);
            margin: 50px 170px;
            padding: 0;
            overflow: hidden;
            display: flex;
            flex-direction: row;
        }
        
        .cv .rightPart {
            width: 65%;
            height: 100%;
        }
        
        .cv .rightPart .profileandaddress {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            padding-left: 20px;
            padding-top: 50px; 
        }
        
        .cv .leftPart {
            width: 35%;
            height: 100%;
            background-color: rgb(113,81,169);
            padding-top: 50px;
            padding-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        
        .downloadContainer {
            width: 100%;
            height: 100px;
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        
        .downloadContainer button {
            width: 250px;
            height: 56px;
            cursor: pointer;
            border: none;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1.1em;
            background-color: rgb(113,81,169);
            color: white;
            transition: all .3s ease-in-out;
        }
        
        .downloadContainer button:hover {
            box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.504);
        }
        
        .downloadContainer button:active {
            box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.504);
            transform: translateY(-4px);
        }
        `;
        style2.innerHTML = `.profileContainer {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
        }
        
        
        .profileContainer img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
        
        .profileContainer input {
            display: none;
        }
        
        .profileContainer button {
            width: 100%;
            height: 50px;
            padding: 5px 50px 0 50px;
            position: absolute;
            bottom: -50px;
            border: none;
            left: 0;
            cursor: pointer;
            border-bottom-left-radius: 30px;
            border-bottom-left-radius: 30px;
            transition: all .3s ease-in-out;
            background-color: rgba(255, 255, 255, .3);
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1em;
            font-weight: bolder;
        }
        
        .profileContainer:hover button {
            bottom: 0px;
        }
        `;
        style3.innerHTML = `.address {
            width: -moz-fit-content;
            width: fit-content;
            height: 250px;
            overflow: hidden;
            position: relative;
            padding: 10px;
            transition: all .3s ease-in;
        }
        .address .menu {
            position: absolute;
            top: 0;
            right: -20px;
            transition: all .3s ease-in;
        }
        .address:hover .menu{
            right: 0;
        }
        .address img {
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
        .addressContainer{ 
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            transition: all .3s ease-in;
        }
        
        .addressEditContainer {
            width: 100%;
            height: 265px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            transition: all .3s ease-in;
        }
        
        .addressEditContainer div {
            width: 100%;
            height: -moz-fit-content;
            height: fit-content;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            overflow: hidden;
            margin: 10px;
        }
        .addressEditContainer div input {
            width: 200px;
            padding: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1em;
            font-weight: 400;
            color: #333;
            margin-left: 10px;
        }
        
        .addressEditContainer div input:focus,
        .addressEditContainer div input:active {
            outline: none;
        }
        
        .addressContainer div {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            overflow: hidden;
        }
        .addressContainer div img {
            margin-right: 10px;
        }
        
        .addressContainer div h4 {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1em;
            font-weight: 400;
            color: #333;
            margin-top: -1px;
        }
        
        .addressContainer div h4 .firstName {
            font-size: 2em;
            font-weight: bolder;
            margin-top: -5px;
            color: rgb(114,81,169);
        }
        
        .addressContainer div h4 .LastName {
            font-size: 2em;
            font-weight: 200;
            margin-top: -5px;
        }
      `;
        style4.innerHTML = `.introduction {
            width: 250px;
            height: 250px;
            overflow: hidden;
            position: relative;
            padding: 10px;
            transition: all .3s ease-in;
            border-radius: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
        }
        .introduction .quoteIcon {
            width: 50px;
            height: 50px;
            position: absolute;
            top: 10px;
            left: 10px;
        }
        .introduction .menu {
            position: absolute;
            top: 0;
            right: -20px;
            transition: all .3s ease-in;
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
        .introduction:hover .menu{
            right: 0;
        }
        .introduction p {
            width: 100%;
            height: -moz-fit-content;
            height: fit-content;
            padding: 10px;
            word-wrap: break-word;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1.1em;
            font-weight: 400;
            margin-top: 50px;
            text-align: left;
            line-height: 1.3em;
            color: white;
        }
        
        .introduction textarea {
            width: 300px;
            height: 200px;
            margin-top: 50px;
        }
        
        .introduction textarea:focus {
            outline: none;
        }
        `;
        style5.innerHTML = `
        .proskills {
            width: 250px;
            height: -moz-fit-content;
            height: fit-content;
            overflow: hidden;
            position: relative;
            padding: 10px;
            transition: all .3s ease-in;
            margin-top: 30px;
        }
        .proskills .menu {
            position: absolute;
            top: 0;
            right: -20px;
            transition: all .3s ease-in;
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
        .proskills:hover .menu{
            right: 0;
        }
        .proskills .skillsTitle {
            text-align: left;
            color: white;
        }
        
        .skillsContainer {
            width: 90%;
            height: -moz-fit-content;
            height: fit-content;
            border-left: 1px solid white;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        
        .addSkill {
            width: 100%;
            height: -moz-fit-content;
            height: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        
        .addSkill input {
            width: 80%;
            height: 30px;
            box-shadow: 0 10px 10px 0 #3330;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin: 10px;
        }
        
        .addSkill button {
            width: 50%;
            height: 50px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin: 10px;
            box-shadow: 0 10px 10px 0 #333;
            transition: all .3s ease-in;
        }
        
        .addSkill button:focus,
        .addSkill button:active {
            outline: none;
            transform: translateZ(3px);
            box-shadow: 0 5px 5px 0 #333;
        }
        
        
        .skillContainer {
            height: 50px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
        }
        
        .skillContainer h4 {
            margin: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1.1em;
            font-weight: 400;
            color: white;
            text-align: left;
            text-transform: uppercase;
        }
        
        .skillContainer .skillLevelContainer {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 10px;
            background-color: rgba(170, 170, 170, 0.512);
            z-index: 10;
            cursor: pointer;
        }
        
        .skillContainer .skillLevelContainer .skillLevel {
            height: 100%;
            width: 10px;
            background-color: rgba(225, 225, 225, 0.512);
            transition: all .3s ease-in-out;
            cursor: pointer;
        }`;
        style6.innerHTML = `.personalskills {
            width: 250px;
            height: -moz-fit-content;
            height: fit-content;
            overflow: hidden;
            position: relative;
            padding: 10px;
            transition: all .3s ease-in;
            margin-top: 30px
        }
        .personalskills .menu {
            position: absolute;
            top: 0;
            right: -20px;
            transition: all .3s ease-in;
            width: 15px;
            height: 15px;
            cursor: pointer;
        }
        .personalskills:hover .menu{
            right: 0;
        }
        .personalskills .skillsTitle {
            text-align: left;
            color: white;
        }
        
        .personalskillsContainer {
            width: 90%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        
        .personaladdSkill {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
        
        .personaladdSkill input {
            width: 80%;
            height: 30px;
            box-shadow: 0 10px 10px 0 #3330;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin: 10px;
        }
        
        .personaladdSkill button {
            width: 50%;
            height: 50px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            margin: 10px;
            box-shadow: 0 10px 10px 0 #333;
            transition: all .3s ease-in;
        }
        
        .personaladdSkill button:focus,
        .personaladdSkill button:active {
            outline: none;
            transform: translateZ(3px);
            box-shadow: 0 5px 5px 0 #333;
        }
        
        
        .personalskillContainer {
            height: 50px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            position: relative;
        }
        
        .personalskillContainer h4 {
            margin: 10px;
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-size: 1.1em;
            font-weight: 400;
            color: white;
            text-align: left;
            text-transform: capitalize;
        }
        
        .personalskillContainer .personalskillLevelContainer {
            position: absolute;
            bottom: -15px;
            left: 0;
            width: 50%;
            height: 30px;
            z-index: 10;
            cursor: pointer;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }
        
        .personalskillContainer .personalskillLevelContainer .personalskillLevel {
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: rgba(199, 199, 199, 0.536);
            transition: all .3s ease-in-out;
            cursor: pointer;
        }
        
        .personalskillContainer .personalskillLevelContainer .personalskillLevel:hover {
            background-color: white;
        }`;

        WinPrint.document.head.appendChild(style1);
        WinPrint.document.head.appendChild(style2);
        WinPrint.document.head.appendChild(style3);
        WinPrint.document.head.appendChild(style4);
        WinPrint.document.head.appendChild(style5);
        WinPrint.document.head.appendChild(style6);
        WinPrint.document.body.appendChild(prtContent);
        WinPrint.print();
    }
*/