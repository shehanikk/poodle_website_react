import React, {useEffect, useState} from "react"
import Form from 'react-bootstrap/Form';
import "./addAdsStyle.css"
import Button from 'react-bootstrap/Button';
import Navibar from "../components/Navibar";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebase";
import { toast } from "react-toastify";
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  addName: " ",
  addLocation: " ",
  addDescription: " ",
  addPrice:" ",
  addNumber:" ",
  addCategories: " "
}

const categoryOption = [
  "Pet dogs",
  "Dog foods",
  "Dog transportation",
  "Dog trainers",
];


const AddAds = ({currentUser, setAdsActive}) => {

  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const {id} = useParams();


  const navigate = useNavigate();

  const {addName, addLocation, addDescription, addPrice, addNumber, addCategories} = form;

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
  id && getAddvertismentDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [id]);

const getAddvertismentDetails = async () => {
  const docRef = doc(db, "addvertisments", id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    setForm({ ...snapshot.data() });
  }
  setAdsActive(null);
};


console.log("form", form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onCategoryChange = (e) => {
    setForm({ ...form, addCategories: e.target.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (addCategories && addDescription && addName && addLocation && addNumber && addPrice ) {
      if(!id){
        try {
          await addDoc(collection(db, "addvertisments"), {
            ...form,
            timestamp: serverTimestamp(),
            author: currentUser.displayName,
            userId: currentUser.uid,
          });
          toast.success("addvertisments created successfully");
        } catch (err) {
          console.log(err);
        }

      }else{
        try {
            await updateDoc(doc(db, "addvertisments", id), {
              ...form,
              timestamp: serverTimestamp(),
              author: currentUser.displayName,
              userId: currentUser.uid,
            });
            toast.success("addvertisments updated successfully");
          } catch (err) {
            console.log(err);
          }

    }
  
        }else{
            return toast.error("All fields are mandatory to fill");
        }

        navigate("/updateAds")

      };
   

    return (
        <div>
            <Navibar></Navibar>
            <h3>
            {id ? "UPDATE ADVERTISMENTS" : "ADD ADVERTISMENTS"}
            </h3>
           
           <Form  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Choose Advertisment Type</Form.Label>
                <Form.Select aria-label="Default select example" value={addCategories} onChange={onCategoryChange} name="addCategories" >
                <option>Please select category</option>
                  {categoryOption.map((option, index) => (
                    <option value={option || ""} key={index}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Name</Form.Label>
                <Form.Control type="text" name="addName" value={addName}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}  name="addDescription" value={addDescription}  onChange={handleChange}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Enter Location</Form.Label>
                <Form.Control type="text" name="addLocation" value={addLocation}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="addPrice" value={addPrice}  onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="text" name="addNumber" value={addNumber}  onChange={handleChange}/>
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
                <p>POODLE For The Dogs</p>
            </footer>

        </div>
    )
}

export default AddAds