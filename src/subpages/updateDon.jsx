import React, {useState, useEffect} from "react"
import "./addAdsStyle.css"
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
//import Button from 'react-bootstrap/Button';
//import { Link } from "react-router-dom";
import Navibar from "../components/Navibar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import DonCard from "../cardPages/donCard";
//import DonCard from "../cardPages/donCard";

const UpdateDon = ( ) => {
    //const [loading, setLoading] = useState(true);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "donations"),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                });

                setDonations(list);
            }, (error) => {
                console.log(error);
            }
        );
        return() => {
            unsub();
        };
    }, []);

    console.log("donations", donations);

    return (
        <diV>
            <Navibar></Navibar>
             <h3>
                CURRENT DONATIONS 
            </h3>
            
            <DonCard donations={donations}/>
           
        </diV>
    )
}

export default UpdateDon