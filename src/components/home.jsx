import React from "react"
import homeTop from "../img/home_top2.png"
import vaccineImg from "../img/vaccination_img.png"
import donateImg from "../img/donation_img.png"
import addImg from "../img/add_img.png"
import "./homeStyle.css"
import { Link } from "react-router-dom"
import Navibar from "./Navibar"

function Home() {
    
    return (
        
        <div>
            <Navibar></Navibar>
            <img src={homeTop} alt="homeimage" className="homeImage"/>

            <table >
                <tr>
                    <td><img  src={addImg} alt=""/></td>
                    <td>
                    <h2>E-VACCINATION CARD</h2>
                    <p className="textone">
                    E-vaccination for dogs revolutionizes the way we protect our beloved four-legged companions. 
                    With a seamless blend of technology and veterinary care, 
                    it ensures convenience and accuracy in maintaining their health and well-being.
                    </p>
                    <div className="container">
                        <ul className="myUL">
                            <li>Inserting relavant details</li>
                            <li>Update each vaccination cards</li>
                        </ul>
                        <br/>
                        <Link to="evaccination"className="button button1">E-VACCINATION</Link>
                    </div>
                    </td>
                    
                </tr>

                <tr>
                    <td>
                    <h2>STRAY DOG DONATION</h2>
                        <p className="texttwo">
                        The stray dog donation system embodies a compassionate approach towards the well-being of our furry friends. 
                        Seamlessly combining generosity and efficient support, 
                        it paves the way for a brighter future, where every stray dog finds care, comfort, and a loving home
                        </p>
                        <div className="container">
                            <ul className="myUL">
                                <li>Add donation advertisments</li>
                                <li>Edit donation advertisments</li>
                                <li>Delete donation advertisments</li>
                            </ul>
                            <br/>
                            <Link to="donation"className="button button1">DONATION</Link>
                        </div>
                    </td>

                    <td>
                        <img src={vaccineImg} alt=""/>
                    </td>
                </tr>

                <tr>

                    <td>
                        <img src={donateImg} alt=""/>
                    </td>

                    <td>
                    <h2>ADD  ADVERTISEMENTS</h2>
                    <p className="textone">The dog advertisement system is a powerful platform that connects
                     canine enthusiasts with their perfect furry companions. With its user-friendly interface and extensive reach, 
                    it opens doors to endless possibilities, enabling the joyful union of dogs and their forever families.
                    </p>
                    <div className="container">
                        <ul className="myUL">
                         <li>Add advertisments</li>
                         <li>Edit advertisments</li>
                         <li>Delete advertisments</li>
                         </ul>
                         <br/>
                         <Link to="advertisments" className="button button1">ADVERTISEMENTS</Link>
                    </div>
                    </td>
                </tr>
            </table>

            

            <footer>
                <p>POODLE FOR PET LOVERS</p>
            </footer>
            

        </div>
       

       
    )
}

export default Home