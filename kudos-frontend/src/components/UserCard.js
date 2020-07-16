import React,{Component} from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from  'react-bootstrap/Button'
import {fetches} from '../fetches/fetches'
import Alert from 'react-bootstrap/Alert'
import {AiOutlineClose} from 'react-icons/ai'

export default class UserCard extends Component{
    state={
        give:false,
        alert:false,
        numOfKudos:"",
        comment:"",
        disableBtn:false
    }

    giveKudos=()=>{
    this.setState({
        give:true
    })
    }
    closeGiveKudos=()=>{
        this.setState({
            give:false
        })
    }

  handleChange=(event)=>{
  //show alert when kudos input is more than user's current kudos or is less than or equal to 0
      if(event.target.name==="numOfKudos"&&(event.target.value>this.props.user.kudos ||event.target.value<=0 )){
      
            this.setState({
                alert:true,
                disableBtn:true
            })
        
      }
    else{
        this.setState({
            disableBtn:false,
            [event.target.name]: event.target.value
        })
    }
  }


  handleSubmit=()=>{
    this.setState({
        give:false
    })
    let dateAndTime = new Date()

    let gave={receiver_name:this.props.receiver.username,time:dateAndTime,comment:this.state.comment,num_of_kudos:this.state.numOfKudos }
  
    let newKudos = this.props.user.kudos-this.state.numOfKudos
    //pass data to backend
    fetches.kudosRecord.newKudosRecord(gave).then(data=>console.log(data))
    fetches.user.giveKudos(newKudos).then(data=>console.log(data))
    //update frontend data
    this.props.updateUserKudos(newKudos)
}

    closeAlert=()=>{
        this.setState({
            alert:false
        })
    }

 render(){
    const {username} = this.props.receiver

    return(
        <div className="userCard">
            {
        this.state.alert?
            <Alert variant="danger">
                <Alert.Heading>must be more than one and less than how many kudos you have left!</Alert.Heading>
                <div className="d-flex justify-content-end">
                <Button variant="outline-info" onClick={ this.closeAlert} variant="outline-success">
                <AiOutlineClose/>
                </Button>
                </div>
            </Alert>
      :
      null}
        <div className="userInfo">
           <Link to={`/users/${username}`}>
           <strong>{username}</strong>
            </Link>

        </div>
        <div className="giveKudos">
            {
            this.state.give?
            <>
            <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicText">
                                    <Form.Label>Num of kudos</Form.Label>
                                        <Form.Control 
                                        type="number" 
                                        name="numOfKudos"  
                                        value = {this.state.numOfKudos}
                                        max={this.props.user.kudos}
                                        placeholder={"You have "+this.props.user.kudos+" to give"}
                                        onChange={this.handleChange}
                                    />
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        name="comment"  
                                        value = {this.state.comment}
                                        placeholder="Enter an comment" 
                                        onChange={this.handleChange} 
                                    />
                                    </Form.Group>

                                    <Button variant="outline-info" name="comment" type="submit" disabled={this.state.disableBtn}>
                                    Give Kudos
                                    </Button>
                                    </Form>
                                    <Button onClick={this.closeGiveKudos} variant="outline-info" name="comment" type="submit">
                                    <AiOutlineClose/>
                                    </Button>
            </>
            :

            <Button onClick={this.giveKudos} variant="outline-info" name="comment" type="submit" disabled={this.props.user.kudos===0? true : false}>
            Give Kudos
            </Button>

            }
           
        </div>
    </div>
    )
        }

}
