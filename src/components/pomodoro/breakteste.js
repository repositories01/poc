import React from 'react'

export default function breakteste(props) {
    return (
        <div>
            <h1>{props.minuteBreak < 10 ? `0${props.minuteBreak}` : props.minuteBreak}
               :{props.secondBreak < 10 ? `0${props.secondBreak} ` : props.secondBreak}</h1>
               {
                props.running ?
                        <button className="" onClick={props.handlePause}>pause</button>
                        :
                        <button className="" onClick={props.handleStartBreak}>start</button>
            }

        </div>
    )
}