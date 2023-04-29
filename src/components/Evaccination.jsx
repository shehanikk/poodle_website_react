import React from "react"
import vaccineTop from "../img/vac_top.png"
import Navibar from "./Navibar"

function Evaccination() {
    return (
        <div>
            <Navibar></Navibar>
            <img src={vaccineTop} alt="homeimage" className="homeImage"/>
        </div>
        
    )
}

export default Evaccination