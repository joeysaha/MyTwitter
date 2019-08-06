import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: 0
        };

    }

    loginBlock = (
        <React.Fragment>
            <div className="input-container">
                <input type="text" className="input-name" name="name" placeholder="Phone, email, or username" onClick={e => this.loginBoxClick(e)} />
                <input type="text" className="input-password" name="2ndname" placeholder="Password" onClick={e => this.loginBoxClick(e)}/>
                <input type="submit" className="submit-button" value="Log in"></input>
                <div className="forgot">
                    Forgot password?
                </div>
            </div>
        </React.Fragment>
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