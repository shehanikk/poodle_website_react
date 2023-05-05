import React, {useState, useEffect} from "react"
import "./addAdsStyle.css"
import Navibar from "../components/Navibar";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import AdsCard from "../cardPages/adsCard";

const UpdateAds = () => {
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

    console.log("addvertisments", addvertisments);

    return (
        <diV>
            <Navibar></Navibar>
             <h3>
                CURRENT ADVERTISMENTS 
            </h3>
           
           <AdsCard addvertisments={addvertisments}/>

        </diV>
    )
}

export default UpdateAds