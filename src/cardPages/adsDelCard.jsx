import React from "react"
import "../subpages/addAdsStyle.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const AdsDelCard = ({addvertisments, user, handleDelete}) => {
    return (

        <diV>
             <div style={{display: "flex",flexWrap:"wrap",gap:10}}>

             
            {addvertisments?.map((item) => (
                <div key={item.id}>
                 <ul className="cont">
            <li>
            <Card style={{ width: '18rem',}}>
                <Card.Img variant="top" src={item.imgUrl} alt={item.addName} />
                <ListGroup className="list-group-flush">
                <ListGroup.Item>Name : {item.addName}</ListGroup.Item>
                <ListGroup.Item>Description : {item.addDescription}</ListGroup.Item>
                <ListGroup.Item>Price : {item.addPrice }</ListGroup.Item>
                <ListGroup.Item>Location : {item.addLocation}</ListGroup.Item>
                <ListGroup.Item>Mobile Number : {item.addNumber}</ListGroup.Item>
                <ListGroup.Item>Type : {item.addCategories}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                
                <Button variant="danger" name="trash" onClick={() => handleDelete(item.id)}>Delete</Button>
                
                </Card.Body>
            </Card>
            </li>
           </ul>
                </div>
            ))}
           
           </div>
        </diV>

    )
}

export default AdsDelCard