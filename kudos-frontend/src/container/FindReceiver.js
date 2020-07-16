import React,{Component} from 'react';
import AuthHOC from "../HOCs/AuthHOC"

import UserPage from '../components/UserPage'

class FindReceiver extends Component{

    getReceiver=()=>{

        let receiverName = this.props.match.params.username
    
        let receiver = this.props.users.find(user=>user.username === receiverName)
       
        
       return <UserPage receiver={receiver} user={this.props.user} giveKudos={this.props.giveKudos} updateUserKudos={this.props.updateUserKudos}/>
      
    } 

    render(){
        return(
            <>
            {this.getReceiver()}
            </>
        )
    }
 } export default AuthHOC(FindReceiver)