import React, { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import "../subpages/addAdsStyle.css"
import Button from 'react-bootstrap/Button';
import Navibar from "../components/Navibar";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, serverTimestamp,} from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { toast} from "react-toastify"
import { useLocation } from 'react-router-dom';


const initialState = {
    Date: " ",
    DueDate: " ",
    DocName: " "
}

const SelectedDog = () =>{
  const location = useLocation();
  const {email , name} =  location.state;
  console.log(email)
  console.log(name)

    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);

    const {id} = useParams();

    const navigate = useNavigate();

    const {Date, DueDate, DocName} = form;

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, `Vaccine/${email}/dog/${name}/${file.name}`);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on("state_changed", (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
                setProgress(progress);
                switch (snapshot.state){
                    case "paused":
                        console.log("Upload is paused");
                        break;
                      case "running":
                        console.log("Upload is running");
                        break;
                      default:
                        break;
                }
            }, (error) => {
                console.log(error)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    toast.info("Image uploaded successfully");
                    setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
                });
            }
            );
        };
        
        file && uploadFile();
    }, [file,email,name]);


    console.log("form", form);

    const handleChange = (e) => {
       setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Date && DueDate && DocName ) {
            if(!id){
                try {
                    await addDoc(collection(db, `userDog/${email}/dog/${name}/Vaccine`), {
                      ...form,
                      timestamp: serverTimestamp(),
                     
                    });
                    toast.success("Donation created successfully");
                    navigate('/showVacCard', {replace: true,state: {email: email, name: name }});
                  } catch (err) {
                    console.log(err);
                  }
            }
          
            }else{
                return toast.error("All fields are mandatory to fill");
            }

          };
       

    return (
        <diV>
            <Navibar></Navibar>
           <h3>
            </h3>
            

           <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Date of vaccination</Form.Label>
                <Form.Control type="text" name="Date" value={Date}  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Doctor name</Form.Label>
                <Form.Control type="text" name="DocName" value={DocName} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Next vaccination due on</Form.Label>
                <Form.Control type="text" name="DueDate" value={DueDate} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Vaccines used</Form.Label>
                <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
                </Form.Group>
                <br/>
                <Button    variant="success" type="submit" disabled={progress !== null && progress < 100}>
                    submit 
                </Button>
            </Form>

            <footer>
                <p>POODLE FOR PET LOVERS</p>
            </footer>
        </diV>
    )
}

export default SelectedDog

