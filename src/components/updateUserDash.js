import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateItemUser} from '../redux/actions/usersAction'
import {useDispatch} from 'react-redux'

const UpdateUserDash = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({fullName:el.fullName,phone:el.phone,email:el.email,password:el.password,description:el.description,specialité:el.specialité,status:el.status})
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

    const updateUser=()=>{
        dispatch (updateItemUser(id,update.fullName,update.phone, update.email,update.password,update.description,update.specialité,update.status )) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='mb-5'>

    <button
						type='button'
						className='btn btn-success btn-sm'
                        onClick={handleShow} 
					>
						<i className='far fa-edit pr-3'></i>
						
					</button>
    


    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-primary">
      <Modal.Title className="title-modal">Juridique.tn</Modal.Title>
      </Modal.Header>
      <Modal.Body>
<Form >
<Form.Group className="mt-3" controlId="formBasicEmail">

<Form.Control type="text" placeholder="fullName" name='fullName' defaultValue={el.fullName}  onChange={handleChange}/>

</Form.Group>

<Form.Group className="mt-3" controlId="formBasicEmail">

<Form.Control type="text" placeholder="title" name='phone' defaultValue={el.phone}  onChange={handleChange}/>

</Form.Group>
<Form.Group className="mt-3" controlId="formBasicPassword">

<Form.Control type="text" placeholder="enter year"  name='email' defaultValue={el.email}  onChange={handleChange}  />
</Form.Group>


<Form.Group className="mt-3" controlId="formBasicPassword">

<Form.Control type="text" placeholder="enter password"  name='password'  defaultValue={el.password}   onChange={handleChange} />
</Form.Group>

<Form.Group className="mt-3" controlId="formBasicPassword">

<Form.Control type="text" placeholder="enter description"  name='description'  defaultValue={el.description}   onChange={handleChange} />
</Form.Group>

<Form.Group className="mt-3" controlId="formBasicPassword">

<Form.Control type="text" placeholder="enter specialité"  name='specialité'  defaultValue={el.specialité}   onChange={handleChange} />
</Form.Group>

<Form.Group className="mt-3" controlId="formBasicPassword">

<Form.Control type="text" placeholder="enter status"  name='status'  defaultValue={el.status}   onChange={handleChange} />
</Form.Group>





<Button onClick={updateUser} className="btn btn-success btn-sm mt-3"><i className='far fa-edit '></i>valider</Button>
</Form>
</Modal.Body>
</Modal>

</div>
</div>
   )

 }

export default UpdateUserDash