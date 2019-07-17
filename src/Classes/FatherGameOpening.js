import React from 'react';
import OpenGameStepOne from './OpenGameStepOne';
import PickFile from '../PickFile';
import TeamsPage from '../Classes/Teams.js';
import TeamsPage2 from './Teams';
import RouteButtonNext from '../Components/RouteButtonBack';
import Loading from '../Components/Loading.js'
import AlertMessage from './AlertMessage'
import OpenGameLastStep from './OpenGameLastStep';

class FatherGameOpening extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            chosenKodKita: 0,
            chosenNumOfQtr: 0,
            chosenNumOfGroups: 0,
            mileStoneKey: 0,
            mileStoneValues: [],
            MileStoneToPickFrom: [],
            pageToRender: 0,
            ArrangedTeams: [],
            lottery: false,
            error: null,
            errorStatus: false,


        }

    };

    //HANDLE STATE FOR FIRST 3 DROPDOWNS
    //****************************************************************************************** */
    ChangeStateKodKita = (value) => {
        this.setState({
            chosenKodKita: value,
            lottery: false,
            ArrangedTeams: []
        })
    };

    //Handle data state
    ChangeStateNumOfQtr = (value) => {
        this.setState({
            chosenNumOfQtr: value,
            lottery: false,
            ArrangedTeams: []
        })
    };
    //Handle data state
    ChangeStateNumOfGroups = (value) => {
        this.setState({
            chosenNumOfGroups: value,
            lottery: false,
            ArrangedTeams: []
        })
    };
    //****************************************************************************************** */


    //HANDLE STATE FOR PAGE TO RENDER
    //****************************************************************************************** */
    HandleNextPage = () => {
        var currentPage = this.state.pageToRender;
        var newPage = currentPage + 1;
        this.setState({ pageToRender: newPage })
    }

    HandlePreviousPage = () => {

        var currentPage = this.state.pageToRender;
        var newPage = currentPage - 1;
        this.setState({
            pageToRender: newPage,
        })
    }

    handleErrorsToFalse = () => {
        this.setState({ errorStatus: false })
    }

    //****************************************************************************************** */


    //HANDLE MILESTONES DATA
    //****************************************************************************************** */
    AddMileStones = () => {
        const newElement = { key: this.state.mileStoneKey, dropDown: 0, dateTime: "", attention: "" };
        this.setState({
            mileStoneValues: this.state.mileStoneValues.concat(newElement)
        })
        this.setState(
            { mileStoneKey: this.state.mileStoneKey + 1 })
    };


    //Handle data state
    MinusMileStones = (mileIndex) => {
        let mileStoneValues = [...this.state.mileStoneValues]
        mileStoneValues.splice(mileIndex, 1);
        this.setState({
            mileStoneValues: mileStoneValues,
        });
    };

    //Changes milestone name in state
    HandleChangeDropDown = (value, key) => {
        const mileIndex = this.state.mileStoneValues.findIndex(e => {
            return e.key === key
        });

        const mile = {
            ...this.state.mileStoneValues[mileIndex]
        };

        mile.dropDown = value;

        const mileStoneValues = [...this.state.mileStoneValues];
        mileStoneValues[mileIndex] = mile;

        this.setState({
            mileStoneValues: mileStoneValues
        })
    }

    //Updating milestone date at state
    HandlechangedDate = (ev, id) => {
        const mileIndex = this.state.mileStoneValues.findIndex(e => {
            return e.key === id
        });

        const mile = {
            ...this.state.mileStoneValues[mileIndex]
        };

        mile.dateTime = ev;

        const mileStoneValues1 = [...this.state.mileStoneValues];
        mileStoneValues1[mileIndex] = mile;

        this.setState({
            mileStoneValues: mileStoneValues1
        })
    }

    //Updating milestone remarks at state
    handleChangedText = (ev, id) => {
        const mileIndex = this.state.mileStoneValues.findIndex(e => {
            return e.key === id
        });

        const mile = {
            ...this.state.mileStoneValues[mileIndex]
        };

        mile.attention = ev.target.value;

        const mileStoneValues1 = [...this.state.mileStoneValues];
        mileStoneValues1[mileIndex] = mile;

        this.setState({
            mileStoneValues: mileStoneValues1
        })
    }
    //****************************************************************************************** */


    //HANDLE GENERAL DATA
    //****************************************************************************************** */
    handleArrangedTeams = (e) => {
        this.setState({ ArrangedTeams: e })
    }

    handleLottery = () => {
        var lottery = this.state.lottery;
        this.setState({
            lottery: !lottery,
            ArrangedTeams: []
        })
    }

    //****************************************************************************************** */

    //Get MILESTONE data from DB
    //****************************************************************************************** */
    componentWillMount() {
        this.Search();
    }

    Search() {
        let url = 'http://localhost:61009/api/MileStone'

        fetch(url)
            .then(this.handleErrors)
            .then(response => response.json())
            .then(data => this.getData(data))
            .catch(error => this.setState({
                error: "There was an error in getting the data",
                errorStatus: true
            }));
    }


    handleErrors = (response) => {
        if (!response.ok) {
            console.log(response)
            throw Error(response.statusText);
        }
        return response;
    }

    getData = (data) => {
        var mileStonesArr = [];
        data.map((mile) => mileStonesArr.push({ id: mile.Key, value: mile.Key, text: mile.DropDown }))
        this.setState({
            MileStoneToPickFrom: mileStonesArr
        });
    }
    //****************************************************************************************** */


    render() {
        if (this.state.MileStoneToPickFrom.length === 0 && this.state.error === null) {
            return (
                <div>
                    <Loading 
                    Loading={"אנא המתן..."}/>
                </div>
            )
        } else if (this.state.error == true) {
            return (
                <div>
                    <AlertMessage
                        message={this.state.error}
                        errorStatus={this.state.errorStatus}
                        handleErrorsToFalse={this.handleErrorsToFalse}
                        title={"שגיאה!"}
                    />
                    <div id="PickButtons" >
                        <RouteButtonNext id="rightPick" pathname={"/"} />
                    </div>
                </div>
            )
        } else if (this.state.error == true) {
            return (
                <div>
                    <AlertMessage
                        message={this.state.error}
                        errorStatus={this.state.errorStatus}
                        handleErrorsToFalse={this.handleErrorsToFalse}
                        title={"שגיאה!"}
                    />
                    <div id="PickButtons" >
                        <RouteButtonNext id="rightPick" pathname={"/"} />
                    </div>
                </div>
            )
        } else {
            switch (this.state.pageToRender) {
                case 0:
                    return (
                        <OpenGameStepOne
                            changeKodKita={this.ChangeStateKodKita}
                            changeNumOfQtr={this.ChangeStateNumOfQtr}
                            changeNumOfGroups={this.ChangeStateNumOfGroups}
                            addMileStones={this.AddMileStones}
                            mileStoneValues={this.state.mileStoneValues}
                            MinusMileStones={this.MinusMileStones}
                            MileStoneToPickFrom={this.state.MileStoneToPickFrom}
                            HandlechangedDate={this.HandlechangedDate}
                            changed={this.HandleChangeDropDown}
                            handleChangedText={this.handleChangedText}
                            HandleNextPage={this.HandleNextPage}
                            chosenKodKita={this.state.chosenKodKita}
                            chosenNumOfGroups={this.state.chosenNumOfGroups}
                            chosenNumOfQtr={this.state.chosenNumOfQtr}
                        />
                    )

                case 1:
                    return (
                        <PickFile
                            HandlePreviousPage={this.HandlePreviousPage}
                            HandleNextPage={this.HandleNextPage}
                            handleArrangedTeams={this.handleArrangedTeams}
                            lottery={this.state.lottery}
                            handleLottery={this.handleLottery}
                            ArrangedTeams={this.state.ArrangedTeams}
                        />
                    )
                case 2:
                    return (
                        <TeamsPage
                            HandlePreviousPage={this.HandlePreviousPage}
                            HandleNextPage={this.HandleNextPage}
                            ArrangedTeams={this.state.ArrangedTeams}
                            ArrangedTeamsFinished={this.handleArrangedTeams}
                            chosenNumOfGroups={this.state.chosenNumOfGroups}
                            lottery={this.state.lottery}
                        />
                    )
                case 3:
                    return (
                        <OpenGameLastStep
                            HandlePreviousPage={this.HandlePreviousPage}
                            HandleNextPage={this.HandleNextPage}
                            chosenKodKita={this.state.chosenKodKita}
                            chosenNumOfGroups={this.state.chosenNumOfGroups}
                            chosenNumOfQtr={this.state.chosenNumOfQtr}
                            ArrangedTeams={this.state.ArrangedTeams}
                            mileStoneValues={this.state.mileStoneValues} />
                    )
            }
        }
    };
};

export default FatherGameOpening