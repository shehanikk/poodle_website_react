import React from "react"
import "./addAdsStyle.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function UpdateDon() {
    return (
        <diV>
             <h3>
                CURRENT DONATIONS 
            </h3>

            <ul className="cont">
            <li>
            <Card style={{ width: '18rem',}}>
                <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Name :</ListGroup.Item>
                <ListGroup.Item>Health Issue :</ListGroup.Item>
                <ListGroup.Item>Description :</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Link as={Link} to={"/donationUpdate"}>
                <Button variant="primary">Update</Button>
                </Link>
                </Card.Body>
            </Card>
            </li>
           </ul>
        </diV>
    )
}

export default UpdateDon