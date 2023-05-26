//import React, { useEffect, useState } from "react"
import vaccineTop from "../img/vac_top.png"
import Navibar from "./Navibar"
import React, {useState, useEffect} from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container} from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';




const Evaccination = () => {
    const [userDog, setDog] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "userDog"),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                });

                setDog(list);
            }, (error) => {
                console.log(error);
            }
        );
        return() => {
            unsub();
        };
    }, []);

    console.log("userDog", userDog);
    

   

    return (
        <div>
            <Navibar></Navibar>
            <img src={vaccineTop} alt="homeimage" className="homeImage"/>

          

            <div className='searcbar'>
        <Container className="mt-5">
        <p>
            Search by the pet owners email address
           </p>
          <Row>
            <Col sm={30}>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setQuery(e.target.value)} />
              </Form>
            </Col>
          </Row>
        </Container>
        </div>
        <div style={{display: "flex",flexWrap:"wrap",gap:10}}>
        {userDog.filter((item) => item.emial.toLowerCase().includes(query)).map((item) => { 
            return(
               
                <div key={item.id}>
                 <ul className="cont">
            <li>
            <Card style={{ width: '18rem',}}>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Name : {item.username}</ListGroup.Item>
                <ListGroup.Item>Email : {item.emial}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Button onClick={() =>{navigate('/dogsDetailsShow', {replace:true, state:item.emial})}} variant="success" name="edit">Show Pets</Button>
                
                </Card.Body>
            </Card>
            </li>
           </ul>
                </div>
            )
        })}
        </div>
       
            
            <footer>
                <p>POODLE FOR PET LOVERS</p>
            </footer>
           
        </div>

        
    )
}

export default Evaccination

