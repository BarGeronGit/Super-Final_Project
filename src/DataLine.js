import React from 'react';
import { Icon } from 'semantic-ui-react'
;


class DataLine extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="DataDiv">
                <div className="labelTesting"><label>{this.props.Datatext}</label></div><div className="InputTesting"><input required={true} id="InputBoxicon" focus /><Icon name={this.props.iconText} /></div>
            </div>
        )
    }
}

export default DataLine;