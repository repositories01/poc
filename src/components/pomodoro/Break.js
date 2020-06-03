import React, { Component } from 'react';
import Session from './Session'
class Break extends Component {
    constructor(props) {
        super(props);
        this.handleStart = this.handleStart.bind(this);
        this.handlePause = this.handlePause.bind(this);
        this.timer = null;
        this.state = {
            second: 0,
            minute: 2,
            session: false,
            work: false
        }
    }

    handleStart() {
        this.timer = setInterval(() => {
            const { second, minute } = this.state
            if (second > 0) {
                this.setState(({ second }) => ({
                    second: second - 1
                }))
            }
            if (second === 0) {
                if (minute === 0) {
                    clearInterval(this.timer)
                    this.setState({ work: true });
                } else {
                    this.setState(({ minute }) => ({
                        minute: minute - 1,
                        second: 59
                    }))
                }
            }
        }, 100)
        if (this.timer != null) {
            return this.setState({ session: true });
        }

    }

    handlePause() {
        clearInterval(this.timer)
        this.setState({ session: false })
    }
    render() {
        const { minute, second} = this.state
console.log(this.state.break)
        if (this.state.work ) {
            return (
                <Session />
            )
        } else {
            
        return (
            <div>
                <h1>{minute < 10 ? `0${minute}` : minute}
                :{second < 10 ? `0${second} ` : second}</h1>

                {
                    this.state.session ?
                        <button className="" onClick={this.handlePause}>pause</button>
                        :
                        <button className="" onClick={this.handleStart}>start</button>
                }
                </div>
        );
        }

    }

}

export default Break;
