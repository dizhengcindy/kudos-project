import React,{Component} from 'react';
import Form from 'react-bootstrap/Form'
import Button from  'react-bootstrap/Button'
import {fetches} from '../fetches/fetches'
import Alert from 'react-bootstrap/Alert'
import {AiOutlineClose} from 'react-icons/ai'
import PopulateGivers from './PopulateGivers'
class UserPage extends Component{
    state={
       
        alert:false,
        numOfKudos:"",
        comment:"",
        disableBtn:false
     
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
   
    let dateAndTime = new Date()

    let gave={receiver_name:this.props.receiver.username,time:dateAndTime,comment:this.state.comment,num_of_kudos:this.state.numOfKudos }
  
    let newKudos = this.props.user.kudos-this.state.numOfKudos
    //pass data to backend
    fetches.kudosRecord.newKudosRecord(gave).then(data=>console.log("new kr",data))
    fetches.user.giveKudos(newKudos).then(data=>console.log("user -kutos",data))
    //update frontend data
    this.props.updateUserKudos(newKudos)
}

    closeAlert=()=>{
        this.setState({
            alert:false
        })
    }

    populateGivers=()=>{
                return this.props.receiver.kudosRecords.map((giver,index)=><PopulateGivers giver={giver} key={index}/>)}


 render(){
  
    const {kudos} = this.props.user

// //    if(this.state.receiver!=={}&&this.state.receiver.kudosRecords){
     if(this.props.receiver){

    return(
        <div className="userPage">
          
            {
        this.state.alert?
            <Alert variant="success">
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
           
           {/* <strong>{this.state.receiver.username}</strong> */}
                    <strong>{this.props.receiver.username}</strong>


        </div>
       { this.props.user.kudos===0?
          <h3>You already used all your kudos for this week, wait till next week to give more!</h3>
          :
        <div className="giveKudos">
           
            <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicText">
                                    <Form.Label>Num of kudos</Form.Label>
                                        <Form.Control 
                                        type="number" 
                                        name="numOfKudos"  
                                        value = {this.state.numOfKudos}
                                        max={kudos}
                                        placeholder={"You have "+kudos+" to give"}
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
           
        </div>}
{this.populateGivers()}
        
    </div>
     )
        }
        else{
            return(
                <>
            <h1>loading</h1>
            </>)
        }
    }

}
export default UserPage