import React,{Component} from 'react';
import AuthHOC from "../HOCs/AuthHOC"
import PopulateGivers from '../components/PopulateGivers'

class KudosReceived extends Component{

    receivedFrom=()=>this.props.user.kudosRecords.map((giver,index)=><PopulateGivers giver={giver} key={index}/>)

    

    render(){
        return(
            <div className="currentUserPage">
                <div  className="userReceived">
                    <h3>Kudos you received:</h3>
                        {this.receivedFrom()}
                </div>
            </div>
        )
    }

}

export default AuthHOC(KudosReceived)