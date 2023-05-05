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
import { useContext, useState } from "react";
import { AuthContext } from "./context/AuthContext";
import DonCard from './cardPages/donCard';
import 'react-toastify/dist/ReactToastify.css';
import AdsCard from './cardPages/adsCard';


function App() {

  const { currentUser } = useContext(AuthContext);
  const {setActive} = useState("updateDon");
  const {setAdsActive} = useState("updateAds")

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
           <Route path="/addAds" element={<AddAds currentUser={currentUser}/>}/>
           <Route path="/addAds/:id" element={<AddAds currentUser={currentUser} setActive={setAdsActive}/>}/>
           <Route path="/updateAds" element={<UpdateAds/>}/>
           <Route path="/deleteAds" element={<DeleteAds/>}/>
           <Route path="/addDon" element={ <AddDon currentUser={currentUser}/>}/>
           <Route path="/addDon/:id" element={ <AddDon currentUser={currentUser} setActive={setActive}/>}/>
           <Route path="/updateDon" element={<UpdateDon/>}/>
           <Route path="/deleteDon" element={<DeleteDon/>}/>
           <Route path="/donationUpdate" element={<DonationUpdate/>}/>
           <Route path="/advertismentUpdate" element={<AdvertismentUpdate/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
           <Route path="/donCard" element={<DonCard/>}/>
           <Route path="/adsCard" element={<AdsCard/>}/>
      </Route>
      
    </Routes>
    </>
   
  );
}

export default App;
