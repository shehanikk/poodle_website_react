import React from "react"
import "./addAdsStyle.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Navibar from "../components/Navibar";


function DonationUpdate() {
    return (
        <div>
            <Navibar></Navibar>
        <h3>Donation update</h3>

        <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>New Name</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Health Issue</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br/>
                <Button variant="success" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    )
}

export default DonationUpdate