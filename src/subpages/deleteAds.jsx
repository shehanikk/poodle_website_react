import React from "react"
import "./addAdsStyle.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Navibar from "../components/Navibar";

function DeleteAds() {
    return (
        <diV>
            <Navibar></Navibar>
             <h3>
                DELETE ADVERTISMENTS 
            </h3>

           <ul className="cont">
            <li>
            <Card style={{ width: '18rem',}}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Name :</ListGroup.Item>
                <ListGroup.Item>Description :</ListGroup.Item>
                <ListGroup.Item>Price :</ListGroup.Item>
                <ListGroup.Item>Location :</ListGroup.Item>
                <ListGroup.Item>Mobile Number :</ListGroup.Item>
                <ListGroup.Item>Type :</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Button variant="success">Delete</Button>
                </Card.Body>
            </Card>
            </li>
           </ul>
           

        </diV>
    )
}

export default DeleteAds