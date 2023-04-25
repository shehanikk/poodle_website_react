import React from "react"
import profileTop from "../img/profile_top.png"
import avatarImg from "../img/img_avatar.png"
import "./profileStyle.css"
import Button from 'react-bootstrap/Button';


function Profile() {
    return (
        <div>
            <img src={profileTop} alt="top" className="profileImage"/>
            
             <div class="centered"> 
                <h3>ADMIN PROFILE</h3>
                 <br/>
                    <img src={avatarImg} alt="Avatar" class="avatarPro"/>
                 <br/>
                <table>
                  <tr>
                    <td>Name :</td>
                    <td>Shehani</td>
                  </tr>
                  <tr>
                    <td>Email :</td>
                    <td>Parkshen@gmail.com</td>
                  </tr>
                </table>
                <br/>
                <div className="d-grid gap-2">
                    <Button variant="success" size="sm">
                         Logout
                    </Button>
                </div> 
            </div> 
            <footer>
                <p>POODLE For The Dogs</p>
            </footer>
        </div>
       
    )
}

export default Profile