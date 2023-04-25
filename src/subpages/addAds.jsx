import React from "react"
import Form from 'react-bootstrap/Form';
import "./addAdsStyle.css"
import Button from 'react-bootstrap/Button';

function AddAds() {
    return (
        <div>
            <h3>
            ADD ADVERTISMENTS 
            </h3>
            

           <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Choose Advertisment Type</Form.Label>
                <Form.Select aria-label="Default select example">
                <option>advertisments</option>
                <option value="1">Pet dogs</option>
                <option value="2">Dog foods</option>
                <option value="3">Dog transports</option>
                <option value="4">Dog trainers</option>
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="text"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Location</Form.Label>
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

        </div>
    )
}

export default AddAds