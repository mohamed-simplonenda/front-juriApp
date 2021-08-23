import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateItem} from '../redux/actions/publicationAction'
import {useDispatch} from 'react-redux'

const UpdateItem = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    const [update,setupdate]=useState({image:el.image,date:el.date,titre:el.titre,texte:el.texte,auteur:el.auteur})
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

    const updatePub=()=>{
        dispatch (updateItem(id,update.image,update.date, update.titre,update.texte ,update.auteur)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container mt-5'>
    <button
						type='button'
						className='btn btn-success btn-sm'
                        onClick={handleShow} 
					>
						<i className='far fa-edit pr-3'></i>
						Edit
					</button>
    


<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Modifier publication</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Image de votre produit</Form.Label>
<Form.Control type="text" placeholder="image" name='image' defaultValue={el.image}  onChange={handleChange}/>

</Form.Group>

<Form.Group controlId="formBasicEmail">
<Form.Label>date de votre produit</Form.Label>
<Form.Control type="text" placeholder="title" name='date' defaultValue={el.date}  onChange={handleChange}/>

</Form.Group>
<Form.Group controlId="formBasicPassword">
<Form.Label>titre</Form.Label>
<Form.Control type="text" placeholder="enter year"  name='titre' defaultValue={el.titre}  onChange={handleChange}  />
</Form.Group>


<Form.Group controlId="formBasicPassword">
<Form.Label>texte</Form.Label>
<Form.Control type="text" placeholder="enter image"  name='texte'  defaultValue={el.texte}   onChange={handleChange} />
</Form.Group>



<Form.Group controlId="formBasicPassword">
<Form.Label>auteur</Form.Label>
<Form.Control type="text" placeholder="enter description"  name="auteur"  defaultValue={el.auteur}  onChange={handleChange} />
</Form.Group>
<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updatePub} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateItem