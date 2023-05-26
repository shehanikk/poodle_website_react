import React from "react"
import donationTop from "../img/don_top.png"
import adddon from "../img/add_don.png"
import updon from "../img/up_don.png"
import deldon from "../img/del_don.png"
import "./addStyle.css"
import { Link } from "react-router-dom"
import Navibar from "./Navibar"

function Donation() {
    return (
        <div>
            <Navibar></Navibar>
            <img src={donationTop} alt="homeimage" className="homeImage"/>

            <table>
                <td>
                    <Link as={Link} to={"/addDon"}>
                        <img  src={adddon} alt="" className="adimages"/>
                    </Link>
                </td>
                
                <td>
                    <Link as={Link} to={"/updateDon"}>
                        <img  src={updon} alt="" className="adimages"/>
                    </Link>
                </td>

                <td>
                    <Link as={Link} to={"/deleteDon"}>
                        <img  src={deldon} alt="" className="adimages"/>
                    </Link>
                </td>
             </table>

             <footer>
                <p>POODLE FOR PET LOVERS</p>
            </footer>
        </div>
    )
}

export default Donation