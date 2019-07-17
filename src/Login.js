import React, { Component } from "react";
import "./App.1.css";
import "./Login.css";
import {
    Input,
    Header,
    Button,
    Checkbox,

} from "semantic-ui-react";

import RouteButton from './Components/RouteButton.js'
import axios from "axios";

import { Icon } from 'semantic-ui-react'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: null,
            remember: true,
            show: false
        }
    }

    handleShow = () => {
        var show = this.state.show
        this.setState({ show: !show })
    }


    render() {
        var show = this.state.show ? "text" : "password"
        return (
            <div className="App">
                <div id="header">
                    <Header id="mainHeader">
                        משחק עסקים <i aria-hidden="true" className="balance scale big icon" />
                    </Header>
                </div>
                <div className="containerLogin">
                    <div className="SecondndDiv">
                        <div style={{marginLeft: "25px"}}>
                        <Input name={"Id"} onChange={this.props.handleStateData} id="mainEmail" placeholder="Username" />
                        </div>
                        <div className="thirdDiv">
                            <Input name={"Password"} onChange={this.props.handleStateData} id="mainPass" type={show} placeholder="Password" />
                            <Icon style={{marginBottom: "9px"}} name='eye slash' size='large' onClick={this.handleShow} />
                        </div>
                    </div>
                    <a style={{display: "flex"}} id="mainLink" href="true">שכחת סיסמא?</a>
                    <div onClick={this.props.CheckAuthentication}>
                        <RouteButton id="loginBtn" value="Login" />
                    </div>
                </div>
                <div id="footerLogin">
                    <p id="mainMessage">
                        " הרצון לנצח, התשוקה להצלחה, הדחף למצות את מלוא הפוטנציאל שלכם: אלא
                        המפתחות שישחררו את דלתות ההצלחה האישית שלכם "
          </p>
                </div>
            </div>
        );
    }
}

export default Login;
