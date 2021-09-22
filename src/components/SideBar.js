import React from 'react'
import { Link } from "react-router-dom";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export default function SideBar() {
    return (
        <div className="mt-5">
            <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
    
       <NavItem eventKey="home" className="sideBar">
          
            <NavIcon>
            <Link to="/">
                <i className="fas fa-home" style={{ fontSize: '1.75em',color:'#fff' }} />
            </Link>  
            </NavIcon>

            
            <NavText>
            Accueil
            </NavText>
            
        </NavItem>
        <NavItem eventKey="" className="sideBar">
          
          <NavIcon>
          <Link to="/rendez-vous">
              <i className="fas fa-calendar-alt" style={{ fontSize: '1.75em',color:'#fff' }} />
          </Link>  
          </NavIcon>

          
          <NavText>
          Rendez-vous
          </NavText>
          
      </NavItem>
    
      
       
        <NavItem eventKey="" className="sideBar">
        <NavIcon>
        <Link to="/PubAdmin">
                <i className="fab fa-blogger-b" style={{ fontSize: '1.75em',color:'#fff' }} />
         </Link>
            </NavIcon>
            <NavText>
            Publications
               
            </NavText>
        </NavItem>
        <NavItem eventKey="" className="sideBar">
        <NavIcon>
        <Link to="/ContactDash">
                <i className="fas fa-envelope-open" style={{ fontSize: '1.75em',color:'#fff' }} />
         </Link>
            </NavIcon>
            <NavText>
            Contact
               
            </NavText>
        </NavItem>
        <NavItem eventKey="charts" className="sideBar">

            <NavIcon>
            <Link to="/UsersDash">
                <i className=" fas fa-users" style={{ fontSize: '1.75em',color:'#fff' }} />
            </Link>    
            </NavIcon>

            <NavText>
             Acteurs
            </NavText>
            
            <NavItem eventKey="charts/linechart">
                <NavText>
                <Link to="/ExpertDash">
                Experts
                </Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                <Link to="/UsersDash">
                Users
                </Link>
                </NavText>
                
            </NavItem>
        </NavItem>
    </SideNav.Nav>
</SideNav>
            
        </div>
    )
}
