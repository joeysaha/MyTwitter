import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: 0
        };

    }

    loginBlock = (
        <div>
            <input type="text" name="name" placeholder="Phone, email, or username" onClick={e => this.loginBoxClick(e)} />
            <input type="text" name="2ndname" placeholder="Password" />
            <input type="submit" value="Log in"></input>
            <div className="forgot">
                Forgot Password
            </div>
        </div>
    )

    loginBoxClick = (e) => {
        // e.target.placeholder = "";
    }
    

    render() {
        return (
            <React.Fragment>
                {this.loginBlock}
            </React.Fragment>
        );
    }
}

export default Login;