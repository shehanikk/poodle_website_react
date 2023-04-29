import React from "react"
import Form from 'react-bootstrap/Form';
import "./addAdsStyle.css"
import Button from 'react-bootstrap/Button';
import Navibar from "../components/Navibar";



function AddDon() {
    return (
        <diV>
            <Navibar></Navibar>
           <h3>
            ADD DONATION 
            </h3>
            

           <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Dog Name</Form.Label>
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
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Insert the Image</Form.Label>
                <Form.Control type="file" />
                </Form.Group>
                <br/>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>

            <footer>
                <p>POODLE For The Dogs</p>
            </footer>
        </diV>
    )
}

export default AddDon

