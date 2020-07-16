import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Home from './container/Home'
import {fetches} from './fetches/fetches'
import FindReceiver from './container/FindReceiver'
import NavBar from './components/NavBar'
import KudosReceived from './container/KudosReceived'
import KudosGiven from './container/KudosGiven'

class App extends React.Component {
  constructor(){
    super();
    this.state={
      user:{},
      users:[],
      gave: [],
      received: [],
      
    }
  }
  componentDidMount(){
 
    if(localStorage.getItem("token")!=="undefined" &&localStorage.getItem("token")!==null){
     this.fetchUserData()
      this.fetchAllUSerData()
     
    }
  }

  login = (data) => {
    localStorage.setItem("token", data.jwt)
    localStorage.setItem("organization_id", data.user.organization_id)
    localStorage.setItem("username", data.user.username)
    this.fetchUserData()
    this.fetchAllUSerData()
  }

  fetchUserData=()=>{
    console.log("fetch one user data")
      fetches.user.getUser()
      .then(user=>{
        // localStorage.setItem("organization_id", user.user.organization_id)
          this.setState({
            user:user.user})
      })
  }

  fetchAllUSerData=()=>{
    console.log("fetch all user data")

    fetches.user.getAllUsers(localStorage.getItem("organization_id"))
    .then(data=>{
      data=data.filter(user=>user.username!==localStorage.getItem("username"))

      this.setState({
        users:data,
       
      })
    })
  }

  
  logout =()=>{
    localStorage.clear();
    this.setState({ 
      user:{},
      users:[],
      gave: [],
      received: [] });
  }

  getUsers = (data)=>{
    this.setState({
      users:data
    })
  }

  giveKudos=(num, username)=>{

  }
  updateUserKudos=(num)=>{
    let updatedUser = this.state.user
    updatedUser.kudos = num
    this.setState({
      user: updatedUser
    })
  }

  render() {
    return(
      <div>
        <Router>
          {localStorage.getItem("token")!=="undefined" &&localStorage.getItem("token")!==null?
        <NavBar logout={this.logout}/>:null}

        <Route exact path ="/login" render={props=><Login {...props} onLogin={this.login}/>} />    
    
        <Route exact path ="/" render={props=> <Home {...props} getUsers={this.getUsers} user ={this.state.user} logout={this.logout}
         giveKudos={this.giveKudos} updateUserKudos={this.updateUserKudos}
         users={this.state.users}/>} /> 

        <Route exact path ="/users/:username" render={props=><FindReceiver {...props} user={this.state.user} users={this.state.users}
        giveKudos={this.giveKudos} updateUserKudos={this.updateUserKudos}/>} />  
        <Route exact path ="/received" render={props=><KudosReceived {...props} user={this.state.user}/>} /> 
        <Route exact path ="/gave" render={props=><KudosGiven {...props} user={this.state.user}/>} /> 

        </Router>
     
      </div>
     )}
    
}

export default App;
