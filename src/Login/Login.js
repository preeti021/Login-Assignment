import React, { Component } from 'react';
import loginData from '../resources/Login.json'
import Dashboard from '../Dashboard/Dashboard'
import { connect } from 'react-redux'
import * as actionTypes from '../store/action/actionTypes';
import './Login.css'

class Login extends Component {
    state = {
        name: '',
        pwd: '',
    }

    loginButtonHandler = () => {
        console.log(loginData.username)
        if (this.state.name === loginData.username && this.state.pwd === loginData.password) {
            this.props.authSuccess()
        }
        else
            this.props.authFail()

    }

    userInputHandler = (event) => {
        this.setState({ name: event.target.value })
    }

    passwordInputHandler = (event) => {
        this.setState({ pwd: event.target.value })
    }

    render() {
        const loginPage =
            <div className="Login">
                <input
                    name="username"
                    value={this.state.name}
                    placeholder="Enter Username"
                    onChange={(event) => this.userInputHandler(event)} /> <br />

                <input
                    name="Password"
                    value={this.state.pwd}
                    placeholder="Enter Password"
                    onChange={(event) => this.passwordInputHandler(event)} /> <br />

                <button onClick={this.loginButtonHandler}>LOGIN</button>
            </div>

        const errorStyle = {
            color: 'red',
            'font-size': 'larger',
            'text-align': 'center'
        }

        return (
            <div>
                {this.props.invalid ? <div style={errorStyle}>
                    <p > !!Incorrect details!!</p>
                    <p> Please enter valid username and Password</p> </div> : null}
                {loginPage}
                {this.props.auth ? <Dashboard /> : null}

            </div>

        )

    }
}

const mapStateTOProps = state => {
    return {
        auth: state.isAuthorised,
        invalid: state.invalidLogin
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authSuccess: () => dispatch({ type: actionTypes.AUTH_SUCCESS }),
        authFail: () => dispatch({ type: actionTypes.AUTH_FAIL })
    }
}
export default connect(mapStateTOProps, mapDispatchToProps)(Login);
