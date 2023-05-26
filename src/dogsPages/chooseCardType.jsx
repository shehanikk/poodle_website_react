import React from "react"
import showVacDetails from "../img/vac_card1.png"
import addVacDetails from "../img/vac_card2.png"
import "../components/addStyle.css"
import { useLocation} from "react-router-dom"
import Navibar from "../components/Navibar";
import { useNavigate } from "react-router-dom";



function ChooseCardType() {
    const location = useLocation();
    const {email, name} = location.state;
    console.log(email);
    console.log(name);
    const navigate = useNavigate();

    return (
        
        <div>
            <Navibar></Navibar>
             <table>
                <td>
                    <button onClick={() => {navigate('/selectedDog', {replace: true,state: {email: email, name: name }});}} style={{backgroundColor:"white", borderStyle:"none"}}>
                        <img  src={addVacDetails} alt="" className="adimages"/>
                    </button>
                </td>

                <td>
                <button onClick={() => {navigate('/showVacCard', {replace: true,state: {email: email, name: name }});}} style={{backgroundColor:"white", borderStyle:"none"}}>
                        <img  src={showVacDetails} alt="" className="adimages"/>
                    </button>
                </td>

              
             </table>

             <footer>
                <p>POODLE FOR PET LOVERS</p>
            </footer>
            
        </div>
       
       
    )
}

export default ChooseCardType