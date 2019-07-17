import React from 'react';
import DataLineIcon from './DataLineIcon';

class ProductDataAgents extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="GroupOfDecisions">
            <h3 className="HeadlineDecision">סוכנים</h3>
                <DataLineIcon ValueOfField={this.props.AgentsWorking} SerialNum={26} handleChange={this.props.handleChange} name={"AgentsWorking"} Datatext={"סוכנים בעבודה"}  />
                <DataLineIcon ValueOfField={this.props.AgentToTrain} SerialNum={27} handleChange={this.props.handleChange} name={"AgentToTrain"} Datatext={"סוכנים להכשיר"}  />
                <DataLineIcon ValueOfField={this.props.BaseSalary}  SerialNum={28} Datatext={"שכר בסיס"} handleChange={this.props.handleChange} name={"BaseSalary"}  iconText={'dollar'}/>
            </div>
        )
    }
}

export default ProductDataAgents;