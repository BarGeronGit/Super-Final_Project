import React from "react";
import "./App.1.css";
import "./NavigationPage.css";
import MainHeader from './Header'
import GameSquare from './GameSquare'
import axios from 'axios';
import AlertMessage from './AlertMessage'
import Loading from './Loading'

class NavigationPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            empty: true,
            loading: false
        }
    }
    componentDidMount() {
        this.getGamesFromDb()
    }

    getGamesFromDb = () => {
        this.setState({loading: true})
        axios.get('http://localhost:61009//api//ExistingGame')
            .then(this.handleRawData)
            .catch(error => this.setState({
                message: "הייתה שגיאה בחיבור לשרת",
                errorStatus: true,
                loading: false,
                title: "שגיאה!"
            }));
    }

    handleRawData = (response) => {
        if (response.data == null) {
            this.setState({
                message: "אירעה שגיאה, אנא נסה שנית",
                errorStatus: true,
                loading: false,
                title: "שגיאה!"
            });
        } else {
            if(response.data.length != 0){
            this.setState({ 
                games: response.data,
                empty: false,
                loading: false
            })}
        }
    }


    render() {
        if (this.state.loading){
           return(<Loading/>) 
        }else if(this.state.games === undefined) {
            var games = (<h1 style={{ color: "red" }}>אין משחקים פעילים</h1>);
        }else {
             games = this.state.games.map((item, index) => {
                return (
                    <GameSquare
                        GameCode={item.GameCode}
                        CourseCode={item.ClassCode}
                        Querters={item.NoOfQuarters}
                        Teams={item.NoOfTeams}
                        checkedByLecturer={item.CheckedByLecturer}
                        key={index}
                    />
                )
            })
        }

        return (
            <React.Fragment>
                <MainHeader text={"משחקים פעילים"} />
                <div className="ContainerDivNevigation">
                    {games}
                </div>
                <AlertMessage
                    errorStatus={this.state.errorStatus}
                    handleErrorsToFalse={this.handleErrorsToFalse}
                    message={this.state.message}
                    title={this.state.title}
                />
            </React.Fragment>
        )
    }
};

export default NavigationPage;