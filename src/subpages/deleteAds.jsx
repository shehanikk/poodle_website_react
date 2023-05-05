import React, { useEffect, useState } from "react"
import "./addAdsStyle.css"
import Navibar from "../components/Navibar";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";
import AdsDelCard from "../cardPages/adsDelCard";

const DeleteAds = () => {
    const [addvertisments, setAddvertisments] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "addvertisments"),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                });

                setAddvertisments(list);
            }, (error) => {
                console.log(error);
            }
        );
        return() => {
            unsub();
        };
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure wanted to delete this addvertisment ?")) {
          try {
            //setLoading(true);
            await deleteDoc(doc(db, "addvertisments", id));
            //setLoading(false);
            toast.success("addvertisments deleted successfully");
          } catch (err) {
            console.log(err);
          }
        }
    }

    console.log("addvertisments", addvertisments);

    return (
        <diV>
            <Navibar></Navibar>
             <h3>
                DELETE ADVERTISMENTS 
            </h3>
           
           <AdsDelCard addvertisments={addvertisments} handleDelete={handleDelete}/>

        </diV>
    )
}

export default DeleteAds