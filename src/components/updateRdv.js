import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateItem} from '../redux/actions/RdvAction'
import {useDispatch} from 'react-redux'

const UpdateRdv = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({date:el.date,heure:el.heure,idExpert:el.idExpert,NomExpert:el.NomExpert,idUser:el.idUser,NomUser:el.NomUser,status:el.status})
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setupdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const updateRdv=()=>{
        dispatch (updateItem(id,update.date,update.heure, update.idExpert,update.NomExpert,update.idUser,update.NomUser,update.status)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div >
    <button
						type='button'
						className='btn btn-success btn-sm'
                        onClick={handleShow} 
					>
						<i className='far fa-edit pr-3'></i>
						
					</button>
    


<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton class="bg-primary">
<Modal.Title className="title-modal">Modifier rendez-vous</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>date de votre rendez-vous</Form.Label>
<Form.Control 
    type="text" 
    placeholder="date" 
    name='date' 
    defaultValue={el.date}  
    onChange={handleChange}/>

</Form.Group>

<Form.Group controlId="formBasicEmail">
<Form.Label>heure de votre rendez-vous</Form.Label>
<Form.Control 
type="time" 
placeholder="heure de rendez-vous"  
name='heure' 
defaultValue={el.heure}  
onChange={handleChange}/>

</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>id-expert</Form.Label>
<Form.Control 
type="text" 
placeholder="enter idExpert"  
name='idExpert' 
defaultValue={el.idExpert}  
onChange={handleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>nom-expert</Form.Label>
<Form.Control 
type="text" 
placeholder="enter NomExpert"  
name='NomExpert' 
defaultValue={el.NomExpert}  
onChange={handleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>id-User</Form.Label>
<Form.Control 
type="text" 
placeholder="enter idUser"  
name='idUser' 
defaultValue={el.idUser}  
onChange={handleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>nom expert</Form.Label>
<Form.Control 
type="text" 
placeholder="enter NomUser"  
name='NomUser' 
defaultValue={el.NomUser}  
onChange={handleChange}  />
</Form.Group>

<Form.Group controlId="formBasicPassword">
<Form.Label>status</Form.Label>
<Form.Control 
type="text" 
placeholder="enter status"  
name='status' 
defaultValue={el.status}  
onChange={handleChange}  />
</Form.Group>




<div className="d-flex justify-content-center mb-5">
<Button className=" mt-4 w-75" variant="outline-primary" onClick={()=>{updateRdv();handleClose()}}>valider</Button>
</div>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateRdv