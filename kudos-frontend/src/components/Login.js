import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import {fetches} from '../fetches/fetches'
const INITIAL_STATE ={
    username:"",
    password:""    
}

export default class Login extends Component {
    state = INITIAL_STATE;

    handleSubmit = (event) => {
        event.preventDefault();
        fetches.user.login(this.state)
        .then(res=>{
            if (!res.error) {
                this.props.onLogin(res);
                 this.props.history.push('/');
              } else {
                this.setState({ error: true });
              }
        })
        this.setState(INITIAL_STATE);
        this.props.history.push('/')
      };
     
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };

    render() {
        return(
            <Container>
            <div className="Login">
    
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username"
                         name="username"
                         value={this.state.username}
                         onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                         name="password"
                         value={this.state.password}
                         onChange={this.handleChange}/>
                    </Form.Group>

                    <Button variant="outline-info" type="submit">
                        Log in
                    </Button>
                    
                    {/* <Button variant="outline-info" onClick={() => this.props.history.push("/signup")}>
                        Sign up
                </Button> */}
                </Form>

                
              
            </div>
            </Container>
        )
    }    
}