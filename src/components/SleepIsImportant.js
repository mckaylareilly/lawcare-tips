import React, { Component } from 'react';
import sleepIsImportant from "../images/sleep-is-important.jpg";

class SleepIsImportant extends Component {
    render() {
        return (
            <div className="sleep-is-important-container">
                <img src={sleepIsImportant}
                     className="main-image"
                     alt="Sleep is Important"/>
                <p className="bold-text">Sleep is Important</p>
                <p className="content-text">Sleeping well can improve concentration and refresh you</p>
                <button className="previous-button"
                        onClick={this.props.onSleepIsImportantPrev}>&#8249;</button>
                <button onClick={this.props.onSleepIsImportantNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default SleepIsImportant;