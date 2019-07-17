import React from 'react';
import MileStone from '../Classes/MileStone.js'
import TableFirstPage from '../Components/TableFirstPage';

const MileStones = (props) => props.mileStones.map((milestone, index) => {
    return <MileStone
        click ={() => props.deleteMile(index)}
        optionsMiles = {props.optionsMile}
        key={milestone.key}//uniqe identifier
        changed = {(event) => props.changed(event, milestone.key) }
        changedDate = {(event) => props.changedDate(event, milestone.key)}
        changedText =  {(event) => props.changedText(event, milestone.key)}
        attention={milestone.attention}
        dateTime={milestone.dateTime}
        dropDown={milestone.dropDown}
    />
});

export default MileStones