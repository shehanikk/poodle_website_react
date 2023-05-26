import React from "react"
import "../subpages/addAdsStyle.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const DogsCard = ({userDog}) => {
    return (

        <diV>

            {userDog?.map((item) => (
                <div key={item.id}>
                 <ul className="cont">
            <li>
            <Card style={{ width: '18rem',}}>
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Name : {item.username}</ListGroup.Item>
                <ListGroup.Item>Email : {item.emial}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                <Link>
                <Button variant="success" name="edit">Show Pets</Button>
                </Link>
                </Card.Body>
            </Card>
            </li>
           </ul>
                </div>
            ))}
           
        </diV>

    )
}

export default DogsCard