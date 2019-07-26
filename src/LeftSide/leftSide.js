import React from 'react';

class LeftSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: 0
        }
    }
    description = (
        <React.Fragment>
            <div>
                Follow your interests.
            </div>
            <div>
                Hear what people are talking about.
            </div>
            <div>
                Join the conversation
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