import React from 'react';
import DataLineIcon from './DataLineIcon';
import "./Decision.css";

class ProductDataFactory extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="GroupOfDecisions">
                <h3 className="HeadlineDecision">הרחבה</h3>
                <DataLineIcon ValueOfField={this.props.ExpendLevOne} Datatext={"הרחבה שלב 1"} handleChange={this.props.handleChange} name={"ExpendLevOne"} SerialNum={19} iconText={'time'}/>
                <DataLineIcon ValueOfField={this.props.ExpendLevTwo} Datatext={"הרחבה שלב 2"} handleChange={this.props.handleChange} name={"ExpendLevTwo"} SerialNum={20} iconText={'time'}/>
                <DataLineIcon ValueOfField={this.props.EngineringResearch} Datatext={"מחקר הנדסי"} handleChange={this.props.handleChange} name={"EngineringResearch"} SerialNum={21} iconText={'dollar'}/>

            </div>
        )
    }
}

export default ProductDataFactory;