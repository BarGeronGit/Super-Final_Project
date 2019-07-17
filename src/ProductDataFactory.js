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
                <h3 className="HeadlineDecision">מפעל</h3>
                <DataLineIcon ValueOfField={this.props.MaterialFuture1} Datatext={"חומר גלם עתידי 1"} handleChange={this.props.handleChange}  name={"MaterialFuture1"} SerialNum={15} iconText={'numbered list'} />
                <DataLineIcon ValueOfField={this.props.MaterialFuture2} Datatext={"חומר גלם עתידי 2"} handleChange={this.props.handleChange}  name={"MaterialFuture2"} SerialNum={16} iconText={'numbered list'}/>
                <DataLineIcon ValueOfField={this.props.mainteneceStage1} Datatext={"תחזוקה שלב 1"} handleChange={this.props.handleChange}  name={"MaintenanceStageOne"} SerialNum={17} iconText={'dollar'}/>
                <DataLineIcon ValueOfField={this.props.mainteneceStage2} Datatext={"תחזוקה שלב 2"} handleChange={this.props.handleChange}  name={"MaintenanceStageTwo"} SerialNum={18} iconText={'dollar'}/>

            </div>
        )
    }
}

export default ProductDataFactory;