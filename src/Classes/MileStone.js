import React, { Component } from 'react';
import Dropdown from '../Components/DropDown.js';
import { Icon } from 'semantic-ui-react'
import DateTime from './Calendar.js';
import './MileStone.css';

class MileStone extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mileStone: []
           /* mileStone: [
                { key: '7', value: '7', text: 'יריד משחק עסקים' },
                { key: '8', value: '8', text: 'מועצת מנהלים' },
                { key: '9', value: '9', text: 'מכרזים' },
                { key: '1', value: '1', text: 'קבלת החלטה רבעון 1' },
                { key: '2', value: '2', text: 'קבלת החלטה רבעון 2' },
                { key: '3', value: '3', text: 'קבלת החלטה רבעון 3' },
                { key: '4', value: '4', text: 'קבלת החלטה רבעון 4' },
                { key: '5', value: '5', text: 'קבלת החלטה רבעון 5' },
                { key: '6', value: '6', text: 'קבלת החלטה רבעון 6' }], */
        }
    }

    componentDidMount(){
this.setState({mileStone: this.props.optionsMiles})
    }

    render() {
        var dropDownText = 0;
        if(this.props.dropDown !== 0){
            this.props.optionsMiles.map((mile) =>{
                if(mile.id === this.props.dropDown){
                    dropDownText = mile.text
                }
            })
        }
        const attention = this.props.attention !== "" ? this.props.attention : "הערות"
        return (
            <div className="MainDiv">
                <div className="div">
                <Icon name='trash alternate outline' onClick={this.props.click} size='big' />
                </div>
                <div className="div">
                    <Dropdown options={this.state.mileStone} chosen={dropDownText} headline={"אבן דרך"} changed={(event) => this.props.changed(event)} />
                </div>
                <div className="div">
                    <DateTime chosen={this.props.dateTime} changedDate={(event) => this.props.changedDate(event)}/> 
                </div>
                <div className="ui input elementStyle"> 
                <input type="text" placeholder={attention} onChange={(event) => this.props.changedText(event)} />
                </div>
            </div>
        )
    }
}

export default MileStone;