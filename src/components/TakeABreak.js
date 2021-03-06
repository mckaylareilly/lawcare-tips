import React, { Component } from 'react';
import takeABreak from '../images/take-a-break.jpg'

class TakeABreak extends Component {
    render() {
        return (
            <div className="take-a-break-container">
                <img src={takeABreak}
                     className="main-image"
                     alt="Take a Break"/>
                <p className="bold-text">Take a Break</p>
                <p className="content-text">Use your lunchbreak to get away from your desk. Step outside for just a few
                    minutes, it can re-energise you</p>
                <button className="previous-button"
                        onClick={this.props.onTakeABreakPrev}>&#8249;</button>
                <button onClick={this.props.onTakeABreakNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default TakeABreak;