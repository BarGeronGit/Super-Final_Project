import React, { Component } from 'react';
import Radium from 'radium';
import Step from '../Components/StepBar.js'
import RouteButton from '../Components/RouteButton';
import MainHeader from '../Header';
import RouteButtonBack from '../Components/RouteButtonBack';
import axios from 'axios';
import AlertMessage from './AlertMessage';
import { OutTable, ExcelRenderer } from 'react-excel-renderer';
import './OpenGameLastStep.css';
import Loading from '../Components/Loading'

class OpenGameLastStep extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ClassCode: "",
            NoOfQuarters: 0,
            NoOfTeams: 0,
            Miles: [],
            Teams: [],
            errorStatus: false,
            rows: null,
            cols: null,
            fileNum: 0,
            files: [],
            Loading: false
        }
    }

    handleUpload = () => {
        this.setState({ Loading: true })
        const data = new FormData()
        for (var i = 0; i < this.state.files.length; i++) {
            data.append("Uploadedfile", this.state.files[i]);
        }
        axios({
            method: 'post',
            url: 'http://localhost:61009/Api/Upload',
            data: data,
        }).then(this.handleResponseUploadFiles)
        .catch(error => this.setState({
            message: "הייתה שגיאה בחיבור לשרת",
            errorStatus: true,
            Loading: false
        }));
    }

    handleResponseUploadFiles = (response) => {
        if (response.status != 201) {
            console.log("handleResponseUploadFiles if", response.status)
            throw Error(response.statusText);
        } else {
            console.log("handleResponseUploadFiles else", response.status)
            this.InsertToDB();
        };
    }

    InsertToDB = () => {
        var NewGame = {
            ClassCode: this.state.ClassCode,
            NoOfQuarters: parseInt(this.state.NoOfQuarters),
            NoOfTeams: parseInt(this.state.NoOfTeams),
            Miles: this.state.Miles,
            Teams: this.state.Teams,
        }
        axios.post(
            'http://localhost:61009/Api/NewGame',
            NewGame,
        ).then(this.handleResponse)
        .catch(error => this.setState({
            message: "הייתה שגיאה בחיבור לשרת",
            errorStatus: true,
            Loading: false
        }));
    }

    handleErrorsToFalse = () => {
        this.setState({ errorStatus: false })
    }

    // handleResponseAfterDataInsert = () => {
    //     axios({
    //         method: 'Get',
    //         url: 'http://localhost:61009//api/NewGame',
    //     })
    //         .then(this.handleResponse)
    //         .catch(error => this.setState({
    //             message: "הייתה שגיאה בחיבור לשרת",
    //             errorStatus: true,
    //             Loading: false
    //         }));
    // }

    handleResponse = (response) => {
        if (response.data !== 0) {
            console.log("handleResponse", response.data)
            this.setState({
                errorStatus: true,
                message: "שגיאה בהזנת הנתונים",
                Loading: false
            })
        } else {
            console.log("handleResponse", response.data)
            this.setState({
                errorStatus: true,
                message: "הנתונים הוכנסו בהצלחה!",
                Loading: false,
                title: "הצלחה!"
            })
        }
    }

    static getDerivedStateFromProps(nextProps) {
        return {
            ClassCode: nextProps.chosenKodKita,
            NoOfQuarters: nextProps.chosenNumOfQtr,
            NoOfTeams: nextProps.chosenNumOfGroups,
            Miles: nextProps.mileStoneValues,
            Teams: nextProps.ArrangedTeams,
        }
    }

    handleRows = (resp) => {
        console.log("handleRows resp.rows", resp.rows)
        var newRowsArr = []
        resp.rows.map((row) => {
            if (row.length !== 0) {
                newRowsArr.push(row)
            }
        })
        console.log("handleRows newRowsArr", newRowsArr);
        return newRowsArr;
    }

    fileHandler = (event) => {
        if (event.target.files.length != this.state.NoOfTeams) {
            this.setState({
                message: "מספר הקבצים אינו תואם את מספר הקבוצות",
                errorStatus: true,
                Loading: false,
                title: "שגיאה!"
            })
        } else {
            this.setState({ files: event.target.files }, () => {
                let fileObj = this.state.files[this.state.fileNum];
                this.showFile(fileObj)
            })
        }

    }

    fileHandlerNext = () => {
        var fileNum = this.state.fileNum
        var NoOfTeams = this.state.NoOfTeams
        var fileLength = this.state.files.length

        if (fileNum < NoOfTeams && fileNum < (fileLength - 1)) {
            this.setState({ fileNum: fileNum + 1 }, () => {
                let fileObj = this.state.files[this.state.fileNum];
                this.showFile(fileObj)
            })
        }
    }

    fileHandlerPrev = () => {
        if (this.state.fileNum > 0) {
            this.setState({ fileNum: this.state.fileNum - 1 }, () => {
                let fileObj = this.state.files[this.state.fileNum];
                this.showFile(fileObj)
            })
        }
    }


    showFile = (fileObj) => {

        //just pass the fileObj as parameter
        ExcelRenderer(fileObj, (err, resp) => {
            if (err) {
                console.log(err);
            }
            else {
                var rows = this.handleRows(resp)
                console.log("ExcelRenderer rows after handle", rows)
                this.setState({
                    cols: resp.cols,
                    rows: rows
                }, () => {
                    console.log("ExcelRenderer rows from state", this.state.rows)
                });
            }
        });
        this.scrollToTop();
    }

    scrollToTop() {
        window.scrollTo(0, 0);
    }

    render() {

        var out = this.state.rows == null ? null : (<OutTable
            data={this.state.rows}
            columns={this.state.cols}
            tableClassName="ExcelTable2007"
            tableHeaderRowClass="heading" />)

        var finishButton = (this.state.fileNum + 1) != this.state.NoOfTeams ? <div style={{width: "106px"}}></div> : (<div onClick={this.handleUpload}>
            <RouteButton id={"orangeButtonsTeams"} value={"סיום"} />
        </div>)

        var routebuttons = (this.state.files.length == 0) ? null : (<React.Fragment>
            <div onClick={this.fileHandlerPrev}>
                <RouteButton  value="הקודם" />
            </div>
            <div onClick={this.fileHandlerNext}>
            <RouteButton  value="הבא" />
        </div></React.Fragment>)

        var smallHeader = this.state.files.length == 0 ? null : 'דו"ח חברה מספר ' + (this.state.fileNum + 1)
        if (this.state.Loading == true) {
            return (
                <div>
                    <Loading
                        Loading={"אנא המתן בזמן פתיחת המשחק. התהליך עלול לקחת מספר דק.."} />
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        <Step stepStage={2} />
                    </div>
                    <div>
                        <MainHeader text={"בחירת דוחות פתיחה"} />
                    </div>
                        <input type="file" accept=".xlsx" multiple onChange={this.fileHandler.bind(this)} style={{ "padding": "10px" }} />
                    <h2>
                        {smallHeader}
                    </h2>
                    <div>
                        {out}
                    </div>
                    <div id="ButtonsDivLastPage">
                        <div id="redButtonTeams" onClick={this.props.HandlePreviousPage}>
                            <RouteButtonBack />
                        </div>
                        {routebuttons}
                        {finishButton}
                        <AlertMessage
                            errorStatus={this.state.errorStatus}
                            handleErrorsToFalse={this.handleErrorsToFalse}
                            message={this.state.message}
                            title={this.state.title}
                        />
                    </div>
                </div>
            )
        }
    }
}

export default Radium(OpenGameLastStep);
