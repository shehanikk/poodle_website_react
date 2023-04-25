import React from "react"
import donationTop from "../img/don_top.png"
import adddon from "../img/add_don.png"
import updon from "../img/up_don.png"
import deldon from "../img/del_don.png"
import "./addStyle.css"
import { Link } from "react-router-dom"

function Donation() {
    return (
        <div>
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
                <p>POODLE For The Dogs</p>
            </footer>
        </div>
    )
}

export default Donation