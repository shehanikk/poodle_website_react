import React from "react"
import "./addAdsStyle.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navibar from "../components/Navibar";

function AdvertismentUpdate() {
    return (
        <div>
            <Navibar></Navibar>
            <h3>Advertisment update</h3>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Advertisment Type</Form.Label>
                <Form.Select aria-label="Default select example">
                <option>advertisments</option>
                <option value="1">Pet dogs</option>
                <option value="2">Dog foods</option>
                <option value="3">Dog transports</option>
                <option value="4">Dog trainers</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>New Name</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>New Location</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
               
                <br/>
                <Button variant="success" type="submit">
                    Update
                </Button>
            </Form>
        </div>
        
    )
}

export default AdvertismentUpdate