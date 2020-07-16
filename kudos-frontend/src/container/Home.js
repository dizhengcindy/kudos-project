import React, {Component} from 'react';
import UserCard from '../components/UserCard'
import AuthHOC from "../HOCs/AuthHOC"

class Home extends Component{

populateUsers = ()=>this.props.users.map((receiver, index)=><UserCard key={index} receiver={receiver} user={this.props.user} updateUserKudos={this.props.updateUserKudos}/> )
 
render(){
 
    return(
        <div className="home">
        <h1>Welcome {this.props.user.username} from {this.props.user.organization_name}</h1>
       
        {
          this.props.user.kudos===0?
          <h3>You already used all your kudos for this week, wait till next week to give more!</h3>
          :
          <h3>Give Kudos to your colleagues:</h3>
        }
        {this.populateUsers()}
        </div>
    )
}

}
export default AuthHOC(Home)