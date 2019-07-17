import React from "react";
import './PickFile.css'
import MainHeader from './Header'
import { Checkbox} from 'semantic-ui-react'
import StepBar from './Components/StepBar'
import RouteButtonNext from './Components/RouteButtonNext'
import RouteButtonBack from './Components/RouteButtonBack'
import axios from 'axios';
import Loading from './Components/Loading'
import AlertMessage from './AlertMessage'

class PickFile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedFile: null,
            filePath: null,
            studentsBeforeArrange: null,
            finalArr: null,
            showLoading: false
        }
    }

    onChangeHandler = (event) => {
        this.setState({
             selectedFile: event.target.files[0],
             showLoading: true
             }, () => {
            this.handleUpload();
        });
    }

    handleUpload = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios({
            method: 'post',
            url: 'http://localhost:61009/Api/Upload',
            data: data,
        }).then(this.handleResponse)
        .catch(error => this.setState({
            message: "הייתה שגיאה בחיבור לשרת",
            errorStatus: true,
            Loading: false,
            title: "שגיאה!"
        }));
    }
    handleResponse = (response) => {
        if (response.status != 201) {
            throw Error(response.statusText);
        } else {
            this.setState({ filePath: response.data }, () => {
                this.handleGetTeams();
            });
        }
    }

    handleGetTeams() {
        var prePath = this.state.filePath.substring(0, (this.state.filePath.length - 5))
        var path = prePath.substring(14);
        axios({
            method: 'Get',
            url: 'http://localhost:61009//api/NewGame/' + path,
        })
            .then(this.handleRawData)
            .catch(error => this.setState({
                message: "הייתה שגיאה בחיבור לשרת",
                errorStatus: true,
                Loading: false,
                title: "שגיאה!"
            }));
    }

    handleRawData = (response) => {
        if (response.status != 200) {
            throw Error(response.statusText);
        } else {
            this.setState({ studentsBeforeArrange: response.data }, () => {
                this.handleArrangeTeams()
            });
        }
    }

    handleFaterState = (e) => {
        this.props.handleArrangedTeams(e)
        this.props.HandleNextPage()
    }

    //Aranging data from the excel into student groups
    handleArrangeTeams = () => {
        var teams = null;
        teams = this.ArangeData(this.state.studentsBeforeArrange);
        var finalArr = [];

        for (let i = 0; i < teams.length; i++) {
            const team = teams[i];
            for (let y = 0; y < team.length; y++) {
                const item = team[y];
                finalArr.push(item)
            }
        }
        this.setState({ finalArr: finalArr }, () => {
            this.handleFaterState(this.state.finalArr)

        })
    }
    //Create teams out of excel file
    ArangeData(data) {
        var listGroup = [];
        var teamNum = 1;

        for (var i = 0; i < data.length; i++) {
            var tempGroup = data[i];
            if (tempGroup[0] == "קבוצה") {
                listGroup.push(this.createGroup(data, i + 1, teamNum));
                teamNum = teamNum + 1;
            }
        }
        return listGroup;
    }

    //Create 1 team to insert students to..
    createGroup(data, index, teamNum) {
        var id = 0;
        var firstName = 1;
        var lastName = 2;
        var email = 3;

        var newGroup = [];
        if (this.props.lottery) {
            teamNum = 0
        }
        for (var i = index; data.length; i++) {
            var tempStudent = data[i];

            if (typeof tempStudent === "undefined" || tempStudent[id] == null || tempStudent[id] == "קבוצה") {
                break;
            }

            var objectStudent = this.createStudent(tempStudent[id], tempStudent[firstName], tempStudent[lastName], tempStudent[email], teamNum);
            newGroup.push(objectStudent);
        }

        return newGroup;
    }

    //Create student to insert into team
    createStudent(Id, FName, LName, Email, team) {
        return {
            Id, FName, LName, Email, EnableNot: true, team
        }
    }


    render() {

        const element = this.props.ArrangedTeams.length == 0 ? null : (<div onClick={this.props.HandleNextPage}>
            <RouteButtonNext />
        </div>)

       const classname = this.props.ArrangedTeams.length == 0 ? "emptyDiv" : null

        if (this.state.showLoading) {
            return (<Loading 
            Loading={"אנא המתן. נתונים נטענים.."}/>)
        } else {
            return (
                <div >
                    <StepBar stepStage={1} />
                    <MainHeader text={"בחירת קובץ"} />
                    <div className="divPickFile">
                        <h3>האם להגריל את הקבוצות?</h3>
                        <Checkbox toggle checked={this.props.lottery} onChange={this.props.handleLottery} />
                    </div>
                    <div className="divPickFile">
                    <input type="file" id="files" name="pic" accept=".xlsx" onChange={this.onChangeHandler} />
                    </div>
                    <div className="contanerButtonsDiv">
                    <div onClick={this.props.HandlePreviousPage}>
                        <RouteButtonBack />
                    </div>
                    <div className={classname}>{element}</div>
                    </div>
                    <AlertMessage
                        errorStatus={this.state.errorStatus}
                        handleErrorsToFalse={this.handleErrorsToFalse}
                        message={this.state.message}
                        title={this.state.title}
                    />
                </div>
            )
        }
    }
}

export default PickFile;