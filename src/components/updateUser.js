import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateItemUser} from '../redux/actions/usersAction'
import {useDispatch} from 'react-redux'

const UpdateUser = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({fullName:el.fullName,phone:el.phone,email:el.email,password:el.password})
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
        dispatch (updateItemUser(id,update.fullName,update.phone, update.email,update.password )) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='mb-5'>



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






<Button onClick={updateUser} className="btn btn-success btn-sm mt-3"><i className='far fa-edit '></i>valider</Button>
</Form>

</div>
</div>
   )

 }

export default UpdateUser