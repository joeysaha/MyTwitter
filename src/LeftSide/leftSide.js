import React from 'react';
import './styles.css';
// import MagGlass from '../images/magnifyingGlass.jpg';
// import People from '../images/people.png';
// import TextBubble from '../images/textBubbleModded.png';

class LeftSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: 0
        }
    }
    description = (
        <React.Fragment>
            <div className="left-text-container">
                <div className="title-container">
                    <div className="title">
                        You’re one step away from the shiny new Twitter.com
                    </div>
                    <div className="sub-title">
                        We’ve added tons of cool features, including…
                    </div>
                </div>
                <div className="img-div-container">
                    <span className="Icon Icon--discover"></span>
                    {/* <img src={MagGlass} alt="magnifier" className="magnifier icon"></img> */}
                    <div className="left-text-p-s-container">
                        <div className="left-text left-primary">
                            Explore
                        </div>
                        <div className="left-text left-secondary">
                            Get the latest Tweets, news, and videos in one place.
                        </div>
                    </div>
                </div>
                <div className="img-div-container">
                    {/* <img src={People} alt="people" className="people icon"></img> */}
                    <span className="Icon Icon--bookmark"></span>
                    <div className="left-text-p-s-container">
                        <div className="left-text left-primary">
                            Bookmarks
                        </div>
                        <div className="left-text left-secondary">
                            Save that interesting tweet for later.
                        </div>
                    </div>
                </div>
                <div className="img-div-container">
                    {/* <img src={TextBubble} alt="textBubble" className="text-bubble icon"></img> */}
                    <span className="Icon Icon--paintbrush"></span>
                    <div className = "left-text-p-s-container">
                        <div className="left-text left-primary">
                            Join the conversation.
                        </div>
                        <div className="left-text left-secondary">
                            Choose from new themes and more dark mode options.
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

    render() {
        return (
            <React.Fragment>
                {this.description}        
            </React.Fragment>
        )
    }
}

export default LeftSide;