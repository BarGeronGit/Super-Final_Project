import React from 'react';
import DataLineIcon from './DataLineIcon';

class ProductDataFunding extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="GroupOfDecisions">
                <h3 className="HeadlineDecision">מימון</h3>
                <DataLineIcon ValueOfField={this.props.LongTimeLoan} Datatext={"הלוואה לזמן ארוך"} handleChange={this.props.handleChange} name={"LongTimeLoan"} SerialNum={22} iconText={'dollar'}/>
                <DataLineIcon ValueOfField={this.props.ShortTimeLoan} Datatext={"הלוואה לזמן קצר"} handleChange={this.props.handleChange} name={"ShortTimeLoan"} SerialNum={23} iconText={'dollar'}/>
                <DataLineIcon ValueOfField={this.props.BillsDeposit} Datatext={"ניכיון שטרות"} handleChange={this.props.handleChange} name={"BillsDeposit"} SerialNum={24} iconText={'dollar'}/>
                <DataLineIcon ValueOfField={this.props.ShortLoanPay} Datatext={"החזר הלוואה לזמן ארוך"} handleChange={this.props.handleChange} name={"ShortLoanPay"} SerialNum={25} iconText={'dollar'}/>
            </div>
        )
    }
}

export default ProductDataFunding;