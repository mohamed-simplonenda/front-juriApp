import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {addNewPubs} from '../redux/actions/publicationAction'
import {useDispatch,useSelector} from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddMenu = () => {
    const notify = () => {toast.success("Wow so easy!")};
    const auth = useSelector(state => state.auth.user)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()



const [input,setInput]=useState({image:"",date:"",titre:"",texte:"",auteur:"",imageExpert:"",description:""})

const hanleChange=(e)=>{
    const {name,value}=e.target
    setInput({
        ...input,
        [name]:value
    })
    console.log("input",input)
}
const addPub=()=>{
dispatch (addNewPubs(input.image,input.date, input.titre,input.texte ,auth.fullName,auth.image,auth.description)) 
console.log("inpuuuuuuuuuuuut",input)
setShow(false)
}
  return(
    <div>
    <div className='container mt-5'>
    <Button variant="primary" onClick={handleShow}>
       Ajouter Publication
      </Button>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton className="bg-primary">
          <Modal.Title>Ajouter publication</Modal.Title>
    </Modal.Header>
   

<Form >
<Modal.Body>

<Form.Group controlId="formBasicEmail">
<Form.Label>image</Form.Label>
<Form.Control type="text" placeholder="image" name='image' onChange={hanleChange} />
</Form.Group>

<Form.Group controlId="formBasicEmail">
<Form.Label>Date</Form.Label>
<Form.Control type="text" placeholder="date" name='date' onChange={hanleChange} />

</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label>Titre</Form.Label>
<Form.Control type="text" placeholder="enter titre"  name='titre' onChange={hanleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>Texte</Form.Label>
<Form.Control type="text" placeholder="enter texte"  name='texte' onChange={hanleChange}   />
</Form.Group>

{/* <Form.Group controlId="formBasicPassword">
<Form.Label>Auteur</Form.Label>
<Form.Control type="text" placeholder="enter auteur" defaultValue={auth.fullName}  name='auteur' onChange={hanleChange}   />
</Form.Group> */}

</Modal.Body>


<div className="d-flex justify-content-center mb-5">
<Button className=" mt-4 w-75" variant="outline-primary" onClick={()=>{notify();addPub();handleClose()}}>Publier</Button>
<ToastContainer />
</div>


</Form>

</Modal>

</div>
</div>
   )

 }

export default AddMenu

      