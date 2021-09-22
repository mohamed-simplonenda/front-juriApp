import {React,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getUser} from '../redux/actions/usersAction'
import { Col,Row } from 'react-bootstrap'
import fanFact from '../images/background-15.jpg'

export default function FanFact() {
    const dataUsers = useSelector(state => state.users.dataUsers)
    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getUser());
     },[dispatch]);
    return (
        <div className="fanFact">
  
           <div className="fan">
               <h3>Faites le bon pas,<br/><span className="text-white">faire les grandes choses.</span></h3>

           </div>
           <Row className="mt-5">

               <Col className="chiffre text-center pt-3" lg={3} xs={12} sm={12}>252<br/><span className="fans">Clients</span></Col>
               <Col className="chiffre text-center pt-3" lg={3} xs={12} sm={12}>{dataUsers.length}<br/><span className="fans">Experts</span></Col>
               <Col className="chiffre text-center pt-3" lg={3} xs={12} sm={12}>8<br/><span className="fans ">Specialités</span></Col>
               <Col className="chiffre text-center pt-3" lg={3} xs={12} sm={12}>100%<br/><span className="fans">Clients statisfaits</span></Col>
           </Row>
    
            
        </div>
    )
}
