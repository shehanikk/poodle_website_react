import React, { useContext } from "react"
import profileTop from "../img/profile_top.png"
//import avatarImg from "../img/img_avatar.png"
import "./profileStyle.css"
import Button from 'react-bootstrap/Button';
import Navibar from "./Navibar";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';


function Profile() {
  const {currentUser} = useContext(AuthContext)
  const navigate = useNavigate();
  if (!currentUser) {
    return <div>Loading...</div>; // or render a loading state
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.log('Logout error:', error);
      });
  };

    return (
        <div>
          <Navibar></Navibar>
            <img src={profileTop} alt="top" className="profileImage"/>
            
             <div className="centered"> 
                <h3>ADMIN PROFILE</h3>
                 <br/>
                    <img src={currentUser.photoURL} alt="Avatar" className="avatarPro"/>
                 <br/>
                <table>
                  <tr>
                    <td>Name :</td>
                    <td>{currentUser.displayName}</td>
                  </tr>
                  <tr>
                    <td>Email :</td>
                    <td>{currentUser.email}</td>
                  </tr>
                </table>
                <br/>
                <div className="d-grid gap-2">
                    <Button variant="success" size="sm" onClick={handleLogout}>
                         Logout
                    </Button>
                </div> 
            </div> 
            <footer>
                <p>POODLE FOR PET LOVERS</p>
            </footer>
        </div>
       
    )
}

export default Profile