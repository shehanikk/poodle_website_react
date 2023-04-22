import React from "react"
import homeTop from "../img/home_top2.png"
import vaccineImg from "../img/vaccination_img.png"
import donateImg from "../img/donation_img.png"
import addImg from "../img/add_img.png"
import "./homeStyle.css"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div>
            <img src={homeTop} alt="homeimage" className="homeImage"/>

            <table >
                <tr>
                    <td><img  src={addImg} alt=""/></td>
                    <td>
                    <h2>E-VACCINATION CARD</h2>
                    <p class="textone">The dog is a domesticated descendant of the wolf.
                        Also called the domestic dog, it is derived from the extinct Pleistocene wolf, 
                        and the modern wolf is the dog's nearest living relative.
                    </p>
                    <div class="container">
                        <ul class="myUL">
                            <li>Inserting relavant details</li>
                            <li>Update each vaccination cards</li>
                        </ul>
                        <br/>
                        <Link to="evaccination"class="button button1">E-VACCINATION</Link>
                    </div>
                    </td>
                    
                </tr>

                <tr>
                    <td>
                    <h2>STRAY DOG DONATION</h2>
                        <p class="texttwo">The dog is a domesticated descendant of the wolf. 
                            Also called the domestic dog, it is derived from the extinct Pleistocene wolf, 
                            and the modern wolf is the dog's nearest living relative.
                        </p>
                        <div class="container">
                            <ul class="myUL">
                                <li>Add donation advertisments</li>
                                <li>Edit donation advertisments</li>
                                <li>Delete donation advertisments</li>
                            </ul>
                            <br/>
                            <Link to="donation"class="button button1">DONATION</Link>
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
                    <p class="textone">The dog is a domesticated descendant of the wolf. 
                        Also called the domestic dog, it is derived from the extinct Pleistocene wolf, 
                        and the modern wolf is the dog's nearest living relative. 
                    </p>
                    <div class="container">
                        <ul class="myUL">
                         <li>Add advertisments</li>
                         <li>Edit advertisments</li>
                         <li>Delete advertisments</li>
                         </ul>
                         <br/>
                         <Link to="advertisments" class="button button1">ADVERTISEMENTS</Link>
                    </div>
                    </td>
                </tr>
            </table>

            

            <footer>
                <p>POODLE For The Dogs</p>
            </footer>
            

        </div>
       

       
    )
}

export default Home