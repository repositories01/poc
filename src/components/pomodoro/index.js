import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.state = {
            second: 0,
            minute: 25,
            timer: false
        }
    }


    handleStart() {
        console.log(this.state.timer)
        this.Interval = setInterval(() => {
            const { second, minute } = this.state
            if (second > 0) {
                this.setState(({ second }) => ({
                    second: second - 1
                }))
            }
            if (second === 0) {
                if (minute === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minute }) => ({
                        minute: minute - 1,
                        second: 59
                    }))
                }
            }

        }, 1000)
        //    if ((this.state.second && this.state.minute) == 0) {
        //        this.setState({timer: false})
        //    } else {
        //        this.setState({timer:true})
        //    }
    }
    render() {
        const { minute, second } = this.state

        return (
            <div>
                <h1>{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second} ` : second}</h1>
                <button className="" onClick={this.handleStart}>start</button>
            </div>
        );
    }

}

export default App;
