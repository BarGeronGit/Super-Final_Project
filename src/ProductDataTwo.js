import React from 'react';
import DataLineIcon from './DataLineIcon';
import "./Decision.css";

class ProductDataTwo extends React.Component {
constructor(props){
    super(props)
}

    render() {
        return (
            <div className="GroupOfDecisionsProd12">
                 <h3 className="HeadlineDecision">מוצר 2</h3>
                <DataLineIcon ValueOfField={this.props.FirstShift} Datatext={"משמרת ראשונה"} handleChange={this.props.handleChange} name={"FirstShift2"} SerialNum={1}  iconText={'numbered list'} />
                <DataLineIcon ValueOfField={this.props.SecondShift} Datatext={" משמרת שנייה"} handleChange={this.props.handleChange} name={"SecondShift2"} SerialNum={9} iconText={'numbered list'} />
                <DataLineIcon ValueOfField={this.props.PricePerUnit} Datatext={"מחיר ליחידה"} handleChange={this.props.handleChange} name={"PricePerUnit2"} SerialNum={10} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.Advertise} Datatext={"פרסום"} handleChange={this.props.handleChange} name={"Advertising2"} SerialNum={11} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.QA} Datatext={"בקרת איכות"} handleChange={this.props.handleChange} name={"QA2"} SerialNum={12} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.ResearchAndDevelopment} Datatext={"מחקר ופיתוח"} handleChange={this.props.handleChange} name={"ReasearchDevelopment2"} SerialNum={13} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.AgentCommision} Datatext={"עמלת סוכנים"} handleChange={this.props.handleChange} name={"AgentsCommision2"} SerialNum={14} iconText={'dollar'} />
            </div>
        )
    }
}

export default ProductDataTwo;