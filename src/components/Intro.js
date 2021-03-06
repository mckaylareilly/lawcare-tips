import React, { Component } from 'react';
import lawcareLogo from '../images/lawcare-logo.png'

class Intro extends Component {
    render() {
        return (
            <div className="intro-container">
                <img src={lawcareLogo}
                    className="logo"
                     alt="LawCare"/>
                <p className="bold-text">Look After Yourself</p>
                <p className="content-text">Top 10 Tips for Good Mental Health and Wellbeing</p>
                <button className="previous-button"
                        onClick={this.props.onIntroPrev}>&#8249;</button>
                <button onClick={this.props.onIntroNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default Intro;