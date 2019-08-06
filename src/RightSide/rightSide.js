import React from 'react';
import '../Login/login';
import Login from '../Login/login';
import './styles.css';
import Logo from '../images/twitterLogo.png'

class RightSide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: 0
        }
    }

    title = (
        <div className="right-text-container">
            <img src={Logo} alt="twitter logo" className="image"></img>
            <h3 className="welcome see">
                See what's happening in the world right now
            </h3>
            <h5 className="welcome join">
                Join Twitter today.
            </h5>
            <button type="button" className="sign-up-button">Sign Up</button>
            <button type="button" className="log-in-button">Log in</button>
        </div>
    )

    render() {
        return (
            <React.Fragment>
                <div className="right-login">
                    <div className="login-div">
                        <Login />
                    </div>
                    <div className="title">
                        {this.title}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default RightSide;