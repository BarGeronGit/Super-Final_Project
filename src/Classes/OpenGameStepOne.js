import React, { Component } from 'react';
import Radium from 'radium';
import './OpenGameStepOne.css';
import Dropdown from '../Components/DropDown.js';
import Step from '../Components/StepBar.js'
import RouteButtonNext from '../Components/RouteButtonNext';
import MainHeader from '../Header';
import TableFirstPage from '../Components/TableFirstPage';
import AlertMessage from './AlertMessage.js'
// import AlertMessage2 from './AlertMessage2Options'

class OpenGameStepOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            kodKita: [
                { id: 'MBA1', value: 'MBA1', text: 'MBA1' },
                { id: 'MBA2', value: 'MBA2', text: 'MBA2' },
                { id: 'MBA2', value: 'MBA2', text: 'MBA3' },
                { id: 'BA1Evning', value: 'BA1Evning', text: 'BA1Evning' },
                { id: 'BA2Evning', value: 'BA2Evning', text: 'BA2Evning' },
                { id: 'BA3Evning', value: 'BA3Evning', text: 'BA3Evning' },
                { id: 'BA1Morning', value: 'BA1Morning', text: 'BA1Morning' },
                { id: 'BA2Morning', value: 'BA2Morning', text: 'BA2Morning' },
                { id: 'BA3Morning', value: 'BA3Morning', text: 'BA3Morning' },],
            numOfRivonim: [
                { id: '8', value: '8', text: '8 רבעונים' },
                { id: '10', value: '10', text: '10 רבעונים' },
                { id: '12', value: '12', text: '12 רבעונים' },
                { id: '16', value: '16', text: '16 רבעונים' }],
            numOfTeams: [
                { id: '4', value: '4', text: '4 קבוצות' },
                { id: '5', value: '5', text: '5 קבוצות' },
                { id: '6', value: '6', text: '6 קבוצות' },
                { id: '7', value: '7', text: '7 קבוצות' },
                { id: '8', value: '8', text: '8 קבוצות' }],
            errorStatus: false,
            errorStatus2: false
        }
    }

    handleErrors = () => {
        if (this.props.chosenKodKita == 0 || this.props.chosenNumOfQtr == 0 || this.props.chosenNumOfGroups == 0) {
            this.setState({ errorStatus: true })
        } else if (this.props.mileStoneValues.length == null) {
            this.setState({ errorStatus2: true })
        } else {
            this.props.HandleNextPage()
        }
    }
    handleErrorsToFalse = () => {
        this.setState({
            errorStatus: false,
            errorStatus2: false
        })
    }

    componentDidMount(){
        this.setState({
            errorStatus: false,
            errorStatus2: false 
        })
    }

    render() {
        return (
            <div>
                <div>
                    <Step step={0} />
                </div>
                <div className="h2">
                    <MainHeader text={"פרטי משחק"} />
                </div>
                <div className="midDiv">
                    <TableFirstPage
                        changeKodKita={this.props.changeKodKita}
                        changeNumOfQtr={this.props.changeNumOfQtr}
                        changeNumOfGroups={this.props.changeNumOfGroups}
                        addMileStones={this.props.addMileStones}
                        mileStoneValues={this.props.mileStoneValues}
                        MinusMileStones={this.props.MinusMileStones}
                        MileStoneToPickFrom={this.props.MileStoneToPickFrom}
                        HandlechangedDate={this.props.HandlechangedDate}
                        changed={this.props.changed}
                        handleChangedText={this.props.handleChangedText}
                        kodKita={this.state.kodKita}
                        numOfRivonim={this.state.numOfRivonim}
                        numOfTeams={this.state.numOfTeams}
                        chosenKodKita={this.props.chosenKodKita}
                        chosenNumOfGroups={this.props.chosenNumOfGroups}
                        chosenNumOfQtr={this.props.chosenNumOfQtr}
                        mileStoneValues={this.props.mileStoneValues}
                    />
                </div>
                <AlertMessage
                    errorStatus={this.state.errorStatus}
                    handleErrorsToFalse={this.handleErrorsToFalse}
                    message={"אנא הכנס את כל הנתונים הנדרשים!"}
                    title={"שגיאה!"}
                />
                {/* <AlertMessage2
                    errorStatus={this.state.errorStatus2}
                    handleErrorsToFalse={this.handleErrorsToFalse}
                    continueToNextPage={this.props.HandleNextPage()}
                    message={"לא הוזנו אבני דרך"}
                    title={"שים לב!"}
                /> */}
                <div className="containerButton">
                    <div className="bottomButtonsDiv" onClick={this.handleErrors} >
                        <RouteButtonNext />
                    </div>
                </div>
            </div>
        )
    }
};

export default Radium(OpenGameStepOne);