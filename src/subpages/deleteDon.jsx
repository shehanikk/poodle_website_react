import React, { useEffect, useState } from "react"
import "./addAdsStyle.css"
import Navibar from "../components/Navibar";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import DonDelCard from "../cardPages/donDelCard";
import { toast } from "react-toastify";

const DeleteDon = () => {
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

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure wanted to delete this donation ?")) {
          try {
            //setLoading(true);
            await deleteDoc(doc(db, "donations", id));
            //setLoading(false);
            toast.success("Donation deleted successfully");
          } catch (err) {
            console.log(err);
          }
        }
    }

    console.log("donations", donations);

    return (
        
        <diV>
            <Navibar></Navibar>
            <h3>
                DELETE DONATION 
            </h3>

            <DonDelCard donations={donations} handleDelete={handleDelete}/>

           
        </diV>
    )
}

export default DeleteDon