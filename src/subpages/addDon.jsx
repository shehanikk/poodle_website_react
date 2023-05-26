import React, { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import "./addAdsStyle.css"
import Button from 'react-bootstrap/Button';
import Navibar from "../components/Navibar";
import { db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";
import { toast} from "react-toastify"


const initialState = {
    dogName: " ",
    healthState: " ",
    dogDescription: " "
}

const AddDon = ({currentUser, setActive}) =>{
    const [form, setForm] = useState(initialState);
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(null);

    const {id} = useParams();

    const navigate = useNavigate();

    const {dogName, healthState, dogDescription} = form;

    useEffect(() => {
        const uploadFile = () => {
            const storageRef = ref(storage, file.name);
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
    }, [file]);

    useEffect(() => {
        id && getDonationDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);


      const getDonationDetail = async () => {
        const docRef = doc(db, "donations", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          setForm({ ...snapshot.data() });
        }
        setActive(null);
      };


    console.log("form", form);

    const handleChange = (e) => {
       setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (dogName && dogDescription && healthState ) {
            if(!id){
                try {
                    await addDoc(collection(db, "donations"), {
                      ...form,
                      timestamp: serverTimestamp(),
                      author: currentUser.displayName,
                      userId: currentUser.uid,
                    });
                    toast.success("Donation created successfully");
                  } catch (err) {
                    console.log(err);
                  }
            }else{
                try {
                    await updateDoc(doc(db, "donations", id), {
                      ...form,
                      timestamp: serverTimestamp(),
                      author: currentUser.displayName,
                      userId: currentUser.uid,
                    });
                    toast.success("Donation updated successfully");
                  } catch (err) {
                    console.log(err);
                  }

            }
          
            }else{
                return toast.error("All fields are mandatory to fill");
            }

            navigate("/updateDon")

          };
       

    return (
        <diV>
            <Navibar></Navibar>
           <h3>
            {id ? "UPDATE DONATION" : "ADD DONATION"}
            </h3>
            

           <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Dog Name</Form.Label>
                <Form.Control type="text" name="dogName" value={dogName}  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Health Issue</Form.Label>
                <Form.Control type="text" name="healthState" value={healthState} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="dogDescription" rows={3} value={dogDescription} onChange={handleChange}/>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Insert the Image</Form.Label>
                <Form.Control type="file" onChange={(e) => setFile(e.target.files[0])} />
                </Form.Group>
                <br/>
                <Button variant="success" type="submit" disabled={progress !== null && progress < 100}>
                    {id? "Update" : "Submit"}
                </Button>
            </Form>

            <footer>
                <p>POODLE FOR PET LOVERS</p>
            </footer>
        </diV>
    )
}

export default AddDon

