import React from 'react';
import Dropdown from '../Components/DropDown'
import { Icon, Button } from 'semantic-ui-react'
import MileStones from '../Components/MileStones.js'

const TableClass = (props) => {
    if (props.mileStoneValues.length > 0) {
      var elements =
            <MileStones
                mileStones={props.mileStoneValues}
                optionsMile={props.MileStoneToPickFrom}
                deleteMile={props.MinusMileStones} 
                changed={props.changed}
                changedDate={props.HandlechangedDate}
                changedText = {props.handleChangedText}
                />
    };

    return (
        <div>
            <table className="tableDiv">
                <tbody>
                    <tr>
                        <td className="nameTd">קוד כיתה *</td>
                        <td className="midEmptyTd">&nbsp;</td>
                        <td>
                            <Dropdown
                                options={props.kodKita}
                                changed={props.changeKodKita}
                                headline={"קוד כיתה"} 
                                chosen={props.chosenKodKita}
                                />
                        </td>
                    </tr>
                    <tr className="midEmptyRow"></tr>
                    <tr>
                        <td className="nameTd">מספר רבעונים *</td>
                        <td className="midEmptyTd">&nbsp;</td>
                        <td>
                            <Dropdown
                                options={props.numOfRivonim}
                                changed={(event) => props.changeNumOfQtr(event)}
                                headline={"מספר רבעונים"} 
                                chosen={props.chosenNumOfQtr}/>
                        </td>
                    </tr>
                    <tr className="midEmptyRow"></tr>
                    <tr>
                        <td className="nameTd">מספר קבוצות *</td>
                        <td className="midEmptyTd">&nbsp;</td>
                        <td>
                            <Dropdown
                                options={props.numOfTeams}
                                changed={(event) => props.changeNumOfGroups(event)}
                                headline={"מספר קבוצות"} 
                                chosen={props.chosenNumOfGroups}
                               />
                        </td>
                    </tr>
                    <tr className="midEmptyRow"></tr>
                    <tr className="midEmptyRow"></tr>
                    <tr>
                        <td className="nameTd">הוספת/הסרת אבני דרך</td>
                        <td>
                            <div className="buttonsDivRight">&nbsp;</div>
                            <div className="buttonsDiv">
                                <Icon name='add circle' size='big' onClick={props.addMileStones} />
                            </div>
                            <div className="buttonsDiv">
                            </div>
                        </td>
                        <td className="midEmptyTd"></td>
                    </tr>
                    <tr className="midEmptyRow"></tr>
                </tbody>
            </table>
            <div className="elementDiv">
                {elements}
            </div>
        </div>
    )
}

export default TableClass