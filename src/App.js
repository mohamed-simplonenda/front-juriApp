import logo from './logo.svg';
import './App.css';
import PlatList from './components/publication';
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import Home from './pages/home';
// import Admin from './pages/dhashboard'
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Service from './pages/Service';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivetRoute from './components/authetification/privetRoute'
import Register from './components/authetification/Register'
import SignIn from './components/authetification/SignIn'
import {isUserLoggedIn} from './redux/actions/authactions'
import Expert from './pages/Expert';
import UserProfil from './components/authetification/userProfil'
import DashboardExpert from './pages/dashboardExpert';
import RegisterUserForm from './components/authetification/registerUser';
import Users from './components/usersCrud';
import RegisterExpertForm from './components/authetification/registerExpert';
import PubById from './components/publication';
import ExpertProfil from './components/ExpertProfil'
import RDV  from './components/RDV'
import ProfilExpert from './components/profilExpert';
import RdvUser from './components/rdvUser'
import RdvExpert from './components/rdvExpert'
import PubExpert from './components/pubExpert'
import PubAdmin from './components/publicationAdmin'
import UsersDash from './components/usersDashboard'
import ExpertsDash from './components/expertDashboard'
import ContactDash from './components/ContactAdmin'
import Test from './components/test';


function App() {
  const dispatch = useDispatch()
  const auth = useSelector(state =>state.auth)


  useEffect(()=>{
    if(!auth.authenticate)
   { dispatch(isUserLoggedIn())}
    },[auth.authenticate])
  return (
    <div className="App">
  <Router>
  {/* <Route path="/dashboard" ><Admin/></Route> */}
  <Route exact path="/" ><Home/> </Route>
  <Route path="/service" ><Service/></Route>
  <Route path="/contact" ><Contact/></Route>
  <Route path="/blog" > <Blog/> </Route>
  <Route path="/PubById" > <PubById/> </Route>
  <Route path="/expert" > <Expert/> </Route>
  <Route path="/expertProfil" > <ExpertProfil/></Route>
  <Route path="/dashboardExpert"> <DashboardExpert/> </Route>
  <Route path="/registerUser"> <RegisterUserForm/> </Route>
  <Route path="/registerExpert"><RegisterExpertForm/></Route>
  <Route path="/RdvUser"> <RdvUser/> </Route>
  <Route path="/RdvExpert"> <RdvExpert/> </Route>
  <Route path="/PubExpert"> <PubExpert/></Route>
  <Route path="/test"> <Test/></Route>
 
  


  <Switch>

      <PrivetRoute path="/UserProfil" exact component={UserProfil} />
      <PrivetRoute path="/ProfilExpert" exact component={ProfilExpert} />
      <PrivetRoute path="/Users" exact component={Users} />
      <PrivetRoute path="/ContactDash" component={ContactDash} /> 
      <PrivetRoute path="/UsersDash" component={UsersDash}/> 
      <PrivetRoute path="/ExpertDash" component={ExpertsDash} /> 
      <PrivetRoute path="/PubAdmin"  component={PubAdmin} /> 
      <PrivetRoute path="/rendez-vous" component={RDV} /> 
  
        
      <Route path="/register"  component={Register} />
 
      <Route path="/signin"  component={SignIn} />
     
 
 </Switch>
 </Router>
    </div>
  );
}

export default App;
