import Navibar from "../components/Navibar"
import React, {useState, useEffect} from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Image } from "react-bootstrap";
import "./showVacCard.css"

const ShowVacCard = () => {
    const location = useLocation();
    const {email , name} =  location.state;
    const [Vaccine, setVaccine ] = useState([]);
   

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, `userDog/${email}/dog/${name}/Vaccine`),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                });

                setVaccine(list);
            }, (error) => {
                console.log(error);
            }
        );
        return() => {
            unsub();
        };
    }, [email,name]);

    console.log("userDog", Vaccine);
    

   

    return (
        <div>
            <Navibar></Navibar>
           

        {/* <div style={{display: "flex",flexWrap:"wrap",gap:10}}>

        {Vaccine?.map((item) => (
                <div key={item.id}>
                 <ul className="cont">
            <li>
            <Card style={{ width: '18rem',}}>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Name : {item.Date}</ListGroup.Item>
                <ListGroup.Item>Description : {item.DueDate}</ListGroup.Item>
                
                </ListGroup>
              
            </Card>
            </li>
           </ul>
                </div>
            ))}
       

        </div>
        */}

<Table striped bordered hover>
        <thead>
          <tr>
            <th>Date of vaccination</th>
            <th>Doctor name</th>
            <th>Next vaccination due on</th>
            <th>Vaccines used</th>
          </tr>
        </thead>
        <tbody>
          {Vaccine?.map((item) => (
            <tr key={item.id}>
              <td>{item.Date}</td>
              <td>{item.DocName}</td>
              <td>{item.DueDate}</td>
              <td><Image src={item.imgUrl} className="vac-image"></Image></td>
            </tr>
          ))}
        </tbody>
      </Table>
       
        </div>

        
    )
}

export default ShowVacCard

