import React from 'react';
import '../Classes/Teams.css';

var key = 0;
const BuildTeamsForStudents = (props) => props.Teams.map((team, index) => {
    key = key + 1
    var teamIndex = index == 0 ? "Students to assign" : "Team" + index
    var className = index == 0 ? "StudentToAssign" : "teamForSudent"
    return (
       
          <div 
          className={className}
          key={key}
          onDragOver={(e) => props.onDragOver(e)}
          onDrop={(e) => props.onDrop(e, index)}>
              <span>{teamIndex}</span>
                  {props.Teams[index]}
          </div>
    )
    //     return ( 
    //     <BuildTeamForStudents
    //     key={key}
    //     onDragOver={(e) => props.onDragOver(e)}
    //     onDrop={(e, teamNum) => props.onDrop(e, teamNum)}
    //     index = {index}
    //     Teams={props.Teams}/>
    // )
});

export default BuildTeamsForStudents