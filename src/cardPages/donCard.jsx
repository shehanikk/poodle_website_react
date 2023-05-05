import React from "react"
import "../subpages/addAdsStyle.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const DonCard = ({donations, user}) => {
    return (
        <diV>

            {donations?.map((item) => (
                <div key={item.id}>
                 <ul className="cont">
                 <li>
                 <Card style={{ width: '18rem',}}>
                     <Card.Img variant="top" src={item.imgUrl} alt={item.dogName} />
                     <ListGroup className="list-group-flush">
                     <ListGroup.Item>Name : {item.dogName}</ListGroup.Item>
                     <ListGroup.Item>Health Issue : {item.healthState}</ListGroup.Item>
                     <ListGroup.Item>Description : {item.dogDescription}</ListGroup.Item>
                     </ListGroup>
                     <Card.Body>
                     
                     <Link to={`/addDon/${item.id}`}>
                     <Button variant="success" name="edit">Update</Button>
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

export default DonCard