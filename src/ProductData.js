import React from 'react';
import DataLineIcon from './DataLineIcon';
import "./Decision.css";

class ProductData extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="GroupOfDecisionsProd12">
                 <h3 className="HeadlineDecision">מוצר 1</h3>
                <DataLineIcon ValueOfField={this.props.FirstShift} Datatext={"משמרת ראשונה"} handleChange={this.props.handleChange} name={"FirstShift1"} SerialNum={1}  iconText={'numbered list'} />
                <DataLineIcon ValueOfField={this.props.SecondShift} Datatext={" משמרת שנייה"} handleChange={this.props.handleChange} name={"SecondShift1"} SerialNum={2} iconText={'numbered list'} />
                <DataLineIcon ValueOfField={this.props.PricePerUnit} Datatext={"מחיר ליחידה"} handleChange={this.props.handleChange} name={"PricePerUnit1"} SerialNum={3} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.Advertise} Datatext={"פרסום"} handleChange={this.props.handleChange} name={"Advertising1"} SerialNum={4} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.QA} Datatext={"בקרת איכות"} handleChange={this.props.handleChange} name={"QA1"} SerialNum={5} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.ResearchAndDevelopment} Datatext={"מחקר ופיתוח"} handleChange={this.props.handleChange} name={"ReasearchDevelopment1"} SerialNum={6} iconText={'dollar'} />
                <DataLineIcon ValueOfField={this.props.AgentCommision} Datatext={"עמלת סוכנים"} handleChange={this.props.handleChange} name={"AgentsCommision1"} SerialNum={7} iconText={'dollar'} />

            </div>
        )
    }
}

export default ProductData;