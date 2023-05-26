import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation } from 'react-router-dom';
import { collection, addDoc} from 'firebase/firestore';
import { db } from "../firebase";
import { useState } from 'react';
import Navibar from "../components/Navibar";



const SelectedDog = () => {
   
    const location = useLocation();
    const {email , name} =  location.state;
    console.log(email)
    console.log(name)
    //const [currentDate, setCurrentDate] = useState("");


 const [date, setDate] = useState("");
 const [dueDate, setDueDate] = useState("");
 //const [doctName, setDoctName] = useState("");
  
   
    console.log(location.state);
    const collectionRef = collection(db, `userDog/${email}/dog/${name}/Vaccine`);
    
    const addVaccine = async () => {
        try {
          const data = {
            Date: date,
            DueDate: dueDate,
            //DoctName: doctName,
            
          };
          await addDoc(collectionRef, data);
          console.log('Data added successfully to Firestore');
        } catch (error) {
          console.error('Error adding data to Firestore: ', error);
        }
      };



  return (
    <div>
       <Navibar></Navibar>

      <Form>

<input type="date" placeholder="Enter email" value={date} onChange={(e) => setDate(e.target.value)} />


<input type="date" placeholder="Enter email" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />


</Form><Button variant="primary" type="submit" onClick={() => addVaccine()}>
    Submit
</Button>
    </div>
    
  );
}

export default SelectedDog;