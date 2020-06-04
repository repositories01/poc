import React, { Component } from 'react';
import Break from './Break'
import Session from './Session';
class PomoMain extends Component {
    constructor(props) {
        super(props);
        this.handleStartBreak = this.handleStartBreak.bind(this);
        this.handleStartSession = this.handleStartSession.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.timer = null;
        this.array = []
        this.state = {
            secondBreak: 0,
            minuteBreak: 1,
            minuteSession: 2,
            secondSession: 0,
            running: false,
            break: false,
            work: true
        }
    }

    handleStartBreak() {
        this.timer = setInterval(() => {
            const { secondBreak, minuteBreak } = this.state
            if (secondBreak > 0) {
                this.setState(({ secondBreak }) => ({
                    secondBreak: secondBreak - 1
                }))
            }
            if (secondBreak === 0) {
                if (minuteBreak === 0) {
                    clearInterval(this.timer)
                    this.setState({
                        work: true,
                        break: false,
                        running: false
                    });

                } else {
                    this.setState(({ minuteBreak }) => ({
                        minuteBreak: minuteBreak - 1,
                        secondBreak: 59
                    }))
                }
            }
        }, 100)
        if (this.timer != null) {
            return this.setState({ running: true });
        }

    }


    handleStartSession() {
        this.timer = setInterval(() => {
            const { secondSession, minuteSession } = this.state
            if (secondSession > 0) {
                this.setState(({ secondSession }) => ({
                    secondSession: secondSession - 1
                }))
            }
            if (secondSession === 0) {
                if (minuteSession === 0) {
                    clearInterval(this.timer)
                    this.array.push(1)
                    this.setState({
                        break: true,
                        work:false,
                        running: false,
                        
                    });
                } else {
                    this.setState(({ minuteSession }) => ({
                        minuteSession: minuteSession - 1,
                        secondSession: 59
                    }))
                }
            }
        }, 100)
     
        if (this.timer != null) {
            return this.setState({ running: true });
        }
        
      

    }




    handlePause() {
        clearInterval(this.timer)
        this.setState({ running: false })
    }


    render() {
        const { minuteBreak, secondBreak } = this.state;
        const { minuteSession, secondSession } = this.state;
        const { running } = this.state;

       
        if (this.state.work) {
            return (
                <Session
                    minuteSession={minuteSession}
                    secondSession={secondSession}
                    handlePause={this.handlePause}
                    handleStartSession={this.handleStartSession}
                    running={running}
                />
            )
        } else {

            return (

                <Break
                    minuteBreak={minuteBreak}
                    secondBreak={secondBreak}
                    handlePause={this.handlePause}
                    handleStartBreak={this.handleStartBreak}
                    running={running}
                />


            );


        }
    }
}

export default PomoMain;
