import React,{Component} from 'react';
import AuthHOC from "../HOCs/AuthHOC"
import PopulateReceivers from '../components/PopulateReceivers'

class KudosGiven extends Component{

    gaveTo=()=>this.props.user.reverseKudosRecords.map((receiver,index)=><PopulateReceivers receiver={receiver} key={index}/>)

    

    render(){
        return(
            <div className="currentUserPage">
                <div  className="userGave">
                    <h3>Kudos you gave:</h3>
                        {this.gaveTo()}
                </div>
            </div>
        )
    }

}

export default AuthHOC(KudosGiven)