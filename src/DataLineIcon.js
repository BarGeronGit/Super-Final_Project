import React from 'react';
import { Icon } from 'semantic-ui-react'
import "./Decision.css"

class DataLine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="DataDiv">
                <div className="labelTesting"><label>{this.props.Datatext}</label></div><div className="InputTesting"><input required={true} id="InputBoxicon" name={this.props.name} value={this.props.ValueOfField} onChange={(e)=>this.props.handleChange(this.props.SerialNum,e)}  /><Icon name={this.props.iconText} /></div>
            </div>
        )
    }
}

export default DataLine;