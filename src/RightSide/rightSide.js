import React from 'react';
import '../Login/login';
import Login from '../Login/login';

class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: 0
        }
    }

    title = (
        <React.Fragment>
            <h3>
                See what's happening in the world right now
            </h3>
            <h5>
                Join Twitter today.
            </h5>
            <button type="button">Sign Up</button>
            <button type="button">Log in</button>
        </React.Fragment>
    )

    render() {
        return (
            <React.Fragment>
                <Login />
                {this.title}
            </React.Fragment>
        )
    }
}

export default RightSide;