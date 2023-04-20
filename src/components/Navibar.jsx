import logo from "../img/poodle_logo2.png"
import "./NavibarStyle.css";
import { BrowserRouter as Router, Route, Routes,Link} from 'react-router-dom'
import Home from './home';
import { Component } from "react";
import Evaccination from "./Evaccination";
import Advertisments from "./Advertisment";
import Donation from "./Donation";
import Profile from "./profile";

class Navibar extends Component {
  state = { clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return(
        <>
        <Router>
        <nav>
            <Link as={Link} to={"/"}>
            <img src={logo} alt="Poodle" 
             width="60"
             height="60"
             />
            </Link>
            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <li><Link as={Link} to={"/"}>Home</Link></li>
                    <li><Link as={Link} to={"/evaccination"}>E-Vaccination</Link></li>
                    <li><Link as={Link} to={"/advertisments"}>Dog Advertisments</Link></li>
                    <li><Link as={Link} to={"/donation"}>Donations</Link></li>
                    <li><Link as={Link} to={"/profile"}>Profile</Link></li>
                </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
              <i id="bar" className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i> 
            </div>
        </nav>
        <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/evaccination" element={<Evaccination/>}/>
           <Route path="/advertisments" element={<Advertisments/>}/>
           <Route path="/donation" element={<Donation/>}/>
           <Route path="/profile" element={<Profile/>}/>
        </Routes>
        </Router>
        </>
    );
}
}

export default Navibar;
