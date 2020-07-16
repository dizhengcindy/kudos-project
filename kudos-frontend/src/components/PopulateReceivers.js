import React from 'react'
import Time from 'react-time-format'
const PopulateReceivers=({receiver})=> {

    const {receiver_name, num_of_kudos, time, comment} = receiver
  
    return (
        <div className="giver">
            <h3>{receiver_name}</h3>
    <p>Give: {num_of_kudos}</p>
    <p> Time: <Time value={time} format="YYYY-MM-DD hh:mm"/> </p>
    <p> Comment: {comment} </p>
        </div>
    )
}
export default PopulateReceivers