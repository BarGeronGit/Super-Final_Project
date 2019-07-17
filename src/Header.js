import React from "react";
import "./App.1.css";
import {Header} from "semantic-ui-react";

class MainHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id='App'>
                <Header id='NavH'>
                {this.props.text + "   "}{this.props.num}
                </Header>
            </div>

        )
    }
}

export default MainHeader;