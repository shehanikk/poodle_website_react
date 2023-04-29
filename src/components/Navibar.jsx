import logo from "../img/poodle_logo2.png"
import "./NavibarStyle.css";
import { Link} from 'react-router-dom'
import { Component } from "react";



class Navibar extends Component {
  
  state = { clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render(){
    return(
      
        <>
        
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
        
        </>
    );
}
}

export default Navibar;
