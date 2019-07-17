import React, { Component } from 'react';
import './Teams.css';
import RouteButtonNext from '../Components/RouteButtonNext';
import RouteButtonBack from '../Components/RouteButtonBack';
import RouteButton from '../Components/RouteButton';
import StepBar from '../Components/StepBar.js';
import MainHeader from '../Header';
import BuildTeamsForStudents from '../Components/BuildTeamsForStudents';


class TeamsDragDrop extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ArrangedTeams: [],
            Teams: [],
            numOfTeams: null
        }
    }


    handleDragOver = (ev) => {
        ev.preventDefault();
    }

    handleDragStart = (ev, id) => {
        ev.dataTransfer.setData("Id", id)
    }

    handleDrop = (ev, teamNum) => {
        var arrayToWorkWith = this.props.ArrangedTeams
        let id = ev.dataTransfer.getData("Id")
        const studentIndex = arrayToWorkWith.findIndex(student => {
            return student.Id === id
        });

        const student = {
            ...arrayToWorkWith[studentIndex]
        };

        student.team = teamNum;

        const studentsToAssign = [...arrayToWorkWith];
        studentsToAssign[studentIndex] = student

        this.updateFatherState(studentsToAssign)
    }

    updateFatherState = (e) => {
        this.props.ArrangedTeamsFinished(e)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        var Teams = [];
        var Team0 = [];
        Teams.push(Team0)
        for (let i = 1; i <= nextProps.chosenNumOfGroups; i++) {
            var teamname = "Team" + i;
            teamname = [];
            Teams.push(teamname)
        }
        return {
            ArrangedTeams: nextProps.ArrangedTeams,
            Teams: Teams,
            numOfTeams: nextProps.chosenNumOfGroups
        }; 
    }

    handleLottery = () => {
        // var counterTeam1 = 0, counterTeam2 = 0, counterTeam3 = 0, counterTeam4 = 0
        // var counterTeam5 = 0, counterTeam6 = 0, counterTeam7 = 0, counterTeam8 = 0
        //  var evenNumOfStudentsPerTeam = arrayToWorkWith.length % this.state.numOfTeams == 0 ? true : false
        //  if(evenNumOfStudentsPerTeam){
        //     arrayToWorkWith.forEach((t) => {
        //         var randomNum = Math.random()
        //         const rand = Math.floor(1 + randomNum * (this.state.numOfTeams));
        //         t.team = rand;
        //     });
        // }
        var arrayToWorkWith = []
        var currentArray =  [...this.state.ArrangedTeams];
        var numOfRuns = this.state.ArrangedTeams.length % this.state.numOfTeams == 0 ? this.state.ArrangedTeams.length / this.state.numOfTeams : (this.state.ArrangedTeams.length / this.state.numOfTeams) + 1
        for (let j = 0; j < numOfRuns; j++) {
            for (let i = 1; i <= this.state.numOfTeams; i++) {
                if (currentArray.length > 0) {
                    const rand = Math.floor(0 +  Math.random() * (currentArray.length));
                    const student = {
                        ...currentArray[rand]
                    };
                    student.team = i;
                 arrayToWorkWith.push(student)
                 currentArray.splice(rand, 1);
                }
            }
        }
      
        this.updateFatherState(arrayToWorkWith)
    }


    render() {
        var lottery = this.props.lottery ? (<div onClick={this.handleLottery}>
            <RouteButton id={"orangeButtonsTeams"} value={"הגרל"} />
        </div>) : null

        var TeamsToShow =
            <BuildTeamsForStudents
                onDragOver={(e) => this.handleDragOver(e)}
                onDrop={(e, teamNum) => this.handleDrop(e, teamNum)}
                Teams={this.state.Teams}
            />

        //var Teams = this.state.Teams;
        this.state.ArrangedTeams.forEach((t) => {
            TeamsToShow.props.Teams[t.team].push(
                <div
                    onDragStart={(e) => this.handleDragStart(e, t.Id)}
                    draggable
                    key={t.Id}
                    className="dragAbleStudent">
                    {t.FName}{" " + t.LName}
                </div>
            )
        });

        return (
            <div>
                <StepBar stepStage={1} />
                <MainHeader text={"סידור קבוצות"} />
                <div className="container-drag">
                    {TeamsToShow}
                </div>

                <div id="ButtonsDiv">
                    <div id="redButtonTeams" onClick={this.props.HandlePreviousPage}>
                        <RouteButtonBack />
                    </div>
                    {lottery}
                    <div id="greenButtonTeams" onClick={this.props.HandleNextPage}>
                        <RouteButtonNext />
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamsDragDrop;

