
import { useDispatch, useSelector } from 'react-redux'
import  {React,useState,useEffect} from 'react'
import { getUserById} from '../redux/actions/usersAction'
import{Card,FormControl,Button,Table,Col,Row,Form,Container,Modal} from 'react-bootstrap'
import {addNewRdv} from '../redux/actions/RdvAction'
import { Menu } from './navbar'
import Footer from './Footer'
import TopBar from './topBar'
import { Redirect } from 'react-router-dom'

export default function ExpertProfil({id}) {
    const notAuth = useSelector(state => state.auth)
    const auth = useSelector(state => state.auth.user)
    const dataUsers = useSelector(state => state.users.dataUsers)
    const loading = useSelector(state => state.users.loading)
    const dispatch = useDispatch()


    useEffect(() => {
      dispatch(getUserById(id));
    },[]);
    
     console.log(dataUsers, "getOneUser ");

     const [inputs,setinputs]=useState({
       date:"",
       heure:"",
       idExpert:"",
       NomExpert:"",
       idUser:`${auth._id}`,
       NomUser:`${auth.fullName}`,})
   
     
 
         // handelInput
    const handleChange=(e)=>{
      e.preventDefault();
      const {name,value}=e.target
      setinputs({
          ...inputs,
          [name]:value
      })
      console.log("inputs",inputs)
  }
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const addRdv=()=>{

    
    dispatch (addNewRdv
       (inputs.date,
        inputs.heure,
        dataUsers._id ,
        dataUsers.fullName,
        inputs.idUser,
        inputs.NomUser )) 
    console.log(addNewRdv,"gggg")
    setShow(false)
   
    }


 if(! notAuth.authenticate){
  return <Redirect to={`/signin`} />
}

    return (
        <div>
  <TopBar/>          
  <Menu/>
  <div className="path">
                <h1>Profil </h1>
                <p>Accueill <span><i class="fas fa-angle-double-right mx-2"></i></span> Profil {dataUsers.fullName}</p>
            </div>
   <div className="mb-5 ">



<Container>
          <Row>
              <Col lg={3} xs={12} sm={12}>
              <img
            className="d-block w-100 "
            src={dataUsers.image}
            alt="First slide"
     
            />
              </Col>
              <Col lg={9} xs={12} sm={12}>
              <h5>{dataUsers.fullName}</h5>
              <p className="text-muted">{dataUsers.specialité}</p>
              <p className="mt-3">{dataUsers.description}</p>
              
              <Button
						type='button'
						className='btn btn-success '
                        onClick={handleShow} 
					>
						<i class="fas fa-calendar-plus ms-3">Prise de rendez-vous</i>
						
					</Button>
          </Col>
          </Row>
      </Container>
   
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-primary">
      <Modal.Title className="title-modal">Prise de rendez-vous</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <Form>
    <Form.Control name="date" type="date" placeholder="Enter date" onChange={handleChange} />
    <Form.Control name="heure" type="time" placeholder="Enter heure" onChange={handleChange} className="mt-5" />
   

    <div className="d-flex justify-content-center mb-5">
  <Button className=" mt-4 w-75" variant="outline-primary" 
    onClick={()=>{addRdv();handleClose()}}>
    valider
  </Button>
</div>
</Form>
</Modal.Body>



</Modal>

        

        </div>
        <Footer/>

        </div>
    )
}