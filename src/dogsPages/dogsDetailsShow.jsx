//import React, { useEffect, useState } from "react"
import vaccineTop from "../img/vac_top.png"
import Navibar from "../components/Navibar";
import { useLocation } from 'react-router-dom';
import React, {useState, useEffect} from "react"
import { collection, onSnapshot, query, where} from 'firebase/firestore';
import { db } from "../firebase";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";


const DogsDetailShow = () => {
    const [dog, setDog] = useState([]);
    const location = useLocation();
    const collectionRef = collection(db, `userDog/${location.state}/dog`);
    const navigate = useNavigate();
    console.log(location.state)

    useEffect(() => {
        const q = query(
          collectionRef,
    
          where('email', '==', location.state) 
    
        );
    
        const unsub = onSnapshot(q, (querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setDog(items);
        });
        return () => {
          unsub();
        };
    
      }, [collectionRef,location]);


    return (
        <div>
            <Navibar></Navibar>
            <img src={vaccineTop} alt="homeimage" className="homeImage"/>

            <div style={{display: "flex",flexWrap:"wrap",gap:10}}>
            {dog?.map((item) => (
                <div key={item.id}>
                 <ul className="cont">
            <li>
            <Card style={{ width: '18rem',}}>
                <Card.Img variant="top" src={item.imageUrl} alt={item.dogName} />
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Name : {item.dogName}</ListGroup.Item>
                <ListGroup.Item>Breed : {item.dogBreed}</ListGroup.Item>
                <ListGroup.Item>Gender : {item.dogSex}</ListGroup.Item>
                <ListGroup.Item>Birthday : {item.dogBirthDay}</ListGroup.Item>
                <ListGroup.Item>Email : {item.email}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
               
                <Button  onClick={() => {navigate('/chooseCardType', {replace: true,state: {email: item.email, name: item.dogName }});}}  variant="success" name="edit">Select Pet</Button>
                
                </Card.Body>
            </Card>
            </li>
           </ul>
                </div>
            ))}
            </div>
            
            <footer>
                <p>POODLE For The Dogs</p>
            </footer>
           
        </div>

        
    )
}

export default DogsDetailShow

