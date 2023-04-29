import './App.css';
import Login from './pages/login';
// import Register from './pages/register';
//import Navibar from './components/Navibar';
//import Register from './pages/register';
import "./style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Advertisments from './components/Advertisment';
import Evaccination from "./components/Evaccination";
import Donation from "./components/Donation";
import Profile from "./components/profile";
import AddAds from "./subpages/addAds";
import UpdateAds from "./subpages/updateAds";
import DeleteAds from "./subpages/deleteAds";
import AddDon from "./subpages/addDon";
import UpdateDon from "./subpages/updateDon";
import DeleteDon from "./subpages/deleteDon";
import DonationUpdate from "./subpages/donUp";
import AdvertismentUpdate from "./subpages/addUp";
import Home from './components/home';
import Register from './pages/register';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";


function App() {

  const { currentUser } = useContext(AuthContext);
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };



  return (
    <>
    <Routes>
      <Route path="/">
         <Route index element={
          <ProtectedRoute>
          <Home/>
          </ProtectedRoute>
        }></Route> 
           <Route path="/evaccination" element={<Evaccination/>}/>
           <Route path="/advertisments" element={<Advertisments/>}/>
           <Route path="/donation" element={<Donation/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/addAds" element={<AddAds/>}/>
           <Route path="/updateAds" element={<UpdateAds/>}/>
           <Route path="/deleteAds" element={<DeleteAds/>}/>
           <Route path="/addDon" element={<AddDon/>}/>
           <Route path="/updateDon" element={<UpdateDon/>}/>
           <Route path="/deleteDon" element={<DeleteDon/>}/>
           <Route path="/donationUpdate" element={<DonationUpdate/>}/>
           <Route path="/advertismentUpdate" element={<AdvertismentUpdate/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
      </Route>
      
    </Routes>
    </>
   
  );
}

export default App;
