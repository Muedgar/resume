import React from "react";

import getData from "./getData";

// get data from the database.
function OtherActionButtons() {
    return (
    <div className='downloadContainer' onClick={() => {
        getData()
    }}><button>Load CV</button></div>
    )
}

export default OtherActionButtons;