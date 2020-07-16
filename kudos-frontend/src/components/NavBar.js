import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

 class NavBar extends Component{

    signOut = () => {
        // localStorage.removeItem("user_id")
        this.props.logout()
    }
   
    render(){

        return(
            
            <Container>
         
            <Navbar >

            <Nav >
            
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/received" exact>Kudos received</NavLink>
                <NavLink to="/gave" exact>Kudos given</NavLink>
              <div className="logout">
                <NavLink to="/login" exact onClick={this.signOut} >logout</NavLink>
                </div>
         
            </Nav>

                </Navbar>
               
              </Container>
        )
    }
}
export default NavBar