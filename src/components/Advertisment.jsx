import React from "react"
import addTop from "../img/add_top.png"
import addads from "../img/add_ads.png"
import upads from "../img/up_ads.png"
import delads from "../img/del_ads.png"
import "./addStyle.css"
import {Link} from "react-router-dom"
import Navibar from "./Navibar"


function Advertisments() {
    return (
        
        <div>
            <Navibar></Navibar>
             <img src={addTop} alt="homeimage" className="homeImage"/>
             <table>
                <td>
                    <Link as={Link} to={"/addAds"}>
                        <img  src={addads} alt="" className="adimages"/>
                    </Link>
                </td>
                
                <td>
                    <Link as={Link} to={"/updateAds"}>
                        <img  src={upads} alt="" className="adimages"/>
                    </Link>
                </td>

                <td>
                    <Link as={Link} to={"/deleteAds"}>
                        <img  src={delads} alt="" className="adimages"/>
                    </Link>
                </td>
             </table>

             <footer>
                <p>POODLE For The Dogs</p>
            </footer>
            
        </div>
       
       
    )
}

export default Advertisments