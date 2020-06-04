import React from 'react'

export default function sessionteste(props) {
    return (
        <div>
            <h1>{props.minuteSession < 10 ? `0${props.minuteSession}` : props.minuteSession}
               :{props.secondSession < 10 ? `0${props.secondSession} ` : props.secondSession}</h1>
               {
                props.running ?
                        <button className="" onClick={props.handlePause}>pause</button>
                        :
                        <button className="" onClick={props.handleStartSession}>start</button>
            }
           

        </div>
    )
}