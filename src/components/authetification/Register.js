// import {React,useState} from 'react'
// import { Container,Row,Form,Col, Button } from 'react-bootstrap'
// import Input from './input'
// import { Redirect } from 'react-router-dom'
// import {addNewExpert} from '../../redux/actions/authactions'
// import {useDispatch,useSelector} from 'react-redux'


// const Register = (props) => {
//     const dispatch = useDispatch()
//     const [input,setInput]=useState({fullName:"",image:"",titre:"",specialité:"",email:"",password:""})

//     const auth = useSelector(state =>state.auth)

//     if(auth.authenticate){
//         return <Redirect to={`/`} />
//     }
//     // test

// const hanleChange=(e)=>{
//     const {name,value}=e.target
//     setInput({
//         ...input,
//         [name]:value
//     })
//     console.log("input",input)
// }
// const addPub=()=>{
// dispatch (addNewExpert(input.fullName,input.image, input.phone,input.specialité ,input.email,input.password)) 
// console.log("inpuuuuuuuuuuuut",input)

// }
// // 
 
//     return (
//         <div>
//             <Container>
//                 <Row>
                   
//         <Form >

//             <Form.Group controlId="formBasicEmail">
//             <Form.Label>fullName</Form.Label>
//             <Form.Control type="text" placeholder="fullName" name='fullName' onChange={hanleChange} />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail">
//             <Form.Label>image</Form.Label>
//             <Form.Control type="text" placeholder="image" name='image' onChange={hanleChange} />

//             </Form.Group>
//             <Form.Group controlId="formBasicPassword">
//             <Form.Label>phone</Form.Label>
//             <Form.Control type="text" placeholder="enter phone"  name='phone' onChange={hanleChange}  />
//             </Form.Group>


//             <Form.Group controlId="formBasicPassword">
//             <Form.Label>specialité</Form.Label>
//             <Form.Control type="text" placeholder="enter specialité"  name='specialité' onChange={hanleChange}   />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//             <Form.Label>email</Form.Label>
//             <Form.Control type="text" placeholder="enter email"  name='email' onChange={hanleChange}   />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//             <Form.Label>password</Form.Label>
//             <Form.Control type="text" placeholder="enter password"  name='password' onChange={hanleChange}   />
//             </Form.Group>




//             <Button className='btn btn-success btn-sm' type="submit" onClick={addPub}>add</Button>
//         </Form>
                  
//                 </Row>
//             </Container>
            
//         </div>
//     )
// }

// export default Register
