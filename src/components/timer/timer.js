import React, { Component } from 'react';

class Timer extends Component {
    constructor(props){
        super(props)
        this.state={
            minuteSession: this.props.minute
        }


    }
render(){
    return(
        

        <h1>{this.props.minute}:00</h1>
    )
}
}
export default Timer;