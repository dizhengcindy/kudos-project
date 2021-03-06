import React from 'react'
import Time from 'react-time-format'

const PopulateGivers=({giver})=> {
    const {giver_name, num_of_kudos, time, comment} = giver
    return (
        <div className="giver">
            <h3>{giver_name}</h3>
    <p>Give: {num_of_kudos}</p>
    <p> Time: <Time value={time} format="YYYY-MM-DD hh:mm"/> </p>
    <p> Comment: {comment} </p>
        </div>
    )
}
export default PopulateGivers