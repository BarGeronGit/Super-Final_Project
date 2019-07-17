import React from 'react';
import "./App.1.css";
import { Divider } from 'semantic-ui-react'
import RouteButton from './Components/RouteButton.js'
import "./NavigationPage.css"

class GameSquare extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var checked = this.props.checkedByLecturer == 0 ? "קיימות החלטות שלא נבדקו" : null
        return (
            <div id="MainTeamSquare">
                <div className="MainGameDivNavigation">
                    <Divider horizontal>משחק מספר {this.props.GameCode}</Divider>
                    <div className="GameDetailsInfo">תואר: {this.props.CourseCode}</div>
                    <div className="MiddleDivInNavigation">מספר רבעונים במשחק: {this.props.Querters}</div>
                    <div className="MiddleDivInNavigation">מספר קבוצות במשחק: {this.props.Teams}</div>
                    <div className="UncheckedDecisions">{checked}</div>
                    <RouteButton id="GameGoIn" value="כניסה למשחק" pathname="/GamePage" GameID={this.props.GameCode} />
                </div>
            </div>
        )
    }
}

export default GameSquare;