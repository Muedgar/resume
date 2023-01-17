import getData from "./getData";

async function saveData(data) {
  let saveButton = document.getElementById("saveStatus");
  saveButton.innerHTML = "Saving ..."
    const response = await fetch("https://amali-resumebuilder-backend.herokuapp.com/amaliresumebuilder/backend/api/saveResume", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });

      response.json()
      .then(d => {
        console.log(d, "data saved");
        saveButton.innerHTML = "Saved CV.";

        setTimeout(() => {
          saveButton.innerHTML = "Save CV";
        },10000);
        getData();
      }).catch(e=> console.log("something got wrong"))
}

export default saveData;