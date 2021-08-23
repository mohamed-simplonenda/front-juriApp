import logo from './logo.svg';
import './App.css';
import PlatList from './components/publication';
import {useDispatch,useSelector} from 'react-redux'
import {useEffect} from 'react'
import Home from './pages/home';
import Admin from './pages/dhashboard'
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Service from './pages/Service';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrivetRoute from './components/authetification/privetRout'
import Register from './components/authetification/Register'
import SignIn from './components/authetification/SignIn'
import {isUserLoggedIn} from './redux/actions/authactions'
import Expert from './pages/Expert';


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
  <Route path="/dashboard" ><Admin/></Route>
  <Route exact path="/" ><Home/> </Route>
  {/* <Route path="/dashboard" ><Admin/></Route> */}
  <Route path="/service" ><Service/></Route>
  <Route path="/contact" ><Contact/></Route>
  <Route path="/blog" > <Blog/> </Route>
  <Route path="/expert" > <Expert/> </Route>
  

  <Switch>
      {/* <PrivetRoute path="/dashboard" exact component={Admin} /> */}
        
      <Route path="/register"  component={Register} />
 
      <Route path="/signin"  component={SignIn} />
 
 </Switch>
 </Router>
    </div>
  );
}

export default App;
