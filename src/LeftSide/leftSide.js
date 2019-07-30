import React from 'react';
import './styles.css';

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
                <div className="left-text">
                    Follow your interests.
                </div>
                <div className="left-text">
                    Hear what people are talking about.
                </div>
                <div className="left-text">
                    Join the conversation
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