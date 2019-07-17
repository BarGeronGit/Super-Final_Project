import React from 'react';
import "./App.1.css";
import MainHeader from './Header'
import { Icon, Table, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import RouteButton from './Components/RouteButton';
import axios from 'axios';
import RouteButtonBack from './RouteButtonBack'
import Loading from './Loading'


class GamePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
            Loading: false,
        }
    }

    componentWillMount() {
        this.setState({ idOfGame: this.props.location.GameID })
        this.getGamesFromDb(this.props.location.GameID);
    }


    getGamesFromDb = (e) => {
        this.setState({ Loading: true }, () => {
            axios.get('http://localhost:61009//api//GetGameDetails/' + e)
                .then(this.handleRawData)
                .catch(error => this.setState({
                    message: "הייתה שגיאה בחיבור לשרת",
                    errorStatus: true,
                    Loading: false,
                    title: "שגיאה!"
                }));
        })

    }

    handleRawData = (response) => {
        if (response.data == null) {
            this.setState({
                message: "אירעה שגיאה, אנא נסה שנית",
                errorStatus: true,
                Loading: false,
                title: "שגיאה!"
            });
        } else {
            this.setState({
                games: response.data,
                Loading: false
            })
        }
    }

    handleNotepad = (e) => {
        const idOfGame = this.state.idOfGame
        axios.get('http://localhost:61009//api//Notepad/' + idOfGame)
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        if (this.state.Loading) {
            return (<Loading />)
        } else if (this.state.games != undefined) {
            console.log("Render this.state.games: ", this.state.games)
            var showGamesTable = this.state.games.map((game, index) => {
                var trueOrFalse = game.CheckedOrNot ? null : "negative"
                var icon = game.CheckedOrNot ? (<Icon name='checkmark' color='green' />) : <Icon name='attention' color="red" />
                return (
                    <Table.Row key={index} className={trueOrFalse}>
                        <Table.Cell>{game.Id}</Table.Cell>
                        <Table.Cell>{game.CeoName}</Table.Cell>
                        <Table.Cell>{game.Name}</Table.Cell>
                        <Table.Cell><Link to={{
                            pathname: '/Decision',
                            state: {
                                TeamId: game.Id,
                                GameID: this.props.location.GameID,
                                TeamName: game.Name
                            }
                        }}>צפה בהחלטה</Link>
                            {icon}
                        </Table.Cell>
                    </Table.Row>

                )
            })
        }


        return (
            <div id="WholePage">
                <div>
                    <MainHeader text={"משחק מספר"} num={this.props.location.GameID} />
                    <div>אבן דרך הבאה: </div>
                </div>
                <div id="TableDiv">
                    <Table id="TeamsTable" color={"green"} size={"large"} textAlign={"center"} celled selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>מספר הפירמה</Table.HeaderCell>
                                <Table.HeaderCell>שם המנכ"ל</Table.HeaderCell>
                                <Table.HeaderCell>שם החברה</Table.HeaderCell>
                                <Table.HeaderCell>צפייה בהחלטות</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {showGamesTable}
                        </Table.Body>
                    </Table>
                </div>
                <div id="DecisRouteDiv">
                    <RouteButtonBack pathname="/" />
                    <RouteButton value="אשר החלטות ברצף" pathname='/Decision' />
                    <Button onClick={() => this.handleNotepad()} positive>הפק קבצי החלטות</Button>
                </div>
            </div>

        )
    }
}

export default GamePage;