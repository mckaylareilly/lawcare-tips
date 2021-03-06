import React, { Component } from 'react';
import askForHelp from "../images/ask-for-help.jpg";

class AskForHelp extends Component {
    render() {
        return (
            <div className="ask-for-help-container">
                <img src={askForHelp}
                     className="main-image"
                     alt="Ask for Help"/>
                <p className="bold-text">Ask for Help</p>
                <p className="content-text">Asking for help is a sign of strength, and can lead to the right support
                    for you, whatever you're going through</p>
                <button className="previous-button"
                        onClick={this.props.onAskForHelpPrev}>&#8249;</button>
                <button onClick={this.props.onAskForHelpNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default AskForHelp;