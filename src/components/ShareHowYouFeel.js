import React, { Component } from 'react';
import shareHowYouFeel from "../images/share-how-you-feel.jpg";

class ShareHowYouFeel extends Component {
    render() {
        return (
            <div className="share-how-you-feel-container">
                <img src={shareHowYouFeel}
                     className="main-image"
                     alt="Share How You Feel"/>
                <p className="bold-text">Share How You Feel</p>
                <p className="content-text">Talk about your feelings, it can help you cope with problems and feel
                    listened to</p>
                <button className="previous-button"
                        onClick={this.props.onShareHowYouFeelPrev}>&#8249;</button>
                <button onClick={this.props.onShareHowYouFeelNext}
                        className="next-button">&#8250;</button>
            </div>
        )
    }
}

export default ShareHowYouFeel;