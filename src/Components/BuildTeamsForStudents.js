import React from 'react';
import '../Classes/Teams.css';

var key = 0;
const BuildTeamsForStudents = (props) => props.Teams.map((team, index) => {
    key = key + 1
    var teamIndex = index == 0 ? "Students to assign" : "Team" + index
    var className = index == 0 ? "StudentToAssign" : "teamForSudent"
    return (
       
        <div> 
            <h3>{teamIndex}</h3>
            <div
                className={className}
                key={key}
                onDragOver={(e) => props.onDragOver(e)}
                onDrop={(e) => props.onDrop(e, index)}>
                {props.Teams[index]}
            </div>
        </div>
        //   <div 
        //   className={className}
        //   key={key}
        //   onDragOver={(e) => props.onDragOver(e)}
        //   onDrop={(e) => props.onDrop(e, index)}>
        //       <span>{teamIndex}</span>
        //           {props.Teams[index]}
        //   </div>
    )


   
});

export default BuildTeamsForStudents