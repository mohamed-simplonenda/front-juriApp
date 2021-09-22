
import { useDispatch, useSelector } from 'react-redux'
import React, {useState,useEffect} from 'react'
import { getExpert,getExpertById} from '../redux/actions/expertAction'
import { getUser,getUserById} from '../redux/actions/usersAction'
import{Card,FormControl,Button,Table,Col,Row,Container} from 'react-bootstrap'
import RechercheExpert from './rechercheExpert'
import { Link } from "react-router-dom";

export default function Experts() {

  const [input , setInput] = useState("")
  const getInput =  (event) => {
      
      setInput(event.target.value)
          }

          const dataUsers = useSelector(state => state.users.dataUsers)
          const loading = useSelector(state => state.users.loading)
          const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getUser());
     },[dispatch]);
     console.log(dataUsers, "dataUsers ");


     const getItemExpert =(id)=>{
      dispatch (getUserById(id) )
    
    }
    return (
        <div className="mb-5">
             {/* <FormControl type="text" placeholder="SEARCH" onChange={getInput}  /> */}
             <RechercheExpert input={input} getInput={getInput}/>
             <Container>
               <div className="d-flex justify-content-between flex-wrap t">
              
         {dataUsers
            .filter((el) => {
              // el=>input==="Recherche"?el:el.specialité.toLowerCase().includes(input.toLowerCase())
              if (
                (el.role === "expert" && el.status === "validée" && input === "Recherche") ||
                (el.role === "expert" && el.status === "validée" && el.specialité.toLowerCase().includes(input.toLowerCase()))
              ) {
                return el;
              }
            }).map((el,key) => (<div key={key}>
             

<Card style={{ width: '20rem',marginTop:'3rem' , borderTopLeftRadius:'25px',borderTopRightRadius:'25px'  }}>
  <Card.Img variant="top" src={el.image} style={{ height: '16rem', borderTopLeftRadius:'15px',borderTopRightRadius:'15px' }}/>
  <Card.Body>
    <Card.Title>
      <Link to={`/expertProfil/${el._id}`}  className="blog-titre" onClick={() => getItemExpert(el._id)}>
        {el.fullName}
        
      </Link>
      </Card.Title>
   
    <Card.Text>
    <p className=" blog-auteur"> {el.specialité}</p>
    <p className="blog-p">{el.description.slice(0,100)} ...</p>
   
    </Card.Text>
   
   
    <Link to={`/expertProfil/${el._id}`}>  
    <button
						type='button'
            className='btn btn-expt btn-sm '
						onClick={() => getItemExpert(el._id)}
           
					>
            	Voir Expert
						<i class="fas fa-long-arrow-alt-right ms-1 "></i>
					
		</button></Link>
 
  </Card.Body>
</Card>

        
               {/* <div class="container">
    
    <div class="card1-wrapper">
      
      <div class="card1">
        
        <div class="card1-image">
          <img src={el.image} alt="profile one"/>
        </div>

      <ul class="social-icons">
        <li>
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>

      <div class="details">
        <h4>{el.fullName}<br/>

        
          <span class="job-title">{el.specialité}</span>
          <br/>
          <Link to={`/expertProfil/${el._id}`}>  
    <button
						type='button'
						className='btn btn-expt btn-sm'
						onClick={() => getItemExpert(el._id)}
           
					>
						
						voir expert<i class="fas fa-long-arrow-alt-right"></i>
		</button></Link>
        </h4>
      </div>

    </div>
  </div>
  </div> */}
              


 
         
          {/* <Card1 style={{ width: '18rem' }}>
 
  <Card.Body>
    <Card.Title>{el.fullName}</Card.Title>
   
    <Card.Text>
    {el.phone}<br/>
    {el.email}<br/>
    {el.specialité}<br/>
    {el.role}<br/>
    {el._id}
    <Link to={`/expertProfil/${el._id}`}>  
    <button
						type='button'
						className='btn btn-danger btn-sm'
						onClick={() => getItemExpert(el._id)}
           
					>
						
						voir expert
		</button></Link>
    
    
    </Card.Text>
 
  </Card.Body>
</Card1> */}
        

          </div>
        ))}
      
        </div>
        </Container>
        </div>
    )
}
